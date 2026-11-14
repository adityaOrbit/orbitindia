"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ClipboardList, Factory, FileSpreadsheet, FileText, type LucideIcon } from "lucide-react";
import type {
  KnowledgeArticle,
  StandardOperatingProcedure,
  KnowledgeUseCase,
  DownloadItem,
  InteractiveToolMeta,
} from "@/data/knowledge-hub";
import { HubLayout, type HubItem } from "@/components/knowledge/hub-section";
import { Eyebrow, h2Cls, articleImage } from "@/components/knowledge/hub-ui";

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

/** Section heading: short label as the eyebrow, the section's intro line as the heading, optional "View all" link. */
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
        <Eyebrow>{label}</Eyebrow>
        <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>{heading}</h2>
        {sub && <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">{sub}</p>}
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

/**
 * Blogs: wide feature card + tall card + grid, with a topic filter.
 * `preview` (hub overview) shows the latest five without the filter and links to the Blogs page.
 */
export function ArticlesSection({ articles, preview = false }: { articles: KnowledgeArticle[]; preview?: boolean }) {
  const [topic, setTopic] = useState<string>("All");
  const topicNames = [
    "All",
    ...TOPICS.map((t) => t.label).filter((l) => articles.some((a) => topicOf(a.category) === l)),
  ];
  const filtered = articles.filter((a) => preview || topic === "All" || topicOf(a.category) === topic);
  const items = articleItems(preview ? filtered.slice(0, 5) : filtered);

  return (
    <section id="articles" className={`bg-white ${sectionCls}`}>
      <div className="container-x">
        <SectionHeading
          label="Blogs"
          heading="Practical guides on testing methods, standards and instruments."
          moreHref={preview ? "/knowledge-hub/blogs/" : undefined}
          moreLabel="View all blogs"
        />

        {!preview && (
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
          gridOnly={!preview && topic !== "All"}
          gridHeading={preview ? "More blogs" : "Explore all blogs"}
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
}: {
  id: string;
  title: string;
  heading: string;
  sub?: string;
  items: HubItem[];
  viewAllLabel: string;
  pale?: boolean;
  moreHref?: string;
  moreLabel?: string;
}) {
  if (!items.length) return null;
  return (
    <section id={id} className={`${pale ? "bg-[#f3f5f8]" : "bg-white"} ${sectionCls}`}>
      <div className="container-x">
        <SectionHeading label={title} heading={heading} sub={sub} moreHref={moreHref} moreLabel={moreLabel} />
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

export function ToolsSection({
  tools,
  pale = false,
  preview = false,
}: {
  tools: InteractiveToolMeta[];
  pale?: boolean;
  preview?: boolean;
}) {
  return (
    <ResourceSection
      id="calculators"
      title="Tools"
      heading="Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging."
      viewAllLabel="Show more tools"
      pale={pale}
      items={toolItems(tools)}
      moreHref={preview ? "/knowledge-hub/tools/" : undefined}
      moreLabel="Open all tools"
    />
  );
}

/** Hub overview: the three resource libraries side by side, each with its count, three items and a link. */
export function ResourcesOverview({
  downloads,
  sops,
  useCases,
}: {
  downloads: DownloadItem[];
  sops: StandardOperatingProcedure[];
  useCases: KnowledgeUseCase[];
}) {
  const groups: { id: string; label: string; heading: string; items: HubItem[]; icon: LucideIcon }[] = [
    { id: "downloads", label: "Downloads", heading: "Brochures, catalogues, application notes and guides.", items: downloadItems(downloads), icon: FileText },
    { id: "sops", label: "SOPs", heading: "Step-by-step laboratory procedures for common instruments and test methods.", items: sopItems(sops), icon: ClipboardList },
    { id: "use-cases", label: "Use Cases", heading: "How laboratories have used Orbit instruments to solve real testing challenges.", items: useCaseItems(useCases), icon: Factory },
  ];

  return (
    <section id="resources" className={`bg-[#f3f5f8] ${sectionCls}`}>
      <div className="container-x">
        <SectionHeading
          label="Resources"
          heading="Downloads, SOPs and use cases"
          moreHref="/knowledge-hub/resources/"
          moreLabel="View all resources"
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.id} className="flex min-w-0 flex-col rounded-md border border-[var(--line)] bg-white">
              <div className="border-b border-[var(--line)] p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[var(--ink)]">{g.label}</span>
                  <span className="font-[family-name:var(--font-poppins)] text-[2.25rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum">
                    {g.items.length}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-3)]">{g.heading}</p>
              </div>
              <ul className="flex-1">
                {g.items.slice(0, 3).map((it) => (
                  <li key={it.key} className="border-b border-[var(--line)] last:border-b-0">
                    <Link href={it.href} className="group flex min-h-[44px] items-start gap-3 px-6 py-4 hover:bg-[var(--soft)]">
                      <g.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" strokeWidth={1.75} aria-hidden="true" />
                      <span className="min-w-0 text-[15px] font-medium leading-snug text-[var(--ink)] group-hover:text-[#0056B3]">
                        {it.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/knowledge-hub/resources/#${g.id}`}
                className="link-more min-h-[44px] border-t border-[var(--line)] px-6 py-4 lg:min-h-0"
              >
                View all {g.label.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
