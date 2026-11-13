"use client";

import { useMemo, useState, useCallback, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  X,
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
} from "lucide-react";
import { products, type Product } from "@/data/products";
import { ProductGrid } from "@/components/product-grid";
import {
  trackViewItemList,
  trackCatalogFilter,
} from "@/lib/analytics";

/* Filter Options */
interface FilterOption {
  value: string;
  label: string;
}

const CATEGORY_OPTIONS: FilterOption[] = [
  { value: "all", label: "All Product Groups" },
  { value: "analytical", label: "Analytical Instruments (Calorimeters, Elemental, TGA)" },
  { value: "reactors", label: "Reactors & Pressure Systems (Parr)" },
  { value: "sample-prep", label: "Sample Preparation & Milling" },
  { value: "furnaces", label: "Furnaces & Heating Systems (Elite)" },
  { value: "gas-generators", label: "Gas Generators (H2, N2, Zero Air)" },
  { value: "balances", label: "Balances & Weighing (A&D)" },
  { value: "crms", label: "CRMs & Lab Consumables" },
];

const INDUSTRY_OPTIONS: FilterOption[] = [
  { value: "all", label: "All Industries" },
  { value: "fuels-energy", label: "Fuels & Energy / Coal & Coke" },
  { value: "minerals-materials", label: "Minerals & Materials" },
  { value: "cement-steel", label: "Cement & Steel" },
  { value: "oil-gas-petrochemicals", label: "Oil, Gas & Petrochemicals" },
  { value: "chemical-pharmaceutical", label: "Chemical & Pharmaceutical" },
  { value: "food-agriculture", label: "Food & Agriculture" },
  { value: "research-education", label: "Research & Education" },
  { value: "environmental-testing", label: "Environmental & Water Testing" },
];

const OPERATION_OPTIONS: FilterOption[] = [
  { value: "all", label: "All Operations" },
  { value: "calorimetry", label: "Calorimetry & Heat Value (Bomb / Solution)" },
  { value: "thermal-analysis", label: "Thermal & Proximate Analysis (TGA / Ash)" },
  { value: "elemental-analysis", label: "Elemental Analysis (C, S, CHNS/O, ONH)" },
  { value: "high-pressure", label: "High-Pressure Reactions & Catalysis" },
  { value: "sample-prep", label: "Sample Crushing, Milling & Sieving" },
  { value: "heating-furnaces", label: "High-Temp Furnaces & Ashing" },
  { value: "gas-generation", label: "High-Purity Gas Generation" },
  { value: "weighing", label: "Analytical Weighing & Mass" },
];

const BRAND_OPTIONS: FilterOption[] = [
  { value: "all", label: "All Brands & Standards" },
  { value: "astm-iso", label: "ASTM & ISO Compliant Instruments" },
  { value: "parr", label: "Parr Instrument Company (USA)" },
  { value: "orbit", label: "Orbit Technologies / Orlab (India)" },
  { value: "sylab", label: "Sylab (France)" },
  { value: "elite", label: "Elite Thermal Systems (UK)" },
  { value: "ad", label: "A&D Company (Japan)" },
  { value: "siebtechnik", label: "SIEBTECHNIK TEMA (Germany)" },
  { value: "nc", label: "NC Technologies (Italy)" },
  { value: "ncs", label: "NCS Testing Technology (Germany)" },
  { value: "extratex", label: "Extratex (France)" },
  { value: "linn", label: "Linn High Therm (Germany)" },
];

/* Category / Pillar classification helper */
function getProductPillar(p: Product): string {
  const cat = (p.category || "").toLowerCase();
  if (
    cat.includes("calorimeter") ||
    cat.includes("ash-fusion") ||
    cat.includes("coal-and-coke") ||
    cat.includes("elemental-analyzers") ||
    cat.includes("tga-proximate")
  ) {
    return "analytical";
  }
  if (cat.includes("reactor")) return "reactors";
  if (
    cat.includes("milling") ||
    cat.includes("pulveris") ||
    cat.includes("sieving") ||
    cat.includes("xrf") ||
    cat.includes("extratex")
  ) {
    return "sample-prep";
  }
  if (cat.includes("furnace")) return "furnaces";
  if (cat.includes("gas-generator")) return "gas-generators";
  if (
    cat.includes("balance") ||
    cat.includes("micro-") ||
    cat.includes("analytical") ||
    cat.includes("precision")
  ) {
    return "balances";
  }
  if (
    cat.includes("reference") ||
    cat.includes("accessories") ||
    cat.includes("crm")
  ) {
    return "crms";
  }
  return "analytical";
}

