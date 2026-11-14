import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Wrench,
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  Award,
  Zap,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
import { JsonLd } from "@/components/json-ld";
import { getServicesPageSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service, Maintenance & 300-Bar Hydrotesting | Orbit Technologies",
  description:
    "Orbit Technologies provides nationwide technical service, annual maintenance contracts (AMC/CMC), Parr-certified 300-bar oxygen vessel hydrotesting, and NABL-traceable calibration.",
};

const SERVICES_LIST = [
  {
    title: "Preventive Maintenance Contracts (AMC & CMC)",
    icon: ShieldCheck,
    tag: "Uptime Assurance",
    image: "/images/orbit/services-1.jpg",
    desc: "Scheduled periodic inspections, cleaning of optical paths, seal replacements, electronic diagnostics, and priority emergency breakdown call-outs across India.",
    points: [
      "Quarterly or half-yearly structured maintenance visits",
      "Comprehensive (CMC) including electronic cards and sensors or Non-Comprehensive (AMC)",
      "Guaranteed emergency on-site engineer dispatch within 24–48 hours",
      "Detailed health audit reports and preventive replacement alerts",
    ],
  },
  {
    title: "300-Bar Oxygen Vessel Hydrostatic Testing",
    icon: ShieldAlert,
    tag: "Statutory Safety",
    image: "/images/orbit/services-2.jpg",
    desc: "India's only dedicated Parr-certified hydrostatic proof-testing center for oxygen combustion vessels, ensuring compliance with mandatory safety protocols.",
    points: [
      "Proof-testing up to 300 bar (4,350 psi) on certified hydraulic test benches",
      "Thread gauge and closure cap dimensional verification",
      "Ultrasonic wall thickness measurement and micro-crack dye penetrant inspection",
      "Official Hydrostatic Test Certificate issued for ISO/NABL safety audits",
    ],
  },
  {
    title: "NABL-Traceable Calibration & Validation",
    icon: FileCheck,
    tag: "Accuracy Standards",
    image: "/images/orbit/services-3.jpg",
    desc: "Precision temperature, pressure, and thermal balance calibration utilizing primary reference standards traceable to NIST, NPL, and BCR.",
    points: [
      "Calorimeter energy equivalent (W-value) standardization using high-purity Benzoic Acid",
      "Thermocouple and optical pyrometer calibration for ash fusion and furnaces",
      "Installation Qualification (IQ) and Operational Qualification (OQ) execution",
      "Traceability certificates meeting ISO/IEC 17025 lab accreditation requirements",
    ],
  },
  {
    title: "Component-Level Diagnostics & Overhauls",
    icon: Wrench,
    tag: "Factory Repairs",
    image: "/images/orbit/services-4.jpg",
    desc: "Hyderabad central repair facility equipped with micro-soldering stations, diagnostic test jigs, helium leak detectors, and OEM replacement assemblies.",
    points: [
      "Repairs of furnace PID controllers, solid-state relays, and heating elements",
      "Rebuilding of high-pressure magnetic stirrers, packing glands, and valves",
      "Infrared NDIR detector cell cleaning and optoelectronic re-alignment",
      "Buffer pool of standby loaner units to eliminate laboratory downtime",
    ],
  },
  {
    title: "Installation, Commissioning & Site Acceptance",
    icon: Zap,
    tag: "Turnkey Setup",
    image: "/images/orbit/services-5.jpg",
    desc: "End-to-end site preparation advisory, uncrating, precision leveling, gas purity line installation, and complete Site Acceptance Testing (SAT).",
    points: [
      "Pre-installation facility check (voltage stability, gas purity, exhaust ducting)",
      "Helium/oxygen high-pressure manifold piping and leak-tight testing",
      "Real client sample testing alongside certified reference standards",
      "Formal SAT sign-off and warranty activation directly with OEM principals",
    ],
  },
  {
    title: "Application Training & Method Optimization",
    icon: Award,
    tag: "Skill Transfer",
    image: "/images/orbit/services-1.jpg",
    desc: "Customized technical training programs for laboratory chemists on ASTM, ISO, and BIS testing methodologies and routine diagnostic best practices.",
    points: [
      "Standard test methods: ASTM D5865 (GCV), ASTM D7582 (TGA), ASTM D1857 (Ash Fusion)",
      "Sample preparation and grinding optimization to prevent matrix errors",
      "Routine operator safety drills for high-pressure oxygen and compressed gas cylinders",
      "Continuous application support via direct WhatsApp/phone hotline",
    ],
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

export default function OurServicesPage() {
  return (
    <div className="bg-white">
      <JsonLd data={getServicesPageSchema()} />
      <Breadcrumb
        items={[
          { label: "Our Services" },
        ]}
      />

      {/* Split header: H1 and intro left; service photo on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.38fr_1fr]">
          <div className="min-w-0 py-8 sm:py-10 lg:py-14 lg:pr-14">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.2rem] lg:text-[2.6rem]">
              Our Services — Calibration, Hydrotesting &amp; Annual Maintenance
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              Orbit Technologies delivers rapid technical assistance, factory-certified preventive maintenance, 300-bar oxygen vessel hydrostatic proof-testing, and certified calibration across India.
            </p>
            <p className="mt-5 text-[13px] text-[var(--ink-3)]">Nationwide Technical Lifecycle Support</p>
          </div>
          <div className="-mx-4 min-w-0 bg-[#f3f5f8] px-4 py-6 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-transparent lg:py-10 lg:pl-12 lg:pr-0">
            <div className="relative aspect-[515/450] overflow-hidden rounded-md">
              <Image
                src="/images/orbit/services-3.jpg"
                alt="Hydrostatic test equipment"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Service Offerings — numbered rows */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Specialized Engineering &amp; Metrology Services</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              Backed by 35+ years of domain expertise, our service team ensures your equipment maintains factory-grade measurement precision and safe operation.
            </p>
          </div>

          <ol className="mt-10 border-t-2 border-[var(--ink)]">
            {SERVICES_LIST.map((srv, idx) => (
              <li
                key={idx}
                className="grid grid-cols-1 gap-5 border-b border-[var(--line)] py-8 md:grid-cols-[5.5rem_1fr] lg:grid-cols-[6.5rem_1fr_1fr_13rem] lg:gap-10 lg:py-10"
              >
                <span className="font-[family-name:var(--font-poppins)] text-[2.75rem] font-semibold leading-none tracking-[-0.03em] text-[#0056B3] tnum sm:text-[3.5rem]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-poppins)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-3)]">{srv.tag}</p>
                  <h3 className="mt-1.5 text-xl font-semibold leading-snug text-[var(--ink)]">{srv.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">{srv.desc}</p>
                  <Link href="/service-complaint-form" className="link-more mt-4 min-h-[44px] lg:min-h-0">
                    Book This Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <ul className="min-w-0 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--ink-2)] marker:text-[#0056B3] md:col-start-2 lg:col-start-auto">
                  {srv.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
                <div className="relative aspect-16/10 w-full min-w-0 overflow-hidden rounded-sm bg-[var(--soft)] md:col-start-2 lg:col-start-auto lg:aspect-4/3">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 208px, (min-width: 768px) 80vw, 100vw"
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Oxygen Vessel Safety Warning & Proof-Testing Feature — navy band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-20 lg:py-[88px]">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 top-10 h-[140px] opacity-35" />
        <div className="container-x relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="min-w-0">
            <Eyebrow dark>Statutory Safety</Eyebrow>
            <h2 className={`mt-3 text-white ${h2Cls}`}>Why 300-Bar Hydrostatic Testing Is Critical for Oxygen Bombs</h2>
            <p className="mt-4 text-base leading-relaxed text-[#c9d4e3]">
              Parr oxygen combustion vessels operate with 30 atmospheres (450 psi) of pure oxygen, reaching internal peak combustion pressures exceeding 100 atmospheres (1,500 psi) during the firing of coal or fuel samples.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#b7c4d6]">
              Under international safety codes (including ASTM and ASME guidelines), oxygen bombs must be hydrostatically tested to 300 bar (4,350 psi) at least once every 12 to 24 months, or whenever the vessel has experienced 500 firings. Using an uncertified or fatigue-stressed vessel poses severe catastrophic risks.
            </p>

            <ul className="mt-6 border-t border-white/20">
              {[
                "Parr-certified hydraulic test bench located in Hyderabad",
                "Digital micrometer thread wear verification (no pitch distortion)",
                "Ultrasonic wall thickness measurement verifying no corrosion thinning",
                "Certified test certificate valid for statutory regulatory and insurance audits",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 border-b border-white/20 py-2.5 text-[15px] text-white">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7fb2f0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/service-complaint-form" className="btn btn-accent mt-7 min-h-[48px] whitespace-normal px-6 text-center">
              Schedule Oxygen Vessel Hydrotesting <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="min-w-0">
            <div className="font-[family-name:var(--font-poppins)] text-[3.5rem] font-semibold leading-none tracking-[-0.03em] text-white tnum sm:text-[5rem]">
              300 bar
            </div>
            <p className="mt-2 text-[15px] text-[#b7c4d6]">(4,350 psi)</p>
            <div className="relative mt-6 aspect-4/3 overflow-hidden rounded-md bg-white/5">
              <Image
                src="/images/orbit/services-2.jpg"
                alt="Parr Oxygen Vessel Hydrostatic Testing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Service Booking Banner */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Book a visit</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Ready to Schedule Maintenance or Recalibration?</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-2)] sm:text-base">
              Fill out our online service complaint form or call our Hyderabad service control desk. We will assign an authorized service engineer from your nearest branch.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link href="/service-complaint-form" className="btn btn-primary min-h-[48px] px-6">
              Submit Online Service Ticket <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phones.service.replace(/[^+\d]/g, "")}`}
              className="btn btn-outline min-h-[48px] px-6 tnum"
            >
              Call: {site.phones.service}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
