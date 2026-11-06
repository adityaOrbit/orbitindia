export interface KnowledgeArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  standards: string[];
  summary: string;
  recommendedProductSlugs: string[];
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
    formula?: string;
    tip?: string;
  }[];
}

export interface StandardOperatingProcedure {
  id: string;
  docNumber: string;
  revision: string;
  title: string;
  category: "Calorimetry" | "Thermogravimetry" | "Ash Fusibility" | "Pressure Reactors" | "Weighing & Balances";
  targetEquipment: string;
  standards: string[];
  summary: string;
  safetyPrecautions: string[];
  equipmentRequired: string[];
  reagents: string[];
  stepByStepProcedure: {
    stepNumber: number;
    title: string;
    instruction: string;
    checkPoint?: string;
  }[];
  calculations?: string;
  troubleshooting: {
    issue: string;
    cause: string;
    remedy: string;
  }[];
}

export interface KnowledgeUseCase {
  id: string;
  clientType: string;
  sector: string;
  location: string;
  title: string;
  challenge: string;
  solution: string;
  equipmentDeployed: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
}

export interface InteractiveToolMeta {
  id: string;
  title: string;
  badge: string;
  description: string;
  category: "Fuel & Calorimetry" | "Calorimeter Calibration" | "Reactor Engineering" | "Ash & Combustion";
  formulaPreview: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: "Brochure" | "Application Note" | "Standards Matrix" | "Utility Guide" | "Whitepaper PDF";
  format: "PDF" | "XLSX" | "DOCX";
  fileSize: string;
  description: string;
  downloadUrl: string;
  tags: string[];
  featured?: boolean;
}

