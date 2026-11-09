"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  X,
  ExternalLink,
} from "lucide-react";
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
  details: string;
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
      "India's premier exhibition for scientific and laboratory instruments. Meet our technical specialists, explore high-pressure reaction technology, and discover indigenous manufacturing from our Hyderabad facility.",
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
    details:
      "Gross Calorific Value (GCV), also termed higher heating value (HHV), represents the absolute heat of combustion when all water generated is condensed to liquid state. In thermal power stations and coal trading, accurate GCV calculation directly governs station heat rate calculations and billing penalties. Isoperibol oxygen bomb calorimeters (such as the Parr 6400 and 7400) maintain jacket temperatures with micro-Kelvin precision, complying with ASTM D5865 and IS 1350 protocols without manual thermometric calculations.",
    date: "October 2026",
    image: "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
  },
  {
    id: "proximate-analysis",
    tag: "Technical Article",
    title: "Proximate Analysis of Coal",
    summary:
      "Automated determination of moisture, volatile matter, ash and fixed carbon in coal and coke samples using modern thermogravimetric analysers.",
    details:
      "Proximate analysis separates coal into four key constituents: moisture, volatile matter, ash, and fixed carbon by difference. Traditional muffle furnace procedures require multiple manual transfers and weighings across many hours. Orbit's TGA 3000 automates up to 19 samples per carousel, executing sequential heating ramps in nitrogen and oxygen environments to eliminate operator transfer errors and deliver automated reports conforming to ASTM D7582.",
    date: "September 2026",
    image: "/images/orbit/tga-3000.jpg",
  },
  {
    id: "choose-bomb-calorimeter",
    tag: "Guide",
    title: "How to Choose a Bomb Calorimeter",
    summary:
      "A practical comparison of automatic, removable bomb and isoperibol calorimeters for testing laboratories.",
    details:
      "Selecting the appropriate calorimeter hinges on test throughput, operator skill, and sample volatility. Removable-bomb systems (Parr 6200/7200) allow washing and multi-bomb cycling ideal for high-precision research or high-chlorine fuels. Fully automated systems (Parr 6400/7400) automatically charge oxygen and wash the bomb vessel internally between determinations, maximizing daily output for central testing laboratories handling 50+ determinations per shift.",
    date: "August 2026",
    image: "/images/orbit/6400-Fully-Automatic-Isope.jpg",
  },
  {
    id: "ash-fusion-temperature",
    tag: "Guide",
    title: "Understanding Ash Fusion Temperature",
    summary:
      "Assessing ash softening, hemispherical and fluid temperatures to predict boiler slagging and fouling.",
    details:
      "Ash Fusion Temperature (AFT) testing records the behavioral transformation of coal ash cones under reducing or oxidizing furnace atmospheres up to 1600°C. Deformation Temperature (IT), Softening Temperature (ST), Hemispherical Temperature (HT), and Fluid Temperature (FT) inform boiler engineers whether ash will coat boiler water-walls or drop cleanly into slag pits, safeguarding boiler availability in coal-fired power plants.",
    date: "July 2026",
    image: "/images/orbit/high-temperature-chamber-furnaces.jpg",
  },
];

