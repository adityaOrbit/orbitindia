import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Package,
  Wrench,
  Truck,
  Building2,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { branchOffices } from "@/data/site";

export const metadata: Metadata = {
  title: "Orbit as a Distributor | 35+ Years of Scientific Instrumentation Excellence",
  description:
    "Orbit Technologies is the authorized distributor and technical partner for premier global manufacturers including Parr Instrument Company (USA), NCS (Germany), NC Technologies (Italy), and Elite (UK).",
};

const PRINCIPAL_PARTNERS = [
  {
    name: "Parr Instrument Company",
    country: "USA",
    flag: "🇺🇸",
    image: "/images/orbit/parr.jpg",
    slug: "parr",
    focus: "Oxygen Bomb Calorimeters, Stirred Chemical Autoclaves, Tubular & Fluidized Bed Reactors, and Acid Digestion Vessels.",
    established: "Exclusive Partner since 1989",
  },
  {
    name: "NCS Testing Technology GmbH",
    country: "Germany",
    flag: "🇩🇪",
    image: "/images/orbit/ncsgermany-distributor.jpg",
    slug: "ncs",
    focus: "Inorganic Carbon & Sulfur (CS) Analyzers, Oxygen/Nitrogen/Hydrogen (ONH) Analyzers, and Optical Emission Spectrometers.",
    established: "Authorized Partner",
  },
  {
    name: "NC Technologies SRL",
    country: "Italy",
    flag: "🇮🇹",
    image: "/images/orbit/orbit-distrubutor2.jpg",
    slug: "nc-technologies",
    focus: "High-performance Organic Elemental Analyzers (CHNS/O) for soils, polymers, biomass, fertilizers, and petrochemicals.",
    established: "Authorized Partner",
  },
  {
    name: "Elite Thermal Systems Ltd",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "/images/orbit/elite.jpg",
    slug: "elite",
    focus: "Precision high-temperature tube furnaces, split-tube furnaces, and box chamber furnaces operating up to 1850°C.",
    established: "Authorized Partner",
  },
  {
    name: "Extratex",
    country: "France",
    flag: "🇫🇷",
    image: "/images/orbit/extratex.jpg",
    slug: "extratex",
    focus: "Supercritical CO2 extraction equipment, high-pressure processing autoclaves, and continuous supercritical fluid systems.",
    established: "Authorized Partner",
  },
  {
    name: "Elemental Microanalysis Ltd",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "/images/orbit/orbit-distrubutor1.jpg",
    slug: "elemental-microanalysis",
    focus: "Certified reference materials (CRMs), combustion capsules, catalysts, quartz reaction tubes, and consumables.",
    established: "Authorized Partner",
  },
];