// ==========================================
// 1. LEARNING HUB (BLOGS & WHITEPAPERS)
// ==========================================

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    slug: "proximate-analysis-of-coal",
    title: "Automated Proximate Analysis of Coal & Coke via Macro Thermogravimetry",
    subtitle: "A Complete Guide to ASTM D7582 and ISO 17246 Automated Testing",
    category: "Coal & Fuel Testing",
    readTime: "8 min read",
    date: "November 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASTM D7582", "ISO 17246", "IS 1350 (Part I)"],
    summary:
      "Understand how modern macro-thermogravimetric analyzers (TGA 3000) automate simultaneous determination of Moisture, Volatile Matter, and Ash in up to 19 coal samples in a single programmed cycle, eliminating manual muffle furnace transfers.",
    recommendedProductSlugs: [
      "tga-3000-thermogravimetric-analyzer",
      "tga-1500-catalogue",
      "6400-automatic-isoperibol-calorimeter",
    ],
    sections: [
      {
        heading: "1. The Evolution of Coal Proximate Testing",
        content:
          "For decades, proximate analysis of coal—determining moisture, volatile matter, ash, and fixed carbon by difference—required multiple manual muffle furnaces, desiccators, and tedious repeated weighing cycles according to ASTM D3172. This traditional multi-furnace method was labor-intensive, operator-dependent, and prone to rapid moisture reabsorption during transfer in humid plant environments.",
      },
      {
        heading: "2. The ASTM D7582 Macro-TGA Principle",
        content:
          "ASTM D7582 standardizes the determination of proximate constituents using an automated macro-thermogravimetric analyzer (such as the TGA 3000). A sample carousel holding up to 19 ceramic crucibles (each with 1.000 g of 212-micron coal) is sequentially presented to an internal, temperature-compensated analytical balance inside an enclosed, atmosphere-programmable furnace chamber.",
        bulletPoints: [
          "Moisture Phase: The furnace heats to 105–110°C under an inert Nitrogen purge until constant sample weight is reached.",
          "Volatile Matter Phase: The chamber ramps rapidly up to 950°C under Nitrogen cover with automated crucible lidding to prevent oxidation, driving off volatile hydrocarbons.",
          "Ashing Phase: The furnace cools to 600°C, switches gas purge to pure Oxygen, and heats to 750°C to combust all organic carbon down to mineral ash residue.",
          "Fixed Carbon: Automatically computed as 100% minus the sum of % Moisture, % Volatile Matter, and % Ash.",
        ],
      },
      {
        heading: "3. Calculation Equations",
        content:
          "The internal software records continuous mass loss curves throughout each temperature ramp, calculating yields on an 'As-Received' (ar), 'Air-Dried' (ad), and 'Dry' (db) basis according to standard formulas:",
        formula:
          "Moisture (%) = ((M1 - M2) / (M1 - M0)) × 100\nVolatile Matter (%) = ((M2 - M3) / (M1 - M0)) × 100\nAsh (%) = ((M4 - M0) / (M1 - M0)) × 100\nFixed Carbon (%) = 100 - [Moisture + Volatile Matter + Ash]",
      },
      {
        heading: "4. Practical Application in Indian Power Stations",
        content:
          "Indian thermal coal typically features high mineral ash contents ranging from 35% to 50%, alongside abrasive silica and alumina quartz grains. The TGA 3000 features dual thermocouple temperature monitoring and heavy-duty carousel indexing designed specifically for demanding Indian coals, cutting total analysis turnaround from 4 hours down to 90 minutes for 19 samples.",
        tip: "Always ensure nitrogen purity is ≥ 99.999% during the volatile matter phase to prevent premature sample oxidation before the 950°C plateau.",
      },
    ],
  },
  {
    slug: "bomb-calorimetry-gcv",
    title: "Gross Calorific Value (GCV) Determination by Isoperibol Bomb Calorimetry",
    subtitle: "Precision Energy Measurement Standards Under ASTM D5865 & ISO 1928",
    category: "Calorimetry & Energy",
    readTime: "9 min read",
    date: "November 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASTM D5865 / D5865M", "ISO 1928", "ASTM D240", "BIS 1350 (Part II)"],
    summary:
      "A technical deep dive into high-precision bomb calorimetry: energy equivalent calibration (W-value), acid correction titrations, isoperibol jacket thermodynamics, and oxygen combustion vessel maintenance proof-tested up to 300 bar.",
    recommendedProductSlugs: [
      "6400-automatic-isoperibol-calorimeter",
      "6050-automatic-pc-based-calorimeter",
      "oxygen-combustion-vessel",
      "1341-plain-jacket-calorimeter",
    ],
    sections: [
      {
        heading: "1. The Significance of GCV in Commercial Fuel Billing",
        content:
          "In the power generation and coal trading sectors, Gross Calorific Value (GCV)—also termed Higher Heating Value (HHV)—dictates millions of dollars in monthly commercial settlements between mining companies (such as Coal India) and thermal power utilities (such as NTPC). Even a 10 kcal/kg measurement bias across a 2,000 MW station can translate into massive financial discrepancies.",
      },
      {
        heading: "2. The Isoperibol Calorimetric Principle",
        content:
          "In an isoperibol calorimeter (such as the Parr 6400 or Parr 7400), an accurately weighed coal sample (1.0000 g) is placed inside an oxygen combustion vessel charged with 30 atmospheres (450 psi) of pure oxygen. The vessel is immersed in a stirred water bucket surrounded by a precisely thermostatted water jacket maintained at a constant temperature (typically within ±0.001°C).",
        bulletPoints: [
          "Pre-Period: Digital thermistors log baseline drift to establish equilibrium.",
          "Combustion Reaction: An electrical fuse fires, initiating instantaneous ignition of the coal charge.",
          "Post-Period: The temperature rise of the bucket water is monitored until a steady cooling curve is confirmed.",
          "Microprocessor Correction: Software calculates heat exchange between bucket and jacket using Dickinson's or Regnault-Pfaundler's thermodynamic formula.",
        ],
      },
      {
        heading: "3. Calibration & Standardization with Benzoic Acid",
        content:
          "The calorimeter energy equivalent (W-value or effective heat capacity) must be calibrated using high-purity, NIST-traceable Benzoic Acid pellets having a certified calorific value (typically 26,454 J/g ± 20 J/g).",
        formula:
          "W = (H × m + e1 + e2) / ΔT\n\nWhere:\n• W = Energy equivalent of calorimeter (J/°C or cal/°C)\n• H = Certified heat of combustion of benzoic acid (J/g)\n• m = Mass of benzoic acid pellet (g)\n• e1 = Heat of formation of nitric acid correction\n• e2 = Heat of combustion of firing wire\n• ΔT = Net corrected temperature rise (°C)",
      },
      {
        heading: "4. Oxygen Vessel Care & Hydrostatic Proof-Testing",
        content:
          "Combustion vessels operate under extreme transient shockwaves. Orbit Technologies operates India's only dedicated Parr-certified test bench providing 300-bar hydrostatic proof-testing, micrometer thread gauge verification, and wall-thinning ultrasonic audits.",
        tip: "Never fire samples weighing greater than 1.10 g in a standard 342 mL vessel, and always ensure internal moisture droplets do not corrode terminal electrodes.",
      },
    ],
  },
  {
    slug: "parr-7400-vs-6400-calorimeter-comparison",
    title: "Demystifying Parr 7400 vs 6400: Choosing the Right Bomb Calorimeter",
    subtitle: "Throughput, Automation, Water Management & Operational Cost Comparison",
    category: "Calorimetry & Energy",
    readTime: "7 min read",
    date: "October 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASTM D5865", "ISO 1928", "IS 1350 Part II"],
    summary:
      "A head-to-head comparison between the legendary Parr 6400 and the next-generation Parr 7400 automatic isoperibol calorimeter, helping laboratory directors balance sample workload, water chiller needs, and ROI.",
    recommendedProductSlugs: [
      "7400-automatic-isoperibol-calorimeter",
      "6400-automatic-isoperibol-calorimeter",
      "7200-precision-isoperibol-calorimeter",
    ],
    sections: [
      {
        heading: "1. The Benchmark: Parr 6400 in Indian Laboratories",
        content:
          "The Parr 6400 has served as the backbone of India's commercial coal inspection and power plant laboratories for over fifteen years. Its fixed bomb head design eliminated manual water measuring and bucket handling, achieving 6 to 8 tests per hour.",
      },
      {
        heading: "2. The Innovation: Parr 7400 Automatic Isoperibol Calorimeter",
        content:
          "The newly introduced Parr 7400 addresses high-capacity testing environments (such as port inspection labs and mega washeries) by slashing test time down to under 4 minutes per sample.",
        bulletPoints: [
          "Automated Bomb Closure: Automatic vertical motorized vessel lifting eliminates technician ergonomics fatigue.",
          "Closed-Loop Thermoelectric Cooling: Requires zero external tap water or cumbersome recirculating water chillers.",
          "Dual-Vessel Architecture: Capable of testing 60+ samples per 8-hour shift.",
          "10-inch Color Touchscreen: Android-based user interface with instant Ethernet LIMS synchronization.",
        ],
      },
      {
        heading: "3. Selection Recommendation",
        content:
          "Laboratories testing fewer than 25 samples per day can comfortably operate the Parr 6400 or 6200. Testing laboratories with workloads exceeding 40 samples per shift should strongly prioritize the Parr 7400 to minimize overtime and labor overhead.",
        tip: "Both systems utilize identical 1108 style bomb head metallurgy and benzoic acid calibration routines, making operator transition seamless.",
      },
    ],
  },
  {
    slug: "ash-fusibility-determination",
    title: "Coal Ash Fusibility Determination for Utility Boiler Slagging Prediction",
    subtitle: "Understanding ASTM D1857 & ISO 540 Digital Image Processing Criteria",
    category: "Thermal Analysis",
    readTime: "7 min read",
    date: "October 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASTM D1857", "ISO 540", "DIN 51730"],
    summary:
      "Learn how automated digital video ash fusion analyzers (IF-2000G) monitor critical deformation, softening, hemispherical, and flow temperatures of coal ash in oxidizing and reducing atmospheres to prevent catastrophic boiler tube clinkering.",
    recommendedProductSlugs: [
      "tga-3000-thermogravimetric-analyzer",
      "6400-automatic-isoperibol-calorimeter",
    ],
    sections: [
      {
        heading: "1. The Phenomenon of Boiler Slagging & Fouling",
        content:
          "When pulverized coal is fired inside modern utility boilers operating above 1300°C, the incombustible mineral constituents (silica, alumina, iron oxides, calcium, and alkalies) melt into molten droplets. If these molten particles strike water-wall boiler tubes before solidifying, they form glassy, insulating slag deposits that drastically reduce heat transfer and can cause tube ruptures.",
      },
      {
        heading: "2. The Four Standard Critical Characteristic Temperatures",
        content:
          "Under ASTM D1857 and ISO 540, coal ash is prepared into triangular pyrometric cones or cylinders and heated inside a high-temperature furnace at a controlled rate of 5°C/minute up to 1550°C. The automated IF-2000G tracks four distinctive physical transitions:",
        bulletPoints: [
          "Initial Deformation Temperature (IT): The temperature at which the first rounding of the cone apex occurs.",
          "Softening / Sphere Temperature (ST): The temperature at which the cone height equals its base width (aspect ratio 1:1).",
          "Hemispherical Temperature (HT): The cone deforms into a semi-circular hemisphere whose height equals half its base width.",
          "Fluid / Flow Temperature (FT): The molten ash completely flattens into a puddle with height less than 1.5 mm.",
        ],
      },
      {
        heading: "3. Reducing vs. Oxidizing Atmosphere Control",
        content:
          "In real pulverized fuel boilers, reducing zones frequently occur near burner mouths where oxygen is depleted. In reducing atmospheres (60% CO + 40% CO2), iron is present as Fe2+ (ferrous iron), acting as a potent flux that lowers ash fusion temperatures by 100°C to 200°C compared to oxidizing atmospheres where iron exists as Fe3+ (ferric iron).",
        tip: "Always verify gas cylinder ratios for CO/CO2 atmospheres and ensure chimney exhaust ducting is active to vent toxic carbon monoxide safely.",
      },
    ],
  },
  {
    slug: "cement-loss-on-ignition",
    title: "Loss on Ignition (LOI) Testing in Hydraulic Cement & Clinker",
    subtitle: "Accelerating ASTM C114 Quality Control with Multi-Sample Thermogravimetry",
    category: "Cement & Minerals",
    readTime: "6 min read",
    date: "October 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASTM C114", "EN 196-2", "ISO 29581-2", "IS 4032"],
    summary:
      "A technical examination of Loss on Ignition (LOI) testing for cement raw meal, limestone, and clinker. How automated macro-TGA eliminates manual porcelain crucible handling and delivers simultaneous 19-sample results.",
    recommendedProductSlugs: [
      "tga-3000-thermogravimetric-analyzer",
      "tga-1500-catalogue",
    ],
    sections: [
      {
        heading: "1. Why LOI is a Critical Cement QC Parameter",
        content:
          "Loss on Ignition (LOI) indicates the extent of pre-hydration and carbonation in finished hydraulic cement caused by exposure to atmospheric moisture and CO2 during storage and transit. In raw meal calcination, LOI directly quantifies uncalcined calcium carbonate (CaCO3) decomposing into quicklime (CaO) and CO2.",
      },
      {
        heading: "2. The Traditional Manual Method vs. Automated TGA",
        content:
          "Under ASTM C114, traditional LOI testing requires heating 1.000 g of sample in a platinum or porcelain crucible inside an electric muffle furnace at 950°C ± 50°C for at least 15 minutes, cooling in a desiccator, and weighing repeatedly until constant mass. In automated macro-TGA, 19 samples are tested simultaneously with robotic weighing at 950°C, eliminating human transfer delays and ambient moisture pickup.",
        formula: "LOI (%) = ((Initial Sample Mass - Ignited Residue Mass) / Initial Sample Mass) × 100",
      },
      {
        heading: "3. Differentiation of Hydration vs. Carbonation",
        content:
          "By utilizing programmable temperature ramps, advanced thermogravimetric analyzers can differentiate between mass loss due to free moisture (ambient to 105°C), structural water loss from calcium silicate hydrates (105°C to 450°C), and CO2 decomposition from carbonates (450°C to 950°C).",
      },
    ],
  },
  {
    slug: "high-frequency-combustion-cs",
    title: "Inorganic Carbon & Sulfur Determination by High-Frequency Combustion",
    subtitle: "Achieving Sub-PPM Accuracy in Steel, Alloys & Iron Ores Under ASTM E1019",
    category: "Metallurgy & Steel",
    readTime: "8 min read",
    date: "September 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASTM E1019", "ISO 9556", "ISO 15350", "ASTM E1941"],
    summary:
      "Learn the physics behind high-frequency induction combustion and solid-state NDIR detection. How tungsten accelerators and dual gold-plated infrared cells achieve 40-second heat analysis in modern steel plants.",
    recommendedProductSlugs: [
      "csbox-hfa-c-analyzer",
      "tga-3000-thermogravimetric-analyzer",
    ],
    sections: [
      {
        heading: "1. The Metallurgy of Carbon & Sulfur Control",
        content:
          "In iron and steel production, carbon content dictates tensile strength, hardness, and ductility, while sulfur induces hot shortness, micro-porosity, and sulfide inclusions. In ultra-low carbon (ULC) steels and electrical steels, carbon and sulfur must be maintained below 10 ppm (0.0010%), requiring extreme analytical sensitivity.",
      },
      {
        heading: "2. The Induction Combustion Process",
        content:
          "The metallic sample (0.5 g to 1.0 g) is weighed into a pre-ignited ceramic crucible along with pure tungsten and iron accelerators. The crucible is raised into a high-frequency (HF) induction coil operating at 20 MHz. The electromagnetic field couples with the metal charge, causing instantaneous Joule heating above 2000°C in a pure oxygen stream.",
        bulletPoints: [
          "Carbon Oxidation: All carbon oxidizes instantly into CO and CO2 gas.",
          "Sulfur Oxidation: All sulfur oxidizes into SO2 gas.",
          "Dust Filtration: Heated metal filters remove particulate iron oxide spatter.",
          "Catalytic Conversion: Rare-earth catalysts convert trace CO to CO2.",
        ],
      },
      {
        heading: "3. Non-Dispersive Infrared (NDIR) Detection",
        content:
          "The combustion gases flow through temperature-stabilized solid-state NDIR cells. Gold-plated absorption cells with narrowband optical filters measure specific absorption wavelengths for SO2 and CO2, calculating total mass against NIST calibration curves.",
        tip: "Always blank-fire ceramic crucibles in a muffle furnace at 1000°C for 2 hours to eliminate ambient atmospheric carbon contamination before running low-ppm heats.",
      },
    ],
  },
  {
    slug: "high-pressure-reactor-safety",
    title: "Safety Engineering in High-Pressure Laboratory Autoclaves & Chemical Reactors",
    subtitle: "Rupture Discs, Magnetic Drives, and ASME Section VIII Compliance",
    category: "Chemical Process Engineering",
    readTime: "10 min read",
    date: "September 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASME Section VIII Div 1", "CE / PED 2014/68/EU", "ASTM G1"],
    summary:
      "A comprehensive safety guide for chemical engineers and researchers operating Parr high-pressure reactors up to 350 bar. Covering relief device sizing, magnetic drive coupling, and corrosion alloy selection.",
    recommendedProductSlugs: [
      "series-4500-stirred-reactors",
      "series-5500-high-pressure-compact-laboratory-reactors",
      "series-high-4540-600-1200ml-pressure-reactors",
    ],
    sections: [
      {
        heading: "1. The Inherent Hazards of High-Pressure Chemical Synthesis",
        content:
          "Laboratory autoclaves operating at 200–350 bar and temperatures up to 500°C contain enormous amounts of stored thermodynamic energy. When flammable gases (hydrogen, methane, ethylene) or toxic reagents are involved, mechanical containment integrity is paramount.",
      },
      {
        heading: "2. Magnetic Drive Sealed Agitation",
        content:
          "Traditional packed gland or mechanical seal shafts are prone to leakage and seal wear under extreme pressure. Parr magnetic drives utilize rare-earth permanent magnets separated by a non-magnetic containment shell. This completely eliminates dynamic shaft penetrations, providing 100% leak-tight torque transmission up to 5,000 bar-psi.",
      },
      {
        heading: "3. Rupture Disc Sizing & Vent Piping",
        content:
          "Every pressure vessel must feature an ASME-certified metallic rupture disc rated for the maximum allowable working pressure (MAWP) at maximum design temperature. Bursting discs should always be plumbed via dedicated heavy-wall stainless steel tubing to a safe exterior vent stack or containment scrubber.",
        bulletPoints: [
          "Never reuse a rupture disc that has experienced severe pressure pulsations.",
          "Always select rupture disc foil metallurgy (Inconel, Gold, Tantalum) resistant to internal process corrosion.",
          "Never block or valve the discharge port of a pressure relief device.",
        ],
      },
      {
        heading: "4. Metallurgy Selection for Aggressive Media",
        content:
          "While 316 Stainless Steel is standard, aggressive halides, hydrochloric acid, or wet chlorine cause rapid stress corrosion cracking (SCC). Orbit engineers assist laboratories in specifying Hastelloy C-276, Inconel 600, Monel 400, or Grade 2 Titanium based on ASTM G1 corrosion tables.",
      },
    ],
  },
  {
    slug: "oxygen-bomb-hydrotesting-safety",
    title: "Essential Safety Protocols: 300-Bar Hydrostatic Recertification of Oxygen Vessels",
    subtitle: "Parr Safety Bulletin No. 201M Compliance & Ultrasonic Flaw Audits",
    category: "Safety & Compliance",
    readTime: "7 min read",
    date: "August 2026",
    author: "Orbit Technical Application Group",
    standards: ["ASME Boiler & Pressure Vessel Code Sec VIII", "Parr Bulletin 201M", "ISO 9001"],
    summary:
      "Why annual hydrostatic proof testing to 300 bar is an absolute safety mandate for all Parr 1108 and 1104 oxygen combustion vessels, explaining fatigue limit thresholds and non-destructive wall inspection.",
    recommendedProductSlugs: [
      "oxygen-combustion-vessel",
      "6400-automatic-isoperibol-calorimeter",
      "7400-automatic-isoperibol-calorimeter",
    ],
    sections: [
      {
        heading: "1. The Physics of Cyclic Oxygen Combustion Stress",
        content:
          "Every time a bomb calorimeter fires, internal pressure spikes instantaneously from 30 atmospheres (450 psi) to over 100 atmospheres (1,500 psi) in milliseconds, generating aggressive mechanical expansion and high thermal transients. Over hundreds of firings, screw threads and closure rings experience microscopic fatigue.",
      },
      {
        heading: "2. The 300-Bar Hydrostatic Proof Test Protocol",
        content:
          "Under Parr factory safety directives and ASME Section VIII guidelines, vessels must be proof tested annually to 300 atmospheres (4,350 psi) with water. In Orbit's certified Hyderabad test bay, vessels are contained within armored ballistic enclosures while computerized transducers monitor for pressure decay.",
        bulletPoints: [
          "Ultrasonic Wall Thickness Profiling: Verifying minimum wall thickness against factory CAD blueprints.",
          "Thread Flank Optical Gauging: Checking thread crest wear and pitch deformation.",
          "300-Bar Water Proof Hold: 10-minute hold test with zero pressure loss tolerance.",
          "Certificate of Safety: Official test certificate issued documenting test serial and pressure logs.",
        ],
      },
      {
        heading: "3. When to Immediately Retire a Vessel",
        content:
          "Never fire a bomb vessel that has suffered external hammer impact, severe pitting corrosion from chlorine/sulfur combustion, or worn screw threads that feel loose upon closure. Contact Orbit's Hyderabad service facility immediately for exchange or certified overhaul.",
      },
    ],
  },
];

