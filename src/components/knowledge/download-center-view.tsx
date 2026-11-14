"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, FileText, Search, ArrowRight } from "lucide-react";
import type { DownloadItem } from "@/data/knowledge-hub";

interface DownloadCenterViewProps {
  downloads: DownloadItem[];
}

export function DownloadCenterView({ downloads }: DownloadCenterViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [requestedId, setRequestedId] = useState<string | null>(null);

  const categories = ["all", "Brochure", "Standards Matrix", "Utility Guide", "Application Note"];

  const filtered = downloads.filter((d) => {
    const matchesCat = selectedCategory === "all" || d.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleDownloadClick = (item: DownloadItem) => {
    setRequestedId(item.id);
    // In a real environment, this can trigger direct download or email modal
    setTimeout(() => {
      // Simulate download link trigger
      const link = document.createElement("a");
      link.href = `/contact-us?subject=Download%20Request%20for%20${encodeURIComponent(item.title)}`;
      link.target = "_blank";
      link.click();
      setRequestedId(null);
    }, 600);
  };

  return (
    <section className="section">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="section-title">Technical Documentation &amp; Download Center</h2>
          <p className="section-sub">
            Download certified instrument brochures, pre-installation utility checklists, application notes, and ASTM-ISO standards matrices.
          </p>
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-3)]" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search brochures, manuals, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search downloads"
            className="input !pl-9"
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="no-scrollbar -mx-4 mt-6 flex overflow-x-auto border-b border-[var(--line)] px-4 sm:mx-0 sm:px-0">
        {categories.map((c) => {
          const active = selectedCategory === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              aria-pressed={active}
              className={`-mb-px min-h-[44px] whitespace-nowrap border-b-2 px-3 text-sm font-medium capitalize transition-colors ${
                active
                  ? "border-[#0056B3] text-[var(--ink)]"
                  : "border-transparent text-[var(--ink-3)] hover:text-[#0056B3]"
              }`}
            >
              {c === "all" ? "All Documents" : c}
            </button>
          );
        })}
      </div>

      {/* Documents */}
      <div className="cells mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div key={item.id} className={`flex flex-col justify-between p-5 ${item.featured ? "bg-[#eef4fb]" : ""}`}>
            <div className="space-y-3">
              <p className="flex items-center gap-1.5 text-[13px] text-[var(--ink-3)] tnum">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {item.format} · {item.fileSize}
              </p>

              <div>
                <h3 className="line-clamp-2 text-base font-semibold leading-snug text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--ink-3)]">{item.description}</p>
              </div>

              <p className="text-[13px] text-[var(--ink-3)]">{item.tags.map((t) => `#${t}`).join(" ")}</p>
            </div>

            <div className="mt-5 border-t border-[var(--line)] pt-3">
              <button
                type="button"
                onClick={() => handleDownloadClick(item)}
                className="link-more min-h-[44px] lg:min-h-0"
              >
                {requestedId === item.id ? (
                  "Opening PDF / Inquiring..."
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download Official Document
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lab Planning Help */}
      <div className="mt-8 flex flex-col justify-between gap-4 rounded-md border border-[var(--line)] p-5 sm:flex-row sm:items-center sm:p-6">
        <div>
          <h3 className="text-base font-semibold text-[var(--ink)]">Need Custom Instrument Schematics or AutoCAD Drawings?</h3>
          <p className="mt-1 text-sm text-[var(--ink-3)]">
            Our engineering team supplies detailed utility hookup diagrams, 3D CAD step files, and gas piping blueprints for new lab projects.
          </p>
        </div>
        <Link href="/contact-us#quote" className="btn btn-outline shrink-0">
          Request CAD Files <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
