import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  Mail,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { BRANCH_LOCATIONS } from "@/data/locations";

export const metadata: Metadata = {
  title: "Our Locations & Branch Network | 15 Offices Across India | Orbit Technologies",
  description:
    "Explore Orbit Technologies' 15 direct sales and service locations across India, including Hyderabad headquarters and 14 regional branch offices providing 24-48 hour on-site support.",
};

export default function LocationsPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Locations" },
        ]}
      />

      <PageHero
        eyebrow="Pan-India Sales & Service Footprint"
        title="Our Locations — 15 Direct Offices Across India"
        subtitle="Positioned close to India's major thermal power plants, steel belts, refineries, coal washeries, and research universities. Orbit's nationwide network delivers factory-certified application advice and rapid on-site technical support within 24–48 hours."
      />

      {/* Directory of All 15 Locations */}
      <section className="container-x py-12 sm:py-14 space-y-10">
        <div className="max-w-2xl">
          <span className="eyebrow text-[#c4620a]">Regional Operations</span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#002f49] sm:text-3xl">
            Detailed Branch Profiles &amp; Service Coverage
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Each Orbit branch is staffed by dedicated application and instrumentation service engineers equipped with diagnostic calibration tools and fast access to genuine OEM spare parts.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {BRANCH_LOCATIONS.map((loc) => (
            <div
              key={loc.slug}
              className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-xs transition hover:shadow-md ${
                loc.isHeadquarters
                  ? "border-[#c4620a]/60 bg-gradient-to-br from-amber-50/40 via-white to-white lg:col-span-2"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        loc.isHeadquarters
                          ? "bg-[#002f49] text-white"
                          : "bg-slate-100 text-[#002f49]"
                      }`}
                    >
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-[#002f49]">
                          {loc.city}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">
                          ({loc.state})
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#c4620a] mt-0.5">
                        {loc.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {loc.isHeadquarters ? (
                      <span className="rounded-full bg-[#002f49] px-3 py-1 text-xs font-bold text-white shadow-xs">
                        ★ Corporate HQ &amp; Central Lab
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {loc.region} India Zone
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700">
                  {loc.description}
                </p>

                {/* Address & Contact */}
                <div className="mt-5 rounded-xl border border-slate-100 bg-[#f9fafb] p-4 text-xs space-y-2 text-slate-700">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-4 w-4 text-[#c4620a] shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> {loc.address}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <a
                      href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-1.5 font-bold text-[#002f49] hover:text-[#c4620a]"
                    >
                      <PhoneCall className="h-3.5 w-3.5 text-[#c4620a]" /> {loc.phone}
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      href={`mailto:${loc.email.split("/")[0].trim()}`}
                      className="flex items-center gap-1.5 text-slate-600 hover:text-[#002f49]"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#c4620a]" /> {loc.email}
                    </a>
                  </div>
                </div>

                {/* Territory & Sectors */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs">
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400">
                      Territory Covered:
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {loc.territoryCovered.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400">
                      Key Client Sectors:
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {loc.keySectors.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-[11px] font-medium text-amber-900"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Major Local Clients */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400">
                    Notable Installations &amp; Clients Served:
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {loc.majorClientsServed.join(" · ")}
                  </p>
                </div>

                {/* Service Capabilities */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400">
                    Resident Engineering Capabilities:
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {loc.serviceCapabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/service-complaint-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c4620a] hover:underline"
                >
                  Book Service from {loc.city} Branch <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact-us#quote"
                  className="btn btn-outline text-xs px-3 py-1.5"
                >
                  Request Regional Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Central Service Dispatch Assurance */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#002f49]/5 text-[#c4620a]">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-base text-[#002f49]">
                24–48h Field Deployment
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Because our field engineers are stationed in 15 key industrial cities, emergency breakdown calls in any major industrial corridor are attended promptly without waiting for long interstate travel.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#002f49]/5 text-[#c4620a]">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-base text-[#002f49]">
                300-Bar Central Hydrotest Center
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Our central facility in Hyderabad operates India&apos;s only dedicated Parr-certified oxygen combustion vessel hydraulic test bench proof-testing vessels to 300 bar for mandatory safety compliance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#002f49]/5 text-[#c4620a]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-base text-[#002f49]">
                Central Bonded Spares Warehouse
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We maintain an extensive buffer inventory of genuine OEM seals, combustion capsules, ignitor wires, heating elements, and quartz tubes ready for overnight courier dispatch to any branch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#002f49] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-block rounded-md bg-[#ff8d0a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-black">
                PAN-India Network
              </span>
              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Need an Engineer at Your Facility?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Log a service request or connect with our central dispatch desk. We will assign the nearest resident service engineer to your plant location.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/service-complaint-form" className="btn btn-accent">
                Submit Online Service Ticket <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-us"
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Contact Regional Offices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
