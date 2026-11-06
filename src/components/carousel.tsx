"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Horizontal snap-scroll carousel with prev/next arrows.
 * Children are laid out in a flex row; give each child a fixed basis
 * (e.g. "w-[85%] sm:w-[48%] lg:w-[32%]") for card-style slides,
 * or "w-full" for full-bleed banner slides.
 */
export function Carousel({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  /** Accessible name, e.g. "Latest events". */
  label: string;
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={track}
        role="region"
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
      >
        {children}
      </div>

      <button
        type="button"
        aria-label={`Scroll ${label} backwards`}
        onClick={() => scrollBy(-1)}
        className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#002f49] shadow-md transition hover:border-[#c4620a] hover:text-[#c4620a] sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label={`Scroll ${label} forwards`}
        onClick={() => scrollBy(1)}
        className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#002f49] shadow-md transition hover:border-[#c4620a] hover:text-[#c4620a] sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