// ==========================================
// 2. SOP & TESTING PROCEDURE LIBRARY
// ==========================================

export const SOP_LIBRARY: StandardOperatingProcedure[] = [
  {
    id: "sop-cal-01",
    docNumber: "ORB-SOP-CAL-01",
    revision: "Rev 4.0 (2026)",
    title: "Standard Operating Procedure for Gross Calorific Value (GCV) Determination",
    category: "Calorimetry",
    targetEquipment: "Parr 6400 / Parr 7400 / Parr 6200 Isoperibol Calorimeter",
    standards: ["ASTM D5865 / D5865M", "ISO 1928", "IS 1350 (Part II)"],
    summary:
      "Complete benchtop procedure for determining gross calorific value of coal, coke, and solid biofuels. Covers Benzoic Acid W-factor calibration, sample pelleting, 30-bar oxygen charging, and acid titration corrections.",
    safetyPrecautions: [
      "Wear safety glasses with side shields and heat-resistant gloves during vessel handling.",
      "Never exceed 1.10 g sample mass in standard 1108 combustion vessels.",
      "Never charge vessel with oxygen pressure exceeding 35 bar (500 psi).",
      "Ensure oxygen cylinder regulator is dedicated, oil-free, and calibrated.",
      "Never stand directly over the calorimeter during the ignition sequence.",
    ],
    equipmentRequired: [
      "Parr Isoperibol Calorimeter with 1108 vessel",
      "Analytical Balance (0.0001 g resolution, e.g. A&D GH-252)",
      "Parr 2811 Pellet Press",
      "Nickel-chromium or Platinum fuse wire (10 cm length)",
      "Oxygen supply (Purity ≥ 99.5%, dry, oil-free)",
      "Digital burette or micropipette for titration",
    ],
    reagents: [
      "Standard NIST-traceable Benzoic Acid pellets (Certified 26,454 J/g)",
      "Sodium Carbonate (Na2CO3) standard solution 0.0709 N",
      "Methyl orange or methyl red indicator",
      "De-ionized water (Conductivity < 2 µS/cm)",
    ],
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: "Calorimeter Energy Equivalent (W) Standardization",
        instruction:
          "Perform a minimum of five calibration runs using certified Benzoic Acid pellets weighing between 0.9 g and 1.1 g. Verify that the Relative Standard Deviation (% RSD) across five runs is ≤ 0.10%. Record average W in J/°C.",
        checkPoint: "RSD must be ≤ 0.10% as mandated by ASTM D5865.",
      },
      {
        stepNumber: 2,
        title: "Sample Preparation & Accurate Weighing",
        instruction:
          "Ensure coal sample is ground to pass a 212-micron (No. 70) sieve and air-dried. Tare the clean stainless steel crucible on the analytical balance. Accurately weigh 1.0000 g ± 0.0500 g of sample and record mass to 0.1 mg.",
        checkPoint: "For volatile coals, press sample into a loose pellet to prevent fly-ash splattering during ignition.",
      },
      {
        stepNumber: 3,
        title: "Fuse Wire Installation & Vessel Charging",
        instruction:
          "Cut exactly 10.0 cm of Parr nickel-chromium fuse wire. Fasten to bomb electrodes and loop wire downwards to lightly touch the sample surface without touching the crucible rim. Add 1.0 mL deionized water to the vessel bottom. Assemble head into cylinder, tighten screw ring hand-tight, and charge slowly with pure oxygen to 30.0 bar (435 psi).",
        checkPoint: "Never use tools or wrenches to force the bomb screw ring.",
      },
      {
        stepNumber: 4,
        title: "Calorimeter Run & Temperature Tracking",
        instruction:
          "Place vessel inside the calorimeter bucket. Lower the calorimeter lid to engage stirrer and temperature thermistor. Enter sample ID and weight into touchscreen. Initiate run. The instrument automatically logs pre-period baseline, fires electronic ignition, tracks exothermic peak, and confirms post-period slope.",
      },
      {
        stepNumber: 5,
        title: "Vessel Washdown & Acid Titration Correction",
        instruction:
          "After run completion and pressure depressurization, open the vessel. Inspect interior for unburned coal grains or carbon soot. Quantitatively rinse bomb interior, crucible, and electrodes into a beaker with deionized water. Add 2 drops of methyl orange indicator and titrate with 0.0709 N Na2CO3 to determine nitric acid correction (e1). Measure unburned fuse wire stub to calculate wire correction (e2).",
      },
    ],
    calculations:
      "Gross Calorific Value (GCV, J/g) = [W × ΔT - e1 - e2 - e3] / m\n\nWhere:\n• W = Energy equivalent of calorimeter (J/°C)\n• ΔT = Corrected temperature rise (°C)\n• e1 = Nitric acid formation correction (J)\n• e2 = Fuse wire combustion correction (J, 9.6 J/cm for Ni-Cr)\n• e3 = Sulfur correction (J, 55.7 J × %S × m)\n• m = Sample mass (g)\n\nTo convert J/g to kcal/kg: Divide J/g by 4.1868.",
    troubleshooting: [
      {
        issue: "Misfire / Incomplete Ignition Error",
        cause: "Fuse wire not in contact with sample, or broken electrode lead wire.",
        remedy: "Verify fuse wire loop lightly touches coal bed without grounding against crucible walls.",
      },
      {
        issue: "Excessive RSD (> 0.15%) during Benzoic Acid calibration",
        cause: "Bucket water temperature drifting, or poor water stirrer circulation.",
        remedy: "Ensure closed-loop thermoelectric chiller is maintaining jacket temperature within ±0.001°C.",
      },
      {
        issue: "Soot or unburned carbon in crucible post-test",
        cause: "Insufficient oxygen charge (< 25 bar) or sample splattering.",
        remedy: "Increase oxygen pressure to 30 bar and compress fine powder into pellets using Parr 2811 press.",
      },
    ],
  },
  {
    id: "sop-tga-02",
    docNumber: "ORB-SOP-TGA-02",
    revision: "Rev 3.1 (2026)",
    title: "Standard Operating Procedure for Automated Proximate Analysis via Macro-TGA",
    category: "Thermogravimetry",
    targetEquipment: "Macro Thermogravimetric Analyzer (TGA 3000 / TGA 1500)",
    standards: ["ASTM D7582", "ISO 17246", "IS 1350 (Part I)"],
    summary:
      "Unattended multi-sample procedure for determining Moisture, Volatile Matter, Ash, and Fixed Carbon in coal, coke, and biomass pellets using a 19-position automated sample carousel.",
    safetyPrecautions: [
      "Furnace operates up to 1000°C. Never touch furnace top plate during thermal cycle.",
      "Verify dual gas cylinders (Nitrogen and Oxygen) have active pressure > 2 bar at regulator outlet.",
      "Vent stack exhaust duct must be connected to an active fume hood to remove volatile hydrocarbons and CO2.",
    ],
    equipmentRequired: [
      "TGA 3000 Thermogravimetric Analyzer with built-in 0.0001 g balance",
      "High-purity ceramic crucibles (19 sample + 1 reference)",
      "High-purity ceramic volatile matter crucible lids",
      "Analytical laboratory spatulas and desiccator cabinet",
    ],
    reagents: [
      "Ultra-High Purity Nitrogen gas (N2 ≥ 99.999%, dry, hydrocarbon free)",
      "Industrial Oxygen gas (O2 ≥ 99.5%, moisture free)",
    ],
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: "System Pre-Check & Gas Pressure Verification",
        instruction:
          "Turn on TGA 3000 main console and PC workstation. Verify Nitrogen inlet pressure is set to 2.5 bar and Oxygen inlet pressure to 2.5 bar. Open instrument diagnostics and verify internal balance reads stable zero.",
      },
      {
        stepNumber: 2,
        title: "Automated Crucible Tare Sequence",
        instruction:
          "Place clean, dry ceramic crucibles in carousel positions 1 through 19. Ensure position 0 contains the empty reference crucible. Initiate automated Tare Sequence from software. The carousel rotates and records empty tare weights (M0).",
      },
      {
        stepNumber: 3,
        title: "Sample Loading (1.000 g)",
        instruction:
          "Using clean spatula, load 1.0000 g ± 0.0500 g of 212-micron coal into each crucible. Enter sample IDs into sequence editor. The internal balance automatically records initial sample mass (M1).",
      },
      {
        stepNumber: 4,
        title: "Execution of ASTM D7582 Thermal Profile",
        instruction:
          "Start analysis run. The TGA 3000 executes the programmed thermal stages: (a) Moisture at 107°C in Nitrogen until weight loss < 0.05%/min; (b) Volatile Matter at 950°C in Nitrogen with automated crucible lidding; (c) Ashing at 750°C in pure Oxygen until constant mass.",
      },
      {
        stepNumber: 5,
        title: "Data Verification & Report Generation",
        instruction:
          "Verify that the Reference Crucible mass drift is < 0.2 mg. Export final proximate analysis report with values calculated on As-Received (ar), Air-Dried (ad), and Dry (db) bases.",
      },
    ],
    troubleshooting: [
      {
        issue: "Erratic balance readings or noise during run",
        cause: "Excessive gas flow rate causing balance pan turbulence, or draft vibrations.",
        remedy: "Verify gas flow controller is calibrated to 4.0 L/min for N2 and 3.5 L/min for O2.",
      },
      {
        issue: "Volatile Matter yield unexpectedly high",
        cause: "Nitrogen gas contains oxygen impurity (> 10 ppm), causing partial combustion.",
        remedy: "Install inline oxygen trap filter and ensure N2 cylinder purity is ≥ 99.999%.",
      },
    ],
  },
  {
    id: "sop-aft-03",
    docNumber: "ORB-SOP-AFT-03",
    revision: "Rev 2.5 (2026)",
    title: "Standard Operating Procedure for Coal Ash Fusibility Temperature Determination",
    category: "Ash Fusibility",
    targetEquipment: "High-Temperature Ash Fusion Analyzer (IF-2000G / HT-IF2000G)",
    standards: ["ASTM D1857 / D1857M", "ISO 540", "DIN 51730"],
    summary:
      "Procedure for preparing coal ash pyrometric cones and tracking Initial Deformation (IT), Softening (ST), Hemispherical (HT), and Fluid (FT) temperatures up to 1550°C in reducing and oxidizing atmospheres.",
    safetyPrecautions: [
      "Reducing gas mixture contains toxic, flammable Carbon Monoxide (CO). Gas leak alarm must be active.",
      "Furnace operates up to 1550°C. Never open furnace door during active heating cycle.",
    ],
    equipmentRequired: [
      "IF-2000G Automated Ash Fusion Furnace with High-Res CCD camera",
      "Brass Triangular Cone Mold (Height 19 mm, Base 6.4 mm)",
      "Refractory support tile (High Alumina / Silicon Carbide)",
      "Muffle Furnace (815°C) for initial coal ashing",
    ],
    reagents: [
      "Dextrin binder solution (10% aqueous)",
      "Reducing gas mixture: 60% Carbon Monoxide (CO) + 40% Carbon Dioxide (CO2) by volume",
      "Pure Carbon Dioxide (CO2) for oxidizing runs",
    ],
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: "Coal Ash Preparation",
        instruction:
          "Combust coal in a thin layer inside an open muffle furnace at 815°C ± 15°C until all carbonaceous matter is combusted. Grind ash to pass a 75-micron (No. 200) sieve.",
      },
      {
        stepNumber: 2,
        title: "Cone Fabrication & Mounting",
        instruction:
          "Moisten 1.0 g ash with 2 drops of dextrin solution into a plastic paste. Pack firmly into brass cone mold. Extrude dried cones and mount vertically onto alumina support tile using a small dab of ash paste.",
      },
      {
        stepNumber: 3,
        title: "Furnace Loading & Atmosphere Selection",
        instruction:
          "Place mounted tile inside furnace chamber. For reducing runs, purge chamber with CO/CO2 mixture. Set heating ramp to 5°C/min from 900°C to 1500°C.",
      },
      {
        stepNumber: 4,
        title: "Automated Digital Image Capture & Temperature Logging",
        instruction:
          "The CCD camera captures continuous silhouettes every 2°C rise. The software algorithm identifies IT, ST, HT, and FT points with automatic image archiving.",
      },
    ],
    troubleshooting: [
      {
        issue: "Cone topples over during heating before IT point",
        cause: "Insufficient dextrin binder or cone mounted at an angle.",
        remedy: "Ensure cone base is mounted perpendicular (90°) to the refractory tile.",
      },
    ],
  },
  {
    id: "sop-rea-04",
    docNumber: "ORB-SOP-REA-04",
    revision: "Rev 3.0 (2026)",
    title: "Safety Protocol & Standard Operating Procedure for High-Pressure Chemical Autoclaves",
    category: "Pressure Reactors",
    targetEquipment: "Parr Series 4520 / 4560 / 4570 Stirred High-Pressure Reactors",
    standards: ["ASME Section VIII Div 1", "CE PED 2014/68/EU", "ASTM G1"],
    summary:
      "Crucial laboratory safety and operational sequence for pressurized chemical reactions up to 350 bar and 500°C. Covers closure split-ring torquing, nitrogen leak testing, magnetic drive operation, and emergency quench protocols.",
    safetyPrecautions: [
      "Verify vessel MAWP (Maximum Allowable Working Pressure) stamped on nameplate before pressurizing.",
      "Never fill vessel volume beyond 75% liquid capacity to allow for thermal liquid expansion.",
      "Ensure ASME rupture disc rating matches intended temperature and pressure envelope.",
      "Plumb rupture disc outlet to safe exhaust duct or gas scrubber.",
    ],
    equipmentRequired: [
      "Parr Stirred Reactor with 4848 touch controller",
      "Calibrated click-type torque wrench",
      "Nitrogen cylinder for inert pressure proof testing",
      "Process gas booster / supply manifold",
    ],
    reagents: ["High-purity Nitrogen gas", "Liquid reaction reagents"],
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: "Gasket & Sealing Shoulder Inspection",
        instruction:
          "Inspect PTFE or flexible graphite flat gasket for scratches or particulate contamination. Clean vessel sealing groove using lint-free solvent wipe.",
      },
      {
        stepNumber: 2,
        title: "Split-Ring Assembly & Cross-Pattern Torquing",
        instruction:
          "Lower vessel head onto cylinder. Slide split rings into place. Tighten compression bolts in a criss-cross pattern in 3 successive stages up to factory torque (typically 35 to 45 ft-lbs).",
      },
      {
        stepNumber: 3,
        title: "Inert Purge & Pressure Proof Leak Check",
        instruction:
          "Charge vessel with 50 bar Nitrogen gas. Close inlet valve. Monitor digital pressure transducer for 15 minutes. Zero pressure decay confirms seal integrity.",
      },
      {
        stepNumber: 4,
        title: "Agitation & Temperature Ramp",
        instruction:
          "Turn on magnetic drive cooling water jacket. Set stirrer speed (200–800 RPM). Program PID temperature controller ramp rate.",
      },
      {
        stepNumber: 5,
        title: "Emergency Quench & Safe Depressurization",
        instruction:
          "If temperature exotherm exceeds setpoint by > 15°C, controller automatically engages internal cooling coil solenoid. Never open vessel until temperature < 40°C and pressure gauge reads zero.",
      },
    ],
    troubleshooting: [
      {
        issue: "Pressure drop observed during initial leak check",
        cause: "Uneven compression bolt torque or scratched sealing face.",
        remedy: "Depressurize, loosen bolts, verify gasket alignment, and re-torque in diagonal sequence.",
      },
    ],
  },
  {
    id: "sop-bal-05",
    docNumber: "ORB-SOP-BAL-05",
    revision: "Rev 2.0 (2026)",
    title: "Daily Calibration, Repeatability & Eccentricity Testing for Analytical Balances",
    category: "Weighing & Balances",
    targetEquipment: "A&D Apollo GX/GF, GH Series & Fortis IP68 Washdown Balances",
    standards: ["OIML R 76-1", "ISO 17025", "USP <41> Weighing Criteria"],
    summary:
      "Routine laboratory calibration protocol to verify analytical balance repeatability, corner-load eccentricity, and internal motorized calibration in compliance with ISO 17025 and GLP.",
    safetyPrecautions: [
      "Always handle certified calibration weights using plastic-tipped tweezers or clean cotton gloves.",
      "Never place weights directly on bare bench surfaces.",
    ],
    equipmentRequired: [
      "Analytical balance placed on heavy anti-vibration marble weighing table",
      "OIML Class E2 or F1 stainless steel reference weights (100 g, 200 g)",
      "Camel hair brush for draft shield pan cleaning",
    ],
    reagents: ["70% Isopropanol for stainless steel pan wipe-down"],
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: "Level Verification & Ambient Temperature Equilibration",
        instruction:
          "Inspect air bubble in leveling vial. Adjust leveling feet until bubble is centered. Allow balance to warm up in stand-by mode for at least 30 minutes.",
      },
      {
        stepNumber: 2,
        title: "Internal Motorized Self-Calibration (ASC)",
        instruction:
          "Trigger internal calibration key. The balance motor applies internal mass and records zero-drift correction factor.",
      },
      {
        stepNumber: 3,
        title: "Corner Load (Eccentricity) Verification",
        instruction:
          "Place a 100 g reference weight sequentially in center, front-left, front-right, rear-left, and rear-right positions of the pan. Verify maximum deviation is within ± 2 scale intervals.",
      },
      {
        stepNumber: 4,
        title: "Repeatability (Standard Deviation) Test",
        instruction:
          "Record 10 consecutive weighings of a test weight near 50% capacity. Compute standard deviation s. Verify s ≤ 0.1 mg for USP <41> compliance.",
      },
    ],
    troubleshooting: [
      {
        issue: "Unstable readings drifting continuously",
        cause: "Air currents from AC vent or electrostatic charge on glass draft shield.",
        remedy: "Use static eliminator ionizer (A&D AD-1683) and close draft shield doors completely.",
      },
    ],
  },
];

