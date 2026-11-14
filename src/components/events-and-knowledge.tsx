"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, X, ExternalLink } from "lucide-react";
import { withBasePath } from "@/lib/utils";

type Exhibition = {
  id: string;
  name: string;
  dates: string;
  cityVenue: string;
  hallStand: string;
  image?: string;
  url?: string;
  description: string;
  isUpcoming: boolean;
};

type KnowledgeArticle = {
  id: string;
  tag: "Technical Article" | "Guide" | "Application Note";
  title: string;
  summary: string;
  /** Knowledge Hub article slug (/knowledge-hub/<slug>/). */
  slug: string;
  date: string;
  image: string;
};

const EXHIBITIONS: Exhibition[] = [
  {
    id: "arablab-2026",
    name: "Arablab Live 2026",
    dates: "26th – 28th October 2026",
    cityVenue: "Dubai World Trade Centre, UAE",
    hallStand: "Hall No. 3, Booth: SSH3-B66",
    image: "/images/events/arablab-2026.jpg",
    url: "https://www.arablab.com/",
    description:
      "Join Orbit Technologies at the largest annual trade show for laboratory science and instrumentation in the Middle East. Experience live demos of our automated calorimeters, elemental combustion analyzers, and Parr reactor systems.",
    isUpcoming: true,
  },
  {
    id: "india-lab-expo-2026",
    name: "India Lab Expo 2026",
    dates: "17th – 19th September 2026",
    cityVenue: "HITEX Exhibition Centre, Hyderabad",
    hallStand: "Hall No. 2, Stall No. L31",
    image: "/images/events/india-lab-expo.jpg",
    description:
      "India's major exhibition for scientific and laboratory instruments. Meet our technical specialists, explore high-pressure reaction technology, and discover indigenous manufacturing from our Hyderabad facility.",
    isUpcoming: true,
  },
  {
    id: "pmec-india-2026",
    name: "PMEC India 2026",
    dates: "24th – 26th November 2026",
    cityVenue: "India Expo Centre, Greater Noida, Delhi NCR",
    hallStand: "Hall No. 14, Stand No. D58",
    image: "/images/events/pmec.jpg",
    description:
      "South Asia's leading pharmaceutical and analytical technology exhibition. Demonstrating reaction calorimetry, autoclave systems, and certified reference standards for research and formulation labs.",
    isUpcoming: true,
  },
];

const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: "gcv-coal",
    tag: "Technical Article",
    title: "Understanding GCV in Coal Testing",
    summary:
      "Gross Calorific Value (GCV) determination, bomb calorimetry standards (ASTM D5865, ISO 1928), and moisture corrections in commercial coal analysis.",
    slug: "bomb-calorimetry-gcv",
    date: "October 2026",
    image: "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
  },
  {
    id: "proximate-analysis",
    tag: "Technical Article",
    title: "Proximate Analysis of Coal",
    summary:
      "Automated determination of moisture, volatile matter, ash and fixed carbon in coal and coke samples using modern thermogravimetric analysers.",
    slug: "proximate-analysis-of-coal",
    date: "September 2026",
    image: "/images/orbit/tga-3000.jpg",
  },
  {
    id: "choose-bomb-calorimeter",
    tag: "Guide",
    title: "How to Choose a Bomb Calorimeter",
    summary:
      "A practical comparison of automatic, removable bomb and isoperibol calorimeters for testing laboratories.",
    slug: "parr-7400-vs-6400-calorimeter-comparison",
    date: "August 2026",
    image: "/images/orbit/6400-Fully-Automatic-Isope.jpg",
  },
  {
    id: "ash-fusion-temperature",
    tag: "Guide",
    title: "Understanding Ash Fusion Temperature",
    summary:
      "Assessing ash softening, hemispherical and fluid temperatures to predict boiler slagging and fouling.",
    slug: "ash-fusibility-determination",
    date: "July 2026",
    image: "/images/orbit/high-temperature-chamber-furnaces.jpg",
  },
];

