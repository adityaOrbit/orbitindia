import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Flame,
  Factory,
  Pickaxe,
  Beaker,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Clients | 7,000+ Installations Across India | Orbit Technologies",
  description:
    "Orbit Technologies is trusted by India's largest power producers, steel manufacturers, coal corporations, CSIR institutes, IITs, and testing laboratories including NTPC, Tata Steel, JSW, Coal India, and Reliance.",
};

interface ClientGroup {
  sector: string;
  icon: typeof Flame;
  description: string;
  clients: { name: string; location?: string; instruments?: string }[];
}

const CLIENT_GROUPS: ClientGroup[] = [
  {
    sector: "Thermal Power & Energy Utilities",
    icon: Flame,
    description: "Equipping India's largest power generation utilities with automatic bomb calorimeters and proximate analyzers for daily coal GCV billing.",
    clients: [
      { name: "NTPC Limited", location: "Singrauli, Korba, Ramagundam, Vindhyachal, Dadri, Talcher", instruments: "Parr 6400 Calorimeters & TGA 3000" },
      { name: "Tata Power", location: "Mundra UMPP, Trombay, Jojobera", instruments: "Parr Bomb Calorimeters & Ash Fusion" },
      { name: "Adani Power", location: "Mundra, Tiroda, Kawai, Udupi", instruments: "Parr 6400 Automatic Calorimeters" },
      { name: "Damodar Valley Corporation (DVC)", location: "Mejia, Bokaro, Chandrapura, Koderma", instruments: "Calorimetry & Elemental CS" },
      { name: "Reliance Power", location: "Sasan Ultra Mega Power Project", instruments: "Parr Calorimeters & TGA" },
      { name: "CESC Limited", location: "Budge Budge & Titagarh", instruments: "Coal Analysis Suite" },
      { name: "State Electricity Boards", location: "APGENCO, TSGENCO, Mahagenco, GSECL, WBPDCL", instruments: "Calorimeters & Ash Fusion" },
    ],
  },
  {
    sector: "Steel & Metallurgical Giants",
    icon: Factory,
    description: "High-frequency induction combustion analyzers for heat-level carbon, sulfur, and ONH determination.",
    clients: [
      { name: "Tata Steel Limited", location: "Jamshedpur, Kalinganagar, Meramandali", instruments: "NCS Carbon/Sulfur & High Temp Furnaces" },
      { name: "JSW Steel", location: "Vijayanagar, Dolvi, Salem", instruments: "Elemental CS Analyzers & Pellet Presses" },
      { name: "Steel Authority of India (SAIL)", location: "Bhilai, Bokaro, Rourkela, Durgapur, IISCO", instruments: "Parr Calorimeters & NCS CS Analyzers" },
      { name: "Jindal Steel & Power (JSPL)", location: "Raigarh, Angul", instruments: "Induction CS Analyzers & Tube Furnaces" },
      { name: "Vedanta Limited / Sesa Goa / BALCO", location: "Jharsuguda, Korba, Goa", instruments: "Elemental Analyzers & Ash Fusion" },
      { name: "Hindalco Industries", location: "Aditya Aluminium, Renukoot", instruments: "High Temperature Furnaces & Calorimeters" },
      { name: "AM/NS India (ArcelorMittal Nippon Steel)", location: "Hazira", instruments: "Inorganic Elemental Analyzers" },
    ],
  },
  {
    sector: "Coal Mining & Mineral Resources",
    icon: Pickaxe,
    description: "Turnkey sample preparation, crushing, milling, and analytical testing at pithead and washery labs.",
    clients: [
      { name: "Coal India Limited (CIL)", location: "SECL, ECL, CCL, WCL, BCCL, NCL", instruments: "Calorimeters, Proximate Analyzers, Mills" },
      { name: "Singareni Collieries Company (SCCL)", location: "Kothagudem, Ramagundam, Bellampalli", instruments: "Parr Bomb Calorimeters & TGA 3000" },
      { name: "NMDC Limited", location: "Bailadila Iron Ore, Donimalai", instruments: "SIEBTECHNIK TEMA Mills & Balances" },
      { name: "Central Mine Planning & Design (CMPDI)", location: "Ranchi, Nagpur, Bilaspur", instruments: "Complete Coal Testing Laboratory Equipment" },
      { name: "Tata Sponge Iron / Tata Steel Mining", location: "Joda, Sukinda", instruments: "Carbon Sulfur Analyzers & Fusion Systems" },
    ],
  },
  {
    sector: "Cement & Mineral Processing",
    icon: Building2,
    description: "Elemental oxide verification, raw meal LOI determination, and high-temperature clinkering evaluation.",
    clients: [
      { name: "UltraTech Cement Limited", location: "30+ Plants Across India", instruments: "TGA Proximate Analyzers & Lab Mills" },
      { name: "ACC Limited & Ambuja Cements", location: "Wadi, Jamul, Chanda, Gagal", instruments: "Thermogravimetric Analyzers & Furnaces" },
      { name: "Shree Cement Limited", location: "Ras, Beawar, Raipur", instruments: "Elemental Analyzers & High Temp Furnaces" },
      { name: "Dalmia Bharat Cement", location: "Dalmiapuram, Rajgangpur, Belgaum", instruments: "Calorimeters & Sample Prep Mills" },
      { name: "J.K. Cement & J.K. Lakshmi Cement", location: "Nimbahera, Mangrol, Sirohi", instruments: "Proximate Analyzers & Bomb Calorimeters" },
    ],
  },
  {
    sector: "Petroleum Refineries & Chemicals",
    icon: Beaker,
    description: "High-pressure catalytic hydrogenation autoclaves and organic elemental microanalysis.",
    clients: [
      { name: "Reliance Industries Limited (RIL)", location: "Jamnagar World's Largest Refining Complex", instruments: "Parr High-Pressure Autoclaves & Reactors" },
      { name: "Indian Oil Corporation Limited (IOCL)", location: "Panipat, Mathura, Paradip, Vadodara, R&D Faridabad", instruments: "Parr Stirred Reactors & CHNS Analyzers" },
      { name: "Bharat Petroleum (BPCL)", location: "Mumbai & Kochi Refineries, R&D Sewree", instruments: "High Pressure Reactors & Reaction Calorimeters" },
      { name: "Hindustan Petroleum (HPCL)", location: "Visakhapatnam, Mumbai, Green R&D Bengaluru", instruments: "Parr Autoclaves & Sulfur Analyzers" },
      { name: "Oil & Natural Gas Corporation (ONGC)", location: "Dehradun, Ahmedabad, Rajahmundry", instruments: "High Pressure High Temp Autoclaves" },
      { name: "GAIL (India) Limited", location: "Pata Petrochemical Complex", instruments: "Catalytic Stirred Reactors & Gas Analyzers" },
    ],
  },
  {
    sector: "Premier Scientific & Academic Research (CSIR & IITs)",
    icon: GraduationCap,
    description: "Fundamental and applied research in catalysis, energy storage, clean coal, and advanced ceramics.",
    clients: [
      { name: "CSIR-CIMFR (Mining & Fuel Research)", location: "Dhanbad, Bilaspur, Ranchi, Nagpur", instruments: "Full Bomb Calorimetry Suite & TGA" },
      { name: "CSIR-IICT (Chemical Technology)", location: "Hyderabad", instruments: "Parr High Pressure Reactors & CHNS/O" },
      { name: "CSIR-NML (National Metallurgical Lab)", location: "Jamshedpur", instruments: "High Temp Tube Furnaces & CS Analyzers" },
      { name: "CSIR-NCL (National Chemical Laboratory)", location: "Pune", instruments: "Parr Stirred Autoclaves & Micro-Reactors" },
      { name: "Indian Institutes of Technology (IITs)", location: "Bombay, Madras, Delhi, Kharagpur, Roorkee, Kanpur, Hyderabad", instruments: "Parr Reactors, Elite Furnaces, NC Technologies" },
      { name: "Indian Institute of Science (IISc)", location: "Bangalore", instruments: "High Temperature Tube Furnaces & Autoclaves" },
      { name: "Bhabha Atomic Research Centre (BARC)", location: "Mumbai & Kalpakkam", instruments: "Custom High-Pressure Vessels & Furnaces" },
      { name: "DRDO Laboratories (DMRL, HEMRL)", location: "Hyderabad & Pune", instruments: "High Pressure Systems & Thermal Analyzers" },
    ],
  },
  {
    sector: "Commercial Inspection & Testing Laboratories (TIC)",
    icon: ShieldCheck,
    description: "NABL-accredited third-party inspection agencies handling high-throughput coal and cargo testing.",
    clients: [
      { name: "SGS India Private Limited", location: "Kolkata, Mumbai, Paradip, Vizag, Gandhidham", instruments: "Parr 6400 Calorimeters & TGA 3000" },
      { name: "Bureau Veritas India", location: "Kolkata, Chennai, Jamnagar", instruments: "Automatic Bomb Calorimeters & Proximate" },
      { name: "Intertek India", location: "Dhamra, Haldia, Mundra", instruments: "Coal Testing Calorimeters" },
      { name: "Inspectorate Griffith India", location: "Kolkata, Bhubaneswar, Goa", instruments: "Parr Calorimeters & Sample Prep Mills" },
      { name: "Vimta Labs Limited", location: "Hyderabad Genome Valley", instruments: "Elemental Analyzers & Balances" },
      { name: "Mitra S.K. Private Limited", location: "Kolkata, Barbil, Kakinada", instruments: "Ash Fusion & Bomb Calorimeters" },
    ],
  },
];

