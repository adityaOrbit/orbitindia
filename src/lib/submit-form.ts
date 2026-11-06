/**
 * Sends a website form submission to the Google Apps Script web app that
 * appends it to a Google Sheet and emails a notification.
 *
 * The site is a static export (GitHub Pages), so there is no server of our
 * own; the endpoint URL is public by design and set at build time through
 * NEXT_PUBLIC_FORMS_ENDPOINT. See scripts/google-apps-script/README.md.
 */

export type FormType =
  | "Home Enquiry"
  | "Contact Quote"
  | "Product Enquiry"
  | "Product Quote Drawer"
  | "Service Complaint"
  | "News & Events";

const PREFIX: Record<FormType, string> = {
  "Home Enquiry": "ORB-ENQ",
  "Contact Quote": "ORB-ENQ",
  "Product Enquiry": "ORB-RFQ",
  "Product Quote Drawer": "ORB-RFQ",
  "Service Complaint": "ORB-SRV",
  "News & Events": "ORB-INQ",
};

export const FORM_FALLBACK_MESSAGE =
  "We couldn't send your request. Please try again, or call +91 40 6721 6354 / email orbit@orbitindia.com.";

function makeReferenceId(formType: FormType) {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `${PREFIX[formType]}-${n}`;
}

export async function submitForm(
  formType: FormType,
  fields: Record<string, string | number | boolean | undefined | null>
): Promise<{ referenceId: string }> {
  const endpoint = process.env.NEXT_PUBLIC_FORMS_ENDPOINT;
  if (!endpoint) {
    throw new Error(FORM_FALLBACK_MESSAGE);
  }

  const referenceId = makeReferenceId(formType);
  const clean: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null || value === "") continue;
    clean[key] = String(value).slice(0, 5000);
  }

  const payload = {
    formType,
    referenceId,
    page: typeof window !== "undefined" ? window.location.href : "",
    submittedAt: new Date().toISOString(),
    fields: clean,
  };

  let res: Response;
  try {
    // text/plain keeps this a "simple" request, so the browser skips the
    // CORS preflight that Apps Script web apps cannot answer.
    res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
  } catch {
    throw new Error(FORM_FALLBACK_MESSAGE);
  }

  let data: { ok?: boolean; error?: string } = {};
  try {
    data = await res.json();
  } catch {
    // fall through to the status check below
  }
  if (!res.ok || !data.ok) {
    throw new Error(FORM_FALLBACK_MESSAGE);
  }
  return { referenceId };
}
