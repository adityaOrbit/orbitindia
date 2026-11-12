import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { SOP_LIBRARY } from "@/data/knowledge-hub";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOP_LIBRARY.map((s) => ({ id: s.id }));
}

type Params = { id: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const sop = SOP_LIBRARY.find((s) => s.id === id);
  if (!sop) return {};
  return {
    title: `${sop.title} — SOP | Orbit Technologies Knowledge Hub`,
    description: sop.summary,
  };
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-[#0056B3]">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-base leading-relaxed text-slate-700">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function SopDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const sop = SOP_LIBRARY.find((s) => s.id === id);
  if (!sop) notFound();

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub/" },
          { label: "SOPs", href: "/knowledge-hub/#sops" },
          { label: sop.title },
        ]}
      />

      <header className="border-b border-slate-200 pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-slate-500">
            {sop.docNumber} · Rev. {sop.revision} · {sop.category}
          </p>
          <h1 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-[#0056B3] sm:text-4xl">
            {sop.title}
          </h1>
          <p className="mt-3 text-lg leading-snug text-slate-600">For: {sop.targetEquipment}</p>
          {sop.standards.length > 0 && (
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-700">Standards: </span>
              {sop.standards.join(" · ")}
            </p>
          )}
        </div>
      </header>

      <div className="container-x max-w-3xl py-8 sm:py-12">
        <p className="rounded-2xl border border-l-4 border-slate-200 border-l-[#d00000] bg-[#f8fafc] p-5 text-[17px] leading-[1.6] text-slate-700 sm:p-6">
          {sop.summary}
        </p>

        {sop.safetyPrecautions.length > 0 && (
          <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50/70 p-5">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-amber-900">
              <AlertTriangle className="h-5 w-5" /> Safety precautions
            </h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-amber-900">
              {sop.safetyPrecautions.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        )}

        <ListBlock title="Equipment required" items={sop.equipmentRequired} />
        <ListBlock title="Reagents" items={sop.reagents} />

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#0056B3]">Procedure</h2>
          <ol className="mt-4 space-y-5">
            {sop.stepByStepProcedure.map((step) => (
              <li key={step.stepNumber} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0056B3] text-sm font-semibold text-white">
                  {step.stepNumber}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-[17px] leading-[1.6] text-slate-700">{step.instruction}</p>
                  {step.checkPoint && (
                    <p className="mt-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
                      <span className="font-semibold">Check: </span>
                      {step.checkPoint}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {sop.calculations && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[#0056B3]">Calculations</h2>
            <pre className="mt-3 overflow-x-auto whitespace-pre rounded-xl bg-slate-900 p-4 font-mono text-sm text-amber-300">
              {sop.calculations}
            </pre>
          </section>
        )}

        {sop.troubleshooting.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[#0056B3]">Troubleshooting</h2>
            <div className="mt-3 space-y-3">
              {sop.troubleshooting.map((t) => (
                <div key={t.issue} className="rounded-xl border border-slate-200 p-4 text-base leading-relaxed">
                  <p className="font-semibold text-slate-900">{t.issue}</p>
                  <p className="mt-1 text-slate-700">
                    <span className="font-medium">Cause: </span>
                    {t.cause}
                  </p>
                  <p className="mt-1 text-slate-700">
                    <span className="font-medium">Remedy: </span>
                    {t.remedy}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Need help applying this procedure? Our application team can help.</span>
          <Link href="/contact-us#quote" className="inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#d00000] hover:underline sm:min-h-0">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
