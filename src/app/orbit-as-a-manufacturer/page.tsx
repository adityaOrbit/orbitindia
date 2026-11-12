import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Orbit as a Manufacturer | Orlab Instruments Pvt. Ltd.",
  description:
    "Orbit Technologies' manufacturing journey started in 1998 with Orlab Instruments Pvt. Ltd., an ISO 9001 certified & MSME registered project integrator and equipment manufacturer.",
};

export default function ManufacturerPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Orbit as a Manufacturer" },
        ]}
      />

      <PageHero
        eyebrow="Indian Manufacturing & Engineering"
        title="Orbit as a Manufacturer — Orlab Instruments"
        subtitle="Our manufacturing journey began in 1998 with our group company Orlab Instruments Pvt. Ltd. Today we operate an ISO 9001 certified facility dedicated to analytical testing kits, proximate analyzers, and specialized laboratory equipment."
      />

      {/* Main Narrative & Story */}
      <section className="container-x mt-8 py-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Precision Engineering Meets Field Practicality
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Our journey into manufacturing started in 1998 with group company <strong className="text-[#0056B3]">Orlab Instruments Pvt. Ltd.</strong>, an ISO Certified &amp; MSME Registered Manufacturer and Project Integrator of diversified products in the field of Testing kits for Water &amp; Soil, Water &amp; Wastewater related Lab &amp; Field Instruments, and specialized analytical systems.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Over the last two decades, Orlab has grown to become one of India&apos;s leading manufacturers of soil testing laboratories, mobile soil testing vans, water testing kits, and laboratory analytical instruments including Thermogravimetric Analyzers (TGA 3000), Ash Fusion Analyzers (OFCU), and custom pressure vessels.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Modern CNC machining and precision mechanical assembly",
                "Dedicated hydrostatic test benches proof-tested up to 500 bar",
                "In-house electronics fabrication and embedded microcontroller testing",
                "Certified calibration laboratories with NABL traceability standards",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <Image
              src="/images/orbit/tga-3000.jpg"
              alt="Orlab Instruments Manufacturing Facility"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Core Manufactured Product Portfolio */}
      <section className="bg-slate-50 py-16 border-y border-slate-200 mt-12">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Key Manufactured Instruments
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Instruments proudly designed, manufactured, and supported in India by Orbit and Orlab Instruments.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <div
                key={prod.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d00000]/60 hover:shadow-lg"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#f9fafb] p-4 flex items-center justify-center border-b border-slate-100">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-bold text-base text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {prod.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <Link
                      href={prod.link}
                      className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                    >
                      View Specifications <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Integration CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Have a Custom Manufacturing Requirement?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Whether you need specialized pilot reactor systems, customized sample preparation lines, or mobile testing vans, our engineering team can design and build to your specifications.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Consult Application Engineers <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+914067216354" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20">
                Call: +91 40 6721 6354
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
