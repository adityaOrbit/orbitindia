"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export type PartnerCategory =
  | "all"
  | "reactors"
  | "elemental"
  | "furnaces"
  | "sample-prep"
  | "consumables"
  | "specialty";

interface PartnerItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  category: PartnerCategory[];
  logo: string;
  badge: string;
  detail: string;
  products: string[];
  href: string;
  external?: string;
  verifiedYears?: string;
}

const PARTNERS: PartnerItem[] = [
  {
    id: "parr",
    name: "Parr Instrument Company",
    country: "USA",
    flag: "🇺🇸",
    category: ["all", "reactors"],
    logo: "/images/orbit/parr-1.png",
    badge: "Exclusive Partner in India",
    detail: "World leader in high-precision isoperibol bomb calorimeters, stirred laboratory reactors, high-pressure autoclaves, and acid digestion vessels.",
    products: ["Bomb Calorimeters", "High-Pressure Reactors", "Acid Digestion", "Continuous Tubular Reactors"],
    href: "/principals/parr",
    verifiedYears: "35+ Years Partnership",
  },
  {
    id: "ncs",
    name: "NCS Testing Technology",
    country: "Germany",
    flag: "🇩🇪",
    category: ["all", "elemental"],
    logo: "/images/orbit/ncs-1.png",
    badge: "Inorganic Elemental",
    detail: "High-frequency induction combustion analyzers for Carbon, Sulfur, Oxygen, Nitrogen and Hydrogen in steel, ferroalloys, and metallurgical materials.",
    products: ["Carbon & Sulfur Analyzers", "ONH Analyzers", "Induction Furnaces", "Metals QC"],
    href: "/principals/ncs",
    verifiedYears: "Factory Trained Engineers",
  },
  {
    id: "sylab",
    name: "Sylab Scientific",
    country: "India / France",
    flag: "🇮🇳",
    category: ["all", "elemental", "sample-prep"],
    logo: "/images/orbit/sylab-sarl.jpg",
    badge: "French Heritage · Indian Assembly",
    detail: "Thermogravimetric analyzers (TGA 3000), Ash Fusion analyzers (OFCU), and specialized inorganic analyzers manufactured with European engineering standards.",
    products: ["TGA 3000", "Ash Fusion Analyzers", "CSBox Tube CS", "OFCU Combustion"],
    href: "/principals/sylab",
    verifiedYears: "Group Manufacturing",
  },
  {
    id: "elite",
    name: "Elite Thermal Systems",
    country: "United Kingdom",
    flag: "🇬🇧",
    category: ["all", "furnaces"],
    logo: "/images/orbit/elite-1.png",
    badge: "High-Temperature Systems",
    detail: "Precision laboratory and industrial chamber, tube, split, ashing, and sintering furnaces reaching temperatures up to 1800°C.",
    products: ["Chamber Furnaces", "Split Tube Furnaces", "Vacuum Furnaces", "Ashing Furnaces"],
    href: "/principals/elite-thermal",
    verifiedYears: "Official Channel Partner",
  },
  {
    id: "elemental",
    name: "Elemental Microanalysis",
    country: "United Kingdom",
    flag: "🇬🇧",
    category: ["all", "consumables"],
    logo: "/images/orbit/Elemental-1.jpg",
    badge: "CRMs & Reagents",
    detail: "World's leading producer of Certified Reference Materials (CRMs), calibration standards, tin capsules, reagents, and consumables for all elemental analyzers.",
    products: ["Certified Standards (CRMs)", "Tin Capsules", "Combustion Reagents", "Consumables"],
    href: "/principals/elemental-microanalysis",
    verifiedYears: "NABL & NIST Traceable",
  },
  {
    id: "siebtechnik",
    name: "SIEBTECHNIK TEMA",
    country: "Germany",
    flag: "🇩🇪",
    category: ["all", "sample-prep"],
    logo: "/images/orbit/Logos.jpg",
    badge: "Milling & Sizing",
    detail: "Heavy-duty vibratory disc mills, jaw crushers, analytical sieving machines, and sample dividers for mineral and metallurgical sample preparation.",
    products: ["Vibratory Disc Mills", "Jaw Crushers", "Analytical Sieves", "Sample Splitters"],
    href: "/principals/siebtechnik",
    verifiedYears: "German Engineering",
  },
  {
    id: "denatec",
    name: "Denatec",
    country: "United Kingdom",
    flag: "🇬🇧",
    category: ["all", "reactors", "specialty"],
    logo: "/images/orbit/denatec.jpg",
    badge: "Ultra-High Pressure",
    detail: "Engineered ultra-high pressure chambers, hydrostatic pressure test benches, and hyperbaric underwater testing facilities.",
    products: ["Pressure Test Benches", "Hyperbaric Chambers", "Underwater Test Facilities"],
    href: "/principals/denatec",
    verifiedYears: "Specialized Engineering",
  },
  {
    id: "extratex",
    name: "Extratex",
    country: "France",
    flag: "🇫🇷",
    category: ["all", "reactors", "specialty"],
    logo: "/images/orbit/extratex.jpg",
    badge: "Supercritical Fluid Extraction",
    detail: "Advanced supercritical CO2 extraction and purification systems for pharmaceutical, natural product, and botanical laboratories.",
    products: ["ExtraLab 50-500ml", "ExtraLab 1-10L", "Industrial 25-400L"],
    href: "/principals/extratex",
    verifiedYears: "Green Chemistry",
  },
];

const TABS = [
  { id: "all", label: "All Principals" },
  { id: "reactors", label: "Calorimetry & Reactors" },
  { id: "elemental", label: "Elemental & Metals" },
  { id: "furnaces", label: "Furnaces up to 1800°C" },
  { id: "sample-prep", label: "Sample Prep & Sizing" },
  { id: "consumables", label: "CRMs & Consumables" },
  { id: "specialty", label: "High Pressure & SCFE" },
];

export function PartnerSection() {
  const [activeTab, setActiveTab] = useState<PartnerCategory>("all");

  const filtered = PARTNERS.filter((p) => p.category.includes(activeTab));

  return (
    <div className="w-full">
      {/* Interactive Tabs Header */}
      <div className="flex overflow-x-auto scrollbar-none gap-2 pb-2 border-b border-slate-200">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as PartnerCategory)}
              className={`cursor-pointer whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-[#0056B3] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Dynamic Grid of Partners */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((partner) => (
          <div
            key={partner.id}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-colors hover:border-[#0056B3]/60"
          >
            <div>
              {/* Top Row: Logo & Country */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="relative h-9 w-24 overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain object-left"
                    sizes="96px"
                  />
                </div>
                <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
                  {partner.country}
                </span>
              </div>

              {/* Title & Badge */}
              <div className="mt-3.5">
                <span className="inline-block rounded-md bg-[#feeceb] px-2 py-0.5 text-[10px] font-semibold text-[#d00000]">
                  {partner.badge}
                </span>
                <h3 className="mt-1 text-base font-semibold text-[#0056B3] group-hover:text-[#d00000] transition-colors">
                  {partner.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                  {partner.detail}
                </p>
              </div>

              {/* Product Tags */}
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {partner.products.slice(0, 3).map((p) => (
                  <span
                    key={p}
                    className="rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Credentials & Link */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              {partner.verifiedYears && (
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                  <ShieldCheck className="h-3 w-3" /> {partner.verifiedYears}
                </span>
              )}
              <Link
                href={partner.href}
                className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1 text-xs font-semibold text-[#d00000] hover:underline ml-auto"
              >
                <span>Explore</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
