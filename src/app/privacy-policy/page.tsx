import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, FileText, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy · Orbit Technologies Pvt. Ltd.",
  description:
    "Learn how Orbit Technologies Pvt. Ltd. collects, protects, uses, and respects your business and personal information when you browse our website, request quotations, or engage our laboratory instrumentation services.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 6, 2026";

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <PageHero
        title="Privacy Policy"
        subtitle={`Effective Date & Last Updated: ${lastUpdated} · Orbit Technologies Pvt. Ltd.`}
      />

      <div className="container-x py-10 md:py-14">
        <div className="max-w-3xl space-y-10">
          {/* Header intro box */}
          <div className="border-b border-[var(--line)] pb-10">
            <div className="flex items-start gap-4">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-[var(--ink)]">
                  Our Commitment to Data Protection
                </h2>
                <p className="text-base leading-relaxed text-[var(--ink-2)]">
                  {site.legalName} (&quot;Orbit Technologies&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to safeguarding the privacy and confidentiality of scientists, researchers, quality assurance professionals, laboratory managers, industrial procurement teams, and all visitors who access our website (<span className="font-semibold text-[var(--ink)]">orbitindia.com</span>) or communicate with us for product quotations, technical specifications, and after-sales services.
                </p>
                <p className="text-base leading-relaxed text-[var(--ink-2)]">
                  This Privacy Policy describes what information we collect, why we collect it, how it is safeguarded, and how you can exercise your privacy rights in compliance with applicable Indian data protection laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act.
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
              <h3 className="text-lg font-semibold text-[var(--ink)]">Information We Collect</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              We collect information to facilitate technical communications, provide accurate instrument recommendations, process quotation requests, and deliver after-sales technical support. We collect information through two primary channels:
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="space-y-2 border-t border-[var(--line)] pt-4">
                <h4 className="text-base font-semibold text-[var(--ink)]">
                  A. Information You Provide Directly
                </h4>
                <ul className="space-y-1.5 text-[15px] text-[var(--ink-2)]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0056B3]" />
                    <span>Contact details: Full Name, Business Email Address, Phone Number, and Mobile Number.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0056B3]" />
                    <span>Organization details: Company, Research Institution, University name, Department, and Designation.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0056B3]" />
                    <span>Inquiry specifics: Instrument model interests, technical application requirements, sample testing parameters, and delivery location.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0056B3]" />
                    <span>Service requests: Instrument serial numbers, warranty details, maintenance history, and breakdown reports.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 border-t border-[var(--line)] pt-4">
                <h4 className="text-base font-semibold text-[var(--ink)]">
                  B. Technical &amp; Usage Data
                </h4>
                <ul className="space-y-1.5 text-[15px] text-[var(--ink-2)]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0056B3]" />
                    <span>Log information: IP address, operating system, browser type and version, and referring URLs.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0056B3]" />
                    <span>Browsing behavior: Pages visited, time spent per category, instrument search queries, and technical brochure downloads.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0056B3]" />
                    <span>Cookies and local identifiers to remember preferences and optimize page loading performance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                2
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">How We Use Your Information</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              We process your technical and contact information strictly for legitimate commercial and engineering purposes, including:
            </p>
            <ul className="grid gap-2 text-[15px] text-[var(--ink-2)] sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0056B3] shrink-0" />
                <span>Preparing formal commercial proposals, proforma invoices, and official price quotations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0056B3] shrink-0" />
                <span>Responding to technical inquiries, application feasibility questions, and standard compliance checks (e.g., ASTM, ISO, BIS).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0056B3] shrink-0" />
                <span>Dispatching service engineers for installation, commissioning, hydrotesting, and preventive maintenance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0056B3] shrink-0" />
                <span>Sharing product updates, technical bulletins, and application notes with existing laboratory clients (with full opt-out rights).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0056B3] shrink-0" />
                <span>Analyzing web traffic and search patterns to continuously improve our online instrument catalog and navigation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0056B3] shrink-0" />
                <span>Fulfilling statutory tax, billing, auditing, and export-import compliance under Indian law.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                3
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Information Sharing &amp; Third-Party Disclosure</h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-[var(--ink-2)]">
              We never sell, rent, lease, or monetize your contact or business information to third-party marketing companies.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              Your details are disclosed only to trusted entities under strict confidentiality agreements, and solely to the extent required to execute your orders:
            </p>
            <div className="space-y-3 pt-1">
              <div className="border-l-2 border-[#0056B3] pl-3 py-1">
                <h4 className="text-base font-semibold text-[var(--ink)]">Authorized OEM Technology Principals</h4>
                <p className="mt-0.5 text-[15px] leading-relaxed text-[var(--ink-2)]">
                  When you request specialized international instruments (such as Parr Instrument Company calorimeters, reactors, or high-pressure autoclaves), your application specifications and end-user facility data may be shared with the certified manufacturer for factory calibration, vessel safety compliance, warranty registration, or custom engineering validation.
                </p>
              </div>
              <div className="border-l-2 border-[#0056B3] pl-3 py-1">
                <h4 className="text-base font-semibold text-[var(--ink)]">Logistics &amp; Field Service Partners</h4>
                <p className="mt-0.5 text-[15px] leading-relaxed text-[var(--ink-2)]">
                  Authorized freight handlers, heavy equipment transport carriers, and certified field engineers who deliver, unpack, install, or hydrotest pressure vessels at your laboratory site.
                </p>
              </div>
              <div className="border-l-2 border-[#0056B3] pl-3 py-1">
                <h4 className="text-base font-semibold text-[var(--ink)]">Legal &amp; Regulatory Authorities</h4>
                <p className="mt-0.5 text-[15px] leading-relaxed text-[var(--ink-2)]">
                  Where disclosure is mandated by law, court order, customs verification, tax audits, or public safety requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                4
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Cookies &amp; Tracking Technologies</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              Our website uses basic session cookies and anonymous analytics to enhance your experience. These include:
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-base text-[var(--ink-2)]">
              <li>
                <strong className="text-[var(--ink)]">Essential Cookies:</strong> Required for fundamental website functionality, such as navigating between instrument categories and maintaining state within enquiry forms.
              </li>
              <li>
                <strong className="text-[var(--ink)]">Analytics Cookies:</strong> Help us measure aggregate site statistics, such as which laboratory instruments and technical articles are most frequently consulted. This data is collected in aggregated, pseudonymized form.
              </li>
            </ul>
            <p className="text-[13px] text-[var(--ink-3)]">
              You can configure your browser to decline or delete cookies at any time. However, disabling cookies may affect the convenience of some website features.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                5
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Data Security &amp; Retention</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              We implement robust technical and organizational security measures to protect your personal and commercial data against unauthorized access, alteration, disclosure, or accidental destruction. These measures include encrypted data transmission (HTTPS/SSL), restricted administrative access, firewalled server infrastructure, and secure archival of customer purchase records.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              We retain commercial and technical service records only for the duration necessary to satisfy warranty obligations, spare parts support, hydrotesting history, statutory taxation rules, and corporate audit requirements.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-[var(--line)] pb-10">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                6
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Your Privacy Rights</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              In accordance with applicable data protection legislation, you have the following rights regarding your personal information:
            </p>
            <div className="grid gap-3 pt-1 text-[15px] text-[var(--ink-2)] sm:grid-cols-2">
              <div className="border-t border-[var(--line)] pt-3">
                <p className="font-semibold text-[var(--ink)]">Right to Access &amp; Confirm</p>
                <p className="mt-1 text-[13px] text-[var(--ink-3)]">Request confirmation whether we hold your personal data and obtain a summary of stored records.</p>
              </div>
              <div className="border-t border-[var(--line)] pt-3">
                <p className="font-semibold text-[var(--ink)]">Right to Correction &amp; Update</p>
                <p className="mt-1 text-[13px] text-[var(--ink-3)]">Request prompt correction of inaccurate, incomplete, or outdated business contact details.</p>
              </div>
              <div className="border-t border-[var(--line)] pt-3">
                <p className="font-semibold text-[var(--ink)]">Right to Erasure</p>
                <p className="mt-1 text-[13px] text-[var(--ink-3)]">Request deletion of contact records where retention is no longer necessary or mandated by tax/warranty law.</p>
              </div>
              <div className="border-t border-[var(--line)] pt-3">
                <p className="font-semibold text-[var(--ink)]">Right to Opt-Out</p>
                <p className="mt-1 text-[13px] text-[var(--ink-3)]">Unsubscribe from optional technical newsletters and product alerts at any time via a single email notice.</p>
              </div>
            </div>
          </section>

          {/* Section 7: Grievance Officer & Contact */}
          <section className="space-y-4 rounded-md border border-[var(--line)] p-6 sm:p-8">
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-lg font-semibold text-[#0056B3] tnum">
                7
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Contact Us &amp; Grievance Redressal</h3>
            </div>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              If you have any questions, concerns, or requests regarding this Privacy Policy, or wish to exercise your statutory privacy rights, please reach out to our designated Privacy &amp; Grievance desk:
            </p>
            <div className="space-y-3 text-[15px] text-[var(--ink-2)]">
              <p className="text-base font-semibold text-[var(--ink)]">
                {site.legalName}
              </p>
              <p className="text-[13px] text-[var(--ink-3)]">
                Attention: Privacy &amp; Customer Relations Officer
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

          {/* Navigation link back to Terms */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[13px] text-[var(--ink-3)]">
            <p>Looking for website usage terms?</p>
            <Link
              href="/terms-of-use/"
              className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-[#0056B3] hover:underline lg:min-h-0"
            >
              <FileText className="h-3.5 w-3.5" /> Read Terms of Use &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
