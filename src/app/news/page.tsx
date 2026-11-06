import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
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
    <div className="pb-16">
      <PageHero
        eyebrow="Newsroom & Global Exhibitions"
        title="News & Events"
        subtitle="Latest instrument innovations, factory engineering bulletins, and international trade shows where you can meet Orbit's technical application specialists."
      />

      <div className="container-x mt-10">
        <NewsHub
          news={news}
          upcomingEvents={upcomingEvents}
          pastEvents={pastEvents}
        />
      </div>
    </div>
  );
}
