import fs from "node:fs";
import path from "node:path";

const PAGE_PATH = path.resolve("src/app/page.tsx");
let content = fs.readFileSync(PAGE_PATH, "utf8");

// 1. Add imports if missing
if (!content.includes('import { HeroCarousel }')) {
  content = content.replace(
    'import { SectionHeading } from "@/components/section-heading";',
    `import { SectionHeading } from "@/components/section-heading";
import { HeroCarousel } from "@/components/hero-carousel";
import { PartnerSection } from "@/components/partner-section";
import { SupportServiceSection } from "@/components/support-service-section";`
  );
}

// 2. Add hero carousel slides definition
const heroSlidesDef = `
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
`;

if (!content.includes('const heroCarouselSlides =')) {
  content = content.replace('/** Trust items formatted like the reference screenshot floating bar */', heroSlidesDef + '\n/** Trust items formatted like the reference screenshot floating bar */');
}

// 3. Update productCategoryGrid images to use authentic orbit images
content = content.replace(
  'image: "/images/products/calorimeter-hero.jpg",',
  'image: "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",'
);
content = content.replace(
  'image: "/images/inner-banner.jpg",',
  'image: "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",'
);
content = content.replace(
  'image: "/images/products/ofcu.jpg",',
  'image: "/images/orbit/Manual-Pellet-Press.jpg",'
);
content = content.replace(
  'image: "/images/products/ecs-8024.jpg",',
  'image: "/images/orbit/high-temperature-chamber-furnaces.jpg",'
);
content = content.replace(
  'image: "/images/industries/fuels-energy.jpg",',
  'image: "/images/orbit/Air-Compressor-1.jpg",'
);
content = content.replace(
  'image: "/images/products/ad-fortis.jpg",',
  'image: "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg",'
);

// 4. Replace static Hero section with HeroCarousel
const oldHeroRegex = /\{\/\* -----------------------------------------------------------------------\s+1\. HERO[\s\S]*?<\/section>/;

const newHero = `{/* -----------------------------------------------------------------------
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
      </HeroCarousel>`;

content = content.replace(oldHeroRegex, newHero);

// 5. Replace Section 7 (Partners) with modern PartnerSection
const oldPartnersRegex = /\{\/\* -----------------------------------------------------------------------\s+7\. INTERNATIONAL TECHNOLOGY\. LOCAL EXPERTISE\.[\s\S]*?<\/section>/;

const newPartners = `{/* -----------------------------------------------------------------------
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
      </section>`;

content = content.replace(oldPartnersRegex, newPartners);

// 6. Replace Section 8 (Service) with SupportServiceSection
const oldServicesRegex = /\{\/\* -----------------------------------------------------------------------\s+8\. SERVICE AND SUPPORT[\s\S]*?<\/section>/;

const newServices = `{/* -----------------------------------------------------------------------
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
      </section>`;

content = content.replace(oldServicesRegex, newServices);

fs.writeFileSync(PAGE_PATH, content, "utf8");
console.log("Successfully updated src/app/page.tsx with carousel, partner section, and service section");
