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
          { label: "Tools", href: "/knowledge-hub/tools/" },
          { label: tool.title },
        ]}
      />

      <header className="border-b border-[var(--line)] pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="container-x max-w-5xl">
          <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            {tool.title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg leading-snug text-[var(--ink-2)]">{tool.description}</p>
        </div>
      </header>

      <div className="container-x max-w-5xl py-8 sm:py-12">
        <CalculatorById id={tool.id} />
      </div>
    </div>
  );
}
