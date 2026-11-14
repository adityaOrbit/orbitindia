import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { TemperatureCurve } from "@/components/temperature-curve";
import { Eyebrow, h2Cls, articleImage } from "@/components/knowledge/hub-ui";
import { KNOWLEDGE_ARTICLES } from "@/data/knowledge-hub";
import { products, type Product } from "@/data/products";
import { getKnowledgeArticleSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return KNOWLEDGE_ARTICLES.map((a) => ({ slug: a.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Orbit Technologies Knowledge Hub`,
    description: article.summary,
  };
}

/** Light box with a blue left rule, used for formulas and engineer notes. */
const noteCls = "mt-5 border-l-2 border-[#0056B3] bg-[var(--soft)] p-4";

export default async function KnowledgeArticleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Load recommended products
  const recommendedProducts: Product[] = [];
  if (article.recommendedProductSlugs) {
    article.recommendedProductSlugs.forEach((s) => {
      const p = products.find((prod) => prod.slug === s);
      if (p) recommendedProducts.push(p);
    });
  }

  const headerImage = articleImage(article);

  return (
    <div className="bg-white">
      <JsonLd data={getKnowledgeArticleSchema(article)} />
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub/" },
          { label: "Blogs", href: "/knowledge-hub/blogs/" },
          { label: article.title },
        ]}
      />

      {/* Article header: category, title, byline and standards left; the article's photo on a pale field bleeding right */}
      <header className="relative border-b border-[var(--line)]">
        {headerImage && <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[40%] bg-[#f3f5f8] lg:block" />}
        <div className={`container-x relative grid grid-cols-1 items-center ${headerImage ? "lg:grid-cols-[1.5fr_1fr]" : ""}`}>
          <div className="min-w-0 py-8 sm:py-10 lg:py-16 lg:pr-14">
            <Eyebrow>{article.category}</Eyebrow>
            <h1 className="mt-4 max-w-[22em] text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] lg:text-[2.9rem]">
              {article.title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-snug text-[var(--ink-2)] sm:text-xl">
              {article.subtitle}
            </p>

            {/* Byline */}
            <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--ink-3)]">
              <span className="font-medium text-[var(--ink)]">{article.author}</span>
              <span aria-hidden="true">·</span>
              <span>Updated {article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </p>

            {/* Standards referenced: a plain row of codes */}
            {article.standards.length > 0 && (
              <div className="mt-6 border-t border-[var(--line)] pt-4">
                <p className="text-[13px] text-[var(--ink-3)]">Standards referenced</p>
                <ul className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                  {article.standards.map((std) => (
                    <li
                      key={std}
                      className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[var(--ink)] tnum"
                    >
                      {std}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {headerImage && (
            <div className="relative -mx-4 h-56 bg-[#f3f5f8] sm:-mx-6 sm:h-72 lg:mx-0 lg:h-full lg:min-h-[340px] lg:bg-transparent">
              <Image
                src={headerImage}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-contain p-6 mix-blend-multiply lg:p-10"
              />
            </div>
          )}
        </div>
      </header>

      {/* Article Content Layout */}
      <div className="container-x max-w-[760px] py-8 sm:py-12">
        {/* Jump links */}
        {article.sections.length > 1 && (
          <nav aria-label="On this page" className="mb-8">
            <p className="font-[family-name:var(--font-poppins)] text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0056B3]">
              On this page
            </p>
            <ol className="mt-2 border-t border-[var(--line)] text-[15px]">
              {article.sections.map((sec, idx) => (
                <li key={idx} className="border-b border-[var(--line)]">
                  <a
                    href={`#section-${idx + 1}`}
                    className="flex min-h-[44px] items-center gap-4 py-2 text-[var(--ink-2)] hover:text-[#0056B3] lg:min-h-[36px]"
                  >
                    <span className="w-6 shrink-0 font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#0056B3] tnum">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">{sec.heading.replace(/^\d+\.\s*/, "")}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Key takeaways */}
        <div className="rounded-md bg-[#f3f5f8] p-5 sm:p-7">
          <p className="mb-2 font-[family-name:var(--font-poppins)] text-base font-semibold text-[var(--ink)]">Key takeaways</p>
          <p className="text-[17px] leading-[1.65] text-[var(--ink-2)]">{article.summary}</p>
        </div>

        {/* Detailed Sections */}
        <div className="mt-10">
          {article.sections.map((sec, idx) => (
            <section
              key={idx}
              id={`section-${idx + 1}`}
              className="scroll-mt-28 border-b border-[var(--line)] py-8 first:pt-0 last:border-b-0"
            >
              <h2 className="text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">
                {sec.heading}
              </h2>

              <p className="mt-4 whitespace-pre-line text-[17px] leading-[1.7] text-[var(--ink-2)]">
                {sec.content}
              </p>

              {sec.bulletPoints && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-[1.65] text-[var(--ink-2)] marker:text-[var(--ink-3)]">
                  {sec.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              )}

              {sec.formula && (
                <div className={`${noteCls} overflow-x-auto whitespace-pre font-mono text-sm leading-relaxed text-[var(--ink)]`}>
                  {sec.formula}
                </div>
              )}

              {sec.tip && (
                <div className={`${noteCls} text-[15px] leading-relaxed text-[var(--ink-2)]`}>
                  <strong className="font-semibold text-[var(--ink)]">Application Engineer Note:</strong> {sec.tip}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Inquiry prompt */}
        <div className="mt-4 flex flex-col gap-1 border-t border-[var(--line)] pt-6 text-[15px] text-[var(--ink-2)] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span>Questions about this method? Our application team can help.</span>
          <Link href="/contact-us#quote" className="link-more min-h-[44px] lg:min-h-0">
            Inquire About This Method →
          </Link>
        </div>
      </div>

      {/* Recommended Instruments for This Method — pale grey field */}
      {recommendedProducts.length > 0 && (
        <section className="bg-[#f3f5f8] py-14 sm:py-20">
          <div className="container-x">
            <Eyebrow>Instruments</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Featured Instruments for This Method</h2>
            <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-[var(--ink-3)]">
              Explore equipment engineered and calibrated to meet the specifications discussed in this whitepaper:
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {recommendedProducts.map((prod) => (
                <div key={prod.slug} className="min-w-0">
                  <ProductCard product={prod} compact />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Need Help Implementing {article.standards[0]} in Your Laboratory?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#c9d4e3]">
              Our application specialists can conduct on-site method validation, calibration curve setup, and operator training tailored to your exact sample matrix.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Consult Application Team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/knowledge-hub/blogs/"
              className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
            >
              Browse All Whitepapers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
