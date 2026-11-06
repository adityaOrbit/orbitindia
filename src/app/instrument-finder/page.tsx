import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Activity,
  Cpu,
  Layers,
  Thermometer,
  ShieldCheck,
  PhoneCall,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { InstrumentFinder } from "@/components/instrument-finder";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Instrument Finder — Precision Equipment Selector | Orbit Technologies",
  description:
    "Interactive instrument selector tool for Indian testing laboratories. Filter Parr bomb calorimeters, high-pressure reactors, elemental analyzers, and high-temperature furnaces by sample matrix and testing standard.",
};

const COMMON_TESTING_DOMAINS = [
  {
    icon: Flame,
    title: "Calorific Value & Fuel Testing",
    standard: "ASTM D5865 · ISO 1928 · IS 1350",
    description:
      "Gross and net calorific value determination in coal, coke, fuel oils, biomass, and refuse-derived fuels (RDF).",
    href: "/calorimeter/bomb-calorimeters/",
    cta: "Explore Calorimeters",
  },
  {
    icon: Activity,
    title: "High Pressure & Reaction Engineering",
    standard: "ASME Boiler & Pressure Vessel · CE",
    description:
      "Stirred autoclaves, tubular reactors, and hydrogenation systems rated to 350 bar & 500°C in Hastelloy, Inconel, and SS316.",
    href: "/reactors/",
    cta: "Explore Reactors",
  },
  {
    icon: Layers,
    title: "Proximate Thermogravimetric Analysis",
    standard: "ASTM D7582 · ASTM D3172 · ISO 17246",
    description:
      "Simultaneous automated measurement of moisture, volatile matter, ash, and fixed carbon in up to 19 sample batches.",
    href: "/tga-proximate-analyzers/",
    cta: "Explore Proximate Analyzers",
  },
  {
    icon: Cpu,
    title: "Carbon & Sulfur Elemental Analysis",
    standard: "ASTM E1019 · ISO 9556 · ISO 10719",
    description:
      "High-frequency induction combustion with solid-state non-dispersive infrared (NDIR) detection for steel, alloys, ores, and cement.",
    href: "/elemental-analyzers/",
    cta: "Explore Elemental Analyzers",
  },
  {
    icon: Thermometer,
    title: "High-Temperature Thermal Processing",
    standard: "ISO 9001 · CE Compliant Thermal Uniformity",
    description:
      "Laboratory chamber, tube, ashing, and split-tube furnaces operating from 1100°C up to 1800°C with precision Eurotherm control.",
    href: "/furnace-heating-systems/",
    cta: "Explore Furnaces",
  },
  {
    icon: ShieldCheck,
    title: "Ash Fusion & Slagging Characteristics",
    standard: "ASTM D1857 · ISO 540 · DIN 51730",
    description:
      "Automated optical determination of deformation, softening, hemispherical, and fluid temperatures for boiler combustion optimization.",
    href: "/ash-fusion-testers/",
    cta: "Explore Ash Fusion Testers",
  },
];

export default function InstrumentFinderPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Crawlable Breadcrumb */}
      <Breadcrumb items={[{ label: "Instrument Finder" }]} />

      {/* Page Hero */}
      <PageHero
        title="Instrument Finder — Precision Equipment Selector"
        subtitle="Identify the ideal analytical instruments, Parr bomb calorimeters, high-pressure reactors, and high-temp furnaces based on your testing standard, sample matrix, and industry requirements."
      />

      {/* Interactive Tool Container */}
      <main className="container-x py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* Core Tool */}
        <section aria-label="Interactive Instrument Finder Tool">
          <InstrumentFinder />
        </section>

        {/* Popular Testing Domains & Methods */}
        <section aria-labelledby="testing-domains-heading">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2
              id="testing-domains-heading"
              className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl"
            >
              Browse Instruments by Test Method &amp; Standard
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              If you already have a target test standard (ASTM, ISO, DIN, IS) in mind, explore our specialized instrumentation categories below.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_TESTING_DOMAINS.map((domain) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.title}
                  className="surface group flex flex-col justify-between p-6 transition-all hover:border-[#0056B3]/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ebf3fc] text-[#0056B3] transition-colors group-hover:bg-[#feeceb] group-hover:text-[#d00000]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 rounded-md px-2 py-0.5">
                        {domain.standard.split("·")[0].trim()}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                      {domain.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {domain.standard}
                    </p>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={domain.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056B3] hover:text-[#d00000] transition-colors"
                    >
                      {domain.cta} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Advisory Callout */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ebf3fc] px-3 py-1 text-xs font-bold text-[#0056B3]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#0056B3]" /> 35+ Years Testing Application Advisory
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                Have a Complex Sample Matrix or Custom Test Requirement?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Selecting high-pressure autoclaves, corrosive sample vessels, or multi-element analyzers frequently requires deep material compatibility and safety engineering. Our Senior Application Engineers review your test protocol, sample volumes, temperature/pressure ranges, and throughput requirements.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us#quote"
                  className="btn btn-accent shadow-sm"
                >
                  Consult an Application Engineer <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="btn btn-outline"
                >
                  Branch Office Network
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-[#f8fafc] p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Direct Application Support
              </h4>

              <a
                href={`tel:${site.phones.office.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200 transition hover:border-[#0056B3] hover:bg-[#ebf3fc]/50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fc] text-[#0056B3]">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Central Technical Desk
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-[#0056B3]">
                    {site.phones.office}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200 transition hover:border-[#0056B3] hover:bg-[#ebf3fc]/50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fc] text-[#0056B3]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Specification Inquiries
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-[#0056B3]">
                    {site.email}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
