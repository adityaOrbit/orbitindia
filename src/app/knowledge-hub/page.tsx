import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import {
  KNOWLEDGE_ARTICLES,
  SOP_LIBRARY,
  KNOWLEDGE_USE_CASES,
  DOWNLOAD_CENTER,
  FREE_TOOLS_META,
} from "@/data/knowledge-hub";
import { KnowledgeHubSections } from "@/components/knowledge/knowledge-hub-tabs";

export const metadata: Metadata = {
  title: "Knowledge Hub — Articles, Downloads, SOPs & Calculators | Orbit Technologies",
  description:
    "Practical guides from Orbit Technologies' application team, plus downloadable brochures, laboratory SOPs, use cases and free calculators for calorimetry, proximate analysis, ash fusion and reactor safety.",
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
        title="Knowledge Hub"
        subtitle="Articles, downloads, SOPs and calculators for coal, fuel and material testing from Orbit's application team."
      />

      {/* Articles, Downloads, SOPs, Use Cases and Calculators on one page */}
      <section className="container-x mt-8 sm:mt-10">
        <KnowledgeHubSections
          articles={KNOWLEDGE_ARTICLES}
          sops={SOP_LIBRARY}
          useCases={KNOWLEDGE_USE_CASES}
          downloads={DOWNLOAD_CENTER}
          tools={FREE_TOOLS_META}
        />
      </section>

      {/* Contact banner */}
      <section className="container-x mt-12">
        <div className="flex flex-col gap-4 rounded-2xl bg-[#0056B3] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-lg font-semibold sm:text-xl">
            Have a testing question? Talk to our application team.
          </p>
          <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] shrink-0 justify-center">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