export default function ClientsPage() {
  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Clients" },
        ]}
      />

      <PageHero
        eyebrow="Proven Track Record Across 35+ Years"
        title="Our Clients — Trusted by India's Industrial & Research Leaders"
        subtitle="Orbit Technologies stands distinguished with over 7,000 installations across coal mining, thermal power generation, steel, cement, petrochemicals, CSIR institutes, and premier IITs."
      />

      {/* Sector-by-Sector Directory */}
      <section className="container-x py-12 sm:py-14 space-y-16">
        {CLIENT_GROUPS.map((group, groupIdx) => {
          const Icon = group.icon;
          return (
            <div key={groupIdx} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#002f49]/5 text-[#c4620a]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-[#002f49] sm:text-2xl">
                      {group.sector}
                    </h2>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 self-start sm:self-auto">
                  {group.clients.length} Key Clients
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.clients.map((c, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex flex-col justify-between rounded-xl border border-slate-100 bg-[#f9fafb] p-4.5 transition hover:border-[#c4620a]/40 hover:bg-white hover:shadow-xs"
                  >
                    <div>
                      <h3 className="font-bold text-sm text-[#002f49]">{c.name}</h3>
                      {c.location && (
                        <p className="mt-1 text-xs text-slate-500">
                          📍 {c.location}
                        </p>
                      )}
                    </div>
                    {c.instruments && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200/60">
                        <span className="text-[11px] font-semibold text-[#c4620a]">
                          {c.instruments}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Client Feedback & Why They Choose Orbit */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow text-[#c4620a]">Customer Testimonials</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#002f49] sm:text-3xl">
              What India&apos;s Leading Laboratories Say About Orbit
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Reliability, ASTM standard accuracy, and prompt service response define our customer relationships.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Orbit's Parr 6400 bomb calorimeters have been the workhorse of our coal quality testing laboratory for over 15 years. Their annual hydrostatic proof-testing and prompt spare support give us complete peace of mind for daily commercial billing.",
                author: "Chief Chemist & Lab Head",
                org: "Prominent 2,600 MW Thermal Power Station",
              },
              {
                quote:
                  "The TGA 3000 proximate analyzer drastically reduced our coal proximate analysis turnaround time from 4 hours down to automated runs. The local engineering team in Bilaspur always attends to our preventive maintenance calls on time.",
                author: "General Manager (Quality Control)",
                org: "Leading Public Sector Coal Washery",
              },
              {
                quote:
                  "For high-pressure catalytic synthesis at 200 bar, we rely exclusively on Parr stirred autoclaves supplied by Orbit Technologies. Their engineering assistance during SAT and custom reactor piping design was exemplary.",
                author: "Principal Scientist & Professor",
                org: "National Institute of Chemical Research",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <p className="text-xs sm:text-sm italic leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-[#002f49]">{t.author}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client CTA Banner */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-2xl bg-[#002f49] p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-block rounded-md bg-[#ff8d0a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-black">
                Join India&apos;s Leading Labs
              </span>
              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Equip Your Laboratory with the Industry Standard
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Connect with an Orbit application specialist to discuss instrumentation packages, tender specifications, or customer reference visits in your region.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact-us#quote" className="btn btn-accent">
                Request Laboratory Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Explore Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
