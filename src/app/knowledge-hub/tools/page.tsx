import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { FREE_TOOLS_META } from "@/data/knowledge-hub";
import { ToolsSection } from "@/components/knowledge/knowledge-hub-tabs";
import { KnowledgeContactBand, KnowledgeNav, KnowledgeSubHeader } from "@/components/knowledge/knowledge-pages";

export const metadata: Metadata = {
  title: "Tools — Free Laboratory Calculators | Orbit Technologies Knowledge Hub",
  description:
    "Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging from Orbit Technologies.",
};

export default function KnowledgeToolsPage() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Knowledge Hub", href: "/knowledge-hub/" }, { label: "Tools" }]} />
      <KnowledgeSubHeader
        title="Tools"
        intro="Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging."
        count={FREE_TOOLS_META.length}
        countLabel="Calculators"
      />
      <KnowledgeNav active="tools" />
      <ToolsSection tools={FREE_TOOLS_META} />
      <KnowledgeContactBand />
    </div>
  );
}
