import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { TemperatureCurve } from "@/components/temperature-curve";
import { getAboutPageSchema } from "@/lib/schema";
import { branchOffices } from "@/data/site";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us · Helping Laboratories Find the Right Tools for Better Science",
  description:
    "Orbit Technologies Pvt. Ltd. — 35 years of complete solutions for coal, mineral, material, and environmental analysis. Manufacturer, distributor and pan-India service network from Hyderabad.",
};

const coreBeliefs = [
  {
    icon: Target,
    title: "The right instrument matters.",
    body: "Every application has its own requirements. Equipment should be chosen with the sample, method and purpose in mind.",
  },
  {
    icon: Users,
    title: "Technical support matters as much as technology.",
    body: "A laboratory needs more than a product catalogue. It needs people who can help with selection, installation, operation and service.",
  },
  {
    icon: HeartHandshake,
    title: "Good partnerships create better solutions.",
    body: "Combining our manufacturing with specialist international technologies lets us serve a wider range of laboratory needs.",
  },
  {
    icon: ShieldCheck,
    title: "Support continues after the sale.",
    body: "We remain available for maintenance, repairs, training and technical assistance long after delivery.",
  },
];

const milestones = [
  {
    year: "1995",
    title: "Orbit Technologies Established",
    badge: "Foundation",
    description:
      "Orbit Technologies was established in Hyderabad, focusing on specialized analytical instrumentation, setting up our central technical service hub to serve Indian research and quality testing laboratories.",
  },
  {
    year: "1998",
    title: "Orlab Instruments Founded",
    badge: "Manufacturing Scale",
    description:
      "Our group company Orlab Instruments began manufacturing water and soil testing kits and laboratory water-analysis instruments, establishing a 30,000 sq. ft. ISO-certified production facility.",
  },
  {
    year: "2014",
    title: "Sylab S.A.R.L., France Acquisition",
    badge: "Technology Heritage",
    description:
      "Orbit acquired Sylab S.A.R.L., France. Orbit now manufactures Carbon & Sulphur analysers, Ash Fusion analysers, Thermogravimetric analysers, and Pyrolysers in India with European engineering heritage.",
  },
  {
    year: "2023",
    title: "Parr Instrument Company’s #1 Dealer Worldwide",
    badge: "Global Milestone",
    description:
      "Parr named Orbit, its exclusive partner in India, its top dealer worldwide for new orders, reflecting deep customer trust and the widespread adoption of Parr calorimeters and reactors across Indian industries.",
  },
  {
    year: "2024",
    title: "Elite Thermal Systems Acquisition",
    badge: "Group Expansion",
    description:
      "Group company Sylab Scientific acquired Elite Thermal Systems Ltd., UK, adding precision laboratory, tube, split, and light industrial furnaces up to 1800°C to the group’s manufacturing portfolio.",
  },
];

const leadershipMembers = [
  {
    name: "Managing Director",
    role: "Managing Director · Orbit Technologies Pvt. Ltd.",
    bio: "Over three decades of visionary leadership in the scientific instrumentation sector. Guiding Orbit’s strategic direction, domestic manufacturing capabilities, and prestigious global partnerships to equip India's leading power, mining, and research laboratories.",
    focus: "Strategic Vision · Global Partnerships · Manufacturing Expansion",
  },
  {
    name: "Director",
    role: "Director · Technical & Application Operations",
    bio: "Heading Orbit's nationwide technical support, customer success, and application engineering teams. Dedicated to ensuring every laboratory receives tailored method guidance, rigorous commissioning, and rapid after-sales response.",
    focus: "Application Engineering · Service Excellence · Pan-India Support",
  },
];

const industriesList = [
  "Fuels and energy",
  "Minerals and materials",
  "Cement and steel",
  "Oil, gas and petrochemicals",
  "Chemical and pharmaceutical laboratories",
  "Research and education",
  "Food and agriculture",
  "Environmental and water testing",
];

const internationalPartners = [
  { name: "Parr Instrument Company, USA:", body: "Calorimeters, reactors and pressure systems (exclusive partner in India)." },
  { name: "NCS Testing Technology, Germany:", body: "Elemental analysers for inorganic materials." },
  { name: "NC Technologies, Italy:", body: "Dynamic flash CHNS/O elemental analysers." },
  { name: "Elemental Microanalysis, UK:", body: "Certified reference materials and consumables." },
  { name: "RB Automazione, Italy:", body: "Plastometers and dilatometers for coal & coke testing." },
];

