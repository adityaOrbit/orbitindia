"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Collapsible "Read more / Read less" block for long-form SEO copy.
 * Keeps the page visually light while leaving the full text in the DOM
 * for crawlers (content is only visually clipped, never unmounted).
 */
export function Collapsible({
  children,
  previewLines = 4,
  readMore = "Read more",
  readLess = "Read less",
}: {
  children: React.ReactNode;
  /** Number of clamped lines shown before expanding. */
  previewLines?: number;
  readMore?: string;
  readLess?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={cn(
          "relative transition-all",
          !open && "max-h-none overflow-hidden",
        )}
        style={
          open
            ? undefined
            : {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: previewLines,
                overflow: "hidden",
              }
        }
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#c4620a] transition hover:text-[#a35a00]"
      >
        {open ? readLess : readMore}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
    </div>
  );
}
