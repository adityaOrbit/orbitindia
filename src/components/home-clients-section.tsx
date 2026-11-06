import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { withBasePath } from "@/lib/utils";

const clientLogos = [
  { src: "/images/orbit/client1.jpg", alt: "Client Partner 1" },
  { src: "/images/orbit/client2.jpg", alt: "Client Partner 2" },
  { src: "/images/orbit/client3.jpg", alt: "Client Partner 3" },
  { src: "/images/orbit/client4.jpg", alt: "Client Partner 4" },
  { src: "/images/orbit/client5.jpg", alt: "Client Partner 5" },
  { src: "/images/orbit/client6.jpg", alt: "Client Partner 6" },
  { src: "/images/orbit/client7.jpg", alt: "Client Partner 7" },
  { src: "/images/orbit/client8.jpg", alt: "Client Partner 8" },
  { src: "/images/orbit/client9.jpg", alt: "Client Partner 9" },
  { src: "/images/orbit/client10.jpg", alt: "Client Partner 10" },
  { src: "/images/orbit/client11.jpg", alt: "Client Partner 11" },
  { src: "/images/orbit/client12.jpg", alt: "Client Partner 12" },
  { src: "/images/orbit/client13.jpg", alt: "Client Partner 13" },
  { src: "/images/orbit/client14.jpg", alt: "Client Partner 14" },
  { src: "/images/orbit/client15.jpg", alt: "Client Partner 15" },
  { src: "/images/orbit/client16.jpg", alt: "Client Partner 16" },
  { src: "/images/orbit/client17.jpg", alt: "Client Partner 17" },
  { src: "/images/orbit/client18.jpg", alt: "Client Partner 18" },
  { src: "/images/orbit/client19.jpg", alt: "Client Partner 19" },
  { src: "/images/orbit/client20.jpg", alt: "Client Partner 20" },
];

export function HomeClientsSection() {
  // Duplicate list to achieve a seamless, continuous right-to-left infinite loop
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200 overflow-hidden">
      <div className="container-x">
        {/* Section Heading */}
        <div className="mb-8">
          <SectionHeading
            title="Trusted by India's Industry Leaders & Research Institutions"
            subtitle="Powering quality and research testing at over 7,000 laboratories across thermal power, steel, petroleum, mining, and CSIR institutes."
          />
        </div>
      </div>

      {/* Infinite Horizontal Logo Marquee (Single line, moving right-to-left) */}
      <div className="relative mt-2 w-full overflow-hidden">
        {/* Left & Right gradient edge fades for smooth entry/exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="animate-marquee gap-4 py-2">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={idx}
              className="w-40 sm:w-48 h-20 sm:h-24 shrink-0 flex items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs hover:border-[#0056B3]/50 hover:shadow-md transition-all duration-200"
            >
              <div className="relative h-full w-full">
                <Image
                  src={withBasePath(logo.src)}
                  alt={logo.alt}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 160px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
