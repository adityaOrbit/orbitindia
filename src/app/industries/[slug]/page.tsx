import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { industries } from "@/data/industries";
import { products, type Product } from "@/data/products";
import { getIndustryPageSchema } from "@/lib/schema";
import { withBasePath } from "@/lib/utils";

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

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Instrumentation & Analytical Solutions | Orbit Technologies`,
    description: `${industry.tagline}. ASTM and ISO compliant testing instruments supplied and serviced across India by Orbit Technologies.`,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  // Find products matching recommendedSlugs or industry slug/name
  const matchedProducts: Product[] = [];
  const addedSlugs = new Set<string>();

  // Priority 1: Recommended slugs
  if (industry.recommendedSlugs) {
    industry.recommendedSlugs.forEach((s) => {
      const p = products.find((prod) => prod.slug === s);
      if (p && !addedSlugs.has(p.slug)) {
        matchedProducts.push(p);
        addedSlugs.add(p.slug);
      }
    });
  }

  // Priority 2: Filter by product applications, category, or description keywords
  const keywords = industry.slug.split("-").filter((k) => k.length > 3);
  products.forEach((p) => {
    if (addedSlugs.has(p.slug)) return;
    const textToMatch = `${p.name} ${p.category} ${p.tagline} ${(p.applications || []).join(" ")}`.toLowerCase();
    if (keywords.some((kw) => textToMatch.includes(kw))) {
      matchedProducts.push(p);
      addedSlugs.add(p.slug);
    }
  });

  return (
    <div className="bg-white">
      <JsonLd
        data={getIndustryPageSchema(
          industry.name,
          industry.blurb,
          matchedProducts.map((p) => p.slug)
        )}
      />
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries/" },
          { label: industry.name },
        ]}
      />

      {/* Full-width photo banner: navy gradient on the left behind the H1 and intro */}
      <section className="relative overflow-hidden bg-[#001733] text-white">
        <Image
          src={withBasePath(industry.image)}
          alt={industry.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[#001733]/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#001733] lg:from-35% lg:via-[#001733]/85 lg:via-55% lg:to-transparent lg:to-80%"
        />
        <div className="container-x relative flex min-h-[340px] items-center py-10 sm:py-12 lg:min-h-[380px]">
          <div className="min-w-0 max-w-[40rem]">
            <Eyebrow dark>Industries</Eyebrow>
            <h1 className="mt-4 text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.6rem] lg:text-[2.9rem]">
              {industry.name}
            </h1>
            <p className="mt-3 text-[17px] font-medium leading-relaxed text-white sm:text-lg">
              {industry.tagline}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#c9d4e3]">{industry.blurb}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
                Request Solution Proposal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/products?industry=${industry.slug}`}
                className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
              >
                View Filtered Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key instruments strip */}
      <section className="border-b border-[var(--line)]">
        <div className="container-x py-6">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
            {industry.instruments.map((inst, idx) => (
              <li key={idx} className="flex min-w-0 items-start gap-2.5 text-[15px] font-medium text-[var(--ink)]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#0056B3]" />
                {inst}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Analytical challenges — large numerals */}
      <section className="bg-[#f3f5f8] py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="mb-9 max-w-3xl">
            <Eyebrow>Key challenges</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Critical Analytical Demands in {industry.name}</h2>
            <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">
              How our instrumentation overcomes measurement bottlenecks, improves repeatability, and maintains high throughput.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-x-12 border-t-2 border-[var(--ink)] sm:grid-cols-2">
            {industry.keyChallenges.map((challenge, idx) => (
              <li
                key={idx}
                className="grid min-w-0 grid-cols-[64px_minmax(0,1fr)] items-start gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[84px_minmax(0,1fr)]"
              >
                <span className="font-[family-name:var(--font-poppins)] text-[2.5rem] font-semibold leading-none tracking-[-0.02em] text-[#0056B3] tnum sm:text-[3.25rem]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-base leading-relaxed text-[var(--ink-2)]">{challenge}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ASTM / ISO standards */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Testing standards</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Applicable ASTM, ISO &amp; BIS Testing Standards</h2>
            <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">
              Our instrumentation is factory-calibrated to strictly comply with recognized national and international testing methods:
            </p>
          </div>

          <div className="min-w-0 overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col" className="w-[30%]">Standard</th>
                  <th scope="col">Test Method</th>
                  <th scope="col" className="hidden sm:table-cell">Compliance</th>
                </tr>
              </thead>
              <tbody>
                {industry.testingStandards.map((std, idx) => (
                  <tr key={idx}>
                    <td className="font-semibold">{std.code}</td>
                    <td className="!text-[var(--ink-2)]">{std.title}</td>
                    <td className="hidden whitespace-nowrap !text-[var(--ink-3)] sm:table-cell">Full Compliance</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Core applications — first one larger */}
      <section className="bg-[#f3f5f8] py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <Eyebrow>Applications</Eyebrow>
          <h2 className={`mb-9 mt-3 text-[var(--ink)] ${h2Cls}`}>Key Laboratory Workflows</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {industry.applications.map((app, idx) => {
              const lead = idx === 0;
              return (
                <div
                  key={idx}
                  className={`flex min-w-0 flex-col rounded-md bg-white p-6 ${lead ? "sm:col-span-2 lg:row-span-2 lg:p-8" : ""}`}
                >
                  <p className="font-[family-name:var(--font-poppins)] text-[13px] font-semibold text-[#0056B3] tnum">
                    Application {idx + 1}
                  </p>
                  <h3 className={`mt-1 font-semibold text-[var(--ink)] ${lead ? "text-xl sm:text-[1.5rem]" : "text-base"}`}>
                    {app.name}
                  </h3>
                  <p className={`mt-2 leading-relaxed text-[var(--ink-3)] ${lead ? "text-[15px] sm:text-base" : "text-sm"}`}>
                    {app.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommended instruments */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="min-w-0">
              <Eyebrow>Recommended instruments</Eyebrow>
              <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Featured Instruments for {industry.name}</h2>
              <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">
                Certified equipment engineered for this sector&apos;s demanding analytical parameters.
              </p>
            </div>
            <Link
              href={`/products?industry=${industry.slug}`}
              className="link-more min-h-[44px] !whitespace-normal lg:min-h-0"
            >
              Filter All Instruments for {industry.name} <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 [&>*]:min-w-0">
            {matchedProducts.map((prod) => (
              <ProductCard key={prod.slug} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow dark>Custom proposal</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Need a Custom Proposal for Your {industry.name} Facility?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#c9d4e3]">
              Our application engineering group provides detailed equipment sizing, utility requirement schedules, and ASTM/ISO standard compliance matrices.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Request Detailed Proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/our-clients"
              className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
            >
              View Client References
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
