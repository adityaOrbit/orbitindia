export type NewsCategory =
  | "Product Launch"
  | "Product Spotlight"
  | "New Technology"
  | "Catalogue Update"
  | "Sample Preparation"
  | "Facility Milestone"
  | "Corporate Milestone";

export type EventStatus = "upcoming" | "past";

export type RelatedProductRef = {
  name: string;
  category: string;
  href: string;
  image: string;
  badge?: string;
};

export type NewsArticle = {
  slug: string;
  type: "news";
  title: string;
  subtitle: string;
  date: string;
  publishDate: string; // ISO date for sorting
  category: NewsCategory;
  summary: string;
  body: string[];
  highlights: string[];
  image: string;
  imageCaption?: string;
  readTime: string;
  specifications?: { label: string; value: string }[];
  standards?: string[];
  relatedProducts?: RelatedProductRef[];
};

export type EventArticle = {
  slug: string;
  type: "event";
  show: string;
  title: string;
  subtitle: string;
  date: string;
  startDate: string; // ISO date for sorting
  endDate?: string;
  status: EventStatus;
  location: string;
  venue: string;
  hall: string;
  booth: string;
  summary: string;
  body: string[];
  image: string;
  href?: string;
  highlights: string[];
  showcasedProducts?: RelatedProductRef[];
  boothHighlights?: string[];
  outcomes?: string[];
};

export type NewsOrEvent = NewsArticle | EventArticle;

// ==========================================
// DETAILED NEWS ARTICLES
// ==========================================

