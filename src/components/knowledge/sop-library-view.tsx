"use client";

import { useState } from "react";
import { ShieldAlert, ChevronDown, Download, Copy, Check, Search } from "lucide-react";
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
    <section className="section">
      {/* Header and Filter Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="section-title">Laboratory Standard Operating Procedures (SOPs)</h2>
          <p className="section-sub">
            Field-tested operating procedures adhering strictly to ASTM, ISO, and BIS testing standards.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-3)]" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search by SOP, method, ASTM..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search SOPs"
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
              {c === "all" ? "All SOPs" : c}
            </button>
          );
        })}
      </div>

      {/* Accordion / List of SOPs */}
      <div className="mt-6 border-t border-[var(--line)]">
        {filteredSops.map((sop) => {
          const isExpanded = expandedId === sop.id;

          return (
            <div key={sop.id} className="border-b border-[var(--line)]">
              {/* Header Bar */}
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : sop.id)}
                aria-expanded={isExpanded}
                className="flex w-full items-start justify-between gap-4 py-5 text-left"
              >
                <div className="min-w-0 space-y-1.5">
                  <p className="text-[13px] text-[var(--ink-3)] tnum">
                    <span className="font-mono font-semibold text-[var(--ink-2)]">{sop.docNumber}</span> · {sop.revision}
                  </p>

                  <h3 className="text-base font-semibold text-[var(--ink)] transition-colors hover:text-[#0056B3] sm:text-lg">
                    {sop.title}
                  </h3>

                  <p className="line-clamp-1 text-sm text-[var(--ink-3)]">{sop.summary}</p>

                  <p className="text-[13px] text-[var(--ink-3)]">
                    Target Instrument: <span className="font-medium text-[var(--ink)]">{sop.targetEquipment}</span>
                  </p>
                </div>

                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-[var(--ink-3)] transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-[#0056B3]" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Expanded Content Details */}
              {isExpanded && (
                <div className="space-y-8 pb-8">
                  {/* Standards & Safety Warning Grid */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Safety Warnings */}
                    <div className="border-l-2 border-amber-500 bg-[var(--soft)] p-4">
                      <h4 className="flex items-center gap-2 text-[15px] font-semibold text-[var(--ink)]">
                        <ShieldAlert className="h-4 w-4 text-amber-600" aria-hidden="true" />
                        Critical Safety Precautions
                      </h4>
                      <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--ink-2)] marker:text-[var(--ink-3)]">
                        {sop.safetyPrecautions.map((sec, idx) => (
                          <li key={idx}>{sec}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment & Reagents */}
                    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-2)]">
                      <div>
                        <h4 className="text-[15px] font-semibold text-[var(--ink)]">
                          Apparatus &amp; Standard Reference Standards
                        </h4>
                        <p className="mt-1">{sop.standards.join(" · ")}</p>
                      </div>

                      <div className="space-y-1 border-t border-[var(--line)] pt-3">
                        <p>
                          <strong className="font-medium text-[var(--ink)]">Required Hardware:</strong> {sop.equipmentRequired.join(", ")}
                        </p>
                        <p>
                          <strong className="font-medium text-[var(--ink)]">Reagents &amp; Gases:</strong> {sop.reagents.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step-by-Step Execution Sequence */}
                  <div>
                    <h4 className="text-[15px] font-semibold text-[var(--ink)]">
                      Step-by-Step Standard Operating Procedure
                    </h4>

                    <ol className="mt-3 border-t border-[var(--line)]">
                      {sop.stepByStepProcedure.map((step) => (
                        <li key={step.stepNumber} className="flex items-start gap-4 border-b border-[var(--line)] py-4">
                          <span className="w-6 shrink-0 font-semibold text-[#0056B3] tnum">{step.stepNumber}</span>
                          <div className="min-w-0 space-y-1 text-[15px]">
                            <h5 className="font-semibold text-[var(--ink)]">{step.title}</h5>
                            <p className="leading-relaxed text-[var(--ink-2)]">{step.instruction}</p>
                            {step.checkPoint && (
                              <p className="mt-2 border-l-2 border-[#0056B3] bg-[var(--soft)] px-3 py-1.5 text-sm text-[var(--ink-2)]">
                                Check Point: {step.checkPoint}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Calculations & Formulas (if present) */}
                  {sop.calculations && (
                    <div>
                      <h4 className="text-[15px] font-semibold text-[var(--ink)]">
                        Governing Calculations &amp; Reporting Formula
                      </h4>
                      <pre className="mt-2 overflow-x-auto whitespace-pre-wrap border-l-2 border-[#0056B3] bg-[var(--soft)] p-4 font-mono text-sm text-[var(--ink)]">
                        {sop.calculations}
                      </pre>
                    </div>
                  )}

                  {/* Common Troubleshooting Table */}
                  <div>
                    <h4 className="text-[15px] font-semibold text-[var(--ink)]">Standard Quality Troubleshooting</h4>
                    <div className="mt-2 overflow-x-auto">
                      <table className="data-table min-w-[560px]">
                        <thead>
                          <tr>
                            <th scope="col">Observed Issue</th>
                            <th scope="col">Probable Root Cause</th>
                            <th scope="col">Corrective Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sop.troubleshooting.map((tb, idx) => (
                            <tr key={idx}>
                              <td className="font-semibold">{tb.issue}</td>
                              <td className="text-[var(--ink-2)]">{tb.cause}</td>
                              <td>{tb.remedy}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-3">
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
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[var(--ink-2)] hover:text-[#0056B3] lg:min-h-0"
                    >
                      {copiedId === sop.id ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-700" />
                          <span className="text-emerald-700">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy SOP to Clipboard</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`/contact-us?subject=Request%20Official%20PDF%20for%20${encodeURIComponent(
                        sop.docNumber
                      )}`}
                      className="link-more min-h-[44px] lg:min-h-0"
                    >
                      <Download className="h-4 w-4" /> Request Official Formatted PDF
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
