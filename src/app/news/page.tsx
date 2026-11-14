import type { Metadata } from "next";
import { NewsHub } from "@/components/news/news-hub";
import { getAllNews, getUpcomingEvents, getPastEvents } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Events | Orbit Technologies",
  description:
    "Explore the latest product launches (Parr 7400, Parr 7200, OFCU, A&D Fortis IP68), technology bulletins, and upcoming international trade exhibitions like Arablab Live 2026 Dubai.",
  keywords: [
    "Parr 7400 calorimeter India",
    "Parr 7200 calorimeter",
    "Arablab Live 2026 Orbit",
    "Oxygen Flask Combustion Unit OFCU",
    "A&D Fortis balance India",
    "Orbit Technologies news events",
    "coal calorimeter launch",
    "TGA 3000 ASTM D7582",
  ],
};

export default function NewsPage() {
  const news = getAllNews();
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="bg-white">
      {/* Page header: eyebrow, H1 and intro */}
      <section className="border-b border-[var(--line)]">
        <div className="container-x py-10 sm:py-12 lg:py-16">
          <p className="font-[family-name:var(--font-poppins)] text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0056B3]">
            Newsroom &amp; Global Exhibitions
          </p>
          <h1 className="mt-4 max-w-4xl text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.6rem] lg:text-[3rem]">
            News &amp; Events
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-2)] sm:text-lg">
            Latest instrument innovations, factory engineering bulletins, and international trade shows where you can meet Orbit&apos;s technical application specialists.
          </p>
        </div>
      </section>

      <NewsHub news={news} upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </div>
  );
}
