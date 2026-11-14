import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
import {
  KNOWLEDGE_ARTICLES,
  SOP_LIBRARY,
  KNOWLEDGE_USE_CASES,
  DOWNLOAD_CENTER,
  FREE_TOOLS_META,
} from "@/data/knowledge-hub";
import { site } from "@/data/site";
import { KnowledgeHubSections } from "@/components/knowledge/knowledge-hub-tabs";
import { Eyebrow, articleImage } from "@/components/knowledge/hub-ui";

export const metadata: Metadata = {
  title: "Knowledge Hub — Articles, Downloads, SOPs & Calculators | Orbit Technologies",
  description:
    "Practical guides from Orbit Technologies' application team, plus downloadable brochures, laboratory SOPs, use cases and free calculators for calorimetry, proximate analysis, ash fusion and reactor safety.",
};

export default function KnowledgeHubPage() {
  const featured = KNOWLEDGE_ARTICLES[0];
  const featuredImage = featured ? articleImage(featured) : null;
  const counts: [string, number, string][] = [
    ["#articles", KNOWLEDGE_ARTICLES.length, "Articles"],
    ["#downloads", DOWNLOAD_CENTER.length, "Downloads"],
    ["#sops", SOP_LIBRARY.length, "SOPs"],
    ["#use-cases", KNOWLEDGE_USE_CASES.length, "Use Cases"],
    ["#calculators", FREE_TOOLS_META.length, "Calculators"],
  ];

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Knowledge Hub" },
        ]}
      />

      {/* Split header: title, intro and section counts left; latest article on a pale field bleeding right */}
      <section className="relative">
        {featured && <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />}
        <div className={`container-x relative grid grid-cols-1 items-center ${featured ? "lg:grid-cols-[1.38fr_1fr]" : ""}`}>
          <div className="min-w-0 py-8 sm:py-10 lg:py-16 lg:pr-14">
            <Eyebrow>Technical resources</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-[2.6rem] lg:text-[2.9rem]">
              Knowledge Hub
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              Articles, downloads, SOPs and calculators for coal, fuel and material testing from Orbit&apos;s application team.
            </p>
            <ul className="mt-8 grid grid-cols-3 border-t border-[var(--line)] sm:grid-cols-5">
              {counts.map(([href, n, label]) => (
                <li key={href} className="min-w-0">
                  <a href={href} className="group flex min-h-[44px] flex-col py-4 pr-3">
                    <span className="font-[family-name:var(--font-poppins)] text-[2rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum group-hover:text-[#0056B3] sm:text-[2.4rem]">
                      {n}
                    </span>
                    <span className="mt-1.5 text-sm text-[var(--ink-3)] group-hover:text-[#0056B3]">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {featured && (
            <Link
              href={`/knowledge-hub/${featured.slug}/`}
              className="group -mx-4 block min-w-0 bg-[#f3f5f8] px-4 pb-8 pt-6 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-transparent lg:py-14 lg:pl-12 lg:pr-0"
            >
              {featuredImage && (
                <div className="relative h-56 sm:h-72 lg:h-[300px]">
                  <Image
                    src={featuredImage}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-contain p-4 mix-blend-multiply"
                  />
                </div>
              )}
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.06em] text-[#0056B3]">
                {featured.category} · {featured.date}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-xl font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3] sm:text-2xl">
                {featured.title}
              </h2>
              <span className="link-more mt-3">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>
      </section>

      {/* Articles, Downloads, SOPs, Use Cases and Calculators on one page */}
      <KnowledgeHubSections
        articles={KNOWLEDGE_ARTICLES}
        sops={SOP_LIBRARY}
        useCases={KNOWLEDGE_USE_CASES}
        downloads={DOWNLOAD_CENTER}
        tools={FREE_TOOLS_META}
      />

      {/* Contact — navy closing band */}
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
    </div>
  );
}