const experienceFigures = [
  ["35+", "Years of experience", "Established in 1995"],
  ["7,000+", "Active customers", "Across Indian industries"],
  ["14", "Branch cities", "Pan-India sales & service"],
  ["Hyderabad", "Headquarters", "30,000 sq. ft. facility"],
  ["Global", "Partnerships", "USA, Germany, UK & Italy"],
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

const h2Cls = "text-[1.65rem] font-semibold leading-tight tracking-[-0.015em] sm:text-[2.1rem]";
const sectionPad = "py-14 sm:py-20 lg:py-[88px]";

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={getAboutPageSchema()} />
      {/* -----------------------------------------------------------------------
          1. HERO — split header: H1 and intro left; About Orbit artwork on a pale field bleeding right
      ------------------------------------------------------------------------ */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.38fr_1fr]">
          <div className="min-w-0 py-10 sm:py-12 lg:py-16 lg:pr-14">
            <Eyebrow>About Orbit</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.4rem] lg:text-[2.75rem]">
              Helping Laboratories Find the Right Tools for Better Science
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-lg">
              Scientific testing depends on the right instruments, reliable results and people who understand the work behind every measurement.
            </p>
          </div>
          <figure className="relative -mx-4 my-0 min-w-0 bg-[#f3f5f8] px-4 pb-6 pt-8 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-transparent lg:py-10 lg:pl-12 lg:pr-0">
            <Image
              src={withBasePath("/images/orbit/About-us-Banner-2026-1024x1024.jpg")}
              alt="Coal, laboratory research and petrochemical plant: the industries Orbit serves"
              width={1024}
              height={1024}
              priority
              sizes="(min-width: 1024px) 36vw, 90vw"
              className="mx-auto h-auto w-full max-w-[420px] mix-blend-multiply"
            />
            <figcaption className="mt-4 flex items-center gap-3">
              <Image
                src={withBasePath("/badge-35.jpg")}
                alt="35 years of service"
                width={72}
                height={48}
                style={{ width: "auto" }}
                className="h-12 w-auto rounded-sm mix-blend-multiply"
              />
              <span>
                <span className="block text-[13px] text-[var(--ink-3)]">Established 1995 · Hyderabad</span>
                <span className="block font-[family-name:var(--font-poppins)] text-lg font-semibold text-[var(--ink)]">Orbit Technologies</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Main Narrative Introduction — heading left, story right */}
      <section className={sectionPad}>
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Bringing Instruments, Expertise and People Together</h2>
          </div>
          <div className="min-w-0">
            <p className="text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              At Orbit Technologies, we bring these together. We manufacture and supply scientific and analytical instruments, represent specialist international manufacturers, and support laboratories with technical expertise and service.
            </p>
            <p className="mt-3.5 text-[15px] leading-relaxed text-[var(--ink-3)]">
              Based in Hyderabad, India, we work with laboratories in fuels and energy, minerals and materials, cement and steel, chemicals, research and education. Our role goes beyond supplying equipment. We help customers understand their testing requirements, select suitable instruments and keep their laboratories running.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
                Talk to Our Specialists <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="btn btn-outline min-h-[48px] px-6">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          2. WHAT WE BELIEVE — pale grey, heading left, four beliefs right
      ------------------------------------------------------------------------ */}
      <section className={`bg-[#f3f5f8] ${sectionPad}`}>
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>Our principles</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>What We Believe</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              The fundamental principles that guide how we select equipment, advise customers, and stand behind our work.
            </p>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-x-10 sm:grid-cols-2">
            {coreBeliefs.map((belief) => {
              const Icon = belief.icon;
              return (
                <div key={belief.title} className="min-w-0 border-t border-[#cfd6df] py-6">
                  <Icon className="h-6 w-6 text-[#0056B3]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-[var(--ink)]">{belief.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">{belief.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          3. THE PEOPLE BEHIND THE INSTRUMENTS
      ------------------------------------------------------------------------ */}
      <section className={sectionPad}>
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>The People Behind the Instruments</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              Our leadership, technical, sales and service teams work together to help customers choose suitable equipment, install it and get the best from their laboratories.
            </p>
          </div>

          {/* Leadership Profiles */}
          <div className="mt-10 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            {leadershipMembers.map((leader) => (
              <div key={leader.role} className="min-w-0 border-t-2 border-[var(--ink)] py-6">
                <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-[22px]">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#0056B3]">{leader.role}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-2)]">{leader.bio}</p>
              </div>
            ))}
          </div>

          {/* Team photo with caption below */}
          <figure className="mt-8">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md bg-[var(--soft)]">
              <Image
                src={withBasePath("/images/inner-banner.jpg")}
                alt="Orbit Technologies application and service engineering team at Hyderabad facility"
                fill
                sizes="(min-width: 1216px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 max-w-3xl">
              <p className="text-base font-medium leading-relaxed text-[var(--ink)]">
                From application guidance and product selection to installation and after-sales service, our teams work across functions to support laboratories throughout India.
              </p>
              <p className="mt-1 text-[13px] text-[var(--ink-3)]">
                Orbit Technical Applications, Calibration, and Service Engineering Division · Hyderabad Headquarters
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          4. OUR STORY & OUR JOURNEY — pale grey; story left, vertical timeline with large years right
      ------------------------------------------------------------------------ */}
      <section className={`bg-[#f3f5f8] ${sectionPad}`}>
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Since 1995</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Our Story</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-2)]">
              Orbit Technologies was incorporated in Hyderabad in 1995. Beginning with water and environmental analysis instruments, our scope expanded dynamically into coal, minerals, materials, and power generation as testing standards and statutory regulations evolved across India.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
              Over time, Orbit grew its capabilities across manufacturing, international partnerships, product supply and service, covering a wider range of applications in coal, minerals, materials and laboratory research.
            </p>
          </div>

          {/* Timeline Milestones: vertical line, large years */}
          <ol className="relative min-w-0 border-l border-[#cfd6df]">
            {milestones.map((m) => (
              <li key={m.year + m.title} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
                <span aria-hidden className="absolute -left-[6px] top-[0.9rem] h-[11px] w-[11px] rounded-full border-2 border-[#f3f5f8] bg-[#0056B3]" />
                <p className="font-[family-name:var(--font-poppins)] text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] tnum sm:text-[3.25rem]">
                  {m.year}
                </p>
                <p className="mt-3 font-[family-name:var(--font-poppins)] text-xs font-semibold uppercase tracking-[0.08em] text-[#0056B3]">{m.badge}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-[var(--ink)]">{m.title}</h3>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-2)]">{m.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          5. MANUFACTURING, GLOBAL TECHNOLOGY AND LOCAL SUPPORT — three pillar rows
      ------------------------------------------------------------------------ */}
      <section className={sectionPad}>
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow>Three pillars</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Manufacturing, Global Technology and Local Support</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              Three united pillars that enable Orbit to deliver complete analytical solutions from single laboratory instruments to turn-key research installations.
            </p>
          </div>

          <div className="mt-10 border-t-2 border-[var(--ink)]">
            {/* Pillar 1: Indian Manufacturing */}
            <div id="manufacturer" className="grid scroll-mt-28 grid-cols-1 gap-6 border-b border-[var(--line)] py-8 lg:grid-cols-[5rem_1fr_1.3fr] lg:gap-10 lg:py-10">
              <span className="font-[family-name:var(--font-poppins)] text-[2.5rem] font-semibold leading-none tracking-[-0.02em] text-[#0056B3] tnum">01</span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-[22px]">Indian Manufacturing</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
                  We manufacture scientific and analytical instruments for specialised laboratory applications:
                </p>
                <Link href="/analytical-instruments/" className="link-more mt-5 min-h-[44px] whitespace-normal lg:min-h-0">
                  Explore: Manufacturing and Analytical Instruments <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
              <div className="min-w-0">
                <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                  {["Carbon and sulphur analysers", "Ash fusion analysers", "Thermogravimetric & proximate analysers", "Pyrolysers"].map((item) => (
                    <li key={item} className="border-b border-[var(--line)] py-2.5 text-[15px] font-medium text-[var(--ink)]">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-3)]">
                  Through our group companies, we also offer sample preparation equipment, laboratory furnaces and water and soil testing instruments.
                </p>
              </div>
            </div>

            {/* Pillar 2: International Technology Partnerships */}
            <div id="distributor" className="grid scroll-mt-28 grid-cols-1 gap-6 border-b border-[var(--line)] py-8 lg:grid-cols-[5rem_1fr_1.3fr] lg:gap-10 lg:py-10">
              <span className="font-[family-name:var(--font-poppins)] text-[2.5rem] font-semibold leading-none tracking-[-0.02em] text-[#0056B3] tnum">02</span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-[22px]">International Partnerships</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
                  World-leading analytical technology represented exclusively or authoritatively across India:
                </p>
                <Link href="/#industries" className="link-more mt-5 min-h-[44px] whitespace-normal lg:min-h-0">
                  Explore: Our Principals and Partners <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
              <ul className="min-w-0">
                {internationalPartners.map((p) => (
                  <li key={p.name} className="grid grid-cols-1 gap-1 border-b border-[var(--line)] py-3 sm:grid-cols-[14rem_1fr] sm:gap-5">
                    <strong className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[var(--ink)]">{p.name}</strong>
                    <span className="text-sm leading-relaxed text-[var(--ink-2)]">{p.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Technical Service and Support */}
            <div className="grid grid-cols-1 gap-6 border-b border-[var(--line)] py-8 lg:grid-cols-[5rem_1fr_1.3fr] lg:gap-10 lg:py-10">
              <span className="font-[family-name:var(--font-poppins)] text-[2.5rem] font-semibold leading-none tracking-[-0.02em] text-[#0056B3] tnum">03</span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-[22px]">Technical Service &amp; Support</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
                  Complete lifecycle engineering to keep laboratories operating with verified measurement accuracy:
                </p>
                <Link href="/#services" className="link-more mt-5 min-h-[44px] whitespace-normal lg:min-h-0">
                  Explore: Services and Support <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
              <ul className="grid min-w-0 grid-cols-1 gap-x-8 sm:grid-cols-2">
                {[
                  "Instrument selection & application guidance",
                  "Installation and commissioning",
                  "Preventive maintenance programs",
                  "Calibration support and certification",
                  "Repairs and breakdown assistance",
                  "Oxygen bomb repair & hydrotesting (Parr)",
                  "Comprehensive user training",
                ].map((item) => (
                  <li key={item} className="border-b border-[var(--line)] py-2.5 text-[15px] text-[var(--ink-2)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          6. INDUSTRIES WE SERVE — pale grey
      ------------------------------------------------------------------------ */}
      <section className={`bg-[#f3f5f8] ${sectionPad}`}>
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <Eyebrow>Industries</Eyebrow>
              <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Industries We Serve</h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
                Supplying robust instruments for routine quality control, process optimization, statutory compliance, and scientific research.
              </p>
            </div>
            <Link href="/#industries" className="link-more min-h-[44px] lg:min-h-0">
              Explore: Industries We Serve <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {industriesList.map((ind, i) => (
              <li key={ind} className="flex min-w-0 items-baseline gap-3 border-t border-[#cfd6df] py-4">
                <span className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#0056B3] tnum">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-[family-name:var(--font-poppins)] text-base font-medium text-[var(--ink)]">{ind}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          7. EXPERIENCE YOU CAN BUILD ON — navy band: key figures, India map, branch cities
      ------------------------------------------------------------------------ */}
      <section className={`relative overflow-hidden bg-[#001733] text-white ${sectionPad}`}>
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 top-10 h-[140px] opacity-35" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div className="min-w-0">
              <Eyebrow dark>Pan-India service</Eyebrow>
              <h2 className={`mt-3 text-white ${h2Cls}`}>Experience You Can Build On</h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#c9d4e3]">
                Over three decades of institutional knowledge, pan-India infrastructure, and rigorous engineering excellence.
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 sm:grid-cols-3 sm:gap-x-8">
                {experienceFigures.map(([v, l, note]) => {
                  const isNumber = /\d/.test(v);
                  return (
                    <div key={l} className="flex min-w-0 flex-col-reverse border-t border-white/20 py-6">
                      <p className="mt-1 text-[13px] text-[#b7c4d6]">{note}</p>
                      <dt className="mt-2 text-[15px] font-medium text-white">{l}</dt>
                      <dd
                        className={`m-0 font-[family-name:var(--font-poppins)] font-semibold leading-none tracking-[-0.02em] tnum ${
                          isNumber ? "text-[2.4rem] sm:text-[3.5rem]" : "text-[1.35rem] sm:text-[1.9rem]"
                        }`}
                      >
                        {v}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
            <div className="min-w-0">
              <Image
                src={withBasePath("/images/orbit/India.png")}
                alt="Map of India showing Orbit's head office in Hyderabad and 14 branch cities"
                width={960}
                height={1110}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="mx-auto h-auto w-full max-w-[460px] lg:ml-auto lg:mr-0"
              />
            </div>
          </div>

          {/* Sales and Service Network */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/20 pt-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-white">14 Branch Cities Across India</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#c9d4e3]">
                Our resident engineers and regional branch offices provide swift on-site maintenance, calibration, installation, and spare parts delivery:
              </p>
            </div>
            <div className="min-w-0">
              <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-4 lg:grid-cols-5">
                {branchOffices.map((b) => (
                  <li key={b} className="border-b border-white/15 py-2.5 text-[15px] font-medium text-white">
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-[#b7c4d6]">
                <strong className="font-semibold text-white">Regional coverage:</strong> Delhi NCR, Uttar Pradesh, Maharashtra, Gujarat, West Bengal, Odisha, Chhattisgarh, Jharkhand, Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          8. LOOKING AHEAD
      ------------------------------------------------------------------------ */}
      <section className={sectionPad}>
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>Vision</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Looking Ahead</h2>
          </div>
          <div className="min-w-0 border-l-[3px] border-[#0056B3] pl-6 sm:pl-8">
            <p className="font-[family-name:var(--font-poppins)] text-lg leading-relaxed text-[var(--ink)] sm:text-xl">
              Scientific testing keeps developing, and laboratories need access to new technologies, more specialised equipment and dependable technical support. Orbit aims to keep building its Indian manufacturing, widen access to specialist international instruments and strengthen the technical support available to customers across the country.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-3)]">
              As Indian laboratories align with increasingly stringent global ISO and ASTM benchmarks, our vision remains resolute: to serve as the nation’s most dependable technical bridge—democratizing access to high-end instrumentation, sustaining local manufacturing precision, and supporting scientific research.
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          9. WHERE TO FIND US — pale grey
      ------------------------------------------------------------------------ */}
      <section className={`bg-[#f3f5f8] ${sectionPad}`}>
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Headquarters</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Where to Find Us</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              Orbit is headquartered in Hyderabad, Telangana, with branches supporting customers across India.
            </p>
          </div>

          {/* Headquarters */}
          <div className="min-w-0 rounded-md bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[var(--ink)]">Orbit Technologies Pvt. Ltd.</h3>
            <div className="mt-4 space-y-3 text-[15px] text-[var(--ink-2)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0056B3]" />
                <address className="not-italic leading-relaxed">
                  B-50, Industrial Estate, Sanath Nagar,<br />
                  Hyderabad – 500018, Telangana, India
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#0056B3]" />
                <a href="tel:+914067216354" className="font-semibold text-[var(--ink)] tnum hover:text-[#0056B3]">
                  +91 40 6721 6354
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#0056B3]" />
                <a href="mailto:orbit@orbitindia.com" className="font-semibold text-[#0056B3] hover:underline">
                  orbit@orbitindia.com
                </a>
              </div>
            </div>
            <Link href="/contact-us" className="btn btn-primary mt-6 min-h-[48px] w-full sm:w-auto">
              View Our Locations &amp; Offices <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          10. FINAL CALL TO ACTION
      ------------------------------------------------------------------------ */}
      <section className={sectionPad}>
        <div className="container-x grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Talk to an engineer</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Let’s Talk About Your Laboratory Requirements</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-2)] sm:text-base">
              Whether you are setting up a new laboratory, expanding your testing capabilities or looking for support with existing equipment, our team is ready to help. Tell us about your application, sample and testing requirements, and we will help you explore the options.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contact-us" className="btn btn-primary min-h-[48px] px-6">
              Contact Orbit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn btn-outline min-h-[48px] px-6">
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