export function EventsAndKnowledge() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeExhibition, setActiveExhibition] = useState<Exhibition | null>(null);

  // Automatically filter out past events and keep upcoming ones first
  const upcomingEvents = EXHIBITIONS.filter((e) => e.isUpcoming);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? upcomingEvents.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === upcomingEvents.length - 1 ? 0 : prev + 1));
  };

  const currentEvent = upcomingEvents[currentSlide] || upcomingEvents[0];

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
      {/* LEFT COLUMN: News and Events (carousel) */}
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-3">
          <h3 className="text-lg font-semibold text-[var(--ink)] sm:text-xl">News and Events</h3>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous event"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--line)] text-[var(--ink-2)] transition-colors hover:border-[#0056B3] hover:text-[#0056B3] lg:h-9 lg:w-9"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next event"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--line)] text-[var(--ink-2)] transition-colors hover:border-[#0056B3] hover:text-[#0056B3] lg:h-9 lg:w-9"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {currentEvent && (
          <div className="mt-5 flex-1">
            {currentEvent.image && (
              <div className="relative aspect-[16/8] w-full overflow-hidden rounded-md bg-[var(--soft)]">
                <Image
                  src={withBasePath(currentEvent.image)}
                  alt={`${currentEvent.name} banner`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <p className="mt-4 text-[13px] text-[var(--ink-3)] tnum">{currentEvent.dates}</p>
            <h4 className="mt-1 text-lg font-semibold text-[var(--ink)] sm:text-xl">{currentEvent.name}</h4>
            <p className="mt-1.5 text-[15px] text-[var(--ink-2)]">{currentEvent.cityVenue}</p>
            <p className="mt-0.5 text-sm font-medium text-[var(--ink)]">{currentEvent.hallStand}</p>

            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--ink-3)]">
              {currentEvent.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveExhibition(currentEvent)}
                className="link-more min-h-[44px] lg:min-h-0"
              >
                View details <ArrowRight className="h-4 w-4" />
              </button>
              <div className="flex gap-4 sm:gap-1.5">
                {upcomingEvents.map((ev, idx) => (
                  <button
                    key={ev.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-current={currentSlide === idx}
                    className={`relative h-1.5 rounded-full transition-all after:absolute after:-inset-x-2 after:-inset-y-4 after:content-[''] sm:after:hidden ${
                      currentSlide === idx ? "w-6 bg-[#0056B3]" : "w-2 bg-[#cfd6df]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 border-t border-[var(--line)] pt-4">
          <Link href="/news" className="link-more min-h-[44px] lg:min-h-0">
            View All News and Events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN: Latest from the Orbit */}
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-3">
          <h3 className="text-lg font-semibold text-[var(--ink)] sm:text-xl">Latest from the Orbit</h3>
          <Link href="/knowledge-hub/" className="link-more min-h-[44px] lg:min-h-0">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          {KNOWLEDGE_ARTICLES.map((art) => (
            <Link
              key={art.id}
              href={`/knowledge-hub/${art.slug}/`}
              className="group flex items-start gap-4 border-b border-[var(--line)] py-4"
            >
              {art.image && (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-sm bg-[var(--soft)] sm:h-[5.5rem] sm:w-[5.5rem]">
                  <Image
                    src={withBasePath(art.image)}
                    alt={art.title}
                    fill
                    sizes="88px"
                    className="object-contain p-1.5 mix-blend-multiply"
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium text-[#0056B3]">{art.tag}</p>
                <h4 className="mt-0.5 text-[15px] font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3]">
                  {art.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[var(--ink-3)]">{art.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Exhibition detail modal */}
      {activeExhibition && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeExhibition.name}
        >
          <div className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-md bg-white p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setActiveExhibition(null)}
              aria-label="Close modal"
              className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-md text-[var(--ink-3)] hover:bg-[var(--soft)] hover:text-[var(--ink)]"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="pr-10 text-xl font-semibold text-[var(--ink)] sm:text-2xl">{activeExhibition.name}</h3>

            <table className="data-table mt-4 border-t border-[var(--line)]">
              <tbody>
                <tr>
                  <th scope="row">Dates:</th>
                  <td className="tnum">{activeExhibition.dates}</td>
                </tr>
                <tr>
                  <th scope="row">Venue:</th>
                  <td>{activeExhibition.cityVenue}</td>
                </tr>
                <tr>
                  <th scope="row">Stand:</th>
                  <td>{activeExhibition.hallStand}</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-2)]">{activeExhibition.description}</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-5">
              {activeExhibition.url && (
                <a href={activeExhibition.url} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Official Event Site <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <Link
                href="/contact-us#quote"
                onClick={() => setActiveExhibition(null)}
                className="btn btn-accent"
              >
                Schedule Booth Meeting
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
