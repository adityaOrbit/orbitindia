export interface IndustryDetail {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  image: string;
  instruments: string[];
  recommendedSlugs: string[];
  keyChallenges: string[];
  testingStandards: { code: string; title: string }[];
  applications: { name: string; desc: string }[];
}

export const industries: IndustryDetail[] = [
  {
    slug: "coal-coke-fuels",
    name: "Coal, Coke & Fuels",
    tagline: "Calorific Value & Proximate Testing for Power & Mining",
    blurb:
      "Calorific value, proximate and ultimate analysis for coal, coke, biomass, petroleum coke and alternative fuels — power plants, captive generation and fuel traders.",
    image: "/images/industries/fuels-energy.jpg",
    instruments: ["Bomb Calorimeters", "TGA Proximate Analyzers", "Ash Fusion Analyzers", "Elemental Analyzers (CHNS/O)"],
    recommendedSlugs: [
      "6400-automatic-isoperibol-calorimeter",
      "tga-3000-thermogravimetric-analyzer",
      "oxygen-combustion-vessel",
      "6050-automatic-pc-based-calorimeter",
    ],
    keyChallenges: [
      "Rapid determination of Gross Calorific Value (GCV) for third-party commercial coal billing",
      "Automated proximate analysis (Moisture, Volatile Matter, Ash, Fixed Carbon) reducing manual errors",
      "Detection of coal ash slagging and fouling behavior in high-temperature utility boilers",
      "Measurement of total sulfur in coal to meet thermal plant flue gas desulfurization (FGD) environmental norms",
    ],
    testingStandards: [
      { code: "ASTM D5865 / D5865M", title: "Standard Test Method for Gross Calorific Value of Coal and Coke" },
      { code: "ISO 1928", title: "Solid mineral fuels — Determination of gross calorific value by bomb calorimetric method" },
      { code: "ASTM D7582", title: "Standard Test Methods for Proximate Analysis of Coal and Coke by Macro Thermogravimetric Analysis" },
      { code: "ASTM D1857 / ISO 540", title: "Standard Test Method for Fusibility of Coal and Coke Ash" },
      { code: "ASTM D4239", title: "Standard Test Method for Sulfur in the Analysis Sample of Coal and Coke Using High-Temperature Tube Furnace" },
    ],
    applications: [
      { name: "Gross Calorific Value (GCV)", desc: "High-throughput isoperibol bomb calorimetry with automatic water filling and jacket temperature control." },
      { name: "Automated Proximate Analysis", desc: "Simultaneous 19-sample carousel TGA for moisture, volatile matter, and ash content within single automated temperature profile." },
      { name: "Coal Ash Fusibility Determination", desc: "Automated camera tracking of Initial Deformation (IT), Softening (ST), Hemispherical (HT), and Fluid (FT) temperatures." },
      { name: "Sulfur & Nitrogen Quantification", desc: "High-temperature induction combustion and Dumas method analysis for elemental impurities." },
    ],
  },
  {
    slug: "cement",
    name: "Cement & Building Materials",
    tagline: "Raw Meal, Clinker, and Loss on Ignition Quality Control",
    blurb:
      "Raw meal, clinker and cement QC — elemental analysis of major and minor oxides, loss on ignition and free-lime testing for pyro and grinding circuits.",
    image: "/images/industries/cement-steel.jpg",
    instruments: ["Elemental Analyzers", "TGA / Proximate", "Mills & Pulverisers", "Certified Reference Materials"],
    recommendedSlugs: [
      "tga-3000-thermogravimetric-analyzer",
      "series-4500-stirred-reactors",
      "tga-1500-catalogue",
    ],
    keyChallenges: [
      "Accurate Loss on Ignition (LOI) testing of raw meal, limestone, and finished cement",
      "Rapid grinding and fine milling of abrasive clinker without cross-contamination",
      "Total carbon and sulfur determination in alternative fuels (AFR) fed into cement precalciners",
      "Trace moisture determination in gypsum, fly ash, and ground granulated blast furnace slag (GGBS)",
    ],
    testingStandards: [
      { code: "ASTM C114", title: "Standard Test Methods for Chemical Analysis of Hydraulic Cement" },
      { code: "EN 196-2", title: "Methods of testing cement — Chemical analysis of cement" },
      { code: "ISO 29581-2", title: "Methods of testing cement — Determination of loss on ignition and chemical composition" },
      { code: "IS 4032", title: "Method of Chemical Analysis of Hydraulic Cement (Bureau of Indian Standards)" },
    ],
    applications: [
      { name: "Loss on Ignition (LOI)", desc: "Automated multi-sample thermogravimetry replacing muffle furnaces and analytical balance desiccation steps." },
      { name: "Clinker Grindability & Sizing", desc: "Vibratory disc milling achieving < 75 micron analytical fineness in under 60 seconds." },
      { name: "Alternative Fuel Characterization", desc: "Calorific value and halogen content testing for shredded tires, refuse-derived fuel (RDF), and biomass co-processing." },
    ],
  },
  {
    slug: "steel-metallurgy",
    name: "Steel & Metallurgy",
    tagline: "Sub-PPM Carbon, Sulfur & ONH Control from Tap to Finished Heat",
    blurb:
      "Carbon and sulfur in iron ore, sinter, fluxes and finished metals, plus ONH in steel — fast, repeatable heat-level control from the lab bench.",
    image: "/images/industries/cement-steel.jpg",
    instruments: ["High-Frequency Induction CS Analyzers", "Inert Gas Fusion ONH Analyzers", "Laboratory Balances", "Consumables & CRMs"],
    recommendedSlugs: [
      "csbox-hfa-c-analyzer",
      "series-4500-stirred-reactors",
      "tga-3000-thermogravimetric-analyzer",
    ],
    keyChallenges: [
      "Sub-ppm precision of carbon and sulfur in ultra-low carbon steels and electrical grade silicon steels",
      "Oxygen, Nitrogen, and Hydrogen (gases in metals) control for preventing brittleness and hydrogen cracking",
      "Rapid sample turnaround (< 40 seconds) to enable real-time ladle metallurgy furnace (LMF) corrections",
      "Total organic and inorganic carbon determination in direct reduced iron (DRI) and iron ore pellets",
    ],
    testingStandards: [
      { code: "ASTM E1019", title: "Standard Test Methods for Determination of Carbon, Sulfur, Nitrogen, and Oxygen in Steel, Iron, Nickel, and Cobalt Alloys" },
      { code: "ISO 9556", title: "Steel and iron — Determination of total carbon content — Infrared absorption method after combustion" },
      { code: "ISO 15350", title: "Steel and iron — Determination of total carbon and sulfur content" },
      { code: "ASTM E1941", title: "Standard Test Method for Determination of Carbon in Refractory and Reactive Metals" },
    ],
    applications: [
      { name: "Combustion Carbon & Sulfur", desc: "Induction furnace heating up to 2200°C with solid-state non-dispersive infrared (NDIR) detection." },
      { name: "Inert Gas Fusion ONH", desc: "Graphite crucible impulse furnace extraction for interstitial gas analysis in high-strength alloys." },
      { name: "Sinter & Slag Analysis", desc: "Sample pulverizing and fusion flux preparation for XRF and spark optical emission spectroscopy." },
    ],
  },
  {
    slug: "minerals-mining",
    name: "Minerals & Mining",
    tagline: "Assay and Process Control for Exploration, Beneficiation & Smelting",
    blurb:
      "Assay and process control for base and precious metals, ores, minerals and geological samples — from exploration drilling to plant flow sheets.",
    image: "/images/industries/minerals-materials.jpg",
    instruments: ["Vibratory Disc Mills", "Jaw Crushers", "Resistance CS Analyzers", "Analytical Balances"],
    recommendedSlugs: [
      "tga-3000-thermogravimetric-analyzer",
      "csbox-hfa-c-analyzer",
      "6400-automatic-isoperibol-calorimeter",
    ],
    keyChallenges: [
      "Comminution of hard, abrasive geological cores and drill samples down to analytical size",
      "Sulfur speciation (pyritic, sulfate, and organic sulfur) in complex mineral matrices",
      "High-throughput screening without cross-sample carryover in commercial assay labs",
      "Acid digestion of refractory mineral ores for ICP/AA analysis",
    ],
    testingStandards: [
      { code: "ISO 13310", title: "Iron ores — Determination of total carbon content — High-frequency combustion method" },
      { code: "ISO 4689", title: "Iron ores — Determination of sulfur content" },
      { code: "ASTM D3177", title: "Standard Test Methods for Total Sulfur in the Analysis Sample of Coal and Coke" },
    ],
    applications: [
      { name: "Sample Grinding & Pulverizing", desc: "Heavy-duty tungsten carbide and chrome-steel milling sets handling up to 1000g of ore." },
      { name: "Total Sulfur & Carbon in Ores", desc: "Resistance tube furnace combustion up to 1450°C designed specifically for high-sulfur sulfide ores." },
      { name: "Teflon Bomb Acid Digestion", desc: "Parr 4744 / 4749 acid digestion vessels for complete dissolution of silica and refractory mineral matrices." },
    ],
  },
  {
    slug: "chemicals-petrochemicals",
    name: "Chemicals & Petrochemicals",
    tagline: "High-Pressure Catalysis, Polymerization & Organic Impurities",
    blurb:
      "Parr laboratory reactors and pressure vessels for catalysis, polymerisation and corrosion work, plus CHNS/O analysis of intermediates and products.",
    image: "/images/industries/chemical-pharmaceutical.jpg",
    instruments: ["Laboratory Reactors", "Acid Digestion Vessels", "Elemental Analyzers", "Gas Generators"],
    recommendedSlugs: [
      "series-4500-stirred-reactors",
      "series-5500-high-pressure-compact-laboratory-reactors",
      "series-high-4540-600-1200ml-pressure-reactors",
    ],
    keyChallenges: [
      "Safe handling of extreme pressures (up to 350 bar) and temperatures (up to 500°C) during catalytic hydrogenation",
      "Corrosion-resistant metallurgy (Hastelloy, Inconel, Monel, Titanium) for aggressive acid catalysts",
      "Trace nitrogen and sulfur detection in naphtha, diesel, polymers, and specialty intermediates",
      "Automated recipe control, data acquisition, and exotherm safety alarms in pilot plants",
    ],
    testingStandards: [
      { code: "ASTM D5291", title: "Standard Test Methods for Instrumental Determination of Carbon, Hydrogen, and Nitrogen in Petroleum Products" },
      { code: "ASTM D5453", title: "Standard Test Method for Determination of Total Sulfur in Light Hydrocarbons" },
      { code: "ASME Boiler & Pressure Vessel Code", title: "Section VIII, Division 1 for Chemical Reactor Pressure Retaining Parts" },
    ],
    applications: [
      { name: "Catalytic Hydrogenation & Synthesis", desc: "Parr stirred autoclaves with magnetic drives, internal cooling coils, and high-pressure liquid/gas metering." },
      { name: "Polymerization & Depolymerization", desc: "Custom reactor geometries for viscous polymers, bioplastics, and chemical recycling." },
      { name: "Elemental CHNS-O Characterization", desc: "Flash combustion Dumas method testing for organic synthesis intermediates and catalysts." },
    ],
  },
  {
    slug: "pharmaceuticals-life-sciences",
    name: "Pharmaceuticals & Life Sciences",
    tagline: "Process Safety Screening, API Synthesis & Impurity Analysis",
    blurb:
      "Reaction calorimetry, process safety screening and elemental impurity testing for formulation, API and biotech development laboratories.",
    image: "/images/industries/chemical-pharmaceutical.jpg",
    instruments: ["Reaction Autoclaves", "Organic CHNS/O Analyzers", "Micro-Balances", "Acid Digestion Vessels"],
    recommendedSlugs: [
      "series-4500-stirred-reactors",
      "series-5500-high-pressure-compact-laboratory-reactors",
      "oxygen-combustion-vessel",
    ],
    keyChallenges: [
      "Process safety screening and thermal run-away hazard evaluation for scalable API synthesis",
      "Accurate determination of carbon, hydrogen, and nitrogen ratios in novel active pharmaceutical molecules",
      "Trace metal digestion in Teflon vessels compliant with USP <232>/<233> and ICH Q3D elemental impurity rules",
      "Data integrity, audit trails, and 21 CFR Part 11 software compliance",
    ],
    testingStandards: [
      { code: "USP <232> / <233>", title: "Elemental Impurities — Limits and Procedures" },
      { code: "ICH Q3D", title: "Guideline for Elemental Impurities in Pharmaceuticals" },
      { code: "21 CFR Part 11", title: "Electronic Records and Electronic Signatures" },
    ],
    applications: [
      { name: "API Hydrogenation Screening", desc: "Multiple parallel stirred reactor blocks for rapid screening of catalyst loadings and solvents." },
      { name: "Microwave / Acid Digestion", desc: "Parr high-purity PTFE digestion vessels for total extraction of heavy metal impurities without sample loss." },
      { name: "Elemental Verification", desc: "Micro-combustion CHNS determination on milligram quantities of fine chemicals." },
    ],
  },
  {
    slug: "food-agriculture",
    name: "Food & Agriculture",
    tagline: "Combustion Protein, Fat Energy & Soil Nutrient Analysis",
    blurb:
      "Protein, fat and energy in food, feed, grain, soil and fertiliser — combustion analysis and bomb calorimetry for QA labs and research stations.",
    image: "/images/industries/food-agriculture.jpg",
    instruments: ["Bomb Calorimeters", "Dumas Nitrogen / Protein Analyzers", "Soil Testing Kits", "Milling Equipment"],
    recommendedSlugs: [
      "6400-automatic-isoperibol-calorimeter",
      "6050-automatic-pc-based-calorimeter",
      "oxygen-combustion-vessel",
    ],
    keyChallenges: [
      "Rapid protein determination by Dumas combustion replacing hazardous, slow Kjeldahl digestion",
      "Gross energy determination in animal feed, pet food, and dietary foodstuffs via bomb calorimetry",
      "Nutrient mapping (Available N, P, K, Organic Carbon) for soil health card schemes across rural districts",
      "Pesticide residue sample preparation and fine food homogenizing",
    ],
    testingStandards: [
      { code: "AOAC 992.15 / 990.03", title: "Crude Protein in Animal Feed and Cereal Grains — Combustion Method (Dumas)" },
      { code: "ISO 16634", title: "Food products — Determination of the total nitrogen content by combustion according to the Dumas principle" },
      { code: "ISO 9831", title: "Animal feeding stuffs, animal products, and faeces or urine — Determination of gross calorific value" },
    ],
    applications: [
      { name: "Dumas Combustion Protein", desc: "Safe, 3-minute nitrogen determination using pure oxygen combustion and thermal conductivity detection." },
      { name: "Dietary Caloric Energy", desc: "Parr oxygen bomb calorimetry for nutritional label calorific verification." },
      { name: "Soil Testing Laboratory Kits", desc: "Complete testing suites manufactured by Orlab Instruments for soil nutrients and pH parameters." },
    ],
  },
  {
    slug: "research-education",
    name: "Research & Education",
    tagline: "Instrumentation for Central Universities, IITs & CSIR",
    blurb:
      "Complete teaching and research laboratories — elemental and thermal analysis, high-temperature furnaces and versatile Parr reactor systems.",
    image: "/images/industries/research-education.jpg",
    instruments: ["Stirred Chemical Reactors", "High Temp Tube Furnaces (1850°C)", "Elemental Analyzers", "Sample Prep"],
    recommendedSlugs: [
      "series-4500-stirred-reactors",
      "series-5500-high-pressure-compact-laboratory-reactors",
      "csbox-hfa-c-analyzer",
      "tga-3000-thermogravimetric-analyzer",
    ],
    keyChallenges: [
      "Multi-user laboratory versatility handling diverse student experiments and multidisciplinary research",
      "Safe high-pressure and high-temperature operation with fail-safe rupture discs and automated interlocks",
      "Long service lifetime (15–20+ years) supported by sustained local spare parts availability in India",
      "Tender compliance and technical specification support for national competitive bidding (GeM / CPPP)",
    ],
    testingStandards: [
      { code: "ASTM & ISO Method Library", title: "Over 50 international standard testing procedures pre-programmed into system software" },
      { code: "CE / ASME Standards", title: "Safety certifications required for academic university laboratories" },
    ],
    applications: [
      { name: "Chemical Engineering Pilot Units", desc: "Parr stirred and continuous tubular reactors for catalysis, hydrothermal carbonization, and biofuels." },
      { name: "Advanced Materials Sintering", desc: "Elite 1850°C tube and chamber furnaces for solid-state synthesis, battery cathode materials, and ceramics." },
      { name: "Materials Characterization Suites", desc: "Integrated elemental analysis, proximate analysis, and calorimetry suites for central analytical facilities (CRF)." },
    ],
  },
];
