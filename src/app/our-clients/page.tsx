import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
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

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold uppercase tracking-[0.08em] ${
        dark ? "text-[#7fb2f0]" : "text-[#0056B3]"
      }`}
    >
      {children}
    </p>
  );
}

const h2Cls = "text-[1.65rem] font-semibold leading-tight tracking-[-0.015em] sm:text-[2.1rem]";

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

      {/* Split header: H1 and intro left; key figure on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />
        <div className="container-x relative grid grid-cols-1 items-center lg:grid-cols-[1.38fr_1fr]">
          <div className="min-w-0 py-8 sm:py-10 lg:py-14 lg:pr-14">
            <Eyebrow>Clients</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.2rem] lg:text-[2.6rem]">
              Our Clients
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
              Trusted by over 7,000 testing laboratories, research institutions, and industrial leaders across India and internationally for 35+ years.
            </p>
          </div>
          <dl className="-mx-4 my-0 grid min-w-0 grid-cols-2 gap-x-6 bg-[#f3f5f8] px-4 py-7 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid-cols-1 lg:bg-transparent lg:py-12 lg:pl-12 lg:pr-0">
            <div className="flex min-w-0 flex-col-reverse">
              <dt className="mt-2 text-[15px] text-[var(--ink-3)]">Testing laboratories</dt>
              <dd className="m-0 font-[family-name:var(--font-poppins)] text-[2.6rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] tnum sm:text-[4.25rem]">
                7,000+
              </dd>
            </div>
            <div className="flex min-w-0 flex-col-reverse lg:mt-8 lg:border-t lg:border-[#cfd6df] lg:pt-8">
              <dt className="mt-2 text-[15px] text-[var(--ink-3)]">Years</dt>
              <dd className="m-0 font-[family-name:var(--font-poppins)] text-[2.6rem] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)] tnum sm:text-[4.25rem]">
                35+
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 1. Domestic Client Logos */}
      <section className="py-14 sm:py-20 lg:py-[88px]">
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow>India</Eyebrow>
            <h2 className={`mt-3 text-[var(--ink)] ${h2Cls}`}>Partnering With India&apos;s Foremost Organizations</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-3)]">
              A representative selection of government corporations, Fortune 500 enterprises, and research bodies equipped by Orbit Technologies.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="cells mt-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {DOMESTIC_CLIENTS.map((client, idx) => (
              <div key={idx} className="flex h-24 min-w-0 items-center justify-center p-3 sm:h-28">
                <Image
                  src={withBasePath(client.src)}
                  alt={client.alt}
                  width={200}
                  height={90}
                  className="max-h-12 w-auto max-w-[85%] object-contain sm:max-h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. International Clients — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-20">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 top-10 h-[140px] opacity-35" />
        <div className="container-x relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <Eyebrow dark>Worldwide</Eyebrow>
            <h2 className={`mt-3 text-white ${h2Cls}`}>International Clients</h2>
            <p className="mt-3 text-base leading-relaxed text-[#c9d4e3]">
              Orbit analytical instruments and engineering solutions serving laboratories and testing facilities worldwide.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3">
            {INTERNATIONAL_CLIENTS.map((client, idx) => (
              <div key={idx} className="flex h-24 min-w-0 items-center justify-center rounded-md bg-white p-3 sm:h-28">
                <Image
                  src={withBasePath(client.src)}
                  alt={client.alt}
                  width={200}
                  height={90}
                  className="max-h-12 w-auto max-w-[85%] object-contain sm:max-h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
