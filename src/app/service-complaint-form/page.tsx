"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  Check,
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
          { label: "Our Services", href: "/our-services/" },
          { label: "Service Complaint Form" },
        ]}
      />

      <PageHero
        eyebrow="Central Service Desk"
        title="Service Complaint & Maintenance Request"
        subtitle="Log an official service ticket for breakdown repairs, preventive maintenance (AMC/CMC), oxygen vessel 300-bar hydrotesting, or calibration."
      />

      <div className="container-x py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            {ticketResult?.success ? (
              <div className="rounded-md border border-[var(--line)] p-8 text-center sm:p-10">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#15803d]" />
                <p className="mt-4 text-sm font-medium text-[#15803d]">
                  Service Ticket Logged Successfully
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-[var(--ink)] tnum">
                  Ticket Reference #{ticketResult.ticketNumber}
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-[15px] leading-relaxed text-[var(--ink-2)]">
                  Your request has been registered in the Orbit Service Care system. A factory-trained service engineer from the nearest branch ({formData.nearestBranch}) will review your instrument details and reach out shortly.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {ticketResult.whatsappUrl && (
                    <a
                      href={ticketResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn whitespace-normal bg-[#15803d] text-center text-white hover:bg-[#166534]"
                    >
                      Connect on WhatsApp with Ticket #{ticketResult.ticketNumber}
                    </a>
                  )}
                  <button
                    type="button"
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
              <div className="rounded-md border border-[var(--line)] p-5 sm:p-7">
                <div className="border-b border-[var(--line)] pb-5">
                  <h2 className="section-title">
                    Instrument Service Registration
                  </h2>
                  <p className="mt-1.5 text-[13px] text-[var(--ink-3)]">
                    Fields marked with an asterisk (<span className="text-[#d00000]">*</span>) are required.
                  </p>
                </div>

                {errorMessage && (
                  <div role="alert" className="mt-6 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-[15px] text-red-800">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-8">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      1. Organization &amp; Contact Details
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="label">
                          Contact Person Name <span className="text-[#d00000]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) =>
                            setFormData({ ...formData, contactPerson: e.target.value })
                          }
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="input"
                        />
                      </div>

                      <div>
                        <label className="label">
                          Company / Institution Name <span className="text-[#d00000]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="e.g. NTPC Ramagundam / IIT Madras"
                          className="input"
                        />
                      </div>

                      <div>
                        <label className="label">
                          Mobile / Phone Number <span className="text-[#d00000]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="e.g. +91 98765 43210"
                          className="input"
                        />
                      </div>

                      <div>
                        <label className="label">
                          Email Address <span className="text-[#d00000]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="e.g. r.sharma@ntpc.co.in"
                          className="input"
                        />
                      </div>

                      <div>
                        <label className="label">
                          City / Plant Location <span className="text-[#d00000]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="e.g. Singrauli / Jamnagar"
                          className="input"
                        />
                      </div>

                      <div>
                        <label className="label">
                          Nearest Orbit Branch
                        </label>
                        <select
                          value={formData.nearestBranch}
                          onChange={(e) =>
                            setFormData({ ...formData, nearestBranch: e.target.value })
                          }
                          className="input"
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
                  <div className="border-t border-[var(--line)] pt-6">
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      2. Equipment Details
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <label className="label">
                          Brand / Manufacturer
                        </label>
                        <select
                          value={formData.brand}
                          onChange={(e) =>
                            setFormData({ ...formData, brand: e.target.value })
                          }
                          className="input"
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
                        <label className="label">
                          Instrument Model <span className="text-[#d00000]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.instrumentModel}
                          onChange={(e) =>
                            setFormData({ ...formData, instrumentModel: e.target.value })
                          }
                          placeholder="e.g. Parr 6400 / TGA 3000 / CS-8800"
                          className="input"
                        />
                      </div>

                      <div>
                        <label className="label">
                          Serial Number (if known)
                        </label>
                        <input
                          type="text"
                          value={formData.serialNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, serialNumber: e.target.value })
                          }
                          placeholder="e.g. 6400-10492"
                          className="input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Request Nature */}
                  <div className="border-t border-[var(--line)] pt-6">
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      3. Service Nature &amp; Fault Description
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="label">
                          Service Type Required
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceType: e.target.value })
                          }
                          className="input"
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
                        <label className="label">
                          Urgency Level
                        </label>
                        <select
                          value={formData.urgency}
                          onChange={(e) =>
                            setFormData({ ...formData, urgency: e.target.value })
                          }
                          className="input"
                        >
                          <option value="Standard">Standard (2 to 3 days)</option>
                          <option value="High Priority">High Priority (Within 24 hours)</option>
                          <option value="Emergency (Plant Down)">Emergency / Critical (Equipment Stopped)</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="label">
                        Detailed Problem Description / Error Codes <span className="text-[#d00000]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.issueDescription}
                        onChange={(e) =>
                          setFormData({ ...formData, issueDescription: e.target.value })
                        }
                        placeholder="Please describe symptoms, error messages shown on screen, pressure leaks, or parts needed..."
                        className="input resize-y"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[13px] text-[var(--ink-3)]">
                      By submitting, you will receive an official ticket number and instant WhatsApp escalation.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full shrink-0 sm:w-auto"
                    >
                      {isSubmitting ? "Generating Ticket..." : "Submit Service Ticket"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar Service Contacts */}
          <aside className="space-y-8">
            <div>
              <p className="text-[13px] font-medium text-[#0056B3]">Direct Service Lines</p>
              <h3 className="mt-1 text-lg font-semibold text-[var(--ink)]">Central Service Control Desk</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
                For immediate assistance during operating hours (Mon–Sat):
              </p>

              <dl className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)] text-[15px]">
                <div className="flex items-start gap-2.5 py-3">
                  <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <div>
                    <dt className="text-[13px] text-[var(--ink-3)]">Toll-Free / Service Hotline:</dt>
                    <dd className="m-0">
                      <a href="tel:+918712613589" className="font-semibold text-[var(--ink)] tnum hover:text-[#0056B3]">
                        +91 87126 13589
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 py-3">
                  <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <div>
                    <dt className="text-[13px] text-[var(--ink-3)]">Alternate Technical Desk:</dt>
                    <dd className="m-0">
                      <a href="tel:+918143885547" className="font-semibold text-[var(--ink)] tnum hover:text-[#0056B3]">
                        +91 81438 85547
                      </a>
                      {" / "}
                      <a href="tel:+918143885540" className="font-semibold text-[var(--ink)] tnum hover:text-[#0056B3]">
                        +91 81438 85540
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 py-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <div>
                    <dt className="text-[13px] text-[var(--ink-3)]">Official Email:</dt>
                    <dd className="m-0">
                      <a href="mailto:servicecare@orbitindia.com" className="font-semibold text-[#0056B3] hover:underline">
                        servicecare@orbitindia.com
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[var(--ink)]">Service Commitments</h4>
              <ul className="mt-3 space-y-2 text-[15px] text-[var(--ink-2)]">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <span>Response within 2 hours of ticket generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <span>Pan-India on-site support across 14 locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <span>Genuine OEM spare parts directly from Hyderabad</span>
                </li>
              </ul>
            </div>

            <Link href="/our-services" className="link-more min-h-[44px] whitespace-normal lg:min-h-0">
              Learn more about AMC &amp; Hydrotesting <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
