"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, X } from "lucide-react";
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

  const tabs: { id: KnowledgeTab; label: string; count: number }[] = [
    { id: "blogs", label: "Learning Hub (Blogs)", count: articles.length },
    { id: "sops", label: "SOP Library", count: sops.length },
    { id: "usecases", label: "Use Cases", count: useCases.length },
    { id: "tools", label: "Free Tools", count: 4 },
    { id: "downloads", label: "Download Center", count: downloads.length },
  ];

  return (
    <div>
      {/* Section bar: tabs + quick search */}
      <div className="section-bar">
        <div className="flex flex-col gap-2 py-2 lg:flex-row lg:items-center lg:justify-between lg:py-0">
          <nav className="no-scrollbar flex overflow-x-auto" aria-label="Knowledge Hub Sections">
            {tabs.map((t) => {
              const active = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  aria-pressed={active}
                  className={`-mb-px inline-flex min-h-[44px] items-center gap-1.5 whitespace-nowrap border-b-2 px-3 text-sm font-medium transition-colors ${
                    active
                      ? "border-[#0056B3] text-[var(--ink)]"
                      : "border-transparent text-[var(--ink-2)] hover:text-[#0056B3]"
                  }`}
                >
                  {t.label}
                  <span className="text-[13px] text-[var(--ink-3)] tnum">{t.count}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Search across Knowledge Hub */}
          <div className="relative w-full shrink-0 lg:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-3)]" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search knowledge hub..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search knowledge hub"
              className="input !pl-9 !pr-9"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-[var(--ink-3)] hover:text-[var(--ink)]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 1: LEARNING HUB (BLOGS & WHITEPAPERS)
          ========================================== */}
      {activeTab === "blogs" && (
        <section className="section">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="section-title">
                Learning Hub — Technical Blogs &amp; Application Whitepapers
              </h2>
              <p className="section-sub">
                In-depth methodologies, thermodynamic calculations, and standard test method guides written by Orbit application specialists.
              </p>
            </div>

            {/* Category filter */}
            <div className="no-scrollbar -mx-4 flex overflow-x-auto border-b border-[var(--line)] px-4 sm:mx-0 sm:px-0 lg:border-b-0">
              {blogCategories.map((c) => {
                const active = selectedArticleCategory === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedArticleCategory(c)}
                    aria-pressed={active}
                    className={`-mb-px min-h-[44px] whitespace-nowrap border-b-2 px-3 text-sm font-medium capitalize transition-colors lg:min-h-[36px] ${
                      active
                        ? "border-[#0056B3] text-[var(--ink)]"
                        : "border-transparent text-[var(--ink-3)] hover:text-[#0056B3]"
                    }`}
                  >
                    {c === "all" ? "All Topics" : c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="group flex flex-col justify-between rounded-md border border-[var(--line)] bg-white p-5 transition-colors hover:border-[#0056B3]"
              >
                <div>
                  <p className="text-[13px] text-[var(--ink-3)]">{art.readTime}</p>

                  <h3 className="mt-2 text-base font-semibold leading-snug text-[var(--ink)] transition-colors group-hover:text-[#0056B3]">
                    <Link href={`/knowledge-hub/${art.slug}/`}>{art.title}</Link>
                  </h3>

                  <p className="mt-1.5 text-sm font-medium text-[var(--ink-2)]">{art.subtitle}</p>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--ink-3)]">
                    {art.summary}
                  </p>

                  <p className="mt-4 border-t border-[var(--line)] pt-3 text-[13px] text-[var(--ink-3)]">
                    <span className="font-medium text-[var(--ink-2)]">Standard References: </span>
                    {art.standards.join(" · ")}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-3">
                  <Link href={`/knowledge-hub/${art.slug}/`} className="link-more min-h-[44px] lg:min-h-0">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-[13px] text-[var(--ink-3)]">{art.date}</span>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="mt-6 rounded-md bg-[var(--soft)] p-8 text-center text-sm text-[var(--ink-3)]">
              No articles match your search. Try resetting filters.
            </p>
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
      {activeTab === "tools" && (
        <section className="section">
          <KnowledgeTools />
        </section>
      )}

      {/* ==========================================
          SECTION 5: DOWNLOAD CENTER
          ========================================== */}
      {activeTab === "downloads" && <DownloadCenterView downloads={downloads} />}

      {/* Bottom Consultation */}
      <section className="section">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="section-title">
              Require an On-Site SOP Workshop or Custom Test Protocol?
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
              Orbit&apos;s senior application chemists in Hyderabad provide complete hands-on operator training, calibration verification, and customized test procedure writing for laboratories across India.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link href="/contact-us#quote" className="btn btn-accent">
              Consult Application Chemist <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/our-services" className="btn btn-outline">
              Our Service Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