/* Category matching */
function matchesCategory(p: Product, selectedCategory: string): boolean {
  if (!selectedCategory || selectedCategory === "all") return true;

  const pillar = getProductPillar(p);
  const catLower = (p.category || "").toLowerCase();
  const nameLower = (p.name || "").toLowerCase();

  if (selectedCategory === "analytical") {
    return (
      pillar === "analytical" ||
      catLower.includes("calorimeter") ||
      catLower.includes("elemental") ||
      catLower.includes("ash-fusion") ||
      catLower.includes("tga") ||
      nameLower.includes("calorimeter") ||
      nameLower.includes("analyzer")
    );
  }
  if (selectedCategory === "reactors") {
    return (
      pillar === "reactors" ||
      catLower.includes("reactor") ||
      nameLower.includes("reactor") ||
      nameLower.includes("pressure vessel")
    );
  }
  if (selectedCategory === "sample-prep") {
    return (
      pillar === "sample-prep" ||
      catLower.includes("sample-prep") ||
      catLower.includes("milling") ||
      catLower.includes("pulveris") ||
      catLower.includes("sieving") ||
      catLower.includes("xrf") ||
      catLower.includes("extratex") ||
      nameLower.includes("crusher") ||
      nameLower.includes("mill")
    );
  }
  if (selectedCategory === "furnaces") {
    return (
      pillar === "furnaces" ||
      catLower.includes("furnace") ||
      nameLower.includes("furnace")
    );
  }
  if (selectedCategory === "gas-generators") {
    return (
      pillar === "gas-generators" ||
      catLower.includes("gas-generator") ||
      nameLower.includes("generator")
    );
  }
  if (selectedCategory === "balances") {
    return (
      pillar === "balances" ||
      catLower.includes("balance") ||
      nameLower.includes("balance") ||
      (p.brand || "").toLowerCase().includes("a&d")
    );
  }
  if (selectedCategory === "crms") {
    return (
      pillar === "crms" ||
      catLower.includes("crm") ||
      catLower.includes("reference") ||
      catLower.includes("accessories")
    );
  }

  return catLower.includes(selectedCategory) || pillar === selectedCategory;
}

