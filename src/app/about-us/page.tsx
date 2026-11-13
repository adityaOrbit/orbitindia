import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Factory,
  Globe2,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
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

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={getAboutPageSchema()} />
      {/* -----------------------------------------------------------------------
          1. HERO
      ------------------------------------------------------------------------ */}
      <PageHero
        eyebrow="About Orbit Technologies"
        title="Helping Laboratories Find the Right Tools for Better Science"
        subtitle="Scientific testing depends on the right instruments, reliable results and people who understand the work behind every measurement."
      />

      {/* Main Narrative Introduction */}
      <section className="container-x mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
            Bringing Instruments, Expertise and People Together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            At Orbit Technologies, we bring these together. We manufacture and supply scientific and analytical instruments, represent specialist international manufacturers, and support laboratories with technical expertise and service.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Based in Hyderabad, India, we work with laboratories in fuels and energy, minerals and materials, cement and steel, chemicals, research and education. Our role goes beyond supplying equipment. We help customers understand their testing requirements, select suitable instruments and keep their laboratories running.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact-us#quote" className="btn btn-accent">
              Talk to Our Specialists <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn btn-outline">
              Explore Our Products
            </Link>
          </div>
        </div>

        {/* Quick Highlights Box */}
        <div className="rounded-2xl border border-slate-200 bg-[#0056B3] p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3">
            <Image
              src={withBasePath("/badge-35.jpg")}
              alt="35 years of service"
              width={72}
              height={48}
              style={{ width: "auto" }}
              className="h-12 w-auto rounded-lg shadow-sm"
            />
            <div>
              <p className="text-xs font-medium text-slate-300">
                Established 1995 · Hyderabad
              </p>
              <h3 className="text-lg font-semibold text-white">Orbit Technologies</h3>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-center">
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-[#d00000]">35+</p>
              <p className="mt-1 text-[11px] font-medium text-slate-300">
                Years of service
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-white">7,000+</p>
              <p className="mt-1 text-[11px] font-medium text-slate-300">
                Customers served
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-white">14</p>
              <p className="mt-1 text-[11px] font-medium text-slate-300">
                Branch cities
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-[#d00000]">30,000</p>
              <p className="mt-1 text-[11px] font-medium text-slate-300">
                Sq. ft. facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          2. WHAT WE BELIEVE
      ------------------------------------------------------------------------ */}
      <section className="band mt-16 border-y border-slate-200 py-16">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
              What We Believe
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              The fundamental principles that guide how we select equipment, advise customers, and stand behind our work.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {coreBeliefs.map((belief) => {
              const Icon = belief.icon;
              return (
                <div
                  key={belief.title}
                  className="surface group flex flex-col justify-between p-6 transition-colors hover:border-[#0056B3]/40"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#feeceb] text-[#d00000] transition group-hover:bg-[#d00000] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-[#0056B3]">
                        {belief.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {belief.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          3. THE PEOPLE BEHIND THE INSTRUMENTS
      ------------------------------------------------------------------------ */}
      <section className="container-x mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
            The People Behind the Instruments
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Our leadership, technical, sales and service teams work together to help customers choose suitable equipment, install it and get the best from their laboratories.
          </p>
        </div>

        {/* Leadership Profiles */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leadershipMembers.map((leader) => (
            <div
              key={leader.role}
              className="surface group relative flex flex-col justify-between p-6 sm:p-8 transition-all hover:border-[#f6dcc4] hover:shadow-md"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#0056B3] sm:text-2xl">
                  {leader.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#d00000]">
                  {leader.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Banner with Genuine Photo */}
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={withBasePath("/images/inner-banner.jpg")}
              alt="Orbit Technologies application and service engineering team at Hyderabad facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <p className="text-sm sm:text-lg font-bold leading-tight">
                From application guidance and product selection to installation and after-sales service, our teams work across functions to support laboratories throughout India.
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Orbit Technical Applications, Calibration, and Service Engineering Division · Hyderabad Headquarters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          4. OUR STORY & OUR JOURNEY (Timeline)
      ------------------------------------------------------------------------ */}
      <section className="band mt-16 border-y border-slate-200 py-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Orbit Technologies was incorporated in Hyderabad in 1995. Beginning with water and environmental analysis instruments, our scope expanded dynamically into coal, minerals, materials, and power generation as testing standards and statutory regulations evolved across India.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Over time, Orbit grew its capabilities across manufacturing, international partnerships, product supply and service, covering a wider range of applications in coal, minerals, materials and laboratory research.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-12">
            <div className="relative border-l-2 border-[#d00000] pl-6 ml-3 sm:ml-6 space-y-10">
              {milestones.map((m) => (
                <div key={m.year + m.title} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d00000] text-white ring-4 ring-white shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                  </span>

                  <div className="surface p-6 transition hover:border-[#f6dcc4] hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#feeceb] px-3 py-0.5 text-xs font-semibold text-[#d00000]">
                        <Calendar className="h-3.5 w-3.5" /> {m.year}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-[#0056B3] sm:text-xl">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          5. MANUFACTURING, GLOBAL TECHNOLOGY AND LOCAL SUPPORT
      ------------------------------------------------------------------------ */}
      <section className="container-x mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
            Manufacturing, Global Technology and Local Support
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Three united pillars that enable Orbit to deliver complete analytical solutions from single laboratory instruments to turn-key research installations.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Pillar 1: Indian Manufacturing */}
          <div className="surface group flex flex-col justify-between p-6 sm:p-8 border-t-4 border-t-[#d00000]">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#feeceb] text-[#d00000]">
                <Factory className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#0056B3]">
                Indian Manufacturing
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                We manufacture scientific and analytical instruments for specialised laboratory applications:
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d00000]" />
                  Carbon and sulphur analysers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d00000]" />
                  Ash fusion analysers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d00000]" />
                  Thermogravimetric &amp; proximate analysers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d00000]" />
                  Pyrolysers
                </li>
              </ul>

              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Through our group companies, we also offer sample preparation equipment, laboratory furnaces and water and soil testing instruments.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4">
              <Link
                href="/analytical-instruments/"
                className="min-h-[44px] lg:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
              >
                Explore: Manufacturing and Analytical Instruments <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: International Technology Partnerships */}
          <div className="surface group flex flex-col justify-between p-6 sm:p-8 border-t-4 border-t-[#0056B3]">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#0056B3]">
                <Globe2 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#0056B3]">
                International Partnerships
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                World-leading analytical technology represented exclusively or authoritatively across India:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
                <li>
                  <strong className="text-[#0056B3]">Parr Instrument Company, USA:</strong> Calorimeters, reactors and pressure systems (exclusive partner in India).
                </li>
                <li>
                  <strong className="text-[#0056B3]">NCS Testing Technology, Germany:</strong> Elemental analysers for inorganic materials.
                </li>
                <li>
                  <strong className="text-[#0056B3]">NC Technologies, Italy:</strong> Dynamic flash CHNS/O elemental analysers.
                </li>
                <li>
                  <strong className="text-[#0056B3]">Elemental Microanalysis, UK:</strong> Certified reference materials and consumables.
                </li>
                <li>
                  <strong className="text-[#0056B3]">RB Automazione, Italy:</strong> Plastometers and dilatometers for coal &amp; coke testing.
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4">
              <Link
                href="/#industries"
                className="min-h-[44px] lg:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056B3] hover:text-[#d00000] transition hover:underline"
              >
                Explore: Our Principals and Partners <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Technical Service and Support */}
          <div className="surface group flex flex-col justify-between p-6 sm:p-8 border-t-4 border-t-emerald-600">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Wrench className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#0056B3]">
                Technical Service &amp; Support
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Complete lifecycle engineering to keep laboratories operating with verified measurement accuracy:
              </p>

              <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Instrument selection &amp; application guidance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Installation and commissioning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Preventive maintenance programs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Calibration support and certification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Repairs and breakdown assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Oxygen bomb repair &amp; hydrotesting (Parr)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Comprehensive user training
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4">
              <Link
                href="/#services"
                className="min-h-[44px] lg:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
              >
                Explore: Services and Support <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          6. INDUSTRIES WE SERVE
      ------------------------------------------------------------------------ */}
      <section className="band mt-16 border-y border-slate-200 py-16">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
                Industries We Serve
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Supplying robust instruments for routine quality control, process optimization, statutory compliance, and scientific research.
              </p>
            </div>
            <Link href="/#industries" className="btn btn-accent shrink-0">
              Explore: Industries We Serve <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industriesList.map((ind) => (
              <div
                key={ind}
                className="surface flex items-center gap-3 p-4 transition hover:border-[#f6dcc4] hover:shadow-xs"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#d00000]" />
                <span className="text-sm font-bold text-[#0056B3]">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          7. EXPERIENCE YOU CAN BUILD ON (Credibility Metrics)
      ------------------------------------------------------------------------ */}
      <section className="container-x mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
            Experience You Can Build On
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Over three decades of institutional knowledge, pan-India infrastructure, and rigorous engineering excellence.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="surface p-5 text-center">
            <p className="text-3xl font-semibold tabular-nums text-[#d00000]">35+</p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Years of experience
            </p>
            <p className="mt-2 text-xs text-slate-600">Established in 1995</p>
          </div>

          <div className="surface p-5 text-center">
            <p className="text-3xl font-semibold tabular-nums text-[#0056B3]">7,000+</p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Active customers
            </p>
            <p className="mt-2 text-xs text-slate-600">Across Indian industries</p>
          </div>

          <div className="surface p-5 text-center">
            <p className="text-3xl font-semibold tabular-nums text-[#0056B3]">14</p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Branch cities
            </p>
            <p className="mt-2 text-xs text-slate-600">Pan-India sales &amp; service</p>
          </div>

          <div className="surface p-5 text-center">
            <p className="text-3xl font-semibold text-[#d00000]">Hyderabad</p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Headquarters
            </p>
            <p className="mt-2 text-xs text-slate-600">30,000 sq. ft. facility</p>
          </div>

          <div className="surface p-5 text-center">
            <p className="text-3xl font-semibold text-[#0056B3]">Global</p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Partnerships
            </p>
            <p className="mt-2 text-xs text-slate-600">USA, Germany, UK &amp; Italy</p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          8. LOOKING AHEAD
      ------------------------------------------------------------------------ */}
      <section className="container-x mt-16">
        <div className="rounded-2xl border border-slate-200 bg-[#001c3d] p-8 sm:p-12 text-white">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Looking Ahead
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Scientific testing keeps developing, and laboratories need access to new technologies, more specialised equipment and dependable technical support. Orbit aims to keep building its Indian manufacturing, widen access to specialist international instruments and strengthen the technical support available to customers across the country.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              As Indian laboratories align with increasingly stringent global ISO and ASTM benchmarks, our vision remains resolute: to serve as the nation’s most dependable technical bridge—democratizing access to high-end instrumentation, sustaining local manufacturing precision, and supporting scientific research.
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          9. WHERE TO FIND US
      ------------------------------------------------------------------------ */}
      <section className="band mt-16 border-y border-slate-200 py-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
              Where to Find Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Orbit is headquartered in Hyderabad, Telangana, with branches supporting customers across India.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            {/* Headquarters Card */}
            <div className="surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#0056B3]">
                Orbit Technologies Pvt. Ltd.
              </h3>

              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#d00000]" />
                  <address className="not-italic leading-relaxed">
                    B-50, Industrial Estate, Sanath Nagar,<br />
                    Hyderabad – 500018, Telangana, India
                  </address>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#d00000]" />
                  <a href="tel:+914067216354" className="font-semibold hover:text-[#d00000] transition">
                    +91 40 6721 6354
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#d00000]" />
                  <a href="mailto:orbit@orbitindia.com" className="font-semibold text-[#d00000] hover:underline">
                    orbit@orbitindia.com
                  </a>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <Link href="/contact-us" className="btn btn-accent text-xs sm:text-sm w-full justify-center">
                  View Our Locations &amp; Offices <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Sales and Service Network */}
            <div className="surface p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#0056B3]">
                  14 Branch Cities Across India
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our resident engineers and regional branch offices provide swift on-site maintenance, calibration, installation, and spare parts delivery:
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {branchOffices.map((b) => (
                    <span
                      key={b}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-[#0056B3] shadow-2xs hover:border-[#f6dcc4] hover:bg-[#fffbf5]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                <strong className="text-[#0056B3]">Regional coverage:</strong> Delhi NCR, Uttar Pradesh, Maharashtra, Gujarat, West Bengal, Odisha, Chhattisgarh, Jharkhand, Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          10. FINAL CALL TO ACTION
      ------------------------------------------------------------------------ */}
      <section className="container-x mt-16 mb-20">
        <div className="rounded-3xl border border-slate-200 bg-[#0056B3] p-8 sm:p-14 text-center text-white">
          <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl">
            Let’s Talk About Your Laboratory Requirements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Whether you are setting up a new laboratory, expanding your testing capabilities or looking for support with existing equipment, our team is ready to help. Tell us about your application, sample and testing requirements, and we will help you explore the options.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact-us" className="btn btn-accent !px-7 !py-3.5 text-sm sm:text-base font-bold">
              Contact Orbit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20 !px-7 !py-3.5 text-sm sm:text-base font-bold"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
