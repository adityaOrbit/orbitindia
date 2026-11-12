import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Award,
  Zap,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
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

export default function OurServicesPage() {
  return (
    <div className="bg-white">
      <JsonLd data={getServicesPageSchema()} />
      <Breadcrumb
        items={[
          { label: "Our Services" },
        ]}
      />

      <PageHero
        eyebrow="Nationwide Technical Lifecycle Support"
        title="Our Services — Calibration, Hydrotesting & Annual Maintenance"
        subtitle="Orbit Technologies delivers rapid technical assistance, factory-certified preventive maintenance, 300-bar oxygen vessel hydrostatic proof-testing, and certified calibration across India."
      />

      {/* 6 Core Service Offerings */}
      <section className="container-x py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
            Specialized Engineering &amp; Metrology Services
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Backed by 35+ years of domain expertise, our service team ensures your equipment maintains factory-grade measurement precision and safe operation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d00000]/60 hover:shadow-lg"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0056B3]/5 text-[#d00000]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-bold text-base text-[#0056B3] group-hover:text-[#d00000] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {srv.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <ul className="space-y-1.5">
                        {srv.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/service-complaint-form"
                      className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                    >
                      Book This Service <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Oxygen Vessel Safety Warning & Proof-Testing Feature */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
                Why 300-Bar Hydrostatic Testing Is Critical for Oxygen Bombs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Parr oxygen combustion vessels operate with 30 atmospheres (450 psi) of pure oxygen, reaching internal peak combustion pressures exceeding 100 atmospheres (1,500 psi) during the firing of coal or fuel samples.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Under international safety codes (including ASTM and ASME guidelines), oxygen bombs must be hydrostatically tested to 300 bar (4,350 psi) at least once every 12 to 24 months, or whenever the vessel has experienced 500 firings. Using an uncertified or fatigue-stressed vessel poses severe catastrophic risks.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Parr-certified hydraulic test bench located in Hyderabad",
                  "Digital micrometer thread wear verification (no pitch distortion)",
                  "Ultrasonic wall thickness measurement verifying no corrosion thinning",
                  "Certified test certificate valid for statutory regulatory and insurance audits",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link href="/service-complaint-form" className="btn btn-accent text-xs">
                  Schedule Oxygen Vessel Hydrotesting <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
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
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Ready to Schedule Maintenance or Recalibration?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Fill out our online service complaint form or call our Hyderabad service control desk. We will assign an authorized service engineer from your nearest branch.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/service-complaint-form" className="btn btn-accent">
                Submit Online Service Ticket <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.phones.service.replace(/[^+\d]/g, "")}`}
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Call: {site.phones.service}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