export const newsArticles: NewsArticle[] = [
  {
    slug: "parr-7400-automatic-isoperibol-calorimeter",
    type: "news",
    title: "Introduction of the Parr 7400 Automatic Isoperibol Calorimeter in India",
    subtitle:
      "Ultra-fast automated bomb calorimetry engineered for high-throughput coal, coke, fuel oil, and biomass testing laboratories.",
    date: "October 2026",
    publishDate: "2026-10-18",
    category: "Product Launch",
    summary:
      "Orbit Technologies, exclusive Indian representative for Parr Instrument Company (USA) since 1988, announces the commercial release of the Parr 7400 Automatic Isoperibol Calorimeter. Featuring automated vessel head closure, integrated closed-loop water handling, and test times under four minutes.",
    body: [
      "Orbit Technologies Pvt. Ltd., in partnership with Parr Instrument Company (Moline, Illinois, USA), is pleased to announce the nationwide launch of the Parr 7400 Automatic Isoperibol Calorimeter across India. Engineered specifically for high-capacity testing laboratories, the 7400 sets a new benchmark in calorific testing speed, operator safety, and automated sample throughput.",
      "The Parr 7400 introduces a fully automated vessel closure mechanism. Operators place the prepared sample crucible into the combustion head, and the instrument automatically lowers, seals, and fills the oxygen vessel to 30 bar. After combustion and measurement, the vessel is automatically depressurized and returned to the top opening without requiring physical lifting or manual bomb tightening by the technician.",
      "With an optimized dynamic isoperibol temperature jacket and closed-loop thermoelectrically cooled water circuit, the Parr 7400 delivers complete test cycle times under four minutes per sample. This represents a dramatic 40% reduction in turnaround time compared to traditional isoperibol calorimeters, allowing commercial testing labs, coal washeries, and mega thermal power stations to analyze over 60 samples per 8-hour shift on a single instrument.",
      "The system is fully compliant with all major international standard test methods including ASTM D5865, ASTM D4809, ASTM D240, ISO 1928, and Indian Standard IS 1350 (Part-II). Orbit Technologies provides complete turnkey installation, NABL-traceable benzoic acid calibration standards, comprehensive operator training, and annual maintenance contracts (AMC/CMC) supported by its 15 branch offices across India.",
    ],
    highlights: [
      "Automated bomb head closure, oxygen filling to 30 bar, and automatic pressure release.",
      "Rapid testing cycle under 4 minutes per sample — industry-leading throughput.",
      "Thermoelectrically regulated closed-loop water management with zero tap water consumption.",
      "10-inch color touchscreen interface with live temperature curve plotting and audit-ready data export.",
      "Full compliance with ASTM D5865 / D4809 / D240, ISO 1928, and IS 1350 (Part-II).",
      "Supported by Orbit's NABL-traceable 300-bar oxygen vessel testing center in Hyderabad.",
    ],
    image: "/images/products/calorimeter-7400.jpg",
    imageCaption:
      "Parr 7400 Automatic Isoperibol Calorimeter with automated vessel lifting and touchscreen controller.",
    readTime: "4 min read",
    specifications: [
      { label: "Operating Mode", value: "True Isoperibol (ASTM D5865 / ISO 1928)" },
      { label: "Testing Cycle Time", value: "< 4 minutes per test" },
      { label: "Temperature Resolution", value: "0.0001 °C (High-precision thermistor)" },
      { label: "Vessel Type", value: "Fixed bomb design with automated head sealing" },
      { label: "Oxygen Charging", value: "Automatic to 30 bar (435 psi) with safety interlock" },
      { label: "Water System", value: "Closed-loop thermoelectric jacket conditioning" },
      { label: "Precision (% RSD)", value: "≤ 0.05% on benzoic acid" },
      { label: "Data Connectivity", value: "Ethernet, USB, RS-232, LIMS export format" },
    ],
    standards: [
      "ASTM D5865 (Standard Test Method for Gross Calorific Value of Coal and Coke)",
      "ASTM D4809 (Heat of Combustion of Liquid Hydrocarbon Fuels)",
      "ASTM D240 (Heat of Combustion of Liquid Hydrocarbon Fuels by Bomb Calorimeter)",
      "ISO 1928 (Solid Mineral Fuels — Determination of Gross Calorific Value)",
      "IS 1350 Part-II (Indian Standard: Determination of Calorific Value)",
      "DIN 51900 (Determining Gross Calorific Value of Solid and Liquid Fuels)",
    ],
    relatedProducts: [
      {
        name: "7400 Automatic Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7400-automatic-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7400.jpg",
        badge: "Flagship",
      },
      {
        name: "7200 Precision Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7200-precision-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7200.jpg",
      },
      {
        name: "TGA 3000 Thermogravimetric Analyser",
        category: "Thermogravimetric Analysers",
        href: "/products/tga-3000",
        image: "/images/products/tga-3000.jpg",
      },
    ],
  },
  {
    slug: "parr-7200-precision-isoperibol-calorimeter",
    type: "news",
    title: "Parr 7200 Precision Isoperibol Calorimeter: True Calorific Accuracy",
    subtitle:
      "A modern, high-precision calorimeter featuring removable combustion vessels for research, fuel inspection, and specialty energetic materials.",
    date: "October 2026",
    publishDate: "2026-10-08",
    category: "Product Spotlight",
    summary:
      "Parr Instrument Company and Orbit introduce the 7200 Precision Calorimeter, designed for laboratories that require removable vessel flexibility combined with the high accuracy of a microprocessor-controlled isoperibol jacket.",
    body: [
      "For analytical laboratories, research institutes, and university chemical engineering departments that need the flexibility of removable bomb vessels with diverse metallurgies, Orbit Technologies introduces the Parr 7200 Precision Isoperibol Calorimeter.",
      "The 7200 accommodates Parr's renowned 1108 style oxygen combustion vessels, including standard stainless steel, halogen-resistant alloy 20, and platinum-lined vessels for corrosive fluorinated or chlorinated samples. This makes the 7200 an ideal instrument for hazardous waste characterization, municipal solid waste (MSW) combustion, and specialty fuels.",
      "Operating with an active circulating water jacket and microprocessor-controlled heating/cooling circuit, the Parr 7200 maintains strict jacket temperature stability within ±0.001°C throughout the test. Integrated electronic ignition and automatic calorimeter energy equivalent calculation eliminate manual calibration errors.",
      "The system comes pre-configured with multi-lingual user software, automatic temperature drift compensation, and direct balance connection for weight transfer, minimizing human data entry errors.",
    ],
    highlights: [
      "Accommodates standard and corrosion-resistant removable Parr combustion vessels.",
      "High thermal stability circulating water jacket with ±0.001°C regulation.",
      "Ideal for coal, heavy fuel oils, biomass pellets, municipal waste, and energetic propellants.",
      "Direct electronic balance interface and Ethernet LIMS integration.",
      "Full compliance with ASTM D5865, ASTM D240, and ISO 1928 standards.",
    ],
    image: "/images/products/calorimeter-7200.jpg",
    imageCaption:
      "Parr 7200 Precision Isoperibol Calorimeter with removable 1108 oxygen vessel and digital control unit.",
    readTime: "3 min read",
    specifications: [
      { label: "Jacket Type", value: "Isoperibol with active recirculating water jacket" },
      { label: "Bomb Vessel", value: "Removable Parr 1108 (Stainless Steel / Alloy 20)" },
      { label: "Test Duration", value: "6 to 8 minutes per determination" },
      { label: "Repeatability", value: "0.05% to 0.08% RSD on Benzoic Acid" },
      { label: "Temperature Resolution", value: "0.0001 °C" },
      { label: "Oxygen Pressure", value: "Up to 35 bar operating pressure" },
    ],
    standards: [
      "ASTM D5865 (Coal and Coke Gross Calorific Value)",
      "ASTM D240 (Liquid Hydrocarbon Fuels)",
      "ISO 1928 (Solid Mineral Fuels)",
      "ASTM D5468 (Waste Materials Gross Calorific Value)",
    ],
    relatedProducts: [
      {
        name: "7200 Precision Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7200-precision-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7200.jpg",
        badge: "Spotlight",
      },
      {
        name: "7400 Automatic Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7400-automatic-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7400.jpg",
      },
    ],
  },
  {
    slug: "oxygen-flask-combustion-unit-ofcu",
    type: "news",
    title: "Launch of Oxygen Flask Combustion Unit (OFCU) for Halide & Sulfur Digestion",
    subtitle:
      "Safe, automated combustion of organic samples for subsequent ion chromatography (IC) and ICP analysis.",
    date: "September 2026",
    publishDate: "2026-09-24",
    category: "Sample Preparation",
    summary:
      "The Oxygen Flask Combustion Unit (OFCU) replaces hazardous open Schoniger flask ignitions with an enclosed, microprocessor-controlled safety chamber for rapid halide (F, Cl, Br, I) and sulfur digestion.",
    body: [
      "Determining trace halides (fluorine, chlorine, bromine, iodine) and sulfur in organic compounds, polymers, petrochemicals, and pharmaceutical intermediates is a critical quality control requirement. The traditional Schoniger flask combustion method, while standardized, poses operator safety hazards due to manual infrared ignition and sudden pressure spikes.",
      "Orbit Technologies is proud to announce the introduction of the Oxygen Flask Combustion Unit (OFCU). This innovative benchtop digestion system automates the oxygen flask combustion process inside a reinforced blast-proof safety chamber with automatic electronic ignition.",
      "Samples are weighed onto ashless filter paper and placed within a platinum sample carrier inside a heavy-wall quartz flask. The chamber is purged with pure oxygen and ignited via an automated electrical arc or optical infrared burst. Upon combustion, gases are quantitatively absorbed into a designated absorbing liquid for immediate analysis by Ion Chromatography (IC) or ICP-OES.",
      "With automated safety interlocks, magnetic stirrer integration, and hands-free ignition, the OFCU brings high repeatability, zero sample cross-contamination, and unmatched lab safety to environmental, pharmaceutical, and polymer testing facilities.",
    ],
    highlights: [
      "Automated electronic ignition inside a heavy-gauge interlocked safety enclosure.",
      "Quantitative absorption of halides (F, Cl, Br, I) and sulfur for IC and ICP analysis.",
      "High-purity quartz combustion flask with platinum sample holder.",
      "Integrated magnetic stirring for rapid analyte dissolution into absorbing media.",
      "Complies with European Pharmacopoeia (EP 2.5.10) and ASTM D5194 / D7359.",
    ],
    image: "/images/products/ofcu.jpg",
    imageCaption:
      "Oxygen Flask Combustion Unit (OFCU) with automated safety interlock and quartz digestion chamber.",
    readTime: "3 min read",
    specifications: [
      { label: "Sample Capacity", value: "Up to 500 mg organic matter" },
      { label: "Combustion Vessel", value: "Heavy-wall quartz flask (500 mL / 1000 mL)" },
      { label: "Sample Carrier", value: "High-purity Platinum (Pt 99.9%) basket" },
      { label: "Ignition Method", value: "Focused electrical arc / Optical IR burst" },
      { label: "Safety Features", value: "Door interlock, pressure relief membrane, polycarbonate shield" },
      { label: "Stirring", value: "Integrated variable-speed magnetic drive" },
    ],
    standards: [
      "European Pharmacopoeia (Ph. Eur. 2.5.10 Oxygen Flask Method)",
      "USP <391> (Oxygen Flask Combustion)",
      "ASTM D7359 (Total Fluorine, Chlorine and Sulfur in Aromatic Hydrocarbons)",
      "ASTM D5194 (Trace Chloride in Liquid Aromatic Hydrocarbons)",
    ],
    relatedProducts: [
      {
        name: "Oxygen Flask Combustion Unit (OFCU)",
        category: "Sample Preparation",
        href: "/products",
        image: "/images/products/ofcu.jpg",
        badge: "New Release",
      },
    ],
  },
  {
    slug: "ad-fortis-fz-wp-fx-wp-ip68-balances",
    type: "news",
    title: "A&D Fortis FZ-WP & FX-WP Series: IP68 Washdown Precision Balances",
    subtitle:
      "Submersible dust and water-protected precision balances engineered for demanding chemical, mining, and food weighing environments.",
    date: "August 2026",
    publishDate: "2026-08-14",
    category: "New Technology",
    summary:
      "Orbit Technologies introduces the A&D Fortis FZ-WP and FX-WP Series precision balances featuring IP68 certified dust and waterproofing, allowing full submersion and high-pressure hose-down cleaning in hostile industrial labs.",
    body: [
      "Analytical and precision balances deployed in mineral testing laboratories, coal washeries, chemical formulation plants, and food processing facilities routinely suffer premature load cell failures caused by airborne dust and washdown water ingress.",
      "To address this critical industrial challenge, Orbit Technologies now supplies the A&D Fortis FZ-WP (internal calibration) and FX-WP (external calibration) Series precision balances across India. Rated to IP68 standards, the Fortis series can be fully submerged in water without compromising delicate weighing components.",
      "Powered by A&D's Compact Super Hybrid Sensor (C-SHS) technology, the Fortis balance delivers stabilization times under one second with readability down to 0.001 g (1 mg). The entire housing is constructed from chemical-resistant stainless steel (SUS304) with hermetically sealed display and keypad assemblies.",
      "The FZ-WP series features internal motorized calibration, automatically compensating for ambient temperature fluctuations (Automatic Self Calibration) and ensuring continuous GLP/GMP compliance in regulated manufacturing facilities.",
    ],
    highlights: [
      "IP68 dustproof and waterproof construction — washable under running water and submersible.",
      "Fast 1-second stabilization powered by Compact Super Hybrid Sensor (C-SHS).",
      "Chemical-resistant SUS304 stainless steel weighing pan and rugged housing.",
      "Internal calibration mechanism (FZ-WP) with automatic temperature-triggered self-calibration.",
      "GLP / GMP / GCP compliant data output with time, date, and serial number stamping.",
    ],
    image: "/images/products/ad-fortis.jpg",
    imageCaption:
      "A&D Fortis FZ-WP IP68 washdown precision balance with internal calibration and stainless steel pan.",
    readTime: "3 min read",
    specifications: [
      { label: "Ingress Protection", value: "IP68 (Dust-tight, protected against continuous submersion)" },
      { label: "Weighing Capacities", value: "122 g, 220 g, 320 g, 1220 g, 2200 g, 3200 g" },
      { label: "Readability", value: "0.001 g (1 mg) or 0.01 g (10 mg)" },
      { label: "Stabilization Time", value: "Approx. 1.0 second" },
      { label: "Calibration", value: "Internal Motorized (FZ-WP) / External (FX-WP)" },
      { label: "Pan Material", value: "Stainless Steel SUS304 (150 mm dia or 130 mm dia)" },
    ],
    standards: [
      "IEC 60529 (IP68 Degrees of Protection Provided by Enclosures)",
      "OIML R 76-1 / Class II Metrological Requirements",
      "GLP / GMP / ISO 9001 Compliant Audit Logging",
    ],
    relatedProducts: [
      {
        name: "A&D Fortis FZ-WP / FX-WP Series",
        category: "Laboratory Balances",
        href: "/precision-balances/",
        image: "/images/products/ad-fortis.jpg",
        badge: "IP68 Washdown",
      },
    ],
  },
  {
    slug: "tga-3000-automated-proximate-analysis",
    type: "news",
    title: "TGA 3000 Thermogravimetric Analyzer: Automated Proximate Analysis for Coal & Biomass",
    subtitle:
      "Simultaneous moisture, volatile matter, and ash determination for up to 19 samples in full compliance with ASTM D7582.",
    date: "July 2026",
    publishDate: "2026-07-22",
    category: "Catalogue Update",
    summary:
      "Orbit's TGA 3000 delivers unattended proximate analysis of coal, coke, and solid biofuels. Its 19-position carousel and integrated analytical balance eliminate manual muffle furnace transfers.",
    body: [
      "Traditional proximate analysis of solid fuels requires tedious manual transfers between drying ovens, volatile matter furnaces, and ashing furnaces, exposing samples to ambient moisture re-absorption and operator handling errors.",
      "The TGA 3000 Thermogravimetric Analyzer, available from Orbit Technologies, automates moisture, volatile matter, and ash determination in a single, unattended automated run. The instrument features a precision 19-sample ceramic carousel integrated with an internal analytical balance boasting 0.0001 g resolution.",
      "During the test cycle, the dual-zone heating chamber raises the temperature up to 1000°C under programmed nitrogen and oxygen gas atmospheres. The carousel rotates continuously, weighing each crucible at set time intervals to record the exact mass loss curve until thermal equilibrium is achieved.",
      "Fully compliant with ASTM D7582 and ISO 17246, the TGA 3000 reduces technician labor by over 75% while dramatically improving batch-to-batch precision for coal preparation plants, power utilities, cement kilns, and metallurgical coking facilities.",
    ],
    highlights: [
      "19 sample positions analyzed in a single unattended run.",
      "Integrated analytical balance with 0.1 mg (0.0001 g) resolution.",
      "Temperature range from ambient to 1000°C with automated atmosphere switching (N2 / O2).",
      "Complete automated proximate analysis: Moisture, Volatile Matter, Ash, and Fixed Carbon.",
      "Full compliance with ASTM D7582, ISO 17246, and Indian Standard IS 1350.",
    ],
    image: "/images/products/tga-3000.jpg",
    imageCaption:
      "TGA 3000 Thermogravimetric Analyzer featuring automated 19-sample carousel and dual-atmosphere furnace.",
    readTime: "4 min read",
    specifications: [
      { label: "Sample Capacity", value: "19 sample crucibles + 1 reference crucible" },
      { label: "Sample Weight", value: "0.5 g to 5.0 g per sample" },
      { label: "Balance Resolution", value: "0.0001 g (0.1 mg)" },
      { label: "Furnace Temperature", value: "Ambient to 1000 °C" },
      { label: "Atmosphere Control", value: "Automated gas switching between Nitrogen and Oxygen" },
      { label: "Analysis Parameters", value: "Moisture, Volatile Matter, Ash, Fixed Carbon" },
    ],
    standards: [
      "ASTM D7582 (Standard Test Methods for Proximate Analysis of Coal and Coke by Macro TGA)",
      "ISO 17246 (Coal — Proximate Analysis)",
      "ISO 11722 / ISO 1171 (Solid Mineral Fuels Moisture & Ash)",
      "IS 1350 Part-I (Proximate Analysis of Coal and Coke)",
    ],
    relatedProducts: [
      {
        name: "TGA 3000 Thermogravimetric Analyser",
        category: "Thermogravimetric Analysers",
        href: "/products/tga-3000",
        image: "/images/products/tga-3000.jpg",
        badge: "ASTM D7582",
      },
      {
        name: "7400 Automatic Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7400-automatic-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7400.jpg",
      },
    ],
  },
  {
    slug: "300-bar-parr-oxygen-vessel-hydrotesting-facility",
    type: "news",
    title: "Commissioning of India's Only NABL-Traceable 300-Bar Parr Oxygen Vessel Hydrotesting Facility",
    subtitle:
      "Orbit expands its central service engineering laboratory in Hyderabad with certified 300-bar hydrostatic proof testing and ultrasonic flaw detection.",
    date: "May 2026",
    publishDate: "2026-05-12",
    category: "Facility Milestone",
    summary:
      "To ensure maximum operator safety across India's power and testing sectors, Orbit Technologies commissions an upgraded hydrostatic pressure proof testing center in Hyderabad for Parr oxygen bombs and high-pressure reactors.",
    body: [
      "High-pressure oxygen combustion vessels operate under intense cyclic mechanical and chemical stress. Over hundreds of firings, micro-fissures and thread wear can develop, making mandatory periodic hydrostatic proof testing an indispensable safety requirement under ASME and Parr factory safety guidelines.",
      "Orbit Technologies has completed the commissioning of its upgraded, NABL-traceable 300-bar (4,350 psi) Hydrostatic Pressure Vessel Testing Facility at its Hyderabad headquarters. This makes Orbit the only authorized facility in South Asia equipped to perform OEM-certified proof testing and vessel recertification for Parr oxygen bombs and stirred reactors.",
      "The testing protocol includes precision ultrasonic wall thickness profiling, microscopic thread flank inspection, 300-bar hydrostatic pressure holding with zero pressure loss verification, and comprehensive ultrasonic flaw detection. Each tested vessel receives an official Certificate of Proof Testing and safety logbook update.",
      "This facility supports hundreds of thermal power stations, commercial coal testing agencies, and pharmaceutical chemical synthesis plants across India, preventing catastrophic vessel failures and keeping laboratory personnel safe.",
    ],
    highlights: [
      "Authorized OEM hydrostatic proof testing up to 300 bar (4,350 psi).",
      "NABL-traceable digital pressure logging and ultrasonic wall thickness verification.",
      "Microscopic screw-thread flank and sealing shoulder wear analysis.",
      "Official safety recertification and issuance of Proof Test Certificates.",
      "Over 450 oxygen vessels and high-pressure reactors recertified annually.",
    ],
    image: "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
    imageCaption:
      "Specialized 300-bar hydrostatic testing containment rig at Orbit Technologies Hyderabad central laboratory.",
    readTime: "3 min read",
    specifications: [
      { label: "Maximum Test Pressure", value: "300 bar (4,350 psi) hydrostatic proof test" },
      { label: "Measurement Accuracy", value: "± 0.25% Full Scale NABL calibrated pressure transducer" },
      { label: "Testing Medium", value: "De-ionized water with anti-corrosion conditioning" },
      { label: "Inspection Methods", value: "Hydrostatic hold, Ultrasonic flaw detection, Optical thread profiling" },
      { label: "Applicable Vessels", value: "Parr 1108, 1108CL, 1104, 1109, and Parr stirred reactors (4520, 4560, 4570)" },
    ],
    standards: [
      "ASME Boiler and Pressure Vessel Code Section VIII",
      "Parr Instrument Company Oxygen Bomb Safety Bulletin No. 201M",
      "ISO 9001:2015 Certified Quality Procedures",
    ],
    relatedProducts: [
      {
        name: "Reactors and Pressure Systems",
        category: "Reactors",
        href: "/reactors/",
        image: "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
      },
    ],
  },
  {
    slug: "orbit-technologies-35-years-excellence",
    type: "news",
    title: "Celebrating 35+ Years of Service to Indian Science, Power, and Metallurgy",
    subtitle:
      "Orbit Technologies marks over three decades of partnership with global instrumentation pioneers and over 7,000 installations across the subcontinent.",
    date: "January 2026",
    publishDate: "2026-01-10",
    category: "Corporate Milestone",
    summary:
      "Founded in 1988, Orbit Technologies reflects on 35+ years of pioneering analytical instrumentation distribution, indigenous manufacturing through Orlab, and nationwide service support.",
    body: [
      "Since its inception in 1988, Orbit Technologies Pvt. Ltd. has stood at the intersection of international scientific innovation and Indian industrial growth. What began as a dedicated partnership with Parr Instrument Company (USA) has evolved into one of the subcontinent's most trusted analytical instrumentation enterprises.",
      "Today, Orbit supports over 7,000 active instrument installations spanning critical national sectors: thermal power utilities (NTPC, Adani, Tata Power), steel conglomerates (SAIL, Tata Steel, JSW), commercial inspection agencies (SGS, Cotecna, Mitra S.K.), CSIR research institutes, and leading universities.",
      "Complementing its distribution heritage, Orbit established Orlab Instruments Pvt. Ltd., an indigenous manufacturing division operating from a state-of-the-art 30,000 sq ft facility in Hyderabad, producing over 200,000 water and soil testing kits annually.",
      "With a network of 15 regional sales and service offices staffed by factory-trained application engineers, Orbit enters 2026 committed to driving next-generation analytical automation, rapid response customer service, and unmatched technical integrity.",
    ],
    highlights: [
      "35+ years of technical leadership in calorimetry, reactors, and elemental analysis.",
      "Over 7,000 instrument installations across India, Bangladesh, Sri Lanka, and the Middle East.",
      "Exclusive partnership with Parr Instrument Company (USA) since 1988.",
      "15 regional branch offices providing immediate on-site technical support.",
      "Indigenous manufacturing capability through Orlab Instruments Pvt. Ltd. (ISO 9001:2015).",
    ],
    image: "/images/orbit/1341-Fully-Automatic-Isope.jpg",
    imageCaption:
      "Orbit Technologies 35-year legacy: from classic Parr oxygen bomb calorimeters to today's automated isoperibol analyzers.",
    readTime: "3 min read",
    specifications: [
      { label: "Year Established", value: "1988 (Hyderabad, India)" },
      { label: "Active Installations", value: "7,000+ scientific instruments" },
      { label: "Branch Offices", value: "15 offices across North, South, East, and West India" },
      { label: "Quality Certification", value: "ISO 9001:2015 Certified" },
      { label: "Core Principals", value: "Parr Instrument, NCS, NC Tech, Elite, Sylab, A&D" },
    ],
    relatedProducts: [
      {
        name: "About Orbit Technologies",
        category: "Corporate",
        href: "/about-us",
        image: "/images/orbit/1341-Fully-Automatic-Isope.jpg",
      },
    ],
  },
];

