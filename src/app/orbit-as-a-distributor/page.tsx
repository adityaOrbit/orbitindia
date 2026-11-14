import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
import { branchOffices } from "@/data/site";

export const metadata: Metadata = {
  title: "Orbit as a Distributor | 35+ Years of Scientific Instrumentation Excellence",
  description:
    "Orbit Technologies is the authorized distributor and technical partner for global manufacturers including Parr Instrument Company (USA), NCS (Germany), NC Technologies (Italy), and Elite (UK).",
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

export default function DistributorPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Orbit as a Distributor" },
        ]}
      />

      {/* Split header: H1 and intro left; principal logo on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.38fr_1fr]">
          <div className="min-w-0 py-8 sm:py-10 lg:py-14 lg:pr-14">
            <Eyebrow>Global Technology Partnership</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.2rem] lg:text-[2.6rem]">
              Orbit as a Distributor — International Analytical Instruments
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              For over 35 years, Orbit Technologies has served as the exclusive Indian bridge between international instrument manufacturers and India&apos;s top testing laboratories, industrial plants, and research institutes.
            </p>
          </div>
          <div className="-mx-4 min-w-0 bg-[#f3f5f8] px-4 py-8 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-transparent lg:py-12 lg:pl-12 lg:pr-0">
            <div className="relative mx-auto aspect-[300/140] w-full max-w-[380px]">
              <Image
                src="/images/orbit/parr.jpg"
                alt="Parr Instrument Company"
                fill
                priority
                className="object-contain mix-blend-multiply"
                sizes="(min-width: 1024px) 380px, 90vw"
              />
            </div>
            <p className="mt-5 text-center text-[13px] text-[var(--ink-3)]">
              <span className="font-medium text-[var(--ink-2)]">Parr Instrument Company</span> · Exclusive Partner since 1989
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section with Authentic Photos */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Engineering partner</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>More Than A Distributor: A Comprehensive Engineering Partner</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-2)]">
              When Indian laboratories invest in essential analytical instrumentation — such as
              oxygen bomb calorimeters measuring coal GCV at thermal power stations or high-pressure stirred
              autoclaves operating at 350 bar in petrochemical pilot plants — they need more than a trading vendor.
              They need an <strong className="font-semibold text-[var(--ink)]">authorized technical partner</strong> capable of handling the entire lifecycle.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
              Orbit Technologies Pvt. Ltd. acts as an exclusive distribution and service conduit for world-renowned instrumentation manufacturers. With a team of factory-trained application specialists, certified service engineers, and an extensive inventory of local spare parts in Hyderabad, we ensure zero laboratory downtime and strict compliance with international ASTM, ISO, and BIS testing standards.
            </p>

            <ul className="mt-6 border-t border-[var(--line)]">
              {[
                "Direct exclusive OEM representation eliminating grey-market risks",
                "Pan-India field service response within 24–48 hours across 14 locations",
                "Hyderabad central bonded warehouse for immediate spare parts & consumables dispatch",
                "OEM factory certification for oxygen bomb hydrotesting proof-tested up to 300 bar",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 border-b border-[var(--line)] py-2.5 text-[15px] text-[var(--ink-2)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 lg:grid-cols-1">
            <div className="relative aspect-[300/140] overflow-hidden rounded-md border border-[var(--line)] bg-white">
              <Image
                src="/images/orbit/orbit-distrubutor1.jpg"
                alt="Orbit Distribution Operations"
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
            <div className="relative aspect-[300/140] overflow-hidden rounded-md border border-[var(--line)] bg-white">
              <Image
                src="/images/orbit/orbit-distrubutor2.jpg"
                alt="Orbit Instrument Testing Lab"
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Pillars — pale grey */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow>Infrastructure</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Distribution Backed by Comprehensive Technical Infrastructure</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">How our distribution ecosystem protects your analytical capital investments:</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "100% Genuine OEM Warranty",
                desc: "All instruments, accessories, reaction vessels, and internal components are imported directly from original OEM factories in the USA, Germany, Italy, and the UK with full manufacturer warranty coverage.",
              },
              {
                title: "Local Spares & Consumables Warehouse",
                desc: "We maintain extensive stocks of high-wear parts, O-rings, combustion capsules, quartz tubes, ignitor wires, benzoic acid standards, and catalyst reagents in Hyderabad for dispatch within 24 hours.",
              },
              {
                title: "300-Bar Hydrostatic Testing",
                desc: "Orbit maintains India's only dedicated Parr-certified oxygen combustion vessel hydrotest bench, providing mandatory ASTM-compliant vessel safety recertification and hydraulic proof testing.",
              },
              {
                title: "Turnkey Customs & Cold-Chain Logistics",
                desc: "Our specialized logistics wing handles regulatory paperwork, customs clearance, transit insurance, and safe transportation of sensitive analytical instruments directly to your lab bench.",
              },
              {
                title: "14 Direct Regional Branch Offices",
                desc: "Dedicated field sales and application support engineers based in Delhi, Mumbai, Kolkata, Chennai, Bangalore, Pune, Nagpur, Baroda, Raipur, Ranchi, Bilaspur, Bhubaneswar, and Vizag.",
              },
              {
                title: "Method Development & Training",
                desc: "Our application lab develops customized analytical calibration curves according to ASTM, ISO, DIN, and BIS methods, training your laboratory chemists before formal handover.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="min-w-0 border-t border-[#cfd6df] py-6">
                <span className="font-[family-name:var(--font-poppins)] text-[2rem] font-semibold leading-none tracking-[-0.02em] text-[#0056B3] tnum">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{pillar.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global OEM Principals Showcase */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <Eyebrow>Principals</Eyebrow>
              <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Global Manufacturers We Represent</h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
                Click on any principal to explore their history, equipment portfolio, and specifications.
              </p>
            </div>
            <Link href="/principals/" className="link-more min-h-[44px] lg:min-h-0">
              View All Principals Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPAL_PARTNERS.map((partner) => (
              <Link
                key={partner.name}
                href={`/principals/${partner.slug}/`}
                className="group flex min-w-0 flex-col justify-between overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3]"
              >
                <div className="relative aspect-16/9 w-full bg-[#f3f5f8]">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-6 mix-blend-multiply"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-[13px] text-[var(--ink-3)]">{partner.established}</p>
                    <h3 className="mt-1 text-base font-semibold text-[var(--ink)] group-hover:text-[#0056B3]">
                      {partner.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">{partner.focus}</p>
                  </div>
                  <span className="link-more mt-4">
                    Explore Principal Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-India Branch Footprint — pale grey, large count */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>Branch network</Eyebrow>
            <p className="mt-4 font-[family-name:var(--font-poppins)] text-[4rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] tnum sm:text-[5.5rem]">
              14
            </p>
            <h2 className={`mt-4 text-[var(--ink)] ${h2Cls}`}>14 Branch Locations Serving Every Industrial Corridor</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              Our regional sales and service engineers are positioned close to India&apos;s major power stations, steel belts, refineries, and research centers.
            </p>
            <Link href="/contact-us" className="btn btn-outline mt-7 min-h-[48px] px-6">
              Find Your Nearest Branch Office <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="grid min-w-0 grid-cols-2 gap-x-6 self-end sm:grid-cols-3 lg:grid-cols-4">
            {branchOffices.map((city) => (
              <li key={city} className="flex min-w-0 items-center gap-2 border-b border-[#cfd6df] py-3 text-[15px] font-medium text-[var(--ink)]">
                <MapPin className="h-4 w-4 shrink-0 text-[#0056B3]" />
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RFQ and Distribution Consultation CTA — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow dark>Request a quote</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Ready to Equip Your Laboratory with International Precision?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">
              Speak directly with an Orbit application specialist for budgetary quotations, ASTM/ISO method compliance audits, or turnkey laboratory supply packages.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Request Official Quotation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white">
              Browse All Instruments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
