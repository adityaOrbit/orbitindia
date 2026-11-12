"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
  Check,
  Building2,
  X,
} from "lucide-react";
import { withBasePath } from "@/lib/utils";
import type { NewsArticle, EventArticle } from "@/data/news";

interface NewsHubProps {
  news: NewsArticle[];
  upcomingEvents: EventArticle[];
  pastEvents: EventArticle[];
}

type TabType = "all" | "news" | "upcoming" | "past";

export function NewsHub({ news, upcomingEvents, pastEvents }: NewsHubProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get distinct categories from news
  const categories = useMemo(() => {
    const set = new Set(news.map((n) => n.category));
    return ["all", ...Array.from(set)];
  }, [news]);

  // Headline item: Parr 7400
  const headlineNews = useMemo(() => {
    return (
      news.find((n) => n.slug === "parr-7400-automatic-isoperibol-calorimeter") || news[0]
    );
  }, [news]);

  // Filtered News
  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [news, searchQuery, selectedCategory]);

  // Filtered Upcoming Events
  const filteredUpcoming = useMemo(() => {
    return upcomingEvents.filter((item) => {
      if (searchQuery === "") return true;
      const q = searchQuery.toLowerCase();
      return (
        item.show.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q)
      );
    });
  }, [upcomingEvents, searchQuery]);

  // Filtered Past Events
  const filteredPast = useMemo(() => {
    return pastEvents.filter((item) => {
      if (searchQuery === "") return true;
      const q = searchQuery.toLowerCase();
      return (
        item.show.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q)
      );
    });
  }, [pastEvents, searchQuery]);

  // Total counts
  const totalNewsCount = news.length;
  const totalUpcomingCount = upcomingEvents.length;
  const totalPastCount = pastEvents.length;
  const totalAllCount = totalNewsCount + totalUpcomingCount + totalPastCount;

  return (
    <div className="space-y-12">
      {/* Featured Headline Hero Banner */}
      {headlineNews && (
        <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-[#001c3d] via-[#00387a] to-[#0056B3] text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(208,0,0,0.18),transparent_65%)]" />
          
          <div className="relative grid items-center gap-8 p-6 md:p-10 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-xs">
                  {headlineNews.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-[#feeceb]" /> {headlineNews.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-white">
                {headlineNews.title}
              </h2>

              <p className="text-sm leading-relaxed text-slate-200 md:text-base">
                {headlineNews.subtitle}
              </p>

              <div className="grid gap-2 pt-2 sm:grid-cols-2">
                {headlineNews.highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#feeceb]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href={`/news/${headlineNews.slug}`}
                  className="btn btn-accent inline-flex items-center gap-2 text-sm font-bold shadow-md"
                >
                  Read Full Technical Article <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/7400-automatic-isoperibol-calorimeter"
                  className="btn bg-white/15 text-white hover:bg-white/25 border-white/20 inline-flex items-center gap-2 text-sm font-semibold backdrop-blur-xs"
                >
                  View Product Page
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5 flex items-center justify-center">
              <div className="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-xl border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-xs group">
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-white/95">
                  <Image
                    src={withBasePath(headlineNews.image)}
                    alt={headlineNews.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="mt-2 text-center text-[11px] font-medium text-slate-300">
                  {headlineNews.imageCaption || headlineNews.title}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#0056B3] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <span>All Updates</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  activeTab === "all" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {totalAllCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("news")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "news"
                  ? "bg-[#0056B3] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#d00000]" />
              <span>News & Launches</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  activeTab === "news" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {totalNewsCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("upcoming")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "upcoming"
                  ? "bg-[#0056B3] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <CalendarDays className="h-3.5 w-3.5 text-emerald-600" />
              <span>Upcoming Events</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  activeTab === "upcoming"
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {totalUpcomingCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("past")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "past"
                  ? "bg-[#0056B3] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <Building2 className="h-3.5 w-3.5 text-slate-500" />
              <span>Past Exhibitions</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  activeTab === "past" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {totalPastCount}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search news, events, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-10 pr-9 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-[#0056B3] focus:outline-hidden focus:ring-1 focus:ring-[#0056B3]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (Active when viewing All or News) */}
        {(activeTab === "all" || activeTab === "news") && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-2">
              <SlidersHorizontal className="h-3 w-3" /> Filter:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[44px] sm:min-h-0 rounded-full px-4 py-1 text-xs font-semibold capitalize transition cursor-pointer ${
                    isActive
                      ? "bg-[#d00000] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 1: UPCOMING EVENTS (Shown in 'all' or 'upcoming' tab) */}
      {(activeTab === "all" || activeTab === "upcoming") && filteredUpcoming.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                Upcoming Trade Shows &amp; Exhibitions
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {filteredUpcoming.length} {filteredUpcoming.length === 1 ? "Event" : "Events"} Scheduled
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredUpcoming.map((event) => (
              <article
                key={event.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-white p-6 shadow-sm transition hover:border-emerald-500 hover:shadow-lg"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-ping" />
                      Upcoming Event
                    </span>
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5 text-[#d00000]" />
                      {event.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                    <Link href={`/news/${event.slug}`}>{event.show}</Link>
                  </h3>

                  <p className="mt-1.5 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#d00000]" />
                    {event.location}
                  </p>

                  <div className="mt-2 inline-block rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                    {event.hall} · {event.booth}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {event.summary}
                  </p>

                  {/* Highlights */}
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                      {event.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <Link
                    href={`/news/${event.slug}`}
                    className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0056B3] group-hover:text-[#d00000] transition"
                  >
                    View Details &amp; Book Stall Meeting <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {event.href && (
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-xs font-semibold text-slate-500 hover:text-slate-800 underline sm:min-h-0"
                    >
                      Official Website &nearr;
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: LATEST NEWS & PRODUCT LAUNCHES (Shown in 'all' or 'news' tab) */}
      {(activeTab === "all" || activeTab === "news") && filteredNews.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
              Latest News &amp; Technical Announcements
            </h2>
            <span className="text-xs font-bold text-slate-500">
              {filteredNews.length} {filteredNews.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:border-[#0056B3]/30 hover:shadow-md"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                    <Image
                      src={withBasePath(article.image)}
                      alt={article.title}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-slate-400" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-bold leading-snug text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                      <Link href={`/news/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Highlights pill preview */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {article.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700 line-clamp-1"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100">
                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      href={`/news/${article.slug}`}
                      className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1 text-xs font-bold text-[#0056B3] group-hover:text-[#d00000] transition"
                    >
                      Read Full Article <ArrowRight className="h-3.5 w-3.5 ml-0.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: PAST EXHIBITIONS (Shown in 'all' or 'past' tab) */}
      {(activeTab === "all" || activeTab === "past") && filteredPast.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-slate-600" />
              <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                Finished &amp; Past Exhibitions
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {filteredPast.length} Completed Expos
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPast.map((event) => (
              <article
                key={event.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-slate-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      Completed Exhibition
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{event.date}</span>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-[#0056B3] group-hover:text-[#d00000] transition">
                    <Link href={`/news/${event.slug}`}>{event.show}</Link>
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-600 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
                    {event.location}
                  </p>

                  <p className="mt-1 text-xs font-bold text-slate-700">
                    {event.hall} · {event.booth}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {event.summary}
                  </p>

                  {event.outcomes && event.outcomes.length > 0 && (
                    <div className="mt-3 rounded-lg bg-slate-50 p-2.5 text-xs text-slate-700 space-y-1">
                      <p className="font-bold text-[11px] uppercase tracking-wider text-slate-500">
                        Event Highlights:
                      </p>
                      {event.outcomes.slice(0, 2).map((oc, i) => (
                        <p key={i} className="text-[11px] leading-tight text-slate-600">
                          &bull; {oc}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <Link
                    href={`/news/${event.slug}`}
                    className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1 text-xs font-bold text-[#0056B3] group-hover:text-[#d00000] transition"
                  >
                    View Exhibition Recap <ArrowRight className="h-3.5 w-3.5 ml-0.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredNews.length === 0 && filteredUpcoming.length === 0 && filteredPast.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-base font-bold text-slate-700">No news or events match your search.</p>
          <p className="mt-1 text-xs text-slate-500">Try adjusting your keyword filter or view all updates.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setActiveTab("all");
            }}
            className="btn btn-outline mt-4 text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Newsletter / Catalog Request Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-[#ebf3fc] p-8 md:p-10 border border-blue-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold text-[#0056B3] sm:text-2xl">
              Require Technical Product Bulletins or Application Notes?
            </h3>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-700">
              Speak directly with our senior application engineers or schedule a private technical
              demonstration for your laboratory across any of our 15 PAN-India branch locations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact-us" className="btn btn-accent text-xs md:text-sm font-bold shadow-md">
              Schedule Demonstration <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/locations" className="btn btn-outline text-xs md:text-sm font-semibold">
              Find Nearest Branch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
