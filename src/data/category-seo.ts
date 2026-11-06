import type { Category } from "@/data/categories";

export type CategorySeoData = {
  heroIntro: string;
  metaTitle: string;
  metaDescription: string;
  overviewTitle: string;
  technicalSummary: string;
  principles: string[];
  standards: { code: string; title: string; scope: string }[];
  applications: { industry: string; useCase: string }[];
  selectionCriteria: { factor: string; description: string }[];
  faqs: { q: string; a: string }[];
};

/**
 * Curated introductory text for each category and subcategory.
 * STRICTLY verified to be between 20 and 35 words with NO CTA.
 */
export const CATEGORY_HERO_INTROS: Record<string, string> = {
  "advanced-level-analytical":
    "High-precision analytical balances featuring rapid stabilization, internal calibration mechanisms, and breeze break enclosures designed for exacting chemical formulation and research quality control across Indian testing laboratories.",
  "analytical-instruments":
    "Orbit Technologies manufactures and distributes premier scientific analytical instruments across India, providing advanced measurement solutions for elemental composition, thermal analysis, calorific value, and materials testing.",
  "ash-fusion-analyzers":
    "Automated ash fusion temperature analyzers determining deformation, softening, hemispherical, and fluid temperatures of coal and biomass ash under controlled atmospheres in compliance with ASTM D1857 and ISO 5416.",
  "calorimeter":
    "Parr oxygen bomb, isoperibol, and solution calorimeters delivering high-precision gross calorific value measurements for solid and liquid fuels per ASTM D5865 and ISO 1928, backed by nationwide engineering support.",
  "calorimeter/bomb-calorimeters":
    "Automated isoperibol and jacketed oxygen bomb calorimeters for determining gross calorific values in coal, coke, biomass, and petroleum products in strict compliance with ASTM D5865, ISO 1928, and DIN 51900.",
  "calorimeter/detonation-calorimeter":
    "Specialized Parr detonation calorimeters designed for safely measuring heat release, shockwave dynamics, and explosive energy outputs of energetic materials, propellants, and pyrotechnic compounds in controlled containment systems.",
  "calorimeter/semimicro-and-solution-calorimeters":
    "High-sensitivity semimicro oxygen bomb and solution calorimeters engineered for measuring heats of solution, reaction, and mixing in small-mass or low-energy samples with microcalorie thermal resolution.",
  "certified-and-standard-reference-materials":
    "NIST and ISO 17034 certified reference materials, elemental analysis consumables, and standard reagents for coal, ores, petroleum, and environmental testing, guaranteeing measurement traceability and analytical quality assurance.",
  "chamber-furnaces":
    "Precision laboratory and industrial chamber furnaces by Elite Thermal Systems and Orbit, offering uniform heating up to 1800°C for ashing, heat treatment, sintering, and metallurgical material testing.",
  "chamber-furnaces/ashing-furnace":
    "Specialized laboratory ashing furnaces featuring pre-heated air sweeps, exhaust chimneys, and corrosion-resistant muffle linings designed for loss-on-ignition, coal ashing, and food sample burn-off per ASTM D3174.",
  "chamber-furnaces/industrial-chamber-furnace":
    "Heavy-duty industrial chamber furnaces from 72 to 203 liters with silicon carbide or molybdenum disilicide heating elements, providing dependable thermal processing and stress relieving up to 1700°C.",
  "chamber-furnaces/laboratory-chamber-furnace":
    "Compact benchtop laboratory chamber furnaces featuring digital PID ramp/soak controllers, lightweight ceramic fiber insulation, and fast thermal response for routine laboratory heating and materials research up to 1200°C.",
  "coal-and-coke-testing-instruments":
    "Specialized coal and coke testing systems including Gieseler plastometers, Audibert-Arnu dilatometers, and crucible swelling index apparatus for accurate thermoplastic and rheological characterization of metallurgical coal blends.",
  "crms-srms-laboratory-accessories":
    "Complete portfolio of certified reference materials, calibration standards, tin capsules, reagents, and specialized laboratory accessories supporting daily analytical accuracy and regulatory compliance across Indian laboratories.",
  "elemental-analyzers":
    "Comprehensive organic and inorganic elemental analyzers for rapid carbon, sulfur, nitrogen, hydrogen, and oxygen determination across steel, coal, ores, and catalysts with NDIR and thermal conductivity detection systems.",
  "elemental-analyzers/carbon-and-sulfur-analyzers":
    "High-frequency induction furnace and resistance furnace analyzers delivering precise carbon and sulfur determination in metals, ores, coal, and cement per ASTM E1019, ASTM D4239, and ISO 15350 standards.",
  "elemental-analyzers/chns-analyzers":
    "Advanced CHNS/O combustion analyzers for organic elemental quantification in pharmaceuticals, polymers, petrochemicals, and agronomy samples with automated multi-sample carousel operation and high-precision thermal conductivity detection.",
  "elemental-analyzers/onh-analyzer":
    "Inert gas fusion elemental analyzers delivering accurate oxygen, nitrogen, and hydrogen trace determinations in refractory metals, advanced alloys, and titanium matrices per ASTM E1409 and E1019 standards.",
  "extratex":
    "Specialized supercritical fluid and solvent extraction instrumentation engineered for natural product research, flavor extraction, and bioactive compound fractionation from botanical and synthetic sources.",
  "extratex/industrial":
    "Industrial-scale solvent and supercritical extraction systems built for efficient botanical processing, natural product separation, and commercial bioactive compound recovery with robust sanitary stainless-steel construction.",
  "extratex/laboratory":
    "Benchtop laboratory extraction units engineered for analytical research, methodology development, and rapid bioactive compound extraction using environmentally friendly pressurized solvents and subcritical fluids.",
  "furnace-heating-systems":
    "Comprehensive thermal processing portfolio including chamber, tube, muffle, and vacuum furnaces from Elite Thermal Systems UK and Orbit, serving scientific research and industrial metallurgy up to 1850°C.",
  "gas-generators":
    "Ultra-pure hydrogen, zero air, and nitrogen laboratory gas generators utilizing advanced PEM electrolysis and catalytic filtration to supply analytical GC, GC-MS, and carrier gas lines safely on demand.",
  "high-temperature-tube-furnace":
    "UK-built high-temperature tube furnaces utilizing lanthanum chromite or molybdenum disilicide elements, achieving continuous operating temperatures up to 1850°C for advanced ceramics and crystal growth experiments.",
  "laboratory-accessories":
    "Specialized laboratory sampling devices, drum pumps, liquid dispensers, digestion vessels, and quartz glassware designed for safe handling and contamination-free sample handling in testing facilities.",
  "light-industrial-chamber-furnace-1400c-to-1700-c":
    "Rugged high-temperature chamber furnaces engineered for light industrial duty, featuring heavy-gauge heating elements, multi-layer insulation, and programmable digital controls for continuous operation up to 1700°C.",
  "melting-furnaces":
    "High-capacity melting furnaces engineered for non-ferrous metals, precious metals, and foundry testing, delivering rapid heat-up rates, precision crucible tilting, and uniform melt temperatures.",
  "metal-sample-preparation-equipment":
    "High-performance metal cutting, grinding, and surface preparation machinery engineered for optical emission spectroscopy (OES) and X-ray fluorescence (XRF) metallurgical quality inspection.",
  "micro-analytical":
    "High-sensitivity micro and semi-micro analytical balances featuring 0.001 mg readability, built-in fanless ionizers, and anti-static draft shields for high-precision pharmaceutical and micro-gravimetric weighing.",
  "milling-pulverising":
    "Laboratory mills, jaw crushers, and disc pulverisers engineered for contamination-free sample comminution, fine grinding, and homogenous particle size reduction required for XRF, ICP, and wet chemical analysis.",
  "milling-pulverising/ball-mill":
    "Planetary and vibration ball mills engineered for high-energy pulverizing, mechanical alloying, and colloidal grinding of hard, brittle, and fibrous materials down to sub-micron particle distributions.",
  "muffle-furnace":
    "Durable laboratory muffle furnaces with embedded heating elements and ceramic fiber chambers, providing clean heating environments for ash determination, loss on ignition, and materials heat treatment.",
  "other-instruments":
    "Specialized laboratory test benches, automated titrators, and auxiliary analytical instrumentation supplied with certified calibration, factory commissioning, and dedicated maintenance support across Indian laboratories.",
  "ovens":
    "Precision forced-convection laboratory ovens and industrial drying ovens engineered for uniform air circulation, moisture determination, component curing, and thermal stability aging up to 300°C.",
  "precision-balances":
    "A&D precision, analytical, and micro balances delivering rapid stabilization, electro-magnetic force restoration, and internal motorized calibration for high-accuracy scientific weighing in compliance with GLP and ISO standards.",
  "precision-balances/advanced-level-precision":
    "Advanced precision top-loading balances with compact Super Hybrid Sensors, rapid one-second stabilization, and external wind-resistant weighing pans for dependable analytical formulation and production quality control.",
  "precision-balances/entry-level-precision":
    "Economical and durable benchtop precision balances engineered for routine laboratory weighing, density determination, and educational applications with straightforward digital calibration.",
  "precision-balances/standard-level-precision":
    "Standard-level high-precision balances featuring automatic internal calibration, robust overload protection, and bi-directional RS-232 and USB data connectivity for GLP/GMP laboratory recordkeeping.",
  "premium-level-micro-semi-micro":
    "Premium micro and semi-micro balances offering 5-place and 6-place readability, integrated electrostatic elimination, and motorized breeze breaks for pharmaceutical, analytical chemistry, and standard reference calibration.",
  "rapid-heating-chamber-furnaces-1200":
    "Rapid-heating chamber furnaces with low thermal mass insulation, delivering fast ramp rates and rapid cooling cycles for high-throughput laboratory thermal cycling and materials evaluation up to 1200°C.",
  "reactors":
    "World-leading Parr high-pressure, high-temperature stirred and non-stirred reactors, continuous tubular flow systems, and custom autoclaves for catalysis, hydrothermal synthesis, and corrosion monitoring up to 5000 psi and 500°C.",
  "reactors/customized-reactors":
    "Custom-engineered Parr reactor systems tailored for multi-phase catalytic reactions, pilot-scale process validation, corrosion loop monitoring, and high-pressure chemical engineering research with automated gas-liquid sampling systems.",
  "reactors/glass-reactors":
    "Visual pressure glass reactors designed for direct optical observation of chemical reactions, phase transitions, and color changes under elevated pressures up to 12 bar with protective polycarbonate shielding.",
  "reactors/hp-ht-reactors":
    "High-pressure, high-temperature laboratory reactors engineered in corrosion-resistant alloys including Hastelloy, Inconel, and Titanium for supercritical fluids, polymerization, and catalytic hydrogenation testing under extreme process conditions.",
  "reactors/hp-ht-reactors/non-stirred-pressure-vessels":
    "Compact and floor-stand non-stirred pressure vessels for hydrothermal synthesis, static corrosion testing, and elevated pressure storage, manufactured to ASME Section VIII codes with rupture disc overpressure protection.",
  "reactors/hp-ht-reactors/stirred-reactors":
    "Standard and custom Parr stirred laboratory reactors from 25 mL to 100 liters, featuring magnetic drive agitation, internal cooling coils, and automated PID cascade temperature control up to 5000 psi.",
  "reactors/reactor-systems-for-corrosion-monitoring-studies":
    "Specialized autoclave systems integrated with electrochemical probes, rotating cage autoclaves, and recirculating test loops to evaluate material corrosion rates, stress corrosion cracking, and sour gas degradation.",
  "reactors/sample-preparation-vessels":
    "Corrosion-resistant acid digestion, cell disruption, and microwave vessels for rapid decomposition of refractory matrices, trace metal dissolution, and biological lysis with high-purity PTFE fluoropolymer liners.",
  "reactors/sample-preparation-vessels/acid-digestion-vessels":
    "Heavy-walled Parr acid digestion bombs engineered with removable PTFE cups for rapid, contamination-free dissolution of inorganic and organic samples using concentrated mineral acids under elevated temperatures and pressures.",
  "reactors/sample-preparation-vessels/cell-disruption-vessels":
    "Rapid nitrogen decompression cell disruption vessels for gentle, temperature-controlled lysis of mammalian cells, plant tissue, and microorganisms while preserving delicate organelle and protein integrity.",
  "reactors/sample-preparation-vessels/microwave-digestion-vessels":
    "Metal-free microwave digestion vessels engineered for microwave-accelerated acid decomposition of challenging geological, environmental, and metallurgical samples prior to ICP-OES and ICP-MS trace elemental analysis.",
  "reactors/shaker-hydrogenation-apparatus":
    "Compact benchtop shaker hydrogenation systems providing vigorous agitation and controlled hydrogen gas supply up to 5 atmospheres for catalytic reduction of organic compounds, pharmaceuticals, and synthetic intermediates.",
  "reactors/tubular-reactors":
    "Continuous flow fixed-bed and fluidized tubular reactors engineered for gas-phase and liquid-phase heterogeneous catalytic testing, kinetic modeling, and catalyst screening under steady-state high-pressure high-temperature conditions.",
  "retort-furnace":
    "Controlled-atmosphere retort furnaces featuring sealed internal alloy vessels and vacuum capability, designed for clean annealing, sintering, and thermal processing without oxidation.",
  "semi-micro-analytical":
    "High-speed semi-micro analytical balances providing dual-range weighing, anti-static breeze break enclosures, and automated self-calibration for fine chemical synthesis and standard reference preparations.",
  "sieving":
    "Laboratory electromagnetic and air-jet sieve shakers engineered for precise dry and wet particle size distribution analysis in compliance with ISO 3310 and ASTM E11 specifications.",
  "sintering-furnace":
    "High-temperature sintering furnaces engineered for technical ceramics, metal powder consolidation, and dental zirconia processing with programmable thermal profiles and excellent chamber temperature uniformity.",
  "special-analyzers":
    "Dedicated analytical systems for specialized determinations including AOX/TOX halides, total organic carbon (TOC), and carbonate analysis across environmental testing and industrial process monitoring.",
  "standard-level-analytical":
    "Standard analytical laboratory balances delivering 0.1 mg readability, intuitive digital operation, and fast response times for everyday educational, industrial, and analytical chemistry formulation.",
  "tga-proximate-analyzers":
    "Automated thermogravimetric analyzers providing simultaneous proximate analysis of moisture, volatile matter, fixed carbon, and ash content for up to 19 coal, coke, and biomass samples per ASTM D7582.",
  "tube-furnace":
    "High-precision horizontal and vertical tube furnaces by Elite Thermal Systems UK, providing uniform heated lengths and controlled gas atmospheres for material science and semiconductor research.",
  "tube-furnaces":
    "Comprehensive range of single-zone and multi-zone tube furnaces from Elite Thermal Systems UK, designed for inert, reducing, or vacuum atmosphere thermal processing up to 1800°C.",
  "tube-furnaces/split-tube-furnaces":
    "Hinged split tube furnaces providing easy access to reaction work tubes, tensile test rigs, and reactors, with uniform heating lengths up to 1100°C for material science research.",
  "tube-furnaces/vacuum-tube-furnaces":
    "High-vacuum tube furnace systems with gas-tight flange assemblies and digital mass flow controllers, engineered for inert gas annealing, chemical vapor deposition, and clean sintering up to 1500°C.",
  "xrf-icp-sample-preparation-equipment":
    "Automated fusion fluxers, hydraulic pellet presses, and surface grinders ensuring pristine, homogenous sample preparation for X-ray fluorescence and inductively coupled plasma spectrometry."
};

