"use client";

import { useState } from "react";
import {
  ShieldAlert,
  Wrench,
  CheckCircle2,
  ChevronDown,
  Download,
  Copy,
  Check,
  Search,
} from "lucide-react";
import type { StandardOperatingProcedure } from "@/data/knowledge-hub";

interface SopLibraryViewProps {
  sops: StandardOperatingProcedure[];
}

export function SopLibraryView({ sops }: SopLibraryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(sops[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["all", "Calorimetry", "Thermogravimetry", "Ash Fusibility", "Pressure Reactors", "Weighing & Balances"];

  const filteredSops = sops.filter((sop) => {
    const matchesCat = selectedCategory === "all" || sop.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sop.docNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sop.standards.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      sop.targetEquipment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header and Filter Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-xl font-black text-[#002f49] sm:text-2xl">
            Laboratory Standard Operating Procedures (SOPs)
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Field-tested, peer-reviewed operating protocols adhering strictly to ASTM, ISO, and BIS testing standards.
          </p>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by SOP, method, ASTM..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-300 py-1.5 pl-9 pr-3 text-xs text-slate-800 focus:border-[#002f49] focus:outline-hidden"
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
            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition cursor-pointer ${
              selectedCategory === c
                ? "bg-[#002f49] text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {c === "all" ? "All SOPs" : c}
          </button>
        ))}
      </div>

      {/* Accordion / List of SOPs */}
      <div className="space-y-4">
        {filteredSops.map((sop) => {
          const isExpanded = expandedId === sop.id;

          return (
            <div
              key={sop.id}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isExpanded
                  ? "border-[#c4620a] bg-white shadow-md ring-1 ring-[#c4620a]/30"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {/* Header Bar */}
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : sop.id)}
                className="w-full flex items-start justify-between p-5 text-left cursor-pointer"
              >
                <div className="space-y-1.5 pr-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#c4620a] bg-[#fdeedd] px-2 py-0.5 rounded-md">
                      {sop.docNumber}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">{sop.revision}</span>
                    <span className="chip chip-accent text-[10px] py-0 px-2">{sop.category}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#002f49] hover:text-[#c4620a] transition">
                    {sop.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-1">{sop.summary}</p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-400">Target Instrument:</span>
                    <span className="text-xs font-semibold text-slate-800">{sop.targetEquipment}</span>
                  </div>
                </div>

                <div className="shrink-0 p-1 text-slate-400 hover:text-slate-700">
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#c4620a]" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Content Details */}
              {isExpanded && (
                <div className="border-t border-slate-100 p-6 space-y-6 bg-slate-50/50">
                  {/* Standards & Safety Warning Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Safety Warnings */}
                    <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                        <ShieldAlert className="h-4 w-4 text-amber-600" />
                        <span>Critical Safety Precautions</span>
                      </div>
                      <ul className="mt-2.5 space-y-1.5">
                        {sop.safetyPrecautions.map((sec, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-amber-950">
                            <span className="text-amber-500 font-bold">&bull;</span>
                            <span>{sec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment & Reagents */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <Wrench className="h-3.5 w-3.5 text-[#002f49]" />
                          <span>Apparatus &amp; Standard Reference Standards</span>
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {sop.standards.map((st) => (
                            <span
                              key={st}
                              className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700"
                            >
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 space-y-1 border-t border-slate-100 pt-2">
                        <p>
                          <strong>Required Hardware:</strong> {sop.equipmentRequired.join(", ")}
                        </p>
                        <p>
                          <strong>Reagents &amp; Gases:</strong> {sop.reagents.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step-by-Step Execution Sequence */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#002f49]">
                      Step-by-Step Standard Operating Procedure
                    </h5>

                    <div className="space-y-3">
                      {sop.stepByStepProcedure.map((step) => (
                        <div
                          key={step.stepNumber}
                          className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#002f49] text-xs font-black text-white">
                            {step.stepNumber}
                          </div>
                          <div className="space-y-1 text-xs">
                            <h6 className="font-bold text-slate-900">{step.title}</h6>
                            <p className="leading-relaxed text-slate-700">{step.instruction}</p>
                            {step.checkPoint && (
                              <div className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 inline-flex">
                                <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                                <span>Check Point: {step.checkPoint}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calculations & Formulas (if present) */}
                  {sop.calculations && (
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Governing Calculations &amp; Reporting Formula
                      </span>
                      <pre className="mt-2 whitespace-pre-wrap font-mono text-xs text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        {sop.calculations}
                      </pre>
                    </div>
                  )}

                  {/* Common Troubleshooting Table */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Standard Quality Troubleshooting
                    </span>
                    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                          <tr>
                            <th className="p-2.5">Observed Issue</th>
                            <th className="p-2.5">Probable Root Cause</th>
                            <th className="p-2.5">Corrective Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {sop.troubleshooting.map((tb, idx) => (
                            <tr key={idx}>
                              <td className="p-2.5 font-semibold text-slate-800">{tb.issue}</td>
                              <td className="p-2.5 text-slate-600">{tb.cause}</td>
                              <td className="p-2.5 text-emerald-700 font-medium">{tb.remedy}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          sop.id,
                          `SOP: ${sop.title}\nDoc Number: ${sop.docNumber}\nStandards: ${sop.standards.join(
                            ", "
                          )}\n\nProcedure:\n` +
                            sop.stepByStepProcedure
                              .map((s) => `${s.stepNumber}. ${s.title}: ${s.instruction}`)
                              .join("\n")
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#002f49] cursor-pointer"
                    >
                      {copiedId === sop.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy SOP to Clipboard</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`/contact-us?subject=Request%20Official%20PDF%20for%20${encodeURIComponent(
                        sop.docNumber
                      )}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c4620a] hover:underline"
                    >
                      <Download className="h-3.5 w-3.5" /> Request Official Formatted PDF
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
