import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { HeroCarousel } from "@/components/hero-carousel";
import { PartnerSection } from "@/components/partner-section";
import { SupportServiceSection } from "@/components/support-service-section";
import { InstrumentFinder } from "@/components/instrument-finder";
import { EventsAndKnowledge } from "@/components/events-and-knowledge";
import { HomeEnquiryForm } from "@/components/home-enquiry-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { IndustryIcon } from "@/components/icons";
import { withBasePath } from "@/lib/utils";

/** Industry photography matching available assets */
const industryPhotos: Record<string, string> = {
  "fuels-energy": "/images/industries/fuels-energy.jpg",
  "cement-steel": "/images/industries/cement-steel.jpg",
  "minerals-materials": "/images/industries/minerals-materials.jpg",
  "oil-gas-petrochemicals": "/images/industries/chemical-pharmaceutical.jpg",
  "chemical-pharmaceutical": "/images/industries/chemical-pharmaceutical.jpg",
  "research-education": "/images/industries/research-education.jpg",
  "food-agriculture": "/images/industries/food-agriculture.jpg",
  "environmental-testing": "/images/industries/minerals-materials.jpg",
};


/** Dynamic Hero Carousel slides featuring core instrument divisions */
const heroCarouselSlides = [
  {
    title: "Precision Bomb Calorimetry",
    tagline: "True isoperibol jacket regulation with 0.0001°C precision thermometry",
    badge: "Parr Exclusive Partner",
    image: "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
    model: "Parr 7200 / 6400 Series",
    href: "/calorimeter/bomb-calorimeters/",
  },
  {
    title: "High Pressure & Temperature Reactors",
    tagline: "Custom stirred & non-stirred autoclaves rated up to 350 bar & 500°C",
    badge: "Parr #1 India Dealer",
    image: "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
    model: "Parr Series 4520 / 4540",
    href: "/reactors/",
  },
  {
    title: "Thermogravimetric Proximate Analyzers",
    tagline: "Automated moisture, volatile matter, ash, and fixed carbon in one sequence",
    badge: "Orlab Manufacturing",
    image: "/images/orbit/tga-3000.jpg",
    model: "Orlab TGA 3000",
    href: "/tga-proximate-analyzers/",
  },
  {
    title: "Elemental Carbon & Sulfur Analyzers",
    tagline: "High-frequency induction combustion for steel, metals, and minerals",
    badge: "NCS Germany Partner",
    image: "/images/orbit/Carbon-and-Sulfur-Analyzers.png",
    model: "CSBox & CS Analyzers",
    href: "/elemental-analyzers/",
  },
  {
    title: "High-Temperature Laboratory Furnaces",
    tagline: "Chamber, tube, ashing, and custom sintering furnaces up to 1800°C",
    badge: "Elite Thermal Systems (UK)",
    image: "/images/orbit/high-temperature-chamber-furnaces.jpg",
    model: "Elite High-Temp Furnaces",
    href: "/furnace-heating-systems/",
  },
];

/** Trust items formatted like the reference screenshot floating bar */
const trustBarItems = [
  {
    title: "35+ years",
    subtitle: "in analytical & scientific instruments",
  },
  {
    title: "7,000+ customers",
    subtitle: "delivered and supported across India",
  },
  {
    title: "Pan-India Service",
    subtitle: "14 branch cities & service network",
  },
];

/** 8 Product Categories for the grid layout with real images, title, description and button */
const productCategoryGrid = [
  {
    category: "Analytical Instruments",
    image: "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
    whatYouWillFind:
      "Calorimeters, thermogravimetric analyzers, ash fusion analyzers, elemental analyzers, coal and coke testing instruments.",
    linkText: "Explore Analytical Instruments",
    href: "/analytical-instruments/",
    badge: "Parr & Orbit Systems",
  },
  {
    category: "Reactors and Pressure Systems",
    image: "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
    whatYouWillFind:
      "High-pressure reactors, glass reactors, hydrogenation apparatus, custom systems, digestion vessels.",
    linkText: "Explore Reactors",
    href: "/reactors/",
    badge: "Parr High Pressure",
  },
  {
    category: "Sample Preparation",
    image: "/images/orbit/Manual-Pellet-Press.jpg",
    whatYouWillFind:
      "Crushers, mills, pulverizers, sieving, pellet presses for metallurgical and mineral preparation.",
    linkText: "Explore Sample Preparation",
    href: "/milling-pulverising/",
    badge: "Milling & Sieving",
  },
  {
    category: "Furnaces and Heating Systems",
    image: "/images/orbit/high-temperature-chamber-furnaces.jpg",
    whatYouWillFind:
      "Laboratory, high-temperature and industrial furnaces, induction and microwave heating.",
    linkText: "Explore Furnaces",
    href: "/furnace-heating-systems/",
    badge: "Up to 1800°C",
  },
  {
    category: "Gas Generators",
    image: "/images/orbit/Air-Compressor-1.jpg",
    whatYouWillFind:
      "Hydrogen, nitrogen and zero-air generators, dedicated laboratory air compressors.",
    linkText: "Explore Gas Generators",
    href: "/gas-generators/",
    badge: "High Purity Gas",
  },
  {
    category: "Balances and Weighing",
    image: "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg",
    whatYouWillFind:
      "Analytical and precision balances with IP68 water and dust protection for laboratory benches.",
    linkText: "Explore Balances",
    href: "/precision-balances/",
    badge: "Precision & Micro",
  },
  {
    category: "Labware and Accessories",
    image: "/images/industries/research-education.jpg",
    whatYouWillFind:
      "Pumps, samplers, stirring and mixing, joints and specialized laboratory fittings.",
    linkText: "Explore Labware",
    href: "/crms-srms-laboratory-accessories/",
    badge: "Lab Essentials",
  },
  {
    category: "Reference Materials",
    image: "/images/products/tga-3000.jpg",
    whatYouWillFind:
      "Certified and standard reference materials (CRMs/SRMs), elemental analysis consumables.",
    linkText: "Explore Reference Materials",
    href: "/crms-srms-laboratory-accessories/",
    badge: "Certified Standards",
  },
];

