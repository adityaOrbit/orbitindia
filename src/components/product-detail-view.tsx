"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileDown,
  Check,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageCircle,
} from "lucide-react";
import { ProductGallery } from "@/components/product-gallery";
import { TemperatureCurve } from "@/components/temperature-curve";
import { ProductRfqDrawer } from "@/components/product-rfq-drawer";
import { ProductCard } from "@/components/product-card";
import { Breadcrumb, type Crumb } from "@/components/breadcrumb";
import {
  DEFAULT_BROCHURES,
  DEFAULT_FAQS,
  DEFAULT_STANDARDS,
} from "@/data/product-media";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import {
  trackViewItem,
  trackFileDownload,
  trackGenerateLead,
  trackContactClick,
} from "@/lib/analytics";
import { FORM_FALLBACK_MESSAGE, submitForm } from "@/lib/submit-form";

interface ProductDetailViewProps {
  product: Product;
  category?: Category | null;
  skuCode: string;
  crumbs: Crumb[];
  relatedProducts: Product[];
}

const ARCHITECTURE_POINTS = [
  {
    title: "1. Precise Thermal Equilibration",
    body: "The jacket enclosure is thermally regulated to eliminate ambient room temperature variations. High-resolution thermistors capture micro-degree changes across the sample combustion cycle with instantaneous data acquisition.",
  },
  {
    title: "2. Certified Combustion Vessel Integrity",
    body: "Constructed from proprietary high-strength corrosion-resistant alloys capable of withstanding working pressures up to 300 bar. Automated firing protocols ensure complete oxidation without sample splattering.",
  },
  {
    title: "3. Microprocessor Algorithmic Correction",
    body: "Real-time numerical integration compensates for fuse ignition heat, acid formation, and thermal leakage, calculating Gross Calorific Value (GCV) strictly compliant with ASTM D5865 and ISO 1928 formulas.",
  },
  {
    title: "4. Automated Workflow & Vessel Handling",
    body: "Automated oxygen filling and water bucket management reduce operator hands-on time from 15 minutes down to under 1 minute per test, minimizing human error and maximizing laboratory throughput.",
  },
];

const SAMPLE_MATRICES = [
  { name: "Coal, Lignite & Coke", desc: "Power generation, steel coking plants, mining quality labs" },
  { name: "Petroleum & Heavy Oils", desc: "Refinery feedstocks, diesel fuels, marine bunker oils, kerosene" },
  { name: "Solid Biofuels & Pellets", desc: "Wood pellets, agricultural residues, bagasse, briquettes" },
  { name: "Waste-Derived Fuels (RDF/SRF)", desc: "Cement kiln co-processing, municipal solid waste recovery" },
];

const FALLBACK_ADVANTAGES = [
  "Automated ignition, water fill, and vessel handling",
  "True isoperibol jacket with 0.0001 °C thermal stability",
  "Direct LIMS integration via USB, Ethernet, and RS-232",
  "Parr-certified combustion bomb with 300 bar rating",
  "Compact laboratory bench footprint under 60 cm width",
  "Full compliance with ASTM D5865, ISO 1928, and BIS standards",
];

