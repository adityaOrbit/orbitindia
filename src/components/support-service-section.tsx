"use client";

import Link from "next/link";
import {
  Clock,
  Award,
  Flame,
  Wrench,
  ShieldCheck,
  Atom,
  PhoneCall,
  ArrowRight,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { site } from "@/data/site";

const SERVICES = [
  {
    icon: Clock,
    title: "Preventive Maintenance (AMC / CMC)",
    description:
      "Structured annual and comprehensive maintenance contracts designed to prevent unexpected downtime, inspect seals, clean jackets, and optimize repeatability.",
    highlights: ["Scheduled quarterly visits", "Full system diagnostic", "Priority emergency breakdown"],
    href: "/our-services#amc",
  },
  {
    icon: Flame,
    title: "Oxygen Bomb Hydrotesting (300 Bar)",
    description:
      "Mandatory safety pressure proof testing for Parr combustion bombs and reaction autoclaves in accordance with ASTM and ASME vessel codes at our Hyderabad center.",
    highlights: ["Hydrostatic proof test to 300 bar", "Vessel neck & thread inspection", "Official Safety Certification"],
    href: "/our-services#hydrotesting",
  },
  {
    icon: Award,
    title: "Instrument Calibration & Certification",
    description:
      "Traceable temperature, pressure, and mass calibration using certified master instruments. Full documentation provided for NABL and ISO audit compliance.",
    highlights: ["Micro-thermistor calibration", "Transducer multi-point verification", "Audit-ready certificates"],
    href: "/our-services#calibration",
  },
  {
    icon: Wrench,
    title: "Repairs & Breakdown Support",
    description:
      "Direct technical troubleshooting and component replacement by factory-trained engineers. Genuine Parr, NCS, Sylab, and Elite spares stocked locally.",
    highlights: ["Rapid response within 24-48h", "Genuine OEM spare parts", "14 branch cities in India"],
    href: "/our-services#repairs",
  },
  {
    icon: ShieldCheck,
    title: "Site Readiness & Commissioning",
    description:
      "Pre-installation laboratory inspection, electrical grounding verification, gas purity checks, utility integration, and baseline performance verification.",
    highlights: ["Pre-installation checklist", "Utility & gas hookup checks", "Turnkey commissioning signoff"],
    href: "/our-services#installation",
  },
  {
    icon: Atom,
    title: "User Training & Method Development",
    description:
      "Hands-on operator training covering standard operating procedures, sample preparation protocols, ASTM/ISO calculation formulas, and routine maintenance.",
    highlights: ["On-site operator certification", "ASTM/ISO method setup", "Application troubleshooting"],
    href: "/our-services#training",
  },
];

export function SupportServiceSection() {
  return (
    <div className="w-full">
      {/* 6 Key Service Pillars */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0056B3]/60 hover:shadow-md"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#feeceb] text-[#d00000]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-[#0056B3]">
                  {srv.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {srv.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                  {srv.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <Link
                  href={srv.href}
                  className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#d00000] hover:underline"
                >
                  Learn more &amp; request service <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Banner: Service Complaint & Dispatch Desk */}
      <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#00387a] via-[#0056B3] to-[#00274d] p-6 text-white shadow-md sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Need Prompt Technical Support or Instrument Service?
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200">
              Our central technical coordination desk in Hyderabad manages preventive maintenance, hydrotesting dispatch, breakdown tickets, and genuine spares across all Indian states.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/service-complaint-form"
              className="btn bg-[#d00000] text-white font-semibold hover:bg-[#b00000] px-5 py-3 text-xs sm:text-sm rounded-xl shadow-lg"
            >
              <FileText className="h-4 w-4" /> Book Service / Lodge Complaint
            </Link>
            <a
              href="tel:+914067216354"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <PhoneCall className="h-4 w-4 text-[#feeceb]" /> Call Service Desk: {site.phones.office}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
