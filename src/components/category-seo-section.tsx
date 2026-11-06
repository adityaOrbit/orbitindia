"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  Layers,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { getCategorySeoData } from "@/data/category-seo";
import { site } from "@/data/site";

export function CategorySeoSection({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const seoData = getCategorySeoData(category);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Merge any category-specific curated FAQs with SEO FAQs
  const allFaqs = [
    ...seoData.faqs,
    ...(category.faq || []).filter(
      (f) => !seoData.faqs.some((sf) => sf.q.toLowerCase() === f.q.toLowerCase()),
    ),
  ];

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `https://orbitindia.com/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: category.name,
            item: `https://orbitindia.com/${category.path}/`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: `${category.name} Range by Orbit Technologies`,
        description: seoData.metaDescription,
        numberOfItems: products.length,
        itemListElement: products.slice(0, 12).map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: p.name,
          url: `https://orbitindia.com/products/${p.slug}/`,
        })),
      },
      ...(allFaqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: allFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <article
      className="mt-16 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16"
      aria-label={`Technical Overview and Standards for ${category.name}`}
    >
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight text-[#002f49] sm:text-3xl lg:text-4xl">
            {seoData.overviewTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {seoData.technicalSummary}
          </p>
        </div>

        {/* 2-Column Technical Pillars */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Working Principles */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#002f49]/10 text-[#002f49]">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#002f49]">
                Measurement Principles & Technology
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5 text-sm leading-relaxed text-slate-600">
              {seoData.principles.map((pr, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c4620a]" />
                  <span>{pr}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Test Standards & Methods */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c4620a]/10 text-[#c4620a]">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#002f49]">
                International Standards & Regulatory Compliance
              </h3>
            </div>
            <div className="mt-6 space-y-4">
              {seoData.standards.map((std, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-100 bg-slate-50/70 p-3.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-[#c4620a]">
                      {std.code}
                    </span>
                    <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 uppercase">
                      Compliance
                    </span>
                  </div>
                  <h4 className="mt-1 text-sm font-semibold text-[#002f49]">
                    {std.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {std.scope}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#002f49]/10 text-[#002f49]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#002f49]">
                Core Industrial Applications
              </h3>
            </div>
            <div className="mt-6 divide-y divide-slate-100">
              {seoData.applications.map((app, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                  <h4 className="text-sm font-bold text-[#002f49]">
                    {app.industry}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {app.useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selection Guide */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c4620a]/10 text-[#c4620a]">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#002f49]">
                Laboratory Selection Checklist
              </h3>
            </div>
            <div className="mt-6 space-y-3.5">
              {seoData.selectionCriteria.map((crit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#c4620a]" />
                  <div>
                    <span className="font-semibold text-[#002f49]">
                      {crit.factor}:{" "}
                    </span>
                    <span className="text-slate-600">{crit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Orbit Infrastructure Banner */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-[#002f49] p-8 text-white shadow-md sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Why Laboratories Across India Partner with Orbit Technologies
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                Established in Hyderabad in 1995, Orbit Technologies manufactures and
                represents world-class scientific instruments. As Parr Instrument
                Company&apos;s exclusive partner and #1 Global Dealer for new orders, we
                provide full end-to-end support: from testing application guidance and
                custom engineering to factory-certified installation, NABL-traceable
                calibration, and lifetime spares.
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-white/5 p-6 backdrop-blur-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffb347]">
                <MapPin className="h-4 w-4" /> Pan-India Support Network
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                14 Dedicated Sales &amp; Service Branch Locations:
              </p>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-slate-300">
                Hyderabad · Delhi · Mumbai · Kolkata · Chennai · Bangalore · Pune ·
                Nagpur · Lucknow · Baroda · Bhubaneswar · Bilaspur · Raipur · Ranchi
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-300">Direct Sales Desk:</span>
                <a
                  href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
                  className="text-xs font-bold text-[#ffb347] hover:underline"
                >
                  {site.phones.sales1}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical FAQ */}
        {allFaqs.length > 0 && (
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-[#002f49] sm:text-3xl">
                Common Technical Questions: {category.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Key questions on testing standards, operating methods, maintenance,
                and calibration.
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto space-y-3">
              {allFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-[#002f49] hover:bg-slate-50"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#c4620a]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 bg-slate-50/50 p-5 text-sm leading-relaxed text-slate-600">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
