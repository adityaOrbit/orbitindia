import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductCard } from "@/components/product-card";
import { KNOWLEDGE_ARTICLES } from "@/data/knowledge-hub";
import { products, type Product } from "@/data/products";

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
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Knowledge Hub", href: "/knowledge-hub/" },
          { label: article.title },
        ]}
      />

      {/* Article Header */}
      <header className="border-b border-slate-200 bg-[#001c3d] py-14 text-white">
        <div className="container-x max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-[#d00000] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <Clock className="h-3.5 w-3.5 text-[#feeceb]" /> {article.readTime}
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-[#feeceb]" /> {article.date}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-white leading-tight">
            {article.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg font-medium text-[#feeceb]">
            {article.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
            <span className="text-xs font-semibold text-slate-400">Governing Standards:</span>
            {article.standards.map((std) => (
              <span
                key={std}
                className="rounded-md bg-white/10 px-2.5 py-0.5 font-mono text-xs font-medium text-slate-200"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Article Content Layout */}
      <div className="container-x max-w-4xl py-12">
        {/* Abstract / Summary Callout */}
        <div className="rounded-2xl border-l-4 border-l-[#d00000] border border-slate-200 bg-[#f8fafc] p-6 text-sm italic leading-relaxed text-slate-700 shadow-xs">
          <p className="font-semibold text-xs uppercase tracking-wider text-[#0056B3] not-italic mb-1">
            Executive Summary
          </p>
          {article.summary}
        </div>

        {/* Detailed Sections */}
        <div className="mt-10 space-y-10">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="border-b border-slate-100 pb-8 last:border-b-0">
              <h2 className="text-xl font-bold tracking-tight text-[#0056B3] sm:text-2xl">
                {sec.heading}
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
                {sec.content}
              </p>

              {sec.bulletPoints && (
                <ul className="mt-4 space-y-2.5 pl-2">
                  {sec.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
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
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900">
                  <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Application Engineer Note:</strong> {sec.tip}
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Author Bylines */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <User className="h-4 w-4 text-[#d00000]" />
            <span>Authored by: <strong className="text-[#0056B3]">{article.author}</strong></span>
          </div>
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
              <span className="inline-block rounded-md bg-[#d00000] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-black">
                Method Validation
              </span>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
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
