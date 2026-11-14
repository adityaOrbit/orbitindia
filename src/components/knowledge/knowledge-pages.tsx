import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TemperatureCurve } from "@/components/temperature-curve";
import { Eyebrow } from "@/components/knowledge/hub-ui";
import { site } from "@/data/site";

export type KnowledgeSection = "overview" | "blogs" | "tools" | "resources";

const NAV: { key: KnowledgeSection; label: string; href: string }[] = [
  { key: "overview", label: "Overview", href: "/knowledge-hub/" },
  { key: "blogs", label: "Blogs", href: "/knowledge-hub/blogs/" },
  { key: "tools", label: "Tools", href: "/knowledge-hub/tools/" },
  { key: "resources", label: "Resources", href: "/knowledge-hub/resources/" },
];

/** Tabs linking the Knowledge Hub pages; the current page is marked. */
export function KnowledgeNav({ active }: { active: KnowledgeSection }) {
  return (
    <nav aria-label="Knowledge Hub" className="border-b border-[var(--line)] bg-white">
      <div className="container-x">
        <ul className="no-scrollbar -mx-1 flex overflow-x-auto">
          {NAV.map((n) => {
            const current = n.key === active;
            return (
              <li key={n.key}>
                <Link
                  href={n.href}
                  aria-current={current ? "page" : undefined}
                  className={`-mb-px inline-flex min-h-[48px] items-center whitespace-nowrap border-b-2 px-4 text-[15px] font-medium transition-colors ${
                    current
                      ? "border-[#0056B3] text-[var(--ink)]"
                      : "border-transparent text-[var(--ink-3)] hover:text-[#0056B3]"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

/** Header for the Blogs / Tools / Resources pages: eyebrow, title, intro and a large count. */
export function KnowledgeSubHeader({
  title,
  intro,
  count,
  countLabel,
}: {
  title: string;
  intro: string;
  count: number;
  countLabel: string;
}) {
  return (
    <section className="bg-[#f3f5f8]">
      <div className="container-x grid grid-cols-1 gap-6 py-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
        <div className="min-w-0">
          <Eyebrow>Knowledge Hub</Eyebrow>
          <h1 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-[2.6rem] lg:text-[2.9rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">{intro}</p>
        </div>
        <p className="lg:text-right">
          <span className="block font-[family-name:var(--font-poppins)] text-[3rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] tnum sm:text-[4rem]">
            {count}
          </span>
          <span className="mt-1.5 block text-sm text-[var(--ink-3)]">{countLabel}</span>
        </p>
      </div>
    </section>
  );
}

/** Navy closing band shared by the Knowledge Hub pages. */
export function KnowledgeContactBand() {
  return (
    <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
      <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
      <div className="container-x relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div>
          <Eyebrow dark>Application team</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
            Have a testing question? Talk to our application team.
          </h2>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
            className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
          >
            Call Technical Sales: {site.phones.sales1}
          </a>
        </div>
      </div>
    </section>
  );
}
