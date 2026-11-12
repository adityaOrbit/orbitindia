import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Building2,
  Globe,
  Sparkles,
  Award,
  Layers,
} from "lucide-react";
import { withBasePath } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { getNewsOrEventSchema } from "@/lib/schema";
import {
  getNewsOrEventBySlug,
  getAllNewsAndEventSlugs,
  getAllNews,
  getAllEvents,
  type NewsArticle,
  type EventArticle,
} from "@/data/news";
import { NewsLeadForm } from "@/components/news/news-lead-form";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllNewsAndEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsOrEventBySlug(slug);

  if (!item) {
    return {
      title: "Article Not Found | Orbit Technologies",
    };
  }

  const isEvent = item.type === "event";
  const title = isEvent ? `${item.show} – ${item.location} | Orbit Technologies` : `${item.title} | Orbit Technologies`;
  const description = item.summary;

  return {
    title,
    description,
    keywords: [
      item.title,
      isEvent ? item.show : item.category,
      "Orbit Technologies",
      "analytical instruments India",
      "Parr Instrument Company India",
    ],
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getNewsOrEventBySlug(slug);

  if (!item) {
    notFound();
  }

  const isEvent = item.type === "event";

  // Related updates to show at the bottom
  const recentNews = getAllNews()
    .filter((n) => n.slug !== slug)
    .slice(0, 3);
  const otherEvents = getAllEvents()
    .filter((e) => e.slug !== slug)
    .slice(0, 2);

  return (
    <div className="pb-20">
      <JsonLd data={getNewsOrEventSchema(item)} />
      {/* Breadcrumb row */}
      <div className="border-b border-slate-200 bg-slate-50/80 py-3 text-xs">
        <div className="container-x flex items-center gap-2 text-slate-500">
          <Link href="/" className="hover:text-[#0056B3] transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/news" className="hover:text-[#0056B3] transition">
            News &amp; Events
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-900 truncate max-w-[280px] sm:max-w-md">
            {isEvent ? (item as EventArticle).show : item.title}
          </span>
        </div>
      </div>

      <div className="container-x mt-8">
        {/* Back Link */}
        <Link
          href="/news"
          className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#0056B3] transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to All News &amp; Events
        </Link>

        {isEvent ? (
          // ==========================================
          // EVENT DETAIL VIEW
          // ==========================================
          <EventView event={item as EventArticle} />
        ) : (
          // ==========================================
          // NEWS ARTICLE DETAIL VIEW
          // ==========================================
          <NewsView article={item as NewsArticle} />
        )}

        {/* Bottom Recommendations */}
        <div className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-xl font-semibold text-[#0056B3]">More from Orbit Technologies</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {recentNews.slice(0, 2).map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#0056B3]/40 hover:shadow-md"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#0056B3] group-hover:text-[#d00000] transition line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">{n.summary}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#0056B3]">
                  <span>{n.date}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            {otherEvents.slice(0, 1).map((e) => (
              <Link
                key={e.slug}
                href={`/news/${e.slug}`}
                className="group flex flex-col justify-between rounded-xl border-2 border-emerald-500/20 bg-white p-5 transition hover:border-emerald-500 hover:shadow-md"
              >
                <div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    {e.status === "upcoming" ? "Upcoming Expo" : "Past Expo"}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-[#0056B3] group-hover:text-[#d00000] transition">
                    {e.show}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">{e.summary}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-[#d00000]" /> {e.date}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENT: NEWS ARTICLE VIEW
// ==========================================

function NewsView({ article }: { article: NewsArticle }) {
  return (
    <div className="mt-6 grid gap-10 lg:grid-cols-12">
      {/* Main Content Column */}
      <div className="lg:col-span-8 space-y-8">
        {/* Header Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <CalendarDays className="h-3.5 w-3.5 text-[#d00000]" /> {article.date}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="h-3.5 w-3.5 text-slate-400" /> {article.readTime}
            </span>
          </div>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl lg:text-4xl">
            {article.title}
          </h1>

          <p className="mt-3 text-base text-slate-600 leading-relaxed font-medium">
            {article.subtitle}
          </p>
        </div>

        {/* Hero Photo */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="relative aspect-16/10 w-full bg-white">
            <Image
              src={withBasePath(article.image)}
              alt={article.title}
              fill
              className="object-contain p-6"
              priority
            />
          </div>
          {article.imageCaption && (
            <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-center text-xs text-slate-500">
              {article.imageCaption}
            </div>
          )}
        </div>

        {/* Executive Summary Callout */}
        <div className="rounded-xl border-l-4 border-[#d00000] bg-[#feeceb] p-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#d00000]">
            Executive Overview
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#0056B3] font-medium">
            {article.summary}
          </p>
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          {article.body.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Key Highlights */}
        {article.highlights && article.highlights.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#d00000]" />
              <h3 className="text-base font-bold text-[#0056B3]">Key Technical Highlights</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {article.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Specifications Table (if available) */}
        {article.specifications && article.specifications.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#0056B3]" />
              <h3 className="text-base font-bold text-[#0056B3]">Technical Specifications</h3>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs">
                <tbody>
                  {article.specifications.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50 border-t border-slate-100"}
                    >
                      <th className="w-1/3 p-3.5 font-bold text-slate-700">{spec.label}</th>
                      <td className="w-2/3 p-3.5 text-slate-800">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* International Standards Compliance (if available) */}
        {article.standards && article.standards.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-[#d00000]" />
              <h3 className="text-base font-bold text-[#0056B3]">
                Standard Test Methods &amp; Regulatory Compliance
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.standards.map((st, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-xs"
                >
                  &check; {st}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Section */}
        {article.relatedProducts && article.relatedProducts.length > 0 && (
          <div className="space-y-4 border-t border-slate-200 pt-6">
            <h3 className="text-base font-bold text-[#0056B3]">Related Instruments &amp; Systems</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {article.relatedProducts.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-[#0056B3] hover:shadow-sm"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                    <Image
                      src={withBasePath(p.image)}
                      alt={p.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#0056B3] group-hover:text-[#d00000] transition truncate">
                      {p.name}
                    </h4>
                    <span className="text-[11px] text-slate-500">{p.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Inquiry Form & Quick Contact */}
      <div className="lg:col-span-4 space-y-6">
        <div className="sticky top-28 space-y-6">
          <NewsLeadForm itemTitle={article.title} itemType="news" />

          {/* Quick Support Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct Technical Line
            </h4>
            <p className="mt-2 text-sm font-semibold text-[#0056B3]">
              Orbit Hyderabad Central Office
            </p>
            <p className="mt-1 text-xs text-slate-600">
              B-50, Industrial Estate, Sanath Nagar, Hyderabad – 500018
            </p>
            <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-700">
              <p>
                <strong>Tel:</strong> +91 40 6721 6354 / 6355
              </p>
              <p>
                <strong>Email:</strong> orbit@orbitindia.com
              </p>
              <p>
                <strong>PAN-India:</strong> 15 regional branch service centers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENT: EVENT VIEW
// ==========================================

function EventView({ event }: { event: EventArticle }) {
  const isUpcoming = event.status === "upcoming";

  return (
    <div className="mt-6 grid gap-10 lg:grid-cols-12">
      {/* Main Left Content */}
      <div className="lg:col-span-8 space-y-8">
        {/* Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {isUpcoming ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-ping" />
                Upcoming Exhibition
              </span>
            ) : (
              <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                Completed Exhibition
              </span>
            )}
            <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
              <CalendarDays className="h-3.5 w-3.5 text-[#d00000]" /> {event.date}
            </span>
          </div>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl lg:text-4xl">
            {event.title}
          </h1>

          {event.subtitle && (
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-medium">
              {event.subtitle}
            </p>
          )}
        </div>

        {/* Quick Venue Information Grid */}
        <div className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Venue &amp; Location
            </span>
            <p className="text-xs font-bold text-slate-800 flex items-start gap-1.5">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d00000]" />
              <span>{event.venue}</span>
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Stall &amp; Stand Location
            </span>
            <p className="text-xs font-bold text-[#0056B3] flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 shrink-0 text-[#d00000]" />
              <span>{event.hall} &bull; {event.booth}</span>
            </p>
          </div>

          {event.href && (
            <div className="sm:col-span-2 border-t border-slate-200/70 pt-3">
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
              >
                <Globe className="h-3.5 w-3.5" /> Visit Official Exhibition Portal &nearr;
              </a>
            </div>
          )}
        </div>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="relative aspect-16/9 w-full bg-white">
            <Image
              src={withBasePath(event.image)}
              alt={event.show}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          {event.body.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#d00000]" />
              <h3 className="text-base font-bold text-[#0056B3]">
                {isUpcoming ? "What You Will Experience at Our Booth" : "Exhibition Focus Areas"}
              </h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {event.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Outcomes (For past events) */}
        {event.outcomes && event.outcomes.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-emerald-50/50 p-6">
            <h3 className="text-base font-bold text-emerald-950">Exhibition Milestones &amp; Outcomes</h3>
            <ul className="mt-3 space-y-2">
              {event.outcomes.map((oc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-emerald-900">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>{oc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Showcased Instruments */}
        {event.showcasedProducts && event.showcasedProducts.length > 0 && (
          <div className="space-y-4 border-t border-slate-200 pt-6">
            <h3 className="text-base font-bold text-[#0056B3]">Showcased Instruments &amp; Demos</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {event.showcasedProducts.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-[#0056B3] hover:shadow-sm"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                    <Image
                      src={withBasePath(p.image)}
                      alt={p.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#0056B3] group-hover:text-[#d00000] transition truncate">
                      {p.name}
                    </h4>
                    <span className="text-[11px] text-slate-500">{p.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Booking or Follow-up form */}
      <div className="lg:col-span-4 space-y-6">
        <div className="sticky top-28 space-y-6">
          <NewsLeadForm
            itemTitle={event.show}
            itemType="event"
            eventVenue={`${event.hall}, ${event.booth} (${event.location})`}
          />

          {/* Location info */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Orbit Event Coordination
            </h4>
            <p className="mt-2 text-sm font-bold text-[#0056B3]">{event.venue}</p>
            <p className="mt-1 text-xs text-slate-600">{event.location}</p>
            <div className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-600 space-y-1">
              <p>
                <strong>Coordination Desk:</strong> +91 40 6721 6354
              </p>
              <p>
                <strong>Exhibition Email:</strong> events@orbitindia.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
