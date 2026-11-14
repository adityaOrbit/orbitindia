import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
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
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Terms of Use" }]} />
      <PageHero
        title="Terms of Use"
        subtitle={`Effective Date & Last Updated: ${lastUpdated} · Orbit Technologies Pvt. Ltd.`}
      />

      <div className="container-x py-10 md:py-14">
        <div className="max-w-3xl space-y-10">
          {/* Header intro box */}
          <div className="border-b border-[var(--line)] pb-10">
            <div className="flex items-start gap-4">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-[var(--ink)]">
                  Terms &amp; Conditions of Website Use
                </h2>
                <p className="text-base leading-relaxed text-[var(--ink-2)]">
                  Welcome to <span className="font-semibold text-[var(--ink)]">orbitindia.com</span>, operated by {site.legalName} (&quot;Orbit Technologies&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Use govern your access to and interaction with our website, online instrument catalogs, technical application notes, and quotation inquiry systems.
                </p>
                <p className="text-base leading-relaxed text-[var(--ink-2)]">
                  By accessing, browsing, or submitting an inquiry through this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using this website.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                1
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Nature of Information &amp; Technical Specifications</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              The descriptions, photographs, technical parameters, operating ranges, dimensions, and application notes published on this website are provided for preliminary informational and engineering evaluation purposes.
            </p>
            <div className="space-y-2 rounded-md border-l-2 border-amber-500 bg-amber-50 p-4 text-[15px] leading-relaxed text-amber-900">
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
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                2
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Quotations, Inquiries &amp; Commercial Terms</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              Submitting a &quot;Request a Quote&quot;, &quot;Inquire Now&quot;, or product configuration form on this website constitutes a commercial inquiry and does not form a binding contract of sale or purchase order.
            </p>
            <ul className="space-y-2 pt-1 text-base text-[var(--ink-2)]">
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
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                3
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Intellectual Property Rights</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              All content on this website—including text, graphics, logos, product catalogs, diagrams, instrument photographs, brand marks, and software code—is the property of {site.legalName} or its respective licensors and OEM principals, protected under Indian and international copyright and trademark laws.
            </p>
            <div className="space-y-2 border-t border-[var(--line)] pt-4 text-[15px] text-[var(--ink-2)]">
              <p>
                <strong>Trademarks:</strong> &quot;Orbit Technologies&quot;, &quot;Orlab&quot;, and associated logos are registered or common law trademarks of Orbit Technologies Pvt. Ltd. &quot;Parr Instrument Company&quot; and other brand names are trademarks of their respective global manufacturers, represented under authorized distribution agreements.
              </p>
              <p>
                <strong>Permitted Use:</strong> You may view, download, and print pages or technical specification sheets for internal institutional or industrial evaluation purposes only. You may not republish, scrape, mirror, or commercially exploit any material from this site without our prior written consent.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                4
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">High-Pressure &amp; Laboratory Safety Responsibility</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              Scientific instrumentation—specifically high-pressure reactors, oxygen bomb calorimeters, high-temperature furnaces, gas generators, and pressure vessels—involves specialized chemical, thermal, and mechanical hazards.
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-[var(--ink-2)]">
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
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                5
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Warranty Disclaimers &amp; Limitation of Liability</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              This website and its digital content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied.
            </p>
            <div className="space-y-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
              <p>
                While we make reasonable efforts to maintain accurate, up-to-date catalog entries and continuous website availability, Orbit Technologies makes no warranty that the website will be uninterrupted, error-free, or free of harmful components.
              </p>
              <p>
                In no event shall Orbit Technologies Pvt. Ltd., its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, data, research downtime, or business interruption—arising out of your access to, or inability to access, this website.
              </p>
              <p className="font-medium text-[var(--ink)]">
                Equipment warranties, performance guarantees, calibration certifications, and service level agreements are governed strictly by individual commercial supply agreements.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                6
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Governing Law &amp; Jurisdiction</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              These Terms of Use shall be governed by, construed, and enforced in accordance with the laws of the Republic of India, without regard to conflict of law principles.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              Any dispute, controversy, or claim arising out of or relating to your use of this website shall be subject to the exclusive jurisdiction of the competent courts situated in <strong className="text-[var(--ink)]">Hyderabad, Telangana, India</strong>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 rounded-md border border-[var(--line)] p-6 sm:p-8">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                7
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Corporate Inquiries &amp; Contact Information</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              For any questions regarding these Terms of Use, legal notices, or formal commercial agreements, please contact our corporate office:
            </p>
            <div className="space-y-3 text-[15px] text-[var(--ink-2)]">
              <p className="text-base font-semibold text-[var(--ink)]">
                {site.legalName}
              </p>
              <div className="space-y-1.5 pt-1 text-[15px] text-[var(--ink-2)]">
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
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[13px] text-[var(--ink-3)]">
            <p>Want to understand how we protect your personal and business data?</p>
            <Link
              href="/privacy-policy/"
              className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-[#0056B3] hover:underline lg:min-h-0"
            >
              <FileText className="h-3.5 w-3.5" /> Read Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
