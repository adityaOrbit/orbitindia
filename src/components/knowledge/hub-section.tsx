"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type HubItem = {
  key: string;
  title: string;
  href: string;
  /** Photo for articles; resources use an icon instead. */
  image?: string | null;
  icon?: LucideIcon;
};

const GRID_INITIAL = 6;
const GRID_STEP = 8;

const titleCls =
  "font-semibold leading-snug text-[#0056B3] transition-colors group-hover:text-[#d00000]";

function Thumb({ item, sizes, pad, iconSize }: { item: HubItem; sizes: string; pad: string; iconSize: string }) {
  if (item.image) {
    return <Image src={item.image} alt="" fill className={`object-contain ${pad}`} sizes={sizes} />;
  }
  const Icon = item.icon;
  return Icon ? (
    <div className="absolute inset-0 flex items-center justify-center text-[#0056B3]">
      <Icon className={iconSize} strokeWidth={1.5} />
    </div>
  ) : null;
}

/** Large "latest" card: big image/icon, title on a dark panel below. */
function LatestCard({ item }: { item: HubItem }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full flex-1 bg-[#f1f6fc]">
        <Thumb item={item} sizes="(min-width: 1024px) 55vw, 100vw" pad="p-6 sm:p-10" iconSize="h-20 w-20 sm:h-24 sm:w-24" />
      </div>
      <div className="bg-[#001733] p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#93c5fd] sm:text-2xl">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}

/** Horizontal card for the "top three" column: image/icon left, title right. */
function SideCard({ item }: { item: HubItem }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full items-center gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 transition hover:border-[#0056B3]/50 hover:shadow-md"
    >
      <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg bg-[#f1f6fc] sm:w-28">
        <Thumb item={item} sizes="112px" pad="p-2" iconSize="h-9 w-9" />
      </div>
      <h3 className={`min-w-0 text-base ${titleCls}`}>{item.title}</h3>
    </Link>
  );
}

/** Grid card: image/icon on top, title below. */
function GridCard({ item }: { item: HubItem }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-[#0056B3]/50 hover:shadow-md"
    >
      <div className={`relative w-full bg-[#f1f6fc] ${item.image ? "aspect-[4/3]" : "h-24"}`}>
        <Thumb item={item} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" pad="p-5" iconSize="h-10 w-10" />
      </div>
      <h3 className={`p-4 text-base ${titleCls}`}>{item.title}</h3>
    </Link>
  );
}

/**
 * Knowledge Hub section layout (same for every section):
 * latest item large on the left, next three beside it, then a grid of the
 * rest showing 6 and loading 8 more per "View all" tap.
 * With `gridOnly`, everything goes straight into the grid (used for topic filters).
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

  const latest = gridOnly ? null : items[0];
  const topThree = gridOnly ? [] : items.slice(1, 4);
  const gridAll = gridOnly ? items : items.slice(4);
  const grid = gridAll.slice(0, count);

  return (
    <div>
      {latest && (
        <div className={`grid gap-5 ${topThree.length > 0 ? "lg:grid-cols-[1.35fr_1fr]" : ""}`}>
          <LatestCard item={latest} />
          {topThree.length > 0 && (
            <ul className="grid gap-4">
              {topThree.map((it) => (
                <li key={it.key}>
                  <SideCard item={it} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {grid.length > 0 && (
        <div className={gridOnly ? "" : "mt-10"}>
          {!gridOnly && (
            <h3 className="text-lg font-semibold tracking-tight text-slate-800 sm:text-xl">{gridHeading}</h3>
          )}
          <ul className={`${gridOnly ? "" : "mt-4"} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
            {grid.map((it) => (
              <li key={it.key}>
                <GridCard item={it} />
              </li>
            ))}
          </ul>
          {gridAll.length > grid.length && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setCount((c) => c + GRID_STEP)}
                className="btn min-h-[48px] bg-[#001733] px-8 text-white hover:bg-[#0056B3]"
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
