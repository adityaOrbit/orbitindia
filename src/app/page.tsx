import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { HomeFinder } from "@/components/home-finder";
import { TemperatureCurve } from "@/components/temperature-curve";
import { HomeClientsSection } from "@/components/home-clients-section";
import { partners, site } from "@/data/site";
import { getAllEvents } from "@/data/news";
import { withBasePath } from "@/lib/utils";

/** Product groups (browse links under the finder) */
const productCategoryGrid = [
  { category: "Analytical Instruments", href: "/analytical-instruments/" },
  { category: "Reactors and Pressure Systems", href: "/reactors/" },
  { category: "Sample Preparation", href: "/milling-pulverising/" },
  { category: "Furnaces and Heating Systems", href: "/furnace-heating-systems/" },
  { category: "Gas Generators", href: "/gas-generators/" },
  { category: "Balances and Weighing", href: "/precision-balances/" },
  { category: "Labware and Accessories", href: "/crms-srms-laboratory-accessories/" },
];

/** Most requested instruments: one deciding number each, taken from the product data */
const featuredLarge = [
  {
    slug: "7400-automatic-isoperibol-calorimeter",
    name: "7400 Automatic Isoperibol Calorimeter",
    meta: "Parr Instrument Company · Bomb calorimeter",
    image: "/images/orbit/Parr_7400_open_web.jpg",
    value: "1 min",
    unit: "operator time per test",
    note: "6–7 tests per hour · 0.1% precision class",
  },
  {
    slug: "tga-3000-thermogravimetric-analyzer",
    name: "TGA 3000 Thermogravimetric Analyser",
    meta: "Thermogravimetric proximate analyser",
    image: "/images/products/tga-3000.jpg",
    value: "1100 °C",
    unit: "furnace, from ambient",
    note: "0.1 mg integrated balance",
  },
];

const featuredSmall = [
  { slug: "ash-fusion-analyzer-if2000g-hdc", name: "IF2000G-HDC", meta: "Sylab · Ash fusion", image: "/images/orbit/IF2000G.jpg", value: "6", unit: "samples per run" },
  { slug: "csbox-hfa-cs-analyzer-bkp", name: "CSBox HFA C/S", meta: "Carbon & sulfur", image: "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg", value: "20–60 s", unit: "per analysis" },
  { slug: "series-4560-100-600-ml-mini-reactor-systems", name: "4560 Mini Reactor", meta: "Parr · Stirred reactor", image: "/images/orbit/Series-4560-100-600ml-mini-reactor.jpg", value: "200 bar", unit: "100–600 mL" },
  { slug: "6100-automatic-compensated-jacket-bomb-calorimeter", name: "6100 Compensated Jacket", meta: "Parr · Bomb calorimeter", image: "/images/orbit/images-4.jpeg", value: "4–8", unit: "tests per hour" },
];

const industrySolutions = [
  {
    id: "fuels-energy",
    title: "Fuels and Energy",
    focus: "Coal, coke, liquid fuels, biomass and alternative fuels.",
    href: "/coal-and-coke-testing-instruments/",
    image: "/images/industries/fuels-energy.jpg",
    instruments: ["Bomb Calorimeters", "Proximate Analyzers", "Ash Fusion Analyzers", "Carbon & Sulfur Analyzers"],
  },
  {
    id: "cement-steel",
    title: "Cement and Steel",
    focus: "Cement, steel, iron and alloy testing laboratories.",
    href: "/products?industry=cement-steel",
    image: "/images/industries/cement-steel.jpg",
    instruments: ["Carbon & Sulfur", "ONH Analyzers", "Loss on Ignition (LOI)", "Certified Standards"],
  },
  {
    id: "minerals-materials",
    title: "Minerals and Materials",
    focus: "Minerals, ores, ceramics and polymers.",
    href: "/products?industry=minerals-materials",
    image: "/images/industries/minerals-materials.jpg",
    instruments: ["Elemental Analyzers", "Pulverisers & Sieves", "XRF Sample Prep", "Reference Materials"],
  },
  {
    id: "chemical-pharmaceutical",
    title: "Chemical and Pharmaceutical",
    focus: "Reactions, hydrogenation, digestion and elemental analysis.",
    href: "/products?industry=chemical-pharmaceutical",
    image: "/images/industries/chemical-pharmaceutical.jpg",
    instruments: ["Hydrogenation Apparatus", "CHNS/O Analyzers", "Glass Reactors", "Precision Balances"],
  },
];

const moreIndustries = [
  { title: "Oil, Gas and Petrochemicals", href: "/reactors/" },
  { title: "Research and Education", href: "/products?industry=research-education" },
  { title: "Food and Agriculture", href: "/products?industry=food-agriculture" },
  { title: "Environmental and Water Testing", href: "/about-us#manufacturer" },
];

