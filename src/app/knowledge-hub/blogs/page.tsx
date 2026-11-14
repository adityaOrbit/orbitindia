import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { KNOWLEDGE_ARTICLES } from "@/data/knowledge-hub";
import { ArticlesSection } from "@/components/knowledge/knowledge-hub-tabs";
import { KnowledgeContactBand, KnowledgeSubHeader } from "@/components/knowledge/knowledge-pages";

export const metadata: Metadata = {
  title: "Blogs — Testing Methods, Standards & Instruments | Orbit Technologies Knowledge Hub",
  description:
    "Practical guides from Orbit Technologies' application team on calorimetry, proximate analysis, ash fusion, carbon & sulfur and reactor safety.",
};

export default function KnowledgeBlogsPage() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Blogs" }]} />
      <KnowledgeSubHeader
        title="Blogs"
        intro="Practical guides on testing methods, standards and instruments."
      />
      <ArticlesSection articles={KNOWLEDGE_ARTICLES} />
      <KnowledgeContactBand />
    </div>
  );
}
