import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { industries } from "@/data/industries";
import { products, type Product } from "@/data/products";
import { getIndustryPageSchema } from "@/lib/schema";

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

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#001c3d] py-16 text-white">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white">
                {industry.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-[#feeceb]">
                {industry.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {industry.blurb}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {industry.instruments.map((inst, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 border border-white/10"
                  >
                    ✓ {inst}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact-us#quote" className="btn btn-accent text-xs">
                  Request Solution Proposal <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/products?industry=${industry.slug}`}
                  className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20 text-xs"
                >
                  View Filtered Products
                </Link>
              </div>
            </div>

            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-2xl">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Challenges & Workflow Solutions */}
      <section className="container-x py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
            Critical Analytical Demands in {industry.name}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            How our instrumentation overcomes measurement bottlenecks, improves repeatability, and maintains high throughput.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {industry.keyChallenges.map((challenge, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0056B3] text-xs font-bold text-white">
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ASTM / ISO Standards Table */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Applicable ASTM, ISO &amp; BIS Testing Standards
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our instrumentation is factory-calibrated to strictly comply with recognized national and international testing methods:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="divide-y divide-slate-100">
              {industry.testingStandards.map((std, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between hover:bg-slate-50/80 transition"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#d00000] shrink-0" />
                    <div>
                      <span className="font-mono text-xs font-bold text-[#0056B3]">
                        {std.code}
                      </span>
                      <p className="text-xs text-slate-600 mt-0.5">{std.title}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 self-start sm:self-auto">
                    Full Compliance
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Applications Breakdown */}
      <section className="container-x py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
            Key Laboratory Workflows
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.applications.map((app, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-sm text-[#0056B3]">{app.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {app.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-[#d00000]">
                  Application {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Instruments Showcase */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
                Featured Instruments for {industry.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Certified equipment engineered for this sector&apos;s demanding analytical parameters.
              </p>
            </div>
            <Link
              href={`/products?industry=${industry.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
            >
              Filter All Instruments for {industry.name} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {matchedProducts.map((prod) => (
              <ProductCard key={prod.slug} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Need a Custom Proposal for Your {industry.name} Facility?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Our application engineering group provides detailed equipment sizing, utility requirement schedules, and ASTM/ISO standard compliance matrices.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Request Detailed Proposal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/our-clients"
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                View Client References
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
