import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
import { PRINCIPALS } from "@/data/principals";

export const metadata: Metadata = {
  title: "OEM Principals & Global Partners | Orbit Technologies",
  description:
    "Explore Orbit Technologies' international OEM partners: Parr Instrument Company (USA), NCS (Germany), NC Technologies (Italy), Elite (UK), Sylab (France), and more.",
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

export default function PrincipalsHubPage() {
  const headerLogos = Array.from(new Set(PRINCIPALS.map((p) => p.logo))).slice(0, 6);

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Orbit as a Distributor", href: "/orbit-as-a-distributor/" },
          { label: "OEM Principals" },
        ]}
      />

      {/* Split header: H1 and intro left; principal logos on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.38fr_1fr]">
          <div className="min-w-0 py-8 sm:py-10 lg:py-14 lg:pr-14">
            <Eyebrow>Exclusive Representation in India</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.2rem] lg:text-[2.6rem]">
              OEM Principals &amp; Global Technology Partners
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              Orbit Technologies represents the world&apos;s most trusted manufacturers of calorimeters, chemical autoclaves, elemental analyzers, sample preparation mills, and high-temperature furnaces — backed by factory-certified service and local support across India.
            </p>
          </div>
          <div className="-mx-4 min-w-0 bg-[#f3f5f8] px-4 py-6 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-transparent lg:py-10 lg:pl-12 lg:pr-0">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {headerLogos.map((logo) => (
                <div key={logo} className="relative aspect-[300/140] overflow-hidden rounded-sm bg-white">
                  <Image src={logo} alt="" fill className="object-contain p-2" sizes="(min-width: 1024px) 200px, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principals Grid */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow>Principals</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Our International Instrument Partners</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              Click on any principal below to view their company history, key instruments, technical certifications, and direct product catalog links.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPALS.map((principal) => (
              <Link
                key={principal.slug}
                href={`/principals/${principal.slug}/`}
                className="group flex min-w-0 flex-col justify-between overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3]"
              >
                <div className="relative aspect-16/10 w-full bg-[#f3f5f8]">
                  <Image
                    src={principal.logo}
                    alt={principal.name}
                    fill
                    className="object-contain p-8 mix-blend-multiply"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="text-[13px] text-[var(--ink-3)]">{principal.partnershipYears}</p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ink)] group-hover:text-[#0056B3]">
                      {principal.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] text-[var(--ink-3)]">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {principal.headquarters}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--ink-2)]">
                      {principal.description}
                    </p>

                    <div className="mt-4 border-t border-[var(--line)] pt-4">
                      <p className="text-[13px] font-medium text-[var(--ink-3)]">Core Technologies:</p>
                      <ul className="mt-2 space-y-1">
                        {principal.coreCategories.slice(0, 3).map((cat, idx) => (
                          <li key={idx} className="truncate text-sm text-[var(--ink-2)]">
                            {cat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] pt-4">
                    <span className="link-more">
                      View Products &amp; History <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-[13px] text-[var(--ink-3)]">{principal.certifications[0]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Direct Technical Backup Banner — pale grey */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Direct factory backing</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Zero Middlemen. Direct Factory Backing for Indian Laboratories.</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-2)]">
              Procuring sophisticated analytical and high-pressure instruments through unauthorized third parties carries substantial risks: voided warranties, outdated calibration, lack of hydrotest certification, and unavailable spare parts.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
              Orbit Technologies has held formal, exclusive distributor agreements with its international principals for decades. Our service engineers receive direct factory training in Illinois, Düsseldorf, and Milan, ensuring that every instrument operates to original manufacturer design parameters.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-x-8 sm:grid-cols-2">
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
              <div key={idx} className="min-w-0 border-t border-[#cfd6df] py-5">
                <span className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#0056B3] tnum">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-semibold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-2)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Consultation CTA — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow dark>Technical proposals</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Need a Detailed Technical Proposal from Our Principals?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">
              Our application engineering group provides direct factory technical datasheets, tender specification compliance sheets, and site-readiness requirements.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Request OEM Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
