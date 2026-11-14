import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TemperatureCurve } from "@/components/temperature-curve";
import { site } from "@/data/site";

/** Header for the Blogs / Tools / Resources pages: title and intro. */
export function KnowledgeSubHeader({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-[#f3f5f8]">
      <div className="container-x py-10 sm:py-14">
        <div className="min-w-0">
          <h1 className="text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-[2.6rem] lg:text-[2.9rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">{intro}</p>
        </div>
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
          <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
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
