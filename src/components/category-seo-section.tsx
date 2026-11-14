"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { getCategorySeoData } from "@/data/category-seo";
import { site } from "@/data/site";

/** Labelled sketch of a bomb-calorimeter temperature-rise curve (illustrative shape, not measured data). */
function CalorimetryCurve() {
  return (
    <figure className="mt-8 rounded-md bg-[var(--soft)] p-5">
      <svg viewBox="0 0 520 210" role="img" aria-label="Temperature rise in a bomb calorimeter: fore-period, firing, rise and post-period" className="h-auto w-full">
        <line x1="40" y1="170" x2="500" y2="170" stroke="#9aa6b5" strokeWidth="1" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="#9aa6b5" strokeWidth="1" />
        <path d="M40 150 H190 C210 150 218 146 226 132 C240 104 248 58 276 48 C300 41 340 42 500 44" fill="none" stroke="#0056B3" strokeWidth="2.5" />
        <line x1="190" y1="30" x2="190" y2="170" stroke="#d00000" strokeWidth="1" strokeDasharray="4 4" />
        <text x="194" y="28" fontSize="12" fill="#d00000">Firing</text>
        <text x="60" y="140" fontSize="12" fill="#3d4a5c">Fore-period</text>
        <text x="250" y="124" fontSize="12" fill="#3d4a5c">Rise</text>
        <text x="380" y="36" fontSize="12" fill="#3d4a5c">Post-period</text>
        <text x="44" y="190" fontSize="12" fill="#5b6676">Time</text>
        <text x="14" y="24" fontSize="12" fill="#5b6676">ΔT</text>
      </svg>
      <figcaption className="mt-2 text-[13px] text-[var(--ink-3)]">
        Shape of the temperature rise the calorimeter records after the sample is fired (illustrative).
      </figcaption>
    </figure>
  );
}

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
    <article aria-label={`Technical Overview and Standards for ${category.name}`}>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* How it works: overview, numbered principles and (for calorimeters) the temperature-rise curve */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <p className="font-[family-name:var(--font-poppins)] text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0056B3]">
              How it works
            </p>
            <h2 className="section-title mt-3">{seoData.overviewTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-2)]">{seoData.technicalSummary}</p>
            {category.path.startsWith("calorimeter") && <CalorimetryCurve />}
          </div>
          <div>
            <h3 className="text-base font-semibold text-[var(--ink)]">Measurement Principles &amp; Technology</h3>
            <ol className="mt-4 border-t border-[var(--line)]">
              {seoData.principles.map((pr, i) => (
                <li key={pr} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[var(--line)] py-4">
                  <span className="font-[family-name:var(--font-poppins)] text-2xl font-semibold leading-none text-[#0056B3] tnum">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[var(--ink-2)]">{pr}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Standards */}
      {seoData.standards.length > 0 && (
        <section className="section">
          <h2 className="section-title">International Standards &amp; Regulatory Compliance</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr>
                  <th scope="col" className="w-[22%]">Standard</th>
                  <th scope="col">Title</th>
                  <th scope="col" className="w-[36%]">Scope</th>
                </tr>
              </thead>
              <tbody>
                {seoData.standards.map((std) => (
                  <tr key={std.code}>
                    <td className="font-semibold">{std.code}</td>
                    <td>{std.title}</td>
                    <td className="text-[var(--ink-3)]">{std.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Applications + selection checklist */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="section-title">Core Industrial Applications</h2>
            <dl className="mt-5 border-t border-[var(--line)]">
              {seoData.applications.map((app) => (
                <div key={app.industry} className="border-b border-[var(--line)] py-4">
                  <dt className="text-[15px] font-semibold text-[var(--ink)]">{app.industry}</dt>
                  <dd className="m-0 mt-1 text-[15px] leading-relaxed text-[var(--ink-2)]">{app.useCase}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="section-title">Laboratory Selection Checklist</h2>
            <dl className="mt-5 border-t border-[var(--line)]">
              {seoData.selectionCriteria.map((crit) => (
                <div key={crit.factor} className="border-b border-[var(--line)] py-4">
                  <dt className="text-[15px] font-semibold text-[var(--ink)]">{crit.factor}</dt>
                  <dd className="m-0 mt-1 text-[15px] leading-relaxed text-[var(--ink-2)]">{crit.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Why Orbit */}
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <h2 className="section-title">Why Laboratories Across India Partner with Orbit Technologies</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-2)] sm:text-base">
              Established in Hyderabad in 1995, Orbit Technologies manufactures and
              represents leading scientific instrument makers. As Parr Instrument
              Company&apos;s exclusive partner and #1 Global Dealer for new orders, we
              provide full end-to-end support: from testing application guidance and
              custom engineering to factory-certified installation, NABL-traceable
              calibration, and lifetime spares.
            </p>
          </div>
          <div className="rounded-md bg-[var(--soft)] p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-[var(--ink)]">
              <MapPin className="h-4 w-4 text-[#0056B3]" /> Pan-India Support Network
            </p>
            <p className="mt-2 text-sm text-[var(--ink-2)]">14 Dedicated Sales &amp; Service Branch Locations:</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--ink-3)]">
              Hyderabad · Delhi · Mumbai · Kolkata · Chennai · Bangalore · Pune ·
              Nagpur · Lucknow · Baroda · Bhubaneswar · Bilaspur · Raipur · Ranchi
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3 text-sm">
              <span className="text-[var(--ink-3)]">Direct Sales Desk:</span>
              <a
                href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
                className="font-semibold text-[#0056B3] hover:underline"
              >
                {site.phones.sales1}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical FAQ */}
      {allFaqs.length > 0 && (
        <section className="section">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
            <div>
              <h2 className="section-title">Common Technical Questions: {category.name}</h2>
              <p className="mt-3 text-[15px] text-[var(--ink-3)]">
                Key questions on testing standards, operating methods, maintenance,
                and calibration.
              </p>
            </div>
            <div className="border-t border-[var(--line)]">
              {allFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.q} className="border-b border-[var(--line)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold text-[var(--ink)] hover:text-[#0056B3]"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[var(--ink-3)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && <p className="pb-5 pr-8 text-[15px] leading-relaxed text-[var(--ink-2)]">{faq.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
