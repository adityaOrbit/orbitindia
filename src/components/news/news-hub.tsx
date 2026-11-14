"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Check, X } from "lucide-react";
import { TemperatureCurve } from "@/components/temperature-curve";
import { withBasePath } from "@/lib/utils";
import type { NewsArticle, EventArticle } from "@/data/news";

interface NewsHubProps {
  news: NewsArticle[];
  upcomingEvents: EventArticle[];
  pastEvents: EventArticle[];
}

type TabType = "all" | "news" | "upcoming" | "past";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold uppercase tracking-[0.08em] ${
        dark ? "text-[#7fb2f0]" : "text-[#0056B3]"
      }`}
    >
      {children}
    </p>
  );
}

const h2Cls = "text-[1.65rem] font-semibold leading-tight tracking-[-0.015em] sm:text-[2.1rem]";
const sectionCls = "py-14 sm:py-16 lg:py-20";

/** Section header: eyebrow and title on the left, a count on the right. */
function GroupHead({ eyebrow, title, count }: { eyebrow: string; title: string; count: string }) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>{title}</h2>
      </div>
      <span className="text-[13px] text-[var(--ink-3)] tnum">{count}</span>
    </div>
  );
}

/** Large day numeral with month and year beneath, from an ISO start date. */
function EventDate({ startDate }: { startDate: string }) {
  const [y, m, d] = startDate.split("-");
  return (
    <div className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold leading-tight text-[#0056B3] tnum">
      <b className="block text-[2.4rem] leading-none tracking-[-0.02em] text-[var(--ink)] sm:text-[3.25rem]">{d}</b>
      <span className="mt-1.5 block">
        {MONTHS.at(Number(m) - 1)} {y}
      </span>
    </div>
  );
}

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

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: "all", label: "All Updates", count: totalAllCount },
    { id: "news", label: "News & Launches", count: totalNewsCount },
    { id: "upcoming", label: "Upcoming Events", count: totalUpcomingCount },
    { id: "past", label: "Past Exhibitions", count: totalPastCount },
  ];

  return (
    <div>
      {/* Featured headline — wide image card */}
      {headlineNews && (
        <section className={sectionCls}>
          <div className="container-x">
            <Eyebrow>Featured story</Eyebrow>
            <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-md border border-[var(--line)] lg:grid-cols-[1.15fr_1fr]">
              <figure className="relative m-0 min-w-0 bg-[#f3f5f8]">
                <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[460px]">
                  <Image
                    src={withBasePath(headlineNews.image)}
                    alt={headlineNews.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-8 mix-blend-multiply lg:p-12"
                    priority
                  />
                </div>
                <figcaption className="absolute bottom-3 left-4 right-4 text-[13px] text-[var(--ink-3)] sm:left-6">
                  {headlineNews.imageCaption || headlineNews.title}
                </figcaption>
              </figure>

              <div className="min-w-0 p-6 sm:p-8 lg:p-10">
                <p className="text-[13px] text-[var(--ink-3)]">
                  <span className="font-medium text-[#0056B3]">{headlineNews.category}</span>
                  {" · "}
                  {headlineNews.readTime}
                </p>

                <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.015em] text-[var(--ink)] sm:text-[2rem]">
                  {headlineNews.title}
                </h2>

                <p className="mt-3 text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
                  {headlineNews.subtitle}
                </p>

                <ul className="mt-5 grid gap-y-2">
                  {headlineNews.highlights.slice(0, 4).map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[var(--ink-2)]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#0056B3]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href={`/news/${headlineNews.slug}`} className="btn btn-primary min-h-[48px] px-6">
                    Read Full Technical Article <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/products/7400-automatic-isoperibol-calorimeter" className="btn btn-outline min-h-[48px] px-6">
                    View Product Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tabs, search and category filter */}
      <div className="container-x pb-8">
        <div className="flex flex-col gap-4 border-b border-[var(--line)] lg:flex-row lg:items-end lg:justify-between">
          <div className="-mb-px flex overflow-x-auto no-scrollbar" role="tablist" aria-label="Filter updates">
            {tabs.map((t) => {
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(t.id)}
                  className={`inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 px-3 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "border-[#0056B3] text-[var(--ink)]"
                      : "border-transparent text-[var(--ink-2)] hover:text-[#0056B3]"
                  }`}
                >
                  {t.label}
                  <span className="text-[13px] text-[var(--ink-3)] tnum">{t.count}</span>
                </button>
              );
            })}
          </div>

          <div className="relative mb-3 w-full lg:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-3)]" />
            <input
              type="text"
              placeholder="Search news, events, models..."
              aria-label="Search news and events"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input !pl-9 !pr-10"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-[var(--ink-3)] hover:text-[var(--ink)] lg:h-9 lg:w-9"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category filter (active when viewing All or News) */}
        {(activeTab === "all" || activeTab === "news") && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[13px] font-medium text-[var(--ink-3)]">Filter:</span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[44px] rounded-md border px-3 text-sm capitalize transition-colors lg:min-h-[34px] ${
                    isActive
                      ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                      : "border-[var(--line)] text-[var(--ink-2)] hover:border-[#0056B3] hover:text-[#0056B3]"
                  }`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* UPCOMING EVENTS — date timeline on pale grey (shown in 'all' or 'upcoming') */}
      {(activeTab === "all" || activeTab === "upcoming") && filteredUpcoming.length > 0 && (
        <section className={`bg-[#f3f5f8] ${sectionCls}`}>
          <div className="container-x">
            <GroupHead
              eyebrow="Upcoming events"
              title="Upcoming Trade Shows & Exhibitions"
              count={`${filteredUpcoming.length} ${filteredUpcoming.length === 1 ? "Event" : "Events"} Scheduled`}
            />

            <div className="border-t-2 border-[var(--ink)]">
              {filteredUpcoming.map((event) => (
                <article
                  key={event.slug}
                  className="grid grid-cols-[72px_minmax(0,1fr)] gap-4 border-b border-[var(--line)] py-7 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[120px_minmax(0,1fr)_320px] lg:gap-10"
                >
                  <EventDate startDate={event.startDate} />

                  <div className="min-w-0">
                    <p className="text-[13px] text-[var(--ink-3)]">
                      <span className="font-medium text-[#0056B3]">Upcoming Event</span>
                      {" · "}
                      <span className="tnum">{event.date}</span>
                    </p>

                    <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-[1.5rem]">
                      <Link href={`/news/${event.slug}`} className="hover:text-[#0056B3]">
                        {event.show}
                      </Link>
                    </h3>

                    <p className="mt-1.5 text-[15px] text-[var(--ink-2)]">{event.location}</p>
                    <p className="mt-0.5 text-sm font-medium text-[var(--ink)]">
                      {event.hall} · {event.booth}
                    </p>

                    <p className="mt-3 line-clamp-3 max-w-3xl text-[15px] leading-relaxed text-[var(--ink-3)]">
                      {event.summary}
                    </p>

                    {event.highlights && event.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {event.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--ink-2)]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0056B3]" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-1">
                      <Link href={`/news/${event.slug}`} className="link-more min-h-[44px] !whitespace-normal lg:min-h-0">
                        View Details &amp; Book Stall Meeting <ArrowRight className="h-4 w-4 shrink-0" />
                      </Link>
                      {event.href && (
                        <a
                          href={event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center text-sm text-[var(--ink-3)] underline hover:text-[var(--ink)] lg:min-h-0"
                        >
                          Official Website &nearr;
                        </a>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/news/${event.slug}`}
                    aria-hidden="true"
                    tabIndex={-1}
                    className="relative col-span-2 aspect-[16/7] overflow-hidden rounded-md bg-white lg:col-span-1 lg:self-start"
                  >
                    <Image
                      src={withBasePath(event.image)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 320px, 100vw"
                      className="object-contain p-3"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LATEST NEWS & PRODUCT LAUNCHES — first story wider (shown in 'all' or 'news') */}
      {(activeTab === "all" || activeTab === "news") && filteredNews.length > 0 && (
        <section className={sectionCls}>
          <div className="container-x">
            <GroupHead
              eyebrow="News and launches"
              title="Latest News & Technical Announcements"
              count={`${filteredNews.length} ${filteredNews.length === 1 ? "Article" : "Articles"}`}
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((article, i) => {
                const wide = i === 0 && filteredNews.length > 1;
                return (
                  <article
                    key={article.slug}
                    className={`group relative flex min-w-0 flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3] ${
                      wide ? "md:col-span-2 sm:flex-row" : ""
                    }`}
                  >
                    <div
                      className={`relative w-full shrink-0 bg-[#f3f5f8] ${
                        wide ? "aspect-[16/10] sm:aspect-auto sm:min-h-[300px] sm:w-[48%]" : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={withBasePath(article.image)}
                        alt={article.title}
                        fill
                        sizes={wide ? "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                        className="object-contain p-5 mix-blend-multiply"
                      />
                    </div>

                    <div className={`flex min-w-0 flex-1 flex-col ${wide ? "p-6 sm:p-7" : "p-5"}`}>
                      <p className="text-[13px] text-[var(--ink-3)]">
                        <span className="tnum">{article.date}</span> · {article.readTime}
                      </p>

                      <h3
                        className={`mt-2 font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3] ${
                          wide ? "text-xl sm:text-[1.4rem]" : "text-base"
                        }`}
                      >
                        <Link
                          href={`/news/${article.slug}`}
                          className="after:absolute after:inset-0 after:content-['']"
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className={`mt-2 text-sm leading-relaxed text-[var(--ink-3)] ${wide ? "line-clamp-4 sm:text-[15px]" : "line-clamp-3"}`}>
                        {article.summary}
                      </p>

                      {article.highlights.length > 0 && (
                        <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-[var(--ink-2)]">
                          {article.highlights.slice(0, 2).join(" · ")}
                        </p>
                      )}

                      <span className="link-more mt-auto pt-4 text-sm" aria-hidden="true">
                        Read Full Article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* PAST EXHIBITIONS — date list on pale grey (shown in 'all' or 'past') */}
      {(activeTab === "all" || activeTab === "past") && filteredPast.length > 0 && (
        <section className={`bg-[#f3f5f8] ${sectionCls}`}>
          <div className="container-x">
            <GroupHead
              eyebrow="Past exhibitions"
              title="Finished & Past Exhibitions"
              count={`${filteredPast.length} Completed Expos`}
            />

            <div className="border-t-2 border-[var(--ink)]">
              {filteredPast.map((event) => (
                <article
                  key={event.slug}
                  className="grid grid-cols-[72px_minmax(0,1fr)] gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[120px_minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10"
                >
                  <EventDate startDate={event.startDate} />

                  <div className="min-w-0">
                    <p className="text-[13px] text-[var(--ink-3)]">
                      Completed Exhibition · <span className="tnum">{event.date}</span>
                    </p>

                    <h3 className="mt-1.5 text-lg font-semibold text-[var(--ink)]">
                      <Link href={`/news/${event.slug}`} className="hover:text-[#0056B3]">
                        {event.show}
                      </Link>
                    </h3>

                    <p className="mt-1 text-sm text-[var(--ink-2)]">{event.location}</p>
                    <p className="mt-0.5 text-sm font-medium text-[var(--ink)]">
                      {event.hall} · {event.booth}
                    </p>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--ink-3)]">
                      {event.summary}
                    </p>

                    <Link href={`/news/${event.slug}`} className="link-more mt-3 min-h-[44px] lg:min-h-0">
                      View Exhibition Recap <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {event.outcomes && event.outcomes.length > 0 && (
                    <div className="col-span-2 min-w-0 sm:col-span-1 sm:col-start-2 lg:col-start-3">
                      <p className="text-[13px] font-medium text-[var(--ink)]">Event Highlights:</p>
                      <ul className="mt-1 list-disc space-y-1 pl-4 text-[13px] leading-snug text-[var(--ink-3)] marker:text-[#0056B3]">
                        {event.outcomes.slice(0, 2).map((oc, i) => (
                          <li key={i}>{oc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {filteredNews.length === 0 && filteredUpcoming.length === 0 && filteredPast.length === 0 && (
        <div className={sectionCls}>
          <div className="container-x">
            <div className="rounded-md border border-[var(--line)] p-10 text-center">
              <p className="text-base font-semibold text-[var(--ink)]">No news or events match your search.</p>
              <p className="mt-1 text-sm text-[var(--ink-3)]">Try adjusting your keyword filter or view all updates.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setActiveTab("all");
                }}
                className="btn btn-outline mt-4"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulletins / demonstration request — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow dark>Bulletins and demonstrations</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Require Technical Product Bulletins or Application Notes?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#c9d4e3]">
              Speak directly with our senior application engineers or schedule a private technical
              demonstration for your laboratory across any of our 15 PAN-India branch locations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact-us" className="btn btn-accent min-h-[48px] px-6">
              Schedule Demonstration <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact-us/"
              className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
            >
              Our Branch Offices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
