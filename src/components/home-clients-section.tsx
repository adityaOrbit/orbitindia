import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/utils";

const clientLogos = [
  { src: "/images/orbit/bharatpetroleum.jpg", alt: "Bharat Petroleum" },
  { src: "/images/orbit/shreecement.jpg", alt: "Shree Cement" },
  { src: "/images/orbit/ambujacement.jpg", alt: "Ambuja Cement" },
  { src: "/images/orbit/CentralAgriculture.jpg", alt: "Central Agriculture University" },
  { src: "/images/orbit/GFL.jpg", alt: "Gujarat Fluorochemicals" },
  { src: "/images/orbit/HBL.jpg", alt: "HBL Power Systems" },
  { src: "/images/orbit/kesoram.jpg", alt: "Kesoram Industries" },
  { src: "/images/orbit/mangalamcement.jpg", alt: "Mangalam Cement" },
  { src: "/images/orbit/mpl.jpg", alt: "Maithon Power Limited" },
  { src: "/images/orbit/ministry.jpg", alt: "Ministry of Defence" },
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
];

export function HomeClientsSection() {
  // Named client logos first; the strip shows 12 and links to the full list.
  const logos = [
    ...clientLogos.filter((l) => !l.alt.startsWith("Client Partner")),
    ...clientLogos.filter((l) => l.alt.startsWith("Client Partner")),
  ].slice(0, 12);

  return (
    <section className="border-y border-[var(--line)] py-12 sm:py-14">
      <div className="container-x grid items-center gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
        <div>
          <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold leading-snug text-[var(--ink)]">
            Trusted by India&apos;s Industry Leaders &amp; Research Institutions
          </h2>
          <p className="mt-1.5 text-sm text-[var(--ink-3)]">
            Powering quality and research testing at over 7,000 laboratories across thermal power, steel, petroleum, mining, and CSIR institutes.
          </p>
          <Link href="/our-clients/" className="link-more mt-3 min-h-[44px] text-sm lg:min-h-0">
            All clients <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.src} className="flex h-12 items-center justify-center">
              <Image
                src={withBasePath(logo.src)}
                alt={logo.alt}
                width={160}
                height={70}
                className="max-h-11 w-auto max-w-full object-contain opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
