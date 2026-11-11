"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackGenerateLead } from "@/lib/analytics";
import { FORM_FALLBACK_MESSAGE, submitForm } from "@/lib/submit-form";

/**
 * Compact email-only newsletter signup for dark backgrounds.
 * Submissions go through the shared forms endpoint under the
 * "News & Events" form type (its own tab in the forms Google Sheet).
 */
export function NewsletterSignup({ source = "Footer" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      await submitForm("News & Events", {
        Request: "Newsletter signup",
        Email: email.trim(),
        Source: source,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : FORM_FALLBACK_MESSAGE);
      setStatus("idle");
      return;
    }
    trackGenerateLead({
      formId: "newsletter_signup",
      formName: `Newsletter Signup (${source})`,
      productOrApplication: "Newsletter",
    });
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div
        role="status"
        className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[0.6rem] border border-emerald-400/30 bg-emerald-400/10 px-4 text-sm font-semibold text-emerald-200 max-w-md"
      >
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        You&apos;re subscribed. Thank you!
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex w-full gap-2" aria-label="Newsletter signup">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[50px] min-w-0 flex-1 rounded-[0.6rem] border border-white/25 bg-white/10 px-4 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/60 focus:bg-white/15"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn min-h-[50px] shrink-0 bg-white !px-5 text-sm font-semibold text-[#001c3d] transition hover:bg-slate-100 disabled:opacity-70"
        >
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
        </button>
      </form>
      {error ? (
        <p role="alert" className="mt-2 text-left text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
