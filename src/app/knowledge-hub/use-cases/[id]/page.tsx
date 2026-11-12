import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { KNOWLEDGE_USE_CASES } from "@/data/knowledge-hub";

export const dynamicParams = false;

export function generateStaticParams() {
  return KNOWLEDGE_USE_CASES.map((u) => ({ id: u.id }));
}

type Params = { id: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const uc = KNOWLEDGE_USE_CASES.find((u) => u.id === id);
  if (!uc) return {};
  return {
    title: `${uc.title} — Use Case | Orbit Technologies Knowledge Hub`,
    description: uc.challenge.slice(0, 160),
  };
}

export default async function UseCaseDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const uc = KNOWLEDGE_USE_CASES.find((u) => u.id === id);
  if (!uc) notFound();

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub/" },
          { label: "Use Cases", href: "/knowledge-hub/#use-cases" },
          { label: uc.title },
        ]}
      />

      <header className="border-b border-slate-200 pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-slate-500">
            {uc.sector} · {uc.location}
          </p>
          <h1 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-[#0056B3] sm:text-4xl">
            {uc.title}
          </h1>
          <p className="mt-3 text-lg leading-snug text-slate-600">{uc.clientType}</p>
        </div>
      </header>

      <div className="container-x max-w-3xl space-y-10 py-8 sm:py-12">
        <section>
          <h2 className="text-xl font-semibold text-[#0056B3]">The challenge</h2>
          <p className="mt-3 text-[17px] leading-[1.65] text-slate-700">{uc.challenge}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#0056B3]">The solution</h2>
          <p className="mt-3 text-[17px] leading-[1.65] text-slate-700">{uc.solution}</p>
        </section>

        {uc.equipmentDeployed.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[#0056B3]">Equipment deployed</h2>
            <ul className="mt-3 space-y-2">
              {uc.equipmentDeployed.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-base leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {uc.results.length > 0 && (
          <section className="rounded-2xl border border-l-4 border-slate-200 border-l-[#d00000] bg-[#f8fafc] p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-[#0056B3]">Results</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[17px] leading-[1.6] text-slate-700">
              {uc.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        )}

        {uc.testimonial && (
          <figure className="border-l-4 border-[#0056B3] pl-5">
            <blockquote className="text-lg italic leading-relaxed text-slate-700">“{uc.testimonial.quote}”</blockquote>
            <figcaption className="mt-2 text-sm text-slate-500">
              — {uc.testimonial.author}, {uc.testimonial.designation}
            </figcaption>
          </figure>
        )}

        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Facing a similar challenge? Talk to our application team.</span>
          <Link href="/contact-us#quote" className="inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#d00000] hover:underline sm:min-h-0">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
