import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { DOWNLOAD_CENTER, KNOWLEDGE_USE_CASES, SOP_LIBRARY } from "@/data/knowledge-hub";
import { DownloadsSection, SopsSection, UseCasesSection } from "@/components/knowledge/knowledge-hub-tabs";
import { KnowledgeContactBand, KnowledgeSubHeader } from "@/components/knowledge/knowledge-pages";

export const metadata: Metadata = {
  title: "Resources — Downloads, SOPs & Use Cases | Orbit Technologies Knowledge Hub",
  description:
    "Brochures, catalogues and application notes, step-by-step laboratory SOPs, and use cases from Orbit Technologies.",
};

export default function KnowledgeResourcesPage() {
  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Resources" }]} />
      <KnowledgeSubHeader
        title="Resources"
        intro="Downloads, SOPs and use cases for coal, fuel and material testing from Orbit's application team."
      />

      {/* Jump links within the page */}
      <nav aria-label="Resource types" className="section-bar">
        <div className="container-x">
          <div className="no-scrollbar -mx-1 flex overflow-x-auto">
            {[
              ["#downloads", "Downloads"],
              ["#sops", "SOPs"],
              ["#use-cases", "Use Cases"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="tab min-h-[44px]">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <DownloadsSection downloads={DOWNLOAD_CENTER} />
      <SopsSection sops={SOP_LIBRARY} pale />
      <UseCasesSection useCases={KNOWLEDGE_USE_CASES} />
      <KnowledgeContactBand />
    </div>
  );
}
