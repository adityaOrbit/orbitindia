"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  FileText,
  Search,
  ArrowRight,
} from "lucide-react";
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0056B3] sm:text-2xl">
            Technical Documentation &amp; Download Center
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Download certified instrument brochures, pre-installation utility checklists, application notes, and ASTM-ISO standards matrices.
          </p>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search brochures, manuals, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-300 py-1.5 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0056B3] focus:outline-hidden"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-1.5">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setSelectedCategory(c)}
            className={`min-h-[44px] sm:min-h-0 rounded-full px-4 py-1 text-xs font-semibold capitalize transition cursor-pointer ${
              selectedCategory === c
                ? "bg-[#0056B3] text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {c === "all" ? "All Documents" : c}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 ${
              item.featured
                ? "border-[#0056B3]/60 bg-[#f5f9fd] shadow-sm ring-1 ring-[#0056B3]/20"
                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                  <FileText className="h-3 w-3" />
                  {item.format} · {item.fileSize}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#0056B3] leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => handleDownloadClick(item)}
                className="w-full btn btn-accent flex items-center justify-center gap-2 text-xs font-bold shadow-xs cursor-pointer"
              >
                {requestedId === item.id ? (
                  "Opening PDF / Inquiring..."
                ) : (
                  <>
                    <Download className="h-3.5 w-3.5" />
                    Download Official Document
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lab Planning Help Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-[#0056B3]">Need Custom Instrument Schematics or AutoCAD Drawings?</h4>
          <p className="mt-1 text-xs text-slate-600">
            Our engineering team supplies detailed utility hookup diagrams, 3D CAD step files, and gas piping blueprints for new lab projects.
          </p>
        </div>
        <Link href="/contact-us#quote" className="btn btn-outline shrink-0 text-xs font-bold">
          Request CAD Files <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
