/* GENERATED FROM live-extract — run scripts/generate-data.mjs to refresh.
 * Category registry for the Orbit site: real live URL paths, the recommended
 * hierarchy (pillars) used for navigation and breadcrumbs, and editorial
 * copy (blurb/guide/faq) from the hand-written layer where it exists. */

export type Pillar = "analytical" | "reactors" | "furnaces" | "sample-prep" | "crms";

export type Category = {
  /** Live URL path without leading slash, e.g. "calorimeter/bomb-calorimeters" */
  path: string;
  name: string;
  parent: string | null;
  pillar: Pillar;
  kind: "pillar" | "section" | "subsection";
  /** Short copy shown at the top of the category page. */
  blurb: string;
  /** Long-form copy shown below the product grid. */
  guide: string[];
  /** FAQ block near the page footer (present only where curated). */
  faq: { q: string; a: string }[];
};

export const pillars: { key: Pillar; name: string; path: string }[] = [
  {
    "key": "analytical",
    "name": "Analytical Instruments",
    "path": "analytical-instruments"
  },
  {
    "key": "reactors",
    "name": "Parr Reactors",
    "path": "reactors"
  },
  {
    "key": "furnaces",
    "name": "Furnace & Heating Systems",
    "path": "furnace-heating-systems"
  },
  {
    "key": "sample-prep",
    "name": "Sample Preparation",
    "path": ""
  },
  {
    "key": "crms",
    "name": "CRM's, SRM's & Laboratory Accessories",
    "path": "crms-srms-laboratory-accessories"
  }
];

export type MegaMenuItem = {
  label: string;
  path: string;
};

export type MegaMenuSection = {
  title: string;
  path: string;
  items: MegaMenuItem[];
  viewAllPath?: string;
};

export type MegaMenuTab = {
  id: string;
  title: string;
  path: string;
  columns: MegaMenuSection[][];
  images?: { src: string; alt: string; label?: string }[];
};

