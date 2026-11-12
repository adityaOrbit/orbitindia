import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { InstrumentFinder } from "@/components/instrument-finder";

export const metadata: Metadata = {
  title: "Instrument Finder — Precision Equipment Selector | Orbit Technologies",
  description:
    "Interactive instrument selector tool for Indian testing laboratories. Filter Parr bomb calorimeters, high-pressure reactors, elemental analyzers, and high-temperature furnaces by sample matrix and testing standard.",
};

export default function InstrumentFinderPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Crawlable Breadcrumb */}
      <Breadcrumb items={[{ label: "Instrument Finder" }]} />

      {/* Page Hero */}
      <PageHero
        title="Instrument Finder — Precision Equipment Selector"
        subtitle="Identify the ideal analytical instruments, Parr bomb calorimeters, high-pressure reactors, and high-temp furnaces based on your testing standard, sample matrix, and industry requirements."
      />

      {/* Interactive Tool Container */}
      <main className="container-x py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* Core Tool */}
        <section aria-label="Interactive Instrument Finder Tool">
          <InstrumentFinder />
        </section>
      </main>
    </div>
  );
}
