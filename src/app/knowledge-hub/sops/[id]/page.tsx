import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight } from "lucide-react";
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

const h2Cls = "text-xl font-semibold tracking-tight text-[var(--ink)]";
const bodyCls = "text-[17px] leading-[1.65] text-[var(--ink-2)]";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10">
      <h2 className={h2Cls}>{title}</h2>
      <ul className={`mt-3 list-disc space-y-1.5 pl-5 marker:text-[var(--ink-3)] ${bodyCls}`}>
        {items.map((it) => (
          <li key={it}>{it}</li>
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

      <header className="border-b border-[var(--line)] pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="container-x max-w-[760px]">
          <p className="text-sm text-[var(--ink-3)] tnum">
            {sop.docNumber} · Rev. {sop.revision} · {sop.category}
          </p>
          <h1 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            {sop.title}
          </h1>
          <p className="mt-3 text-lg leading-snug text-[var(--ink-2)]">For: {sop.targetEquipment}</p>
          {sop.standards.length > 0 && (
            <p className="mt-2 text-sm text-[var(--ink-3)]">
              <span className="font-medium text-[var(--ink)]">Standards: </span>
              {sop.standards.join(" · ")}
            </p>
          )}
        </div>
      </header>

      <div className="container-x max-w-[760px] py-8 sm:py-12">
        <p className={bodyCls}>{sop.summary}</p>

        {sop.safetyPrecautions.length > 0 && (
          <section className="mt-8 border-l-2 border-amber-500 bg-[var(--soft)] p-5">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--ink)]">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" /> Safety precautions
            </h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-[var(--ink-2)] marker:text-[var(--ink-3)]">
              {sop.safetyPrecautions.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        )}

        <ListBlock title="Equipment required" items={sop.equipmentRequired} />
        <ListBlock title="Reagents" items={sop.reagents} />

        <section className="mt-10">
          <h2 className={h2Cls}>Procedure</h2>
          <ol className="mt-4 border-t border-[var(--line)]">
            {sop.stepByStepProcedure.map((step) => (
              <li key={step.stepNumber} className="flex gap-4 border-b border-[var(--line)] py-5">
                <span className="w-7 shrink-0 font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#0056B3] tnum">
                  {step.stepNumber}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-[var(--ink)]">{step.title}</h3>
                  <p className={`mt-1 ${bodyCls}`}>{step.instruction}</p>
                  {step.checkPoint && (
                    <p className="mt-3 border-l-2 border-[#0056B3] bg-[var(--soft)] px-3 py-2 text-[15px] text-[var(--ink-2)]">
                      <span className="font-semibold text-[var(--ink)]">Check: </span>
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
            <h2 className={h2Cls}>Calculations</h2>
            <pre className="mt-3 overflow-x-auto whitespace-pre border-l-2 border-[#0056B3] bg-[var(--soft)] p-4 font-mono text-sm leading-relaxed text-[var(--ink)]">
              {sop.calculations}
            </pre>
          </section>
        )}

        {sop.troubleshooting.length > 0 && (
          <section className="mt-10">
            <h2 className={h2Cls}>Troubleshooting</h2>
            <div className="mt-3 border-t border-[var(--line)]">
              {sop.troubleshooting.map((t) => (
                <div key={t.issue} className="border-b border-[var(--line)] py-4 text-base leading-relaxed">
                  <p className="font-semibold text-[var(--ink)]">{t.issue}</p>
                  <p className="mt-1 text-[var(--ink-2)]">
                    <span className="font-medium text-[var(--ink)]">Cause: </span>
                    {t.cause}
                  </p>
                  <p className="mt-1 text-[var(--ink-2)]">
                    <span className="font-medium text-[var(--ink)]">Remedy: </span>
                    {t.remedy}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 flex flex-col gap-1 border-t border-[var(--line)] pt-6 text-[15px] text-[var(--ink-2)] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span>Need help applying this procedure? Our application team can help.</span>
          <Link href="/contact-us#quote" className="link-more min-h-[44px] lg:min-h-0">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
