"use client";

import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { site } from "@/data/site";
import { trackContactClick } from "@/lib/analytics";

/**
 * Phone-only bar fixed to the bottom of the screen with the two key actions,
 * so they stay within thumb reach on every page. Hidden from md (768px) up,
 * where the header already shows "Request a Quote".
 */
export function MobileActionBar() {
  const telHref = `tel:${site.phones.office.replace(/[^+\d]/g, "")}`;

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pt-2 shadow-[0_-6px_20px_-12px_rgba(0,23,51,0.35)] backdrop-blur md:hidden"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telHref}
          onClick={() =>
            trackContactClick({ type: "phone", value: site.phones.office, context: "mobile_action_bar" })
          }
          className="flex h-12 items-center justify-center gap-2 rounded-lg border border-[#0056B3] text-sm font-semibold text-[#0056B3] transition active:bg-[#ebf3fc]"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link
          href="/contact-us#quote"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#d00000] text-sm font-semibold text-white transition active:bg-[#b00000]"
        >
          <FileText className="h-4 w-4" /> Get a Quote
        </Link>
      </div>
    </nav>
  );
}
