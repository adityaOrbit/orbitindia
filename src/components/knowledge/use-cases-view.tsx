"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  TrendingUp,
  Quote,
  ArrowRight,
  Search,
} from "lucide-react";
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0056B3] sm:text-2xl">
            Industrial Field Case Studies &amp; Success Stories
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Real operational challenges solved by Orbit across India&apos;s leading power utilities, steel mills, and CSIR laboratories.
          </p>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search plant, sector, or challenge..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-300 py-1.5 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden"
          />
        </div>
      </div>

      {/* Sector filter */}
      <div className="flex flex-wrap items-center gap-1.5">
        {sectors.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSelectedSector(s)}
            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition cursor-pointer ${
              selectedSector === s
                ? "bg-[#0056B3] text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {s === "all" ? "All Industrial Sectors" : s}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((uc) => (
          <article
            key={uc.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-[#0056B3]/50 hover:shadow-lg"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="chip chip-accent text-[10px] font-bold">{uc.sector}</span>
                <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="h-3 w-3 text-[#d00000]" /> {uc.location}
                </span>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {uc.clientType}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-[#0056B3] leading-snug">
                  {uc.title}
                </h4>
              </div>

              {/* Challenge & Solution Blocks */}
              <div className="space-y-3 text-xs">
                <div className="rounded-xl bg-red-50/60 p-3.5 border border-red-100">
                  <span className="font-bold uppercase tracking-wider text-red-900 block mb-1">
                    The Industrial Challenge:
                  </span>
                  <p className="text-slate-700 leading-relaxed">{uc.challenge}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200">
                  <span className="font-semibold uppercase tracking-wider text-[#0056B3] block mb-1">
                    Orbit Engineered Solution:
                  </span>
                  <p className="text-slate-700 leading-relaxed">{uc.solution}</p>
                </div>
              </div>

              {/* Hardware Deployed */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Instrumentation Deployed:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {uc.equipmentDeployed.map((eq, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantified Outcomes */}
              <div className="rounded-xl bg-emerald-50/70 p-4 border border-emerald-200/70 space-y-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  Measurable Operational Impact:
                </span>
                <ul className="space-y-1.5">
                  {uc.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-emerald-900">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial Quote */}
              {uc.testimonial && (
                <div className="rounded-xl border-l-4 border-[#d00000] bg-slate-50 p-3.5 text-xs italic text-slate-700 relative">
                  <Quote className="h-4 w-4 text-[#d00000]/40 absolute top-2 right-2" />
                  <p className="leading-relaxed">&ldquo;{uc.testimonial.quote}&rdquo;</p>
                  <p className="mt-1 text-[11px] font-semibold not-italic text-[#0056B3]">
                    — {uc.testimonial.author}, <span className="font-normal text-slate-500">{uc.testimonial.designation}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 border-t border-slate-100 pt-3 flex items-center justify-between">
              <Link
                href="/our-clients"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0056B3] hover:text-[#d00000] transition"
              >
                View Client Directory <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact-us#quote"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#d00000] hover:underline"
              >
                Request Custom Solution Demo &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