// ==========================================
// UPCOMING & PAST EXHIBITIONS / EVENTS
// ==========================================

export const eventArticles: EventArticle[] = [
  {
    slug: "arablab-live-2026",
    type: "event",
    show: "Arablab Live 2026",
    title: "Arablab Live 2026 – Dubai World Trade Centre",
    subtitle:
      "The global laboratory and chemical analytics event. Meet Orbit Technologies and explore our next-generation calorimeters and stirred reactors.",
    date: "26th – 28th October 2026",
    startDate: "2026-10-26",
    endDate: "2026-10-28",
    status: "upcoming",
    location: "Dubai World Trade Centre, Dubai, United Arab Emirates",
    venue: "Dubai World Trade Centre (DWTC), Sheikh Zayed Road, Dubai, UAE",
    hall: "Hall No. 3",
    booth: "SSH3-B66",
    summary:
      "Arablab Live is the foremost international exhibition for laboratory technology and analytical instrumentation in the Middle East and South Asia. Orbit Technologies showcases Parr's new 7400 Calorimeter and high-pressure reactor technologies.",
    body: [
      "Orbit Technologies is proud to announce its official participation at Arablab Live 2026, taking place at the Dubai World Trade Centre from 26th to 28th October 2026. As one of the world's most influential trade events for laboratory science and analytical chemistry, Arablab attracts buyers and technical leaders from over 120 countries.",
      "At Stall SSH3-B66 in Hall 3, Orbit Technologies will host live product demonstrations led by senior application specialists. Visitors will experience the newly introduced Parr 7400 Automatic Isoperibol Calorimeter, designed for under 4-minute calorific determinations, as well as the versatile TGA 3000 Thermogravimetric Analyzer.",
      "Furthermore, our engineering team will showcase specialized high-pressure stirred reactor solutions (Parr Series 4520 and 4560), magnetic drive agitators, and custom pilot plant configurations for petrochemical, catalyst development, and supercritical fluid applications.",
      "We invite research directors, laboratory managers, chemical engineers, and regional distributors to visit our booth for personalized one-on-one technical consultations. Pre-booking a meeting ensures dedicated time with our engineering specialists.",
    ],
    image: "/images/events/arablab-2026.jpg",
    href: "https://www.arablab.com/",
    highlights: [
      "Live demonstration of the new Parr 7400 Automatic Isoperibol Calorimeter.",
      "Display of Parr stirred high-pressure reactors and magnetic drive couplings.",
      "TGA 3000 automated proximate analysis demonstration for solid fuels and biomass.",
      "Consultation on custom multi-reactor pilot plants and continuous flow systems.",
      "Discussion on calibration standards, spares, and regional distributor partnerships.",
    ],
    boothHighlights: [
      "Hall No. 3, Stand SSH3-B66 (Sheikh Saeed Hall 3)",
      "Live instrument power demos every hour between 11:00 AM and 4:00 PM",
      "Technical consultations with Orbit engineering leaders & Parr factory specialists",
      "Complimentary technical literature and application whitepapers available",
    ],
    showcasedProducts: [
      {
        name: "7400 Automatic Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7400-automatic-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7400.jpg",
        badge: "Live Demo",
      },
      {
        name: "Series 4520 Benchtop Stirred Reactor",
        category: "Reactors",
        href: "/reactors/",
        image: "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
      },
      {
        name: "TGA 3000 Thermogravimetric Analyser",
        category: "Thermogravimetric Analysers",
        href: "/products/tga-3000",
        image: "/images/products/tga-3000.jpg",
      },
    ],
  },
  {
    slug: "chemtech-world-expo-2026",
    type: "event",
    show: "ChemTECH World Expo 2026",
    title: "ChemTECH World Expo 2026 – Mumbai",
    subtitle:
      "South Asia's premier chemical processing and refining exhibition. Discover Orbit's pilot reactors, tubular systems, and elemental analyzers.",
    date: "4th – 7th March 2026",
    startDate: "2026-03-04",
    endDate: "2026-03-07",
    status: "upcoming",
    location: "Bombay Exhibition Centre (NESCO), Goregaon East, Mumbai, Maharashtra",
    venue: "Hall 1, Bombay Exhibition Centre, Western Express Highway, Goregaon, Mumbai 400063",
    hall: "Hall 1",
    booth: "Stand D-14",
    summary:
      "ChemTECH World Expo brings together over 20,000 chemical engineers, plant managers, and researchers. Orbit Technologies showcases pilot plant reactors, tubular flow systems, and certified autoclave equipment.",
    body: [
      "Orbit Technologies returns to ChemTECH World Expo 2026 at the Bombay Exhibition Centre (NESCO) in Mumbai. As South Asia's leading international gathering for the chemical, petrochemical, and refining industries, ChemTECH offers an unparalleled venue to explore cutting-edge processing hardware.",
      "At Stand D-14 in Hall 1, Orbit will feature Parr 5400 Continuous Flow Tubular Reactors, high-temperature high-pressure autoclaves engineered from Hastelloy and Inconel, and non-destructive 300-bar vessel safety inspection methodologies.",
      "Chemical process development engineers from leading pharmaceutical, specialty chemical, and polymer corporations will have the opportunity to discuss their reaction kinetics, catalyst screening challenges, and scale-up parameters directly with Orbit's technical team.",
    ],
    image: "/images/events/pmec.jpg",
    highlights: [
      "Showcasing Parr Continuous Flow Tubular Reactors (Series 5400) and Fluidized Bed systems.",
      "Specialty metallurgy reactors in Hastelloy C-276, Titanium, Monel, and Zirconium.",
      "Live demonstrations of magnetic drive agitators with zero shaft leakage.",
      "Safety systems, burst rupture discs, and automated emergency quench protocols.",
    ],
    boothHighlights: [
      "Hall 1, Stand D-14 (Near Process Equipment Pavilion)",
      "Daily technical seminars on continuous flow chemistry scale-up",
      "One-on-one application reviews for high-pressure hydrogenations",
    ],
    showcasedProducts: [
      {
        name: "Continuous Flow Tubular Reactors",
        category: "Reactors",
        href: "/reactors/",
        image: "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
      },
      {
        name: "7400 Automatic Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7400-automatic-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7400.jpg",
      },
    ],
  },
  {
    slug: "pmec-india-2023",
    type: "event",
    show: "PMEC India 2023",
    title: "PMEC India 2023 – Pharmaceutical Machinery & Equipment Expo",
    subtitle:
      "Over 1,200 pharmaceutical and API manufacturers visited the Orbit pavilion to explore high-pressure hydrogenation autoclaves and magnetic drive systems.",
    date: "28th November – 30th November 2023",
    startDate: "2023-11-28",
    endDate: "2023-11-30",
    status: "past",
    location: "India Expo Centre, Greater Noida, Delhi NCR",
    venue: "India Exposition Mart Ltd., Knowledge Park II, Greater Noida, UP 201306",
    hall: "Hall No. 14",
    booth: "Stand No. D58",
    summary:
      "PMEC India is South Asia's leading pharma machinery event co-located with CPHI. Orbit Technologies highlighted laboratory and pilot-scale stirred reactors designed for API synthesis and catalytic hydrogenation.",
    body: [
      "The 2023 edition of PMEC India, held at the India Expo Centre in Greater Noida, brought together key decision-makers across the pharmaceutical formulation, API synthesis, and contract research sectors.",
      "Orbit Technologies presented its comprehensive portfolio of Parr stirred pressure reactors, micro-reactors, and high-pressure catalytic hydrogenation systems at Stand D58 in Hall 14. Particular interest focused on Parr's seal-less magnetic drive agitators, which completely eliminate shaft packing contamination in sensitive pharmaceutical synthesis.",
      "Over 1,200 technical delegates visited the Orbit stall over three days, resulting in more than 450 deep-dive technical consultations and multiple pilot reactor commitments from leading Indian pharma companies.",
    ],
    image: "/images/events/pmec.jpg",
    highlights: [
      "Featured Parr 4590 Micro Reactor systems with 25 mL to 100 mL vessels for rapid catalyst screening.",
      "Demonstration of seal-less magnetic drive agitators with zero cross-contamination risk.",
      "Consultation on cGMP compliance, validation protocols, and 21 CFR Part 11 data logging.",
    ],
    outcomes: [
      "Over 1,200 registered pharmaceutical and API professionals visited the Orbit booth.",
      "450+ detailed technical inquiries and custom reactor engineering consultations logged.",
      "Successful delivery of 14 custom hydrogenation systems directly following the exhibition.",
    ],
    showcasedProducts: [
      {
        name: "Series 4520 Benchtop Stirred Reactor",
        category: "Reactors",
        href: "/reactors/",
        image: "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
      },
    ],
  },
  {
    slug: "india-lab-expo-2023",
    type: "event",
    show: "India Lab Expo 2023",
    title: "India Lab Expo 2023 – HITEX Hyderabad",
    subtitle:
      "India's premier lab exhibition held in Hyderabad, home to Orbit Technologies headquarters. Unveiling the TGA 3000 to over 600 visiting lab directors.",
    date: "14th September – 16th September 2023",
    startDate: "2023-09-14",
    endDate: "2023-09-16",
    status: "past",
    location: "HITEX Exhibition Centre, Hyderabad, Telangana",
    venue: "HITEX Exhibition Centre, Izzat Nagar, Madhapur, Hyderabad, Telangana 500084",
    hall: "Hall No. 2",
    booth: "Stall No. L31",
    summary:
      "India Lab Expo in Hyderabad served as a hometown showcase for Orbit Technologies, featuring live demonstrations of automated calorimeters, thermogravimetric analyzers, and Orlab analytical kits.",
    body: [
      "India Lab Expo 2023 at HITEX Hyderabad provided a remarkable hometown platform for Orbit Technologies to welcome customers, university partners, and testing laboratories from across the country.",
      "At Stall L31 in Hall 2, Orbit displayed its full analytical spectrum: the Parr 6400 and 6200 isoperibol calorimeters, the newly introduced TGA 3000 Thermogravimetric Analyzer, A&D analytical balances, and indigenous water testing solutions from Orlab Instruments.",
      "Technical seminars conducted by Orbit application engineers on ASTM D5865 compliance and moisture-loss error reduction drew packed audiences of laboratory chemists and quality heads.",
    ],
    image: "/images/events/india-lab-expo.jpg",
    highlights: [
      "Hometown showcase in Hyderabad with participation of senior leadership and service engineers.",
      "Live demonstration of automated proximate analysis using the TGA 3000 carousel.",
      "Hands-on demonstration of Orlab water and soil analytical kits for environmental monitoring.",
    ],
    outcomes: [
      "Over 600 laboratory directors, chemists, and university researchers visited the stall.",
      "Conducted 8 hands-on technical sessions on coal and fuel quality testing standards.",
      "Awarded Best Instrument Display Stall in the Analytical Equipment pavilion.",
    ],
    showcasedProducts: [
      {
        name: "TGA 3000 Thermogravimetric Analyser",
        category: "Thermogravimetric Analysers",
        href: "/products/tga-3000",
        image: "/images/products/tga-3000.jpg",
      },
      {
        name: "7400 Automatic Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7400-automatic-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7400.jpg",
      },
    ],
  },
  {
    slug: "arablab-2023",
    type: "event",
    show: "Arablab 2023",
    title: "Arablab 2023 – Dubai International Convention Centre",
    subtitle:
      "International analytical showcase connecting Gulf petrochemical, environmental, and testing laboratories with Orbit's engineering leaders.",
    date: "19th September – 21st September 2023",
    startDate: "2023-09-19",
    endDate: "2023-09-21",
    status: "past",
    location: "Sheikh Saeed Halls, Dubai International Convention Centre, UAE",
    venue: "Dubai International Convention Centre, Sheikh Zayed Rd, Dubai, UAE",
    hall: "Hall No. S3",
    booth: "Stand No. 1127",
    summary:
      "Connecting analytical buyers across the Middle East, North Africa, and the Indian subcontinent, Orbit demonstrated Parr bomb calorimeters and high-pressure reactor technologies.",
    body: [
      "Arablab 2023 marked another successful milestone in Orbit Technologies' international outreach. Operating from Stand 1127 in Sheikh Saeed Hall 3, the Orbit team engaged with laboratory professionals from Saudi Arabia, UAE, Qatar, Oman, and African nations.",
      "Discussions centered on Parr's extreme-environment reactor vessels, automated isoperibol calorimeters for refinery fuel testing, and Orbit's specialized supply chain for NABL-traceable reference standards and consumables.",
    ],
    image: "/images/events/arablab-2026.jpg",
    highlights: [
      "Met with over 350 laboratory managers from the GCC and MENA regions.",
      "Strengthened regional distribution partnerships for Parr consumables and calorimeter spares.",
      "Presented technical solutions for heavy crude oil characterization and sulfur determination.",
    ],
    outcomes: [
      "Over 350 international delegates visited the Orbit stand.",
      "Secured 8 international supply contracts for bomb calorimeter spares and calibration standards.",
    ],
    showcasedProducts: [
      {
        name: "7200 Precision Isoperibol Calorimeter",
        category: "Calorimeters",
        href: "/products/7200-precision-isoperibol-calorimeter",
        image: "/images/products/calorimeter-7200.jpg",
      },
    ],
  },
];

