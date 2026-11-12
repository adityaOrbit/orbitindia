"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { branchOffices } from "@/data/site";
import { trackGenerateLead } from "@/lib/analytics";
import { submitForm } from "@/lib/submit-form";

export default function ServiceComplaintFormPage() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    nearestBranch: "Hyderabad",
    instrumentModel: "",
    serialNumber: "",
    brand: "Parr Instrument Company",
    serviceType: "Breakdown / Repair",
    urgency: "Standard",
    issueDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketResult, setTicketResult] = useState<{
    success: boolean;
    ticketNumber?: string;
    whatsappUrl?: string;
    message?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const { referenceId } = await submitForm("Service Complaint", {
        "Contact Person": formData.contactPerson,
        Company: formData.company,
        Phone: formData.phone,
        Email: formData.email,
        City: formData.city,
        "Nearest Branch": formData.nearestBranch,
        Brand: formData.brand,
        "Instrument Model": formData.instrumentModel,
        "Serial Number": formData.serialNumber,
        "Service Type": formData.serviceType,
        Urgency: formData.urgency,
        "Issue Description": formData.issueDescription,
      });

      setTicketResult({
        success: true,
        ticketNumber: referenceId,
        whatsappUrl: `https://wa.me/918143885547?text=${encodeURIComponent(
          `Hello Orbit Service Desk, I have lodged Service Ticket #${referenceId} for model ${formData.instrumentModel || "(not specified)"} (Serial: ${formData.serialNumber || "not specified"}).`
        )}`,
        message: "Service request registered successfully with Orbit Service Care.",
      });
      trackGenerateLead({
        formId: "service_complaint_form",
        formName: "Service Complaint Form",
        productOrApplication: formData.instrumentModel,
        company: formData.company,
        city: formData.city,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(
        msg || "An unexpected error occurred. Please contact us directly at +91 8712613589."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/our-services/" },
          { label: "Service Complaint Form" },
        ]}
      />

      <PageHero
        eyebrow="Central Service Desk"
        title="Service Complaint & Maintenance Request"
        subtitle="Log an official service ticket for breakdown repairs, preventive maintenance (AMC/CMC), oxygen vessel 300-bar hydrotesting, or calibration."
      />

      <div className="container-x py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            {ticketResult?.success ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Service Ticket Logged Successfully
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-[#0056B3]">
                  Ticket Reference #{ticketResult.ticketNumber}
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-sm text-slate-700 leading-relaxed">
                  Your request has been registered in the Orbit Service Care system. A factory-trained service engineer from the nearest branch ({formData.nearestBranch}) will review your instrument details and reach out shortly.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {ticketResult.whatsappUrl && (
                    <a
                      href={ticketResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                    >
                      Connect on WhatsApp with Ticket #{ticketResult.ticketNumber}
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setTicketResult(null);
                      setFormData({
                        contactPerson: "",
                        company: "",
                        phone: "",
                        email: "",
                        city: "",
                        nearestBranch: "Hyderabad",
                        instrumentModel: "",
                        serialNumber: "",
                        brand: "Parr Instrument Company",
                        serviceType: "Breakdown / Repair",
                        urgency: "Standard",
                        issueDescription: "",
                      });
                    }}
                    className="btn btn-outline"
                  >
                    Log Another Complaint
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="border-b border-slate-100 pb-5">
                  <h2 className="text-xl font-bold text-[#0056B3]">
                    Instrument Service Registration
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-800">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d00000]">
                      1. Organization &amp; Contact Details
                    </h3>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Contact Person Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) =>
                            setFormData({ ...formData, contactPerson: e.target.value })
                          }
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Company / Institution Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="e.g. NTPC Ramagundam / IIT Madras"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Mobile / Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="e.g. +91 98765 43210"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="e.g. r.sharma@ntpc.co.in"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          City / Plant Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="e.g. Singrauli / Jamnagar"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Nearest Orbit Branch
                        </label>
                        <select
                          value={formData.nearestBranch}
                          onChange={(e) =>
                            setFormData({ ...formData, nearestBranch: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden bg-white"
                        >
                          {branchOffices.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Equipment Information */}
                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d00000]">
                      2. Equipment Details
                    </h3>
                    <div className="mt-3 grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Brand / Manufacturer
                        </label>
                        <select
                          value={formData.brand}
                          onChange={(e) =>
                            setFormData({ ...formData, brand: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden bg-white"
                        >
                          <option value="Parr Instrument Company">Parr Instrument Company</option>
                          <option value="Orlab / Orbit Technologies">Orlab / Orbit Technologies</option>
                          <option value="NCS Testing Technology">NCS Testing Technology</option>
                          <option value="NC Technologies">NC Technologies</option>
                          <option value="Elite Thermal Systems">Elite Thermal Systems</option>
                          <option value="Sylab">Sylab</option>
                          <option value="SIEBTECHNIK TEMA">SIEBTECHNIK TEMA</option>
                          <option value="A&D Company">A&D Company</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Instrument Model <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.instrumentModel}
                          onChange={(e) =>
                            setFormData({ ...formData, instrumentModel: e.target.value })
                          }
                          placeholder="e.g. Parr 6400 / TGA 3000 / CS-8800"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Serial Number (if known)
                        </label>
                        <input
                          type="text"
                          value={formData.serialNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, serialNumber: e.target.value })
                          }
                          placeholder="e.g. 6400-10492"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Request Nature */}
                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d00000]">
                      3. Service Nature &amp; Fault Description
                    </h3>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Service Type Required
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceType: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden bg-white"
                        >
                          <option value="Breakdown / Repair">Breakdown / Emergency Repair</option>
                          <option value="Preventive Maintenance AMC/CMC">Preventive Maintenance (AMC / CMC)</option>
                          <option value="Oxygen Bomb 300-Bar Hydrotesting">Oxygen Bomb 300-Bar Hydrotesting</option>
                          <option value="Calibration & Validation">Calibration &amp; IQ/OQ Validation</option>
                          <option value="Installation & Commissioning">Installation &amp; Commissioning</option>
                          <option value="Spare Parts & Consumables">Spare Parts &amp; Consumables Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Urgency Level
                        </label>
                        <select
                          value={formData.urgency}
                          onChange={(e) =>
                            setFormData({ ...formData, urgency: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#d00000] focus:outline-hidden bg-white"
                        >
                          <option value="Standard">Standard (2 to 3 days)</option>
                          <option value="High Priority">High Priority (Within 24 hours)</option>
                          <option value="Emergency (Plant Down)">Emergency / Critical (Equipment Stopped)</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-700">
                        Detailed Problem Description / Error Codes <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.issueDescription}
                        onChange={(e) =>
                          setFormData({ ...formData, issueDescription: e.target.value })
                        }
                        placeholder="Please describe symptoms, error messages shown on screen, pressure leaks, or parts needed..."
                        className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-xs focus:border-[#d00000] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">
                      By submitting, you will receive an official ticket number and instant WhatsApp escalation.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-accent text-xs px-6 py-2.5 font-bold"
                    >
                      {isSubmitting ? "Generating Ticket..." : "Submit Service Ticket"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar Service Contacts */}
          <div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d00000]">
                  Direct Service Lines
                </span>
                <h3 className="mt-1 font-bold text-base text-[#0056B3]">
                  Central Service Control Desk
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  For immediate assistance during operating hours (Mon–Sat):
                </p>

                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <PhoneCall className="h-4 w-4 text-[#d00000] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0056B3]">Toll-Free / Service Hotline:</p>
                      <a href="tel:+918712613589" className="text-slate-700 hover:text-[#d00000] font-semibold">
                        +91 87126 13589
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <PhoneCall className="h-4 w-4 text-[#d00000] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0056B3]">Alternate Technical Desk:</p>
                      <a href="tel:+918143885547" className="text-slate-700 hover:text-[#d00000] font-semibold">
                        +91 81438 85547
                      </a>
                      {" / "}
                      <a href="tel:+918143885540" className="text-slate-700 hover:text-[#d00000] font-semibold">
                        +91 81438 85540
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 text-[#d00000] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0056B3]">Official Email:</p>
                      <a href="mailto:servicecare@orbitindia.com" className="text-slate-700 hover:text-[#d00000]">
                        servicecare@orbitindia.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Service Commitments
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Response within 2 hours of ticket generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Pan-India on-site support across 14 locations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Genuine OEM spare parts directly from Hyderabad</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-200">
                <Link
                  href="/our-services"
                  className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                >
                  Learn more about AMC &amp; Hydrotesting <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