/** Authentic 8-division mega menu matching Orbit India live website and user screenshots */
export const authenticMegaMenu: MegaMenuTab[] = [
  {
    id: "analytical-instruments",
    title: "Analytical Instruments",
    path: "analytical-instruments",
    columns: [
      [
        {
          title: "Calorimeters",
          path: "calorimeter",
          items: [
            { label: "Bomb Calorimeters", path: "calorimeter/bomb-calorimeters" },
            { label: "Semimicro & Solution Calorimeters", path: "calorimeter/semimicro-and-solution-calorimeters" },
            { label: "Detonation Calorimeter", path: "calorimeter/detonation-calorimeter" },
            { label: "Power Compensation Reaction Calorimeter", path: "calorimeter" },
          ],
        },
        {
          title: "Ash Fusion Analyzers",
          path: "ash-fusion-analyzers",
          items: [
            { label: "IF2000G-HDC", path: "ash-fusion-analyzers" },
            { label: "IF2000G-HDBM", path: "ash-fusion-analyzers" },
            { label: "EATC16", path: "ash-fusion-analyzers" },
            { label: "EATC17", path: "ash-fusion-analyzers" },
          ],
        },
      ],
      [
        {
          title: "Thermogravimetric Analysers",
          path: "tga-proximate-analyzers",
          items: [
            { label: "TGA3000", path: "tga-proximate-analyzers" },
            { label: "TGA1500", path: "tga-proximate-analyzers" },
          ],
        },
        {
          title: "Coal and Coke Testing Instruments",
          path: "coal-and-coke-testing-instruments",
          items: [
            { label: "Plastometer PF-12", path: "coal-and-coke-testing-instruments" },
            { label: "Dilatometer DF-4", path: "coal-and-coke-testing-instruments" },
            { label: "Minimum Free Space Oven (ASTM & ISO)", path: "coal-and-coke-testing-instruments" },
            { label: "Volatile Matter Furnace - VMF/ASTM", path: "coal-and-coke-testing-instruments" },
            { label: "Volatile Matter Furnace - VMF/ISO", path: "coal-and-coke-testing-instruments" },
            { label: "Free Swelling Index Furnace - FSI", path: "coal-and-coke-testing-instruments" },
          ],
        },
      ],
      [
        {
          title: "Elemental Analyzers",
          path: "elemental-analyzers",
          items: [
            { label: "Carbon and Sulfur Analyzers", path: "elemental-analyzers/carbon-and-sulfur-analyzers" },
            { label: "Fusion Master ONH Analyzer", path: "elemental-analyzers/onh-analyzer" },
            { label: "CHNS/O Analyzers", path: "elemental-analyzers/chns-analyzers" },
          ],
        },
        {
          title: "Other Instruments",
          path: "other-instruments",
          items: [
            { label: "Oxygen Flask Combustion Unit (OFCU)", path: "other-instruments" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
        alt: "Parr 7200 Precision Calorimeter",
        label: "Precision Isoperibol Bomb Calorimeters",
      },
      {
        src: "/images/orbit/tga-3000.jpg",
        alt: "Orlab TGA 3000 Analyzer",
        label: "Thermogravimetric Proximate Analyzers",
      },
    ],
  },
  {
    id: "reactor-systems",
    title: "High Temperature High Pressure Reactor Systems",
    path: "reactors",
    columns: [
      [
        {
          title: "Parr Reactors",
          path: "reactors",
          items: [],
        },
        {
          title: "HP/HT Reactors",
          path: "reactors/hp-ht-reactors",
          items: [
            { label: "Stirred Reactors", path: "reactors/hp-ht-reactors/stirred-reactors" },
            { label: "Non-Stirred Pressure Vessels", path: "reactors/hp-ht-reactors/non-stirred-pressure-vessels" },
          ],
        },
        {
          title: "Customized Reactors",
          path: "reactors/customized-reactors",
          items: [
            { label: "Reactor system for Biofuel and Alternative fuel research", path: "reactors/customized-reactors" },
            { label: "Horizontal Reactor Systems", path: "reactors/customized-reactors" },
            { label: "GTL (Gas-to-Liquid) reactor system", path: "reactors/customized-reactors" },
          ],
          viewAllPath: "reactors/customized-reactors",
        },
        {
          title: "Sample Preparation Vessels",
          path: "reactors/sample-preparation-vessels",
          items: [
            { label: "Acid Digestion Vessels", path: "reactors/sample-preparation-vessels/acid-digestion-vessels" },
            { label: "Microwave Digestion Vessel", path: "reactors/sample-preparation-vessels/microwave-digestion-vessels" },
            { label: "Cell Disruption Vessels", path: "reactors/sample-preparation-vessels/cell-disruption-vessels" },
          ],
        },
      ],
      [
        {
          title: "Glass Reactors",
          path: "reactors/glass-reactors",
          items: [
            { label: "Series 5100 160-1500ml Glass Reactors", path: "reactors/glass-reactors" },
          ],
        },
        {
          title: "Reactor Systems for Corrosion Monitoring Studies",
          path: "reactors/reactor-systems-for-corrosion-monitoring-studies",
          items: [
            { label: "High Pressure, High Temperature Rotating Cylinder Electrode (RCE) System", path: "reactors/reactor-systems-for-corrosion-monitoring-studies" },
            { label: "Rotating cage apparatus", path: "reactors/reactor-systems-for-corrosion-monitoring-studies" },
            { label: "Apparatus for corrosion Studies", path: "reactors/reactor-systems-for-corrosion-monitoring-studies" },
          ],
          viewAllPath: "reactors/reactor-systems-for-corrosion-monitoring-studies",
        },
        {
          title: "Extratex",
          path: "extratex",
          items: [
            { label: "Laboratory", path: "extratex/laboratory" },
            { label: "Industrial", path: "extratex/industrial" },
          ],
        },
      ],
      [
        {
          title: "Shaker Hydrogenation Apparatus",
          path: "reactors/shaker-hydrogenation-apparatus",
          items: [
            { label: "Series 3910 Shaker Hydrogenation Apparatus", path: "reactors/shaker-hydrogenation-apparatus" },
            { label: "Series 3920 Shaker Hydrogenation Apparatus", path: "reactors/shaker-hydrogenation-apparatus" },
          ],
        },
        {
          title: "Tubular Reactors",
          path: "reactors/tubular-reactors",
          items: [
            { label: "5400 Continuous Flow Tubular Reactors", path: "reactors/tubular-reactors" },
            { label: "5420 Continuous Flow Tubular Reactor with touch Screen", path: "reactors/tubular-reactors" },
            { label: "5410 Fluidized Bed reactors", path: "reactors/tubular-reactors" },
          ],
        },
        {
          title: "DENATEC",
          path: "denatec",
          items: [
            { label: "Very High Pressure Chambers", path: "products/high-pressure-chambers" },
            { label: "Pressure Test Bench", path: "products/pressure-test-bench" },
            { label: "Pressure Testing Facilities", path: "products/pressure-testing-facility" },
            { label: "Underwater Applications", path: "products/under-water-applications" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
        alt: "Parr High Pressure Reactors",
        label: "Parr High Pressure & Temperature Reactors",
      },
      {
        src: "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
        alt: "Parr Benchtop Autoclave",
        label: "General Purpose Benchtop Autoclaves",
      },
    ],
  },
  {
    id: "sample-prep",
    title: "Sample Preparation Equipment",
    path: "milling-pulverising",
    columns: [
      [
        {
          title: "Sample Preparation Equipment",
          path: "milling-pulverising",
          items: [
            { label: "Test Sieves", path: "sieving" },
            { label: "Vibratory Sieve Shaker", path: "sieving" },
            { label: "Airjet Sieve Shaker", path: "sieving" },
            { label: "Jaw Crusher", path: "milling-pulverising" },
            { label: "Hammer Mill", path: "milling-pulverising" },
            { label: "Vibratory Cup Mill", path: "milling-pulverising" },
            { label: "Hydraulic Pellet Press", path: "xrf-icp-sample-preparation-equipment" },
            { label: "Planetary Ball Mill", path: "milling-pulverising/ball-mill" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/Manual-Pellet-Press.jpg",
        alt: "Sample Preparation Equipment",
        label: "Precision Sample Milling & Sizing",
      },
    ],
  },
  {
    id: "furnaces",
    title: "Laboratory & Industrial Furnaces",
    path: "furnace-heating-systems",
    columns: [
      [
        {
          title: "Chamber Furnaces",
          path: "chamber-furnaces",
          items: [
            { label: "Laboratory Chamber Furnaces", path: "chamber-furnaces/laboratory-chamber-furnace" },
            { label: "Ashing Furnaces", path: "chamber-furnaces/ashing-furnace" },
            { label: "Industrial Chamber Furnaces", path: "chamber-furnaces/industrial-chamber-furnace" },
          ],
        },
        {
          title: "Tube Furnaces",
          path: "tube-furnaces",
          items: [
            { label: "Split Tube Furnaces", path: "tube-furnaces/split-tube-furnaces" },
            { label: "Single Zone Tube Furnaces", path: "tube-furnaces" },
            { label: "Vacuum Tube Furnaces", path: "tube-furnaces/vacuum-tube-furnaces" },
          ],
        },
      ],
      [
        {
          title: "Specialty Furnaces & Ovens",
          path: "furnace-heating-systems",
          items: [
            { label: "High-Temperature Furnaces", path: "high-temperature-tube-furnace" },
            { label: "Melting Furnaces", path: "melting-furnaces" },
            { label: "Muffle Furnaces", path: "muffle-furnace" },
            { label: "Sintering & Retort Furnaces", path: "sintering-furnace" },
            { label: "Laboratory Ovens", path: "ovens" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/high-temperature-chamber-furnaces.jpg",
        alt: "Laboratory Furnaces",
        label: "High-Temperature Furnaces up to 1800°C",
      },
    ],
  },
  {
    id: "gas-generators",
    title: "Gas Generators",
    path: "gas-generators",
    columns: [
      [
        {
          title: "Gas Generators",
          path: "gas-generators",
          items: [
            { label: "Hydrogen Gas Generator", path: "gas-generators" },
            { label: "Nitrogen Gas Generator", path: "gas-generators" },
            { label: "Zero Air Gas Generator", path: "gas-generators" },
            { label: "Liquid Nitrogen Gas generator", path: "gas-generators" },
            { label: "Air Compressor", path: "gas-generators" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/Air-Compressor-1.jpg",
        alt: "Gas Generators",
        label: "High-Purity Laboratory Gas Generators",
      },
    ],
  },
  {
    id: "precision-balances",
    title: "Precision Balances & Weighing Scales",
    path: "precision-balances",
    columns: [
      [
        {
          title: "Analytical Balances",
          path: "precision-balances",
          items: [
            { label: "Premium-Level Micro/Semi-Micro", path: "premium-level-micro-semi-micro" },
            { label: "Micro Analytical", path: "micro-analytical" },
            { label: "Semi-Micro Analytical", path: "semi-micro-analytical" },
            { label: "Advanced-Level Analytical", path: "advanced-level-analytical" },
            { label: "Standard-Level Analytical", path: "standard-level-analytical" },
          ],
        },
      ],
      [
        {
          title: "Precision Balances",
          path: "precision-balances",
          items: [
            { label: "Advanced-Level Precision", path: "precision-balances/advanced-level-precision" },
            { label: "Standard-Level Precision", path: "precision-balances/standard-level-precision" },
            { label: "Entry-Level Precision", path: "precision-balances/entry-level-precision" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg",
        alt: "Precision Balances",
        label: "Analytical & Precision Weighing",
      },
      {
        src: "/images/orbit/AD-Fortis-FZ-WP-FX-WP-Series.jpg",
        alt: "Micro Balances",
        label: "High Resolution Balances",
      },
    ],
  },
  {
    id: "labware",
    title: "Labware",
    path: "labware",
    columns: [
      [
        {
          title: "Labware",
          path: "labware",
          items: [
            { label: "Stirring and Mixing", path: "labware" },
            { label: "Screw Joints/Components with GL Thread", path: "labware" },
            { label: "Screw Joints and Components for EX-Protection", path: "labware" },
            { label: "Screw Joints for Pressures up to 5 Bar", path: "labware" },
            { label: "Tubing, Films, Tiles", path: "labware" },
            { label: "Ground Joint Components", path: "labware" },
            { label: "Temperature Measurement", path: "labware" },
            { label: "Vessels and Distillation Equipment", path: "labware" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/CSBoxTubeCatalogue.jpg",
        alt: "Labware & Accessories",
        label: "PTFE & Borosilicate Laboratory Components",
      },
    ],
  },
  {
    id: "crms",
    title: "CRM's, SRM's & Laboratory Accessories",
    path: "crms-srms-laboratory-accessories",
    columns: [
      [
        {
          title: "Laboratory Accessories",
          path: "laboratory-accessories",
          items: [
            { label: "Pumps", path: "laboratory-accessories" },
            { label: "Samplers", path: "laboratory-accessories" },
            { label: "Containers", path: "laboratory-accessories" },
            { label: "Industrial & Laboratory Equipment", path: "laboratory-accessories" },
          ],
        },
      ],
      [
        {
          title: "Certified and Standard Reference Materials",
          path: "certified-and-standard-reference-materials",
          items: [
            { label: "Standard Reference Materials (SRMs)", path: "certified-and-standard-reference-materials" },
            { label: "Coal, Coke & Fuel Standards", path: "certified-and-standard-reference-materials" },
            { label: "Calibration Standards", path: "certified-and-standard-reference-materials" },
          ],
        },
      ],
    ],
    images: [
      {
        src: "/images/orbit/Carbon-and-Sulfur-Analyzers.png",
        alt: "Reference Materials",
        label: "NABL & NIST Traceable Standards",
      },
      {
        src: "/images/orbit/Oxygen-Combustion-Vessel.jpg",
        alt: "Combustion Accessories",
        label: "Parr Oxygen Vessels & Electrodes",
      },
    ],
  },
];

// Compatibility export
export const megaMenu = authenticMegaMenu;

export const categories: Category[] = [
  {
    "path": "advanced-level-analytical",
    "name": "Advanced-Level Analytical",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Advanced-Level Analytical A&D Apollo GX-A(E/WP) & GF-A(WP) Series The LMH & LMHPLUS series use an electrolytic cell with a long life multilayer PEM technology to produce pure hydrogen gas.",
    "guide": [
      "Advanced-Level Analytical A&D Apollo GX-A(E/WP) & GF-A(WP) Series The LMH & LMHPLUS series use an electrolytic cell with a long life multilayer PEM technology to produce pure hydrogen gas.",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "analytical-instruments",
    "name": "Analytical Instruments",
    "parent": null,
    "pillar": "analytical",
    "kind": "pillar",
    "blurb": "Analytical equipment from Orbit Technologies is used in laboratories, coal plants, and power plants for the analysis of coal, minerals.",
    "guide": [
      "Analytical equipment from Orbit Technologies is used in laboratories, coal plants, and power plants for the analysis of coal, minerals."
    ],
    "faq": []
  },
  {
    "path": "ash-fusion-analyzers",
    "name": "Ash Fusion Analyzers",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Fusion temperature analysis of coal ash and biomass ash samples by the IF2000G series and EATC analysers.",
    "guide": [
      "Ash fusion temperature (AFT) testing determines the temperature at which coal or biomass ash deforms, softens, spheres and flows — the key indicator of slagging and fouling risk in boilers, gasifiers and cement kilns. Results drive fuel-selection decisions and blend optimisation for power and cement plants.",
      "The Sylab IF2000G automates sample positioning, imaging and deformation-point evaluation under a controlled reducing or oxidising atmosphere, with the EATC analyser covering electrical-ash-fusion testing needs. Samples are prepared as standard cones or cylinders, heated at a defined rate, and the four AFT points are captured on camera — removing operator subjectivity from the reading. Orbit supplies the full workflow: preparation equipment, instruments, reference materials and operator training."
    ],
    "faq": [
      {
        "q": "What are the four ash fusion points?",
        "a": "Deformation (DT), softening (ST), hemispherical (HT) and fluid (FT). The IF2000G captures and evaluates all four automatically under reducing or oxidising atmosphere conditions per ASTM D1857 / ISO 5416."
      },
      {
        "q": "Can the IF2000G test biomass ash as well as coal ash?",
        "a": "Yes — biomass and refuse-derived fuel ashes are tested the same way, provided samples are prepared to the standard cone or cylinder geometry. We can advise on preparation for high-ash or high-alkali biomass fuels."
      },
      {
        "q": "Do you provide sample preparation for AFT testing?",
        "a": "We supply muffle furnaces for ash preparation, pellet presses and sieving equipment for producing uniform test pieces, plus certified reference ashes for validation."
      }
    ]
  },
  {
    "path": "calorimeter",
    "name": "Calorimeters",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Bomb, semimicro, solution, detonation and reaction calorimeters from Parr Instrument Company, USA.",
    "guide": [
      "A calorimeter measures the heat released when a sample burns, which is how the calorific value of coal, coke, liquid fuels, biomass and refuse-derived fuels is determined. Choosing the right instrument comes down to sample type, throughput and the standard you must comply with — ASTM D240 and ISO 1928 for solid fuels, ASTM D4809 for liquid fuels.",
      "Parr's isoperibol models (7200 and 7400) suit most fuel-testing laboratories: the 7200 delivers research-grade precision, while the 7400 automates the full cycle for high-throughput quality-control work. For smaller sample masses, the semimicro calorimeter handles samples as light as 0.8 g, and specialised detonation and reaction calorimeters cover explosive-energy and reaction-heat measurement. Every unit we supply is installed, commissioned and serviced by our own engineers, with bombs, ignition wires, benzoic acid standards and spares held in stock across India."
    ],
    "faq": [
      {
        "q": "Which calorimeter should I choose for routine coal analysis?",
        "a": "For routine coal and coke CV testing, the Parr 7400 is the best fit — it runs the complete calorimetric cycle automatically, so one operator can process a full day of determinations. If you need research-grade precision on fewer samples, the 7200 is the better choice."
      },
      {
        "q": "Do you supply benzoic acid standards and bomb consumables?",
        "a": "Yes. We stock benzoic acid calibration standards, ignition wires, rings, gaskets, O-rings and stainless-steel bomb options, and can dispatch them with the instrument or separately against a purchase order."
      },
      {
        "q": "Is installation and training included?",
        "a": "Installation, commissioning and operator training are provided by our field engineers at your site, anywhere in India. Annual maintenance and calibration support are available after the warranty period."
      },
      {
        "q": "Which standards do these calorimeters comply with?",
        "a": "The Parr isoperibol range is built to ASTM D240, ASTM D4809, ISO 1928 and equivalent national standards for gross calorific value determination. Tell us your compliance requirement and we will configure the instrument and reporting accordingly."
      }
    ]
  },
  {
    "path": "calorimeter/bomb-calorimeters",
    "name": "Bomb Calorimeters",
    "parent": "calorimeter",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "One of the top manufacturers, suppliers, and exporters of oxygen, automatic, and Bomb Calorimeters in Hyderabad, India, is Orbit India.",
    "guide": [
      "One of the top manufacturers, suppliers, and exporters of oxygen, automatic, and Bomb Calorimeters in Hyderabad, India, is Orbit India.",
      "Orbit supplies 6 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.",
      "Buyers in this range typically specify compliance with is 22 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "calorimeter/detonation-calorimeter",
    "name": "Detonation Calorimeter",
    "parent": "calorimeter",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "Detonation Calorimeter Parr Instrument Company’s new heat of detonation calorimeter for measuring detonation properties as well as energy measurements of various explosive materials 6790 Detonation Calorimeter Detonation calorimetry is a…",
    "guide": [
      "Detonation Calorimeter Parr Instrument Company’s new heat of detonation calorimeter for measuring detonation properties as well as energy measurements of various explosive materials 6790 Detonation Calorimeter Detonation calorimetry is a…",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.",
      "Buyers in this range typically specify compliance with is 1957, is 1490, is 55, is 3590, is 1093, is 870 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "calorimeter/semimicro-and-solution-calorimeters",
    "name": "Semimicro & Solution Calorimeters",
    "parent": "calorimeter",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "Semimicro and Solution Calorimeters Series 6700 line of solution calorimeters, semimicro Oxygen Bomb calorimeters, Combined calorimeter and calorimetric thermometers 6725 Semimicro Calorimeter A Compact Bomb Calorimeter for Measuring the…",
    "guide": [
      "Semimicro and Solution Calorimeters Series 6700 line of solution calorimeters, semimicro Oxygen Bomb calorimeters, Combined calorimeter and calorimetric thermometers 6725 Semimicro Calorimeter A Compact Bomb Calorimeter for Measuring the…",
      "Orbit supplies 4 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "certified-and-standard-reference-materials",
    "name": "Certified and Standard Reference Material",
    "parent": null,
    "pillar": "crms",
    "kind": "section",
    "blurb": "Certified and standard reference materials, consumables and labware from world-renowned companies.",
    "guide": [
      "Certified reference materials (CRMs) and standard reference materials (SRMs) are how a laboratory proves accuracy: they validate calibration, demonstrate traceability and satisfy audit requirements under ISO/IEC 17025. Elemental Microanalysis (UK) supplies standards and consumables for elemental analysers of every brand, alongside a broad laboratory accessories range.",
      "Beyond CRMs, this category covers the everyday consumables that keep an analytical laboratory running — combustion tubes, filters, crucibles, standards solutions, labware and accessories. Ordering them from the same supplier as your instruments keeps compatibility and documentation simple, and Orbit can set up a scheduled replenishment plan tied to your instrument service contracts."
    ],
    "faq": [
      {
        "q": "Which CRM do I need to calibrate my analyser?",
        "a": "It depends on the element and matrix — for example acetonitrile or acetanilide standards for CHNS, benzoic acid for calorimetry, and mineral standards for carbon/sulfur. Tell us your instrument and target elements and we will match the right certified materials."
      },
      {
        "q": "How should reference materials be stored?",
        "a": "Keep CRMs sealed, dry and labelled with their expiry date, away from direct light and humidity. We supply them in sealed packs with certificates of analysis for your quality records."
      },
      {
        "q": "Can you supply consumables on a scheduled contract?",
        "a": "Yes — we can set up scheduled replenishment for standards, crucibles, filters and labware aligned to your consumption and service contracts, so you never run short mid-batch."
      }
    ]
  },
  {
    "path": "chamber-furnaces",
    "name": "Chamber Furnaces",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "Chamber, tube and high-temperature furnaces and ovens from Elite Thermal Systems, UK and Linn High Therm, Germany.",
    "guide": [
      "Laboratory furnaces cover drying, ashing, sintering, heat treatment and controlled-atmosphere work across cement, steel, ceramics, research and quality-control laboratories. Chamber furnaces handle batch ashing and ignition tests; tube furnaces provide zoned, atmosphere-controlled profiles; and high-temperature furnaces reach 1200 °C, 1400 °C or beyond for advanced materials.",
      "Elite Thermal Systems (UK) supplies chamber and ovens ranges now manufactured in India by Sylab Scientific, while Linn High Therm (Germany) covers tube and high-temperature furnaces. Key selection criteria are maximum temperature, chamber volume, heating uniformity and atmosphere requirement — we help size the furnace to your standard (for example ash content to ISO 1171) and supply matching crucibles, controllers and extraction accessories."
    ],
    "faq": [
      {
        "q": "What furnace do I need for ash content testing?",
        "a": "A muffle furnace capable of 750–950 °C with uniform heating across the chamber suits ash determination to ISO 1171 / ASTM D3174. Chamber volume should match your daily sample count."
      },
      {
        "q": "Are these furnaces available in India with local service?",
        "a": "Yes — Elite ranges are now manufactured in India by Sylab Scientific, and all furnace lines are supplied, installed and serviced by Orbit across our 14 locations with spares held in stock."
      },
      {
        "q": "Can we get a furnace with a programmable controller and atmosphere?",
        "a": "Programmable multi-segment controllers are standard on most models, and tube furnaces can be supplied with flowing atmosphere connections. Send us your temperature profile and atmosphere and we will configure the unit."
      }
    ]
  },
  {
    "path": "chamber-furnaces/ashing-furnace",
    "name": "Ashing Furnaces",
    "parent": "chamber-furnaces",
    "pillar": "furnaces",
    "kind": "subsection",
    "blurb": "Ashing Furnaces Laboratory Ashing Furnaces Model: BSF/A Max Temp: 1100°C – 1200°C Chamber Volumes: 4 to 45 Litres.",
    "guide": [
      "Ashing Furnaces Laboratory Ashing Furnaces Model: BSF/A Max Temp: 1100°C – 1200°C Chamber Volumes: 4 to 45 Litres.",
      "Orbit supplies 2 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "chamber-furnaces/industrial-chamber-furnace",
    "name": "Industrial Chamber Furnaces",
    "parent": "chamber-furnaces",
    "pillar": "furnaces",
    "kind": "subsection",
    "blurb": "Industrial Chamber Furnaces Light Industrial Chamber Furnaces Model: BIF Max Temp: 1200°C – 1700°C Chamber Volumes: 72 to 227 Litres Learn More",
    "guide": [
      "Industrial Chamber Furnaces Light Industrial Chamber Furnaces Model: BIF Max Temp: 1200°C – 1700°C Chamber Volumes: 72 to 227 Litres Learn More",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "chamber-furnaces/laboratory-chamber-furnace",
    "name": "Laboratory Chamber Furnaces",
    "parent": "chamber-furnaces",
    "pillar": "furnaces",
    "kind": "subsection",
    "blurb": "Laboratory Chamber Furnaces Air Re-circulating Furnaces Model: BAF Max Temp: 750°C Chamber Volumes: 15 to 45 Litres Learn More Economy Chamber Furnaces Model: BCF Max Temp: 1100°C Chamber Volumes: 3 & 8 Litres Learn More General Purpose…",
    "guide": [
      "Laboratory Chamber Furnaces Air Re-circulating Furnaces Model: BAF Max Temp: 750°C Chamber Volumes: 15 to 45 Litres Learn More Economy Chamber Furnaces Model: BCF Max Temp: 1100°C Chamber Volumes: 3 & 8 Litres Learn More General Purpose…",
      "Orbit supplies 9 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "coal-and-coke-testing-instruments",
    "name": "Coal and Coke Testing Instruments",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Plastometers, dilatometers and furnaces for volatile matter, free swelling index and allied coal tests.",
    "guide": [
      "Coal and coke testing covers the physical and thermal characterisation of solid fuels: plastometer testing for Gieseler fluidity, dilatometer testing for swelling behaviour, free swelling index, volatile matter and ash determination, and proximate analysis. Coke producers, power plants and steel plants use these results to blend coals, predict coking performance and validate incoming fuel.",
      "Sylab supplies the plastometer and dilatometer systems, the free swelling index furnace and the volatile matter furnaces, all built to ASTM and ISO methods. Pair them with analytical balances, sieves and sample preparation equipment for a complete coal laboratory — Orbit can design, install and commission the whole bench, including extraction and safety accessories."
    ],
    "faq": [
      {
        "q": "Which test tells me if a coal is suitable for coke making?",
        "a": "Gieseler plastometry and Arnu dilatometry together describe the plastic range, maximum fluidity and swelling of a coal — the two standard indicators used for coking-coal blend design."
      },
      {
        "q": "How is the free swelling index determined?",
        "a": "A 1 g sample is heated to 820 °C in a standard crucible and the resulting coke button is compared with a calibration chart. Our FSI furnace runs the complete test cycle to ASTM D720 / ISO 501."
      },
      {
        "q": "Do you supply the complete coal testing bench?",
        "a": "Yes — plastometer, dilatometer, FSI and VM furnaces, analytical balances, sample mills and sieves are supplied together with installation, training and service as one turnkey package."
      }
    ]
  },
  {
    "path": "crms-srms-laboratory-accessories",
    "name": "CRM’s, SRM’s & Laboratory Accessories",
    "parent": null,
    "pillar": "crms",
    "kind": "pillar",
    "blurb": "CRM’s, SRM’s & Laboratory Accessories Laboratory Accessories Learn More Certified & Standard Reference Materials Learn More",
    "guide": [
      "CRM’s, SRM’s & Laboratory Accessories Laboratory Accessories Learn More Certified & Standard Reference Materials Learn More"
    ],
    "faq": []
  },
  {
    "path": "elemental-analyzers",
    "name": "Elemental Analyzers",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Carbon & Sulfur, ONH and CHNS/O analysers for inorganic and organic elemental analysis.",
    "guide": [
      "Elemental analysers quantify carbon, sulfur, hydrogen, nitrogen, oxygen and moisture in a sample — critical for fuel quality, cement raw meals, steel and alloys, pharmaceuticals, soils and environmental testing. The technique depends on your matrix: combustion-infrared for total carbon and sulfur, inert-gas fusion for oxygen and hydrogen in metals, and CHNS/O pyrolysis for organic compounds.",
      "Orbit represents NCS Testing Technology (Germany) for Carbon & Sulfur and ONH analysers, and NC Technologies (Italy) for CHNS/O systems, with Elemental Microanalysis (UK) standards and consumables to keep them calibrated. Gas generators, calibrations standards and service contracts are supplied alongside every instrument so your laboratory stays audit-ready."
    ],
    "faq": [
      {
        "q": "Which analyser do I need for carbon and sulfur in steel or coal?",
        "a": "For total carbon and sulfur in metals, ores, coal and cement, a high-frequency combustion-infrared analyser from the NCS range is the standard choice. Share your sample type and expected ranges and we will recommend the exact model and crucible chemistry."
      },
      {
        "q": "Do you supply calibrations standards and consumables?",
        "a": "Yes — Elemental Microanalysis certified standards, tin and steel crucibles, crucible tongs, combustion tubes, filters and reagents are stocked as consumables and can be ordered against your service contract."
      },
      {
        "q": "Are gas generators required with these analysers?",
        "a": "CHNS/O analysers need purified oxygen, helium or hydrogen and nitrogen. We supply the matching zero-air, nitrogen and hydrogen gas generators so the instrument can run without cylinder changes."
      }
    ]
  },
  {
    "path": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "name": "Carbon and Sulfur Analyzers",
    "parent": "elemental-analyzers",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "When it comes to inorganic carbon sulphur analysis, there are many options available on the market.",
    "guide": [
      "When it comes to inorganic carbon sulphur analysis, there are many options available on the market.",
      "Orbit supplies 7 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.",
      "Buyers in this range typically specify compliance with is 100 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "elemental-analyzers/chns-analyzers",
    "name": "CHNS/O Analyzers",
    "parent": "elemental-analyzers",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "CHNS Analyzers ECS 4024 – CHNSO Single Furnace Learn More ECS 4010 – CHNSO Dual Furnace Learn More ECS 8040 – CHNSO Single Furnace Learn More ECS 8020 – CHNSO Dual Furnace Learn More ECS 8024 – NC Soil Special Dual Furnace Learn More",
    "guide": [
      "CHNS Analyzers ECS 4024 – CHNSO Single Furnace Learn More ECS 4010 – CHNSO Dual Furnace Learn More ECS 8040 – CHNSO Single Furnace Learn More ECS 8020 – CHNSO Dual Furnace Learn More ECS 8024 – NC Soil Special Dual Furnace Learn More",
      "Orbit supplies 6 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "elemental-analyzers/onh-analyzer",
    "name": "ONH Analyzer",
    "parent": "elemental-analyzers",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "The sample, filled in a graphite crucible, will be fused in the electrode furnace.",
    "guide": [
      "The sample, filled in a graphite crucible, will be fused in the electrode furnace.",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "extratex/industrial",
    "name": "Industrial",
    "parent": "extratex",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "Orbit India is one of the best Bomb Calorimeter, Automatic Bomb Calorimeter, Oxygen Bomb Calorimeter Manufacturers, Suppliers, Exporters in Hyderabad, India.",
    "guide": [
      "Orbit India is one of the best Bomb Calorimeter, Automatic Bomb Calorimeter, Oxygen Bomb Calorimeter Manufacturers, Suppliers, Exporters in Hyderabad, India.",
      "Orbit supplies 5 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "extratex/laboratory",
    "name": "Laboratory",
    "parent": "extratex",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "Orbit India is one of the best Bomb Calorimeter, Automatic Bomb Calorimeter, Oxygen Bomb Calorimeter Manufacturers, Suppliers, Exporters in Hyderabad, India.",
    "guide": [
      "Orbit India is one of the best Bomb Calorimeter, Automatic Bomb Calorimeter, Oxygen Bomb Calorimeter Manufacturers, Suppliers, Exporters in Hyderabad, India.",
      "Orbit supplies 4 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "furnace-heating-systems",
    "name": "Furnace & Heating Systems",
    "parent": null,
    "pillar": "furnaces",
    "kind": "pillar",
    "blurb": "Furnace & Heating Systems General Purpose Furnace Learn More Chamber Furnace Learn More Tube Furnace Learn More High Temperature Tube Furnace Learn More Induction Heating Learn More Resistance Heating Learn More Microwave Heating Learn More",
    "guide": [
      "Furnace & Heating Systems General Purpose Furnace Learn More Chamber Furnace Learn More Tube Furnace Learn More High Temperature Tube Furnace Learn More Induction Heating Learn More Resistance Heating Learn More Microwave Heating Learn More"
    ],
    "faq": []
  },
  {
    "path": "gas-generators",
    "name": "Gas Generators",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Gas Generators Orbit India offers high-performance Gas Generators designed to deliver reliable, efficient, and uninterrupted power for a wide range of industrial and commercial applications.",
    "guide": [
      "Gas Generators Orbit India offers high-performance Gas Generators designed to deliver reliable, efficient, and uninterrupted power for a wide range of industrial and commercial applications.",
      "Orbit supplies 6 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.",
      "Buyers in this range typically specify compliance with ISO 8573-1:2010 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "high-temperature-tube-furnace",
    "name": "High Temperature Tube Furnace",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "UK-built precision tube furnaces, 1200–1850°C.",
    "guide": [
      "UK-built precision tube furnaces, 1200–1850°C.",
      "Orbit supplies 2 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "laboratory-accessories",
    "name": "Laboratory Accessories",
    "parent": null,
    "pillar": "crms",
    "kind": "section",
    "blurb": "Laboratory Accessories The range of laboratory accessories includes right from simple samplers, sampling systems and accessories for samplers, filling machines, drum pumps and container pumps for aggressive and dangerous liquids such as…",
    "guide": [
      "Laboratory Accessories The range of laboratory accessories includes right from simple samplers, sampling systems and accessories for samplers, filling machines, drum pumps and container pumps for aggressive and dangerous liquids such as…"
    ],
    "faq": []
  },
  {
    "path": "light-industrial-chamber-furnace-1400c-to-1700-c",
    "name": "Industrial Chamber Furnaces | Durable High-Temp Furnaces",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "Industrial Chamber Furnaces up to 1700°C with 72-203L chambers.",
    "guide": [
      "Industrial Chamber Furnaces up to 1700°C with 72-203L chambers."
    ],
    "faq": []
  },
  {
    "path": "melting-furnaces",
    "name": "Melting Furnaces",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "High temperature Tube Furnace HT 1800",
    "guide": [
      "High temperature Tube Furnace HT 1800"
    ],
    "faq": []
  },
  {
    "path": "metal-sample-preparation-equipment",
    "name": "Metal Sample Preparation Equipment",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Metal Sample Preparation Equipment Metallic Samples Processing Unit MultiEQP-100 Learn More Induction Heater EQH-3.0 Learn More",
    "guide": [
      "Metal Sample Preparation Equipment Metallic Samples Processing Unit MultiEQP-100 Learn More Induction Heater EQH-3.0 Learn More"
    ],
    "faq": []
  },
  {
    "path": "micro-analytical",
    "name": "Micro Analytical",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Micro Analytical BM Series BH-T/BH Series features a built-in fanless ionizer for static-free weighing, four 0.001 mg readability models, and a standard AD-1676 tabletop breeze break for exceptional precision and stability.",
    "guide": [
      "Micro Analytical BM Series BH-T/BH Series features a built-in fanless ionizer for static-free weighing, four 0.001 mg readability models, and a standard AD-1676 tabletop breeze break for exceptional precision and stability.",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "milling-pulverising",
    "name": "Milling & Pulverising",
    "parent": null,
    "pillar": "sample-prep",
    "kind": "section",
    "blurb": "Sieving, milling, pulverising and pellet pressing equipment for XRF/ICP and laboratory sample preparation.",
    "guide": [
      "Sample preparation determines the quality of every result downstream. Crushers, ring mills and pulverisers reduce laboratory samples to a uniform particle size; test sieves classify material by size; pellet presses produce flat, stable discs for XRF analysis; and pulverisers prepare homogeneous samples for coal, ore, cement and soil testing.",
      "SIEBTECHNIK TEMA (Germany) supplies the full range — jaw crushers, pulverisers, sieve shakers and pellet presses — with Sylab covering specialised preparation units. Choosing the right combination depends on your sample type and final fineness: we help match feed size, throughput and vessel material (agate, tungsten carbide, steel) to your application, and stock the matching sieves, vials and discs as consumables."
    ],
    "faq": [
      {
        "q": "Which mill is right for XRF sample preparation?",
        "a": "A ring mill / pulveriser that takes crushed material below 75 µm produces the flat, homogeneous pellet XRF requires. We will recommend the vessel material based on your sample hardness and contamination limits."
      },
      {
        "q": "Do you supply replacement sieves and mill parts?",
        "a": "Yes — test sieves (ISO 3310 / ASTM E11), sieve shakers, mill rings, sets, vessels and gaskets are stocked as consumables and dispatched nationwide."
      },
      {
        "q": "How do I avoid cross-contamination between samples?",
        "a": "Use dedicated vessels per sample type, clean between runs with brushed or rinsed cycles, and run a blank. We can advise on a cleaning protocol and supply separate vessels for different materials."
      }
    ]
  },
  {
    "path": "milling-pulverising/ball-mill",
    "name": "Ball Mill",
    "parent": "milling-pulverising",
    "pillar": "sample-prep",
    "kind": "subsection",
    "blurb": "Ball Mill ORBPBM Planetary Ball Mill Learn More ORBMicroball Mill Learn More Planetery Ball Mill – Bench Top Learn More High-energy Laboratory Planetary Ball Mill Learn More High Energy Planetary Ball Mill Grinding Machine Learn More Lab…",
    "guide": [
      "Ball Mill ORBPBM Planetary Ball Mill Learn More ORBMicroball Mill Learn More Planetery Ball Mill – Bench Top Learn More High-energy Laboratory Planetary Ball Mill Learn More High Energy Planetary Ball Mill Grinding Machine Learn More Lab…",
      "Orbit supplies 2 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "muffle-furnace",
    "name": "Muffle Furnace",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "High temperature Tube Furnace HT 1800",
    "guide": [
      "High temperature Tube Furnace HT 1800"
    ],
    "faq": []
  },
  {
    "path": "other-instruments",
    "name": "Other Instruments",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Explore Other Instruments from Orbit India, featuring reliable laboratory testing equipment and analytical instruments for diverse industrial and laboratory applications.",
    "guide": [
      "Explore Other Instruments from Orbit India, featuring reliable laboratory testing equipment and analytical instruments for diverse industrial and laboratory applications.",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "ovens",
    "name": "Ovens",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "Elite Thermal offers a wide range of standard and custom-designed chamber furnaces that are widely used in educational, research and industrial organizations throughout the world.",
    "guide": [
      "Elite Thermal offers a wide range of standard and custom-designed chamber furnaces that are widely used in educational, research and industrial organizations throughout the world."
    ],
    "faq": []
  },
  {
    "path": "precision-balances",
    "name": "Precision Balances",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Precision Balances Advanced-Level Precision Learn More Standard-Level Precision Learn More Entry-Level Precision Learn More",
    "guide": [
      "Precision Balances Advanced-Level Precision Learn More Standard-Level Precision Learn More Entry-Level Precision Learn More"
    ],
    "faq": []
  },
  {
    "path": "precision-balances/advanced-level-precision",
    "name": "Advanced Level Precision",
    "parent": "precision-balances",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "Advanced Level Precision A&D Apollo GX-A(E/WP) & GF-A(WP) Series Learn More",
    "guide": [
      "Advanced Level Precision A&D Apollo GX-A(E/WP) & GF-A(WP) Series Learn More",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "precision-balances/entry-level-precision",
    "name": "Entry Level Precision",
    "parent": "precision-balances",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "Entry Level Precision EJ Series Learn More",
    "guide": [
      "Entry Level Precision EJ Series Learn More",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "precision-balances/standard-level-precision",
    "name": "Standard Level Precision",
    "parent": "precision-balances",
    "pillar": "analytical",
    "kind": "subsection",
    "blurb": "Standard Level Precision A&D Fortis FZ(-WP)/FX(-WP) Series Learn More",
    "guide": [
      "Standard Level Precision A&D Fortis FZ(-WP)/FX(-WP) Series Learn More",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "premium-level-micro-semi-micro",
    "name": "Premium-Level Micro/Semi-Micro",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Premium-Level Micro/Semi-Micro BA-T/BA Series BA-T/BA Series micro and semi-micro balances deliver exceptional weighing accuracy, rapid response, and dependable lab performance.",
    "guide": [
      "Premium-Level Micro/Semi-Micro BA-T/BA Series BA-T/BA Series micro and semi-micro balances deliver exceptional weighing accuracy, rapid response, and dependable lab performance.",
      "Orbit supplies 2 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "rapid-heating-chamber-furnaces-1200",
    "name": "Rapid Heating Chamber Furnaces 1200",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "Rapid Heating Chamber Furnaces BCFR12 & BCFR13 offer fast heating/cooling, low thermal mass insulation, and versatile controls for light to medium duty.",
    "guide": [
      "Rapid Heating Chamber Furnaces BCFR12 & BCFR13 offer fast heating/cooling, low thermal mass insulation, and versatile controls for light to medium duty."
    ],
    "faq": []
  },
  {
    "path": "reactors",
    "name": "Parr Reactors",
    "parent": null,
    "pillar": "reactors",
    "kind": "pillar",
    "blurb": "High pressure and high temperature laboratory reactors, pressure vessels and custom reactor systems.",
    "guide": [
      "Laboratory reactors let you run chemical reactions, digests and material treatments under controlled pressure and temperature — from Parr's benchtop stirred reactors and stainless-steel pressure vessels to high-temperature, high-pressure systems for hydrothermal and catalytic work. Typical applications include polymerisation, hydrogenation, dissolution, digestion and catalyst screening in chemical, pharmaceutical and research laboratories.",
      "Selecting a reactor means matching vessel volume, pressure rating, temperature limit, agitation and wetted materials to your chemistry. Parr Instrument Company (USA) supplies the standard range and custom designs; Orbit handles sizing, supply, installation and after-sales support, plus spare parts such as rupture discs, gaskets, impellers and control modules."
    ],
    "faq": [
      {
        "q": "What pressure and temperature ranges are available?",
        "a": "Benchtop Parr reactors cover laboratory-scale work up to several hundred bar and 350 °C+ depending on configuration, with larger pressure vessels available on request. Share your reaction conditions and we will size the correct vessel and rating."
      },
      {
        "q": "Can you supply custom reactor configurations?",
        "a": "Yes — Parr builds custom vessels, lid patterns, impellers, thermowells and material-of-construction options. Send us your P&ID or specification and we will quote the configured system with lead times."
      },
      {
        "q": "Which spares should we keep in stock?",
        "a": "Rupture discs, PTFE gaskets, sealing rings and impellers are the common consumables. We recommend a spares kit with every reactor to avoid downtime, and can arrange a consignment stock for plants running several vessels."
      }
    ]
  },
  {
    "path": "reactors/customized-reactors",
    "name": "Customized Reactors",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Customized Reactors Parr Instrument Company designs and builds a wide variety of specialty and custom reac­tor systems.",
    "guide": [
      "Customized Reactors Parr Instrument Company designs and builds a wide variety of specialty and custom reac­tor systems.",
      "Orbit supplies 10 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/glass-reactors",
    "name": "Glass Reactors",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Glass Reactors Glass Reactors having elevated pressures with glass vessels that permit direct observation of mixing action, color changes, or changes of state Series 5100 160-1500ml Glass Reactors Learn More",
    "guide": [
      "Glass Reactors Glass Reactors having elevated pressures with glass vessels that permit direct observation of mixing action, color changes, or changes of state Series 5100 160-1500ml Glass Reactors Learn More",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/hp-ht-reactors",
    "name": "HP/HT Reactors",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "HP/HT Reactors Parr offers vide range High pressure, high temperature reactors with stirring and without stirring right from compact bench top to floor mount.",
    "guide": [
      "HP/HT Reactors Parr offers vide range High pressure, high temperature reactors with stirring and without stirring right from compact bench top to floor mount.",
      "Buyers in this range typically specify compliance with is 4200, is 350, is 2200, is 3000, is 600, is 1700 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "name": "Non-Stirred Pressure Vessels",
    "parent": "reactors/hp-ht-reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Non-Stirred Pressure Vessels Parr offers a wide choice of design options to meet the users’ individual installation or operating requirements Series 4700 22-45 ml General purpose pressure vessel Learn More Series 4740 25-75 ml HP/HT…",
    "guide": [
      "Non-Stirred Pressure Vessels Parr offers a wide choice of design options to meet the users’ individual installation or operating requirements Series 4700 22-45 ml General purpose pressure vessel Learn More Series 4740 25-75 ml HP/HT…",
      "Orbit supplies 13 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.",
      "Buyers in this range typically specify compliance with is 4200, is 350, is 2200, is 3000, is 600, is 1700 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "reactors/hp-ht-reactors/stirred-reactors",
    "name": "Stirred Reactors",
    "parent": "reactors/hp-ht-reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Stirred Reactors Standard Parr stirred reactors are offered in many sizes ranging from 25 mL to 100 liters, pressures up to 5000 psi(345 bar) and temperatures up to 500 Deg C.",
    "guide": [
      "Stirred Reactors Standard Parr stirred reactors are offered in many sizes ranging from 25 mL to 100 liters, pressures up to 5000 psi(345 bar) and temperatures up to 500 Deg C.",
      "Orbit supplies 11 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/reactor-systems-for-corrosion-monitoring-studies",
    "name": "Reactor Systems for Corrosion Monitoring Studies",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "It is vital to study corrosion in reactors as it can lead to dangerous consequences such as leaks and explosions.",
    "guide": [
      "It is vital to study corrosion in reactors as it can lead to dangerous consequences such as leaks and explosions.",
      "Orbit supplies 4 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.",
      "Buyers in this range typically specify compliance with ASTM G170, ASTM G217, ASTM G185, is 0.001 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "name": "Acid Digestion Vessels",
    "parent": "reactors/sample-preparation-vessels",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Acid Digestion Vessels For dissolving and digesting organic (or) Inorganic samples in strong acids (or) Alkalies in chemical resistance vessels at elevated pressure and temperatures 4744 General Purpose Acid Digestion Vessel, 45 mL Learn…",
    "guide": [
      "Acid Digestion Vessels For dissolving and digesting organic (or) Inorganic samples in strong acids (or) Alkalies in chemical resistance vessels at elevated pressure and temperatures 4744 General Purpose Acid Digestion Vessel, 45 mL Learn…",
      "Orbit supplies 7 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/sample-preparation-vessels/cell-disruption-vessels",
    "name": "Cell Disruption Vessels",
    "parent": "reactors/sample-preparation-vessels",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Cell Disruption Vessels For dissolving large quantities of nitrogen into cells under high pressure and then suddenly releasing the pressure to rupture and release the contents of the cell.",
    "guide": [
      "Cell Disruption Vessels For dissolving large quantities of nitrogen into cells under high pressure and then suddenly releasing the pressure to rupture and release the contents of the cell.",
      "Orbit supplies 5 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/sample-preparation-vessels/microwave-digestion-vessels",
    "name": "Microwave Digestion Vessels",
    "parent": "reactors/sample-preparation-vessels",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Microwave Digestion Vessels For treating either inorganic (or) organic samples with strong acids (or) alkalis under heat and pressure in metal – free vessels using microwave energy for rapid dissolution or digestion 4781 Microwave Acid…",
    "guide": [
      "Microwave Digestion Vessels For treating either inorganic (or) organic samples with strong acids (or) alkalis under heat and pressure in metal – free vessels using microwave energy for rapid dissolution or digestion 4781 Microwave Acid…",
      "Orbit supplies 2 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/shaker-hydrogenation-apparatus",
    "name": "Shaker Hydrogenation Apparatus",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Shaker Hydrogenation Apparatus Parr Shaker type hydrogenators provide compact and easily operated systems for treating chemicals with hydrogen in the presence of a catalyst at pressures up to 5 atmospheres (60 psig) and temperatures to 80…",
    "guide": [
      "Shaker Hydrogenation Apparatus Parr Shaker type hydrogenators provide compact and easily operated systems for treating chemicals with hydrogen in the presence of a catalyst at pressures up to 5 atmospheres (60 psig) and temperatures to 80…",
      "Orbit supplies 2 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/tubular-reactors",
    "name": "Tubular Reactors",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Tubular Reactors Parr Tubular reactors offer an efficient and cost-effective way for researchers to meet their research requirements and specifications for continuous flow tubular and stirred reactor applications 5400 Continuous Flow…",
    "guide": [
      "Tubular Reactors Parr Tubular reactors offer an efficient and cost-effective way for researchers to meet their research requirements and specifications for continuous flow tubular and stirred reactor applications 5400 Continuous Flow…",
      "Orbit supplies 3 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.",
      "Buyers in this range typically specify compliance with ASTM G217 — tell us the standard you must meet and we will configure the instrument accordingly."
    ],
    "faq": []
  },
  {
    "path": "retort-furnace",
    "name": "Retort Furnace",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "High temperature Tube Furnace HT 1800",
    "guide": [
      "High temperature Tube Furnace HT 1800"
    ],
    "faq": []
  },
  {
    "path": "semi-micro-analytical",
    "name": "Semi-Micro Analytical",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Semi-Micro Analytical GH Series Learn More HR-i Series Learn More GR Series Learn More",
    "guide": [
      "Semi-Micro Analytical GH Series Learn More HR-i Series Learn More GR Series Learn More",
      "Orbit supplies 3 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "sieving",
    "name": "Sieving",
    "parent": null,
    "pillar": "sample-prep",
    "kind": "section",
    "blurb": "Sieving Laboratory Sieve Shaker Learn More Airjet Sieve Shaker Learn More",
    "guide": [
      "Sieving Laboratory Sieve Shaker Learn More Airjet Sieve Shaker Learn More",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "sintering-furnace",
    "name": "Sintering Furnace",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "High temperature Tube Furnace HT 1800",
    "guide": [
      "High temperature Tube Furnace HT 1800"
    ],
    "faq": []
  },
  {
    "path": "special-analyzers",
    "name": "Special Analyzers",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Special Analyzers AOX/TOX/POX/EOX Analyzer Learn More Aluminum Metal Analyzer Learn More Carbonates Analyzer Learn More TOC Analyzer Learn More",
    "guide": [
      "Special Analyzers AOX/TOX/POX/EOX Analyzer Learn More Aluminum Metal Analyzer Learn More Carbonates Analyzer Learn More TOC Analyzer Learn More"
    ],
    "faq": []
  },
  {
    "path": "standard-level-analytical",
    "name": "Standard-Level Analytical",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Standard-Level Analytical A&D Fortis FZ(-WP)/FX(-WP) Series The A&D Fortis FZ(-WP)/FX(-WP) Series offers high-speed, high-precision weighing with 1-second stabilization, a compact C-SHS sensor, and an anti-static breeze break for reliable…",
    "guide": [
      "Standard-Level Analytical A&D Fortis FZ(-WP)/FX(-WP) Series The A&D Fortis FZ(-WP)/FX(-WP) Series offers high-speed, high-precision weighing with 1-second stabilization, a compact C-SHS sensor, and an anti-static breeze break for reliable…",
      "Orbit supplies 1 model in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "tga-proximate-analyzers",
    "name": "TGA / Proximate Analyzers",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Reliable and fast proximate analysis by thermogravimetry — TGA 3000 and TGA 1500.",
    "guide": [
      "Thermogravimetric analysis determines moisture, volatile matter, fixed carbon and ash in a single run by measuring weight change as the sample is heated through a defined temperature programme. It replaces the traditional muffle-furnace workflow — less operator time, better repeatability and closed-loop reporting for fuel and mineral laboratories.",
      "The TGA 3000 handles up to 34 samples in a single sequence with automatic evaluation, while the benchtop TGA 1500 suits lower-throughput labs. Both are widely used for coal, coke, biomass, petroleum coke and soil analysis under ASTM D7582 and ISO 17245. Orbit supplies the instruments with calibration, method setup and after-sales service through our 14 sales & service locations."
    ],
    "faq": [
      {
        "q": "How many samples can the TGA 3000 run at once?",
        "a": "The TGA 3000 accepts up to 34 samples in one automatic sequence, so a full proximate analysis of a day's batch runs unattended — including moisture, volatile matter, fixed carbon and ash calculation."
      },
      {
        "q": "Which standards apply to thermogravimetric proximate analysis?",
        "a": "The TGA range follows ASTM D7582, ISO 17245 and ISO 11722 for proximate analysis of solid fuels, and we can set up methods matching your lab's own quality scheme."
      },
      {
        "q": "Can TGA replace the muffle furnace method?",
        "a": "Yes — TGA delivers the same moisture, volatile and ash results in one automated run with far less operator handling. Most labs we supply to have fully retired the manual furnace method after validation."
      }
    ]
  },
  {
    "path": "tube-furnace",
    "name": "Tube Furnace",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "UK-built precision tube furnaces, 1200–1850°C.",
    "guide": [
      "UK-built precision tube furnaces, 1200–1850°C."
    ],
    "faq": []
  },
  {
    "path": "tube-furnaces",
    "name": "Tube Furnace",
    "parent": null,
    "pillar": "furnaces",
    "kind": "section",
    "blurb": "Orbit India is one of the Best Coal and Coke Testing Instruments, Plastometer, Diameter DF-4 Suppliers, Exporters in Hyderabad, India.",
    "guide": [
      "Orbit India is one of the Best Coal and Coke Testing Instruments, Plastometer, Diameter DF-4 Suppliers, Exporters in Hyderabad, India.",
      "Orbit supplies 5 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "tube-furnaces/split-tube-furnaces",
    "name": "Split Tube Furnaces",
    "parent": "tube-furnaces",
    "pillar": "furnaces",
    "kind": "subsection",
    "blurb": "Split Tube Furnaces TSHH11 Maximum Furnace Temperature: 1100°C Furnace Bore Size (mm): 90 Heated Lengths (mm): 305 to 610 Orientation: Horizontal Learn More TSVH11 Maximum Furnace Temperature: 1100°C Furnace Bore Size (mm): 90 Heated…",
    "guide": [
      "Split Tube Furnaces TSHH11 Maximum Furnace Temperature: 1100°C Furnace Bore Size (mm): 90 Heated Lengths (mm): 305 to 610 Orientation: Horizontal Learn More TSVH11 Maximum Furnace Temperature: 1100°C Furnace Bore Size (mm): 90 Heated…",
      "Orbit supplies 5 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "tube-furnaces/vacuum-tube-furnaces",
    "name": "Vacuum Tube Furnaces",
    "parent": "tube-furnaces",
    "pillar": "furnaces",
    "kind": "subsection",
    "blurb": "Laboratory Chamber Furnaces TSHVC12 Maximum Furnace Temperature: 1200°C Work Tube Dia (mm): 50 to 75 Heated Length (mm): 600 Orientation: Horizontal/Vertical Learn More TSHVC15 Maximum Furnace Temperature: 1500°C Work Tube Dia (mm): 50 to…",
    "guide": [
      "Laboratory Chamber Furnaces TSHVC12 Maximum Furnace Temperature: 1200°C Work Tube Dia (mm): 50 to 75 Heated Length (mm): 600 Orientation: Horizontal/Vertical Learn More TSHVC15 Maximum Furnace Temperature: 1500°C Work Tube Dia (mm): 50 to…",
      "Orbit supplies 2 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "xrf-icp-sample-preparation-equipment",
    "name": "XRF/ICP Sample Preparation Equipment",
    "parent": null,
    "pillar": "sample-prep",
    "kind": "section",
    "blurb": "XRF/ICP Sample Preparation Equipment from Orbit Technologies — supplied, installed and serviced across India.",
    "guide": [
      "Orbit supplies 3 models in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India."
    ],
    "faq": []
  },
  {
    "path": "extratex",
    "name": "Extratex",
    "parent": null,
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Extratex from Orbit Technologies — supplied, installed and serviced across India.",
    "guide": [
      "Extratex supplied by Orbit Technologies with installation, training and after-sales support across India."
    ],
    "faq": []
  },
  {
    "path": "reactors/sample-preparation-vessels",
    "name": "Sample Preparation Vessels",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "subsection",
    "blurb": "Sample Preparation Vessels from Orbit Technologies — supplied, installed and serviced across India.",
    "guide": [
      "Sample Preparation Vessels supplied by Orbit Technologies with installation, training and after-sales support across India."
    ],
    "faq": []
  },
  {
    "path": "denatec",
    "name": "DENATEC",
    "parent": "reactors",
    "pillar": "reactors",
    "kind": "section",
    "blurb": "Very High Pressure Chambers, Pressure Test Benches, Testing Facilities, and Underwater Applications.",
    "guide": [
      "DENATEC engineers world-class high-pressure test systems operating at extreme hyperbaric conditions up to 10,000+ bar. Applications span aerospace component qualification, deep-sea exploration testing, subsea sensor validation, and defense pressure hull simulations.",
      "Orbit Technologies provides direct sales, site engineering, high-pressure safety commissioning, and lifetime maintenance support for all DENATEC systems across India."
    ],
    "faq": [
      {
        "q": "What maximum pressure ratings are available for DENATEC test chambers?",
        "a": "DENATEC manufactures standard and custom chambers rated from 500 bar up to 10,000+ bar, engineered in high-tensile forged alloys with quick-opening closure systems and automated interlocks."
      },
      {
        "q": "Can DENATEC test benches simulate ocean depth conditions?",
        "a": "Yes — the hyperbaric underwater testing chambers simulate ocean depths beyond 6,000 meters, complete with temperature regulation and feed-throughs for instrumentation cables and fiber optics."
      }
    ]
  },
  {
    "path": "analytical-balances",
    "name": "Analytical Balances",
    "parent": "precision-balances",
    "pillar": "analytical",
    "kind": "section",
    "blurb": "Micro, semi-micro, and analytical balances from A&D Weighing for scientific research and precision laboratory compliance.",
    "guide": [
      "Analytical balances from A&D Weighing deliver high-precision mass determination down to 0.001 mg for analytical, chemical, and pharmaceutical testing."
    ],
    "faq": []
  },
  {
    "path": "labware",
    "name": "Labware",
    "parent": null,
    "pillar": "crms",
    "kind": "section",
    "blurb": "PTFE, PFA, and borosilicate labware, stirring components, screw joints, tubing, and distillation equipment.",
    "guide": [
      "Orbit Technologies supplies world-class Bohlender (BOLA) and related laboratory PTFE/PFA labware, including magnetic stirring bars, temperature measurement probes, high-pressure screw fittings up to 5 bar, and ATEX-certified ground joints for aggressive chemicals and high-purity applications."
    ],
    "faq": [
      {
        "q": "Are the PTFE labware components chemically inert?",
        "a": "Yes, our PTFE and PFA labware products offer near-universal chemical resistance against aggressive acids, alkalis, and organic solvents up to 250°C."
      }
    ]
  }
];

export function getCategoryByPath(path: string): Category | null {
  return categories.find((c) => c.path === path) ?? null;
}

/** Top-level categories (sections and pillar hubs) in the given pillar. */
export function sectionsFor(pillar: Pillar): Category[] {
  return categories.filter((c) => c.pillar === pillar && c.parent === null);
}

export function childrenOf(path: string): Category[] {
  return categories.filter((c) => c.parent === path);
}

/** Ancestors of a category path, root first (for breadcrumbs). */
export function ancestorsOf(path: string): Category[] {
  const chain: string[] = [];
  let cur = path;
  while (cur.includes("/")) {
    cur = cur.slice(0, cur.lastIndexOf("/"));
    chain.unshift(cur);
  }
  if (chain[0] !== cur && getCategoryByPath(cur)) chain.unshift(cur);
  return chain.map((p) => getCategoryByPath(p)).filter((c): c is Category => c !== null);
}
