import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Scale,
  ShieldAlert,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use · Orbit Technologies Pvt. Ltd.",
  description:
    "Review the terms and conditions governing the use of the Orbit Technologies website (orbitindia.com), instrument catalog, quotation requests, and technical laboratory documentation.",
};

export default function TermsOfUsePage() {
  const lastUpdated = "November 6, 2026";

  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumb items={[{ label: "Terms of Use" }]} />
      <PageHero
        title="Terms of Use"
        subtitle={`Effective Date & Last Updated: ${lastUpdated} · Orbit Technologies Pvt. Ltd.`}
      />

      <div className="container-x py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          {/* Header intro box */}
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ebf3fc] text-[#0056B3]">
                <Scale className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  Terms &amp; Conditions of Website Use
                </h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Welcome to <span className="font-semibold text-slate-800">orbitindia.com</span>, operated by {site.legalName} (&quot;Orbit Technologies&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Use govern your access to and interaction with our website, online instrument catalogs, technical application notes, and quotation inquiry systems.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  By accessing, browsing, or submitting an inquiry through this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using this website.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ebf3fc] text-xs font-bold text-[#0056B3]">
                1
              </span>
              <h3 className="text-lg font-bold text-slate-900">Nature of Information &amp; Technical Specifications</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              The descriptions, photographs, technical parameters, operating ranges, dimensions, and application notes published on this website are provided for preliminary informational and engineering evaluation purposes.
            </p>
            <div className="space-y-2 rounded-lg bg-amber-50/70 border border-amber-200/60 p-4 text-xs text-amber-900 leading-relaxed">
              <p className="font-semibold flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 text-amber-700 shrink-0" />
                Engineering Specification Notice:
              </p>
              <p>
                Due to continuous research and development, design enhancements, and manufacturer product updates (including those by our international OEM principals such as Parr Instrument Company), equipment specifications, capacities, pressure ratings, materials of construction, and test standard compliances (e.g., ASTM, ISO, DIN, BIS) may be revised without prior notice.
              </p>
              <p>
                Final, binding technical specifications, vessel test certificates, and design parameters are formalized exclusively in official written quotations, technical data sheets, and purchase contracts issued directly by Orbit Technologies.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ebf3fc] text-xs font-bold text-[#0056B3]">
                2
              </span>
              <h3 className="text-lg font-bold text-slate-900">Quotations, Inquiries &amp; Commercial Terms</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Submitting a &quot;Request a Quote&quot;, &quot;Inquire Now&quot;, or product configuration form on this website constitutes a commercial inquiry and does not form a binding contract of sale or purchase order.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                <span>
                  <strong>Official Quotations:</strong> Binding price bids, delivery lead times, shipping freight terms, and GST/customs duties are provided solely through authorized written quotations issued by our sales department.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                <span>
                  <strong>Validity:</strong> All quotations indicate an explicit validity period (typically 30 to 60 days) and are subject to currency exchange rates and statutory tax revisions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                <span>
                  <strong>Purchase Orders:</strong> Supply, delivery, commissioning, and warranty obligations become legally enforceable only upon mutual execution of a formal Purchase Order / Commercial Agreement.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ebf3fc] text-xs font-bold text-[#0056B3]">
                3
              </span>
              <h3 className="text-lg font-bold text-slate-900">Intellectual Property Rights</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              All content on this website—including text, graphics, logos, product catalogs, diagrams, instrument photographs, brand marks, and software code—is the property of {site.legalName} or its respective licensors and OEM principals, protected under Indian and international copyright and trademark laws.
            </p>
            <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-4 space-y-2 text-xs text-slate-600">
              <p>
                <strong>Trademarks:</strong> &quot;Orbit Technologies&quot;, &quot;Orlab&quot;, and associated logos are registered or common law trademarks of Orbit Technologies Pvt. Ltd. &quot;Parr Instrument Company&quot; and other brand names are trademarks of their respective global manufacturers, represented under authorized distribution agreements.
              </p>
              <p>
                <strong>Permitted Use:</strong> You may view, download, and print pages or technical specification sheets for internal institutional or industrial evaluation purposes only. You may not republish, scrape, mirror, or commercially exploit any material from this site without our prior written consent.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ebf3fc] text-xs font-bold text-[#0056B3]">
                4
              </span>
              <h3 className="text-lg font-bold text-slate-900">High-Pressure &amp; Laboratory Safety Responsibility</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Scientific instrumentation—specifically high-pressure reactors, oxygen bomb calorimeters, high-temperature furnaces, gas generators, and pressure vessels—involves specialized chemical, thermal, and mechanical hazards.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 leading-relaxed">
              <li>
                Purchasing organizations and laboratory operators are solely responsible for ensuring that instruments are installed, operated, and maintained by qualified, trained laboratory personnel.
              </li>
              <li>
                Operators must strictly follow factory operating manuals, safety relief valve checks, routine hydrotesting schedules, and facility ventilation standards.
              </li>
              <li>
                General information provided on this website does not substitute for manufacturer safety manuals, professional engineering consultation, or local statutory workplace safety compliance.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ebf3fc] text-xs font-bold text-[#0056B3]">
                5
              </span>
              <h3 className="text-lg font-bold text-slate-900">Warranty Disclaimers &amp; Limitation of Liability</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              This website and its digital content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied.
            </p>
            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <p>
                While we make reasonable efforts to maintain accurate, up-to-date catalog entries and continuous website availability, Orbit Technologies makes no warranty that the website will be uninterrupted, error-free, or free of harmful components.
              </p>
              <p>
                In no event shall Orbit Technologies Pvt. Ltd., its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, data, research downtime, or business interruption—arising out of your access to, or inability to access, this website.
              </p>
              <p className="font-medium text-slate-700">
                Equipment warranties, performance guarantees, calibration certifications, and service level agreements are governed strictly by individual commercial supply agreements.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ebf3fc] text-xs font-bold text-[#0056B3]">
                6
              </span>
              <h3 className="text-lg font-bold text-slate-900">Governing Law &amp; Jurisdiction</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              These Terms of Use shall be governed by, construed, and enforced in accordance with the laws of the Republic of India, without regard to conflict of law principles.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Any dispute, controversy, or claim arising out of or relating to your use of this website shall be subject to the exclusive jurisdiction of the competent courts situated in <strong className="text-slate-800">Hyderabad, Telangana, India</strong>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="rounded-xl border border-blue-200 bg-[#f8fafc] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0056B3] text-xs font-bold text-white">
                7
              </span>
              <h3 className="text-lg font-bold text-slate-900">Corporate Inquiries &amp; Contact Information</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              For any questions regarding these Terms of Use, legal notices, or formal commercial agreements, please contact our corporate office:
            </p>
            <div className="rounded-lg border border-slate-200 bg-white p-5 space-y-3 text-sm text-slate-700">
              <p className="font-bold text-[#0056B3] text-base">
                {site.legalName}
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <span>
                    {site.address.line1}, {site.address.city} – {site.address.pin}, {site.address.state}, {site.address.country}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#0056B3]" />
                  <span>{site.phones.office}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#0056B3]" />
                  <a href={`mailto:${site.email}`} className="text-[#0056B3] font-semibold hover:underline">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Navigation link back to Privacy */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500">
            <p>Want to understand how we protect your personal and business data?</p>
            <Link
              href="/privacy-policy/"
              className="min-h-[44px] lg:min-h-0 inline-flex items-center gap-1 font-bold text-[#0056B3] hover:text-[#d00000] hover:underline"
            >
              <FileText className="h-3.5 w-3.5" /> Read Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