// ==========================================
// 3. INDUSTRY USE CASES & CASE STUDIES
// ==========================================

export const KNOWLEDGE_USE_CASES: KnowledgeUseCase[] = [
  {
    id: "case-ntpc-singrauli",
    clientType: "Ultra-Mega Thermal Power Station (2,000 MW)",
    sector: "Power Generation & Utilities",
    location: "Singrauli, Madhya Pradesh",
    title: "Eliminating Commercial Fuel Billing Disputes via Automated Bomb Calorimetry & Macro-TGA",
    challenge:
      "NTPC Singrauli receives over 30,000 metric tons of raw thermal coal daily across multiple railway rakes. Frequent 100–150 kcal/kg GCV discrepancies between mine loading siding and plant bunker discharge caused millions of rupees in commercial billing friction, while manual proximate analysis lagged behind by 8 hours.",
    solution:
      "Orbit Technologies engineered and deployed a unified coal laboratory automation suite featuring 4x Parr 6400 automatic isoperibol calorimeters, 2x TGA 3000 macro thermogravimetric analyzers, and automated sample crushers with real-time Ethernet LIMS integration.",
    equipmentDeployed: [
      "4x Parr 6400 Automatic Isoperibol Calorimeters",
      "2x TGA 3000 Macro Thermogravimetric Analyzers (19-position)",
      "Parr 2811 Hydraulic Sample Pellet Presses",
      "A&D Apollo GH-252 Semi-Micro Analytical Balances",
    ],
    results: [
      "Sample test turnaround slashed from 8 hours down to 45 minutes from rake sampling.",
      "Calorimeter inter-laboratory measurement variance reduced to < 0.12% RSD.",
      "Saved an estimated ₹3.2 Crores annually in commercial billing dispute reconciliations.",
      "100% compliance with Central Electricity Regulatory Commission (CERC) audit mandates.",
    ],
    testimonial: {
      quote:
        "Orbit's automated Parr calorimeters and TGA 3000 systems transformed our coal testing operations. We test 120 samples daily with uncompromising precision and zero downtime.",
      author: "Chief Chemist & Head of Fuel Management",
      designation: "NTPC Singrauli Super Thermal Power Station",
    },
  },
  {
    id: "case-tata-steel-kalinganagar",
    clientType: "Integrated Steel Plant (3 MTPA)",
    sector: "Steel & Metallurgy",
    location: "Kalinganagar, Odisha",
    title: "45-Second Carbon & Sulfur Control in Blast Furnace Coking Coal & Sinter Feed",
    challenge:
      "Blast furnace operations require strict control of sulfur in coking coal and hot metal (< 0.020% S) to prevent brittle iron formation and sulfur embrittlement. Conventional tube furnace combustion was too slow (8 minutes/test) to allow dynamic furnace burden adjustments.",
    solution:
      "Commissioned NCS CS-8800 high-frequency induction combustion analyzers equipped with dual solid-state NDIR detection cells and pneumatic automatic furnace dust ejection for continuous 24/7 metallurgy monitoring.",
    equipmentDeployed: [
      "3x NCS CS-8800 High-Frequency Induction Carbon/Sulfur Analyzers",
      "High-purity ceramic crucible pre-ignition muffle furnaces",
      "Automated pneumatic sample pulverizers",
    ],
    results: [
      "Analysis cycle time reduced from 8 minutes to 42 seconds per heat sample.",
      "Achieved sub-ppm detection limit (0.1 ppm C and 0.1 ppm S) for electrical steel grades.",
      "Prevented blast furnace burden cold-hangs by enabling real-time coke rate adjustments.",
      "Zero off-spec steel coil rejections due to sulfur contamination across two years of operation.",
    ],
    testimonial: {
      quote:
        "The NCS carbon-sulfur combustion units supplied and supported by Orbit have maintained 99.8% uptime under hostile, dust-intensive blast furnace lab conditions.",
      author: "Head of Central Quality Laboratory",
      designation: "Tata Steel Kalinganagar",
    },
  },
  {
    id: "case-sgs-port-inspection",
    clientType: "Leading Commercial Testing & Cargo Inspection Agency",
    sector: "Commercial Inspection & Cargo Certification",
    location: "Paradip Port, Odisha & Vizag Port, Andhra Pradesh",
    title: "Handling 180 Coal Samples/Shift during Vessel Discharge with Zero Water Waste",
    challenge:
      "During Cape-size vessel coal discharge (120,000 MT/ship), port testing labs must certify imported Indonesian and Australian coal within hours to clear customs and dispatch railway rakes. High ambient coastal temperatures (40°C) overwhelmed external water chillers in conventional calorimeters.",
    solution:
      "Orbit Technologies installed the new Parr 7400 Automatic Isoperibol Calorimeters featuring built-in thermoelectric closed-loop cooling and rapid 4-minute testing cycles.",
    equipmentDeployed: [
      "3x Parr 7400 Automatic Isoperibol Calorimeters",
      "2x TGA 3000 Thermogravimetric Analyzers",
      "Heavy-duty sieve shakers and jaw crushers",
    ],
    results: [
      "Achieved 180 samples per 8-hour shift capacity on a 3-unit calorimeter bank.",
      "Completely eliminated external tap water supply and chiller maintenance.",
      "Customs clearing certificates generated 3 hours ahead of demurrage deadline.",
      "Seamless ISO 17025 audit verification backed by Orbit's NABL benzoic acid calibration standards.",
    ],
    testimonial: {
      quote:
        "The Parr 7400's automated vessel closure and four-minute turnaround gave us the highest testing speed on the eastern coastline.",
      author: "Regional Operations Manager — Minerals",
      designation: "Commercial Inspection Agency",
    },
  },
  {
    id: "case-csir-ncl-reactor",
    clientType: "Premier National Research Institute (CSIR)",
    sector: "Chemical Research & Catalysis",
    location: "Pune, Maharashtra",
    title: "High-Pressure Catalytic CO2 Hydrogenation at 200 Bar & 350°C in Hastelloy C-276",
    challenge:
      "CSIR-NCL chemical engineers developing novel heterogeneous catalysts for green methanol synthesis from captured CO2 required an extreme-environment stirred autoclave that could operate continuously at 200 bar and 350°C with corrosive acidic reaction intermediates.",
    solution:
      "Engineered a custom Parr Series 4560 stirred high-pressure reactor constructed entirely from Hastelloy C-276, equipped with magnetic drive zero-leak agitation, dual gas mass flow controllers, and continuous liquid sampling under pressure.",
    equipmentDeployed: [
      "Parr Series 4560 1-Liter Hastelloy C-276 Stirred Mini-Reactor",
      "Parr 4848 Advanced Touchscreen Process Controller",
      "High-pressure gas manifold with mass flow controllers up to 250 bar",
      "ASME certified Inconel rupture disc assembly",
    ],
    results: [
      "Completed over 800 continuous hours of catalytic testing without gland packing degradation.",
      "Achieved 94% selective conversion of CO2 into green methanol in continuous bench pilot mode.",
      "Zero hydrogen gas leaks confirmed through integrated nitrogen inerting interlocks.",
    ],
    testimonial: {
      quote:
        "Orbit's technical engineers helped us configure the metallurgy, safety relief devices, and heating envelopes tailored exactly to our catalyst synthesis requirements.",
      author: "Chief Scientist & Professor of Catalytic Engineering",
      designation: "CSIR National Chemical Laboratory, Pune",
    },
  },
];

