/**
 * Orbit Technologies website — form handler (Google Apps Script)
 *
 * Paste this into Extensions → Apps Script of the Google Sheet that should
 * collect website submissions, then deploy it as a Web app (see README.md
 * next to this file). Each form type gets its own tab; new columns are
 * added automatically when a form sends a field the tab hasn't seen yet.
 */

// Who gets an email for every submission. Separate several with commas.
// Left empty: mail sent by this script "from" seo@orbitindia.com is rejected
// by orbitindia.com's DMARC policy (p=reject), so alerts bounce. Use the
// sheet's Tools → Notification settings instead, or set an address on a
// domain that accepts it.
const NOTIFY_EMAIL = "";

// ID of the Google Sheet that stores submissions (the long part of its URL
// between /d/ and /edit). Leave empty if this script is bound to the sheet
// via Extensions → Apps Script.
const SHEET_ID = "19kREOF5wmB_wTe4wGAiboMx06DX0MuYd0vIVTuniEfw";

function sheetFile_() {
  return SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

const FORM_TYPES = [
  "Home Enquiry",
  "Contact Quote",
  "Product Enquiry",
  "Product Quote Drawer",
  "Service Complaint",
  "News & Events",
];

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const formType = String(payload.formType || "");
    if (FORM_TYPES.indexOf(formType) === -1) {
      return json_({ ok: false, error: "Unknown form type" });
    }
    const fields = payload.fields || {};

    // Honeypot: real visitors never fill the hidden "website" field.
    if (fields.website) {
      return json_({ ok: true });
    }
    delete fields.website;

    const row = {
      "Received At": new Date(),
      "Reference ID": String(payload.referenceId || ""),
      "Page": String(payload.page || ""),
    };
    Object.keys(fields).forEach(function (k) {
      row[k] = String(fields[k]).slice(0, 5000);
    });

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      appendRow_(formType, row);
    } finally {
      lock.releaseLock();
    }

    notify_(formType, row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Lets you open the web app URL in a browser to confirm it is deployed.
function doGet() {
  return json_({ ok: true, service: "Orbit website forms" });
}

function appendRow_(formType, row) {
  const ss = sheetFile_();
  const sheet = ss.getSheetByName(formType) || ss.insertSheet(formType);

  let headers = sheet.getLastColumn() > 0
    ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String)
    : [];
  const missing = Object.keys(row).filter(function (k) { return headers.indexOf(k) === -1; });
  if (missing.length) {
    headers = headers.concat(missing);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  const values = headers.map(function (h) {
    const v = row[h] === undefined ? "" : row[h];
    // Stop spreadsheet formula injection from form input.
    return typeof v === "string" && /^[=+\-@]/.test(v) ? "'" + v : v;
  });
  sheet.appendRow(values);
}

function notify_(formType, row) {
  if (!NOTIFY_EMAIL) return;
  const lines = Object.keys(row).map(function (k) { return k + ": " + row[k]; });
  const replyTo = row["Email"] && /@/.test(row["Email"]) ? row["Email"] : undefined;
  const options = { name: "Orbit Website" };
  if (replyTo) options.replyTo = replyTo;
  MailApp.sendEmail(
    NOTIFY_EMAIL,
    "[Website] " + formType + " — " + (row["Name"] || row["Contact Person"] || "New submission") +
      " (" + row["Reference ID"] + ")",
    lines.join("\n") + "\n\nSheet: " + sheetFile_().getUrl(),
    options
  );
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
