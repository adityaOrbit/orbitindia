import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { PRINCIPALS } from "@/data/principals";

export const metadata: Metadata = {
  title: "OEM Principals & Global Partners | Orbit Technologies",
  description:
    "Explore Orbit Technologies' international OEM partners: Parr Instrument Company (USA), NCS (Germany), NC Technologies (Italy), Elite (UK), Sylab (France), and more.",
};

export default function PrincipalsHubPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Orbit as a Distributor", href: "/orbit-as-a-distributor/" },
          { label: "OEM Principals" },
        ]}
      />

      <PageHero
        eyebrow="Exclusive Representation in India"
        title="OEM Principals & Global Technology Partners"
        subtitle="Orbit Technologies represents the world's most trusted manufacturers of calorimeters, chemical autoclaves, elemental analyzers, sample preparation mills, and high-temperature furnaces — backed by factory-certified service and local support across India."
      />

      {/* Principals Grid */}
      <section className="container-x py-12 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
            Our International Instrument Partners
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Click on any principal below to view their company history, key instruments, technical certifications, and direct product catalog links.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPALS.map((principal) => (
            <div
              key={principal.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-[#d00000]/60 hover:shadow-xl"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
                <Image
                  src={principal.logo}
                  alt={principal.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="text-xs font-bold text-[#d00000]">
                    {principal.partnershipYears}
                  </span>
                  <h3 className="mt-1 font-bold text-lg text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                    {principal.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    📍 {principal.headquarters}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {principal.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400">
                      Core Technologies:
                    </p>
                    <ul className="mt-2 space-y-1">
                      {principal.coreCategories.slice(0, 3).map((cat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{cat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/principals/${principal.slug}/`}
                    className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                  >
                    View Products &amp; History <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {principal.certifications[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Direct Technical Backup Banner */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
                Zero Middlemen. Direct Factory Backing for Indian Laboratories.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Procuring sophisticated analytical and high-pressure instruments through unauthorized third parties carries substantial risks: voided warranties, outdated calibration, lack of hydrotest certification, and unavailable spare parts.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Orbit Technologies has held formal, exclusive distributor agreements with its international principals for decades. Our service engineers receive direct factory training in Illinois, Düsseldorf, and Milan, ensuring that every instrument operates to original manufacturer design parameters.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Direct Spare Import",
                  desc: "Genuine OEM parts imported under official customs codes with zero counterfeit risk.",
                },
                {
                  title: "Factory Recalibration",
                  desc: "Calibrations performed using NIST & BCR traceable primary reference standards.",
                },
                {
                  title: "Emergency Tech Support",
                  desc: "Direct communication line with principal design engineers in USA & Europe.",
                },
                {
                  title: "Annual Service AMC",
                  desc: "Structured preventive maintenance contracts covering electronics, seals, and sensors.",
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <h4 className="font-bold text-sm text-[#0056B3]">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RFQ Consultation CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Need a Detailed Technical Proposal from Our Principals?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Our application engineering group provides direct factory technical datasheets, tender specification compliance sheets, and site-readiness requirements.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Request OEM Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
