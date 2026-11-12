import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
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

  return (
    <div className="bg-white">
      <JsonLd data={getKnowledgeArticleSchema(article)} />
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub/" },
          { label: article.title },
        ]}
      />

      {/* Article Header: light and short so the content starts on the first phone screen */}
      <header className="border-b border-slate-200 bg-white pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="container-x max-w-3xl">
          <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-[#0056B3] sm:text-4xl lg:text-[2.6rem]">
            {article.title}
          </h1>

          <p className="mt-3 text-lg leading-snug text-slate-600 sm:text-xl">
            {article.subtitle}
          </p>

          {/* Byline */}
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">{article.author}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </p>

          {/* Jump links */}
          {article.sections.length > 1 && (
            <nav aria-label="On this page" className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-xs font-semibold text-slate-400">On this page</p>
              <ul className="mt-1 flex flex-wrap gap-x-4 text-sm">
                {article.sections.map((sec, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx + 1}`}
                      className="inline-flex min-h-[40px] items-center font-medium text-[#0056B3] underline-offset-4 hover:text-[#d00000] hover:underline"
                    >
                      {sec.heading.replace(/^\d+\.\s*/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Article Content Layout */}
      <div className="container-x max-w-3xl py-8 sm:py-12">
        {/* Key takeaways */}
        <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6">
          <p className="mb-2 text-xs font-semibold text-[#0056B3]">
            Key takeaways
          </p>
          <p className="text-[17px] leading-[1.6] text-slate-700">{article.summary}</p>
          {article.standards.length > 0 && (
            <p className="mt-4 border-t border-slate-200 pt-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-700">Standards referenced: </span>
              {article.standards.join(" · ")}
            </p>
          )}
        </div>

        {/* Detailed Sections */}
        <div className="mt-10 space-y-10">
          {article.sections.map((sec, idx) => (
            <section key={idx} id={`section-${idx + 1}`} className="scroll-mt-28 border-b border-slate-100 pb-8 last:border-b-0">
              <h2 className="text-xl font-bold tracking-tight text-[#0056B3] sm:text-2xl">
                {sec.heading}
              </h2>

              <p className="mt-4 whitespace-pre-line text-[17px] leading-[1.65] text-slate-700">
                {sec.content}
              </p>

              {sec.bulletPoints && (
                <ul className="mt-4 space-y-2.5 pl-2">
                  {sec.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-base leading-relaxed text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.formula && (
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-900 p-4 font-mono text-xs text-amber-300 shadow-inner overflow-x-auto whitespace-pre">
                  {sec.formula}
                </div>
              )}

              {sec.tip && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-900">
                  <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Application Engineer Note:</strong> {sec.tip}
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Inquiry prompt */}
        <div className="mt-10 flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Questions about this method? Our application team can help.</span>
          <Link
            href="/contact-us#quote"
            className="font-bold text-[#d00000] hover:underline"
          >
            Inquire About This Method →
          </Link>
        </div>
      </div>

      {/* Recommended Instruments for This Method */}
      {recommendedProducts.length > 0 && (
        <section className="bg-slate-50 py-16 border-t border-slate-200">
          <div className="container-x">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
                Featured Instruments for This Method
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Explore equipment engineered and calibrated to meet the specifications discussed in this whitepaper:
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedProducts.map((prod) => (
                <ProductCard key={prod.slug} product={prod} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Need Help Implementing {article.standards[0]} in Your Laboratory?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Our application specialists can conduct on-site method validation, calibration curve setup, and operator training tailored to your exact sample matrix.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Consult Application Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/knowledge-hub"
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Browse All Whitepapers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
