"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  Building2,
  Calculator,
  Download,
  Search,
  Clock,
  ArrowRight,
  X,
} from "lucide-react";
import type {
  KnowledgeArticle,
  StandardOperatingProcedure,
  KnowledgeUseCase,
  DownloadItem,
} from "@/data/knowledge-hub";
import { KnowledgeTools } from "@/components/knowledge/knowledge-tools";
import { SopLibraryView } from "@/components/knowledge/sop-library-view";
import { UseCasesView } from "@/components/knowledge/use-cases-view";
import { DownloadCenterView } from "@/components/knowledge/download-center-view";

interface KnowledgeHubMasterProps {
  articles: KnowledgeArticle[];
  sops: StandardOperatingProcedure[];
  useCases: KnowledgeUseCase[];
  downloads: DownloadItem[];
}

export type KnowledgeTab = "blogs" | "sops" | "usecases" | "tools" | "downloads";

export function KnowledgeHubMaster({
  articles,
  sops,
  useCases,
  downloads,
}: KnowledgeHubMasterProps) {
  const [activeTab, setActiveTab] = useState<KnowledgeTab>("blogs");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticleCategory, setSelectedArticleCategory] = useState<string>("all");

  // Distinct blog categories
  const blogCategories = useMemo(() => {
    const set = new Set(articles.map((a) => a.category));
    return ["all", ...Array.from(set)];
  }, [articles]);

  // Filtered blogs
  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory =
        selectedArticleCategory === "all" || a.category === selectedArticleCategory;
      const matchesSearch =
        searchQuery === "" ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.standards.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedArticleCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* ==========================================
          STICKY EASY NAVIGATION BAR
          ========================================== */}
      <div className="sticky top-20 z-30 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur-md">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Main 5 Navigation Tabs */}
          <nav className="flex flex-wrap items-center gap-1.5" aria-label="Knowledge Hub Sections">
            <button
              type="button"
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "blogs"
                  ? "bg-[#0056B3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <BookOpen className="h-3.5 w-3.5 text-[#d00000]" />
              <span>Learning Hub (Blogs)</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === "blogs" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {articles.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("sops")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "sops"
                  ? "bg-[#0056B3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <ClipboardList className="h-3.5 w-3.5 text-blue-500" />
              <span>SOP Library</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === "sops" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {sops.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("usecases")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "usecases"
                  ? "bg-[#0056B3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Building2 className="h-3.5 w-3.5 text-emerald-500" />
              <span>Use Cases</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === "usecases"
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {useCases.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("tools")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "tools"
                  ? "bg-[#0056B3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Calculator className="h-3.5 w-3.5 text-purple-500" />
              <span>Free Tools</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === "tools" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                4
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("downloads")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "downloads"
                  ? "bg-[#0056B3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Download className="h-3.5 w-3.5 text-[#d00000]" />
              <span>Download Center</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === "downloads"
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {downloads.length}
              </span>
            </button>
          </nav>

          {/* Quick Search across Knowledge Hub */}
          <div className="relative min-w-[200px] max-w-xs shrink-0">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search knowledge hub..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 pl-8 pr-7 text-base font-medium sm:py-1.5 sm:text-xs text-slate-900 placeholder-slate-400 focus:border-[#0056B3] focus:outline-hidden"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 1: LEARNING HUB (BLOGS & WHITEPAPERS)
          ========================================== */}
      {activeTab === "blogs" && (
        <section className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-semibold text-[#0056B3] sm:text-3xl">
                Learning Hub — Technical Blogs &amp; Application Whitepapers
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                In-depth methodologies, thermodynamic calculations, and standard test method guides written by Orbit application specialists.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedArticleCategory(c)}
                  className={`min-h-[44px] lg:min-h-0 rounded-full px-4 py-1 text-xs font-semibold capitalize transition cursor-pointer ${
                    selectedArticleCategory === c
                      ? "bg-[#d00000] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {c === "all" ? "All Topics" : c}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#0056B3]/60 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="h-3 w-3 text-slate-400" /> {art.readTime}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base font-semibold text-[#0056B3] group-hover:text-[#d00000] transition leading-snug">
                    <Link href={`/knowledge-hub/${art.slug}/`}>{art.title}</Link>
                  </h4>

                  <p className="mt-1.5 text-xs font-semibold text-[#d00000]">{art.subtitle}</p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {art.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400">
                      Standard References:
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {art.standards.map((std) => (
                        <span
                          key={std}
                          className="rounded-md bg-slate-50 border border-slate-200 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-700"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/knowledge-hub/${art.slug}/`}
                    className="min-h-[44px] lg:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] group-hover:underline"
                  >
                    Read Full Article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[10px] text-slate-400">{art.date}</span>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-500">
              No articles match your search. Try resetting filters.
            </div>
          )}
        </section>
      )}

      {/* ==========================================
          SECTION 2: SOP & TESTING PROCEDURE LIBRARY
          ========================================== */}
      {activeTab === "sops" && <SopLibraryView sops={sops} />}

      {/* ==========================================
          SECTION 3: INDUSTRIAL USE CASES
          ========================================== */}
      {activeTab === "usecases" && <UseCasesView useCases={useCases} />}

      {/* ==========================================
          SECTION 4: FREE INTERACTIVE TOOLS
          ========================================== */}
      {activeTab === "tools" && <KnowledgeTools />}

      {/* ==========================================
          SECTION 5: DOWNLOAD CENTER
          ========================================== */}
      {activeTab === "downloads" && <DownloadCenterView downloads={downloads} />}

      {/* Bottom Consultation Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-[#0056B3] p-8 md:p-10 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Require an On-Site SOP Workshop or Custom Test Protocol?
            </h3>
            <p className="mt-2 text-xs md:text-sm text-slate-300 leading-relaxed">
              Orbit&apos;s senior application chemists in Hyderabad provide complete hands-on operator training, calibration verification, and customized test procedure writing for laboratories across India.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact-us#quote" className="btn btn-accent text-xs md:text-sm font-bold">
              Consult Application Chemist <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/our-services"
              className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20 text-xs md:text-sm font-semibold"
            >
              Our Service Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
