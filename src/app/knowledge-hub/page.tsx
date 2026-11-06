import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import {
  KNOWLEDGE_ARTICLES,
  SOP_LIBRARY,
  KNOWLEDGE_USE_CASES,
  DOWNLOAD_CENTER,
} from "@/data/knowledge-hub";
import { KnowledgeHubMaster } from "@/components/knowledge/knowledge-hub-master";

export const metadata: Metadata = {
  title: "Knowledge Hub — Learning Blogs, SOPs, Use Cases, Tools & Downloads | Orbit Technologies",
  description:
    "Authoritative analytical instrumentation hub: technical blogs, step-by-step laboratory SOPs, industrial use cases, free interactive calculators (GCV/NCV, W-factor, Autoclave sizer), and download center.",
  keywords: [
    "Orbit Knowledge Hub",
    "bomb calorimetry SOP ASTM D5865",
    "proximate analysis SOP ASTM D7582",
    "calorific value converter",
    "reactor pressure calculator",
    "coal ash slagging index predictor",
    "ash fusion standard operating procedure",
    "Parr calorimeter brochure download",
    "Orbit Technologies use cases",
  ],
};

export default function KnowledgeHubPage() {
  return (
    <div className="bg-white pb-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Knowledge Hub" },
        ]}
      />

      <PageHero
        eyebrow="Scientific Knowledge & Engineering Hub"
        title="Knowledge Hub — Instrumentation Science & Laboratory Standards"
        subtitle="Explore peer-reviewed blogs, standard operating procedures (SOPs), real-world plant case studies, free interactive calculators, and technical download center."
      />

      {/* Master 5-Pillar Knowledge Hub Component */}
      <section className="container-x mt-8">
        <KnowledgeHubMaster
          articles={KNOWLEDGE_ARTICLES}
          sops={SOP_LIBRARY}
          useCases={KNOWLEDGE_USE_CASES}
          downloads={DOWNLOAD_CENTER}
        />
      </section>
    </div>
  );
}
