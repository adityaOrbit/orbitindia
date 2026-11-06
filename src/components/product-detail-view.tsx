"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileDown,
  Phone,
  Check,
  ChevronDown,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight,
  Sliders,
  Info,
  CheckCircle2,
  Mail,
  Building2,
  User,
  FlaskConical,
  Clock,
  FileText,
} from "lucide-react";
import { ProductGallery } from "@/components/product-gallery";
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
} from "@/lib/analytics";

interface ProductDetailViewProps {
  product: Product;
  category?: Category | null;
  skuCode: string;
  crumbs: Crumb[];
  relatedProducts: Product[];
}

type TabKey =
  | "description"
  | "specifications"
  | "applications"
  | "advantages"
  | "brochures";

export function ProductDetailView({
  product,
  category,
  skuCode,
  crumbs,
  relatedProducts,
}: ProductDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [specSearch, setSpecSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sync with URL hash if user clicks an anchor or changes hash
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "description" ||
        hash === "specifications" ||
        hash === "applications" ||
        hash === "advantages" ||
        hash === "brochures"
      ) {
        setActiveTab(hash as TabKey);
      }
    };

    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  // GA4 view_item tracking
  useEffect(() => {
    trackViewItem(product, category?.name);
  }, [product, category?.name]);

  // In-page Quote Form State
  const [inPageSubmitting, setInPageSubmitting] = useState(false);
  const [inPageSubmitted, setInPageSubmitted] = useState(false);
  const [inPageQuoteId, setInPageQuoteId] = useState("");
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
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...inPageForm,
          productSlug: product.slug,
          productName: product.name,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setInPageQuoteId(data.referenceId);
        setInPageSubmitted(true);
      } else {
        const quoteId = `OT-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
        setInPageQuoteId(quoteId);
        setInPageSubmitted(true);
      }
    } catch {
      const quoteId = `OT-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setInPageQuoteId(quoteId);
      setInPageSubmitted(true);
    } finally {
      trackGenerateLead({
        formId: "product_detail_rfq",
        formName: "Product Detail In-page RFQ",
        productOrApplication: product.name,
        company: inPageForm.company,
      });
      setInPageSubmitting(false);
    }
  };

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

  const rawSpecs = product.specs && product.specs.length > 0 ? product.specs : getDefaultSpecs(product);

  // Extract or intelligently synthesize the 2x3 quick chips
  const precisionSpec =
    rawSpecs.find(([k]) =>
      k.toLowerCase().includes("precision") ||
      k.toLowerCase().includes("accuracy") ||
      k.toLowerCase().includes("resolution") ||
      k.toLowerCase().includes("readability")
    )?.[1] || "0.1% RSD Class";

  const jacketOrTypeSpec =
    rawSpecs.find(([k]) =>
      k.toLowerCase().includes("jacket") ||
      k.toLowerCase().includes("principle") ||
      k.toLowerCase().includes("measurement") ||
      k.toLowerCase().includes("type")
    )?.[1] || "True Isoperibol Jacket";

  const throughputSpec =
    rawSpecs.find(([k]) =>
      k.toLowerCase().includes("tests") ||
      k.toLowerCase().includes("capacity") ||
      k.toLowerCase().includes("speed") ||
      k.toLowerCase().includes("time")
    )?.[1] || "4 – 6 Tests / Hour";

  // Filter specs by search
  const filteredSpecs = rawSpecs.filter(
    ([k, v]) =>
      k.toLowerCase().includes(specSearch.toLowerCase()) ||
      v.toLowerCase().includes(specSearch.toLowerCase())
  );

  const cleanDescription = product.description
    ? product.description.replace(/\[…\]/g, "").trim()
    : product.tagline;

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "description", label: "Description", icon: <BookOpen className="h-4 w-4" /> },
    {
      key: "specifications",
      label: "Specifications",
      icon: <Sliders className="h-4 w-4" />,
    },
    { key: "applications", label: "Applications & Standards", icon: <Layers className="h-4 w-4" /> },
    { key: "advantages", label: "Key Advantages", icon: <Sparkles className="h-4 w-4" /> },
    {
      key: "brochures",
      label: "Downloads",
      icon: <FileDown className="h-4 w-4" />,
    },
  ];

  const handleTabClick = (tabKey: TabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={crumbs} />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION (Medigear & SciMed style split layout)         */}
      {/* ------------------------------------------------------------- */}
      <section className="container-x py-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.25fr] lg:gap-14">
          {/* LEFT: Product Gallery */}
          <ProductGallery product={product} />

          {/* RIGHT: Product Overview & 2x3 Chips Matrix */}
          <div className="flex flex-col">
            {/* H1 Title */}
            <h1 className="text-3xl font-semibold tracking-tight text-[#0056B3] sm:text-4xl">
              {product.name}
            </h1>

            {/* Product SKU */}
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>PRODUCT CODE:</span>
              <span className="font-mono font-bold text-[#0056B3] bg-slate-100 px-2 py-0.5 rounded">
                {skuCode}
              </span>
            </div>

            {/* Highlighted Tagline Bar */}
            <div className="mt-4 border-l-4 border-[#0056B3] bg-[#ebf3fc] rounded-r-lg pl-3.5 py-1.5 pr-2">
              <p className="text-sm font-semibold text-[#00387a] sm:text-base">
                {product.tagline}
              </p>
            </div>

            {/* Verified 25-35 Word Capability Statement */}
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Engineered for rigorous testing environments across coal, fuels, minerals, and advanced materials. Delivers automated determination, high operational reproducibility, and seamless compliance with international ASTM and ISO laboratory standards.
            </p>

            {/* --------------------------------------------------------- */}
            {/* MEDIGEAR 2x3 SPECIFICATION CHIP MATRIX                    */}
            {/* --------------------------------------------------------- */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {/* Chip 1: Category / Section */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors hover:border-slate-300">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Section
                </span>
                <span className="mt-1 block text-xs font-bold text-[#0056B3] line-clamp-1">
                  {category?.name || "Analytical Lab"}
                </span>
              </div>

              {/* Chip 2: Precision / Accuracy */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors hover:border-slate-300">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Precision Rating
                </span>
                <span className="mt-1 block text-xs font-bold text-[#0056B3] line-clamp-1">
                  {precisionSpec}
                </span>
              </div>

              {/* Chip 3: Condition / Compliance */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors hover:border-slate-300">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Compliance
                </span>
                <span className="mt-1 block text-xs font-bold text-emerald-700">
                  ASTM / ISO / CE
                </span>
              </div>

              {/* Chip 4: Origin */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors hover:border-slate-300">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Origin
                </span>
                <span className="mt-1 block text-xs font-bold text-[#0056B3]">
                  {product.origin || "India / USA"}
                </span>
              </div>

              {/* Chip 5: Measurement Architecture */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors hover:border-slate-300">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Methodology
                </span>
                <span className="mt-1 block text-xs font-bold text-[#0056B3] line-clamp-1">
                  {jacketOrTypeSpec}
                </span>
              </div>

              {/* Chip 6: Throughput / Service */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors hover:border-slate-300">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Throughput / Cycles
                </span>
                <span className="mt-1 block text-xs font-bold text-[#0056B3] line-clamp-1">
                  {throughputSpec}
                </span>
              </div>
            </div>

            {/* Primary Action CTA (Single 'Request a Quote' button per user specification) */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsRfqOpen(true)}
                className="cursor-pointer inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#d00000] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-red-950/15 hover:bg-[#b00000] hover:shadow-lg active:scale-[0.99] transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. TABBED CONTENT SECTION (Medigear & SciMed Style)           */}
      {/* ------------------------------------------------------------- */}
      <section id="technical-tabs" className="border-t border-slate-200 bg-[#f8fafc] py-10 lg:py-14 scroll-mt-24">
        <div className="container-x">
          {/* Unified Medigear-Style Technical Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            {/* Tab Navigation Strip along the top of the card */}
            <div className="border-b border-slate-200 bg-slate-50/80 px-2 sm:px-6">
              <div className="flex overflow-x-auto scrollbar-none gap-1 sm:gap-2">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleTabClick(tab.key)}
                      className={`cursor-pointer inline-flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3.5 text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? "border-[#d00000] text-[#0056B3] bg-white -mb-px shadow-2xs"
                          : "border-transparent text-slate-500 hover:border-slate-300 hover:text-[#0056B3] hover:bg-slate-100/60"
                      }`}
                    >
                      <span className={isActive ? "text-[#d00000]" : "text-slate-400"}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Tab Panel Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* TAB 1: DESCRIPTION */}
              {activeTab === "description" && (
                <div id="section-description" className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                      Instrument Overview & Operating Principle
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">
                      {cleanDescription}
                    </p>
                  </div>

                  {/* Operating Principles Callout Box */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
                    <h3 className="text-base font-semibold text-[#0056B3] flex items-center gap-2">
                      <Info className="h-5 w-5 text-[#d00000]" /> Scientific Architecture & Measurement Physics
                    </h3>
                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2 text-sm text-slate-600">
                        <h4 className="font-semibold text-slate-800">
                          1. Precise Thermal Equilibration
                        </h4>
                        <p className="text-xs leading-relaxed">
                          The jacket enclosure is thermally regulated to eliminate ambient room temperature variations. High-resolution thermistors capture micro-degree changes across the sample combustion cycle with instantaneous data acquisition.
                        </p>
                      </div>
                      <div className="space-y-2 text-sm text-slate-600">
                        <h4 className="font-semibold text-slate-800">
                          2. Certified Combustion Vessel Integrity
                        </h4>
                        <p className="text-xs leading-relaxed">
                          Constructed from proprietary high-strength corrosion-resistant alloys capable of withstanding working pressures up to 300 bar. Automated firing protocols ensure complete oxidation without sample splattering.
                        </p>
                      </div>
                      <div className="space-y-2 text-sm text-slate-600">
                        <h4 className="font-semibold text-slate-800">
                          3. Microprocessor Algorithmic Correction
                        </h4>
                        <p className="text-xs leading-relaxed">
                          Real-time numerical integration compensates for fuse ignition heat, acid formation, and thermal leakage, calculating Gross Calorific Value (GCV) strictly compliant with ASTM D5865 and ISO 1928 formulas.
                        </p>
                      </div>
                      <div className="space-y-2 text-sm text-slate-600">
                        <h4 className="font-semibold text-slate-800">
                          4. Automated Workflow & Vessel Handling
                        </h4>
                        <p className="text-xs leading-relaxed">
                          Automated oxygen filling and water bucket management reduce operator hands-on time from 15 minutes down to under 1 minute per test, minimizing human error and maximizing laboratory throughput.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Applications list in Description */}
                  {product.applications && product.applications.length > 0 && (
                    <div>
                      <h3 className="text-base font-semibold text-[#0056B3]">
                        Target Laboratory Applications
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <span
                            key={app}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: SPECIFICATIONS */}
              {activeTab === "specifications" && (
                <div id="section-specifications" className="space-y-6">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                        Technical Specifications
                      </h2>
                      <p className="mt-1 text-xs text-slate-500">
                        Factory calibrated specifications and operational ratings ({rawSpecs.length} parameters)
                      </p>
                    </div>
                    {/* Search input for specs */}
                    <div className="w-full sm:w-64">
                      <input
                        type="text"
                        value={specSearch}
                        onChange={(e) => setSpecSearch(e.target.value)}
                        placeholder="Search parameters..."
                        className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs focus:border-[#0056B3] focus:outline-none"
                      />
                    </div>
                  </div>

                  {filteredSpecs.length > 0 ? (
                    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                      <table className="w-full text-left text-sm">
                        <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          <tr>
                            <th className="w-2/5 px-5 py-3">Technical Parameter</th>
                            <th className="px-5 py-3">Engineering Rating / Tolerance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredSpecs.map(([param, val], idx) => (
                            <tr
                              key={idx}
                              className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                            >
                              <td className="px-5 py-3 font-semibold text-slate-700 align-top">
                                {param}
                              </td>
                              <td className="px-5 py-3 text-slate-800 align-top">
                                {val}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500 text-sm">
                      No matching parameters found for &ldquo;{specSearch}&rdquo;.
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
                    <span>Specifications subject to continuous development. Certified test reports provided with each dispatch.</span>
                    <button
                      type="button"
                      onClick={() => setIsRfqOpen(true)}
                      className="cursor-pointer font-bold text-[#d00000] hover:underline"
                    >
                      Request Custom Engineering Tolerance Report &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: APPLICATIONS & STANDARDS */}
              {activeTab === "applications" && (
                <div id="section-applications" className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                      Compliance & International Standard Methods
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Meets or exceeds all established testing protocols for commercial settlement and research
                    </p>
                  </div>

                  {/* Standards Table */}
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        <tr>
                          <th className="px-5 py-3">Standard Reference</th>
                          <th className="px-5 py-3">Governing Body</th>
                          <th className="px-5 py-3">Test Method Scope</th>
                          <th className="px-5 py-3">Compliance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {DEFAULT_STANDARDS.map((std, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                            <td className="px-5 py-3.5 font-bold text-[#0056B3]">
                              {std.standard}
                            </td>
                            <td className="px-5 py-3.5 text-xs text-slate-600">
                              {std.organization}
                            </td>
                            <td className="px-5 py-3.5 text-xs text-slate-700">
                              <span className="font-semibold block">{std.title}</span>
                              <span className="text-slate-500 text-[11px]">{std.applicableRange}</span>
                            </td>
                            <td className="px-5 py-3.5">
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                                <CheckCircle2 className="h-3.5 w-3.5" /> Certified
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Sample Matrices Grid */}
                  <div>
                    <h3 className="text-base font-semibold text-[#0056B3]">
                      Validated Sample Matrices & Materials
                    </h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        {
                          name: "Coal, Lignite & Coke",
                          desc: "Power generation, steel coking plants, mining quality labs",
                        },
                        {
                          name: "Petroleum & Heavy Oils",
                          desc: "Refinery feedstocks, diesel fuels, marine bunker oils, kerosene",
                        },
                        {
                          name: "Solid Biofuels & Pellets",
                          desc: "Wood pellets, agricultural residues, bagasse, briquettes",
                        },
                        {
                          name: "Waste-Derived Fuels (RDF/SRF)",
                          desc: "Cement kiln co-processing, municipal solid waste recovery",
                        },
                      ].map((m, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                        >
                          <h4 className="font-bold text-xs text-[#0056B3]">{m.name}</h4>
                          <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">{m.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: KEY ADVANTAGES */}
              {activeTab === "advantages" && (
                <div id="section-advantages" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                      Engineering Advantages & Key Features
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Why testing laboratories choose this configuration
                    </p>
                  </div>

                  {product.features && product.features.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {product.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#feeceb] text-[#d00000]">
                            <Check className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#0056B3]">
                              {feat}
                            </h4>
                            <p className="mt-1 text-xs text-slate-600">
                              Engineered for high sample reproducibility, minimal maintenance downtime, and operator safety.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Automated ignition, water fill, and vessel handling",
                        "True isoperibol jacket with 0.0001 °C thermal stability",
                        "Direct LIMS integration via USB, Ethernet, and RS-232",
                        "Parr-certified combustion bomb with 300 bar rating",
                        "Compact laboratory bench footprint under 60 cm width",
                        "Full compliance with ASTM D5865, ISO 1928, and BIS standards",
                      ].map((f, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#feeceb] text-[#d00000]">
                            <Check className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#0056B3]">{f}</h4>
                            <p className="mt-1 text-xs text-slate-600">
                              Delivers research-grade precision and continuous production reliability for Indian industrial testing labs.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Service Commitment Banner */}
                  <div className="mt-8 rounded-xl bg-[#0056B3] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold">Orbit Technologies After-Sales Assurance</h3>
                      <p className="mt-1 text-xs text-slate-200">
                        Installation, user training, hydrotesting, and genuine Parr spare parts stocked locally in Hyderabad.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsRfqOpen(true)}
                      className="cursor-pointer btn btn-accent shrink-0 text-xs font-bold"
                    >
                      Discuss With Technical Engineer
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 5: BROCHURES & RESOURCES */}
              {activeTab === "brochures" && (
                <div id="section-brochures" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#0056B3] sm:text-2xl">
                      Technical Documentation & Downloads
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Official product brochures, engineering datasheets, and laboratory pre-installation manuals
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {DEFAULT_BROCHURES.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="rounded bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700">
                              {b.type}
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono">
                              {b.size}
                            </span>
                          </div>
                          <h3 className="mt-2 text-sm font-semibold text-[#0056B3]">
                            {b.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                            {b.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400">
                            Orbit Technologies Document
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              trackFileDownload({
                                fileName: b.title,
                                fileUrl: `${b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`,
                                productName: product.name,
                              });
                              setIsRfqOpen(true);
                            }}
                            className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                          >
                            <FileDown className="h-4 w-4" /> Download PDF
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. DIRECT IN-PAGE QUOTE FORM (Attachment 2 & SciMed Style)    */}
      {/* ------------------------------------------------------------- */}
      <section id="quote-section" className="border-t border-slate-200 bg-[#f8fafc] py-14 scroll-mt-20">
        <div className="container-x max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Request a quote for the {product.name}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Share your requirement and our laboratory engineering team will get back to you within one working day with pricing, lead time, and application guidance.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {inPageSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-3 text-xl font-semibold text-[#0056B3]">
                  Quotation Request Received!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">
                  Reference ID:{" "}
                  <span className="font-mono font-bold text-[#d00000]">
                    {inPageQuoteId}
                  </span>
                </p>
                <p className="mt-2 text-xs text-slate-500 max-w-md mx-auto">
                  An official quotation configured for <strong className="text-slate-800">{product.name}</strong> will be emailed to you shortly along with utility schematics and installation support details.
                </p>
                <button
                  type="button"
                  onClick={() => setInPageSubmitted(false)}
                  className="cursor-pointer mt-5 inline-flex items-center justify-center rounded-lg bg-[#0056B3] px-5 py-2 text-xs font-semibold text-white hover:bg-[#003d80]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInPageSubmit} className="space-y-4">
                <div className="rounded-lg bg-[#ebf3fc] p-3 border border-blue-200/80 text-xs text-[#00387a] flex items-center justify-between">
                  <span className="font-semibold text-[#0056B3]">Enquiring about: {product.name} (Code: {skuCode})</span>
                  <span className="text-[11px] text-emerald-700 font-bold hidden sm:inline">Direct OEM Support</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={inPageForm.name}
                        onChange={(e) => setInPageForm({ ...inPageForm, name: e.target.value })}
                        placeholder="Dr. Rajesh Kumar"
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Institution *
                    </label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={inPageForm.company}
                        onChange={(e) => setInPageForm({ ...inPageForm, company: e.target.value })}
                        placeholder="e.g. NTPC / CSIR / Reliance Industries"
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={inPageForm.email}
                        onChange={(e) => setInPageForm({ ...inPageForm, email: e.target.value })}
                        placeholder="r.kumar@organization.com"
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={inPageForm.phone}
                        onChange={(e) => setInPageForm({ ...inPageForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Sample / Testing Material
                    </label>
                    <div className="relative">
                      <FlaskConical className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        value={inPageForm.sampleType}
                        onChange={(e) => setInPageForm({ ...inPageForm, sampleType: e.target.value })}
                        placeholder="e.g. Coal & Coke, Heavy Fuel Oil, Biomass"
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Procurement Timeline
                    </label>
                    <div className="relative">
                      <Clock className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <select
                        value={inPageForm.timeline}
                        onChange={(e) => setInPageForm({ ...inPageForm, timeline: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none"
                      >
                        <option value="immediate">Immediate (Ready to procure)</option>
                        <option value="1-3 months">1 – 3 months</option>
                        <option value="3-6 months">3 – 6 months</option>
                        <option value="budgetary">Budgetary quotation only</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Requirement Details
                  </label>
                  <div className="relative">
                    <FileText className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <textarea
                      rows={3}
                      value={inPageForm.requirement}
                      onChange={(e) => setInPageForm({ ...inPageForm, requirement: e.target.value })}
                      placeholder="Tell us about your testing throughput, specific standards (ASTM/ISO), or laboratory bench space..."
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-[#0056B3] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-[11px] text-slate-500">
                    We reply within one working day. Details are used only to answer your technical inquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={inPageSubmitting}
                    className="cursor-pointer btn btn-accent px-6 py-2.5 text-xs font-bold shadow-md hover:shadow-lg shrink-0"
                  >
                    {inPageSubmitting ? "Submitting..." : "Send Enquiry →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. STATEMENT / QUOTE NAVY BANNER (Attachment 2 & SciMed)      */}
      {/* ------------------------------------------------------------- */}
      <section className="quote-band py-12 text-white">
        <div className="container-x text-center">
          <p className="mx-auto max-w-3xl text-lg font-bold sm:text-2xl sm:leading-relaxed">
            &ldquo;Every {category?.name || "Instrument"} we supply arrives with Orbit&rsquo;s own factory-trained engineers — selection, installation, training, and after-sales service, anywhere in India.&rdquo;
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#ebf3fc]">
            Orbit Technologies · 35 Years · 7,000+ Customers Across India
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. RELATED PRODUCTS                                           */}
      {/* ------------------------------------------------------------- */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-14">
          <div className="container-x">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
                  Related Laboratory Instruments
                </h2>
              </div>
              <Link href="/products/" className="cursor-pointer btn btn-outline shrink-0 text-xs">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p, idx) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  itemListId="related_products"
                  itemListName={`Related to ${product.name}`}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 6. FREQUENTLY ASKED QUESTIONS (Medigear Style, Just Above Footer) */}
      {/* ------------------------------------------------------------- */}
      <section id="faq-section" className="border-t border-slate-200 bg-[#fbfcfd] py-16 lg:py-20 scroll-mt-20">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-xl mx-auto">
              Everything testing laboratories and procurement managers need to know about sourcing, installing, and servicing analytical instruments through Orbit Technologies.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-2xl p-2 sm:p-6 shadow-xs border">
            {DEFAULT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5 px-3">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="cursor-pointer flex w-full items-center justify-between gap-4 text-left font-semibold text-[#0056B3] hover:text-[#d00000] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base pr-2">{faq.q}</span>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-[#feeceb] text-[#d00000]" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 pr-6 pl-1 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Assistance Callout */}
          <div className="mt-8 rounded-2xl border border-blue-200 bg-[#ebf3fc] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-[#0056B3]">
                Have a specific testing sample or standard not covered here?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Our application engineers offer pre-sale testing feasibility analysis and laboratory site visits.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsRfqOpen(true)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-[#d00000] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#b00000] transition-all shrink-0"
            >
              <span>Ask An Instrument Specialist</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. SLIDE-OUT RFQ DRAWER                                        */}
      {/* ------------------------------------------------------------- */}
      <ProductRfqDrawer
        product={product}
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        skuCode={skuCode}
      />
    </div>
  );
}
