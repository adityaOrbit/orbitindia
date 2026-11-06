"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, MapPin, Shield } from "lucide-react";
import { trackGenerateLead } from "@/lib/analytics";

export function HomeEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    productOrApplication: "",
    requirements: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please accept the consent terms to proceed.");
      return;
    }
    trackGenerateLead({
      formId: "home_enquiry_form",
      formName: "Home Page Enquiry Form",
      productOrApplication: formData.productOrApplication,
      company: formData.company,
      city: formData.city,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[#15803d]" />
        <h3 className="mt-4 text-2xl font-black text-[#002f49]">Enquiry Submitted Successfully</h3>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Thank you, <span className="font-bold text-slate-800">{formData.fullName}</span>. Our technical sales
          and engineering team will review your testing requirements and connect with you promptly.
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Urgent requirement? Call our corporate office directly at{" "}
          <a href="tel:+914067216354" className="font-semibold text-[#c4620a] hover:underline">
            +91 40 6721 6354
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              fullName: "",
              company: "",
              email: "",
              phone: "",
              city: "",
              productOrApplication: "",
              requirements: "",
              consent: false,
            });
            setSubmitted(false);
          }}
          className="btn btn-outline mt-6"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div id="enquiry" className="scroll-mt-28 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      {/* Left: Head Office Card */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <span className="eyebrow text-[#c4620a]">Head Office</span>
          <h3 className="mt-1 text-xl font-black text-[#002f49]">Orbit Technologies Pvt. Ltd.</h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Corporate Headquarters &amp; Central Testing Facility
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#c4620a]" />
              <address className="not-italic leading-relaxed">
                B-50, Industrial Estate, Sanath Nagar,<br />
                Hyderabad – 500018, Telangana, India
              </address>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#c4620a]" />
              <a
                href="tel:+914067216354"
                className="font-semibold text-[#002f49] hover:text-[#c4620a] transition"
              >
                +91 40 6721 6354
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#c4620a]" />
              <a
                href="mailto:orbit@orbitindia.com"
                className="font-semibold text-[#c4620a] hover:underline"
              >
                orbit@orbitindia.com
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Why submit an enquiry with Orbit?
            </p>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4620a]"></span>
                Application specialist consultation for ASTM / ISO test standards
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4620a]"></span>
                Official quotations with comprehensive warranty and installation details
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4620a]"></span>
                Dedicated pan-India service response across 14 branch cities
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right: Enquiry Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
      >
        <h3 className="text-xl font-black text-[#002f49] sm:text-2xl">
          Request Instrument Details &amp; Quotation
        </h3>
        <p className="mt-1.5 text-sm text-slate-600">
          Fill out the details below. Our technical specialists will respond with complete specifications and pricing.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label htmlFor="enquiry-name" className="label">
              Full Name <span className="text-[#c4620a]">*</span>
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              className="input"
              placeholder="e.g. Dr. Rajesh Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          {/* Company / Organisation */}
          <div>
            <label htmlFor="enquiry-company" className="label">
              Company / Organisation <span className="text-[#c4620a]">*</span>
            </label>
            <input
              id="enquiry-company"
              type="text"
              required
              className="input"
              placeholder="e.g. National Power / IIT Delhi"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          {/* Business Email */}
          <div>
            <label htmlFor="enquiry-email" className="label">
              Business Email <span className="text-[#c4620a]">*</span>
            </label>
            <input
              id="enquiry-email"
              type="email"
              required
              className="input"
              placeholder="name@organisation.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="enquiry-phone" className="label">
              Phone Number <span className="text-[#c4620a]">*</span>
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              required
              className="input"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="enquiry-city" className="label">
              City <span className="text-[#c4620a]">*</span>
            </label>
            <input
              id="enquiry-city"
              type="text"
              required
              className="input"
              placeholder="e.g. Hyderabad / Mumbai"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>

          {/* Product or Application */}
          <div>
            <label htmlFor="enquiry-product" className="label">
              Product or Application
            </label>
            <input
              id="enquiry-product"
              type="text"
              className="input"
              placeholder="e.g. Bomb Calorimeter, Parr Reactor, TGA"
              value={formData.productOrApplication}
              onChange={(e) => setFormData({ ...formData, productOrApplication: e.target.value })}
            />
          </div>

          {/* Your Requirements */}
          <div className="sm:col-span-2">
            <label htmlFor="enquiry-requirements" className="label">
              Your Requirements <span className="text-[#c4620a]">*</span>
            </label>
            <textarea
              id="enquiry-requirements"
              required
              rows={4}
              className="input resize-y"
              placeholder="Please mention your sample type and test standard, e.g. ASTM D5865, ISO 1928, temperature range, sample throughput, or custom pressure specifications…"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="mt-5 flex items-start gap-3">
          <input
            id="enquiry-consent"
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#c4620a] focus:ring-[#c4620a]"
          />
          <label htmlFor="enquiry-consent" className="text-xs leading-relaxed text-slate-600 cursor-pointer">
            I agree to be contacted by Orbit Technologies regarding my enquiry and have read the{" "}
            <a href="#privacy" className="text-[#c4620a] underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit CTA */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <button type="submit" className="btn btn-accent w-full sm:w-auto">
            <Send className="h-4 w-4" /> Send Enquiry
          </button>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500">
            <Shield className="h-3.5 w-3.5 text-emerald-600" />
            Confidential &amp; verified laboratory response
          </span>
        </div>
      </form>
    </div>
  );
}
