"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ClipboardList, Factory, FileSpreadsheet, FileText } from "lucide-react";
import type {
  KnowledgeArticle,
  StandardOperatingProcedure,
  KnowledgeUseCase,
  DownloadItem,
  InteractiveToolMeta,
} from "@/data/knowledge-hub";
import { HubLayout, type HubItem } from "@/components/knowledge/hub-section";
import { h2Cls, articleImage } from "@/components/knowledge/hub-ui";

/** Reader-facing topics; each groups one or more article categories. */
const TOPICS: { label: string; categories: string[] }[] = [
  { label: "Calorimetry & Fuels", categories: ["Coal & Fuel Testing", "Calorimetry & Energy"] },
  { label: "Thermal Analysis", categories: ["Thermal Analysis", "Cement & Minerals"] },
  { label: "Metals & Steel", categories: ["Metallurgy & Steel"] },
  { label: "Reactors & Safety", categories: ["Chemical Process Engineering", "Safety & Compliance"] },
];

const topicOf = (category: string) =>
  TOPICS.find((t) => t.categories.includes(category))?.label ?? category;

const sectionCls = "scroll-mt-16 py-14 sm:py-20 lg:py-[88px]";
/** Tighter top for sections that sit straight under the page header (no section heading). */
const sectionTopCls = "scroll-mt-16 pt-10 pb-14 sm:pt-12 sm:pb-20 lg:pb-[88px]";

/** Section heading: the section name as the heading and its description underneath. */
function SectionHeading({
  label,
  heading,
  sub,
  moreHref,
  moreLabel,
}: {
  label: string;
  heading: string;
  sub?: string;
  moreHref?: string;
  moreLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <h2 className={`text-[var(--ink)] ${h2Cls}`}>{label}</h2>
        <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">{heading}</p>
        {sub && <p className="mt-1 text-base leading-relaxed text-[var(--ink-3)]">{sub}</p>}
      </div>
      {moreHref && (
        <Link href={moreHref} className="link-more min-h-[44px] shrink-0 lg:min-h-0">
          {moreLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

/* ----------------------------- item mappers ----------------------------- */

const articleItems = (articles: KnowledgeArticle[]): HubItem[] =>
  articles.map((a) => ({
    key: a.slug,
    title: a.title,
    href: `/knowledge-hub/${a.slug}/`,
    meta: a.category,
    summary: a.summary,
    image: articleImage(a),
  }));

const downloadItems = (downloads: DownloadItem[]): HubItem[] =>
  downloads.map((d) => ({
    key: d.id,
    title: d.title,
    href: `/contact-us/?subject=${encodeURIComponent(`Download Request for ${d.title}`)}#quote`,
    meta: `${d.category} · ${d.format}`,
    icon: d.format === "XLSX" ? FileSpreadsheet : FileText,
  }));

const sopItems = (sops: StandardOperatingProcedure[]): HubItem[] =>
  sops.map((s) => ({
    key: s.id,
    title: s.title,
    href: `/knowledge-hub/sops/${s.id}/`,
    meta: s.docNumber,
    icon: ClipboardList,
  }));

const useCaseItems = (useCases: KnowledgeUseCase[]): HubItem[] =>
  useCases.map((u) => ({
    key: u.id,
    title: u.title,
    href: `/knowledge-hub/use-cases/${u.id}/`,
    meta: u.sector,
    icon: Factory,
  }));

const toolItems = (tools: InteractiveToolMeta[]): HubItem[] =>
  tools.map((t) => ({
    key: t.id,
    title: t.title,
    href: `/knowledge-hub/calculators/${t.id}/`,
    meta: t.category,
    icon: Calculator,
  }));

/* ------------------------------- sections ------------------------------- */

/** Blogs: wide feature card + tall card + grid, with a topic filter. */
export function ArticlesSection({ articles }: { articles: KnowledgeArticle[] }) {
  const [topic, setTopic] = useState<string>("All");
  const topicNames = [
    "All",
    ...TOPICS.map((t) => t.label).filter((l) => articles.some((a) => topicOf(a.category) === l)),
  ];
  const items = articleItems(articles.filter((a) => topic === "All" || topicOf(a.category) === topic));

  return (
    <section id="articles" className={`bg-white ${sectionTopCls}`}>
      <div className="container-x">
        {(
          <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="flex w-max items-center gap-x-6 border-b border-[var(--line)] sm:w-auto">
              {topicNames.map((name) => {
                const active = topic === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setTopic(name)}
                    aria-pressed={active}
                    className={`-mb-px min-h-[44px] whitespace-nowrap border-b-2 text-[15px] font-medium transition-colors ${
                      active
                        ? "border-[#0056B3] text-[var(--ink)]"
                        : "border-transparent text-[var(--ink-3)] hover:text-[#0056B3]"
                    }`}
                  >
                    {name === "All" ? "All topics" : name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <HubLayout
          key={topic}
          items={items}
          gridOnly={topic !== "All"}
          gridHeading="Explore all blogs"
          viewAllLabel="Show more blogs"
        />
      </div>
    </section>
  );
}

/** Resource section: grid of icon cells, on a white or pale grey field. */
function ResourceSection({
  id,
  title,
  heading,
  sub,
  items,
  viewAllLabel,
  pale = false,
  moreHref,
  moreLabel,
  showHeading = true,
}: {
  id: string;
  title: string;
  heading: string;
  showHeading?: boolean;
  sub?: string;
  items: HubItem[];
  viewAllLabel: string;
  pale?: boolean;
  moreHref?: string;
  moreLabel?: string;
}) {
  if (!items.length) return null;
  return (
    <section id={id} className={`${pale ? "bg-[#f3f5f8]" : "bg-white"} ${showHeading ? sectionCls : sectionTopCls}`}>
      <div className="container-x">
        {showHeading && (
          <SectionHeading label={title} heading={heading} sub={sub} moreHref={moreHref} moreLabel={moreLabel} />
        )}
        <HubLayout items={items} gridOnly gridHeading={title} viewAllLabel={viewAllLabel} />
      </div>
    </section>
  );
}

export function DownloadsSection({ downloads, pale = false }: { downloads: DownloadItem[]; pale?: boolean }) {
  return (
    <ResourceSection
      id="downloads"
      title="Downloads"
      heading="Brochures, catalogues, application notes and guides."
      sub="Request any document and our team will send it to you."
      viewAllLabel="Show more downloads"
      pale={pale}
      items={downloadItems(downloads)}
    />
  );
}

export function SopsSection({ sops, pale = false }: { sops: StandardOperatingProcedure[]; pale?: boolean }) {
  return (
    <ResourceSection
      id="sops"
      title="SOPs"
      heading="Step-by-step laboratory procedures for common instruments and test methods."
      viewAllLabel="Show more SOPs"
      pale={pale}
      items={sopItems(sops)}
    />
  );
}

export function UseCasesSection({ useCases, pale = false }: { useCases: KnowledgeUseCase[]; pale?: boolean }) {
  return (
    <ResourceSection
      id="use-cases"
      title="Use Cases"
      heading="How laboratories have used Orbit instruments to solve real testing challenges."
      viewAllLabel="Show more use cases"
      pale={pale}
      items={useCaseItems(useCases)}
    />
  );
}

export function ToolsSection({ tools, pale = false }: { tools: InteractiveToolMeta[]; pale?: boolean }) {
  return (
    <ResourceSection
      id="calculators"
      title="Tools"
      heading="Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging."
      viewAllLabel="Show more tools"
      pale={pale}
      items={toolItems(tools)}
      showHeading={false}
    />
  );
}