// ==========================================
// UNIFIED HELPERS
// ==========================================

export function getAllNews(): NewsArticle[] {
  return [...newsArticles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getAllEvents(): EventArticle[] {
  return [...eventArticles].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getUpcomingEvents(): EventArticle[] {
  return eventArticles
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export function getPastEvents(): EventArticle[] {
  return eventArticles
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

export function getAllNewsOrEvents(): NewsOrEvent[] {
  const news = getAllNews();
  const eventsList = getAllEvents();
  // Return upcoming events first, then newest news, then past events
  return [
    ...eventsList.filter((e) => e.status === "upcoming"),
    ...news,
    ...eventsList.filter((e) => e.status === "past"),
  ];
}

export function getNewsOrEventBySlug(slug: string): NewsOrEvent | undefined {
  const n = newsArticles.find((item) => item.slug === slug);
  if (n) return n;
  return eventArticles.find((item) => item.slug === slug);
}

export function getAllNewsAndEventSlugs(): string[] {
  return [
    ...newsArticles.map((n) => n.slug),
    ...eventArticles.map((e) => e.slug),
  ];
}

// ==========================================
// BACKWARD COMPATIBILITY EXPORTS
// ==========================================

export type LegacyNewsItem = {
  date: string;
  title: string;
  category: string;
  body: string;
};

export const latestNews: LegacyNewsItem[] = newsArticles.map((n) => ({
  date: n.date,
  title: n.title,
  category: n.category,
  body: n.summary,
}));

export type LegacyEventItem = {
  date: string;
  show: string;
  location: string;
  hall: string;
  image?: string;
  href?: string;
};

export const events: LegacyEventItem[] = eventArticles.map((e) => ({
  date: e.date,
  show: e.show,
  location: e.location,
  hall: `${e.hall}, ${e.booth}`,
  image: e.image,
  href: e.href,
}));

export type LatestProduct = {
  name: string;
  category: string;
  image: string;
  badge: string;
  href: string;
};

export const latestProducts: LatestProduct[] = [
  {
    name: "7400 Automatic Isoperibol Calorimeter",
    category: "Calorimeters",
    image: "/images/products/calorimeter-7400.jpg",
    badge: "Product spotlight",
    href: "/products/7400-automatic-isoperibol-calorimeter",
  },
  {
    name: "7200 Precision Isoperibol Calorimeter",
    category: "Calorimeters",
    image: "/images/products/calorimeter-7200.jpg",
    badge: "New in 2026",
    href: "/products/7200-precision-isoperibol-calorimeter",
  },
  {
    name: "TGA 3000 Thermogravimetric Analyser",
    category: "Thermogravimetric Analysers",
    image: "/images/products/tga-3000.jpg",
    badge: "Featured",
    href: "/products/tga-3000",
  },
  {
    name: "Oxygen Flask Combustion Unit (OFCU)",
    category: "Sample Preparation",
    image: "/images/products/ofcu.jpg",
    badge: "New product",
    href: "/products",
  },
  {
    name: "A&D Fortis FZ(-WP)/FX(-WP) Series",
    category: "Laboratory Balances",
    image: "/images/products/ad-fortis.jpg",
    badge: "New product",
    href: "/precision-balances/",
  },
];
