"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATEGORY_OPTIONS, INDUSTRY_OPTIONS, OPERATION_OPTIONS } from "@/components/product-catalog";

/**
 * Home-page instrument finder: a white bar on the hero's bottom edge with
 * three dropdowns that open the catalogue with the filters already applied
 * (/products/?industry=…&operation=…&category=…).
 */
export function HomeFinder({ browse }: { browse: { label: string; href: string }[] }) {
  const router = useRouter();
  const [industry, setIndustry] = useState("all");
  const [operation, setOperation] = useState("all");
  const [category, setCategory] = useState("all");

  const go = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (industry !== "all") q.set("industry", industry);
    if (operation !== "all") q.set("operation", operation);
    if (category !== "all") q.set("category", category);
    const qs = q.toString();
    router.push(`/products/${qs ? `?${qs}` : ""}`);
  };

  const fields = [
    { id: "hf-industry", label: "Industry", value: industry, set: setIndustry, options: INDUSTRY_OPTIONS },
    { id: "hf-operation", label: "Test / operation", value: operation, set: setOperation, options: OPERATION_OPTIONS },
    { id: "hf-category", label: "Product group", value: category, set: setCategory, options: CATEGORY_OPTIONS },
  ];

  return (
    <div>
      <form
        onSubmit={go}
        className="grid gap-4 rounded-md border border-[var(--line)] bg-white p-5 shadow-[0_10px_30px_rgba(0,23,51,0.12)] md:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_auto] lg:items-end lg:p-6"
      >
        <h2 className="text-lg font-semibold leading-snug text-[var(--ink)] md:col-span-2 lg:col-span-1 lg:self-center lg:pr-2">
          Find the right
          <br className="hidden lg:block" /> instrument
        </h2>
        {fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="mb-1.5 block text-[13px] font-medium text-[var(--ink-2)]">
              {f.label}
            </label>
            <select
              id={f.id}
              value={f.value}
              onChange={(e) => f.set(e.target.value)}
              className="input min-h-[48px] cursor-pointer !text-[15px]"
            >
              {f.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className="btn btn-accent min-h-[48px] w-full px-6 lg:w-auto">
          Show instruments
        </button>
      </form>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 px-1 pt-4 text-sm text-[var(--ink-3)]">
        <span>Or browse:</span>
        {browse.map((b) => (
          <Link
            key={b.label}
            href={b.href}
            className="inline-flex min-h-[44px] items-center text-[var(--ink-2)] hover:text-[#0056B3] hover:underline lg:min-h-0"
          >
            {b.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
