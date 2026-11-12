"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Collapses its content behind a toggle on phones only (below 768px).
 * From md up the content is always shown and the toggle is hidden.
 * Content is always rendered in the HTML, so it stays crawlable.
 */
export function MobileCollapse({
  label,
  openLabel = "Hide details",
  children,
}: {
  label: string;
  openLabel?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={open ? "block" : "hidden md:block"}>{children}</div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm font-semibold text-[#0056B3] md:hidden"
      >
        {open ? openLabel : label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
    </>
  );
}
