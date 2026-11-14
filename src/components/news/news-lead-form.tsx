"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { trackGenerateLead } from "@/lib/analytics";
import { FORM_FALLBACK_MESSAGE, submitForm } from "@/lib/submit-form";

interface NewsLeadFormProps {
  itemTitle: string;
  itemType: "news" | "event";
  eventVenue?: string;
}

export function NewsLeadForm({ itemTitle, itemType, eventVenue }: NewsLeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setError(null);
    try {
      const { referenceId } = await submitForm("News & Events", {
        "Request Type": itemType === "event" ? "Stall meeting" : "Technical inquiry",
        About: itemTitle,
        Venue: eventVenue,
        Name: fullName,
        Email: email,
        Phone: phone,
        Company: organization,
        "Preferred Date": preferredDate,
        Notes: notes,
      });
      setRefId(referenceId);
      setSubmitted(true);
      trackGenerateLead({
        formId: itemType === "event" ? "event_stall_meeting" : "news_inquiry",
        formName: itemType === "event" ? "Event Stall Meeting Request" : "News Technical Inquiry",
        productOrApplication: itemTitle,
        company: organization,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : FORM_FALLBACK_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-md border border-[var(--line)] p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <h3 className="mt-3 text-xl font-semibold text-[var(--ink)]">
          {itemType === "event" ? "Stall Meeting Request Received!" : "Technical Inquiry Received!"}
        </h3>
        <p className="mt-2 text-sm text-[var(--ink-2)]">
          Reference ID: <strong className="font-semibold tnum text-[var(--ink)]">{refId}</strong>
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--ink-3)]">
          Our application engineering specialist for <strong className="text-[var(--ink)]">{itemTitle}</strong> will
          contact you within 4 business hours with full technical documentation.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="section-title">
        {itemType === "event"
          ? `Book a Meeting at Our Stall`
          : `Request Quotation & Tech Specs`}
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
        {itemType === "event"
          ? `Schedule dedicated time with Orbit specialists at ${eventVenue || "our stall"}.`
          : `Get official pricing, ASTM test protocols, and delivery schedules for ${itemTitle}.`}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="label">Full Name *</span>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Dr. / Mr. / Ms. Scientist Name"
            className="input"
          />
        </label>

        <label className="block">
          <span className="label">Work Email *</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@organization.com"
            className="input"
          />
        </label>

        <label className="block">
          <span className="label">Phone / Mobile *</span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="input"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="label">Company / Institution / Laboratory *</span>
          <input
            type="text"
            required
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="e.g. NTPC, Tata Steel, CSIR, IIT, SGS..."
            className="input"
          />
        </label>

        {itemType === "event" && (
          <label className="block sm:col-span-2">
            <span className="label">Preferred Meeting Date / Time</span>
            <input
              type="text"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              placeholder="e.g. Day 1 afternoon (2:00 PM)"
              className="input"
            />
          </label>
        )}

        <label className="block sm:col-span-2">
          <span className="label">Specific Requirements / Notes</span>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Mention sample types, required standards (ASTM/ISO), or desired demo..."
            className="input"
          />
        </label>

        {error && (
          <p role="alert" className="rounded-[0.25rem] border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 sm:col-span-2">
            {error}
          </p>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-accent w-full sm:w-auto"
          >
            {submitting
              ? "Submitting..."
              : itemType === "event"
                ? "Confirm Stall Meeting Request"
                : "Submit Technical Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
