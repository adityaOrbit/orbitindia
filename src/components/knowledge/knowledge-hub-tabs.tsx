"use client";

import { useState } from "react";
import { Calculator, ClipboardList, Factory, FileSpreadsheet, FileText } from "lucide-react";
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

/** Section heading: short label as the eyebrow, the section's intro line as the heading. */
function SectionHeading({ label, heading, sub }: { label: string; heading: string; sub?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <Eyebrow>{label}</Eyebrow>
      <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>{heading}</h2>
      {sub && <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">{sub}</p>}
    </div>
  );
}

const sectionCls = "scroll-mt-16 py-14 sm:py-20 lg:py-[88px]";

/** Articles: wide feature card + tall card + grid, with topic filter. */
function ArticlesSection({ articles }: { articles: KnowledgeArticle[] }) {
  const [topic, setTopic] = useState<string>("All");
  const topicNames = [
    "All",
    ...TOPICS.map((t) => t.label).filter((l) => articles.some((a) => topicOf(a.category) === l)),
  ];
  const items: HubItem[] = articles
    .filter((a) => topic === "All" || topicOf(a.category) === topic)
    .map((a) => ({
      key: a.slug,
      title: a.title,
      href: `/knowledge-hub/${a.slug}/`,
      meta: a.category,
      summary: a.summary,
      image: articleImage(a),
    }));

  return (
    <section id="articles" className={`bg-white ${sectionCls}`}>
      <div className="container-x">
        <SectionHeading label="Articles" heading="Practical guides on testing methods, standards and instruments." />

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

        <HubLayout
          key={topic}
          items={items}
          gridOnly={topic !== "All"}
          gridHeading="Explore all articles"
          viewAllLabel="View all articles"
        />
      </div>
    </section>
  );
}

/** Resource section: grid of icon cells with "View all", on a white or pale grey field. */
function ResourceSection({
  id,
  title,
  heading,
  sub,
  items,
  viewAllLabel,
  pale = false,
}: {
  id: string;
  title: string;
  heading: string;
  sub?: string;
  items: HubItem[];
  viewAllLabel: string;
  pale?: boolean;
}) {
  if (!items.length) return null;
  return (
    <section id={id} className={`${pale ? "bg-[#f3f5f8]" : "bg-white"} ${sectionCls}`}>
      <div className="container-x">
        <SectionHeading label={title} heading={heading} sub={sub} />
        <HubLayout items={items} gridOnly gridHeading={title} viewAllLabel={viewAllLabel} />
      </div>
    </section>
  );
}

/**
 * Knowledge Hub on one page: Articles (feature layout), then Downloads,
 * SOPs, Use Cases and Calculators as icon grids on alternating white and
 * pale grey fields. A sticky bar jumps between them.
 */
export function KnowledgeHubSections({
  articles,
  sops,
  useCases,
  downloads,
  tools,
}: {
  articles: KnowledgeArticle[];
  sops: StandardOperatingProcedure[];
  useCases: KnowledgeUseCase[];
  downloads: DownloadItem[];
  tools: InteractiveToolMeta[];
}) {
  return (
    <div>
      <nav aria-label="Knowledge Hub sections" className="section-bar">
        <div className="container-x">
          <div className="no-scrollbar -mx-4 flex overflow-x-auto px-1 sm:mx-0 sm:px-0">
            {[
              ["#articles", "Articles"],
              ["#downloads", "Downloads"],
              ["#sops", "SOPs"],
              ["#use-cases", "Use Cases"],
              ["#calculators", "Calculators"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="tab min-h-[44px]">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <ArticlesSection articles={articles} />

      <ResourceSection
        id="downloads"
        title="Downloads"
        heading="Brochures, catalogues, application notes and guides."
        sub="Request any document and our team will send it to you."
        viewAllLabel="View all downloads"
        pale
        items={downloads.map((d) => ({
          key: d.id,
          title: d.title,
          href: `/contact-us/?subject=${encodeURIComponent(`Download Request for ${d.title}`)}#quote`,
          meta: `${d.category} · ${d.format}`,
          icon: d.format === "XLSX" ? FileSpreadsheet : FileText,
        }))}
      />

      <ResourceSection
        id="sops"
        title="SOPs"
        heading="Step-by-step laboratory procedures for common instruments and test methods."
        viewAllLabel="View all SOPs"
        items={sops.map((s) => ({
          key: s.id,
          title: s.title,
          href: `/knowledge-hub/sops/${s.id}/`,
          meta: s.docNumber,
          icon: ClipboardList,
        }))}
      />

      <ResourceSection
        id="use-cases"
        title="Use Cases"
        heading="How laboratories have used Orbit instruments to solve real testing challenges."
        viewAllLabel="View all use cases"
        pale
        items={useCases.map((u) => ({
          key: u.id,
          title: u.title,
          href: `/knowledge-hub/use-cases/${u.id}/`,
          meta: u.sector,
          icon: Factory,
        }))}
      />

      <ResourceSection
        id="calculators"
        title="Calculators"
        heading="Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging."
        viewAllLabel="View all calculators"
        items={tools.map((t) => ({
          key: t.id,
          title: t.title,
          href: `/knowledge-hub/calculators/${t.id}/`,
          meta: t.category,
          icon: Calculator,
        }))}
      />
    </div>
  );
}
