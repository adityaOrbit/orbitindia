"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import type { KnowledgeUseCase } from "@/data/knowledge-hub";

interface UseCasesViewProps {
  useCases: KnowledgeUseCase[];
}

export function UseCasesView({ useCases }: UseCasesViewProps) {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const sectors = ["all", "Power Generation & Utilities", "Steel & Metallurgy", "Commercial Inspection & Cargo Certification", "Chemical Research & Catalysis"];

  const filtered = useCases.filter((uc) => {
    const matchesSector = selectedSector === "all" || uc.sector === selectedSector;
    const matchesSearch =
      searchQuery === "" ||
      uc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uc.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uc.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uc.clientType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <section className="section">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="section-title">Industrial Field Case Studies &amp; Success Stories</h2>
          <p className="section-sub">
            Real operational challenges solved by Orbit across India&apos;s leading power utilities, steel mills, and CSIR laboratories.
          </p>
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-3)]" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search plant, sector, or challenge..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search use cases"
            className="input !pl-9"
          />
        </div>
      </div>

      {/* Sector filter */}
      <div className="no-scrollbar -mx-4 mt-6 flex overflow-x-auto border-b border-[var(--line)] px-4 sm:mx-0 sm:px-0">
        {sectors.map((s) => {
          const active = selectedSector === s;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSelectedSector(s)}
              aria-pressed={active}
              className={`-mb-px min-h-[44px] whitespace-nowrap border-b-2 px-3 text-sm font-medium capitalize transition-colors ${
                active
                  ? "border-[#0056B3] text-[var(--ink)]"
                  : "border-transparent text-[var(--ink-3)] hover:text-[#0056B3]"
              }`}
            >
              {s === "all" ? "All Industrial Sectors" : s}
            </button>
          );
        })}
      </div>

      {/* Cases */}
      <div className="cells mt-8 grid-cols-1 md:grid-cols-2">
        {filtered.map((uc) => (
          <article key={uc.id} className="flex flex-col justify-between p-5 sm:p-6">
            <div className="space-y-5">
              <div>
                <p className="text-[13px] text-[var(--ink-3)]">
                  {uc.clientType} · {uc.location}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-[var(--ink)]">{uc.title}</h3>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-3 text-[15px] leading-relaxed text-[var(--ink-2)]">
                <div>
                  <h4 className="font-semibold text-[var(--ink)]">The Industrial Challenge:</h4>
                  <p className="mt-0.5">{uc.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--ink)]">Orbit Engineered Solution:</h4>
                  <p className="mt-0.5">{uc.solution}</p>
                </div>
              </div>

              {/* Hardware Deployed */}
              <div className="text-sm">
                <h4 className="font-semibold text-[var(--ink)]">Instrumentation Deployed:</h4>
                <p className="mt-0.5 text-[var(--ink-2)]">{uc.equipmentDeployed.join(" · ")}</p>
              </div>

              {/* Quantified Outcomes */}
              <div className="border-l-2 border-[#0056B3] bg-[var(--soft)] p-4">
                <h4 className="text-sm font-semibold text-[var(--ink)]">Measurable Operational Impact:</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--ink-2)] marker:text-[var(--ink-3)]">
                  {uc.results.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>

              {/* Testimonial Quote */}
              {uc.testimonial && (
                <figure className="border-l-2 border-[var(--line)] pl-4 text-sm">
                  <blockquote className="italic leading-relaxed text-[var(--ink-2)]">&ldquo;{uc.testimonial.quote}&rdquo;</blockquote>
                  <figcaption className="mt-1 text-[13px] text-[var(--ink-3)]">
                    — <span className="font-medium text-[var(--ink)]">{uc.testimonial.author}</span>, {uc.testimonial.designation}
                  </figcaption>
                </figure>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 border-t border-[var(--line)] pt-3">
              <Link href="/our-clients" className="link-more min-h-[44px] lg:min-h-0">
                View Client Directory <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact-us#quote" className="link-more min-h-[44px] lg:min-h-0">
                Request Custom Solution Demo &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