function getDefaultSpecs(p: Product): [string, string][] {
  const cat = (p.category || "").toLowerCase();
  const name = (p.name || "").toLowerCase();

  if (cat.includes("reactor") || name.includes("reactor") || name.includes("vessel") || name.includes("autoclave")) {
    return [
      ["Design Configuration", "Stirred / Non-Stirred High-Pressure Laboratory Reactor"],
      ["Vessel Construction", "High-Strength Alloy (Stainless Steel 316L / Hastelloy C-276 / Inconel)"],
      ["Operating Pressure Rating", "Up to 350 bar (5,000 psi) proof-tested to 500 bar"],
      ["Temperature Range", "Ambient to 350°C (Optional up to 500°C with ceramic heating)"],
      ["Agitation & Stirring", "Zero-Leakage Magnetic Drive Coupling with Digital Speed Regulation"],
      ["Vessel Seal Architecture", "PTFE / Graphoil / Self-Sealing Conical Metal-to-Metal Gasket"],
      ["Safety Systems", "Certified Rupture Disc, Dual Safety Relief, High-Limit Controller"],
      ["Utility Ports", "Gas Inlet, Liquid Sampling Dip Tube, Thermocouple Well, Gas Release"],
      ["Compliance & Code", "ASME Section VIII, CE Pressure Equipment Directive (PED), ISO 9001"],
    ];
  }

  if (cat.includes("furnace") || name.includes("furnace") || name.includes("oven")) {
    return [
      ["Furnace Architecture", "Laboratory & Light Industrial High-Temperature Chamber / Tube"],
      ["Maximum Temperature", "1200°C Continuous (High-Temperature options up to 1800°C)"],
      ["Heating Elements", "High-Grade FeCrAl / Silicon Carbide (SiC) / MoSi2 Elements"],
      ["Thermal Insulation", "Ultra-Low Thermal Mass Ceramic Fiber & Multi-Layer Refractory"],
      ["Temperature Controller", "Multi-Segment Microprocessor PID Programmable Controller"],
      ["Atmosphere Capability", "Air / Inert Gas Purge (Nitrogen, Argon) / Optional Vacuum Tight"],
      ["Safety Systems", "Double-Skin Outer Case with Fan Cooling, Door Safety Interlock"],
      ["Electrical Requirement", "230V AC Single Phase / 415V 3-Phase, 50/60 Hz"],
    ];
  }

  if (cat.includes("balance") || name.includes("balance") || (p.brand || "").toLowerCase().includes("a&d")) {
    return [
      ["Measurement Type", "Micro / Semi-Micro / Analytical Precision Weighing"],
      ["Readability (d)", "0.0001 g (0.1 mg) / 0.01 mg High Sensitivity"],
      ["Stabilization Time", "Approx. 1 to 2 Seconds (Compact Super Hybrid Sensor)"],
      ["Calibration System", "Motorized Internal Self-Calibration with Automatic Temperature Compensation"],
      ["Weighing Pan", "Stainless Steel Anti-Static Pan with Breeze Break Chamber"],
      ["Data Connectivity", "Bi-directional RS-232C, USB Interface, WinCT Software Support"],
      ["Protection Rating", "IP65 Dust & Water Resistant Enclosure"],
      ["Compliance", "GLP / GMP / GCP / ISO Compliant Report Output with Timestamp"],
    ];
  }

  if (cat.includes("elemental") || name.includes("analyzer")) {
    return [
      ["Measurement Method", "High-Frequency Induction Combustion with Solid-State NDIR Detection"],
      ["Sample Elements", "Carbon (C), Sulfur (S), Oxygen (O), Nitrogen (N), Hydrogen (H)"],
      ["Analysis Measuring Range", "0.0001% (1 ppm) up to 100% Concentration"],
      ["Analysis Cycle Time", "Typically 40 to 60 Seconds per determination"],
      ["Carrier & Combustion Gas", "Oxygen (99.995% purity) / Nitrogen / Argon Carrier"],
      ["Furnace Power", "2.2 kW High-Frequency Oscillator Furnace (up to 2000°C)"],
      ["Balance Interface", "Direct connection to 4/5 place analytical balance with tare sync"],
      ["Governing Test Standards", "ASTM E1019, ISO 9556, ISO 10720, DIN EN 10276"],
    ];
  }

  if (cat.includes("calorimeter") || name.includes("calorimeter")) {
    return [
      ["Measurement Principle", "True Isoperibolic Calorimetry with Continuous Jacket Regulation"],
      ["Precision Classification", "0.1% RSD Class (High Repeatability)"],
      ["Temperature Resolution", "0.0001 °C (High Sensitivity Micro-Thermistor)"],
      ["Sample Testing Capacity", "4 – 6 tests per hour"],
      ["Combustion Vessel", "Parr 1108 Oxygen Vessel (Alloy 20 / Stainless Steel)"],
      ["Max Working Pressure", "30 bar (435 psi) operating, proof-tested to 300 bar"],
      ["Bucket & Jacket Management", "Automated precision water fill & temperature equilibrium"],
      ["Data Interfaces", "TCP/IP Ethernet, Dual USB 2.0, RS-232 for Analytical Balance & LIMS"],
      ["Governing Standards", "ASTM D5865, ISO 1928, DIN 51900, IS 1350 (Part-II)"],
    ];
  }

  return [
    ["Measurement Architecture", "Factory Calibrated High-Precision Analytical System"],
    ["Application Testing Range", "Research, Industrial Production & Quality Settlement Laboratories"],
    ["Interface & Automation", "Digital Microprocessor Controller with USB & Ethernet Data Export"],
    ["Safety Rating", "CE Certified, Over-Temperature & Over-Pressure Protection"],
    ["Origin & Brand Support", `${p.brand || "Orbit Technologies"} — Authorized Service in India`],
    ["Warranty & Certification", "12 Months OEM Warranty with Certified Inspection Certificate"],
  ];
}

