"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type HubItem = {
  key: string;
  title: string;
  href: string;
  /** Short label above the title (article category, document type, SOP number...). */
  meta?: string;
  /** Article summary, shown on the large feature card only. */
  summary?: string;
  /** Photo for articles; resources use an icon instead. */
  image?: string | null;
  icon?: LucideIcon;
};

const GRID_INITIAL = 6;
const GRID_STEP = 8;

const cardCls =
  "group flex h-full min-w-0 overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors hover:border-[#0056B3]";
const titleCls =
  "font-[family-name:var(--font-poppins)] font-semibold leading-snug text-[var(--ink)] transition-colors group-hover:text-[#0056B3]";
const metaCls = "text-xs font-medium uppercase tracking-[0.06em] text-[#0056B3]";

function Photo({ item, sizes, pad }: { item: HubItem; sizes: string; pad: string }) {
  if (!item.image) return null;
  return (
    <Image src={item.image} alt="" fill className={`object-contain mix-blend-multiply ${pad}`} sizes={sizes} />
  );
}

/** Wide feature card: photo on a pale field left, category, title and summary right. */
function FeatureCard({ item }: { item: HubItem }) {
  return (
    <Link href={item.href} className={`${cardCls} flex-col sm:flex-row lg:col-span-2`}>
      <div className="relative aspect-[4/3] w-full bg-[#f3f5f8] sm:aspect-auto sm:min-h-[340px] sm:w-1/2 sm:shrink-0">
        <Photo item={item} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" pad="p-6 sm:p-10" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
        {item.meta && <span className={metaCls}>{item.meta}</span>}
        <h3 className={`mt-2 text-xl sm:text-[1.6rem] sm:leading-tight ${titleCls}`}>{item.title}</h3>
        {item.summary && (
          <p className="mt-3 line-clamp-4 text-[15px] leading-relaxed text-[var(--ink-2)]">{item.summary}</p>
        )}
        <span className="link-more mt-auto pt-6">
          Read article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

/** Grid card: photo on a pale field on top, category and title below. */
function GridCard({ item, tall = false }: { item: HubItem; tall?: boolean }) {
  return (
    <Link href={item.href} className={`${cardCls} flex-col`}>
      <div
        className={`relative w-full bg-[#f3f5f8] ${tall ? "aspect-[16/10] lg:aspect-auto lg:min-h-[220px] lg:flex-1" : "aspect-[4/3]"}`}
      >
        <Photo item={item} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" pad="p-5" />
      </div>
      <div className="p-5">
        {item.meta && <span className={metaCls}>{item.meta}</span>}
        <h3 className={`mt-1.5 text-base sm:text-[17px] ${titleCls}`}>{item.title}</h3>
      </div>
    </Link>
  );
}

/** Text cell for resources without photos (downloads, SOPs, use cases, calculators). */
function ResourceCell({ item }: { item: HubItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group flex h-full min-h-[44px] items-start gap-3 bg-white p-5 transition-colors hover:bg-[var(--soft)]"
    >
      {Icon && <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#0056B3]" strokeWidth={1.75} aria-hidden="true" />}
      <div className="min-w-0 flex-1">
        {item.meta && <span className="block text-[13px] text-[var(--ink-3)]">{item.meta}</span>}
        <h3 className={`text-base ${item.meta ? "mt-1" : ""} ${titleCls}`}>{item.title}</h3>
      </div>
      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#0056B3]" aria-hidden="true" />
    </Link>
  );
}

/**
 * Knowledge Hub section layout:
 * articles open with a wide feature card and a tall card beside it, then a
 * grid of the rest showing 6 and loading 8 more per "View all" tap.
 * With `gridOnly`, everything goes straight into the grid (topic filters, resources).
 * Items with photos render as cards; items without render as hairline cells.
 */
export function HubLayout({
  items,
  gridHeading,
  viewAllLabel,
  gridOnly = false,
}: {
  items: HubItem[];
  gridHeading: string;
  viewAllLabel: string;
  gridOnly?: boolean;
}) {
  const [count, setCount] = useState(GRID_INITIAL);

  const feature = gridOnly ? null : items[0];
  const second = gridOnly ? null : items[1];
  const gridAll = gridOnly ? items : items.slice(2);
  const grid = gridAll.slice(0, count);
  const asCards = grid.some((it) => it.image);

  return (
    <div>
      {feature && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <FeatureCard item={feature} />
          {second && <GridCard item={second} tall />}
        </div>
      )}

      {grid.length > 0 && (
        <div className={gridOnly ? "" : "mt-12"}>
          {!gridOnly && (
            <h3 className="border-b-2 border-[var(--ink)] pb-3.5 text-lg font-semibold tracking-tight text-[var(--ink)] sm:text-xl">
              {gridHeading}
            </h3>
          )}
          <ul
            className={`${gridOnly ? "" : "mt-6"} ${
              asCards ? "grid grid-cols-1 gap-5" : "cells grid-cols-1"
            } sm:grid-cols-2 lg:grid-cols-3`}
          >
            {grid.map((it) => (
              <li key={it.key} className="min-w-0">
                {asCards ? <GridCard item={it} /> : <ResourceCell item={it} />}
              </li>
            ))}
          </ul>
          {gridAll.length > grid.length && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setCount((c) => c + GRID_STEP)}
                className="btn btn-outline min-h-[44px] bg-white px-8"
              >
                {viewAllLabel}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
