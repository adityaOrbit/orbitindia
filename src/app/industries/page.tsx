import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industry Solutions & Applications | Orbit Technologies",
  description:
    "Explore Orbit Technologies' specialized scientific instrumentation solutions for coal & fuels, steel & metallurgy, cement, petrochemicals, pharma, mining, and research.",
};

export default function IndustriesHubPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />

      <PageHero
        eyebrow="Targeted Analytical Solutions"
        title="Industries We Serve — Precision Instrumentation by Sector"
        subtitle="From thermal power stations and steel smelters to petrochemical pilot plants and central research institutes, Orbit Technologies equips India's core industries with ASTM/ISO-compliant analytical systems."
      />

      {/* Industries Grid */}
      <section className="container-x py-12 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
            Choose Your Industry Sector
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Select an industry below to see workflow challenges, applicable standard test methods, and pre-configured equipment packages.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d00000]/60 hover:shadow-xl"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-bold text-lg text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {ind.blurb}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Instruments:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {ind.instruments.map((inst, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}/`}
                    className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline after:absolute after:inset-0 after:content-['']"
                  >
                    Explore Sector Solutions <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/products?industry=${ind.slug}`}
                    className="relative z-10 inline-flex min-h-[44px] items-center text-[11px] font-semibold text-slate-400 hover:text-[#0056B3] sm:min-h-0"
                  >
                    Filter Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turnkey Integration CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Need a Complete Turnkey Lab Package for Your Plant?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We design and supply complete turnkey analytical testing suites for thermal power plants, cement units, coal washeries, and metallurgy labs including sample preparation, analysis, standards, and gases.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Consult Sector Specialists <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Browse All Instruments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