const industrySolutions = [
  {
    id: "fuels-energy",
    title: "Fuels and Energy",
    focus: "coal, coke, liquid fuels, biomass and alternative fuels.",
    linkText: "Explore Fuels and Energy Solutions",
    href: "/coal-and-coke-testing-instruments/",
    instruments: ["Bomb Calorimeters", "Proximate Analyzers", "Ash Fusion Analyzers", "Carbon & Sulfur Analyzers"],
  },
  {
    id: "minerals-materials",
    title: "Minerals and Materials",
    focus: "minerals, ores, ceramics and polymers.",
    linkText: "Explore Minerals and Materials Solutions",
    href: "/products?industry=minerals-materials",
    instruments: ["Elemental Analyzers", "Pulverisers & Sieves", "XRF Sample Prep", "Reference Materials"],
  },
  {
    id: "cement-steel",
    title: "Cement and Steel",
    focus: "cement, steel, iron and alloy testing laboratories.",
    linkText: "Explore Cement and Steel Solutions",
    href: "/products?industry=cement-steel",
    instruments: ["Carbon & Sulfur", "ONH Analyzers", "Loss on Ignition (LOI)", "Certified Standards"],
  },
  {
    id: "oil-gas-petrochemicals",
    title: "Oil, Gas and Petrochemicals",
    focus: "high-pressure reactions, gas-to-liquid research and corrosion testing.",
    linkText: "Explore Oil, Gas and Petrochemical Solutions",
    href: "/reactors/",
    instruments: ["Parr High-Pressure Reactors", "Tubular Reactors", "Reaction Calorimeters", "Digestion Vessels"],
  },
  {
    id: "chemical-pharmaceutical",
    title: "Chemical and Pharmaceutical",
    focus: "reactions, hydrogenation, digestion and elemental analysis.",
    linkText: "Explore Chemical and Pharmaceutical Solutions",
    href: "/products?industry=chemical-pharmaceutical",
    instruments: ["Hydrogenation Apparatus", "CHNS/O Analyzers", "Glass Reactors", "Precision Balances"],
  },
  {
    id: "research-education",
    title: "Research and Education",
    focus: "universities, research centers and technical institutes.",
    linkText: "Explore Research and Education Solutions",
    href: "/products?industry=research-education",
    instruments: ["Customized Reactors", "Thermal Analyzers", "Tube Furnaces", "Supercritical CO2 Extraction"],
  },
  {
    id: "food-agriculture",
    title: "Food and Agriculture",
    focus: "food, feed, soil and biomass testing.",
    linkText: "Explore Food and Agriculture Solutions",
    href: "/products?industry=food-agriculture",
    instruments: ["Bomb Calorimeters", "Combustion Nitrogen Analyzers", "Laboratory Mills", "Soil Test Kits"],
  },
  {
    id: "environmental-testing",
    title: "Environmental and Water Testing",
    focus: "water and soil testing kits and instruments from Orlab.",
    linkText: "Explore Environmental Testing Solutions",
    href: "/about-us#manufacturer",
    instruments: ["Water Quality Kits", "Field Turbidity Meters", "COD Digestion", "Soil Chemistry Kits"],
  },
];

