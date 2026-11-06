import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { site, branchOffices } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Orbit Technologies Pvt. Ltd. — B-50, Industrial Estate, Sanath Nagar, Hyderabad 500 018, Telangana, India. Sales, service and product enquiries.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        subtitle="Thank you for your interest in Orbit Technologies Pvt. Ltd. Our team is here to answer all your questions — for any product or service enquiry, leave your details and we will get back to you as soon as possible."
      />

      <section className="container-x mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        {/* contact details */}
        <div className="space-y-4">
          <div className="surface p-6">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-5 w-5 text-[#d00000]" />
              <h2 className="font-bold text-[#0056B3]">Corporate office</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {site.address.line1},<br />
              {site.address.city} – {site.address.pin},<br />
              {site.address.state}, {site.address.country}
            </p>
          </div>

          <div className="surface p-6">
            <div className="flex items-center gap-2.5">
              <Phone className="h-5 w-5 text-[#d00000]" />
              <h2 className="font-bold text-[#0056B3]">Phone</h2>
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Call us</dt>
                <dd className="font-semibold text-[#0056B3]">{site.phones.office}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Sales</dt>
                <dd className="font-semibold text-[#0056B3]">
                  {site.phones.sales1} · {site.phones.sales2}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Service</dt>
                <dd className="font-semibold text-[#0056B3]">{site.phones.service}</dd>
              </div>
            </dl>
          </div>

          <div className="surface p-6">
            <div className="flex items-center gap-2.5">
              <Mail className="h-5 w-5 text-[#d00000]" />
              <h2 className="font-bold text-[#0056B3]">Email</h2>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-sm font-semibold text-[#d00000] hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="surface p-6">
            <div className="flex items-center gap-2.5">
              <Clock className="h-5 w-5 text-[#d00000]" />
              <h2 className="font-bold text-[#0056B3]">Working hours</h2>
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-slate-500">{h.days}</dt>
                  <dd className="font-semibold text-[#0056B3]">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="surface p-6">
            <h2 className="font-bold text-[#0056B3]">Branch offices</h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Pan-India sales &amp; service network:
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {branchOffices.map((b) => (
                <li key={b} className="chip">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* quote form */}
        <div id="quote" className="scroll-mt-28">
          <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
            Request a quote
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Leave us your details and we will contact you soon.
          </p>
          <div className="mt-5">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