/**
 * Returns a clean, verified introductory text strictly between 20 and 35 words.
 */
export function getCategoryHeroIntro(category: Category): string {
  if (CATEGORY_HERO_INTROS[category.path]) {
    return CATEGORY_HERO_INTROS[category.path];
  }

  // Fallback generation guaranteed to be 20-35 words
  const baseName = category.name;
  const pillarDesc =
    category.pillar === "reactors"
      ? "high-pressure autoclave and catalytic reaction systems"
      : category.pillar === "furnaces"
      ? "high-temperature laboratory and industrial heating systems"
      : category.pillar === "sample-prep"
      ? "precision milling, pulverizing, and sample comminution instruments"
      : category.pillar === "crms"
      ? "certified reference standards, calibration materials, and laboratory consumables"
      : "advanced analytical instrumentation and precision laboratory testing equipment";

  const generated = `Orbit Technologies supplies certified ${baseName} and ${pillarDesc} across India. Our systems deliver reproducible precision, compliant calibration, and full technical lifecycle support for quality control and research laboratories.`;

  const words = generated.trim().split(/\s+/);
  if (words.length >= 20 && words.length <= 35) {
    return generated;
  }
  return words.slice(0, 28).join(" ") + ".";
}

/**
 * Domain-specific technical SEO data tailored for search engine ranking
 * covering ASTM/ISO standards, working principles, applications, and FAQs.
 */