const homeFaqs = [
  {
    q: "What is a bomb calorimeter used for?",
    a: "A bomb calorimeter measures the gross calorific value of a sample by burning it in oxygen under constant-volume conditions and measuring the heat released. Laboratories use it to test coal, coke, liquid fuels, biomass, waste, food and feed.",
  },
  {
    q: "Who supplies Parr instruments in India?",
    a: "Orbit Technologies, based in Hyderabad, is the exclusive distributor of Parr Instrument Company in India for calorimeters, reactors and pressure vessels, with installation and service support.",
  },
  {
    q: "What is proximate analysis, and which instrument is used?",
    a: "Proximate analysis determines the moisture, ash, volatile matter and fixed carbon content of coal. Orbit's TGA 3000 can perform these measurements automatically in one programmed run.",
  },
  {
    q: "What is ash fusion temperature?",
    a: "It is the set of temperatures at which ash begins to deform, soften and flow, which helps predict slagging and fouling in boilers. Orbit supplies the IF2000G ash fusion analyzer for this test.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* -----------------------------------------------------------------------
          1. HERO (Dynamic Background Carousel with Left Gradient)
      ------------------------------------------------------------------------ */}
      <HeroCarousel slides={heroCarouselSlides}>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          {/* Left Text Column */}
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-extrabold tracking-[0.16em] uppercase text-[#ff8d0a] bg-[#ff8d0a]/10 px-3.5 py-1.5 rounded-full border border-[#ff8d0a]/20">
              LABORATORY SOLUTIONS · EXCLUSIVE PARR PARTNER IN INDIA
            </span>

            <h1 className="mt-4 text-3xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Scientific &amp; Analytical Instruments for Laboratories and{" "}
              <span className="text-[#ff8d0a]">Research Labs in India.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Exclusive Parr partner in India for 35+ years. We manufacture, supply and service analytical instruments, high-pressure reactors, elemental analyzers, and laboratory equipment across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="btn btn-accent !px-6 !py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-[#ff8d0a]/20"
              >
                Request a Quote
              </a>
              <a
                href="#finder"
                className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#ff8d0a] hover:translate-x-0.5"
              >
                Find the Right Instrument <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* -----------------------------------------------------------------------
          2. TRUST AND CREDIBILITY (Moved as floating bar as in screenshot)
      ------------------------------------------------------------------------ */}
      <section className="relative z-20 -mt-10 sm:-mt-12">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl">
            <div className="grid grid-cols-2 divide-y divide-slate-200/80 sm:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4">
              {trustBarItems.map((item) => (
                <div key={item.title} className="p-4 sm:p-5 flex flex-col justify-center">
                  <p className="text-base sm:text-lg font-black tracking-tight text-[#002f49]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              ))}

              {/* Final Column: Company Profile Link */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-[#fffbf5] lg:bg-transparent">
                <div>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c4620a] hover:underline"
                  >
                    Company profile <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-[11px] text-slate-400 mt-0.5">35 years Orbit story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust narrative context */}
      <div className="container-x mt-8 pt-4">
        <p className="text-center text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto">
          For more than 35 years, Orbit has supplied and supported scientific instruments for power plants, coal and coke laboratories, steel and cement plants, universities, and research centers across India.
        </p>
      </div>

      {/* -----------------------------------------------------------------------
          3. ABOUT ORBIT
      ------------------------------------------------------------------------ */}
      <section className="mt-12 band border-y border-slate-200 py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow text-[#c4620a]">About Orbit</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#002f49] sm:text-4xl">
              Indian Manufacturing, Global Representation, Pan-India Support
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Orbit Technologies Pvt. Ltd., based in Hyderabad, manufactures, distributes and services scientific instruments across India. We combine Indian manufacturing, international partnerships and local technical support.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              From our centrally located headquarters in Hyderabad, we support over 7,000 laboratories across power, mining, steel, cement, petroleum, chemicals, food, and academic research institutions with rapid spares availability and skilled application engineers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/about-us" className="btn btn-accent">
                Read the Orbit Story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about-us#distributor" className="btn btn-outline">
                Our Global Partners
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="surface p-5 text-center">
              <p className="text-3xl font-black text-[#c4620a]">35+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Years of Service
              </p>
            </div>
            <div className="surface p-5 text-center">
              <p className="text-3xl font-black text-[#002f49]">7,000+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Active Customers
              </p>
            </div>
            <div className="surface p-5 text-center">
              <p className="text-3xl font-black text-[#002f49]">14</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Branch Cities
              </p>
            </div>
            <div className="surface p-5 text-center">
              <p className="text-3xl font-black text-[#c4620a]">30,000</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Sq. Ft. Facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          4. PRODUCTS AND EQUIPMENT (Grid with Images, Title, and Button)
      ------------------------------------------------------------------------ */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Products and Equipment"
              title="Instruments for Testing, Analysis and Research"
              subtitle="Explore our range of analytical instruments and laboratory equipment. Whether you are measuring calorific value, analyzing elemental composition, preparing samples, or carrying out high-pressure experiments, our team can help you identify the right instrument."
            />
            <Link href="/products" className="btn btn-accent shrink-0">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Grid with Images, Title and Button */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategoryGrid.map((item) => (
              <div
                key={item.category}
                className="surface group flex flex-col justify-between overflow-hidden border border-slate-200 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-[#f6dcc4] hover:shadow-lg"
              >
                {/* Image header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] border-b border-slate-100">
                  <Image
                    src={withBasePath(item.image)}
                    alt={item.category}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover p-2 transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c4620a] shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-extrabold text-[#002f49] group-hover:text-[#c4620a] transition">
                      {item.category}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {item.whatYouWillFind}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <Link
                      href={item.href}
                      className="btn btn-outline w-full justify-between text-xs font-semibold group-hover:border-[#c4620a] group-hover:bg-[#fffbf5] group-hover:text-[#c4620a]"
                    >
                      <span>{item.linkText.replace("Explore ", "")}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/products" className="btn btn-primary !px-6 !py-3">
              Browse Complete Analytical &amp; Laboratory Catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          5. FIND THE RIGHT INSTRUMENT (Interactive Finder)
      ------------------------------------------------------------------------ */}
      <section className="band py-14 border-b border-slate-200">
        <div className="container-x">
          <InstrumentFinder />
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          6. INDUSTRY SOLUTIONS
      ------------------------------------------------------------------------ */}
      <section id="industries" className="scroll-mt-28 bg-white py-14 border-b border-slate-200">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industry Solutions"
            title="Laboratory Equipment for Your Industry"
            subtitle="Orbit supplies analytical instruments and laboratory systems for routine quality control, process monitoring, product development and research."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industrySolutions.map((ind) => (
              <div
                key={ind.id}
                className="surface group flex flex-col justify-between overflow-hidden p-0 transition hover:border-[#f6dcc4] hover:shadow-md"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  {industryPhotos[ind.id] ? (
                    <Image
                      src={withBasePath(industryPhotos[ind.id])}
                      alt={`${ind.title} solutions`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#002f49] text-white">
                      <IndustryIcon slug={ind.id} className="h-10 w-10 text-[#ffb347]" />
                    </div>
                  )}
                  <span className="absolute bottom-2 left-2 rounded-md bg-[#002f49]/85 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                    {ind.title}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-bold text-[#002f49]">{ind.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {ind.focus}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      {ind.instruments.map((item) => (
                        <span key={item} className="chip text-[10px] !py-0.5 !px-2">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-3">
                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c4620a] hover:underline"
                    >
                      {ind.linkText} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          7. INTERNATIONAL TECHNOLOGY. LOCAL EXPERTISE. (Interactive Partner Hub)
      ------------------------------------------------------------------------ */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="Global OEM Principals"
              title="Specialist Technology Partners From Around the World"
              subtitle="Orbit works with established international manufacturers to bring specialist laboratory instruments to customers in India, with local application engineering, installation, training, and certified maintenance."
            />
            <Link href="/principals" className="btn btn-accent shrink-0">
              View All Principals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <PartnerSection />
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          8. SERVICE AND SUPPORT (Comprehensive Nationwide Support)
      ------------------------------------------------------------------------ */}
      <section id="services" className="scroll-mt-28 bg-white py-16 border-b border-slate-200">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="Nationwide Support Network"
              title="Comprehensive Support Throughout the Equipment Lifecycle"
              subtitle="Orbit provides annual maintenance, NABL-traceable calibration, 300-bar oxygen vessel hydrotesting, repair, and user training through our 14 branch cities in India."
            />
            <Link href="/our-services" className="btn btn-accent shrink-0">
              Explore Services &amp; AMC <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <SupportServiceSection />
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          9. NEWS AND KNOWLEDGE HUB
      ------------------------------------------------------------------------ */}
      <section className="band py-14 border-b border-slate-200">
        <div className="container-x">
          <div className="mb-8">
            <SectionHeading
              eyebrow="News & Knowledge Hub"
              title="Events and Technical Resources"
              subtitle="Stay up to date with upcoming exhibitions, trade shows, application notes, and technical testing guides."
            />
          </div>

          <EventsAndKnowledge />
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          10. CONTACT AND ENQUIRY
      ------------------------------------------------------------------------ */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="container-x">
          <div className="mb-8">
            <SectionHeading
              eyebrow="Contact & Enquiry"
              title="Tell Us What You Need to Test"
              subtitle="Setting up a new laboratory, replacing an instrument or looking for equipment that meets a specific test standard? Tell us about your sample, application and testing requirements, and our team will help you identify a suitable instrument and get a quotation."
            />
          </div>

          <HomeEnquiryForm />
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          11. FREQUENTLY ASKED QUESTIONS
      ------------------------------------------------------------------------ */}
      <section className="band py-14">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our testing instruments, Parr representation, proximate analysis, and testing standards."
          />

          <div className="mt-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
