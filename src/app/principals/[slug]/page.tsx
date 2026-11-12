import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Calendar,
  MapPin,
  Layers,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-grid";
import { PRINCIPALS } from "@/data/principals";
import { products, type Product } from "@/data/products";
import { getPrincipalSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRINCIPALS.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const principal = PRINCIPALS.find((p) => p.slug === slug);
  if (!principal) return {};
  return {
    title: `${principal.name} Instruments & Systems in India | Orbit Technologies`,
    description: `${principal.tagline}. Authorized distribution, sales, installation, calibration and service by Orbit Technologies across India.`,
  };
}

export default async function PrincipalDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const principal = PRINCIPALS.find((p) => p.slug === slug);

  if (!principal) {
    notFound();
  }

  // Find products associated with this brand
  const brandProducts: Product[] = products.filter((p) => {
    if (!p.brand) return false;
    const b = p.brand.toLowerCase();
    const target = principal.brandKey.toLowerCase();
    return b.includes(target) || target.includes(b);
  });

  return (
    <div className="bg-white">
      <JsonLd
        data={getPrincipalSchema(
          principal.name,
          principal.tagline,
          principal.slug,
          principal.logo
        )}
      />
      <Breadcrumb
        items={[
          { label: "Orbit as a Distributor", href: "/orbit-as-a-distributor/" },
          { label: "OEM Principals", href: "/principals/" },
          { label: principal.name },
        ]}
      />

      {/* Hero Header */}
      <section className="border-b border-slate-200 bg-[#001c3d] py-14 text-white">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                  {principal.flag} {principal.country}
                </span>
                <span className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                  {principal.partnershipYears}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
                {principal.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-[#feeceb]">
                {principal.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-2xl">
                {principal.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#feeceb]" /> {principal.headquarters}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#feeceb]" /> Founded {principal.founded}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-[#feeceb]" /> {principal.certifications.join(", ")}
                </span>
              </div>
            </div>

            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 bg-white p-6 shadow-xl flex items-center justify-center">
              <Image
                src={principal.logo}
                alt={principal.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Technology Strengths */}
      <section className="container-x py-14">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Engineering Heritage Behind {principal.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {principal.fullHistory}
            </p>

            <div className="mt-8">
              <h3 className="font-bold text-lg text-[#0056B3]">Key Advantages in India</h3>
              <div className="mt-4 space-y-3">
                {principal.keyHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-base text-[#0056B3]">Core Product Focus</h3>
              <ul className="mt-4 space-y-2.5">
                {principal.coreCategories.map((cat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0056B3] text-[10px] font-bold text-white">
                      {idx + 1}
                    </span>
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-500">
                  Accreditations &amp; Standards
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {principal.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs font-semibold text-[#0056B3]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact-us#quote"
                  className="btn btn-accent w-full justify-center text-xs"
                >
                  Request Official Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog of Instruments */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
                {principal.name} Instruments in India
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Showing {brandProducts.length} certified models available through Orbit Technologies.
              </p>
            </div>
            <Link
              href="/products"
              className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
            >
              Browse Full Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {brandProducts.length > 0 ? (
            <ProductGrid
              products={brandProducts}
              className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
              itemListId={`principal_${principal.slug}`}
              itemListName={`${principal.name} Products`}
            />
          ) : (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-12 text-center">
              <Layers className="h-10 w-10 text-slate-400 mx-auto" />
              <p className="mt-3 text-base font-bold text-slate-700">
                Instruments available on custom request
              </p>
              <p className="mt-1 text-xs text-slate-500 max-w-md mx-auto">
                Contact our application team directly for technical datasheets and custom configurations for {principal.name}.
              </p>
              <Link href="/contact-us#quote" className="btn btn-accent mt-4 text-xs">
                Inquire About {principal.name}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Need Support, Spares, or Calibration for {principal.name}?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Orbit Technologies provides factory-authorized preventive maintenance, replacement parts, consumables, and on-site operator training across India.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Request Engineering Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/service-complaint-form"
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Book Service Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