/* Industry matching */
function matchesIndustry(p: Product, selectedIndustry: string): boolean {
  if (!selectedIndustry || selectedIndustry === "all") return true;

  const pillar = getProductPillar(p);
  const text = [
    p.name,
    p.brand,
    p.tagline,
    p.description,
    p.category,
    ...(p.applications || []),
  ]
    .join(" ")
    .toLowerCase();

  switch (selectedIndustry) {
    case "fuels-energy":
      return (
        pillar === "analytical" ||
        pillar === "balances" ||
        text.includes("coal") ||
        text.includes("coke") ||
        text.includes("calorimeter") ||
        text.includes("fuel") ||
        text.includes("combustion") ||
        text.includes("ash") ||
        text.includes("sulfur") ||
        text.includes("tga") ||
        text.includes("dilatometer") ||
        text.includes("plastometer") ||
        text.includes("biomass") ||
        text.includes("gas generator") ||
        (p.category || "").includes("ashing-furnace") ||
        (pillar === "sample-prep" &&
          (text.includes("crush") ||
            text.includes("pulveris") ||
            text.includes("mill") ||
            text.includes("sieve"))) ||
        (pillar === "crms" &&
          (text.includes("coal") ||
            text.includes("coke") ||
            text.includes("sulfur") ||
            text.includes("standard")))
      );
    case "minerals-materials":
      return (
        pillar === "sample-prep" ||
        pillar === "furnaces" ||
        pillar === "balances" ||
        text.includes("mineral") ||
        text.includes("ore") ||
        text.includes("mining") ||
        text.includes("rock") ||
        text.includes("pulveris") ||
        text.includes("crush") ||
        text.includes("mill") ||
        text.includes("sieve") ||
        text.includes("elemental") ||
        text.includes("xrf") ||
        text.includes("carbon") ||
        text.includes("sulfur") ||
        text.includes("onh") ||
        text.includes("ash") ||
        text.includes("tga") ||
        text.includes("corrosion") ||
        (p.brand || "").toLowerCase().includes("siebtechnik") ||
        (p.brand || "").toLowerCase().includes("elite")
      );
    case "cement-steel":
      return (
        pillar === "furnaces" ||
        pillar === "sample-prep" ||
        pillar === "balances" ||
        text.includes("cement") ||
        text.includes("steel") ||
        text.includes("iron") ||
        text.includes("clinker") ||
        text.includes("slag") ||
        text.includes("carbon and sulfur") ||
        text.includes("onh") ||
        text.includes("furnace") ||
        (p.category || "").includes("elemental-analyzers") ||
        (p.category || "").includes("ashing-furnace") ||
        (p.category || "").includes("industrial-chamber") ||
        (p.category || "").includes("high-temperature")
      );
    case "oil-gas-petrochemicals":
      return (
        pillar === "reactors" ||
        pillar === "gas-generators" ||
        pillar === "balances" ||
        (p.category || "").includes("extratex") ||
        text.includes("petroleum") ||
        text.includes("petrochemical") ||
        text.includes("oil") ||
        text.includes("gas") ||
        text.includes("catalyst") ||
        text.includes("catalysis") ||
        text.includes("hydrogenation") ||
        text.includes("calorimeter") ||
        text.includes("reactor") ||
        text.includes("pressure")
      );
    case "chemical-pharmaceutical":
      return (
        pillar === "reactors" ||
        pillar === "gas-generators" ||
        pillar === "balances" ||
        (p.category || "").includes("extratex") ||
        (p.category || "").includes("chns") ||
        text.includes("chemical") ||
        text.includes("pharmaceutical") ||
        text.includes("synthesis") ||
        text.includes("reaction") ||
        text.includes("acid digestion") ||
        text.includes("furnace")
      );
    case "food-agriculture":
      return (
        pillar === "balances" ||
        text.includes("food") ||
        text.includes("agriculture") ||
        text.includes("grain") ||
        text.includes("feed") ||
        text.includes("soil") ||
        text.includes("protein") ||
        text.includes("fertilizer") ||
        (p.category || "").includes("chns") ||
        (p.category || "").includes("bomb-calorimeters") ||
        (p.category || "").includes("ashing-furnace") ||
        (p.category || "").includes("acid-digestion") ||
        (pillar === "sample-prep" &&
          (text.includes("mill") || text.includes("grinder")))
      );
    case "research-education":
      return true;
    case "environmental-testing":
      return (
        pillar === "gas-generators" ||
        pillar === "balances" ||
        text.includes("water") ||
        text.includes("environmental") ||
        text.includes("soil") ||
        text.includes("effluent") ||
        text.includes("wastewater") ||
        text.includes("turbidity") ||
        text.includes("cod") ||
        text.includes("air") ||
        (p.category || "").includes("acid-digestion") ||
        (p.category || "").includes("ashing-furnace") ||
        (p.category || "").includes("chns") ||
        (p.brand || "").toLowerCase().includes("orlab")
      );
    default:
      return true;
  }
}

/* Operation matching */
function matchesOperation(p: Product, selectedOperation: string): boolean {
  if (!selectedOperation || selectedOperation === "all") return true;

  const pillar = getProductPillar(p);
  const text = [
    p.name,
    p.brand,
    p.tagline,
    p.description,
    p.category,
    ...(p.applications || []),
  ]
    .join(" ")
    .toLowerCase();

  switch (selectedOperation) {
    case "calorimetry":
      return (
        (p.category || "").includes("calorimeter") ||
        text.includes("calorimeter") ||
        text.includes("calorific") ||
        text.includes("bomb") ||
        text.includes("combustion heat")
      );
    case "thermal-analysis":
      return (
        (p.category || "").includes("tga") ||
        (p.category || "").includes("ash-fusion") ||
        text.includes("tga") ||
        text.includes("thermogravimetric") ||
        text.includes("proximate") ||
        text.includes("ash fusion") ||
        text.includes("loss on ignition")
      );
    case "elemental-analysis":
      return (
        (p.category || "").includes("elemental") ||
        (p.category || "").includes("carbon-and-sulfur") ||
        (p.category || "").includes("chns") ||
        (p.category || "").includes("onh") ||
        text.includes("elemental") ||
        text.includes("carbon and sulfur") ||
        text.includes("chns") ||
        text.includes("onh")
      );
    case "high-pressure":
      return (
        pillar === "reactors" ||
        text.includes("reactor") ||
        text.includes("pressure") ||
        text.includes("autoclave") ||
        text.includes("hydrogenation")
      );
    case "sample-prep":
      return (
        pillar === "sample-prep" ||
        text.includes("crusher") ||
        text.includes("pulveris") ||
        text.includes("mill") ||
        text.includes("sieve") ||
        text.includes("pellet")
      );
    case "heating-furnaces":
      return (
        pillar === "furnaces" ||
        (p.category || "").includes("furnace") ||
        text.includes("furnace") ||
        text.includes("ashing")
      );
    case "gas-generation":
      return (
        pillar === "gas-generators" ||
        (p.category || "").includes("gas-generator") ||
        text.includes("generator")
      );
    case "weighing":
      return (
        pillar === "balances" ||
        text.includes("balance") ||
        text.includes("weighing") ||
        text.includes("mass")
      );
    default:
      return true;
  }
}

