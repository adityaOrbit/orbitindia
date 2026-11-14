import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-grid";
import { TemperatureCurve } from "@/components/temperature-curve";
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

      {/* Split header: name, tagline and key facts left; logo on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[38%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0 py-8 sm:py-10 lg:py-14 lg:pr-14">
            <Eyebrow>
              {principal.country}
              {" · "}
              {principal.partnershipYears}
            </Eyebrow>
            <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.2rem] lg:text-[2.6rem]">
              {principal.name}
            </h1>
            <p className="mt-3 text-base font-medium leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              {principal.tagline}
            </p>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-3)]">
              {principal.description}
            </p>

            <dl className="mt-7 grid grid-cols-1 gap-x-8 border-t border-[var(--line)] sm:grid-cols-[auto_1fr_1.4fr]">
              <div className="flex min-w-0 flex-col-reverse border-b border-[var(--line)] py-4">
                <dt className="mt-1.5 text-[13px] text-[var(--ink-3)]">Founded</dt>
                <dd className="m-0 font-[family-name:var(--font-poppins)] text-[2.5rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum sm:text-[3rem]">{principal.founded}</dd>
              </div>
              <div className="flex min-w-0 flex-col-reverse border-b border-[var(--line)] py-4 sm:justify-end">
                <dt className="mt-0.5 flex items-center gap-1.5 text-[13px] text-[var(--ink-3)]">
                  <MapPin className="h-3.5 w-3.5 shrink-0" /> Headquarters
                </dt>
                <dd className="m-0 text-[15px] font-semibold text-[var(--ink)]">{principal.headquarters}</dd>
              </div>
              <div className="flex min-w-0 flex-col-reverse border-b border-[var(--line)] py-4 sm:justify-end">
                <dt className="mt-0.5 text-[13px] text-[var(--ink-3)]">Certifications</dt>
                <dd className="m-0 text-[15px] font-semibold text-[var(--ink)]">{principal.certifications.join(", ")}</dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] w-full px-6 sm:w-auto">
                Request Official Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="-mx-4 min-w-0 bg-[#f3f5f8] px-4 py-8 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-transparent lg:py-12 lg:pl-12 lg:pr-0">
            <div className="relative mx-auto aspect-[300/140] w-full max-w-[360px]">
              <Image
                src={principal.logo}
                alt={principal.name}
                fill
                priority
                className="object-contain mix-blend-multiply"
                sizes="(min-width: 1024px) 360px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Technology Strengths */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Heritage</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Engineering Heritage Behind {principal.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-2)]">{principal.fullHistory}</p>

            <h3 className="mt-10 text-lg font-semibold text-[var(--ink)]">Key Advantages in India</h3>
            <ul className="mt-3 border-t border-[var(--line)]">
              {principal.keyHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 border-b border-[var(--line)] py-2.5 text-[15px] text-[var(--ink-2)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="min-w-0">
            <h3 className="text-lg font-semibold text-[var(--ink)]">Core Product Focus</h3>
            <ol className="mt-3 border-t border-[var(--line)]">
              {principal.coreCategories.map((cat, idx) => (
                <li key={idx} className="flex items-start gap-3 border-b border-[var(--line)] py-2.5 text-[15px] text-[var(--ink-2)]">
                  <span className="w-7 shrink-0 font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#0056B3] tnum">{String(idx + 1).padStart(2, "0")}</span>
                  <span>{cat}</span>
                </li>
              ))}
            </ol>

            <h4 className="mt-8 text-[13px] font-medium text-[var(--ink-3)]">Accreditations &amp; Standards</h4>
            <p className="mt-1.5 text-[15px] font-medium text-[var(--ink)]">{principal.certifications.join(" · ")}</p>
          </aside>
        </div>
      </section>

      {/* Catalog of Instruments */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <Eyebrow>Instruments</Eyebrow>
              <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>{principal.name} Instruments in India</h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)] tnum">
                Showing {brandProducts.length} certified models available through Orbit Technologies.
              </p>
            </div>
            <Link href="/products" className="link-more min-h-[44px] lg:min-h-0">
              Browse Full Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {brandProducts.length > 0 ? (
            <ProductGrid
              products={brandProducts}
              className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
              itemListId={`principal_${principal.slug}`}
              itemListName={`${principal.name} Products`}
            />
          ) : (
            <div className="mt-8 rounded-md border border-[var(--line)] bg-white p-8 text-center sm:p-12">
              <p className="text-base font-semibold text-[var(--ink)]">Instruments available on custom request</p>
              <p className="mx-auto mt-1 max-w-md text-[15px] text-[var(--ink-3)]">
                Contact our application team directly for technical datasheets and custom configurations for {principal.name}.
              </p>
              <Link href="/contact-us#quote" className="btn btn-accent mt-5 min-h-[48px] px-6">
                Inquire About {principal.name}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow dark>Service and spares</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Need Support, Spares, or Calibration for {principal.name}?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">
              Orbit Technologies provides factory-authorized preventive maintenance, replacement parts, consumables, and on-site operator training across India.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Request Engineering Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/service-complaint-form" className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white">
              Book Service Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
