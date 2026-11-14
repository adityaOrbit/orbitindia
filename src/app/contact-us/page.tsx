import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Clock, Mail, MapPin, Phone, Wrench, type LucideIcon } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/components/json-ld";
import { getContactPageSchema } from "@/lib/schema";
import { site, branchOffices } from "@/data/site";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Orbit Technologies Pvt. Ltd. — B-50, Industrial Estate, Sanath Nagar, Hyderabad 500 018, Telangana, India. Sales, service and product enquiries.",
};

const tel = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;
const h2Cls = "text-[1.5rem] font-semibold leading-tight tracking-[-0.015em] text-[var(--ink)] sm:text-[1.75rem]";

const MAP_QUERY =
  "Orbit%20Technologies%20Pvt%20Ltd%2C%20B-50%2C%20Industrial%20Estate%2C%20Sanath%20Nagar%2C%20Hyderabad%2C%20Telangana%20500018";

/** One way to reach Orbit: icon, label and the clickable value(s). */
function ContactCard({
  icon: Icon,
  label,
  links,
}: {
  icon: LucideIcon;
  label: string;
  links: { href: string; text: string }[];
}) {
  return (
    <div className="flex min-w-0 gap-4 bg-white p-5 sm:p-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#eef4fb] text-[#0056B3]">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-[var(--ink-3)]">{label}</p>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="mt-1 block break-words font-[family-name:var(--font-poppins)] text-base font-semibold leading-snug text-[var(--ink)] tnum hover:text-[#0056B3]"
          >
            {l.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={getContactPageSchema()} />
      <Breadcrumb items={[{ label: "Contact us" }]} />

      {/* 1. HEADER + ways to reach us, all on one aligned grid */}
      <section className="bg-[#f3f5f8]">
        <div className="container-x py-10 sm:py-14">
          <h1 className="text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-[2.6rem] lg:text-[2.9rem]">
            Contact us
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
            Thank you for your interest in Orbit Technologies Pvt. Ltd. Our team is here to answer all your questions — for any product or service enquiry, leave your details and we will get back to you as soon as possible.
          </p>

          <div className="cells mt-8 grid-cols-1 overflow-hidden rounded-md sm:grid-cols-2 lg:grid-cols-[1fr_1.05fr_1fr_1.3fr]">
            <ContactCard icon={Phone} label="Call us" links={[{ href: tel(site.phones.office), text: site.phones.office }]} />
            <ContactCard
              icon={Phone}
              label="Sales"
              links={[
                { href: tel(site.phones.sales1), text: site.phones.sales1 },
                { href: tel(site.phones.sales2), text: site.phones.sales2 },
              ]}
            />
            <ContactCard icon={Wrench} label="Service" links={[{ href: tel(site.phones.service), text: site.phones.service }]} />
            <ContactCard icon={Mail} label="Email" links={[{ href: `mailto:${site.email}`, text: site.email }]} />
          </div>
        </div>
      </section>

      {/* 2. QUOTE FORM (left) + OFFICE (right), both starting on the same line */}
      <section className="py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
          <div id="quote" className="min-w-0 scroll-mt-28">
            <h2 className={h2Cls}>Request a quote</h2>
            <p className="mt-2 text-base leading-relaxed text-[var(--ink-3)]">Leave us your details and we will contact you soon.</p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          <aside className="min-w-0">
            <h2 className={h2Cls}>Corporate office</h2>
            <p className="mt-2 text-base leading-relaxed text-[var(--ink-3)]">{site.address.city}, {site.address.state}</p>
            <div className="mt-6 overflow-hidden rounded-md border border-[var(--line)]">
              <iframe
                title="Orbit Technologies Pvt Ltd on Google Maps"
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&t=m&z=16&output=embed&iwloc=near`}
                className="block h-[240px] w-full sm:h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="divide-y divide-[var(--line)]">
                <div className="flex gap-3 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0056B3]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Orbit Technologies Pvt. Ltd.</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-[var(--ink-2)]">
                      {site.address.line1},<br />
                      {site.address.city} – {site.address.pin},<br />
                      {site.address.state}, {site.address.country}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-more mt-2 min-h-[44px] lg:min-h-0"
                    >
                      Open in Google Maps <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 p-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#0056B3]" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[var(--ink)]">Working hours</p>
                    <dl className="mt-1 space-y-1 text-[15px]">
                      {site.hours.map((h) => (
                        <div key={h.days} className="grid grid-cols-[1fr_auto] gap-4">
                          <dt className="text-[var(--ink-2)]">{h.days}</dt>
                          <dd className="m-0 font-medium text-[var(--ink)] tnum">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. BRANCH OFFICES — city list and the India service map, side by side */}
      <section className="bg-[#001733] py-14 text-white sm:py-20">
        <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <h2 className="text-[1.5rem] font-semibold leading-tight tracking-[-0.015em] text-white sm:text-[1.75rem]">
              Branch offices
            </h2>
            <p className="mt-2 text-base text-[#c9d4e3]">
              Pan-India sales &amp; service network: {branchOffices.length} branch offices plus the head office in Hyderabad.
            </p>
            <ul className="mt-8 grid grid-cols-2 border-t border-white/20 sm:grid-cols-3">
              {branchOffices.map((b) => (
                <li key={b} className="flex items-center gap-2 border-b border-white/15 py-3 pr-3 text-[15px] font-medium text-white">
                  <MapPin className="h-4 w-4 shrink-0 text-[#7fb2f0]" aria-hidden="true" />
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
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="mx-auto h-auto w-full max-w-[420px] lg:ml-auto lg:mr-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
