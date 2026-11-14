import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { FREE_TOOLS_META } from "@/data/knowledge-hub";
import { ToolsSection } from "@/components/knowledge/knowledge-hub-tabs";
import { KnowledgeContactBand, KnowledgeSubHeader } from "@/components/knowledge/knowledge-pages";

export const metadata: Metadata = {
  title: "Tools — Free Laboratory Calculators | Orbit Technologies Knowledge Hub",
  description:
    "Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging from Orbit Technologies.",
};

export default function KnowledgeToolsPage() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Tools" }]} />
      <KnowledgeSubHeader
        title="Tools"
        intro="Free tools for calorific value, calorimeter calibration, reactor sizing and ash slagging."
      />
      <ToolsSection tools={FREE_TOOLS_META} />
      <KnowledgeContactBand />
    </div>
  );
}
