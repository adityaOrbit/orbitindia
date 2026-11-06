"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, Building, User, Calendar, MessageSquare } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Simulate submission or call API
      await new Promise((r) => setTimeout(r, 800));
      const generatedRef = `ORB-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(generatedRef);
      setSubmitted(true);
    } catch {
      // Handle error gracefully
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center shadow-xs">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h4 className="mt-3 text-base font-bold text-emerald-950">
          {itemType === "event" ? "Stall Meeting Request Received!" : "Technical Inquiry Received!"}
        </h4>
        <p className="mt-1 text-xs text-emerald-800">
          Reference ID: <strong className="font-mono text-emerald-900">{refId}</strong>
        </p>
        <p className="mt-2 text-xs leading-relaxed text-emerald-700">
          Our application engineering specialist for <strong className="text-emerald-900">{itemTitle}</strong> will
          contact you within 4 business hours with full technical documentation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
      <div className="border-b border-slate-200 pb-3">
        <span className="chip chip-accent text-[11px] font-bold">
          {itemType === "event" ? "Exhibition Consultation" : "Official RFQ / Consultation"}
        </span>
        <h3 className="mt-2 text-base font-semibold text-[#0056B3]">
          {itemType === "event"
            ? `Book a Meeting at Our Stall`
            : `Request Quotation & Tech Specs`}
        </h3>
        <p className="mt-1 text-xs text-slate-600">
          {itemType === "event"
            ? `Schedule dedicated time with Orbit specialists at ${eventVenue || "our stall"}.`
            : `Get official pricing, ASTM test protocols, and delivery schedules for ${itemTitle}.`}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
            Full Name *
          </label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Dr. / Mr. / Ms. Scientist Name"
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden focus:ring-1 focus:ring-[#0056B3]"
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
              Work Email *
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden focus:ring-1 focus:ring-[#0056B3]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
              Phone / Mobile *
            </label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden focus:ring-1 focus:ring-[#0056B3]"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
            Company / Institution / Laboratory *
          </label>
          <div className="relative mt-1">
            <Building className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              required
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="e.g. NTPC, Tata Steel, CSIR, IIT, SGS..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden focus:ring-1 focus:ring-[#0056B3]"
            />
          </div>
        </div>

        {itemType === "event" && (
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
              Preferred Meeting Date / Time
            </label>
            <div className="relative mt-1">
              <Calendar className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="e.g. Day 1 afternoon (2:00 PM)"
                className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden focus:ring-1 focus:ring-[#0056B3]"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
            Specific Requirements / Notes
          </label>
          <div className="relative mt-1">
            <MessageSquare className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-400" />
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Mention sample types, required standards (ASTM/ISO), or desired demo..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden focus:ring-1 focus:ring-[#0056B3]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-accent mt-2 w-full flex items-center justify-center gap-2 text-xs font-bold shadow-md cursor-pointer disabled:opacity-50"
        >
          {submitting ? (
            "Submitting..."
          ) : (
            <>
              <Send className="h-3.5 w-3.5" />
              {itemType === "event" ? "Confirm Stall Meeting Request" : "Submit Technical Inquiry"}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
