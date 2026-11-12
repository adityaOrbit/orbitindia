export interface Principal {
  slug: string;
  name: string;
  brandKey: string;
  country: string;
  flag: string;
  headquarters: string;
  founded: string;
  partnershipYears: string;
  tagline: string;
  description: string;
  fullHistory: string;
  logo: string;
  heroImage: string;
  coreCategories: string[];
  certifications: string[];
  keyHighlights: string[];
}

export const PRINCIPALS: Principal[] = [
  {
    slug: "parr",
    name: "Parr Instrument Company",
    brandKey: "Parr Instrument Company",
    country: "USA",
    flag: "🇺🇸",
    headquarters: "Moline, Illinois, USA",
    founded: "1899",
    partnershipYears: "35+ Years (Since 1989)",
    tagline: "World Pioneer in Oxygen Bomb Calorimetry & High-Pressure Chemical Reactors",
    description:
      "For more than 125 years, Parr Instrument Company has designed and manufactured oxygen bomb calorimeters, high-pressure laboratory stirred reactors, tubular reactors, and acid digestion vessels used globally in fuel analysis, polymer research, petrochemical catalysis, and biotechnology.",
    fullHistory:
      "Founded in 1899 by Professor S.W. Parr at the University of Illinois, Parr invented the oxygen bomb calorimeter that became the foundation for modern ASTM and ISO standard methods of measuring gross calorific value. Today, Parr operates precision ASME-certified pressure vessel manufacturing in Moline, Illinois. Orbit Technologies has been Parr's exclusive distributor, service provider, and hydrotesting certification partner in India for over 35 years.",
    logo: "/images/orbit/parr.jpg",
    heroImage: "/images/orbit/parr.jpg",
    coreCategories: [
      "Oxygen Bomb Calorimeters",
      "Stirred Chemical Autoclaves (Series 4500, 5500, 4590)",
      "Tubular & Fluidized Bed Reactor Systems",
      "Acid Digestion Vessels (Teflon-lined)",
      "Hydrogenation & Catalysis Screening Apparatus",
    ],
    certifications: ["ASME Section VIII Div 1", "ISO 9001:2015", "CE / PED Compliance", "CSA Certified"],
    keyHighlights: [
      "Exclusive Indian partnership with Orbit Technologies since 1989",
      "India's only certified 300-bar oxygen vessel hydrostatic proof-testing center in Hyderabad",
      "Installed in over 500+ Indian thermal power plants, cement plants, and academic universities",
      "Compliant with ASTM D5865, ISO 1928, ASTM D240, and BIS 1350 (Part II)",
    ],
  },
  {
    slug: "ncs",
    name: "NCS Testing Technology GmbH",
    brandKey: "NCS Testing Technology",
    country: "Germany",
    flag: "🇩🇪",
    headquarters: "Düsseldorf, Germany",
    founded: "1983",
    partnershipYears: "15+ Years",
    tagline: "Precision Inorganic Carbon/Sulfur & ONH Elemental Analyzers",
    description:
      "NCS Germany is a leading manufacturer of high-frequency combustion elemental analyzers for carbon and sulfur determination in metals, ores, cement, and coal, as well as inert gas fusion analyzers for oxygen, nitrogen, and hydrogen (ONH) in iron, steel, titanium, and refractory alloys.",
    fullHistory:
      "Engineered with German precision, NCS Testing Technology GmbH delivers high-frequency induction furnaces coupled with multi-cell solid-state infrared detectors. Designed for demanding 24/7 metallurgical laboratories, NCS analyzers provide sub-ppm sensitivity and rapid 40-second analysis times across metallurgical heats.",
    logo: "/images/orbit/ncsgermany-distributor.jpg",
    heroImage: "/images/orbit/ncsgermany-distributor.jpg",
    coreCategories: [
      "High-Frequency Induction Carbon & Sulfur Analyzers (CS-8800)",
      "Resistance Furnace CS Analyzers for Coal & Minerals (CS-9900)",
      "Oxygen, Nitrogen & Hydrogen (ONH) Analyzers",
      "Spark Optical Emission Spectrometers (OES)",
    ],
    certifications: ["ISO 9001:2015", "TÜV Rheinland", "CE European Conformity"],
    keyHighlights: [
      "Widely installed across Tata Steel, JSW, SAIL, and commercial testing laboratories",
      "Solid-state non-dispersive infrared (NDIR) detector technology with dual gold-plated cells",
      "Compliant with ASTM E1019, ASTM E1941, ISO 9556, and ISO 15350",
      "Direct spare parts stocking in Hyderabad for combustion tubes, accelerators, and dust filters",
    ],
  },
  {
    slug: "nc-technologies",
    name: "NC Technologies SRL",
    brandKey: "NC Technologies",
    country: "Italy",
    flag: "🇮🇹",
    headquarters: "Milan, Italy",
    founded: "1994",
    partnershipYears: "12+ Years",
    tagline: "Advanced Organic Elemental Analysis (CHNS/O)",
    description:
      "NC Technologies is an Italian pioneer in dynamic flash combustion organic elemental analyzers, delivering precise Carbon, Hydrogen, Nitrogen, Sulfur, and Oxygen quantification for agricultural, environmental, petrochemical, and pharmaceutical matrices.",
    fullHistory:
      "Originating from the legacy of Carlo Erba and Fisons Instruments in Milan, the engineering team behind NC Technologies revolutionized Dumas-method organic elemental analysis. Featuring high-precision thermal conductivity detectors (TCD) and front-cut chromatographic separation, NC Technologies analyzers handle sample sizes from micro (0.1 mg) to macro (1000 mg) without matrix interference.",
    logo: "/images/orbit/orbit-distrubutor2.jpg",
    heroImage: "/images/orbit/orbit-distrubutor2.jpg",
    coreCategories: [
      "ECS 8020 / ECS 8060 CHNS-O Elemental Analyzers",
      "Nitrogen / Protein Dumas Analyzers",
      "Total Organic Carbon (TOC) & Inorganic Carbon (TIC) Modules",
      "High-Capacity Autosamplers (120-position pneumatic carousels)",
    ],
    certifications: ["ISO 9001:2015", "CE Certified", "GLP / GMP Software Compliance"],
    keyHighlights: [
      "Patented autosampler with pneumatic drop mechanism preventing mechanical jams",
      "Compliant with ASTM D5291, ASTM D5373, AOAC 992.15, and ISO 16634",
      "Used across IIT research chemistry labs, fertilizer testing institutes, and soil testing centers",
      "Consumable-efficient design reducing Helium/Argon consumption by up to 40%",
    ],
  },
  {
    slug: "elite",
    name: "Elite Thermal Systems Ltd",
    brandKey: "Elite Thermal Systems",
    country: "United Kingdom",
    flag: "🇬🇧",
    headquarters: "Market Harborough, Leicestershire, UK",
    founded: "1995",
    partnershipYears: "10+ Years",
    tagline: "High-Temperature Laboratory & Light Industrial Furnaces up to 1850°C",
    description:
      "Elite Thermal Systems specializes in the design and manufacture of high-temperature laboratory chamber furnaces, horizontal and vertical tube furnaces, split-tube furnaces, and atmosphere-controlled thermal processing systems.",
    fullHistory:
      "Manufactured in England, Elite Thermal Systems furnaces utilize premium Silicon Carbide (SiC) and Molybdenum Disilicide (MoSi2) heating elements paired with low-thermal-mass insulation boards. The company is renowned for thermal uniformity, rapid heat-up curves, and robust Eurotherm programmable temperature controllers with digital communications.",
    logo: "/images/orbit/elite.jpg",
    heroImage: "/images/orbit/elite.jpg",
    coreCategories: [
      "High Temperature Tube Furnaces (1200°C – 1850°C)",
      "Split-Tube Furnaces for Chemical Vapor Deposition (CVD)",
      "Chamber / Muffle Furnaces for Ashing and Heat Treatment",
      "Controlled Atmosphere & Vacuum Tube Systems",
    ],
    certifications: ["ISO 9001:2015", "CE Certified", "British Engineering Standards"],
    keyHighlights: [
      "Over 26 models catalogued for metallurgical sintering, glass melting, and ceramic research",
      "Uniform zone heating with multi-zone PID cascade control",
      "Heavy-duty double-skin casing with fan cooling keeping outer surfaces safe to touch",
      "Comprehensive replacement elements and ceramic work tubes stocked in India",
    ],
  },
  {
    slug: "sylab",
    name: "Sylab S.A.R.L.",
    brandKey: "Sylab",
    country: "France",
    flag: "🇫🇷",
    headquarters: "Metz, France & Hyderabad, India",
    founded: "1988",
    partnershipYears: "20+ Years",
    tagline: "Ash Fusion Determinator & Thermogravimetric Coal Testing Systems",
    description:
      "Sylab France is an internationally recognized specialist in fuel testing equipment, notably coal ash fusibility determination, proximate thermogravimetric analyzers, and high-temperature furnace systems, with joint manufacturing operations in India.",
    fullHistory:
      "Developed in partnership with French coal and metallurgy research boards, Sylab's IF-2000G ash fusion determinator transformed manual pyrometric cone observation into an automated, multi-cone digital video analysis system adhering to ISO 540, ASTM D1857, and DIN 51730.",
    logo: "/images/orbit/orbit-distrubutor1.jpg",
    heroImage: "/images/orbit/orbit-distrubutor1.jpg",
    coreCategories: [
      "IF-2000G Automatic Ash Fusibility Determinator",
      "TGA-1500 / TGA-3000 Thermogravimetric Proximate Analyzers",
      "Coal Reactivity & Coking Laboratory Equipment",
    ],
    certifications: ["ISO 9001:2015", "CE Compliance"],
    keyHighlights: [
      "Simultaneous testing of up to 4 or 8 coal ash cones in oxidizing or reducing atmospheres",
      "Automatic detection of Initial Deformation (IT), Softening (ST), Hemispherical (HT), and Fluid (FT) temperatures",
      "Manufactured and serviced in India under Orbit Technologies / Orlab Instruments group",
      "Standard equipment in NTPC, Tata Power, and independent inspection laboratories",
    ],
  },
  {
    slug: "elemental-microanalysis",
    name: "Elemental Microanalysis Ltd",
    brandKey: "Elemental Microanalysis",
    country: "United Kingdom",
    flag: "🇬🇧",
    headquarters: "Okehampton, Devon, United Kingdom",
    founded: "1976",
    partnershipYears: "20+ Years",
    tagline: "World's Largest Independent Manufacturer of Consumables & CRMs",
    description:
      "Elemental Microanalysis produces certified reference materials (CRMs), high-purity catalysts, quartz combustion and reduction tubes, tin/silver capsules, and reagents compatible with all leading brands of elemental and thermal analyzers.",
    fullHistory:
      "Operating from modern UKAS-accredited laboratories in Devon, UK, Elemental Microanalysis has supplied high-purity consumables for nearly 50 years. Orbit Technologies serves as the authorized direct distributor in India, ensuring prompt delivery of certified standards traceable to NIST and BCR.",
    logo: "/images/orbit/orbit-distrubutor1.jpg",
    heroImage: "/images/orbit/orbit-distrubutor1.jpg",
    coreCategories: [
      "Certified Reference Materials (Coal, Coke, Soil, Petroleum, Steel)",
      "High-Purity Tin, Silver & Aluminium Capsules",
      "Quartz & Ceramic Combustion Tubes",
      "Reagents: Copper Oxide, Silver Vanadate, Tungsten Granules, Anhydrone",
    ],
    certifications: ["ISO 9001", "ISO 17025 Calibration", "ISO 17034 CRM Producer"],
    keyHighlights: [
      "NIST-traceable calibration standards for CHNS/O, Carbon/Sulfur, and Oxygen Bomb Calorimetry",
      "Direct cross-compatibility with Parr, NCS, NC Technologies, Elementar, and Thermo instruments",
      "Huge local buffer inventory maintained at Orbit's Hyderabad logistics center",
    ],
  },
  {
    slug: "siebtechnik-tema",
    name: "SIEBTECHNIK TEMA GmbH",
    brandKey: "SIEBTECHNIK TEMA",
    country: "Germany",
    flag: "🇩🇪",
    headquarters: "Mülheim an der Ruhr, Germany",
    founded: "1909",
    partnershipYears: "10+ Years",
    tagline: "World Leader in Laboratory Milling, Crushing & Screening Systems",
    description:
      "SIEBTECHNIK TEMA is a global leader in sample preparation machinery for minerals, ores, coal, clinker, and ceramics, including vibratory disc mills, jaw crushers, hammer mills, and analytical sieving machines.",
    fullHistory:
      "Founded in 1909 in Germany's Ruhr industrial heartland, SIEBTECHNIK TEMA manufactures industrial and laboratory equipment engineered for extreme duty cycles. Orbit distributes and supports SIEBTECHNIK TEMA vibratory disc mills (TS series) and jaw crushers across mining and metallurgy quality control labs.",
    logo: "/images/orbit/ncsgermany-distributor.jpg",
    heroImage: "/images/orbit/ncsgermany-distributor.jpg",
    coreCategories: [
      "Vibratory Disc Mills (TS 250, TS 1000) with Tungsten Carbide / Agate grinding sets",
      "Laboratory Jaw Crushers (EB series)",
      "Air Jet & Vibratory Analytical Sieve Shakers",
      "Automatic Sample Reducers & Riffle Splitters",
    ],
    certifications: ["ISO 9001:2015", "CE Machine Directive", "DIN Standards"],
    keyHighlights: [
      "Rapid reduction of hard minerals and coal samples down to analytical fineness (< 75 microns)",
      "Soundproofed enclosures with ergonomic safety interlocks for operator protection",
      "Zero cross-contamination between consecutive geological samples",
    ],
  },
  {
    slug: "extratex",
    name: "Extratex",
    brandKey: "Extratex",
    country: "France",
    flag: "🇫🇷",
    headquarters: "Nancy, France",
    founded: "2010",
    partnershipYears: "8+ Years",
    tagline: "Supercritical CO2 Extraction & High-Pressure Fluid Technology",
    description:
      "Extratex is an innovative French engineering company specializing in supercritical CO2 extraction, fractionation, and high-pressure impregnation autoclaves for nutraceutical, pharmaceutical, cosmetic, and advanced materials applications.",
    fullHistory:
      "Born out of French academic research in supercritical fluids, Extratex designs turn-key supercritical fluid extraction (SFE) pilot plants from 500 mL up to 100-liter production systems. Orbit Technologies represents Extratex in India, assisting universities and chemical manufacturers in green, solvent-free extraction projects.",
    logo: "/images/orbit/extratex.jpg",
    heroImage: "/images/orbit/extratex.jpg",
    coreCategories: [
      "Supercritical CO2 Extraction Pilot Plants",
      "High-Pressure Static / Dynamic Extraction Autoclaves",
      "CO2 Recycling & Multi-Stage Separation Units",
      "Subcritical Water Extraction Systems",
    ],
    certifications: ["CE / PED 2014/68/EU", "ISO 9001:2015", "ATEX Compliant"],
    keyHighlights: [
      "Pressures up to 1000 bar and temperatures up to 200°C",
      "100% solvent-free botanical, lipid, and essential oil extraction",
      "Automated touchscreen control with data logging for recipe repeatability",
    ],
  },
  {
    slug: "denatec",
    name: "Denatec Ltd",
    brandKey: "DENATEC",
    country: "United Kingdom",
    flag: "🇬🇧",
    headquarters: "Lancashire, United Kingdom",
    founded: "2008",
    partnershipYears: "6+ Years",
    tagline: "Bespoke High-Pressure Autoclaves, Flanges & Subsea Testing Chambers",
    description:
      "Denatec is a specialist British engineering house providing bespoke high-pressure reaction vessels, quick-opening autoclaves, subsea hyperbaric test chambers, and extreme-environment process rigs.",
    fullHistory:
      "Denatec engineers extreme pressure equipment for defense, nuclear, subsea oil & gas, and advanced materials testing. Orbit distributes Denatec's specialized autoclaves and quick-opening pressure containment systems across Indian R&D centers.",
    logo: "/images/orbit/orbit-distrubutor2.jpg",
    heroImage: "/images/orbit/orbit-distrubutor2.jpg",
    coreCategories: [
      "Custom Quick-Acting Pressure Autoclaves",
      "Hyperbaric Simulation Test Vessels",
      "Corrosion-Resistant Hastelloy, Inconel & Monel Pressure Vessels",
    ],
    certifications: ["PED / CE Compliant", "ASME VIII Design", "UKCA Certified"],
    keyHighlights: [
      "Pressures up to 2,000 bar with custom temperature control jackets",
      "Patented clamp-ring and bayonet quick-closure mechanisms",
      "Designed for extreme corrosion, sour gas (H2S), and supercritical media",
    ],
  },
  {
    slug: "a-and-d",
    name: "A&D Company Ltd",
    brandKey: "A&D Company",
    country: "Japan",
    flag: "🇯🇵",
    headquarters: "Tokyo, Japan",
    founded: "1977",
    partnershipYears: "15+ Years",
    tagline: "Precision Micro-Balances, Analytical Balances & Moisture Determiners",
    description:
      "A&D Company is a Japanese measurement manufacturer renowned for precision analytical balances, semi-micro balances, moisture analyzers, and viscometers utilizing patented Super Hybrid Sensor (SHS) technology.",
    fullHistory:
      "Founded in Tokyo in 1977, A&D has pioneered measurement electronics. Its laboratory balances provide lightning-fast 1-second stabilization time, internal motorized self-calibration, and GLP/GMP compliance.",
    logo: "/images/orbit/orbit-distrubutor1.jpg",
    heroImage: "/images/orbit/orbit-distrubutor1.jpg",
    coreCategories: [
      "Semi-Micro Analytical Balances (0.01 mg resolution)",
      "High-Precision Analytical Balances (HR-A / HR-AZ series)",
      "Halogen Moisture Analyzers (MS / MX / MF series)",
      "Vibro Viscometers & Specific Gravity Kits",
    ],
    certifications: ["ISO 9001", "ISO 14001", "NMI / OIML Legal Metrology Certified"],
    keyHighlights: [
      "Patented Compact Super Hybrid Sensor (C-SHS) technology",
      "Essential weighing component pairing with Parr Calorimeters and NC Technologies Elemental Analyzers",
      "Internal calibration weight with automatic temperature compensation",
    ],
  },
];
