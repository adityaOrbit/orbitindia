import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { HeroCarousel } from "@/components/hero-carousel";
import { EventsAndKnowledge } from "@/components/events-and-knowledge";
import { HomeClientsSection } from "@/components/home-clients-section";
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

export default function HomePage() {
  return (
    <div>
      {/* -----------------------------------------------------------------------
          1. HERO (Dynamic Background Carousel with Left Gradient)
      ------------------------------------------------------------------------ */}
      <HeroCarousel slides={heroCarouselSlides}>
        <div>
          {/* Left Text Column (desktop product panel is rendered by HeroCarousel) */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]">
              Scientific &amp; Analytical Instruments for Laboratories and{" "}
              <span className="text-[#93c5fd]">Research Labs in India.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Exclusive Parr partner in India for 35+ years. We manufacture, supply and service analytical instruments, high-pressure reactors, elemental analyzers, and laboratory equipment across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us#quote"
                className="btn btn-accent !px-6 !py-3.5 text-sm sm:text-base font-semibold shadow-sm"
              >
                Request a Quote
              </Link>
              <Link
                href="/instrument-finder/"
                className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#cce1f9]"
              >
                Find the Right Instrument <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* -----------------------------------------------------------------------
          2. TRUST AND CREDIBILITY STRIP
      ------------------------------------------------------------------------ */}
      <section className="relative z-20 -mt-8 sm:-mt-10">
        <div className="container-x">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
            <div className="grid grid-cols-2 divide-y divide-slate-200/80 sm:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4">
              {trustBarItems.map((item) => (
                <div key={item.title} className="p-4 sm:p-5 flex flex-col justify-center">
                  <p className="text-base sm:text-lg font-semibold tracking-tight text-[#0056B3] tabular-nums">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              ))}

              {/* Final Column: Company Profile Link */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-[#ebf3fc] lg:bg-transparent">
                <div>
                  <Link
                    href="/about-us"
                    className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#d00000] hover:underline"
                  >
                    Company profile <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-[11px] text-slate-500 mt-0.5">35 years Orbit story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          3. ABOUT ORBIT
      ------------------------------------------------------------------------ */}
      <section className="mt-14 sm:mt-16 band border-y border-slate-200 py-10 sm:py-14">
        {/* Order: text → stats → buttons on phones/tablets; on desktop the buttons sit under the text and stats span the right column */}
        <div className="container-x grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-x-10 lg:gap-y-6">
          <div className="max-w-3xl lg:self-end">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl lg:text-4xl">
              Indian Manufacturing, Global Representation, Pan-India Support
            </h2>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-slate-700">
              Orbit Technologies Pvt. Ltd., based in Hyderabad, manufactures, distributes and services scientific instruments across India. We combine Indian manufacturing, international partnerships and local technical support.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              From our centrally located headquarters in Hyderabad, we support over 7,000 laboratories across power, mining, steel, cement, petroleum, chemicals, food, and academic research institutions with rapid spares availability and skilled application engineers.
            </p>
          </div>

          {/* Stats: 2x2 on phones, one row of 4 on tablets, 2x2 beside the text on desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
            <div className="surface px-3 py-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-[#d00000]">35+</p>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Years of service
              </p>
            </div>
            <div className="surface px-3 py-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-[#0056B3]">7,000+</p>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Active installations
              </p>
            </div>
            <div className="surface px-3 py-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-[#0056B3]">14</p>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Branch cities
              </p>
            </div>
            <div className="surface px-3 py-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-[#d00000]">30,000</p>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Sq. ft. facility
              </p>
            </div>
          </div>

          {/* Buttons: full width on phones, inline from tablet up */}
          <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4 lg:col-start-1 lg:row-start-2 lg:self-start">
            <Link href="/about-us" className="btn btn-accent w-full justify-center sm:w-auto">
              Read the Orbit Story <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about-us#distributor" className="btn btn-outline w-full justify-center sm:w-auto">
              Our Global Partners
            </Link>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          4. PRODUCTS AND EQUIPMENT (Grid with Images, Title, and Button)
      ------------------------------------------------------------------------ */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="container-x">
          <div>
            <SectionHeading
              title="Instruments for Testing, Analysis and Research"
              subtitle="Explore our range of analytical instruments and laboratory equipment. Whether you are measuring calorific value, analyzing elemental composition, preparing samples, or carrying out high-pressure experiments, our team can help you identify the right instrument."
            />
          </div>

          {/* Grid with Images, Title and Description */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategoryGrid.map((item) => (
              <Link
                key={item.category}
                href={item.href}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-0 transition-colors hover:border-[#0056B3]/60 cursor-pointer"
              >
                {/* Image header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] border-b border-slate-100">
                  <Image
                    src={withBasePath(item.image)}
                    alt={item.category}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover p-2"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-semibold text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                      {item.category}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {item.whatYouWillFind}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/products" className="btn btn-primary !px-6 !py-3">
              View Full Catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          5. INDUSTRY SOLUTIONS
      ------------------------------------------------------------------------ */}
      <section id="industries" className="scroll-mt-28 bg-white py-14 border-b border-slate-200">
        <div className="container-x">
          <SectionHeading
            title="Laboratory Equipment for Your Industry"
            subtitle="Orbit supplies analytical instruments and laboratory systems for routine quality control, process monitoring, product development and research."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industrySolutions.map((ind) => (
              <Link
                key={ind.id}
                href={ind.href}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-0 transition-colors hover:border-[#0056B3]/60 hover:shadow-md"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  {industryPhotos[ind.id] ? (
                    <Image
                      src={withBasePath(industryPhotos[ind.id])}
                      alt={`${ind.title} solutions`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#0056B3] text-white">
                      <IndustryIcon slug={ind.id} className="h-10 w-10 text-[#93c5fd]" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-semibold text-[#0056B3] transition-colors group-hover:text-[#d00000]">{ind.title}</h3>
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

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          7. NEWS AND KNOWLEDGE HUB
      ------------------------------------------------------------------------ */}
      <section className="band py-14 border-b border-slate-200">
        <div className="container-x">
          <div className="mb-8">
            <SectionHeading
              title="Events and Technical Resources"
              subtitle="Stay up to date with upcoming exhibitions, trade shows, application notes, and technical testing guides."
            />
          </div>

          <EventsAndKnowledge />
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          8. OUR CLIENTS
      ------------------------------------------------------------------------ */}
      <HomeClientsSection />

      {/* -----------------------------------------------------------------------
          9. FINAL CALL TO ACTION (Just above footer)
      ------------------------------------------------------------------------ */}
      <section className="container-x my-14 sm:my-18">
        <div className="rounded-xl bg-[#0056B3] p-8 sm:p-12 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Ready to Equip or Upgrade Your Laboratory?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
              Speak directly with Orbit’s senior application engineering team to discuss your testing parameters, sample matrices, ASTM / ISO test method compliance, or custom instrument configurations.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact-us"
                className="btn btn-accent !px-8 !py-3.5 text-sm sm:text-base font-semibold shadow-sm inline-flex items-center gap-2"
              >
                Contact Our Specialists <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Direct contact strip */}
            {/* Phones: stacked & centred. sm+: one row side by side (text steps down at sm so both fit) */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5 md:gap-8 text-sm sm:text-xs md:text-sm text-blue-100">
              <a
                href="tel:+914067216354"
                className="inline-flex items-center gap-2.5 whitespace-nowrap hover:text-white transition group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#d00000] transition">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>Direct line: <strong className="font-semibold text-white tabular-nums">+91 40 6721 6354</strong></span>
              </a>

              <div className="hidden sm:block h-4 w-px shrink-0 bg-white/20" />

              <a
                href="mailto:orbit@orbitindia.com"
                className="inline-flex items-center gap-2.5 whitespace-nowrap hover:text-white transition group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#d00000] transition">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span>Email: <strong className="font-semibold text-white">orbit@orbitindia.com</strong></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
