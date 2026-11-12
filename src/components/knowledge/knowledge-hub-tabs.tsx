"use client";

import { useState } from "react";
import { Calculator, ClipboardList, Factory, FileSpreadsheet, FileText } from "lucide-react";
import { PRODUCT_IMAGE_MAP } from "@/data/product-media";
import type {
  KnowledgeArticle,
  StandardOperatingProcedure,
  KnowledgeUseCase,
  DownloadItem,
  InteractiveToolMeta,
} from "@/data/knowledge-hub";
import { HubLayout, type HubItem } from "@/components/knowledge/hub-section";

/** Reader-facing topics; each groups one or more article categories. */
const TOPICS: { label: string; categories: string[] }[] = [
  { label: "Calorimetry & Fuels", categories: ["Coal & Fuel Testing", "Calorimetry & Energy"] },
  { label: "Thermal Analysis", categories: ["Thermal Analysis", "Cement & Minerals"] },
  { label: "Metals & Steel", categories: ["Metallurgy & Steel"] },
  { label: "Reactors & Safety", categories: ["Chemical Process Engineering", "Safety & Compliance"] },
];

const topicOf = (category: string) =>
  TOPICS.find((t) => t.categories.includes(category))?.label ?? category;

const isBrandLogo = (url: string) =>
  /parr-1\.png|elite(-1)?\.png|sylab-[a-z0-9]+\.png|orlab-[a-z0-9]+\.png/i.test(url);

/** Hand-picked photos where the first recommended product isn't the article's subject. */
const ARTICLE_IMAGES: Record<string, string> = {
  "ash-fusibility-determination": "/images/orbit/IF2000G.jpg",
  "high-frequency-combustion-cs": "/images/orbit/CSbox.jpg",
};

/** Photo for an article: a hand-picked one, else the first real product photo among its instruments. */
function articleImage(article: KnowledgeArticle): string | null {
  if (ARTICLE_IMAGES[article.slug]) return ARTICLE_IMAGES[article.slug];
  for (const slug of article.recommendedProductSlugs) {
    const img = (PRODUCT_IMAGE_MAP[slug] || []).find(
      (i) => !isBrandLogo(i) && !/pdf|catalog|brochure/i.test(i)
    );
    if (img) return img;
  }
  return null;
}

function SectionHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="mb-6 max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">{title}</h2>
      <p className="mt-2 text-base text-slate-600">{intro}</p>
    </div>
  );
}

/** Articles: featured layout (latest + next three + grid), with topic filter. */
function ArticlesSection({ articles }: { articles: KnowledgeArticle[] }) {
  const [topic, setTopic] = useState<string>("All");
  const topicNames = [
    "All",
    ...TOPICS.map((t) => t.label).filter((l) => articles.some((a) => topicOf(a.category) === l)),
  ];
  const items: HubItem[] = articles
    .filter((a) => topic === "All" || topicOf(a.category) === topic)
    .map((a) => ({ key: a.slug, title: a.title, href: `/knowledge-hub/${a.slug}/`, image: articleImage(a) }));

  return (
    <section id="articles" className="scroll-mt-28">
      <SectionHeading title="Articles" intro="Practical guides on testing methods, standards and instruments." />

      <div className="-mx-4 mb-6 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex w-max items-center gap-x-5 border-b border-slate-200 sm:w-auto">
          {topicNames.map((name) => {
            const active = topic === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setTopic(name)}
                aria-pressed={active}
                className={`-mb-px min-h-[44px] whitespace-nowrap border-b-2 text-sm font-semibold transition ${
                  active
                    ? "border-[#d00000] text-[#0056B3]"
                    : "border-transparent text-slate-500 hover:text-[#0056B3]"
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
    </section>
  );
}

/** Resource section: simple grid of icon cards with "View all". */
function ResourceSection({
  id,
  title,
  intro,
  items,
  viewAllLabel,
}: {
  id: string;
  title: string;
  intro: string;
  items: HubItem[];
  viewAllLabel: string;
}) {
  if (!items.length) return null;
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200 pt-12">
      <SectionHeading title={title} intro={intro} />
      <HubLayout items={items} gridOnly gridHeading={title} viewAllLabel={viewAllLabel} />
    </section>
  );
}

/**
 * Knowledge Hub on one page: Articles (featured layout), then Downloads,
 * SOPs, Use Cases and Calculators as simple icon grids. No tab buttons.
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
    <div className="space-y-14">
      <ArticlesSection articles={articles} />

      <ResourceSection
        id="downloads"
        title="Downloads"
        intro="Brochures, catalogues, application notes and guides. Request any document and our team will send it to you."
        viewAllLabel="View all downloads"
        items={downloads.map((d) => ({
          key: d.id,
          title: d.title,
          href: `/contact-us/?subject=${encodeURIComponent(`Download Request for ${d.title}`)}#quote`,
          icon: d.format === "XLSX" ? FileSpreadsheet : FileText,
        }))}
      />

      <ResourceSection
        id="sops"
        title="SOPs"
        intro="Step-by-step laboratory procedures for common instruments and test methods."
        viewAllLabel="View all SOPs"
        items={sops.map((s) => ({
          key: s.id,
          title: s.title,
          href: `/knowledge-hub/sops/${s.id}/`,
          icon: ClipboardList,
        }))}
      />

      <ResourceSection
        id="use-cases"
        title="Use Cases"
        intro="How laboratories have used Orbit instruments to solve real testing challenges."
        viewAllLabel="View all use cases"
        items={useCases.map((u) => ({
          key: u.id,
          title: u.title,
          href: `/knowledge-hub/use-cases/${u.id}/`,
          icon: Factory,
        }))}
      />

      <ResourceSection
        id="calculators"
        title="Calculators"
        intro="Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging."
        viewAllLabel="View all calculators"
        items={tools.map((t) => ({
          key: t.id,
          title: t.title,
          href: `/knowledge-hub/calculators/${t.id}/`,
          icon: Calculator,
        }))}
      />
    </div>
  );
}