// ==========================================
// 4. FREE INTERACTIVE TOOLS
// ==========================================

export const FREE_TOOLS_META: InteractiveToolMeta[] = [
  {
    id: "calorific-unit-basis-converter",
    title: "Coal Calorific Value (GCV & NCV) Unit & Basis Converter",
    badge: "Most Popular",
    description:
      "Convert between kcal/kg, MJ/kg, and BTU/lb. Convert between As-Received (ar), Air-Dried (ad), Dry (db), and Dry Ash-Free (daf) bases, and compute Net Calorific Value (NCV/LHV) via ASTM D5865 formulas.",
    category: "Fuel & Calorimetry",
    formulaPreview: "GCV_{db} = GCV_{ad} × \\frac{100}{100 - M_{ad}}",
  },
  {
    id: "bomb-water-equivalent-calculator",
    title: "Bomb Calorimeter Water Equivalent (W-Factor) Calculator",
    badge: "Laboratory Calibration",
    description:
      "Calculate the energy equivalent (W) in J/°C or cal/°C using Benzoic Acid pellet mass, temperature rise, fuse wire burn length, and acid titration volume under ASTM D5865 / ISO 1928.",
    category: "Calorimeter Calibration",
    formulaPreview: "W = \\frac{m \\times H + e_1 + e_2}{\\Delta T}",
  },
  {
    id: "reactor-pressure-headspace-sizer",
    title: "High-Pressure Reactor Headspace & Safety Sizer",
    badge: "Process Engineering",
    description:
      "Calculate autoclave pressure based on reagent moles, vapor pressure, and temperature. Verifies liquid fill fraction does not exceed the safe 75% limit under ASME Section VIII rules.",
    category: "Reactor Engineering",
    formulaPreview: "P = \\frac{nRT}{V_{headspace}} + P_{vapor}",
  },
  {
    id: "coal-ash-slagging-predictor",
    title: "Coal Ash Slagging & Fouling Risk Predictor",
    badge: "Power Utilities",
    description:
      "Enter coal ash oxide analysis (% SiO2, Al2O3, Fe2O3, CaO, MgO) to compute the Silica Ratio (SR) and Slagging Factor (Rs) to evaluate boiler tube clinkering severity.",
    category: "Ash & Combustion",
    formulaPreview: "SR = \\frac{SiO_2}{SiO_2 + Fe_2O_3 + CaO + MgO} \\times 100",
  },
];

