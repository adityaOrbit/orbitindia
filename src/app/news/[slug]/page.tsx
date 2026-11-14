import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { withBasePath } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { TemperatureCurve } from "@/components/temperature-curve";
import { getNewsOrEventSchema } from "@/lib/schema";
import {
  getNewsOrEventBySlug,
  getAllNewsAndEventSlugs,
  getAllNews,
  getAllEvents,
  type NewsArticle,
  type EventArticle,
  type RelatedProductRef,
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

const MONTHS_LONG = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

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

const h1Cls = "mt-4 max-w-4xl text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.6rem] lg:text-[3rem]";

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
    <div className="bg-white">
      <JsonLd data={getNewsOrEventSchema(item)} />
      {/* Breadcrumb row */}
      <nav aria-label="Breadcrumb" className="border-b border-[var(--line)]">
        <div className="container-x flex flex-wrap items-center gap-x-1.5 gap-y-1 py-2.5 text-[13px] text-[var(--ink-3)]">
          <Link href="/" className="hover:text-[#0056B3]">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[var(--ink-3)]" />
          <Link href="/news" className="text-[#0056B3] hover:underline">
            News &amp; Events
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[var(--ink-3)]" />
          <span className="max-w-[240px] truncate font-medium text-[var(--ink)] sm:max-w-md" aria-current="page">
            {isEvent ? (item as EventArticle).show : item.title}
          </span>
        </div>
      </nav>

      {isEvent ? <EventView event={item as EventArticle} /> : <NewsView article={item as NewsArticle} />}

      {/* Bottom recommendations */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <Eyebrow>Keep reading</Eyebrow>
          <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-[-0.015em] text-[var(--ink)] sm:text-[2.1rem]">
            More from Orbit Technologies
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {recentNews.slice(0, 2).map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="group flex min-w-0 flex-col justify-between overflow-hidden rounded-md border border-[var(--line)] transition-colors hover:border-[#0056B3]"
              >
                <div className="relative aspect-[16/9] bg-[#f3f5f8]">
                  <Image
                    src={withBasePath(n.image)}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-5 mix-blend-multiply"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[13px] text-[var(--ink-3)] tnum">{n.date}</p>
                  <h3 className="mt-1.5 line-clamp-2 text-base font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3]">
                    {n.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[var(--ink-3)]">{n.summary}</p>
                  <span className="mt-auto pt-4"><ArrowRight className="h-4 w-4 text-[#0056B3]" /></span>
                </div>
              </Link>
            ))}

            {otherEvents.slice(0, 1).map((e) => {
              const [y, m, d] = e.startDate.split("-");
              return (
                <Link
                  key={e.slug}
                  href={`/news/${e.slug}`}
                  className="group flex min-w-0 flex-col rounded-md border border-[var(--line)] bg-[#f3f5f8] p-5 transition-colors hover:border-[#0056B3] sm:p-6"
                >
                  <div className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold leading-tight text-[#0056B3] tnum">
                    <b className="block text-[3rem] leading-none tracking-[-0.02em] text-[var(--ink)] sm:text-[3.5rem]">{d}</b>
                    <span className="mt-1.5 block">
                      {MONTHS_LONG.at(Number(m) - 1)} {y}
                    </span>
                  </div>
                  <p className="mt-6 text-[13px] text-[var(--ink-3)]">
                    <span className="font-medium text-[#0056B3]">
                      {e.status === "upcoming" ? "Upcoming Expo" : "Past Expo"}
                    </span>
                    {" · "}
                    <span className="tnum">{e.date}</span>
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3]">
                    {e.show}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[var(--ink-3)]">{e.summary}</p>
                  <span className="mt-auto pt-4"><ArrowRight className="h-4 w-4 text-[#0056B3]" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct line — navy closing band */}
      {isEvent ? <EventContactBand event={item as EventArticle} /> : <NewsContactBand />}
    </div>
  );
}

// ==========================================
// SHARED ARTICLE PIECES
// ==========================================

const h2Class = "mt-12 text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-[1.5rem]";
const bodyClass = "text-base leading-[1.75] text-[var(--ink-2)] sm:text-[17px]";

function BackLink() {
  return (
    <Link
      href="/news"
      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[var(--ink-2)] hover:text-[#0056B3] lg:min-h-0"
    >
      <ArrowLeft className="h-4 w-4" /> Back to All News &amp; Events
    </Link>
  );
}

function Body({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className={`mt-8 space-y-5 ${bodyClass}`}>
      {paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </div>
  );
}

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className={`mt-4 list-disc space-y-2 pl-5 marker:text-[#0056B3] ${bodyClass}`}>
      {items.map((h, i) => (
        <li key={i} className="pl-1">
          {h}
        </li>
      ))}
    </ul>
  );
}

function ProductRefCards({ items }: { items: RelatedProductRef[] }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((p) => (
        <Link
          key={p.name}
          href={p.href}
          className="group flex min-w-0 items-center gap-3 rounded-md border border-[var(--line)] p-3 transition-colors hover:border-[#0056B3]"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-[var(--soft)]">
            <Image
              src={withBasePath(p.image)}
              alt={p.name}
              fill
              sizes="56px"
              className="object-contain p-1 mix-blend-multiply"
            />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-semibold text-[var(--ink)] group-hover:text-[#0056B3]">
              {p.name}
            </h3>
            <span className="text-[13px] text-[var(--ink-3)]">{p.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/** Lead form on the pale grey field, inside a white panel. */
function InquirySection({ children }: { children: React.ReactNode }) {
  return (
    <section id="inquiry" className="scroll-mt-16 bg-[#f3f5f8] py-14 sm:py-16 lg:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-[760px] rounded-md bg-white p-5 sm:p-8 lg:p-10">{children}</div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT: NEWS ARTICLE VIEW
// ==========================================

function NewsView({ article }: { article: NewsArticle }) {
  return (
    <>
      <article>
        <header className="container-x pb-8 pt-6 sm:pb-10">
          <BackLink />
          <div className="mt-6">
            <Eyebrow>{article.category}</Eyebrow>
            <h1 className={h1Cls}>{article.title}</h1>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-[var(--ink-2)] sm:text-lg">
              {article.subtitle}
            </p>
            <p className="mt-5 text-[13px] text-[var(--ink-3)]">
              <span className="tnum">{article.date}</span> · {article.readTime}
            </p>
          </div>
        </header>

        <figure className="container-x m-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#f3f5f8] sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src={withBasePath(article.image)}
              alt={article.title}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-contain p-6 mix-blend-multiply sm:p-10"
              priority
            />
          </div>
          {article.imageCaption && (
            <figcaption className="mt-2 text-[13px] text-[var(--ink-3)]">{article.imageCaption}</figcaption>
          )}
        </figure>

        <div className="container-x">
          <div className="mx-auto max-w-[720px] pb-14 pt-10 sm:pb-16">
            {/* Executive overview */}
            <div className="border-l-2 border-[#0056B3] pl-4">
              <p className="text-[13px] font-semibold text-[var(--ink-3)]">Executive Overview</p>
              <p className="mt-1 text-base font-medium leading-relaxed text-[var(--ink)] sm:text-[17px]">
                {article.summary}
              </p>
            </div>

            <Body paragraphs={article.body} />

            {article.highlights && article.highlights.length > 0 && (
              <>
                <h2 className={h2Class}>Key Technical Highlights</h2>
                <PlainList items={article.highlights} />
              </>
            )}

            {article.specifications && article.specifications.length > 0 && (
              <>
                <h2 className={h2Class}>Technical Specifications</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="data-table">
                    <tbody>
                      {article.specifications.map((spec, i) => (
                        <tr key={i}>
                          <th scope="row">{spec.label}</th>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {article.standards && article.standards.length > 0 && (
              <>
                <h2 className={h2Class}>Standard Test Methods &amp; Regulatory Compliance</h2>
                <PlainList items={article.standards} />
              </>
            )}

            {article.relatedProducts && article.relatedProducts.length > 0 && (
              <>
                <h2 className={h2Class}>Related Instruments &amp; Systems</h2>
                <ProductRefCards items={article.relatedProducts} />
              </>
            )}
          </div>
        </div>
      </article>

      {/* Inquiry form */}
      <InquirySection>
        <NewsLeadForm itemTitle={article.title} itemType="news" />
      </InquirySection>
    </>
  );
}

function NewsContactBand() {
  return (
    <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
      <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
      <div className="container-x relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
        <div>
          <Eyebrow dark>Direct Technical Line</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
            Orbit Hyderabad Central Office
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">
            B-50, Industrial Estate, Sanath Nagar, Hyderabad – 500018
          </p>
          <div className="mt-4 space-y-1 text-[15px] text-[#c9d4e3]">
            <p>
              <strong className="font-medium text-white">Tel:</strong> <span className="tnum">+91 40 6721 6354 / 6355</span>
            </p>
            <p>
              <strong className="font-medium text-white">Email:</strong> orbit@orbitindia.com
            </p>
            <p>
              <strong className="font-medium text-white">PAN-India:</strong> 15 regional branch service centers
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href="tel:+914067216354" className="btn min-h-[48px] bg-white px-6 text-[#001733] hover:bg-[#e6edf6]">
            <span className="tnum">+91 40 6721 6354</span>
          </a>
          <a
            href="mailto:orbit@orbitindia.com"
            className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
          >
            orbit@orbitindia.com
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT: EVENT VIEW
// ==========================================

/** Day numerals for the event span, e.g. "26–28", with month(s) and year. */
function eventDateParts(event: EventArticle) {
  const [sy, sm, sd] = event.startDate.split("-");
  const end = event.endDate ? event.endDate.split("-") : null;
  const startMonth = MONTHS_LONG.at(Number(sm) - 1);
  if (!end) return { days: sd, monthYear: `${startMonth} ${sy}` };
  const [ey, em, ed] = end;
  const endMonth = MONTHS_LONG.at(Number(em) - 1);
  return {
    days: `${sd}–${ed}`,
    monthYear: sm === em && sy === ey ? `${startMonth} ${sy}` : `${startMonth} – ${endMonth} ${ey}`,
  };
}

function EventView({ event }: { event: EventArticle }) {
  const isUpcoming = event.status === "upcoming";
  const { days, monthYear } = eventDateParts(event);

  return (
    <>
      <article>
        <header className="container-x pb-8 pt-6 sm:pb-10">
          <BackLink />
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14">
            <div className="min-w-0">
              <Eyebrow>{isUpcoming ? "Upcoming Exhibition" : "Completed Exhibition"}</Eyebrow>
              <h1 className={h1Cls}>{event.title}</h1>
              {event.subtitle && (
                <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-[var(--ink-2)] sm:text-lg">
                  {event.subtitle}
                </p>
              )}
            </div>
            <div className="border-t-2 border-[var(--ink)] pt-4 lg:min-w-[260px]">
              <p className="font-[family-name:var(--font-poppins)] text-[3.5rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] tnum sm:text-[4.5rem]">
                {days}
              </p>
              <p className="mt-2 font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[#0056B3] tnum">
                {monthYear}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-3)]">{event.location}</p>
            </div>
          </div>
        </header>

        <figure className="container-x m-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-[#f3f5f8] sm:aspect-[16/6]">
            <Image
              src={withBasePath(event.image)}
              alt={event.show}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </figure>

        <div className="container-x">
          <div className="mx-auto max-w-[720px] pb-14 pt-10 sm:pb-16">
            {/* Event facts */}
            <table className="data-table border-t border-[var(--line)]">
              <tbody>
                <tr>
                  <th scope="row">Dates</th>
                  <td className="tnum">{event.date}</td>
                </tr>
                <tr>
                  <th scope="row">Venue &amp; Location</th>
                  <td>{event.venue}</td>
                </tr>
                <tr>
                  <th scope="row">Stall &amp; Stand Location</th>
                  <td>
                    {event.hall} &bull; {event.booth}
                  </td>
                </tr>
              </tbody>
            </table>
            {event.href && (
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-more mt-3 min-h-[44px] lg:min-h-0"
              >
                Visit Official Exhibition Portal &nearr;
              </a>
            )}

            <Body paragraphs={event.body} />

            {event.highlights && event.highlights.length > 0 && (
              <>
                <h2 className={h2Class}>
                  {isUpcoming ? "What You Will Experience at Our Booth" : "Exhibition Focus Areas"}
                </h2>
                <PlainList items={event.highlights} />
              </>
            )}

            {event.outcomes && event.outcomes.length > 0 && (
              <>
                <h2 className={h2Class}>Exhibition Milestones &amp; Outcomes</h2>
                <PlainList items={event.outcomes} />
              </>
            )}

            {event.showcasedProducts && event.showcasedProducts.length > 0 && (
              <>
                <h2 className={h2Class}>Showcased Instruments &amp; Demos</h2>
                <ProductRefCards items={event.showcasedProducts} />
              </>
            )}
          </div>
        </div>
      </article>

      {/* Booking / follow-up form */}
      <InquirySection>
        <NewsLeadForm
          itemTitle={event.show}
          itemType="event"
          eventVenue={`${event.hall}, ${event.booth} (${event.location})`}
        />
      </InquirySection>
    </>
  );
}

function EventContactBand({ event }: { event: EventArticle }) {
  return (
    <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
      <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
      <div className="container-x relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
        <div>
          <Eyebrow dark>Orbit Event Coordination</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">{event.venue}</h2>
          <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">{event.location}</p>
          <div className="mt-4 space-y-1 text-[15px] text-[#c9d4e3]">
            <p>
              <strong className="font-medium text-white">Coordination Desk:</strong> <span className="tnum">+91 40 6721 6354</span>
            </p>
            <p>
              <strong className="font-medium text-white">Exhibition Email:</strong> events@orbitindia.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href="tel:+914067216354" className="btn min-h-[48px] bg-white px-6 text-[#001733] hover:bg-[#e6edf6]">
            <span className="tnum">+91 40 6721 6354</span>
          </a>
          <a
            href="mailto:events@orbitindia.com"
            className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
          >
            events@orbitindia.com
          </a>
        </div>
      </div>
    </section>
  );
}
