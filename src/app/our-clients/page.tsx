import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Clients | 7,000+ Installations Across India | Orbit Technologies",
  description:
    "Orbit Technologies is trusted by over 7,000 laboratories across India and internationally, including NTPC, Tata Steel, JSW, Coal India, Reliance, CSIR institutes, and IITs.",
};

const DOMESTIC_CLIENTS = [
  // 10 Named Corporate & PSU Leaders
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

  // 20 Core Client Partners
  { src: "/images/orbit/client1.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client2.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client3.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client4.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client5.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client6.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client7.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client8.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client9.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client10.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client11.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client12.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client13.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client14.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client15.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client16.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client17.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client18.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client19.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client20.jpg", alt: "Client Partner" },

  // 11 Additional Industrial Partners
  { src: "/images/orbit/client-5.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-12.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-13.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-14.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-16.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-17.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-18.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-19.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-20.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-21.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client-22.jpg", alt: "Client Partner" },
];

const INTERNATIONAL_CLIENTS = [
  { src: "/images/orbit/internationalclient1.jpg", alt: "International Client 1" },
  { src: "/images/orbit/internationalclient2.jpg", alt: "International Client 2" },
  { src: "/images/orbit/internationalclient3.jpg", alt: "International Client 3" },
  { src: "/images/orbit/internationalclient4.jpg", alt: "International Client 4" },
  { src: "/images/orbit/internationalclient5.jpg", alt: "International Client 5" },
  { src: "/images/orbit/internationalclient6.jpg", alt: "International Client 6" },
];

export default function ClientsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Clients · Orbit Technologies Pvt. Ltd.",
    description:
      "Orbit Technologies serves over 7,000 testing laboratories across India and internationally including NTPC, Tata Steel, JSW, Coal India, Reliance, CSIR institutes, and IITs.",
  };

  return (
    <div className="bg-white">
      <JsonLd data={schema} />
      <Breadcrumb
        items={[
          { label: "Our Clients" },
        ]}
      />

      <PageHero
        title="Our Clients"
        subtitle="Trusted by over 7,000 testing laboratories, research institutions, and industrial leaders across India and internationally for 35+ years."
      />

      {/* 1. Domestic Client Logos */}
      <section className="container-x py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
            Partnering With India&apos;s Foremost Organizations
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A representative selection of government corporations, Fortune 500 enterprises, and research bodies equipped by Orbit Technologies.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {DOMESTIC_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="flex h-24 sm:h-28 items-center justify-center rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs transition hover:border-[#0056B3]/40 hover:shadow-sm"
            >
              <Image
                src={withBasePath(client.src)}
                alt={client.alt}
                width={200}
                height={90}
                className="max-h-12 sm:max-h-14 w-auto max-w-[85%] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 2. International Clients */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-12 sm:py-16 pb-16 sm:pb-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              International Clients
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Orbit analytical instruments and engineering solutions serving laboratories and testing facilities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 max-w-5xl mx-auto">
            {INTERNATIONAL_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="flex h-24 sm:h-28 items-center justify-center rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs transition hover:border-[#0056B3]/40 hover:shadow-sm"
              >
                <Image
                  src={withBasePath(client.src)}
                  alt={client.alt}
                  width={200}
                  height={90}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[85%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