/* Brand matching */
function matchesBrand(p: Product, selectedBrand: string): boolean {
  if (!selectedBrand || selectedBrand === "all") return true;

  const brandLower = (p.brand || "").toLowerCase();
  const nameLower = (p.name || "").toLowerCase();

  switch (selectedBrand) {
    case "astm-iso": {
      const text = [
        p.name,
        p.tagline,
        p.description,
        ...(p.specs ? p.specs.map(([k, v]) => `${k} ${v}`) : []),
      ]
        .join(" ")
        .toLowerCase();
      return (
        text.includes("astm") ||
        text.includes("iso ") ||
        text.includes("din ") ||
        text.includes("standard")
      );
    }
    case "parr":
      return brandLower.includes("parr") || nameLower.includes("parr");
    case "orbit":
      return (
        brandLower.includes("orbit") ||
        brandLower.includes("orlab") ||
        nameLower.includes("orlab")
      );
    case "sylab":
      return brandLower.includes("sylab");
    case "elite":
      return brandLower.includes("elite");
    case "ad":
      return brandLower.includes("a&d") || brandLower.includes("and ");
    case "siebtechnik":
      return brandLower.includes("siebtechnik");
    case "nc":
      return brandLower.includes("nc ");
    case "ncs":
      return brandLower.includes("ncs");
    case "extratex":
      return brandLower.includes("extratex") || (p.category || "").includes("extratex");
    case "linn":
      return brandLower.includes("linn");
    default:
      return brandLower.includes(selectedBrand);
  }
}

/* Text Search matching */
function matchesQuery(p: Product, query: string): boolean {
  const cleanQ = query.trim().toLowerCase();
  if (!cleanQ) return true;

  const terms = cleanQ.split(/\s+/).filter(Boolean);
  const text = [
    p.name,
    p.brand,
    p.tagline,
    p.description,
    p.category,
    ...(p.applications || []),
    ...(p.specs ? p.specs.map(([k, v]) => `${k} ${v}`) : []),
  ]
    .join(" ")
    .toLowerCase();

  return terms.every((term) => text.includes(term));
}