export function getCategorySeoData(category: Category): CategorySeoData {
  const intro = getCategoryHeroIntro(category);

  // Common baseline data by pillar and category
  if (category.path.startsWith("calorimeter")) {
    return {
      heroIntro: intro,
      metaTitle: `${category.name} | Parr Bomb Calorimeters India | Orbit Technologies`,
      metaDescription: `High-precision Parr oxygen bomb and isoperibol calorimeters for coal, fuel, and biomass gross calorific value testing per ASTM D5865 & ISO 1928 in India.`,
      overviewTitle: `Technical Working Principles & Standards for Calorimetry`,
      technicalSummary:
        "Calorimetry determines the gross calorific value (GCV) or higher heating value (HHV) of combustible solid and liquid substances by burning a weighed test specimen in a pressurized pure oxygen atmosphere enclosed within a heavy-walled metal bomb vessel immersed in a controlled water jacket. By recording the precise temperature rise with millikelvin thermistors and applying corrections for acid formation, fuse wire combustion, and thermal exchange, the instrument calculates the exact heat of combustion with exceptional repeatability.",
      principles: [
        "Isoperibol Measurement: The calorimeter maintains a constant outer jacket temperature while tracking the vessel's internal temperature curve to calculate heat exchange coefficients dynamically.",
        "Oxygen Combustion: Samples burn completely in high-purity oxygen (30 bar / 450 psi) ensuring total oxidation of carbon, hydrogen, and volatile hydrocarbons.",
        "Precision Temperature Tracking: Sub-millikelvin electronic thermistors measure minute temperature elevations with continuous electronic baseline stabilization.",
        "Automated Corrections: Integrated microprocessor software applies real-time corrections for nitric and sulfuric acid formation, ignition wire energy, and moisture content."
      ],
      standards: [
        { code: "ASTM D5865 / D5865M", title: "Standard Test Method for Gross Calorific Value of Coal and Coke", scope: "Primary test standard for thermal power generation and commercial coal trading across India." },
        { code: "ISO 1928", title: "Solid Mineral Fuels — Determination of Gross Calorific Value by the Bomb Calorimetric Method", scope: "International reference methodology for coal, coke, and solid biofuels." },
        { code: "ASTM D240", title: "Standard Test Method for Heat of Combustion of Liquid Hydrocarbon Fuels", scope: "Applicable to aviation fuels, diesel, heavy fuel oils, and petrochemical distillates." },
        { code: "DIN 51900", title: "Testing of Solid and Liquid Fuels — Determination of Gross Calorific Value", scope: "European norm for precision combustion bomb calorimetry in industrial laboratories." }
      ],
      applications: [
        { industry: "Thermal Power & Coal Beneficiation", useCase: "Determining coal GCV for tariff billing, boiler heat rate optimization, and fuel blending quality control." },
        { industry: "Petroleum Refineries & Biofuels", useCase: "Measuring energy density of diesel, aviation turbine fuel, bio-ethanol, and heavy bunker fuel." },
        { industry: "Cement Manufacturing", useCase: "Evaluating alternative fuel resources (AFR), refuse-derived fuel (RDF), and petcoke calorific efficiency." },
        { industry: "Academic & Forensic Research", useCase: "Thermodynamic research, explosives energy characterization, and combustion kinetics." }
      ],
      selectionCriteria: [
        { factor: "Jacket Type", description: "Isoperibol jackets offer rapid testing cycles (under 7 minutes), whereas adiabatic jackets provide zero heat exchange for research accuracy." },
        { factor: "Automation Level", description: "Automated bomb loading, water filling, and bomb washing reduce operator involvement and increase daily sample throughput." },
        { factor: "Bomb Vessel Metallurgy", description: "Standard alloy for normal coal/oil; halogen-resistant and corrosion-proof alloys for chlorine-rich wastes and biomass." }
      ],
      faqs: [
        {
          q: "What is the primary difference between isoperibol and adiabatic calorimeters?",
          a: "In an isoperibol calorimeter, the outer jacket temperature is held strictly constant while sophisticated algorithms calculate heat exchange between the vessel and jacket. In an adiabatic calorimeter, the jacket temperature is continuously driven to match the bucket temperature, eliminating heat transfer. Modern Parr isoperibol calorimeters deliver equivalent accuracy with significantly shorter test cycles and simpler maintenance."
        },
        {
          q: "Which standards govern bomb calorimetry testing in Indian laboratories?",
          a: "The most widely referenced standards in India are ASTM D5865, ISO 1928, and IS 1350 (Part II) for coal, and ASTM D240 / ASTM D4809 for liquid petroleum fuels. Orbit supplies instruments fully verified against these testing protocols."
        },
        {
          q: "How often should oxygen combustion bombs undergo hydrostatic pressure testing?",
          a: "Under international safety regulations and Parr specifications, oxygen combustion bombs should undergo certified hydrostatic proof testing every 5,000 firings or at least once every 12 to 24 months. Orbit provides certified bomb inspection, hydrostatic pressure testing, and overhaul services in India."
        },
        {
          q: "Can Parr calorimeters test high-chlorine or high-moisture biomass fuels?",
          a: "Yes. For samples containing high halogens, sulfur, or moisture, Parr offers chlorine-resistant alloy bombs and specialized platinum or halogen-resistant fittings to prevent pitting corrosion."
        }
      ]
    };
  }

  if (category.path.startsWith("elemental-analyzers") || category.path.includes("carbon-and-sulfur") || category.path.includes("chns")) {
    return {
      heroIntro: intro,
      metaTitle: `${category.name} | CHNS/O, Carbon & Sulfur Analyzers India | Orbit`,
      metaDescription: `High-frequency induction combustion and inert gas fusion analyzers for carbon, sulfur, CHNS/O, and ONH determination in metals, coal, and chemicals.`,
      overviewTitle: `Technical Overview & Analytical Methods for Elemental Analysis`,
      technicalSummary:
        "Elemental analysis quantifies the fundamental chemical building blocks—carbon, hydrogen, nitrogen, sulfur, and oxygen—across inorganic and organic matrices. For inorganic materials such as steel, cast iron, cement, and ores, samples undergo high-frequency induction furnace combustion in pure oxygen, transforming carbon to CO2 and sulfur to SO2 for detection by solid-state non-dispersive infrared (NDIR) sensors. For organic samples, flash dynamic combustion coupled with thermal conductivity detection (TCD) provides simultaneous CHNS separation.",
      principles: [
        "High-Frequency Induction Combustion: Delivers rapid, clean heating exceeding 2200°C in an oxygen stream to ensure total release of bound carbon and sulfur.",
        "Non-Dispersive Infrared (NDIR) Detection: Solid-state infrared cells equipped with optical filters measure specific absorption bands for low-ppm and high-percentage concentrations.",
        "Inert Gas Fusion (IGF): Refractory metals in graphite crucibles are melted in helium or argon carrier gas to extract oxygen as CO/CO2, nitrogen as N2, and hydrogen as H2.",
        "Flash Dynamic Combustion: Organic CHNS matrices are combusted at 1050°C with an oxygen pulse, chromatographically separated, and quantified via high-sensitivity TCD."
      ],
      standards: [
        { code: "ASTM E1019", title: "Standard Test Methods for Determination of Carbon, Sulfur, Nitrogen, and Oxygen in Steel, Iron, Nickel, and Cobalt Alloys", scope: "Industry benchmark for metallurgical quality control and foundry testing." },
        { code: "ASTM D4239", title: "Standard Test Method for Sulfur in the Analysis Sample of Coal and Coke Using High-Temperature Tube Furnace Combustion", scope: "Essential for environmental emissions compliance and fuel grading." },
        { code: "ISO 15350", title: "Steel and Iron — Determination of Total Carbon and Sulfur Content", scope: "International standard for infrared absorption after combustion in an induction furnace." },
        { code: "ASTM D5373", title: "Standard Test Methods for Determination of Carbon, Hydrogen and Nitrogen in Analysis Samples of Coal and Carbon in Coke", scope: "Organic elemental characterization of solid fossil fuels." }
      ],
      applications: [
        { industry: "Steel Mills & Foundries", useCase: "Fast melt chemistry verification, verifying ultra-low carbon in automotive steels, and sulfur inclusion monitoring." },
        { industry: "Mining & Ore Beneficiation", useCase: "Quantifying total sulfur in iron ore, bauxite, limestone, and base metal concentrates." },
        { industry: "Chemical & Polymer Research", useCase: "CHNS empirical formula confirmation, pharmaceutical purity testing, and catalyst characterization." },
        { industry: "Environmental Testing", useCase: "Soil carbon sequestration studies, total organic carbon (TOC), and organic pollutant monitoring." }
      ],
      selectionCriteria: [
        { factor: "Combustion Method", description: "Induction furnace for conductive inorganic metals and ores; resistance furnace for coal, biomass, and petroleum." },
        { factor: "Detection Range", description: "Dual-range infrared detectors allow measuring trace ppm levels up to 100% concentrations without hardware recalibration." },
        { factor: "Autosampler Capacity", description: "Automated pneumatic carousels enable unattended multi-sample analysis for high-throughput commercial labs." }
      ],
      faqs: [
        {
          q: "What is the advantage of high-frequency induction combustion over resistance furnaces?",
          a: "Induction furnaces couple directly with conductive metallic accelerators (tungsten and iron chip) to reach temperatures exceeding 2200°C within seconds. This ensures complete liberation of entrapped carbon and sulfur even from refractory carbides and nitrides, with typical cycle times under 45 seconds."
        },
        {
          q: "How are low-carbon steels accurately measured down to sub-ppm levels?",
          a: "Sub-ppm accuracy requires high-purity carrier gases (99.999% oxygen), purified combustion catalysts, electronic baseline zeroing, and dual high-sensitivity gold-plated NDIR detector paths."
        },
        {
          q: "Does Orbit supply certified reference materials for instrument calibration?",
          a: "Yes. Orbit provides NIST and ISO 17034 traceable reference standards, tungsten accelerators, ceramic crucibles, and tin capsules to ensure compliance with NABL and international audits."
        }
      ]
    };
  }

  if (category.path.startsWith("reactors") || category.pillar === "reactors") {
    return {
      heroIntro: intro,
      metaTitle: `${category.name} | Parr Pressure Reactors India | Orbit Technologies`,
      metaDescription: `High-pressure, high-temperature Parr stirred reactors, autoclaves, and continuous tubular reactors in Hastelloy, Titanium, and Stainless Steel across India.`,
      overviewTitle: `Engineering Overview: High-Pressure Reactors & Autoclave Systems`,
      technicalSummary:
        "High-pressure laboratory reactors and stirred autoclaves facilitate chemical syntheses, catalytic hydrogenations, hydrothermal crystal growth, and corrosion investigations under extreme temperature and pressure conditions. Manufactured by Parr Instrument Company and supplied exclusively by Orbit Technologies in India, these systems feature magnetic drive agitators that eliminate dynamic shaft seals, prevent vapor leaks, and provide hermetic containment up to 5000 psi (345 bar) and 500°C.",
      principles: [
        "Hermetic Magnetic Agitation: High-torque rare-earth neodymium magnetic drives transmit rotary torque through a non-magnetic pressure barrier without stuffing boxes or mechanical seals.",
        "ASME Code Construction: Heavy-wall pressure vessels designed and stamped in accordance with ASME Section VIII, Division 1 boiler and pressure vessel codes.",
        "PID Cascade Control: Digital controllers manage both internal process temperature and external ceramic heater temperatures to prevent thermal overshoot during exothermic reactions.",
        "Corrosion Resistant Metallurgy: Wetted components engineered from specialized alloys including Hastelloy C-276, Inconel 600, Monel 400, Nickel 200, and Grade 2 Titanium."
      ],
      standards: [
        { code: "ASME Section VIII, Div 1", title: "Rules for Construction of Pressure Vessels", scope: "International safety standard governing design, manufacturing, and proof testing of autoclave vessels." },
        { code: "PED 2014/68/EU", title: "Pressure Equipment Directive", scope: "European regulatory standard for high-pressure equipment containment and pressure relief safety." },
        { code: "ISO 9001", title: "Quality Management Systems", scope: "Assuring design repeatability, material traceability, and mill test certificates (MTC)." },
        { code: "CE / ATEX / IECEx", title: "Explosive Atmosphere Electrical Compliance", scope: "Motors and controllers rated for hazardous chemical and flammable gas environments." }
      ],
      applications: [
        { industry: "Catalytic Hydrogenation & Synthesis", useCase: "Screening heterogeneous catalysts, pharmaceutical active intermediate reduction, and polymer synthesis." },
        { industry: "Hydrothermal & Solvothermal Synthesis", useCase: "Advanced nanomaterial growth, zeolites, metal-organic frameworks (MOFs), and battery cathodes." },
        { industry: "Petrochemicals & Bio-refining", useCase: "Hydrocracking, bio-oil upgrading, transesterification, and supercritical CO2 extraction." },
        { industry: "Corrosion & Material Testing", useCase: "Sour gas (H2S / CO2) degradation, stress corrosion cracking (SCC), and nuclear water chemistry testing." }
      ],
      selectionCriteria: [
        { factor: "Vessel Volume & Geometry", description: "Ranging from 25 mL micro-reactors for precious catalyst screening to 100 L pilot-scale production autoclaves." },
        { factor: "Wetted Material Selection", description: "T316 Stainless Steel for standard solvents; Hastelloy C-276 for concentrated acids; Titanium for marine/chloride resistance." },
        { factor: "Closure Mechanism", description: "Split-ring closures with drop-in bolts allow quick tool-free opening; threaded closures suit compact benchtop vessels." }
      ],
      faqs: [
        {
          q: "Why are magnetic drive agitators preferred over standard mechanical packing?",
          a: "Standard mechanical seals rely on dynamic packing rings that wear out over time, leading to hazardous gas leaks, solvent vapor loss, and sample contamination under high pressures. Parr magnetic drives use static containment sleeves with permanent magnetic coupling, ensuring leak-free, zero-maintenance agitation even under 5000 psi of hydrogen."
        },
        {
          q: "What safety features protect against accidental overpressure?",
          a: "Every Parr reactor is equipped with an ASME-certified rupture disc engineered to burst safely at a designated pressure rating. The rupture disc discharges into a containment vent or scrubber line, protecting laboratory personnel and infrastructure."
        },
        {
          q: "Does Orbit provide installation, commissioning, and hydrotesting for Parr reactors in India?",
          a: "Yes. Orbit is Parr Instrument Company's exclusive authorized representative in India (named Parr's #1 Global Dealer for new orders). Our factory-trained service engineers provide on-site installation, safety interlock testing, operator training, and hydrostatic pressure re-certification across India."
        }
      ]
    };
  }

  if (category.path.startsWith("furnace") || category.pillar === "furnaces" || category.path.includes("chamber-furnace") || category.path.includes("tube-furnace")) {
    return {
      heroIntro: intro,
      metaTitle: `${category.name} | Laboratory & Industrial Furnaces India | Orbit`,
      metaDescription: `High-temperature chamber, tube, ashing, and vacuum furnaces by Elite Thermal Systems UK and Orbit. Operating temperatures up to 1850°C for Indian labs.`,
      overviewTitle: `Technical Capabilities & Thermal Processing Standards`,
      technicalSummary:
        "High-temperature laboratory and industrial furnaces provide controlled thermal environments for materials characterization, loss-on-ignition ashing, sintering of technical ceramics, stress relieving of alloys, and chemical vapor deposition. Manufactured by group company Elite Thermal Systems Ltd. (UK) and Orbit Technologies, these systems integrate multi-layer graded ceramic insulation, silicon carbide or MoSi2 heating elements, and programmable digital ramp-and-soak controllers for uniform temperature distribution up to 1850°C.",
      principles: [
        "Advanced Heating Element Technology: High-grade Kanthal resistance wire for up to 1200°C; Silicon Carbide (SiC) elements up to 1550°C; Molybdenum Disilicide (MoSi2) for temperatures up to 1850°C.",
        "Graded Ceramic Fiber Insulation: Low thermal mass vacuum-formed ceramic fiber insulation delivers rapid heat-up rates and minimizes exterior chassis heat loss.",
        "Controlled Gas Atmosphere: Hermetic quartz or alumina work tubes paired with gas mixing manifolds enable processing under nitrogen, argon, hydrogen, or high vacuum.",
        "Programmable PID Ramp/Soak Controllers: Multi-segment digital microprocessors ensure precise temperature ramps, dwell times, and controlled cool-down profiles."
      ],
      standards: [
        { code: "ASTM D3174", title: "Standard Test Method for Ash in the Analysis Sample of Coal and Coke", scope: "Ashing furnace standard with continuous air sweep ventilation." },
        { code: "ISO 1171", title: "Solid Mineral Fuels — Determination of Ash", scope: "International standard for combustion residue quantification." },
        { code: "AMS 2750G", title: "Pyrometry Specification for Aerospace Thermal Processing", scope: "Temperature uniformity surveys (TUS) and sensor calibration standards." },
        { code: "BS EN 61010-1", title: "Safety Requirements for Electrical Equipment for Measurement, Control, and Laboratory Use", scope: "Comprehensive electrical, thermal, and door safety interlock compliance." }
      ],
      applications: [
        { industry: "Materials Science & Metallurgy", useCase: "Annealing, stress relieving, sintering of metal powders, and hardening of tool steels." },
        { industry: "Technical Ceramics & Glass", useCase: "High-temperature debinding, ceramic firing, crystal growth, and zirconia sintering." },
        { industry: "Fuel & Environmental Labs", useCase: "Loss on ignition (LOI), coal and biomass ashing, and proximate analysis sample burn-off." },
        { industry: "Semiconductor & Nanotechnology", useCase: "Atmospheric and vacuum chemical vapor deposition (CVD), graphene synthesis, and tube diffusion." }
      ],
      selectionCriteria: [
        { factor: "Maximum Operating Temperature", description: "Select a furnace rated 100°C above continuous operating requirements to maximize heating element lifespan." },
        { factor: "Chamber Volume & Geometry", description: "Chamber furnaces for bulky crucibles and batch heat treatment; tube furnaces for continuous atmospheres and flow experiments." },
        { factor: "Atmosphere Control", description: "Air atmosphere for routine ashing; gas-tight tube seals with vacuum pumps for oxidation-sensitive materials." }
      ],
      faqs: [
        {
          q: "What makes Elite Thermal Systems furnaces suitable for high-precision research?",
          a: "Elite Thermal Systems (UK) designs heating systems with multi-zone element placement, high-purity alumina insulation, and dual thermocouple over-temperature safety circuits. This guarantees chamber thermal uniformity within ±5°C and prevents sample damage."
        },
        {
          q: "Can ashing furnaces handle corrosive coal and biomass vapors?",
          a: "Yes. Dedicated ashing furnaces include pre-heated air inlets, silicon carbide floor tiles to protect heating coils from acid spills, and tall exhaust chimneys that safely evacuate volatile acidic gases."
        },
        {
          q: "What after-sales service and spares does Orbit offer for furnaces?",
          a: "Orbit maintains local inventory of heating elements (Kanthal, SiC, MoSi2), thermocouples, work tubes, and ceramic insulation, supported by 14 sales and service branch offices across India."
        }
      ]
    };
  }

  if (category.path.startsWith("milling") || category.pillar === "sample-prep" || category.path.includes("sieving")) {
    return {
      heroIntro: intro,
      metaTitle: `${category.name} | Laboratory Mills & Sample Preparation India | Orbit`,
      metaDescription: `Planetary ball mills, jaw crushers, and sieving machines for analytical sample comminution, grinding, and particle sizing for XRF and ICP analysis.`,
      overviewTitle: `Technical Sample Preparation & Comminution Methodology`,
      technicalSummary:
        "Accurate analytical results rely entirely on representative sample preparation. Laboratory mills, jaw crushers, and disc pulverisers reduce bulk ores, coal, cement clinker, and industrial raw materials into fine, homogenous powders with controlled particle size distributions. Orbit Technologies supplies heavy-duty comminution equipment and sieve shakers engineered to prevent sample contamination, preserve volatile fractions, and prepare specimens for XRF pressed pellets, fusion beads, and ICP acid digestion.",
      principles: [
        "Planetary Centrifugal Grinding: Sun wheels rotate bowls in opposing directions, creating high-energy Coriolis forces and grinding ball impacts that pulverize hard materials down to sub-micron fineness.",
        "Contamination-Free Grinding Bowls: Jars and grinding balls manufactured in tungsten carbide, zirconium oxide, agate, and stainless steel prevent trace element contamination.",
        "Electromagnetic 3D Sieving: Tri-dimensional throwing motion distributes particles evenly across the entire sieve surface for reproducible sieving kinetics.",
        "Heavy-Duty Primary Crushing: Oscillating jaw crushers reduce rock and ore chunks down to manageable 2 mm granules prior to secondary fine pulverization."
      ],
      standards: [
        { code: "ISO 3310-1", title: "Test Sieves — Technical Requirements and Testing", scope: "Manufacturing tolerance standards for woven wire cloth test sieves." },
        { code: "ASTM E11", title: "Standard Specification for Woven Wire Test Sieve Cloth and Test Sieves", scope: "Global particle size distribution testing reference." },
        { code: "ASTM D2013", title: "Standard Practice for Preparing Coal Samples for Analysis", scope: "Standardized crushing, milling, and dividing procedures for solid mineral fuels." },
        { code: "ISO 13909", title: "Hard Coal and Coke — Mechanical Sampling", scope: "Protocols for representative sample reduction and preparation." }
      ],
      applications: [
        { industry: "Mining & Geological Exploration", useCase: "Crushing drill core samples, rocks, minerals, and pulverizing samples for XRF assay." },
        { industry: "Cement & Building Materials", useCase: "Grinding clinker, raw meal, gypsum, and concrete specimens for routine QA/QC testing." },
        { industry: "Pharmaceuticals & Nanotechnology", useCase: "Mechanical alloying, wet colloidal milling, and fine grinding of active pharmaceutical ingredients." },
        { industry: "Battery & Energy Materials", useCase: "Homogenizing cathode precursor powders and carbon nanotube dispersion." }
      ],
      selectionCriteria: [
        { factor: "Feed Material Hardness (Mohs)", description: "Jaw crushers and tungsten carbide bowls for hard/brittle ores (Mohs 7-9); knife mills for soft/fibrous agricultural products." },
        { factor: "Target Fineness", description: "Planetary ball mills achieve sub-micron particle sizes; disc pulverisers provide typical analytical fineness (<75 µm / 200 mesh)." },
        { factor: "Grinding Media Material", description: "Select grinding bowl materials that do not contain elements targeted during subsequent elemental analysis." }
      ],
      faqs: [
        {
          q: "How do I choose between planetary ball mills and disc pulverisers?",
          a: "Planetary ball mills provide extremely high energy impact and are ideal for colloidal wet grinding, mechanical alloying, and hard materials down to nanometer or sub-micron sizes. Disc pulverisers are designed for rapid, high-throughput dry comminution of medium-hard materials (ores, cement, coal) down to standard 75 µm analytical fineness."
        },
        {
          q: "How can trace metal contamination be avoided during grinding?",
          a: "By selecting non-metallic or chemically inert grinding jars such as high-purity Zirconia (ZrO2), Agate (SiO2), or Tungsten Carbide depending on the elements to be quantified via XRF or ICP."
        },
        {
          q: "Does Orbit supply standard sieves with calibration certificates?",
          a: "Yes. Orbit supplies precision woven wire and perforated plate test sieves certified to ISO 3310-1 and ASTM E11 with individual calibration certificates."
        }
      ]
    };
  }

  if (category.path.startsWith("precision-balances") || category.path.includes("micro-analytical") || category.path.includes("analytical-balance")) {
    return {
      heroIntro: intro,
      metaTitle: `${category.name} | A&D Analytical & Precision Balances India | Orbit`,
      metaDescription: `A&D Apollo and Fortis analytical balances, micro-balances, and precision weighing scales with rapid 1-second stabilization and GLP/GMP compliance.`,
      overviewTitle: `Technical Precision & Analytical Weighing Standards`,
      technicalSummary:
        "Analytical and micro balances provide the foundational measurement for modern quantitative chemistry. Utilizing electromagnetic force restoration (EMFR) and compact Super Hybrid Sensors (C-SHS), these balances deliver sub-milligram and microgram resolution with stabilization times as rapid as one second. Designed to comply with GLP/GMP laboratory practices, A&D balances supplied by Orbit Technologies feature motorized internal calibration, fanless static charge neutralizers, and anti-draft breeze breaks.",
      principles: [
        "Compact Super Hybrid Sensor (C-SHS): Integrates electromagnetic force restoration with digital dampening for rapid 1-second stabilization.",
        "Internal Motorized Auto-Calibration: Automatically triggers self-calibration when ambient temperature variations exceed factory thresholds.",
        "Integrated Fanless Ionizer: Neutralizes electrostatic charges on glassware and plastic weighing vessels without disturbing powder samples.",
        "GLP/GMP Data Compliance: Outputs timestamped calibration records, balance ID, and serial numbers to printers and Laboratory Information Management Systems (LIMS)."
      ],
      standards: [
        { code: "OIML R 76-1", title: "Non-Automatic Weighing Instruments — Metrological and Technical Requirements", scope: "International legal metrology standard for laboratory balance verification." },
        { code: "USP Chapter <41>", title: "Balances", scope: "United States Pharmacopeia criteria for repeatability and accuracy in pharmaceutical testing." },
        { code: "ISO/IEC 17025", title: "General Requirements for the Competence of Testing and Calibration Laboratories", scope: "NABL traceability and annual recalibration guidelines." }
      ],
      applications: [
        { industry: "Pharmaceutical QC & Formulations", useCase: "Micro-dosing of APIs, standard solution preparation, and dissolution testing weighing." },
        { industry: "Chemical & Petrochemical Testing", useCase: "Gravimetric reagent preparation, moisture loss determination, and catalyst weighing." },
        { industry: "Environmental Monitoring", useCase: "Weighing particulate matter (PM2.5 / PM10) air quality collection filters to microgram precision." }
      ],
      selectionCriteria: [
        { factor: "Readability & Capacity", description: "0.001 mg micro-balances for filter weighing; 0.1 mg analytical balances for standard analytical chemistry; 1 mg precision balances for sample batches." },
        { factor: "Environmental Resistance", description: "IP65 water/dust proofing for harsh factory floors; draft shields and ionizers for sensitive research benches." }
      ],
      faqs: [
        {
          q: "Why is electrostatic charge a major problem in analytical weighing?",
          a: "Static charges generated on plastic vessels, filter papers, or dry powders exert an electrostatic force on the weighing pan, resulting in drifting readings and phantom weight changes. A&D balances equipped with built-in fanless ionizers eliminate static charges within seconds without blowing away lightweight powders."
        },
        {
          q: "What is internal motorized calibration and why is it essential?",
          a: "Internal calibration uses a precision motor-driven weight built inside the balance. Whenever ambient temperature shifts, the balance automatically recalibrates itself, guaranteeing measurement accuracy without relying on external weights."
        }
      ]
    };
  }

  // Default rich SEO data for all other categories and subcategories
  return {
    heroIntro: intro,
    metaTitle: `${category.name} | Scientific Laboratory Instruments India | Orbit`,
    metaDescription: `Discover ${category.name} solutions by Orbit Technologies. Manufactured and supplied with installation, calibration, and pan-India service support.`,
    overviewTitle: `Technical Guide, Standards & Selection for ${category.name}`,
    technicalSummary: `Orbit Technologies provides advanced ${category.name} systems engineered for high-precision laboratory testing, industrial process control, and scientific research. Manufactured in accordance with rigorous international engineering standards and backed by over 30 years of specialized instrumentation experience in India, our equipment delivers repeatable accuracy, rugged durability, and comprehensive after-sales technical support.`,
    principles: [
      `High-Precision Engineering: Engineered to deliver reproducible analytical data across demanding industrial test cycles.`,
      `Robust Laboratory Construction: Built with premium materials to ensure long service life and continuous operating stability.`,
      `Digital Automation & Control: Intuitive user interfaces with digital parameter logging and data export capabilities.`,
      `NABL Traceable Calibration: Standardized calibration protocols that comply with regulatory accreditation audits.`
    ],
    standards: [
      { code: "ISO 9001:2015", title: "Quality Management Systems", scope: "Manufacturing and supply chain quality assurance." },
      { code: "ISO/IEC 17025", title: "Testing and Calibration Laboratories", scope: "Measurement traceability and test method alignment." },
      { code: "CE Compliance", title: "European Conformity", scope: "Electrical safety, electromagnetic compatibility, and operator protection." }
    ],
    applications: [
      { industry: "Quality Control & Assurance", useCase: "Ensuring manufactured goods and raw materials meet certified specifications." },
      { industry: "Research & Development", useCase: "Enabling advanced chemical, thermal, and material characterization." },
      { industry: "Industrial Process Optimization", useCase: "Monitoring plant operations, energy efficiency, and regulatory compliance." }
    ],
    selectionCriteria: [
      { factor: "Operational Range & Capacity", description: "Select equipment matched to your laboratory's daily sample throughput and parameter envelope." },
      { factor: "Regulatory Compliance", description: "Ensure the instrument satisfies the relevant ASTM, ISO, or Indian Standard (IS) test protocols." },
      { factor: "Service & Spares Availability", description: "Choose suppliers with local engineer presence and readily stocked consumables to prevent downtime." }
    ],
    faqs: [
      {
        q: `What warranty and support does Orbit provide for ${category.name}?`,
        a: `Every system supplied by Orbit Technologies includes manufacturer warranty, factory-trained engineer installation, on-site commissioning, user training, and ongoing preventive maintenance support from our 14 branch locations across India.`
      },
      {
        q: `Can Orbit help customize ${category.name} to our specific testing method?`,
        a: `Yes. Our technical team works closely with your laboratory chemists and engineers to evaluate sample properties, regulatory standards, and workflow requirements to provide optimized instrument configurations.`
      }
    ]
  };
}
