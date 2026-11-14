import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
import { industries } from "@/data/industries";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industry Solutions & Applications | Orbit Technologies",
  description:
    "Explore Orbit Technologies' specialized scientific instrumentation solutions for coal & fuels, steel & metallurgy, cement, petrochemicals, pharma, mining, and research.",
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

/** Header collage: one photo per distinct industry image (first four). */
const collage = Array.from(new Map(industries.map((i) => [i.image, i])).values()).slice(0, 4);

export default function IndustriesHubPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Industries" },
        ]}
      />

      {/* Split header: eyebrow, H1 and intro left; industry photo collage on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid items-center lg:grid-cols-[1.38fr_1fr]">
          <div className="min-w-0 py-10 sm:py-12 lg:py-16 lg:pr-14">
            <Eyebrow>Industries</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] lg:text-[2.8rem]">
              Industries We Serve — Precision Instrumentation by Sector
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              From thermal power stations and steel smelters to petrochemical pilot plants and central research institutes, Orbit Technologies equips India&apos;s core industries with ASTM/ISO-compliant analytical systems.
            </p>
          </div>
          <div className="-mx-4 grid min-w-0 grid-cols-2 gap-2 bg-[#f3f5f8] p-4 sm:-mx-6 sm:gap-3 sm:p-6 lg:mx-0 lg:bg-transparent lg:py-12 lg:pl-10 lg:pr-0">
            {collage.map((ind, i) => (
              <div
                key={ind.image}
                className={`relative aspect-[4/3] overflow-hidden rounded-md bg-white ${i % 2 === 1 ? "lg:translate-y-6" : ""}`}
              >
                <Image
                  src={withBasePath(ind.image)}
                  alt={ind.name}
                  fill
                  priority={i < 2}
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — two large photo cards, then smaller ones */}
      <section className="bg-[#f3f5f8] py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="mb-9 max-w-3xl">
            <Eyebrow>Sectors</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Choose Your Industry Sector</h2>
            <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">
              Select an industry below to see workflow challenges, applicable standard test methods, and pre-configured equipment packages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
            {industries.map((ind, i) => {
              const large = i < 2;
              return (
                <div
                  key={ind.slug}
                  className={`group relative flex min-w-0 flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3] ${
                    large ? "lg:col-span-3" : "lg:col-span-2"
                  }`}
                >
                  <div className={`relative w-full overflow-hidden bg-[var(--soft)] ${large ? "aspect-[16/10] lg:aspect-[16/8]" : "aspect-[16/10]"}`}>
                    <Image
                      src={withBasePath(ind.image)}
                      alt={ind.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes={large ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    />
                  </div>

                  <div className={`flex flex-1 flex-col ${large ? "p-6 sm:p-7" : "p-5"}`}>
                    <h3
                      className={`font-semibold text-[var(--ink)] group-hover:text-[#0056B3] ${
                        large ? "text-xl sm:text-[1.5rem]" : "text-lg"
                      }`}
                    >
                      {ind.name}
                    </h3>
                    <p className={`mt-2 leading-relaxed text-[var(--ink-3)] ${large ? "text-[15px]" : "text-sm"}`}>{ind.blurb}</p>

                    <p className="mt-4 border-t border-[var(--line)] pt-3 text-[13px] leading-relaxed text-[var(--ink-2)]">
                      <span className="font-medium text-[var(--ink)]">Key Instruments:</span>{" "}
                      {ind.instruments.join(" · ")}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 pt-4">
                      <Link
                        href={`/industries/${ind.slug}/`}
                        className="link-more min-h-[44px] after:absolute after:inset-0 after:content-[''] lg:min-h-0"
                      >
                        Explore Sector Solutions <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/products?industry=${ind.slug}`}
                        className="relative z-10 inline-flex min-h-[44px] items-center text-[13px] text-[var(--ink-3)] hover:text-[#0056B3] hover:underline lg:min-h-0"
                      >
                        Filter Products
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Turnkey integration CTA — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow dark>Turnkey laboratories</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Need a Complete Turnkey Lab Package for Your Plant?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#c9d4e3]">
              We design and supply complete turnkey analytical testing suites for thermal power plants, cement units, coal washeries, and metallurgy labs including sample preparation, analysis, standards, and gases.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Consult Sector Specialists <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
            >
              Browse All Instruments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