const latestArticles = [
  { tag: "Technical article", title: "Understanding GCV in Coal Testing", slug: "bomb-calorimetry-gcv", image: "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg" },
  { tag: "Technical article", title: "Proximate Analysis of Coal", slug: "proximate-analysis-of-coal", image: "/images/products/tga-3000.jpg" },
  { tag: "Guide", title: "How to Choose a Bomb Calorimeter", slug: "parr-7400-vs-6400-calorimeter-comparison", image: "/images/orbit/PARR-7400-1.jpg" },
  { tag: "Guide", title: "Understanding Ash Fusion Temperature", slug: "ash-fusibility-determination", image: "/images/orbit/IF2000G.jpg" },
];

const proofStats = [
  ["35+", "Years of service"],
  ["7,000+", "Active installations"],
  ["14", "Branch cities"],
  ["30,000", "Sq. ft. facility"],
];

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

export default function HomePage() {
  const events = getAllEvents()
    .slice()
    .sort((a, b) => b.startDate.localeCompare(a.startDate))
    .slice(0, 2);
  const leadEvent = events[0];

  return (
    <div>
      {/* 1. HERO — navy text field, light product field */}
      <section className="relative grid bg-[#001733] lg:min-h-[560px] lg:grid-cols-[1.2fr_1fr]">
        <div className="relative overflow-hidden px-4 pb-20 pt-10 text-white sm:px-6 sm:pb-28 sm:pt-14 lg:pb-36 lg:pl-[max(2rem,calc((100vw-76rem)/2+2rem))] lg:pr-14 lg:pt-[72px]">
          <Eyebrow dark>Exclusive Parr partner in India for 35+ years</Eyebrow>
          <h1 className="mt-5 max-w-[15em] text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.6rem] xl:text-[2.9rem]">
            Scientific &amp; analytical instruments for laboratories and research labs in India
          </h1>
          <p className="mt-5 max-w-[32em] text-base leading-relaxed text-[#c9d4e3] sm:text-lg">
            We manufacture, supply and service analytical instruments, high-pressure reactors, elemental analyzers, and laboratory equipment across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Request a Quote
            </Link>
            <Link href="/instrument-finder/" className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white">
              Find the Right Instrument
            </Link>
          </div>
          <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-4 h-16 opacity-50 sm:bottom-16 sm:h-20 lg:bottom-[84px] lg:h-[120px]" />
        </div>
        {/* Product spotlight: white light centre fading to blue-grey, a soft floor shadow, image as large as the panel allows */}
        <figure className="relative m-0 flex h-[340px] items-end justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_45%,#ffffff_0%,#eef2f7_45%,#d5dde8_100%)] sm:h-[460px] lg:h-auto">
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-[74px] left-1/2 h-8 w-[62%] -translate-x-1/2 rounded-[50%] bg-[#001733]/35 blur-xl lg:bottom-[86px] lg:h-10"
          />
          <Image
            src={withBasePath("/images/orbit/Parr_7400_open_web.jpg")}
            alt="Parr 7400 Automatic Isoperibol Calorimeter"
            width={1024}
            height={1331}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="relative mb-[80px] h-[80%] w-auto max-w-[94%] object-contain mix-blend-multiply lg:mb-[92px] lg:h-[84%]"
          />
        </figure>
      </section>

      {/* 2. INSTRUMENT FINDER — sits on the hero's bottom edge */}
      <div className="container-x relative z-10 -mt-16 lg:-mt-[72px]">
        <HomeFinder browse={productCategoryGrid.map((c) => ({ label: c.category, href: c.href }))} />
      </div>

      {/* 3. MOST REQUESTED INSTRUMENTS — 2 large + 4 small */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Instruments</Eyebrow>
              <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Instruments for testing, analysis and research</h2>
            </div>
            <Link href="/products" className="link-more min-h-[44px] lg:min-h-0">
              View full catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {featuredLarge.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}/`}
                className="group col-span-2 flex flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3] sm:flex-row"
              >
                <div className="relative aspect-[4/3] bg-[#f3f5f8] sm:aspect-[4/5] sm:w-[44%] sm:shrink-0">
                  <Image src={withBasePath(p.image)} alt="" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-contain p-6 mix-blend-multiply" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7">
                  <span className="text-[13px] text-[var(--ink-3)]">{p.meta}</span>
                  <h3 className="mt-1 text-xl font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3] sm:text-[22px]">{p.name}</h3>
                  <div className="mt-auto pt-6 font-[family-name:var(--font-poppins)] text-[2.75rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum sm:text-[3.5rem]">
                    {p.value}
                  </div>
                  <span className="mt-2.5 text-sm text-[var(--ink-3)]">{p.unit}</span>
                  <span className="mt-1.5 text-[13px] text-[var(--ink-3)]">{p.note}</span>
                </div>
              </Link>
            ))}
            {featuredSmall.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}/`}
                className="group flex flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3]"
              >
                <div className="relative aspect-[4/3] bg-[#f3f5f8]">
                  <Image src={withBasePath(p.image)} alt="" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-contain p-5 mix-blend-multiply" />
                </div>
                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                  <span className="text-[13px] text-[var(--ink-3)]">{p.meta}</span>
                  <h3 className="mt-0.5 text-[15px] font-semibold text-[var(--ink)] group-hover:text-[#0056B3] sm:text-[17px]">{p.name}</h3>
                  <div className="mt-auto pt-3 font-[family-name:var(--font-poppins)] text-[1.6rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum sm:text-[2.1rem]">
                    {p.value}{" "}
                    <span className="ml-1 font-[family-name:var(--font-roboto)] text-[13px] font-normal tracking-normal text-[var(--ink-3)] sm:text-sm">
                      {p.unit}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ORBIT STORY — pale grey split */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-[72px]">
          <figure className="m-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white">
              <Image
                src={withBasePath("/images/orbit/tga-3000.jpg")}
                alt="Orlab TGA 3000 thermogravimetric proximate analyser"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain p-10 mix-blend-multiply"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-[var(--ink-3)]">Orlab TGA 3000 · Orlab Manufacturing</figcaption>
          </figure>
          <div>
            <Eyebrow>About Orbit</Eyebrow>
            <h2 className={`mb-5 mt-3 text-[var(--ink)] ${h2Cls}`}>Indian manufacturing, global representation, pan-India support</h2>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              Orbit Technologies Pvt. Ltd., based in Hyderabad, manufactures, distributes and services scientific instruments across India. We combine Indian manufacturing, international partnerships and local technical support.
            </p>
            <p className="mt-3.5 text-base leading-relaxed text-[var(--ink-2)]">
              From our centrally located headquarters in Hyderabad, we support over 7,000 laboratories across power, mining, steel, cement, petroleum, chemicals, food, and academic research institutions with rapid spares availability and skilled application engineers.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about-us" className="btn btn-primary min-h-[48px] px-6">
                Read the Orbit Story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about-us#distributor" className="btn btn-outline min-h-[48px] px-6">
                Our Global Partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF — navy band with the India service map */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-20 lg:py-[88px]">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 top-10 h-[140px] opacity-35" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <Eyebrow dark>Pan-India service</Eyebrow>
            <h2 className={`mb-9 mt-3 max-w-[14em] text-white ${h2Cls}`}>Supplied, installed and serviced from 14 cities</h2>
            <dl className="grid grid-cols-2 border-t border-white/20">
              {proofStats.map(([value, label], i) => (
                <div
                  key={label}
                  className={`flex flex-col-reverse border-b border-white/20 py-6 ${i % 2 === 0 ? "border-r pr-5" : "pl-5 sm:pl-7"}`}
                >
                  <dt className="mt-2 text-[15px] text-[#b7c4d6]">{label}</dt>
                  <dd className="m-0 font-[family-name:var(--font-poppins)] text-[2.4rem] font-semibold leading-none tracking-[-0.02em] tnum sm:text-[3.5rem]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 text-[15px] leading-relaxed text-[#c9d4e3]">
              {partners
                .filter((p) => !p.name.startsWith("Elemental") && !p.name.startsWith("Linn"))
                .map((p, i) => (
                  <span key={p.name}>
                    {i > 0 && " · "}
                    {i === 0 ? <b className="font-medium text-white">{p.name}</b> : p.name} ({p.country})
                  </span>
                ))}
            </p>
          </div>
          <div>
            <Image
              src={withBasePath("/images/orbit/India.png")}
              alt="Map of India showing Orbit's head office in Hyderabad and 14 branch cities"
              width={960}
              height={1110}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="ml-auto h-auto w-full max-w-[520px]"
            />
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES — 4 photo cards + text links */}
      <section id="industries" className="scroll-mt-28 py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="mb-9 max-w-3xl">
            <Eyebrow>Industries</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Laboratory equipment for your industry</h2>
            <p className="mt-2.5 text-base leading-relaxed text-[var(--ink-3)]">
              Orbit supplies analytical instruments and laboratory systems for routine quality control, process monitoring, product development and research.
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {industrySolutions.map((ind) => (
              <Link key={ind.id} href={ind.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#f3f5f8]">
                  <Image
                    src={withBasePath(ind.image)}
                    alt={`${ind.title} solutions`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mb-1.5 mt-4 text-lg font-semibold text-[var(--ink)] group-hover:text-[#0056B3]">{ind.title}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--ink-3)]">{ind.focus}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-2)]">{ind.instruments.join(" · ")}</p>
              </Link>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-1 border-t border-[var(--line)] pt-6 text-[15px]">
            <span className="text-[var(--ink-3)]">Also:</span>
            {moreIndustries.map((m) => (
              <Link key={m.title} href={m.href} className="inline-flex min-h-[44px] items-center font-medium text-[var(--ink)] hover:text-[#0056B3] lg:min-h-0">
                {m.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEWS + KNOWLEDGE */}
      <section className="bg-[#f3f5f8] py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <Eyebrow>Events and technical resources</Eyebrow>
          <h2 className={`mb-9 mt-3 text-[var(--ink)] ${h2Cls}`}>Stay up to date</h2>
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
            <div>
              <h3 className="mb-1.5 flex items-baseline justify-between border-b-2 border-[var(--ink)] pb-3.5 text-xl font-semibold text-[var(--ink)]">
                News and Events
                <Link href="/news" className="link-more text-[15px]">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </h3>
              {leadEvent && (
                <Link href={`/news/${leadEvent.slug}/`} className="mt-4 block">
                  <div className="relative aspect-[16/6] overflow-hidden rounded-md bg-white">
                    <Image src={withBasePath(leadEvent.image)} alt={leadEvent.show} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                  </div>
                </Link>
              )}
              {events.map((e) => {
                const [y, m, d] = e.startDate.split("-");
                return (
                  <Link
                    key={e.slug}
                    href={`/news/${e.slug}/`}
                    className="group grid grid-cols-[72px_1fr] gap-4 border-b border-[var(--line)] py-4 sm:grid-cols-[96px_1fr] sm:gap-5"
                  >
                    <div className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold leading-tight text-[#0056B3] tnum">
                      <b className="block text-[1.6rem] tracking-[-0.02em] text-[var(--ink)] sm:text-[1.9rem]">{d}</b>
                      {MONTHS.at(Number(m) - 1)} {y}
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-poppins)] text-base font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3]">
                        {e.show}
                      </h4>
                      <p className="mt-1 text-sm text-[var(--ink-3)]">
                        {e.location} · {e.date}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div>
              <h3 className="mb-1.5 flex items-baseline justify-between border-b-2 border-[var(--ink)] pb-3.5 text-xl font-semibold text-[var(--ink)]">
                Latest from the Orbit
                <Link href="/knowledge-hub/" className="link-more text-[15px]">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </h3>
              {latestArticles.map((a) => (
                <Link key={a.slug} href={`/knowledge-hub/${a.slug}/`} className="group grid grid-cols-[88px_1fr] items-center gap-4 border-b border-[var(--line)] py-4">
                  <div className="relative h-[70px] w-[88px] overflow-hidden rounded-sm bg-white">
                    <Image src={withBasePath(a.image)} alt="" fill sizes="88px" className="object-contain p-1.5 mix-blend-multiply" />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.06em] text-[#0056B3]">{a.tag}</span>
                    <h4 className="font-[family-name:var(--font-poppins)] text-base font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3]">
                      {a.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENTS */}
      <HomeClientsSection />

      {/* 9. CONTACT */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Talk to an engineer</Eyebrow>
            <h2 className={`mb-4 mt-3 text-[var(--ink)] ${h2Cls}`}>Ready to equip or upgrade your laboratory?</h2>
            <p className="text-base leading-relaxed text-[var(--ink-2)]">
              Speak directly with Orbit’s senior application engineering team to discuss your testing parameters, sample matrices, ASTM / ISO test method compliance, or custom instrument configurations.
            </p>
          </div>
          <div className="rounded-md border border-[var(--line)] p-6 sm:p-7">
            <p className="text-sm text-[var(--ink-3)]">Technical sales</p>
            <a
              href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
              className="mt-1 flex items-center gap-3 font-[family-name:var(--font-poppins)] text-[1.35rem] font-semibold text-[var(--ink)] tnum hover:text-[#0056B3]"
            >
              <Phone className="h-5 w-5 text-[#0056B3]" /> {site.phones.sales1}
            </a>
            <div className="mt-4 grid gap-2 border-t border-[var(--line)] pt-4 text-[15px]">
              <a href="tel:+914067216354" className="flex items-center gap-3 text-[var(--ink-2)] hover:text-[#0056B3]">
                <Phone className="h-4 w-4 text-[var(--ink-3)]" /> Direct line: <span className="tnum">+91 40 6721 6354</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-[var(--ink-2)] hover:text-[#0056B3]">
                <Mail className="h-4 w-4 text-[var(--ink-3)]" /> {site.email}
              </a>
            </div>
            <Link href="/contact-us" className="btn btn-primary mt-6 min-h-[48px] w-full">
              Contact Our Specialists <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
