"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, PhoneCall, Sparkles, SlidersHorizontal, ArrowRight } from "lucide-react";

type CategoryOption = {
  label: string;
  value: string;
  targetUrl: string;
};

type IndustryOption = {
  label: string;
  value: string;
  keywords: string;
};

const CATEGORIES: CategoryOption[] = [
  {
    label: "All Product Categories",
    value: "all",
    targetUrl: "/products",
  },
  {
    label: "Analytical Instruments (Calorimeters, Elemental, TGA)",
    value: "analytical",
    targetUrl: "/products?category=analytical",
  },
  {
    label: "Reactors & Pressure Systems (Parr)",
    value: "reactors",
    targetUrl: "/products?category=reactors",
  },
  {
    label: "Sample Preparation & Milling",
    value: "sample-prep",
    targetUrl: "/products?category=sample-prep",
  },
  {
    label: "Furnaces & Heating Systems (Elite)",
    value: "furnaces",
    targetUrl: "/products?category=furnaces",
  },
  {
    label: "Gas Generators (H2, N2, Zero Air)",
    value: "gas-generators",
    targetUrl: "/products?category=gas-generators",
  },
  {
    label: "Balances & Weighing (A&D)",
    value: "balances",
    targetUrl: "/products?category=balances",
  },
  {
    label: "Labware, CRMs & Consumables",
    value: "crms",
    targetUrl: "/products?category=crms",
  },
];

const INDUSTRIES: IndustryOption[] = [
  { label: "All Industries", value: "all", keywords: "" },
  {
    label: "Fuels and Energy (Coal, Coke, Biomass)",
    value: "fuels-energy",
    keywords: "coal calorific fuel energy coke",
  },
  {
    label: "Minerals and Materials",
    value: "minerals-materials",
    keywords: "mineral ore metal material rock",
  },
  {
    label: "Cement and Steel",
    value: "cement-steel",
    keywords: "cement steel iron clinker oxide",
  },
  {
    label: "Oil, Gas and Petrochemicals",
    value: "oil-gas-petrochemicals",
    keywords: "reactor catalysis petroleum petrochemical autoclave",
  },
  {
    label: "Chemical and Pharmaceutical",
    value: "chemical-pharmaceutical",
    keywords: "chemical pharmaceutical reaction synthesis api",
  },
  {
    label: "Research and Education (IITs, CSIR)",
    value: "research-education",
    keywords: "research university laboratory academic testing",
  },
  {
    label: "Food and Agriculture",
    value: "food-agriculture",
    keywords: "food agriculture feed grain soil protein",
  },
  {
    label: "Environmental and Water Testing",
    value: "environmental-testing",
    keywords: "water environmental soil test kit wastewater",
  },
];

export function InstrumentFinder() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const handleFind = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (selectedCategory && selectedCategory !== "all") {
      params.set("category", selectedCategory);
    }
    if (selectedIndustry && selectedIndustry !== "all") {
      params.set("industry", selectedIndustry);
    }
    const qs = params.toString();
    router.push(`/products${qs ? `?${qs}` : ""}`);
  };

  return (
    <div id="finder" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdeedd] text-[#c4620a]">
          <SlidersHorizontal className="h-5 w-5" />
        </span>
        <div>
          <span className="eyebrow text-[#c4620a]">Interactive Finder</span>
          <h3 className="text-xl font-black text-[#002f49] sm:text-2xl">
            Start With What You Need to Test
          </h3>
        </div>
      </div>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
        Choosing laboratory equipment starts with understanding your sample, application, and test
        method. Whether you are testing coal for calorific value, measuring ash fusion
        temperature, analyzing carbon and sulfur in steel, or selecting a reactor for high-pressure
        research, our interactive finder filters directly to the matching instrument.
      </p>

      {/* Finder Form */}
      <form onSubmit={handleFind} className="mt-6 rounded-xl border border-slate-200 bg-[#fbfcfd] p-5 sm:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
          <div>
            <label htmlFor="finder-category" className="label text-slate-700 font-semibold">
              Product Category <span className="text-xs font-normal text-slate-500">(Optional)</span>
            </label>
            <select
              id="finder-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input bg-white"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="finder-industry" className="label text-slate-700 font-semibold">
              Industry <span className="text-xs font-normal text-slate-500">(Optional)</span>
            </label>
            <select
              id="finder-industry"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="input bg-white"
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind.value} value={ind.value}>
                  {ind.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-accent w-full md:w-auto"
            >
              <Search className="h-4 w-4" /> Filter Instruments
            </button>
          </div>
        </div>

        {/* Selected parameters hint */}
        {(selectedCategory !== "all" || selectedIndustry !== "all") && (
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
            <Sparkles className="h-3.5 w-3.5 text-[#c4620a]" />
            <span>
              Target filter:{" "}
              <strong className="text-[#002f49]">
                {selectedCategory !== "all"
                  ? CATEGORIES.find((c) => c.value === selectedCategory)?.label
                  : "All Products"}
              </strong>
              {selectedIndustry !== "all" && (
                <>
                  {" "}
                  · Industry:{" "}
                  <strong className="text-[#c4620a]">
                    {INDUSTRIES.find((i) => i.value === selectedIndustry)?.label}
                  </strong>
                </>
              )}
            </span>
          </div>
        )}
      </form>

      {/* Advisory block & secondary CTA */}
      <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl border border-[#f6dcc4] bg-[#fffbf5] p-5 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#002f49]">
            Need help selecting an instrument?
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Share your sample type, test method, and applicable standard, such as ASTM or ISO.
            Our engineers will help you identify a suitable instrument and provide an official quotation.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="tel:+914067216354"
            className="btn btn-outline border-slate-300 text-xs sm:text-sm"
          >
            <PhoneCall className="h-4 w-4 text-[#c4620a]" /> Request a Call
          </a>
          <a
            href="#enquiry"
            className="btn btn-primary text-xs sm:text-sm"
          >
            Tell Us What You Need <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
