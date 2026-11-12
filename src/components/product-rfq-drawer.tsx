"use client";

import { useEffect, useState } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  MessageCircle,
  Building2,
  Mail,
  User,
  FlaskConical,
  Clock,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/data/site";
import type { Product } from "@/data/products";
import { trackGenerateLead } from "@/lib/analytics";
import { FORM_FALLBACK_MESSAGE, submitForm } from "@/lib/submit-form";

interface ProductRfqDrawerProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  skuCode?: string;
}

export function ProductRfqDrawer({
  product,
  isOpen,
  onClose,
  skuCode,
}: ProductRfqDrawerProps) {
  const formId = `rfq-${(product.slug || "form").replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    applicationType: "",
    timeline: "1-3 months",
    notes: "",
  });

  // Handle ESC key press and scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setSubmitError(null);
    try {
      const { referenceId } = await submitForm("Product Quote Drawer", {
        Product: product.name,
        "Catalogue Code": skuCode || product.slug,
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Company: formData.organization,
        "Sample / Application": formData.applicationType,
        Timeline: formData.timeline,
        Notes: formData.notes,
      });
      setRfqNumber(referenceId);
      setIsSubmitted(true);
      trackGenerateLead({
        formId: "rfq_drawer",
        formName: "Product RFQ Drawer Form",
        productOrApplication: product.name,
        company: formData.organization,
      });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : FORM_FALLBACK_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setRfqNumber("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      applicationType: "",
      timeline: "1-3 months",
      notes: "",
    });
    onClose();
  };

  const salesPhoneClean = site.phones.sales1.replace(/[^+\d]/g, "");
  const whatsappUrl = `https://wa.me/${salesPhoneClean.replace("+", "")}?text=${encodeURIComponent(
    `Hello Orbit Technologies team, I would like to request an official quotation for ${product.name} (Code: ${skuCode || product.slug}).`
  )}`;

  // Completely unmounted from DOM when closed so it CANNOT ever block clicks
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${formId}-title`}
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative z-10 flex h-full w-full max-w-xl flex-col bg-white shadow-2xl transition-transform duration-300 ease-out animate-in slide-in-from-right">
        {/* Header */}
        <div className="border-b border-slate-200 bg-[#0056B3] px-6 py-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">
                  Quick RFQ
                </span>
                {skuCode && (
                  <span className="font-mono text-xs text-slate-200">
                    {skuCode}
                  </span>
                )}
              </div>
              <h2
                id={`${formId}-title`}
                className="mt-1 text-xl font-bold tracking-tight text-white"
              >
                Request Quotation
              </h2>
              <p className="mt-0.5 text-xs text-slate-200 line-clamp-1">
                {product.name}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg p-2 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close quote drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[#0056B3]">
                Quote Request Received!
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Thank you. Reference ID:{" "}
                <span className="font-mono font-bold text-[#d00000]">
                  {rfqNumber}
                </span>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 max-w-md mx-auto">
                Our technical sales team in Hyderabad will review your testing specifications and provide a formal commercial proposal along with site readiness requirements within 4 business hours.
              </p>

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">
                <h4 className="text-xs font-bold text-slate-500">
                  Need Urgent Assistance?
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  Connect with our laboratory instrumentation specialists directly:
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <a
                    href={`tel:${salesPhoneClean}`}
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#0056B3] hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#d00000]" /> Call Direct
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="cursor-pointer mt-6 inline-flex items-center justify-center rounded-lg bg-[#0056B3] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#004494] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="rounded-lg bg-[#ebf3fc] p-3.5 border border-[#cce1f9] text-xs text-[#00387a] flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#0056B3] mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0056B3]">Direct OEM Pricing & Support:</span>{" "}
                  Includes factory warranty, commissioning in India, user training, and hydrotest certification.
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Full Name *
                  </label>
                  <div className="relative mt-1">
                    <User className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Dr. Rajesh Kumar"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none focus:ring-1 focus:ring-[#0056B3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Work Email *
                  </label>
                  <div className="relative mt-1">
                    <Mail className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="r.kumar@lab.org"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none focus:ring-1 focus:ring-[#0056B3]"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Organization */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Phone / Mobile *
                  </label>
                  <div className="relative mt-1">
                    <Phone className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none focus:ring-1 focus:ring-[#0056B3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Company / Institution *
                  </label>
                  <div className="relative mt-1">
                    <Building2 className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      placeholder="e.g. NTPC / CSIR / Reliance"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none focus:ring-1 focus:ring-[#0056B3]"
                    />
                  </div>
                </div>
              </div>

              {/* Application & Timeline */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Testing Sample / Material
                  </label>
                  <div className="relative mt-1">
                    <FlaskConical className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={formData.applicationType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          applicationType: e.target.value,
                        })
                      }
                      placeholder="e.g. Coal & Coke, Biofuel, Minerals"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none focus:ring-1 focus:ring-[#0056B3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Procurement Timeline
                  </label>
                  <div className="relative mt-1">
                    <Clock className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none focus:ring-1 focus:ring-[#0056B3]"
                    >
                      <option value="immediate">Immediate (Ready to order)</option>
                      <option value="1-3 months">1 – 3 months</option>
                      <option value="3-6 months">3 – 6 months</option>
                      <option value="budgetary">Budgetary quotation only</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes / Special Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Testing Requirements / Scope Notes
                </label>
                <div className="relative mt-1">
                  <FileText className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Mention any specific standards (ASTM, ISO), sample throughput per day, or laboratory facility constraints..."
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none focus:ring-1 focus:ring-[#0056B3]"
                  />
                </div>
              </div>

              {submitError && (
                <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                  {submitError}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer btn btn-accent w-full justify-center py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Processing Request...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" /> Submit Request for Quotation
                    </span>
                  )}
                </button>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  Zero commitment. Detailed specification and commercial terms delivered to your inbox.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 text-xs text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Official Orbit Technologies Partner
          </span>
          <a
            href={`tel:${salesPhoneClean}`}
            className="font-semibold text-[#0056B3] hover:underline"
          >
            {site.phones.sales1}
          </a>
        </div>
      </div>
    </div>
  );
}