// ==========================================
// 5. DOWNLOAD CENTER (RESOURCES & MANUALS)
// ==========================================

export const DOWNLOAD_CENTER: DownloadItem[] = [
  {
    id: "dl-parr-7400-brochure",
    title: "Parr 7400 Automatic Isoperibol Calorimeter — Full Product Specification",
    category: "Brochure",
    format: "PDF",
    fileSize: "2.4 MB",
    description:
      "Complete engineering brochure covering automated vessel closure, 4-minute cycle time, closed-loop water circuit, and ASTM D5865 / ISO 1928 compliance details.",
    downloadUrl: "/brochures/parr-7400-calorimeter.pdf",
    tags: ["Parr", "Calorimeters", "Coal Testing", "ASTM D5865"],
    featured: true,
  },
  {
    id: "dl-tga-3000-catalog",
    title: "TGA 3000 Thermogravimetric Analyzer Technical Specification & Whitepaper",
    category: "Brochure",
    format: "PDF",
    fileSize: "3.1 MB",
    description:
      "Comprehensive brochure detailing 19-position sample carousel, integrated balance, proximate analysis software, and ASTM D7582 test protocols.",
    downloadUrl: "/brochures/tga-3000-analyzer.pdf",
    tags: ["TGA", "Proximate Analysis", "Moisture/Ash", "ASTM D7582"],
    featured: true,
  },
  {
    id: "dl-parr-reactor-catalog",
    title: "Parr High Pressure Reactors & Pressure Vessels Engineering Catalog",
    category: "Brochure",
    format: "PDF",
    fileSize: "6.8 MB",
    description:
      "Engineering guide for Parr benchtop, floor stand, and micro-reactors. Includes metallurgy selection chart (316SS, Hastelloy, Inconel, Titanium) and magnetic drive ratings.",
    downloadUrl: "/brochures/parr-stirred-reactors.pdf",
    tags: ["Reactors", "Autoclaves", "Parr", "High Pressure", "ASME VIII"],
    featured: true,
  },
  {
    id: "dl-coal-testing-standards-matrix",
    title: "Coal & Coke Analytical Testing Standards Cross-Reference Matrix (ASTM vs ISO vs BIS)",
    category: "Standards Matrix",
    format: "PDF",
    fileSize: "1.2 MB",
    description:
      "Comprehensive side-by-side comparison table mapping Indian Standard (IS 1350) to ASTM and ISO methods for GCV, Moisture, Ash, Volatile Matter, Carbon/Sulfur, and Ash Fusion.",
    downloadUrl: "/brochures/coal-testing-standards-matrix.pdf",
    tags: ["Standards Matrix", "ASTM", "ISO", "BIS 1350", "Fuel Quality"],
    featured: true,
  },
  {
    id: "dl-preinstallation-utility-guide",
    title: "Pre-Installation Utility & Laboratory Planning Checklist",
    category: "Utility Guide",
    format: "PDF",
    fileSize: "850 KB",
    description:
      "Checklist for laboratory managers preparing power supplies (voltage, UPS capacity), gas cylinder purity (N2, O2, He), cooling water flow, and bench space requirements.",
    downloadUrl: "/brochures/lab-preinstallation-guide.pdf",
    tags: ["Lab Planning", "Utilities", "Gas Purity", "Installation"],
  },
  {
    id: "dl-oxygen-bomb-hydrotest-manual",
    title: "Safety Bulletin: 300-Bar Hydrostatic Recertification of Oxygen Combustion Vessels",
    category: "Application Note",
    format: "PDF",
    fileSize: "1.5 MB",
    description:
      "Official safety protocol compliant with Parr Bulletin 201M detailing vessel retirement criteria, ultrasonic wall inspection, and proof test procedures in Hyderabad.",
    downloadUrl: "/brochures/oxygen-bomb-safety-hydrotesting.pdf",
    tags: ["Safety", "Hydrotesting", "ASME", "Calorimeters"],
  },
  {
    id: "dl-ad-fortis-ip68-catalog",
    title: "A&D Fortis FZ-WP / FX-WP Series IP68 Washdown Balances Catalog",
    category: "Brochure",
    format: "PDF",
    fileSize: "1.8 MB",
    description:
      "Technical catalog detailing IP68 submersible balances, Compact Super Hybrid Sensor (C-SHS), internal calibration, and GLP/GMP audit compliance.",
    downloadUrl: "/brochures/ad-fortis-balances.pdf",
    tags: ["Balances", "A&D", "IP68 Washdown", "Calibration"],
  },
  {
    id: "dl-elemental-cs-application-note",
    title: "Application Note: Ultra-Low Carbon & Sulfur in Electrical Steels (ASTM E1019)",
    category: "Application Note",
    format: "PDF",
    fileSize: "1.4 MB",
    description:
      "Technical guide to sample preparation, ceramic crucible pre-blanking, and NDIR sensitivity calibration for steel heats below 10 ppm carbon and sulfur.",
    downloadUrl: "/brochures/carbon-sulfur-electrical-steels.pdf",
    tags: ["Steel", "Metallurgy", "ASTM E1019", "NCS"],
  },
];
