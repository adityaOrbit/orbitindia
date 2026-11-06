# Website forms → Google Sheet

All six website forms (home enquiry, contact/quote, product enquiry, product
quote drawer, service complaint, news & events) post to one Google Apps Script
web app. It adds a row to a tab named after the form. Email alerts are off
(`NOTIFY_EMAIL` is empty): orbitindia.com's DMARC policy rejects mail the
script sends as seo@orbitindia.com. Use the sheet's Tools → Notification
settings if alerts are wanted.

## Current setup

- Sheet: **Orbit Website Enquiries** (owner `seo@orbitindia.com`),
  https://docs.google.com/spreadsheets/d/19kREOF5wmB_wTe4wGAiboMx06DX0MuYd0vIVTuniEfw/edit
- Script: standalone Apps Script project **Orbit Website Forms** in the same
  account, writing to the sheet above via `SHEET_ID`.
- Web app URL: set as the default `NEXT_PUBLIC_FORMS_ENDPOINT` in
  `.github/workflows/deploy.yml`.

## Setting it up from scratch

1. Create a Google Sheet, e.g. **Orbit Website Enquiries**, signed in with the
   Google account that should own the data.
2. In the sheet, open **Extensions → Apps Script**. Delete the sample code and
   paste in the whole of `form-handler.gs`. Save.
3. Click **Deploy → New deployment**. Under "Select type", choose **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy** and approve the permissions Google asks for (it needs to
   edit this sheet and send email as you).
5. Copy the **Web app URL** (ends in `/exec`).
6. In GitHub: **Settings → Secrets and variables → Actions → Variables → New
   repository variable**, name `NEXT_PUBLIC_FORMS_ENDPOINT`, value = that URL.
   Then re-run the "Deploy to GitHub Pages" workflow.

For local testing, put the same URL in `.env.local` as
`NEXT_PUBLIC_FORMS_ENDPOINT=...`.

## Changing the script later

After editing the code, use **Deploy → Manage deployments → (pencil) →
Version: New version → Deploy**. This keeps the same URL. Creating a *new*
deployment instead gives a new URL, which would then need updating in GitHub.

Opening the web app URL in a browser should show
`{"ok":true,"service":"Orbit website forms"}`.
