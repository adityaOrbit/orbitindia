import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { CalculatorById } from "@/components/knowledge/calculator-by-id";
import { FREE_TOOLS_META } from "@/data/knowledge-hub";

export const dynamicParams = false;

export function generateStaticParams() {
  return FREE_TOOLS_META.map((t) => ({ id: t.id }));
}

type Params = { id: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const tool = FREE_TOOLS_META.find((t) => t.id === id);
  if (!tool) return {};
  return {
    title: `${tool.title} | Orbit Technologies Knowledge Hub`,
    description: tool.description,
  };
}

export default async function CalculatorPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const tool = FREE_TOOLS_META.find((t) => t.id === id);
  if (!tool) notFound();

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub/" },
          { label: "Calculators", href: "/knowledge-hub/#calculators" },
          { label: tool.title },
        ]}
      />

      <header className="border-b border-slate-200 pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="container-x max-w-4xl">
          <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-[#0056B3] sm:text-4xl">
            {tool.title}
          </h1>
          <p className="mt-3 text-lg leading-snug text-slate-600">{tool.description}</p>
        </div>
      </header>

      <div className="container-x max-w-4xl py-8 sm:py-12">
        <CalculatorById id={tool.id} />
      </div>
    </div>
  );
}