/** Real spec rows, minus header rows some scraped tables carry ("Specification | Details"). */
function realSpecs(p: Product): [string, string][] {
  return (p.specs || []).filter(([k]) => k.trim().toLowerCase() !== "specification");
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Model number to set large above the name, e.g. "7400", "IF2000G-HDC", "4560". */
function modelNumberOf(name: string): string | null {
  const token = name.split(/\s+/).find((t) => /\d{3,}/.test(t) && !/^\d+-\d+$/.test(t) && t.length <= 14);
  return token ? token.replace(/[,:;]$/, "") : null;
}

/** Section header used down the page: title + optional one-line description. */
function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

export function ProductDetailView({
  product,
  category,
  skuCode,
  crumbs,
  relatedProducts,
}: ProductDetailViewProps) {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [specSearch, setSpecSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [specView, setSpecView] = useState<"compare" | "single">("compare");

  // GA4 view_item tracking
  useEffect(() => {
    trackViewItem(product, category?.name);
  }, [product, category?.name]);

  // In-page Quote Form State
  const [inPageSubmitting, setInPageSubmitting] = useState(false);
  const [inPageSubmitted, setInPageSubmitted] = useState(false);
  const [inPageQuoteId, setInPageQuoteId] = useState("");
  const [inPageError, setInPageError] = useState<string | null>(null);
  const [inPageForm, setInPageForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sampleType: "",
    timeline: "1-3 months",
    requirement: "",
  });

  const handleInPageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInPageSubmitting(true);
    setInPageError(null);
    try {
      const { referenceId } = await submitForm("Product Enquiry", {
        Product: product.name,
        "Product URL Slug": product.slug,
        Name: inPageForm.name,
        Email: inPageForm.email,
        Phone: inPageForm.phone,
        Company: inPageForm.company,
        "Sample Type": inPageForm.sampleType,
        Timeline: inPageForm.timeline,
        Requirement: inPageForm.requirement,
      });
      setInPageQuoteId(referenceId);
      setInPageSubmitted(true);
      trackGenerateLead({
        formId: "product_detail_rfq",
        formName: "Product Detail In-page RFQ",
        productOrApplication: product.name,
        company: inPageForm.company,
      });
    } catch (err) {
      setInPageError(err instanceof Error ? err.message : FORM_FALLBACK_MESSAGE);
    } finally {
      setInPageSubmitting(false);
    }
  };

  const ownSpecs = realSpecs(product);
  const rawSpecs = ownSpecs.length > 0 ? ownSpecs : getDefaultSpecs(product);

  const findSpec = (...keys: string[]) =>
    rawSpecs.find(([k]) => keys.some((key) => k.toLowerCase().includes(key)))?.[1];

  const precisionSpec = findSpec("precision", "accuracy", "resolution", "readability") || "0.1% RSD Class";
  const jacketOrTypeSpec = findSpec("jacket", "principle", "measurement", "type") || "True Isoperibol Jacket";
  const throughputSpec = findSpec("tests", "capacity", "speed", "time") || "4 – 6 Tests / Hour";

  const filteredSpecs = rawSpecs.filter(
    ([k, v]) =>
      k.toLowerCase().includes(specSearch.toLowerCase()) ||
      v.toLowerCase().includes(specSearch.toLowerCase())
  );

  // Model comparison: up to 3 other products from the same category that have
  // their own spec tables, compared on this product's spec rows.
  const siblings =
    ownSpecs.length > 0
      ? relatedProducts
          .filter((p) => p.category === product.category && realSpecs(p).length > 0)
          .slice(0, 3)
      : [];
  const compareRows = ownSpecs.filter(([k]) => norm(k) !== "modelnumber");
  const siblingValue = (p: Product, key: string) =>
    realSpecs(p).find(([k]) => norm(k) === norm(key))?.[1] ?? "—";
  const canCompare = siblings.length > 0 && compareRows.length > 0;

  const cleanDescription = product.description
    ? product.description.replace(/\[…\]/g, "").trim()
    : product.tagline;

  const advantages =
    product.features && product.features.length > 0 ? product.features : FALLBACK_ADVANTAGES;

  const keyFacts: [string, string][] = [
    ["Section", category?.name || "Analytical Lab"],
    ["Precision rating", precisionSpec],
    ["Compliance", "ASTM / ISO / CE"],
    ["Origin", product.origin || "India / USA"],
    ["Methodology", jacketOrTypeSpec],
    ["Throughput / cycles", throughputSpec],
  ];

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "specifications", label: "Specifications" },
    { id: "applications", label: "Applications & Standards" },
    { id: "advantages", label: "Key Advantages" },
    { id: "brochures", label: "Downloads" },
    { id: "faq-section", label: "FAQ" },
  ];

  const modelNumber = modelNumberOf(product.name);
  const sameCategory = relatedProducts.filter((p) => p.category === product.category);
  const relatedHeading =
    sameCategory.length > 0 && category ? `Other ${category.name}` : "Related Laboratory Instruments";

  return (
    <div className="bg-white">
      <Breadcrumb items={crumbs} />

      {/* 1. HERO — name, model number and key facts left; photos on a pale field bleeding to the right edge */}
      <section className="relative">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex min-w-0 flex-col py-8 lg:order-1 lg:py-14 lg:pr-14">
            <p className="text-sm text-[var(--ink-3)]">
              {product.brand && <span className="font-medium text-[var(--ink-2)]">{product.brand}</span>}
              {product.brand && " · "}
              {category?.name}
            </p>
            {modelNumber && (
              <p className="mt-4 font-[family-name:var(--font-poppins)] text-[3rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] sm:text-[4.25rem]">
                {modelNumber}
              </p>
            )}
            <h1 className={`${modelNumber ? "mt-3 text-xl sm:text-2xl" : "mt-2 text-[1.75rem] sm:text-[2.1rem]"} font-semibold leading-tight tracking-tight text-[var(--ink)]`}>
              {product.name}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">{product.tagline}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
              Engineered for rigorous testing environments across coal, fuels, minerals, and advanced materials. Delivers automated determination, high operational reproducibility, and compliance with international ASTM and ISO laboratory standards.
            </p>

            <dl className="cells mt-6 grid-cols-2 sm:grid-cols-3">
              {keyFacts.map(([label, value]) => (
                <div key={label} className="flex flex-col-reverse px-4 py-3">
                  <dt className="mt-0.5 text-[13px] text-[var(--ink-3)]">{label}</dt>
                  <dd className="m-0 line-clamp-2 text-[15px] font-semibold text-[var(--ink)]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsRfqOpen(true)}
                className="btn btn-accent min-h-[48px] w-full px-6 sm:w-auto"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  // Same URL on server and client (avoids a hydration mismatch); matches SITE_URL in lib/schema.ts
                  `Inquiry about ${product.name} | Orbit Technologies\nhttps://orbitindia.com/products/${product.slug}/`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackContactClick({
                    type: "whatsapp",
                    value: "product_page",
                    context: "product_cta",
                  })
                }
                className="btn btn-outline min-h-[48px] w-full px-6 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                WhatsApp
              </a>
            </div>
            <p className="mt-4 text-[13px] text-[var(--ink-3)]">
              Product code <span className="tnum">{skuCode}</span>
            </p>
          </div>
          <div className="order-1 -mx-4 min-w-0 bg-[#f3f5f8] px-4 py-6 sm:-mx-6 sm:px-6 lg:order-2 lg:mx-0 lg:bg-transparent lg:py-10 lg:pl-12 lg:pr-0">
            <ProductGallery product={product} />
          </div>
        </div>
      </section>

      {/* 2. STICKY SECTION BAR */}
      <nav aria-label="Product sections" className="section-bar">
        <div className="container-x flex items-center gap-1 overflow-x-auto no-scrollbar">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="tab">
              {s.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setIsRfqOpen(true)}
            className="btn btn-accent ml-auto hidden !min-h-[36px] !px-4 !py-2 text-sm md:inline-flex"
          >
            Request a Quote
          </button>
        </div>
      </nav>

      <div className="container-x">
        {/* 3. OVERVIEW */}
        <section id="overview" className="section scroll-mt-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            <div>
              <SectionHead title="Instrument Overview & Operating Principle" />
              <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-2)]">{cleanDescription}</p>
              {product.applications && product.applications.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-[var(--ink)]">Target Laboratory Applications</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
                    {product.applications.join(" · ")}
                  </p>
                </div>
              )}
            </div>
            <div className="rounded-md bg-[var(--soft)] p-5 sm:p-6">
              <h3 className="text-base font-semibold text-[var(--ink)]">Scientific Architecture & Measurement Physics</h3>
              <div className="mt-4 space-y-4">
                {ARCHITECTURE_POINTS.map((pt) => (
                  <div key={pt.title}>
                    <h4 className="text-sm font-semibold text-[var(--ink)]">{pt.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--ink-3)]">{pt.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROOF STRIP — who installs and supports it */}
        <section aria-label="Orbit support" className="section">
          <dl className="cells grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col-reverse p-5">
              <dt className="mt-2 text-sm text-[var(--ink-3)]">Orbit Technologies serving Indian laboratories</dt>
              <dd className="m-0 font-[family-name:var(--font-poppins)] text-[2.25rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum">35 years</dd>
            </div>
            <div className="flex flex-col-reverse p-5">
              <dt className="mt-2 text-sm text-[var(--ink-3)]">Customer installations across India</dt>
              <dd className="m-0 font-[family-name:var(--font-poppins)] text-[2.25rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)] tnum">7,000+</dd>
            </div>
            <div className="p-5">
              <p className="text-base font-semibold text-[var(--ink)]">Orbit Technologies After-Sales Assurance</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-3)]">
                Installation, user training, hydrotesting, and genuine Parr spare parts stocked locally in Hyderabad.
              </p>
            </div>
          </dl>
        </section>

        {/* 4. SPECIFICATIONS */}
        <section id="specifications" className="section scroll-mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHead
              title="Technical Specifications"
              sub={`Factory calibrated specifications and operational ratings (${rawSpecs.length} parameters)`}
            />
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {canCompare && (
                <div className="flex rounded-[0.25rem] border border-[#b9c2ce] p-0.5 text-sm" role="group" aria-label="Specification view">
                  <button
                    type="button"
                    onClick={() => setSpecView("compare")}
                    aria-pressed={specView === "compare"}
                    className={`min-h-[40px] rounded-[0.2rem] px-3 ${specView === "compare" ? "bg-[var(--ink)] text-white" : "text-[var(--ink-2)]"}`}
                  >
                    Compare models
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpecView("single")}
                    aria-pressed={specView === "single"}
                    className={`min-h-[40px] rounded-[0.2rem] px-3 ${specView === "single" ? "bg-[var(--ink)] text-white" : "text-[var(--ink-2)]"}`}
                  >
                    This model only
                  </button>
                </div>
              )}
              {(!canCompare || specView === "single") && (
                <input
                  type="text"
                  value={specSearch}
                  onChange={(e) => setSpecSearch(e.target.value)}
                  placeholder="Search parameters..."
                  aria-label="Search specifications"
                  className="input w-full sm:w-56"
                />
              )}
            </div>
          </div>

          {canCompare && specView === "compare" ? (
            <div className="overflow-x-auto">
              <table className="data-table min-w-[560px]">
                <thead>
                  <tr>
                    <th scope="col" className="w-[28%]"></th>
                    <th scope="col" className="is-current">{product.name}</th>
                    {siblings.map((p) => (
                      <th scope="col" key={p.slug}>
                        <Link href={`/products/${p.slug}/`} className="hover:text-[#0056B3] hover:underline">
                          {p.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map(([k, v]) => (
                    <tr key={k}>
                      <th scope="row">{k}</th>
                      <td className="is-current">{v}</td>
                      {siblings.map((p) => (
                        <td key={p.slug}>{siblingValue(p, k)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : filteredSpecs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="data-table">
                <tbody>
                  {filteredSpecs.map(([param, val], idx) => (
                    <tr key={idx}>
                      <th scope="row">{param}</th>
                      <td>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="rounded-md bg-[var(--soft)] p-6 text-center text-sm text-[var(--ink-3)]">
              No matching parameters found for &ldquo;{specSearch}&rdquo;.
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--ink-3)]">
            <span>Specifications subject to continuous development. Certified test reports provided with each dispatch.</span>
            <button
              type="button"
              onClick={() => setIsRfqOpen(true)}
              className="min-h-[44px] font-medium text-[#0056B3] hover:underline lg:min-h-0"
            >
              Request Custom Engineering Tolerance Report &rarr;
            </button>
          </div>
        </section>

        {/* 5. APPLICATIONS & STANDARDS */}
        <section id="applications" className="section scroll-mt-16">
          <SectionHead
            title="Compliance & International Standard Methods"
            sub="Meets or exceeds all established testing protocols for commercial settlement and research"
          />
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr>
                  <th scope="col">Standard Reference</th>
                  <th scope="col">Governing Body</th>
                  <th scope="col">Test Method Scope</th>
                </tr>
              </thead>
              <tbody>
                {DEFAULT_STANDARDS.map((std) => (
                  <tr key={std.standard}>
                    <td className="font-semibold">{std.standard}</td>
                    <td className="text-[var(--ink-3)]">{std.organization}</td>
                    <td>
                      <span className="block">{std.title}</span>
                      <span className="text-sm text-[var(--ink-3)]">{std.applicableRange}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-base font-semibold text-[var(--ink)]">Validated Sample Matrices & Materials</h3>
          <dl className="cells mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {SAMPLE_MATRICES.map((m) => (
              <div key={m.name} className="p-4">
                <dt className="text-[15px] font-semibold text-[var(--ink)]">{m.name}</dt>
                <dd className="m-0 mt-1 text-sm leading-relaxed text-[var(--ink-3)]">{m.desc}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 6. KEY ADVANTAGES */}
        <section id="advantages" className="section scroll-mt-16">
          <SectionHead
            title="Engineering Advantages & Key Features"
            sub="Why testing laboratories choose this configuration"
          />
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {advantages.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--ink-2)]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#0056B3]" />
                {feat}
              </li>
            ))}
          </ul>
        </section>

        {/* 7. DOWNLOADS */}
        <section id="brochures" className="section scroll-mt-16">
          <SectionHead
            title="Technical Documentation & Downloads"
            sub="Official product brochures, engineering datasheets, and laboratory pre-installation manuals"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {DEFAULT_BROCHURES.map((b) => (
              <button
                key={b.title}
                type="button"
                onClick={() => {
                  trackFileDownload({
                    fileName: b.title,
                    fileUrl: `${b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`,
                    productName: product.name,
                  });
                  setIsRfqOpen(true);
                }}
                className="flex w-full items-start gap-4 rounded-md border border-[var(--line)] p-4 text-left transition-colors hover:border-[#0056B3]"
              >
                <FileText className="mt-0.5 h-6 w-6 shrink-0 text-[var(--ink-3)]" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-semibold text-[var(--ink)]">{b.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-[var(--ink-3)]">{b.description}</span>
                  <span className="mt-1 block text-[13px] text-[var(--ink-3)]">
                    {b.type} · {b.size}
                  </span>
                </span>
                <FileDown className="mt-0.5 h-5 w-5 shrink-0 text-[#0056B3]" />
              </button>
            ))}
          </div>
        </section>

        {/* 8. QUOTE FORM */}
        <section id="quote-section" className="section scroll-mt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            <div>
              <h2 className="section-title">Request a quote for the {product.name}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-2)]">
                Share your requirement and our laboratory engineering team will get back to you within one working day with pricing, lead time, and application guidance.
              </p>
              <blockquote className="mt-8 border-l-2 border-[#0056B3] pl-4 text-[15px] leading-relaxed text-[var(--ink-2)]">
                &ldquo;Every {category?.name || "Instrument"} we supply arrives with Orbit&rsquo;s own factory-trained engineers — selection, installation, training, and after-sales service, anywhere in India.&rdquo;
                <footer className="mt-2 text-sm text-[var(--ink-3)]">
                  Orbit Technologies · 35 years · 7,000+ customer installations across India
                </footer>
              </blockquote>
            </div>

            <div>
              {inPageSubmitted ? (
                <div className="rounded-md border border-[var(--line)] p-8 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                  <h3 className="mt-3 text-xl font-semibold text-[var(--ink)]">Quotation Request Received!</h3>
                  <p className="mt-2 text-sm text-[var(--ink-2)]">
                    Reference ID: <span className="font-semibold tnum text-[var(--ink)]">{inPageQuoteId}</span>
                  </p>
                  <p className="mx-auto mt-2 max-w-md text-sm text-[var(--ink-3)]">
                    An official quotation configured for <strong className="text-[var(--ink)]">{product.name}</strong> will be emailed to you shortly along with utility schematics and installation support details.
                  </p>
                  <button type="button" onClick={() => setInPageSubmitted(false)} className="btn btn-outline mt-5">
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInPageSubmit} className="grid gap-4 sm:grid-cols-2">
                  <p className="rounded-[0.25rem] bg-[var(--soft)] px-4 py-3 text-sm text-[var(--ink-2)] sm:col-span-2">
                    Enquiring about: <strong className="text-[var(--ink)]">{product.name}</strong> (Code: {skuCode})
                  </p>
                  <label className="block">
                    <span className="label">Full Name *</span>
                    <input
                      type="text"
                      required
                      value={inPageForm.name}
                      onChange={(e) => setInPageForm({ ...inPageForm, name: e.target.value })}
                      placeholder="Dr. Rajesh Kumar"
                      className="input"
                    />
                  </label>
                  <label className="block">
                    <span className="label">Company / Institution *</span>
                    <input
                      type="text"
                      required
                      value={inPageForm.company}
                      onChange={(e) => setInPageForm({ ...inPageForm, company: e.target.value })}
                      placeholder="e.g. NTPC / CSIR / Reliance Industries"
                      className="input"
                    />
                  </label>
                  <label className="block">
                    <span className="label">Work Email *</span>
                    <input
                      type="email"
                      required
                      value={inPageForm.email}
                      onChange={(e) => setInPageForm({ ...inPageForm, email: e.target.value })}
                      placeholder="r.kumar@organization.com"
                      className="input"
                    />
                  </label>
                  <label className="block">
                    <span className="label">Phone Number *</span>
                    <input
                      type="tel"
                      required
                      value={inPageForm.phone}
                      onChange={(e) => setInPageForm({ ...inPageForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="input"
                    />
                  </label>
                  <label className="block">
                    <span className="label">Sample / Testing Material</span>
                    <input
                      type="text"
                      value={inPageForm.sampleType}
                      onChange={(e) => setInPageForm({ ...inPageForm, sampleType: e.target.value })}
                      placeholder="e.g. Coal & Coke, Heavy Fuel Oil, Biomass"
                      className="input"
                    />
                  </label>
                  <label className="block">
                    <span className="label">Procurement Timeline</span>
                    <select
                      value={inPageForm.timeline}
                      onChange={(e) => setInPageForm({ ...inPageForm, timeline: e.target.value })}
                      className="input"
                    >
                      <option value="immediate">Immediate (Ready to procure)</option>
                      <option value="1-3 months">1 – 3 months</option>
                      <option value="3-6 months">3 – 6 months</option>
                      <option value="budgetary">Budgetary quotation only</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="label">Your Requirement Details</span>
                    <textarea
                      rows={3}
                      value={inPageForm.requirement}
                      onChange={(e) => setInPageForm({ ...inPageForm, requirement: e.target.value })}
                      placeholder="Tell us about your testing throughput, specific standards (ASTM/ISO), or laboratory bench space..."
                      className="input"
                    />
                  </label>
                  {inPageError && (
                    <p role="alert" className="rounded-[0.25rem] border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 sm:col-span-2">
                      {inPageError}
                    </p>
                  )}
                  <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-[var(--ink-3)]">
                      We reply within one working day. Details are used only to answer your technical inquiry.
                    </p>
                    <button type="submit" disabled={inPageSubmitting} className="btn btn-accent shrink-0">
                      {inPageSubmitting ? "Submitting..." : "Send Enquiry →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 9. RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="section">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 className="section-title">{relatedHeading}</h2>
              <Link href="/products/" className="link-more min-h-[44px] lg:min-h-0">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {(sameCategory.length > 0 ? sameCategory : relatedProducts).slice(0, 8).map((p, idx) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  itemListId="related_products"
                  itemListName={`Related to ${product.name}`}
                  index={idx}
                  compact
                />
              ))}
            </div>
          </section>
        )}

        {/* 10. FAQ */}
        <section id="faq-section" className="section scroll-mt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
            <div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
                Everything testing laboratories and procurement managers need to know about sourcing, installing, and servicing analytical instruments through Orbit Technologies.
              </p>
            </div>
            <div className="border-t border-[var(--line)]">
              {DEFAULT_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className="border-b border-[var(--line)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold text-[var(--ink)] hover:text-[#0056B3]"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--ink-3)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && <p className="pb-5 pr-8 text-[15px] leading-relaxed text-[var(--ink-2)]">{faq.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* CLOSING BAND — navy */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Have a specific testing sample or standard not covered here?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">
              Our application engineers offer pre-sale testing feasibility analysis and laboratory site visits.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => setIsRfqOpen(true)} className="btn btn-accent min-h-[48px] px-6">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsRfqOpen(true)}
              className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
            >
              Ask An Instrument Specialist
            </button>
          </div>
        </div>
      </section>

      <ProductRfqDrawer
        product={product}
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        skuCode={skuCode}
      />
    </div>
  );
}
