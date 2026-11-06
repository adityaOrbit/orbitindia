"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
            >
              <span
                className={cn(
                  "text-sm font-bold sm:text-base",
                  isOpen ? "text-[#c4620a]" : "text-[#002f49]",
                )}
              >
                {item.q}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 shrink-0 text-[#c4620a]" />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-[#c4620a]" />
              )}
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