export function EventsAndKnowledge() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeArticle, setActiveArticle] = useState<KnowledgeArticle | null>(null);
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
    <div className="grid gap-8 lg:grid-cols-2">
      {/* LEFT COLUMN: News and Events (Carousel) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-[#0056B3] sm:text-2xl">News and Events</h3>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous event"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-[#0056B3]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next event"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-[#0056B3]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel Card */}
          {currentEvent && (
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-[#fbfcfd]">
              {currentEvent.image && (
                <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={withBasePath(currentEvent.image)}
                    alt={`${currentEvent.name} banner`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-[#0056B3] px-2.5 py-1 text-[11px] font-medium text-white">
                    Upcoming Exhibition
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-6">
                <p className="flex items-center gap-2 text-xs font-semibold text-[#d00000]">
                  <CalendarDays className="h-4 w-4 shrink-0" /> {currentEvent.dates}
                </p>
                <h4 className="mt-2 text-lg font-semibold text-[#0056B3] sm:text-xl">
                  {currentEvent.name}
                </h4>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600 sm:text-sm">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <span>{currentEvent.cityVenue}</span>
                  </p>
                  <p className="flex items-start gap-2 font-medium text-slate-700">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d00000]" />
                    <span>{currentEvent.hallStand}</span>
                  </p>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-2">
                  {currentEvent.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveExhibition(currentEvent)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                  >
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <div className="flex gap-1.5">
                    {upcomingEvents.map((ev, idx) => (
                      <button
                        key={ev.id}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          currentSlide === idx ? "w-6 bg-[#d00000]" : "w-2 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between pt-2">
          <Link href="/news" className="btn btn-outline text-xs sm:text-sm">
            View All News and Events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN: Latest from the Knowledge Hub */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-[#0056B3] sm:text-2xl">
                Latest from the Knowledge Hub
              </h3>
            </div>
            <Link
              href="/knowledge-hub/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056B3] hover:text-[#d00000] transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {KNOWLEDGE_ARTICLES.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group flex items-center justify-between gap-3 sm:gap-4 rounded-xl border border-slate-200 bg-[#fbfcfd] p-3 sm:p-3.5 transition hover:border-[#0056B3]/40 hover:bg-white hover:shadow-xs cursor-pointer"
              >
                {/* Left: Tag, Date, Title, Short Description */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-medium ${
                        art.tag === "Technical Article"
                          ? "bg-sky-50 text-sky-800 border border-sky-200"
                          : "bg-[#feeceb] text-[#d00000] border border-red-200"
                      }`}
                    >
                      {art.tag}
                    </span>
                    <span className="text-[11px] text-slate-400">{art.date}</span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-semibold text-[#0056B3] group-hover:text-[#d00000] transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {art.summary}
                  </p>
                </div>

                {/* Right: Thumbnail Image */}
                {art.image && (
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                    <Image
                      src={withBasePath(art.image)}
                      alt={art.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 sm:p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="chip chip-accent text-xs font-medium">
              {activeArticle.tag}
            </span>
            <h3 className="mt-3 text-xl font-semibold text-[#0056B3] sm:text-2xl">
              {activeArticle.title}
            </h3>
            <p className="mt-2 text-xs font-medium text-slate-500">
              Published by Orbit Technical Application Team · {activeArticle.date}
            </p>

            {activeArticle.image && (
              <div className="relative mt-4 aspect-[16/8] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src={withBasePath(activeArticle.image)}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-700 space-y-3">
              <p className="font-semibold text-slate-900">{activeArticle.summary}</p>
              <p className="text-slate-600">{activeArticle.details}</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <Link
                href="/contact-us#quote"
                onClick={() => setActiveArticle(null)}
                className="btn btn-accent text-xs"
              >
                Discuss with Application Engineer
              </Link>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="btn btn-outline text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exhibition Detail Modal */}
      {activeExhibition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 sm:p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setActiveExhibition(null)}
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="chip chip-accent text-xs font-medium">
              Exhibition Details
            </span>
            <h3 className="mt-3 text-xl font-semibold text-[#0056B3] sm:text-2xl">
              {activeExhibition.name}
            </h3>

            <div className="mt-4 space-y-2 rounded-xl bg-slate-50 p-4 text-xs sm:text-sm text-slate-700">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#d00000]" />{" "}
                <span className="font-semibold">Dates:</span> {activeExhibition.dates}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d00000]" />{" "}
                <span className="font-semibold">Venue:</span> {activeExhibition.cityVenue}
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#d00000]" />{" "}
                <span className="font-semibold">Stand:</span> {activeExhibition.hallStand}
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {activeExhibition.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              {activeExhibition.url && (
                <a
                  href={activeExhibition.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline text-xs"
                >
                  Official Event Site <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <Link
                href="/contact-us#quote"
                onClick={() => setActiveExhibition(null)}
                className="btn btn-accent text-xs"
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
