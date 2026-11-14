import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";

export const metadata: Metadata = {
  title: "Orbit as a Manufacturer | Orlab Instruments Pvt. Ltd.",
  description:
    "Orbit Technologies' manufacturing journey started in 1998 with Orlab Instruments Pvt. Ltd., an ISO 9001 certified & MSME registered project integrator and equipment manufacturer.",
};

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

export default function ManufacturerPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Orbit as a Manufacturer" },
        ]}
      />

      {/* Split header: H1 and intro left; TGA 3000 on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.38fr_1fr]">
          <div className="min-w-0 py-8 sm:py-10 lg:py-14 lg:pr-14">
            <Eyebrow>Indian Manufacturing &amp; Engineering</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.2rem] lg:text-[2.6rem]">
              Orbit as a Manufacturer — Orlab Instruments
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              Our manufacturing journey began in 1998 with our group company Orlab Instruments Pvt. Ltd. Today we operate an ISO 9001 certified facility dedicated to analytical testing kits, proximate analyzers, and specialized laboratory equipment.
            </p>
          </div>
          <figure className="relative -mx-4 my-0 h-64 min-w-0 bg-[#f3f5f8] sm:-mx-6 sm:h-80 lg:mx-0 lg:h-full lg:min-h-[340px] lg:bg-transparent">
            <Image
              src="/images/orbit/tga-3000.jpg"
              alt="Orlab Instruments Manufacturing Facility"
              fill
              priority
              className="object-contain p-6 mix-blend-multiply lg:p-10"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <figcaption className="absolute left-4 top-4 font-[family-name:var(--font-poppins)] text-[2.5rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum sm:left-6 sm:top-6 lg:left-12">
              1998
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>Orlab Instruments</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Precision Engineering Meets Field Practicality</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-2)]">
              Our journey into manufacturing started in 1998 with group company <strong className="font-semibold text-[var(--ink)]">Orlab Instruments Pvt. Ltd.</strong>, an ISO Certified &amp; MSME Registered Manufacturer and Project Integrator of diversified products in the field of Testing kits for Water &amp; Soil, Water &amp; Wastewater related Lab &amp; Field Instruments, and specialized analytical systems.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
              Over the last two decades, Orlab has grown to become one of India&apos;s leading manufacturers of soil testing laboratories, mobile soil testing vans, water testing kits, and laboratory analytical instruments including Thermogravimetric Analyzers (TGA 3000), Ash Fusion Analyzers (OFCU), and custom pressure vessels.
            </p>
          </div>
          <ul className="min-w-0 self-end border-t-2 border-[var(--ink)]">
            {[
              "Modern CNC machining and precision mechanical assembly",
              "Dedicated hydrostatic test benches proof-tested up to 500 bar",
              "In-house electronics fabrication and embedded microcontroller testing",
              "Certified calibration laboratories with NABL traceability standards",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 border-b border-[var(--line)] py-3.5 text-[15px] text-[var(--ink-2)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Manufactured Product Portfolio — pale grey */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow>Made in India</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Key Manufactured Instruments</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              Instruments proudly designed, manufactured, and supported in India by Orbit and Orlab Instruments.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {[
              {
                title: "TGA 3000 Thermogravimetric Analyzer",
                desc: "Automated proximate analysis of coal, coke, and solid fuels. Determines moisture, volatile matter, and ash in a single programmed cycle with 19-sample carrousel.",
                image: "/images/orbit/tga-3000.jpg",
                link: "/products/tga-3000-thermogravimetric-analyzer/",
              },
              {
                title: "OFCU Oxygen Flask Combustion Unit",
                desc: "Safe, rapid electrical ignition combustion unit for fluorine, chlorine, sulfur, and trace halides determination in organic and polymer matrices.",
                image: "/images/orbit/Carbon-and-Sulfur-Analyzers.png",
                link: "/products/oxygen-combustion-vessel/",
              },
              {
                title: "Ash Fusion Determinator (IF2000G)",
                desc: "Automatic determination of coal ash fusibility temperatures with high-resolution digital image capture compliant with ASTM D1857 and ISO 540.",
                image: "/images/orbit/IF2000G.jpg",
                link: "/ash-fusion-analyzers/",
              },
              {
                title: "Soil & Water Quality Field Testing Kits",
                desc: "Complete laboratory testing kits for pH, electrical conductivity, organic carbon, nitrogen, phosphorus, and potassium across Indian agricultural soil testing programs.",
                image: "/images/orbit/app-1.jpg",
                link: "/contact-us",
              },
              {
                title: "High-Pressure Reaction Autoclaves",
                desc: "Custom high-pressure reactors engineered in collaboration with Parr Instrument Company, customized for Indian petrochemical and chemical synthesis research.",
                image: "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
                link: "/reactors/",
              },
              {
                title: "Sample Preparation Presses & Crushers",
                desc: "Manual and semi-automatic hydraulic pellet presses, jaw crushers, and vibratory mills for mining, geological, and cement quality control laboratories.",
                image: "/images/orbit/Manual-Pellet-Press.jpg",
                link: "/milling-pulverising/",
              },
            ].map((prod) => (
              <Link
                key={prod.title}
                href={prod.link}
                className="group flex min-w-0 flex-col justify-between overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3]"
              >
                <div>
                  <div className="relative aspect-16/10 w-full overflow-hidden border-b border-[var(--line)] bg-white">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-contain p-4 mix-blend-multiply"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-[var(--ink)] group-hover:text-[#0056B3]">
                      {prod.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-2)]">{prod.desc}</p>
                  </div>
                </div>
                <span className="link-more px-5 pb-5">
                  View Specifications <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Integration CTA — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow dark>Custom engineering</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Have a Custom Manufacturing Requirement?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">
              Whether you need specialized pilot reactor systems, customized sample preparation lines, or mobile testing vans, our engineering team can design and build to your specifications.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Consult Application Engineers <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+914067216354" className="btn min-h-[48px] border border-white/45 px-6 text-white tnum hover:border-white">
              Call: +91 40 6721 6354
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