export default function DistributorPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Orbit as a Distributor" },
        ]}
      />

      <PageHero
        eyebrow="Global Technology Partnership"
        title="Orbit as a Distributor — World-Class Analytical Instrumentation"
        subtitle="For over 35 years, Orbit Technologies has served as the exclusive Indian bridge between premier international instrumentation innovators and India's top testing laboratories, industrial plants, and research institutes."
      />

      {/* Narrative Section with Authentic Photos */}
      <section className="container-x mt-8 py-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              More Than A Distributor: A Comprehensive Engineering Partner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              When Indian laboratories invest in mission-critical analytical instrumentation — such as 
              oxygen bomb calorimeters measuring coal GCV at thermal power stations or high-pressure stirred 
              autoclaves operating at 350 bar in petrochemical pilot plants — they need more than a trading vendor. 
              They need an <strong className="text-[#0056B3]">authorized technical partner</strong> capable of handling the entire lifecycle.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Orbit Technologies Pvt. Ltd. acts as an exclusive distribution and service conduit for world-renowned instrumentation manufacturers. With a team of factory-trained application specialists, certified service engineers, and an extensive inventory of local spare parts in Hyderabad, we ensure zero laboratory downtime and strict compliance with international ASTM, ISO, and BIS testing standards.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Direct exclusive OEM representation eliminating grey-market risks",
                "Pan-India field service response within 24–48 hours across 14 locations",
                "Hyderabad central bonded warehouse for immediate spare parts & consumables dispatch",
                "OEM factory certification for oxygen bomb hydrotesting proof-tested up to 300 bar",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src="/images/orbit/orbit-distrubutor1.jpg"
                alt="Orbit Distribution Operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src="/images/orbit/orbit-distrubutor2.jpg"
                alt="Orbit Instrument Testing Lab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm col-span-2">
              <Image
                src="/images/orbit/parr.jpg"
                alt="Parr Instrument Distribution Facility"
                fill
                className="object-contain bg-white p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Pillars */}
      <section className="bg-slate-50 py-16 border-y border-slate-200 mt-12">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Distribution Backed by Comprehensive Technical Infrastructure
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              How our distribution ecosystem protects your analytical capital investments:
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "100% Genuine OEM Warranty",
                desc: "All instruments, accessories, reaction vessels, and internal components are imported directly from original OEM factories in the USA, Germany, Italy, and the UK with full manufacturer warranty coverage.",
              },
              {
                icon: Package,
                title: "Local Spares & Consumables Warehouse",
                desc: "We maintain extensive stocks of high-wear parts, O-rings, combustion capsules, quartz tubes, ignitor wires, benzoic acid standards, and catalyst reagents in Hyderabad for dispatch within 24 hours.",
              },
              {
                icon: Wrench,
                title: "300-Bar Hydrostatic Testing",
                desc: "Orbit maintains India's only dedicated Parr-certified oxygen combustion vessel hydrotest bench, providing mandatory ASTM-compliant vessel safety recertification and hydraulic proof testing.",
              },
              {
                icon: Truck,
                title: "Turnkey Customs & Cold-Chain Logistics",
                desc: "Our specialized logistics wing handles regulatory paperwork, customs clearance, transit insurance, and safe transportation of sensitive analytical instruments directly to your lab bench.",
              },
              {
                icon: Building2,
                title: "14 Direct Regional Branch Offices",
                desc: "Dedicated field sales and application support engineers based in Delhi, Mumbai, Kolkata, Chennai, Bangalore, Pune, Nagpur, Baroda, Raipur, Ranchi, Bilaspur, Bhubaneswar, and Vizag.",
              },
              {
                icon: Globe2,
                title: "Method Development & Training",
                desc: "Our application lab develops customized analytical calibration curves according to ASTM, ISO, DIN, and BIS methods, training your laboratory chemists before formal handover.",
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-[#d00000]/50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0056B3]/5 text-[#d00000]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-base text-[#0056B3]">{pillar.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global OEM Principals Showcase */}
      <section className="container-x py-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Premier Global Manufacturers We Proudly Represent
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Click on any principal to explore their history, equipment portfolio, and specifications.
            </p>
          </div>
          <Link
            href="/principals/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
          >
            View All Principals Hub <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPAL_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d00000]/60 hover:shadow-lg"
            >
              <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-50 p-4 flex items-center justify-center border-b border-slate-100">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <span className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-0.5 text-xs font-semibold text-slate-700 shadow-xs border border-slate-200">
                  {partner.flag} {partner.country}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#d00000]">
                    {partner.established}
                  </div>
                  <h3 className="mt-1 font-bold text-base text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {partner.focus}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/principals/${partner.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                  >
                    Explore Principal Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pan-India Branch Footprint */}
      <section className="bg-[#f8fafc] py-16 border-t border-slate-200">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              14 Branch Locations Serving Every Industrial Corridor
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our regional sales and service engineers are positioned close to India&apos;s major power stations, steel belts, refineries, and research centers.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {branchOffices.map((city) => (
              <span
                key={city}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#0056B3] shadow-xs hover:border-[#d00000] transition-colors"
              >
                📍 {city}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact-us" className="btn btn-outline">
              Find Your Nearest Branch Office <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RFQ and Distribution Consultation CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Ready to Equip Your Laboratory with International Precision?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Speak directly with an Orbit application specialist for budgetary quotations, ASTM/ISO method compliance audits, or turnkey laboratory supply packages.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Request Official Quotation <ArrowRight className="h-4 w-4" />
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