function ProductCatalogInner({
  filtersOpen,
  setFiltersOpen,
}: {
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
}) {
  const searchParams = useSearchParams();

  // Read initial parameters from URL
  const initialCategory = useMemo(() => {
    const pillarParam = searchParams.get("pillar");
    const catParam = searchParams.get("category");
    if (catParam) {
      const found = CATEGORY_OPTIONS.find((c) => c.value === catParam);
      if (found) return found.value;
      return catParam;
    }
    if (pillarParam) return pillarParam;
    return "all";
  }, [searchParams]);

  const initialIndustry = useMemo(() => {
    const indParam = searchParams.get("industry");
    if (indParam && INDUSTRY_OPTIONS.some((i) => i.value === indParam)) {
      return indParam;
    }
    return "all";
  }, [searchParams]);

  const initialOperation = useMemo(() => {
    const opParam = searchParams.get("operation");
    if (opParam && OPERATION_OPTIONS.some((o) => o.value === opParam)) {
      return opParam;
    }
    return "all";
  }, [searchParams]);

  const initialBrand = useMemo(() => {
    const bParam = searchParams.get("brand");
    if (bParam && BRAND_OPTIONS.some((b) => b.value === bParam)) {
      return bParam;
    }
    return "all";
  }, [searchParams]);

  const initialQuery = useMemo(() => {
    return searchParams.get("q") || "";
  }, [searchParams]);

  // Synchronous React filter states for instantaneous UI updates
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustry);
  const [selectedOperation, setSelectedOperation] = useState(initialOperation);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);

  // Non-blocking, instant URL update using replaceState
  const syncUrl = useCallback(
    (newQ: string, newCat: string, newInd: string, newOp: string, newBrand: string) => {
      if (typeof window === "undefined") return;
      const params = new URLSearchParams();
      if (newQ.trim()) params.set("q", newQ.trim());
      if (newCat !== "all") params.set("category", newCat);
      if (newInd !== "all") params.set("industry", newInd);
      if (newOp !== "all") params.set("operation", newOp);
      if (newBrand !== "all") params.set("brand", newBrand);

      const qs = params.toString();
      const nextUrl = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
      window.history.replaceState(null, "", nextUrl);
    },
    []
  );

  // Immediate handlers: synchronous state update followed by non-blocking URL sync
  const handleQueryChange = useCallback(
    (val: string) => {
      setQuery(val);
      syncUrl(val, selectedCategory, selectedIndustry, selectedOperation, selectedBrand);
    },
    [syncUrl, selectedCategory, selectedIndustry, selectedOperation, selectedBrand]
  );

  const handleCategoryChange = useCallback(
    (val: string) => {
      setSelectedCategory(val);
      syncUrl(query, val, selectedIndustry, selectedOperation, selectedBrand);
      trackCatalogFilter("category", val);
    },
    [syncUrl, query, selectedIndustry, selectedOperation, selectedBrand]
  );

  const handleIndustryChange = useCallback(
    (val: string) => {
      setSelectedIndustry(val);
      syncUrl(query, selectedCategory, val, selectedOperation, selectedBrand);
      trackCatalogFilter("industry", val);
    },
    [syncUrl, query, selectedCategory, selectedOperation, selectedBrand]
  );

  const handleOperationChange = useCallback(
    (val: string) => {
      setSelectedOperation(val);
      syncUrl(query, selectedCategory, selectedIndustry, val, selectedBrand);
      trackCatalogFilter("operation", val);
    },
    [syncUrl, query, selectedCategory, selectedIndustry, selectedBrand]
  );

  const handleBrandChange = useCallback(
    (val: string) => {
      setSelectedBrand(val);
      syncUrl(query, selectedCategory, selectedIndustry, selectedOperation, val);
      trackCatalogFilter("brand", val);
    },
    [syncUrl, query, selectedCategory, selectedIndustry, selectedOperation]
  );

  const handleResetAll = useCallback(() => {
    setQuery("");
    setSelectedCategory("all");
    setSelectedIndustry("all");
    setSelectedOperation("all");
    setSelectedBrand("all");
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // Filtered Products with strict "AND" condition across all active filters
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Category check
      if (!matchesCategory(p, selectedCategory)) return false;
      // 2. Industry check (AND)
      if (!matchesIndustry(p, selectedIndustry)) return false;
      // 3. Operation check (AND)
      if (!matchesOperation(p, selectedOperation)) return false;
      // 4. Brand check (AND)
      if (!matchesBrand(p, selectedBrand)) return false;
      // 5. Keyword search check (AND)
      if (!matchesQuery(p, query)) return false;

      return true;
    });
  }, [selectedCategory, selectedIndustry, selectedOperation, selectedBrand, query]);

  // Track view_item_list when catalog results are loaded or filtered
  useEffect(() => {
    trackViewItemList({
      itemListId: selectedCategory !== "all" ? selectedCategory : "product_catalog",
      itemListName:
        selectedCategory !== "all"
          ? `Product Catalog - ${selectedCategory}`
          : "All Products Catalog",
      products: filteredProducts,
    });
  }, [selectedCategory, selectedIndustry, selectedOperation, selectedBrand, query, filteredProducts]);

  // Compute active filter chips
  const activeChips = useMemo(() => {
    const chips: { key: string; label: string; onRemove: () => void }[] = [];

    if (query.trim()) {
      chips.push({
        key: "q",
        label: `"${query.trim()}"`,
        onRemove: () => handleQueryChange(""),
      });
    }
    if (selectedOperation !== "all") {
      const opt = OPERATION_OPTIONS.find((o) => o.value === selectedOperation);
      if (opt) {
        chips.push({
          key: "operation",
          label: opt.label,
          onRemove: () => handleOperationChange("all"),
        });
      }
    }
    if (selectedCategory !== "all") {
      const opt = CATEGORY_OPTIONS.find((c) => c.value === selectedCategory);
      if (opt) {
        chips.push({
          key: "category",
          label: opt.label,
          onRemove: () => handleCategoryChange("all"),
        });
      }
    }
    if (selectedIndustry !== "all") {
      const opt = INDUSTRY_OPTIONS.find((i) => i.value === selectedIndustry);
      if (opt) {
        chips.push({
          key: "industry",
          label: opt.label,
          onRemove: () => handleIndustryChange("all"),
        });
      }
    }
    if (selectedBrand !== "all") {
      const opt = BRAND_OPTIONS.find((b) => b.value === selectedBrand);
      if (opt) {
        chips.push({
          key: "brand",
          label: opt.label,
          onRemove: () => handleBrandChange("all"),
        });
      }
    }

    return chips;
  }, [
    query,
    selectedCategory,
    selectedIndustry,
    selectedOperation,
    selectedBrand,
    handleQueryChange,
    handleOperationChange,
    handleCategoryChange,
    handleIndustryChange,
    handleBrandChange,
  ]);

  const hasActiveFilters = activeChips.length > 0;

  const renderFilterFields = (idPrefix: string, layout: string) => (
    <div className={layout}>
      {/* Dropdown 1: Type of Operation */}
      <div>
        <label
          htmlFor={`${idPrefix}filter-operation`}
          className="mb-1.5 block text-xs font-bold text-slate-600"
        >
          Type of operation
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}filter-operation`}
            value={selectedOperation}
            onChange={(e) => handleOperationChange(e.target.value)}
            className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-800 shadow-xs transition hover:border-slate-400 focus:border-[#0056B3] focus:outline-hidden focus:ring-2 focus:ring-[#0056B3]/20 cursor-pointer"
          >
            {OPERATION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Dropdown 2: Product Group / Category */}
      <div>
        <label
          htmlFor={`${idPrefix}filter-category`}
          className="mb-1.5 block text-xs font-bold text-slate-600"
        >
          Product Group
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}filter-category`}
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-800 shadow-xs transition hover:border-slate-400 focus:border-[#0056B3] focus:outline-hidden focus:ring-2 focus:ring-[#0056B3]/20 cursor-pointer"
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Dropdown 3: Industry */}
      <div>
        <label
          htmlFor={`${idPrefix}filter-industry`}
          className="mb-1.5 block text-xs font-bold text-slate-600"
        >
          Industry
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}filter-industry`}
            value={selectedIndustry}
            onChange={(e) => handleIndustryChange(e.target.value)}
            className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-800 shadow-xs transition hover:border-slate-400 focus:border-[#0056B3] focus:outline-hidden focus:ring-2 focus:ring-[#0056B3]/20 cursor-pointer"
          >
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Dropdown 4: Standards & Brand */}
      <div>
        <label
          htmlFor={`${idPrefix}filter-brand`}
          className="mb-1.5 block text-xs font-bold text-slate-600"
        >
          Standards &amp; Brand
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}filter-brand`}
            value={selectedBrand}
            onChange={(e) => handleBrandChange(e.target.value)}
            className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-800 shadow-xs transition hover:border-slate-400 focus:border-[#0056B3] focus:outline-hidden focus:ring-2 focus:ring-[#0056B3]/20 cursor-pointer"
          >
            {BRAND_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
    </div>
  );

  // Mobile filter sheet: lock page scroll and close on Escape while open
  useEffect(() => {
    if (!filtersOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFiltersOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [filtersOpen, setFiltersOpen]);

  const activeFilterCount = [selectedOperation, selectedCategory, selectedIndustry, selectedBrand].filter(
    (v) => v !== "all"
  ).length;


  return (
    <div className="w-full">
      {/* 1. Keyword Search Bar */}
      <div className="relative mb-3 md:mb-5">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Search instruments by name, brand, ASTM/ISO standard, or application…"
          className="input !pl-11 !pr-10 !py-3 !text-base bg-white border-slate-300 shadow-xs focus:border-[#0056B3] focus:ring-[#0056B3]/20"
          aria-label="Search instruments"
        />
        {query && (
          <button
            type="button"
            onClick={() => handleQueryChange("")}
            aria-label="Clear search"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* 2a. MOBILE: e-commerce style Filters button that opens a bottom sheet */}
      <div className="md:hidden">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={filtersOpen}
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-xs transition hover:border-[#0056B3]"
          >
            <SlidersHorizontal className="h-4 w-4 text-[#0056B3]" />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0056B3] px-1.5 text-[11px] font-bold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
        {hasActiveFilters && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={chip.onRemove}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800 cursor-pointer"
                title={`Remove ${chip.label}`}
              >
                <span>{chip.label}</span>
                <X className="h-3.5 w-3.5 text-slate-400" />
              </button>
            ))}
            <button
              type="button"
              onClick={handleResetAll}
              className="cursor-pointer text-xs font-semibold text-[#d00000] hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {filtersOpen && (
          <div className="fixed inset-0 z-[70] flex flex-col justify-end" role="dialog" aria-modal="true" aria-label="Filter instruments">
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="absolute inset-0 bg-slate-900/50"
            />
            <div className="relative flex max-h-[85vh] flex-col rounded-t-2xl bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <h2 className="flex items-center gap-2 text-base font-semibold text-[#0056B3]">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </h2>
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  aria-label="Close filters"
                  className="cursor-pointer rounded-full p-1.5 text-slate-500 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-y-auto px-5 py-4">
                {renderFilterFields("m-", "grid grid-cols-1 gap-4")}
              </div>
              <div className="flex items-center gap-3 border-t border-slate-200 px-5 py-4">
                <button
                  type="button"
                  onClick={handleResetAll}
                  className="cursor-pointer flex-1 rounded-lg border border-slate-300 py-2.5 text-sm font-semibold text-slate-700"
                >
                  Clear all
                </button>
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="cursor-pointer flex-[2] rounded-lg bg-[#0056B3] py-2.5 text-sm font-semibold text-white"
                >
                  Show {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2b. TABLET / DESKTOP: Horizontal 4-Dropdown Filter Bar (Anton Paar Style) */}
      <div className="hidden md:block rounded-xl border border-slate-200 bg-white p-4 shadow-xs sm:p-5">
        {renderFilterFields("", "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4")}

        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500">
                Your choice:
              </span>
              {activeChips.map((chip) => (
                <button
                  key={chip.key}
                  type="button"
                  onClick={chip.onRemove}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-100 transition group cursor-pointer"
                  title={`Remove ${chip.label}`}
                >
                  <span>{chip.label}</span>
                  <X className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-700" />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleResetAll}
              className="min-h-[44px] lg:min-h-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#d00000] hover:text-[#b00000] hover:underline transition cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset all filters</span>
            </button>
          </div>
        )}
      </div>

      {/* 4. 4-Column Product Grid (Anton Paar Style) */}
      {filteredProducts.length > 0 ? (
        <ProductGrid
          products={filteredProducts}
          className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
          itemListId={selectedCategory !== "all" ? selectedCategory : "product_catalog"}
          itemListName={
            selectedCategory !== "all"
              ? `Product Catalog - ${selectedCategory}`
              : "All Products Catalog"
          }
          resetKey={[selectedCategory, selectedIndustry, selectedOperation, selectedBrand, query].join("|")}
        />
      ) : (
        /* Empty State */
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#feeceb] text-[#d00000]">
            <SlidersHorizontal className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[#0056B3]">
            No instruments match this combination
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 leading-relaxed">
            Try clearing one of the filters or resetting to see the full range of instruments
            available from Orbit Technologies.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleResetAll}
              className="btn btn-outline border-slate-300 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" /> Reset All Filters
            </button>
            <Link href="/contact-us#quote" className="btn btn-accent">
              Request Instrument Guidance
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCatalogContent() {
  const searchParams = useSearchParams();
  // Held here (outside the keyed inner component) so the mobile filter sheet
  // stays open when a filter change updates the URL and remounts the inner tree.
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <ProductCatalogInner
      key={searchParams.toString()}
      filtersOpen={filtersOpen}
      setFiltersOpen={setFiltersOpen}
    />
  );
}

export function ProductCatalog() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-slate-400">
          Loading instrument catalog…
        </div>
      }
    >
      <ProductCatalogContent />
    </Suspense>
  );
}