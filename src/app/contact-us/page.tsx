import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/components/json-ld";
import { TemperatureCurve } from "@/components/temperature-curve";
import { getContactPageSchema } from "@/lib/schema";
import { site, branchOffices } from "@/data/site";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Orbit Technologies Pvt. Ltd. — B-50, Industrial Estate, Sanath Nagar, Hyderabad 500 018, Telangana, India. Sales, service and product enquiries.",
};

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold uppercase tracking-[0.08em] ${
        dark ? "text-[#7fb2f0]" : "text-[#0056B3]"
      }`}
    >
      {children}
    </p>
  );
}

const h2Cls = "text-[1.65rem] font-semibold leading-tight tracking-[-0.015em] sm:text-[2.1rem]";

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={getContactPageSchema()} />
      {/* Header: H1 and intro left; head-office phone on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[38%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0 py-8 sm:py-10 lg:py-14 lg:pr-14">
            <Eyebrow>Get in touch</Eyebrow>
            <h1 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-[2.6rem] lg:text-[3rem]">
              Contact us
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              Thank you for your interest in Orbit Technologies Pvt. Ltd. Our team is here to answer all your questions — for any product or service enquiry, leave your details and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="-mx-4 min-w-0 bg-[#f3f5f8] px-4 py-7 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-transparent lg:py-12 lg:pl-12 lg:pr-0">
            <p className="text-[13px] text-[var(--ink-3)]">Call us</p>
            <a
              href={`tel:${site.phones.office.replace(/[^+\d]/g, "")}`}
              className="mt-1 block font-[family-name:var(--font-poppins)] text-[1.6rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--ink)] tnum hover:text-[#0056B3] sm:text-[2rem]"
            >
              {site.phones.office}
            </a>
            <a href="#quote" className="link-more mt-4 min-h-[44px] lg:min-h-0">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          {/* contact details */}
          <div className="min-w-0 divide-y divide-[var(--line)] self-start border-y border-[var(--line)]">
            <div className="py-5">
              <h2 className="flex items-center gap-2 text-base font-semibold text-[var(--ink)]">
                <MapPin className="h-4 w-4 text-[#0056B3]" /> Corporate office
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
                {site.address.line1},<br />
                {site.address.city} – {site.address.pin},<br />
                {site.address.state}, {site.address.country}
              </p>
            </div>

            <div className="py-5">
              <h2 className="flex items-center gap-2 text-base font-semibold text-[var(--ink)]">
                <Phone className="h-4 w-4 text-[#0056B3]" /> Phone
              </h2>
              <dl className="mt-2 space-y-1.5 text-[15px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--ink-3)]">Call us</dt>
                  <dd className="text-right font-semibold text-[var(--ink)] tnum">{site.phones.office}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--ink-3)]">Sales</dt>
                  <dd className="text-right font-semibold text-[var(--ink)] tnum">
                    {site.phones.sales1} · {site.phones.sales2}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--ink-3)]">Service</dt>
                  <dd className="text-right font-semibold text-[var(--ink)] tnum">{site.phones.service}</dd>
                </div>
              </dl>
            </div>

            <div className="py-5">
              <h2 className="flex items-center gap-2 text-base font-semibold text-[var(--ink)]">
                <Mail className="h-4 w-4 text-[#0056B3]" /> Email
              </h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-[15px] font-semibold text-[#0056B3] hover:underline"
              >
                {site.email}
              </a>
            </div>

            <div className="py-5">
              <h2 className="flex items-center gap-2 text-base font-semibold text-[var(--ink)]">
                <Clock className="h-4 w-4 text-[#0056B3]" /> Working hours
              </h2>
              <dl className="mt-2 space-y-1.5 text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-[var(--ink-3)]">{h.days}</dt>
                    <dd className="text-right font-semibold text-[var(--ink)] tnum">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* quote form */}
          <div id="quote" className="min-w-0 scroll-mt-28">
            <Eyebrow>Quote</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Request a quote</h2>
            <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">Leave us your details and we will contact you soon.</p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Branch offices — navy band with the India service map */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-20 lg:py-[88px]">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 top-10 h-[140px] opacity-35" />
        <div className="container-x relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <Eyebrow dark>Pan-India service</Eyebrow>
            <p className="mt-4 font-[family-name:var(--font-poppins)] text-[4rem] font-semibold leading-none tracking-[-0.03em] text-white tnum sm:text-[5.5rem]">
              14
            </p>
            <h2 className={`mt-4 text-white ${h2Cls}`}>Branch offices</h2>
            <p className="mt-2.5 text-[15px] text-[#c9d4e3]">Pan-India sales &amp; service network:</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 border-t border-white/20 sm:grid-cols-3">
              {branchOffices.map((b) => (
                <li key={b} className="border-b border-white/15 py-2.5 text-[15px] font-medium text-white">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <Image
              src={withBasePath("/images/orbit/India.png")}
              alt="Map of India showing Orbit's head office in Hyderabad and 14 branch cities"
              width={960}
              height={1110}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="mx-auto h-auto w-full max-w-[460px] lg:ml-auto lg:mr-0"
            />
          </div>
        </div>
      </section>

      {/* Location map (Orbit Technologies Pvt Ltd Google listing) */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20" aria-label="Office location map">
        <div className="container-x">
          <Eyebrow>Head office</Eyebrow>
          <p className="mb-6 mt-3 font-[family-name:var(--font-poppins)] text-lg font-semibold text-[var(--ink)]">
            {site.address.line1}, {site.address.city} – {site.address.pin}
          </p>
          <div className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--soft)]">
            <iframe
              title="Orbit Technologies Pvt Ltd on Google Maps"
              src="https://maps.google.com/maps?q=Orbit%20Technologies%20Pvt%20Ltd%2C%20B-50%2C%20Industrial%20Estate%2C%20Sanath%20Nagar%2C%20Hyderabad%2C%20Telangana%20500018&t=m&z=16&output=embed&iwloc=near"
              className="block h-[320px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
