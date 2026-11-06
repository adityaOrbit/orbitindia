"use client";

import { useState } from "react";
import { CheckCircle2, FlaskConical, Send } from "lucide-react";
import { categories, pillars } from "@/data/categories";
import { trackGenerateLead } from "@/lib/analytics";

export function QuoteForm({
  context,
  initialCategory,
}: {
  /** Shown as "Enquiry about …" — typically a product name. */
  context?: string;
  /** Pre-selects the matching category in the "Product of interest" field. */
  initialCategory?: string;
} = {}) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [product, setProduct] = useState(initialCategory ?? "");

  const rootSections = categories.filter((c) => c.parent === null);

  if (sent) {
    return (
      <div className="surface p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#15803d]" />
        <h3 className="mt-4 text-lg font-semibold text-[#0056B3]">
          Thank you{name ? `, ${name.split(" ")[0]}` : ""}!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Your enquiry has been recorded. Our team will get back to you within one working
          day{product ? ` about ${product}` : ""}. For urgent requirements, call{" "}
          <a href="tel:+918143885547" className="font-semibold text-[#d00000] hover:underline">
            +91 - 81438 85547
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn btn-outline mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        trackGenerateLead({
          formId: "quote_form",
          formName: "Quote / General Contact Form",
          productOrApplication: context || product || "General Enquiry",
        });
        setSent(true);
      }}
      className="surface p-6 sm:p-8"
    >
      {context && (
        <p className="mb-5 flex items-center gap-2 rounded-lg border border-blue-200 bg-[#ebf3fc] px-3.5 py-2.5 text-sm font-semibold text-[#0056B3]">
          <FlaskConical className="h-4 w-4 shrink-0" />
          Enquiry about: <span className="font-bold">{context}</span>
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="label">
            Name *
          </label>
          <input
            id="qf-name"
            required
            className="input"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="qf-company" className="label">
            Company / Institution *
          </label>
          <input id="qf-company" required className="input" placeholder="Organisation name" />
        </div>
        <div>
          <label htmlFor="qf-email" className="label">
            Email *
          </label>
          <input id="qf-email" type="email" required className="input" placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="qf-phone" className="label">
            Phone *
          </label>
          <input id="qf-phone" type="tel" required className="input" placeholder="+91 …" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-product" className="label">
            Product of interest
          </label>
          <select
            id="qf-product"
            className="input"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">Select a category (optional)</option>
            {pillars.map((p) => {
              const opts = rootSections.filter((c) => c.pillar === p.key);
              if (!opts.length) return null;
              return (
                <optgroup key={p.key} label={p.name}>
                  {opts.map((c) => (
                    <option key={c.path} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </optgroup>
              );
            })}
            <option value="Other / not sure">Other / not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-message" className="label">
            Your requirement *
          </label>
          <textarea
            id="qf-message"
            required
            rows={5}
            className="input resize-y"
            placeholder="Tell us about your application, sample types, standards you need to comply with, quantity and location…"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-accent mt-6 w-full sm:w-auto">
        Send enquiry <Send className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-slate-500">
        We reply within one working day. Your details are used only to answer your enquiry.
      </p>
    </form>
  );
}