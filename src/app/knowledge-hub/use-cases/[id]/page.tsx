import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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

const h2Cls = "text-xl font-semibold tracking-tight text-[var(--ink)]";
const bodyCls = "text-[17px] leading-[1.65] text-[var(--ink-2)]";

export default async function UseCaseDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const uc = KNOWLEDGE_USE_CASES.find((u) => u.id === id);
  if (!uc) notFound();

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub/" },
          { label: "Resources", href: "/knowledge-hub/resources/" },
          { label: "Use Cases", href: "/knowledge-hub/resources/#use-cases" },
          { label: uc.title },
        ]}
      />

      <header className="border-b border-[var(--line)] pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="container-x max-w-[760px]">
          <p className="text-sm text-[var(--ink-3)]">
            {uc.sector} · {uc.location}
          </p>
          <h1 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            {uc.title}
          </h1>
          <p className="mt-3 text-lg leading-snug text-[var(--ink-2)]">{uc.clientType}</p>
        </div>
      </header>

      <div className="container-x max-w-[760px] space-y-10 py-8 sm:py-12">
        <section>
          <h2 className={h2Cls}>The challenge</h2>
          <p className={`mt-3 ${bodyCls}`}>{uc.challenge}</p>
        </section>

        <section>
          <h2 className={h2Cls}>The solution</h2>
          <p className={`mt-3 ${bodyCls}`}>{uc.solution}</p>
        </section>

        {uc.equipmentDeployed.length > 0 && (
          <section>
            <h2 className={h2Cls}>Equipment deployed</h2>
            <ul className={`mt-3 list-disc space-y-1.5 pl-5 marker:text-[var(--ink-3)] ${bodyCls}`}>
              {uc.equipmentDeployed.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>
        )}

        {uc.results.length > 0 && (
          <section className="rounded-md border border-[var(--line)] p-5 sm:p-6">
            <h2 className={h2Cls}>Results</h2>
            <ul className={`mt-3 list-disc space-y-1.5 pl-5 marker:text-[var(--ink-3)] ${bodyCls}`}>
              {uc.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        )}

        {uc.testimonial && (
          <figure className="border-l-2 border-[#0056B3] pl-5">
            <blockquote className="text-lg italic leading-relaxed text-[var(--ink)]">“{uc.testimonial.quote}”</blockquote>
            <figcaption className="mt-2 text-sm text-[var(--ink-3)]">
              — {uc.testimonial.author}, {uc.testimonial.designation}
            </figcaption>
          </figure>
        )}

        <div className="flex flex-col gap-1 border-t border-[var(--line)] pt-6 text-[15px] text-[var(--ink-2)] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span>Facing a similar challenge? Talk to our application team.</span>
          <Link href="/contact-us#quote" className="link-more min-h-[44px] lg:min-h-0">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
