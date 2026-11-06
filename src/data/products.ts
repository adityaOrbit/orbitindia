/* GENERATED FROM live-extract — run scripts/generate-data.mjs to refresh.
 * Product registry: real live product names, flat URL slugs (URLs are
 * /products/{slug}/) with the live category path for breadcrumbs and
 * grouping, real spec tables, and hand-written editorial copy where it
 * exists. */

export type Product = {
  /** Flat URL slug — product URLs are /products/{slug}/ */
  slug: string;
  name: string;
  /** Live category path this product belongs to, e.g. "calorimeter/bomb-calorimeters" */
  category: string;
  brand: string;
  origin: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  /** Real spec rows scraped from the live product page, where available. */
  specs?: [string, string][];
};

export const products: Product[] = [
  {
    "slug": "ad-apollo-gx-ae-wp-gf-a-wp-series",
    "name": "A&D Apollo GX-A(E/WP) & GF-A(WP) Series",
    "category": "advanced-level-analytical",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "A&D Apollo GX-A(E/WP) & GF-A(WP) Series Overview High-speed weighing with 1-second stabilization*1 Compact Super Hybrid Sensor (C-SHS) enabling footprints smaller than an A4 sheet of paper…",
    "description": "A&D Apollo GX-A(E/WP) & GF-A(WP) Series Overview High-speed weighing with 1-second stabilization*1 Compact Super Hybrid Sensor (C-SHS) enabling footprints smaller than an A4 sheet of paper Anti-static, shatter-resistant, and easily-detachable breeze break with rotary sliding doors*2 IP65 dust and waterproof (FZ-WP/FX-WP) Guarded against accidental overloading Impact shock detection (ISD) providing feedback to prevent damage to […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Readability",
        "0.0001 g"
      ],
      [
        "Minimum weight* (typical)",
        "120 mg"
      ],
      [
        "Weighing pan size",
        "Ø90 mm"
      ],
      [
        "External dimensions",
        "259 (W) × 358 (D) × 332 (H) mm (including the large glass breeze break)"
      ],
      [
        "Net weight",
        "Approx. 7 kg"
      ]
    ]
  },
  {
    "slug": "ash-fusion-analyzer-ht-if2000g-hdbm",
    "name": "IF2000G-HDBM Ash Fusion Analyser",
    "category": "ash-fusion-analyzers",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Ash fusion analyser with reduced-temperature measurement",
    "description": "The HDBM variant of the IF2000G series performs ash fusion temperature analysis with a modified atmosphere arrangement, suited to laboratories characterising a wide variety of ash and slag samples.",
    "features": [
      "Automatic deformation, hemisphere and flow readings",
      "Controlled furnace atmosphere",
      "Digital imaging and analysis software",
      "Robust furnace design for continuous operation"
    ],
    "applications": [
      "Coal & biomass",
      "Cement raw meals",
      "Waste-derived fuels"
    ],
    "specs": [
      [
        "Fusion Points",
        "IT: Initial Deformation Temperature ST: Softening / Temperature HT: Hemi Sphere Temperature FT: Fluid / Flow temperature"
      ],
      [
        "Maximum number of samples per analysis",
        "6 samples"
      ],
      [
        "Sample type",
        "Cylinder/Cube, Pyramid, Truncated Pyramid and Upright Pyramid"
      ],
      [
        "Sample Shape Identification",
        "Automatic"
      ],
      [
        "Furnace Temperature range",
        "Ambient to 1680 degC"
      ],
      [
        "Maximum Furnace Temperature",
        "1750 deg C"
      ],
      [
        "Temperature ramp Rate",
        "Programmable from 1°C per minute to 12°C per minute"
      ],
      [
        "Temperature Precision",
        "+/- 5°C as per Standard test method at 1064°C (by using 99.98% pure gold wire)"
      ],
      [
        "Number of heating elements",
        "4 Heating elements"
      ],
      [
        "Camera Image Resolution",
        "1280x 1024 Pixel"
      ],
      [
        "Image collection",
        "Up to 30 frames/sec"
      ],
      [
        "Purge Air",
        "Nitrogen, 99.5%"
      ],
      [
        "Reducing Mode",
        "CO-CO2 Ratio : 60% CO - 40 +/- 5CO2, H2-CO2 Ration : 45% to 55% H2-45% to 55% CO2 Capable to accept individual gases (Analyzer as inbuilt gas mixing facility for the required ratio)"
      ],
      [
        "Oxidizing Mode",
        "Analyzer has integrated oil free and moisture free air pump which is software controlled"
      ]
    ]
  },
  {
    "slug": "ash-fusion-analyzer-if2000g-hdc",
    "name": "IF2000G-HDC Ash Fusion Analyser",
    "category": "ash-fusion-analyzers",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Automatic ash fusion temperature analysis",
    "description": "The IF2000G-HDC determines the deformation, hemisphere and flow temperatures of coal and biomass ash automatically, recording the full deformation curve of the ash cone during heating.",
    "features": [
      "Automatic determination of DT, HT and FT temperatures",
      "Continuous imaging of the ash cone deformation",
      "Reproducible heating program per standard methods",
      "Digital result storage and reporting"
    ],
    "applications": [
      "Coal ash",
      "Biomass ash",
      "Slagging propensity studies"
    ],
    "specs": [
      [
        "Fusion Points",
        "IT: Initial Deformation temperature ST: Softening/ Sphere temperature HT: Hemi Sphere Temperature FT: Fluid / Flow temperature"
      ],
      [
        "Maximum number of samples per analysis",
        "6 samples"
      ],
      [
        "Sample type",
        "Cube, Pyramid, Truncated Pyramid or cylinder"
      ],
      [
        "Sample Shape Identification",
        "Automatic"
      ],
      [
        "Furnace Temperature range",
        "Ambient to 1600°C"
      ],
      [
        "Temperature ramp Rate",
        "Programmable from 1°C per minute to 12°C per minute"
      ],
      [
        "Temperature Precision",
        "+/- 5°C as per Standard test method at 1064°C (by using 99.98% pure gold wire)"
      ],
      [
        "Number of heating elements",
        "4 Heating elements"
      ],
      [
        "Camera Image Resolution",
        "1280x 1024 Pixel"
      ],
      [
        "Image collection",
        "Up to 30 frames/min"
      ],
      [
        "Purge Air",
        "Nitrogen, 99.5%"
      ],
      [
        "Reducing Mode",
        "CO-CO2 premixed gas (50-50 ratio) (or) H2-CO2 Premixed gas (50-50 ratio) (or) Capable to accept individual gases (Analyzer as inbuilt gas mixing facility for the required ratio)"
      ],
      [
        "Oxidizing Mode",
        "Either by inbuilt moisture free air pump (or) by using with external Air compressor"
      ],
      [
        "Electrical Requirement",
        "220 V to 240 V, 5/60 Hz, single phase, 18 A"
      ]
    ]
  },
  {
    "slug": "1341-plain-jacket-calorimeter",
    "name": "1341 Plain Jacket Calorimeter",
    "category": "calorimeter/bomb-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "The 1341 Plain Jacket Calorimeter is the current version of the static jacket, oxygen bomb calorimeter that Professor Parr developed over 100 years ago.",
    "description": "The 1341 Plain Jacket Calorimeter is the current version of the static jacket, oxygen bomb calorimeter that Professor Parr developed over 100 years ago. 1341 Plain Jacket Calorimeter is a reliable calorimeter that can be used for the same broad range of solid and liquid combustible samples as the 6000 Series Calorimeters.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "1341"
      ],
      [
        "Tests Per Hour",
        "2"
      ],
      [
        "Operator Time Per Test",
        "25 Minute"
      ],
      [
        "Temperature resolution",
        "0.002 ℃"
      ],
      [
        "Precision Classification",
        "0.3% Class"
      ],
      [
        "Jacket Type",
        "Static"
      ],
      [
        "Oxygen Fill",
        "Manual"
      ],
      [
        "Bucket Fill",
        "Manual"
      ],
      [
        "Bomb Wash",
        "Manual"
      ],
      [
        "Bomb Model Options",
        "1108, Alloy 20"
      ],
      [
        "Dimensions (cm)",
        "21w x 21d x 29h"
      ]
    ]
  },
  {
    "slug": "6050-automatic-pc-based-calorimeter",
    "name": "6050 Automatic PC Based Calorimeter",
    "category": "calorimeter/bomb-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "The new Model 6050 Compensated Jacket Calorimeter is the first calorimeter designed by Parr to be controlled by your own personal computer.",
    "description": "The new Model 6050 Compensated Jacket Calorimeter is the first calorimeter designed by Parr to be controlled by your own personal computer. The 6050 Calorimeter is a compact, static jacket calorimeter that operates at room temperature. A traditional design calorimeter with removable oxygen bomb and bucket.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6050"
      ],
      [
        "Tests Per Hour",
        "4 – 6"
      ],
      [
        "Operator Time Per Test",
        "6 Minutes"
      ],
      [
        "Precision Classification",
        "0.2% Class"
      ],
      [
        "Jacket Type",
        "Continuously Compensated"
      ],
      [
        "Oxygen Fill",
        "Automatic"
      ],
      [
        "Bucket Fill",
        "Manual"
      ],
      [
        "Vessel Wash",
        "Manual"
      ],
      [
        "Vessel Model Options",
        "1110, 250 mL, T316 (standard)"
      ],
      [
        "PC Interface",
        "USB Port"
      ],
      [
        "Dimensions (cm)",
        "27w x 45d x 42h"
      ]
    ]
  },
  {
    "slug": "6100-automatic-compensated-jacket-bomb-calorimeter",
    "name": "6100 Automatic Compensated Jacket Bomb Calorimeter",
    "category": "calorimeter/bomb-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Orbit India is one of the Best Bomb Calorimeter, 6100 Automatic Compensated Jacket Bomb Calorimeter Suppliers, Exporters in Hyderabad, India.",
    "description": "Orbit India is one of the Best Bomb Calorimeter, 6100 Automatic Compensated Jacket Bomb Calorimeter Suppliers, Exporters in Hyderabad, India.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6100"
      ],
      [
        "Tests Per Hour",
        "4 - 8"
      ],
      [
        "Operator Time Per Test",
        "6 Minutes"
      ],
      [
        "Temperature resolution",
        "0.0001 ℃"
      ],
      [
        "Precision Classification",
        "0.1 – 0.2% Class"
      ],
      [
        "Jacket Type",
        "Continuously Compensated"
      ],
      [
        "Oxygen Fill",
        "Automatic"
      ],
      [
        "Bucket Fill",
        "Manual"
      ],
      [
        "Bomb Wash",
        "Manual"
      ],
      [
        "Memory",
        "1000 tests"
      ],
      [
        "Bomb Model Options",
        "1108, Alloy 20"
      ],
      [
        "Balance Communication",
        "USB Port"
      ],
      [
        "Printer Communication",
        "USB Port"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ]
    ]
  },
  {
    "slug": "7200-precision-isoperibol-calorimeter",
    "name": "7200 Precision Isoperibol Calorimeter",
    "category": "calorimeter/bomb-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "High-precision true isoperibol automatic calorimeter",
    "description": "The 7200 delivers true isoperibolic operation with fully automatic control of the calorimetric cycle — from ignition through equilibration to the final result. Built for laboratories that demand research-grade precision on every determination.",
    "features": [
      "True isoperibolic measurement with precisely controlled jacket temperature",
      "Automatic ignition, equilibration and endpoint detection",
      "High-precision temperature measurement for demanding fuel testing",
      "Integrated software for result calculation and data export",
      "Stainless steel bomb options for a wide range of sample types"
    ],
    "applications": [
      "Coal & coke",
      "Liquid fuels",
      "Biomass",
      "Refuse-derived fuels"
    ],
    "specs": []
  },
  {
    "slug": "7400-automatic-isoperibol-calorimeter",
    "name": "7400 Automatic Isoperibol Calorimeter",
    "category": "calorimeter/bomb-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Fully automatic calorimeter for high-throughput laboratories",
    "description": "The 7400 combines true isoperibolic measurement with a high degree of automation, letting a single operator run a full day of determinations with minimal hands-on time — ideal for routine quality-control laboratories.",
    "features": [
      "Fully automatic calorimetric cycle",
      "True isoperibolic measurement principle",
      "Designed for high sample throughput",
      "Automatic handling of ignition and results",
      "Rugged construction for industrial laboratory environments"
    ],
    "applications": [
      "Power plants",
      "Cement plants",
      "Steel plants",
      "Fuel quality control"
    ],
    "specs": [
      [
        "Specification",
        "Details"
      ],
      [
        "Model Number",
        "7400"
      ],
      [
        "Tests Per Hour",
        "6 – 7"
      ],
      [
        "Operator Time Per Test",
        "1 Minute"
      ],
      [
        "Temperature resolution",
        "0.0001 ℃"
      ],
      [
        "Precision Classification",
        "0.1% Class"
      ],
      [
        "Jacket Type",
        "Isoperibol, Water Jacket"
      ],
      [
        "Oxygen Fill",
        "Automatic"
      ],
      [
        "Bucket Fill",
        "Automatic"
      ],
      [
        "Vessel Wash",
        "Automatic"
      ],
      [
        "Vessel Model Options",
        "1138, 250mL Alloy 20 1138CL, 250mL Alloy G30"
      ],
      [
        "Balance Communication",
        "USB Port"
      ],
      [
        "Printer Communication",
        "USB Port"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ]
    ]
  },
  {
    "slug": "oxygen-combustion-vessel",
    "name": "Oxygen Combustion Vessel",
    "category": "calorimeter/bomb-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "The 1341 Plain Jacket Calorimeter is the current version of the static jacket, oxygen bomb calorimeter that Professor Parr developed over 100 years ago.",
    "description": "The 1341 Plain Jacket Calorimeter is the current version of the static jacket, oxygen bomb calorimeter that Professor Parr developed over 100 years ago. 1341 Plain Jacket Calorimeter is a reliable calorimeter that can be used for the same broad range of solid and liquid combustible samples as the 6000 Series Calorimeters.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "6790-detonation-calorimeter",
    "name": "Detonation Calorimeter",
    "category": "calorimeter/detonation-calorimeter",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "For the measurement of explosive energy release",
    "description": "Purpose-built for determining the energy of detonation of explosive materials, this calorimeter adapts the Parr bomb principle to the special safety and handling requirements of energetic materials.",
    "features": [
      "Engineered for energetic and explosive sample materials",
      "Heavy-duty bomb construction for high-pressure combustion",
      "Controlled, reproducible ignition",
      "Supplied with application-specific fittings"
    ],
    "applications": [
      "Explosives",
      "Propellants",
      "Pyrotechnics",
      "Defence research"
    ],
    "specs": []
  },
  {
    "slug": "6725-semi-micro-calorimeter",
    "name": "6725 Semi-micro Calorimeter",
    "category": "calorimeter/semimicro-and-solution-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "6725 Semimicro Calorimeter Overview The 6725 Semi-micro Calorimeter is a compact, static jacket, calorimeter designed specifically for measuring the heat produced by the combustion of small samples.",
    "description": "6725 Semimicro Calorimeter Overview The 6725 Semi-micro Calorimeter is a compact, static jacket, calorimeter designed specifically for measuring the heat produced by the combustion of small samples. The ability of the 6725 Semi-micro Calorimeter to produce complete combustion and a measurable temperature rise with small samples in the 25 to 200 milligram range makes this […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6725"
      ],
      [
        "Tests Per Hour",
        "2 – 3"
      ],
      [
        "Operator Time Per Test",
        "6 – 10 Minutes"
      ],
      [
        "Precision Classification",
        "0.4% Class"
      ],
      [
        "Temperature resolution",
        "0.0001 ℃"
      ],
      [
        "Jacket Type",
        "Compensated, Dewar Flask"
      ],
      [
        "Oxygen Fill",
        "Manual"
      ],
      [
        "Bucket Fill",
        "Manual"
      ],
      [
        "Bomb Model Options",
        "1109A, 22mL Manual Valve Semi-Micro Bomb"
      ],
      [
        "Balance Communication",
        "USB Port"
      ],
      [
        "Printer Communication",
        "USB Port"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ],
      [
        "Dimensions (cm)",
        "6725: 22w x 33d x 33h"
      ]
    ]
  },
  {
    "slug": "6755-solution-calorimeter",
    "name": "6755 Solution Calorimeter",
    "category": "calorimeter/semimicro-and-solution-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "6755 Solution Calorimeter Overview The 6755 Solution Calorimeter is a multi-purpose calorimeter for measuring enthalpy changes produced by chemical reactions in solution.",
    "description": "6755 Solution Calorimeter Overview The 6755 Solution Calorimeter is a multi-purpose calorimeter for measuring enthalpy changes produced by chemical reactions in solution. Utilizing a unique rotating sample cell and a precise microprocessor-based thermometer, the Parr 6755 Solution Calorimeter provides a moderately priced and easily operated instrument for measuring: Specifications Downloads Model Number 6775 Precision Classification […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6775"
      ],
      [
        "Precision Classification",
        "0.4% Class (1.5 – 5.0 °C rise at or near room temperature)"
      ],
      [
        "Working Temperature Range",
        "10 – 50 °C"
      ],
      [
        "Temperature Sensitivity",
        "0.0001 °C"
      ],
      [
        "Energy Measurement Range",
        "2 - 1000 Calories"
      ],
      [
        "Detection Limit",
        "0.1 Calorie"
      ],
      [
        "Energy Equivalent",
        "100 – 145 Calories/°C"
      ],
      [
        "Maximum Volume, Solute",
        "20 mL"
      ],
      [
        "Required Volume, Solvent",
        "90 – 120 mL"
      ],
      [
        "Balance Communication",
        "USB Port"
      ],
      [
        "Printer Communication",
        "USB Port"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ],
      [
        "Dimensions (cm)",
        "6755: 22w x 33d x 33h 6772: 56w x 36d x 31h"
      ]
    ]
  },
  {
    "slug": "6765-combination-calorimeter",
    "name": "6765 Combination Calorimeter",
    "category": "calorimeter/semimicro-and-solution-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "6765 Combination Calorimeter Overview For laboratories that want to perform both Solution and Semimicro Oxygen Bomb calorimetry tests, Parr offers the 6765 Combination Calorimeter.",
    "description": "6765 Combination Calorimeter Overview For laboratories that want to perform both Solution and Semimicro Oxygen Bomb calorimetry tests, Parr offers the 6765 Combination Calorimeter. This includes the 6772 Calorimetric Thermometer module plus a calorimeter module and conversion parts for both the 6775 Solution Calorimeter and the 6725 Semimicro Calorimeter. This option has been popular with […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6765"
      ],
      [
        "Precision Classification",
        "0.4% Class"
      ],
      [
        "Operator time Per test",
        "6-10 minutes"
      ],
      [
        "Temperature Sensitivity",
        "0.0001 °C"
      ],
      [
        "Energy Measurement Range",
        "2 - 1000 Calories"
      ],
      [
        "Detection Limit",
        "0.1 Calorie"
      ],
      [
        "Energy Equivalent",
        "100 – 145 Calories/°C"
      ],
      [
        "Maximum Volume, Solute",
        "20 mL"
      ],
      [
        "Required Volume, Solvent",
        "90 – 120 mL"
      ],
      [
        "Balance Communication",
        "USB Port"
      ],
      [
        "Printer Communication",
        "USB Port"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ],
      [
        "Dimensions (cm)",
        "6755: 22w x 33d x 33h 6772: 56w x 36d x 31h"
      ]
    ]
  },
  {
    "slug": "6772-calorimetric-thermometer",
    "name": "6772 Calorimetric Thermometer",
    "category": "calorimeter/semimicro-and-solution-calorimeters",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "6772 Calorimetric Thermometer Overview The 6772 Calorimetric Thermometer is a two-channel precision calorimetric thermometer included with the 6725 Semimicro Oxygen Bomb Calorimeter and the 6755…",
    "description": "6772 Calorimetric Thermometer Overview The 6772 Calorimetric Thermometer is a two-channel precision calorimetric thermometer included with the 6725 Semimicro Oxygen Bomb Calorimeter and the 6755 Solution Calorimeter. It is also used with the Parr 1341 Oxygen Bomb Calorimeter or for other laboratory applications requiring high precision, differential temperature measurements. Specifications Downloads Model Number 6772 Calorimetric […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6772 Calorimetric Thermometer"
      ],
      [
        "Operating Range",
        "10 - 50 °C"
      ],
      [
        "Resolution",
        "0.0001 °C"
      ],
      [
        "Absolute Accuracy w/out Calibration",
        "± 0.1000 °C"
      ],
      [
        "Absolute Accuracy w/ Calibration",
        "± 0.0500 °C"
      ],
      [
        "Absolute Accuracy",
        "+/– 0.05 °C (w/ Calibration)"
      ],
      [
        "Repeatability, Single Point",
        "+/– 0.002 °C"
      ],
      [
        "Linearity, 10 °C Span",
        "+/– 0.002 °C"
      ],
      [
        "Balance Communication",
        "USB"
      ],
      [
        "Printer Communication",
        "USB"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ],
      [
        "Dimensions (cm)",
        "56w x 36d x 31h"
      ]
    ]
  },
  {
    "slug": "laboratory-ashing-furnaces",
    "name": "Laboratory Ashing Furnaces",
    "category": "chamber-furnaces/ashing-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Laboratory Ashing Furnaces Overview The BSFA furnace is designed for ashing applications, its design makes it ideal for treating heavier loads, and the processing of material that could contaminate…",
    "description": "Laboratory Ashing Furnaces Overview The BSFA furnace is designed for ashing applications, its design makes it ideal for treating heavier loads, and the processing of material that could contaminate floor mounted heating elements through spillage. Ideal for ashing foods, plastics, coal & other hydrocarbon materials. Standard Features BSF models use heating elements embedded in slabs, […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "laboratory-ashing-furnaces-bmf",
    "name": "Laboratory Ashing Furnaces BMF",
    "category": "chamber-furnaces/ashing-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Laboratory Ashing Furnaces Overview BMF11 and BMF12 are designed for general purpose as well as ashing applications and features a pre-heated airflow system and large chimney to ensure good…",
    "description": "Laboratory Ashing Furnaces Overview BMF11 and BMF12 are designed for general purpose as well as ashing applications and features a pre-heated airflow system and large chimney to ensure good combustion conditions within the chamber. Standard Features High grade resistance wire wound onto a ceramic muffle. Low thermal mass insulation. Outer case manufactured from standard steel […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "light-industral-chamber-furnaces",
    "name": "Light Industral Chamber Furnaces",
    "category": "chamber-furnaces/industrial-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Light Industrial Chamber Furnaces Overview BIF12 The BIF 12 furnaces are designed for general purpose industrial heat treatment applications which include-stress relieving normalising and annealing.",
    "description": "Light Industrial Chamber Furnaces Overview BIF12 The BIF 12 furnaces are designed for general purpose industrial heat treatment applications which include-stress relieving normalising and annealing. Elite offers a bespoke design service to tailor the BIF design to meet your specific process requirements. BIF14, 15, 17 The BIF furnaces are designed for high temperature heat treatment […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "air-re-circulating-furnace",
    "name": "Air Re-circulating Furnace",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Air Re-circulating Furnace Overview The BAF 7 air re-circulating furnaces provide good temperature uniformity and rapid thermal transfer to the load at lower temperatures, suitable for low…",
    "description": "Air Re-circulating Furnace Overview The BAF 7 air re-circulating furnaces provide good temperature uniformity and rapid thermal transfer to the load at lower temperatures, suitable for low temperature applications such as annealing, stress relieving, tempering and normalising and offers a choice of chamber capacities ranging from 15 to 45 litre. Applications include annealing, stress relieving, […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "bottom-loading-chamber-furnace",
    "name": "Bottom Loading Chamber Furnace",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Vertical-loading furnace for safe handling of hot loads",
    "description": "A bottom-loading design places the hearth below the heating chamber, allowing heavy or delicate samples to be loaded and unloaded vertically without disturbing the hot zone.",
    "features": [
      "Vertical bottom-loading hearth",
      "Reduced heat exposure for the operator",
      "High-temperature chamber options",
      "Suitable for delicate or heavy workloads"
    ],
    "applications": [
      "Heat treatment",
      "Foundry research",
      "Technical ceramics"
    ],
    "specs": []
  },
  {
    "slug": "economy-chamber-furnace",
    "name": "Economy Chamber Furnaces",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Economy Chamber Furnaces Overview BCF 11 Economy Chamber furnace is suitable for light-duty general laboratory work providing satisfactory performance for many firing applications and is available in…",
    "description": "Economy Chamber Furnaces Overview BCF 11 Economy Chamber furnace is suitable for light-duty general laboratory work providing satisfactory performance for many firing applications and is available in various capacities ranging from 3 litres to 45 litres. Standard Features Two-sided panel heating elements of ceramic fibre containing wire spirals freely radiating from sinusoidal grooves. Outer case […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "general-purpose-chamber-furnaces-bcf",
    "name": "General Purpose Chamber Furnaces BCF",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Orbit India Supplies General Purpose Furnace 1200°c​",
    "description": "Orbit India Supplies General Purpose Furnace 1200°c​",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "general-purpose-chamber-furnaces-bsf",
    "name": "General Purpose Chamber Furnaces BSF",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Orbit India Supplies General Purpose Furnace 1200°c​",
    "description": "Orbit India Supplies General Purpose Furnace 1200°c​",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "high-temperature-chamber-furnace",
    "name": "High Temperature Chamber Furnace",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "High Temperature Chamber Furnace – 1400°c to 1800 °c Overview The BRF14, 15, 16, 17 & 18 models form a comprehensive range of high thermal efficiency, rapid heating chamber furnaces with operating…",
    "description": "High Temperature Chamber Furnace – 1400°c to 1800 °c Overview The BRF14, 15, 16, 17 & 18 models form a comprehensive range of high thermal efficiency, rapid heating chamber furnaces with operating temperatures up to 1400°C, 1500°C and 1600°C, 1700°C and 1800°C. Standard Features BRF14, 15 & 16 Models The BRF14, BRF15 & BRF16 models […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "rapid-heating-chamber-furnace",
    "name": "Rapid Heating Chamber Furnaces",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Rapid Heating Chamber Furnaces Overview BCFR12 and BCFR13 models have been developed for applications when rapid heating/cooling are required.",
    "description": "Rapid Heating Chamber Furnaces Overview BCFR12 and BCFR13 models have been developed for applications when rapid heating/cooling are required. This design is ideal for light/medium duty applications, but is not suitable for applications where the sample is large with a high mass. Standard Features Heating is by free radiating wire elements located on 2 sides […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "top-loading-chamber-furnace",
    "name": "Top Loading Chamber Furnaces",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Orbit India Supplies General Purpose Furnace 1200°c​",
    "description": "Orbit India Supplies General Purpose Furnace 1200°c​",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "vacuum-chamber-furnaces",
    "name": "Vacuum (Cold / Wall) Chamber Furnaces",
    "category": "chamber-furnaces/laboratory-chamber-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Vacuum (Cold / Wall) Chamber Furnaces Overview The BVT is a cold wall vacuum furnace designed to operate at 1800°C in vacuum and 2000°C in neutral or reducing atmosphere.",
    "description": "Vacuum (Cold / Wall) Chamber Furnaces Overview The BVT is a cold wall vacuum furnace designed to operate at 1800°C in vacuum and 2000°C in neutral or reducing atmosphere. Standard Features Choice of high or low vacuum. Heating by high grade graphite elements. Fully automatic “fail safe” system is fitted as standard. The top loading […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "dilatometer-df4",
    "name": "Dilatometer DF-4",
    "category": "coal-and-coke-testing-instruments",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Automatic dilatometer for coal swelling behaviour",
    "description": "The DF-4 measures the swelling and contraction of coal briquettes under programmed heating, characterising dilatation behaviour for coking coal assessment.",
    "features": [
      "Automatic dilatation measurement",
      "Programmed heating per standard methods",
      "Digital recording of expansion and contraction",
      "Suited to routine coking coal laboratories"
    ],
    "applications": [
      "Coking coal",
      "Coal blending",
      "Metallurgical laboratories"
    ],
    "specs": [
      [
        "Working range of sample heating",
        "200°C to 600°C"
      ],
      [
        "Setting of temperature alarm",
        "500 - 600°C"
      ],
      [
        "Accuracy of temperature control",
        "± 1°C / 10 min"
      ],
      [
        "Measurement of pistons' shifts",
        "Contactless"
      ],
      [
        "Retort Pipe Movement",
        "Fully automated"
      ],
      [
        "Temperature gradient",
        "3°C /min"
      ],
      [
        "Dilatation measurement range",
        "50 to + 400 % (standard samples)"
      ],
      [
        "Power supply",
        "230 V, 50 Hz"
      ]
    ]
  },
  {
    "slug": "dilatometer-dl4000",
    "name": "Dilatometer DL4000",
    "category": "coal-and-coke-testing-instruments",
    "brand": "",
    "origin": "",
    "tagline": "Orbit Technologies is one of the best Dilatometer DF-4 Suppliers & Exporters in India.",
    "description": "Orbit Technologies is one of the best Dilatometer DF-4 Suppliers & Exporters in India. Call us @ +91 - 40 - 6721 6354",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Working range of sample heating",
        "200°C to 600°C"
      ],
      [
        "Setting of temperature alarm",
        "500 - 600°C"
      ],
      [
        "Accuracy of temperature control",
        "± 1°C / 10 min"
      ],
      [
        "Measurement of pistons' shifts",
        "Contactless"
      ],
      [
        "Retort Pipe Movement",
        "Fully automated"
      ],
      [
        "Temperature gradient",
        "3°C /min"
      ],
      [
        "Dilatation measurement range",
        "50 to + 400 % (standard samples)"
      ],
      [
        "Power supply",
        "230 V, 50 Hz"
      ]
    ]
  },
  {
    "slug": "free-swelling-index-furnace",
    "name": "Free Swelling Index Furnace (FSI)",
    "category": "coal-and-coke-testing-instruments",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Dedicated furnace for the Free Swelling Index test",
    "description": "A dedicated laboratory furnace for determining the Free Swelling Index of coal, maintaining the standard temperature profile required for repeatable crucible tests.",
    "features": [
      "Standard-compliant temperature profile",
      "Positioned crucible holders for consistent heating",
      "Robust insulation for stable high-temperature operation",
      "Simple, focused operation for routine testing"
    ],
    "applications": [
      "Coal laboratories",
      "Power & fuel testing",
      "Coke production"
    ],
    "specs": []
  },
  {
    "slug": "minimum-free-space-oven-astm-iso",
    "name": "Minimum Free Space Oven (ASTM & ISO)",
    "category": "coal-and-coke-testing-instruments",
    "brand": "",
    "origin": "",
    "tagline": "Minimum Free Space oven is utilized for drying process which features a compact heated chamber that provides the lowest practical volume, or minimum free space.",
    "description": "Minimum Free Space oven is utilized for drying process which features a compact heated chamber that provides the lowest practical volume, or minimum free space.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "plastometer-pf12",
    "name": "Plastometer PF-12",
    "category": "coal-and-coke-testing-instruments",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Fully automatic plastometer for coal fluidity",
    "description": "A fully automatic plastometer measuring the fluidity of coal as per ASTM D2639 and ISO 10329, recording the maximum fluidity and plastic layer behaviour during programmed heating.",
    "features": [
      "Compliant with ASTM D2639 and ISO 10329",
      "Fully automatic test cycle",
      "Digital recording of fluidity curves",
      "Repeatable results with minimal operator intervention"
    ],
    "applications": [
      "Coking coal evaluation",
      "Coke oven charging",
      "Coal blending studies"
    ],
    "specs": [
      [
        "Temperature Range",
        "200°C to 600°C (typical)"
      ],
      [
        "Heating Rate",
        "Programmable 1 deg C/min to 9 deg C/min"
      ],
      [
        "Temperature Accuracy",
        "±0.1°C for temperature"
      ],
      [
        "Cumulative Plasticity Range",
        "999 999 D.D."
      ],
      [
        "Temperature gradient",
        "As per ASTM / ISO Test Methods"
      ],
      [
        "Plasticity Measuring Resolution",
        "0.1 DDPM"
      ],
      [
        "Sample Size",
        "Typically 5 grams of finely ground coal"
      ],
      [
        "Temperatures",
        "- Maximum Fluidity temperature as per ASTM D-2639-08, ISO 10329 - Maximum Fluidity in D.D.P.M as per ASTM D-2639-08, ISO 10329 - Plastic range as per ASTM D-2639-08, ISO 10329 - Final solidification temperature as per ASTM D-2639-08, ISO 10329 - All at 1 D.D.P.M repeatability of 5 deg.C, ASTM D-2639 – 08"
      ],
      [
        "Real-Time Monitoring",
        "Display of real-time temperature, torque, and fluidity data"
      ],
      [
        "Data Analysis",
        "Tools for graphical and statistical analysis"
      ],
      [
        "Report Generation",
        "Customizable reports with graphs and data"
      ],
      [
        "Connectivity",
        "USB ports, Ethernet port for network connectivity"
      ],
      [
        "Export Formats",
        "PDF, Excel, CSV"
      ],
      [
        "Safety Features",
        "Over-temperature protection, automatic shut-off in case of malfunction"
      ]
    ]
  },
  {
    "slug": "plastometer-pl2000",
    "name": "Plastometer PL2000",
    "category": "coal-and-coke-testing-instruments",
    "brand": "",
    "origin": "",
    "tagline": "Orbit Technologies is one of the best Plastometer PF-12 Suppliers & Exporters in India.",
    "description": "Orbit Technologies is one of the best Plastometer PF-12 Suppliers & Exporters in India. Call us @ +91 - 40 - 6721 6354",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Temperature Range",
        "200°C to 600°C (typical)"
      ],
      [
        "Heating Rate",
        "Programmable 1 deg C/min to 9 deg C/min"
      ],
      [
        "Temperature Accuracy",
        "±0.1°C for temperature"
      ],
      [
        "Cumulative Plasticity Range",
        "999 999 D.D."
      ],
      [
        "Temperature gradient",
        "As per ASTM / ISO Test Methods"
      ],
      [
        "Plasticity Measuring Resolution",
        "0.1 DDPM"
      ],
      [
        "Sample Size",
        "Typically 5 grams of finely ground coal"
      ],
      [
        "Temperatures",
        "- Maximum Fluidity temperature as per ASTM D-2639-08, ISO 10329 - Maximum Fluidity in D.D.P.M as per ASTM D-2639-08, ISO 10329 - Plastic range as per ASTM D-2639-08, ISO 10329 - Final solidification temperature as per ASTM D-2639-08, ISO 10329 - All at 1 D.D.P.M repeatability of 5 deg.C, ASTM D-2639 – 08"
      ],
      [
        "Real-Time Monitoring",
        "Display of real-time temperature, torque, and fluidity data"
      ],
      [
        "Data Analysis",
        "Tools for graphical and statistical analysis"
      ],
      [
        "Report Generation",
        "Customizable reports with graphs and data"
      ],
      [
        "Connectivity",
        "USB ports, Ethernet port for network connectivity"
      ],
      [
        "Export Formats",
        "PDF, Excel, CSV"
      ],
      [
        "Safety Features",
        "Over-temperature protection, automatic shut-off in case of malfunction"
      ]
    ]
  },
  {
    "slug": "volatile-matter-furnace-vmf-astm",
    "name": "Volatile Matter Furnace – VMF/ ASTM",
    "category": "coal-and-coke-testing-instruments",
    "brand": "",
    "origin": "",
    "tagline": "The VMF/ASTM is a bench mounted furnace specially designed for determination of volatile matter in coal and coke samples as per ASTM D3175.",
    "description": "The VMF/ASTM is a bench mounted furnace specially designed for determination of volatile matter in coal and coke samples as per ASTM D3175.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "volatile-matter-furnace-vmf-iso",
    "name": "Volatile Matter Furnace, VMF/ISO",
    "category": "coal-and-coke-testing-instruments",
    "brand": "",
    "origin": "",
    "tagline": "This is a chamber furnace that is designed for Volatile Matter Analysis as per ISO 562.This furnace offers temperature and response times to perform Volatile matter determination.",
    "description": "This is a chamber furnace that is designed for Volatile Matter Analysis as per ISO 562.This furnace offers temperature and response times to perform Volatile matter determination.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "combustion-master-cs-analyzer",
    "name": "Combustion Master CS Analyzer",
    "category": "elemental-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "Combustion master CS Analyzer is used to determine Carbon and Sulfur in inorganic samples like alloys like steel, metals, minerals, ores, soil and other inorganic samples.",
    "description": "Combustion master CS Analyzer is used to determine Carbon and Sulfur in inorganic samples like alloys like steel, metals, minerals, ores, soil and other inorganic samples. The sample will be burnt in the induction furnace together with accelerators in pure oxygen.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "PC Controlled induction furnace with automatic cleaning device"
      ],
      [
        "Power",
        "2.2 kVA , 19.5MHz, 2200 ° C usual operating temperature"
      ],
      [
        "Power supply",
        "230 VAC (+/- 10 % ), 50/60 Hz,16 A , 3.0 kVA max"
      ],
      [
        "Dimensions",
        "W, H, D: 670mm, 870mm, 800mm weight: 130kg"
      ],
      [
        "For operation needed",
        "PC, monitor (included in the scope of supply ), Balance (resolution 0.0001g)"
      ],
      [
        "Measuring Range",
        "Carbon- Low range: 0.1ppm to 0.2%High range: 0.2% to 6%"
      ],
      [
        "Detection method",
        "Solid state infrared absorption with up to 4 independent detector units"
      ],
      [
        "Typical sample weight /Analysis time",
        "500mg to 1g/ 60s"
      ],
      [
        "Reagents",
        "Anhydrous magnesium perchlorate, Sodium hydroxide, rare earth copper oxide"
      ],
      [
        "Sensitivity / Precision",
        "Carbon: 0.1 ppm / ± 0.5 ppm"
      ]
    ]
  },
  {
    "slug": "cone-mill",
    "name": "Cone Mill",
    "category": "milling-pulverising",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "ea3100",
    "name": "EA3100 CHNS-O elemental Analyzer",
    "category": "elemental-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "Home Analytical Instruments Elemental Analyzers CHNS Analyzers EA3100 EA3100 Overview Based on the dynamic Pregl-Dumas principle, the EA3100 takes advantage of the “patented TurboFlash™ combustion…",
    "description": "Home Analytical Instruments Elemental Analyzers CHNS Analyzers EA3100 EA3100 Overview Based on the dynamic Pregl-Dumas principle, the EA3100 takes advantage of the “patented TurboFlash™ combustion technology” allowing for the most difficult matrices to be broken with ease for the highest wide variety of samples. All the gas species produced by the combustion flash at more […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "Horizontal Tube furnace"
      ],
      [
        "Heating Elements",
        "Resistance type Silicon Carbide Heating Elements"
      ],
      [
        "Maximum Temperature",
        "Up to 1500°C"
      ],
      [
        "Temperature Accuracy",
        "± 2°C"
      ],
      [
        "Detector",
        "Non-Dispersive Infrared Detection"
      ],
      [
        "Measuring Range",
        "Carbon: 0.005 to 100% using 1g to 40 mg Sample"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Analysis Time",
        "60 Sec to 180 sec"
      ],
      [
        "Sample Weight",
        "20 to 2000 mg Nominal Sample Weight is 100 mg (coal)"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz; 16 A"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "csbox-dcs-analyzer-bkp",
    "name": "CSBox DCS Analyzer BKP",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "CSBox DCS Analyzer Overview CSBox DCS analyzer enumerates the way to determine carbon and sulphur in inorganic samples like steel, ores, finished metals and other inorganic samples.",
    "description": "CSBox DCS Analyzer Overview CSBox DCS analyzer enumerates the way to determine carbon and sulphur in inorganic samples like steel, ores, finished metals and other inorganic samples. Simultaneous carbon and sulphur determination with minimal sample preparation. Two independent infrared cells with a wide measuring range of carbon and sulphur. The measuring range of each infrared […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "High Frequency Induction Furnace for Inorganic Samples High Temperature Resistance Furnace for Organic Samples"
      ],
      [
        "Carbon",
        "Inorganic Samples: 0.0001% to 100% based on the sample weight Organic Samples: Carbon: 0.005 to 100% using 1g to 40 mg Sample"
      ],
      [
        "Sulfur",
        "Inorganic samples: 0.0001% to 20% based on the sample weight Organic Samples: Sulfur: 0.005 to 100% using 1g to 40 mg Sample"
      ],
      [
        "Detector",
        "Non-Dispersive Infrared Detection"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Sensitivity",
        "0.1 ppm"
      ],
      [
        "Analysis Time",
        "20 to 60 Sec for Inorganic samples 60 to 180 sec for Organic Samples"
      ],
      [
        "Sample Weight",
        "20 to 2000 mg Depends on the sample type"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "csbox-hfa-c-analyzer",
    "name": "CSBox HFA C Analyzer",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "CSBox HF Analyzer is used to determine Carbon in Inorganic samples like steel, Iron, ores, finished metals and other inorganic samples.",
    "description": "CSBox HF Analyzer is used to determine Carbon in Inorganic samples like steel, Iron, ores, finished metals and other inorganic samples. It consists of infrared cell with wide measuring range of Carbon. The measuring range of infrared cell is modified to the user’s specific requirement to ensure optimum measurement conditions for each application.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "High Frequency Induction Furnace"
      ],
      [
        "Carbon",
        "0.0001% to 100% based on the sample weight"
      ],
      [
        "Detector",
        "Non-Dispersive Infrared Detection"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Sensitivity",
        "0.1 ppm"
      ],
      [
        "Analysis Time",
        "20 to 60 Sec"
      ],
      [
        "Sample Weight",
        "20 to 2000 mg Depends on the sample type"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "csbox-hfa-cs-analyzer-bkp",
    "name": "CSBox HFA CS Analyzer BKP",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "CSBox HFA CS Analyzer Overview CSBox HF Analyzer is used to determine Carbon and Sulfur in Inorganic samples like steel, Iron, ores, finished metals and other inorganic samples.",
    "description": "CSBox HFA CS Analyzer Overview CSBox HF Analyzer is used to determine Carbon and Sulfur in Inorganic samples like steel, Iron, ores, finished metals and other inorganic samples. Simultaneously it does Carbon and Sulfur determination with minimal sample preparation. It consists of two independent infrared cells with wide measuring range of Carbon and Sulfur. The […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "High Frequency Induction Furnace"
      ],
      [
        "Carbon",
        "0.0001% to 100% based on the sample weight"
      ],
      [
        "Sulfur",
        "0.0001% to 20% based on the sample weight"
      ],
      [
        "Detector",
        "Non Dispersive Infrared Detection"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Sensitivity",
        "0.1 ppm"
      ],
      [
        "Analysis Time",
        "20 to 60 Sec"
      ],
      [
        "Sample Weight",
        "20 to 2000 mg Depends on the sample type"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "csbox-hfa-s-analyzer",
    "name": "CSBox HFA S Analyzer",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "Home Analytical Instruments Elemental Analyzers Carbon and Sulfur Analyzers CSBox HFA S Analyzer CSBox HFA S Analyzer Overview CSBox HF Analyzer is used to determine Sulfur in Inorganic samples like…",
    "description": "Home Analytical Instruments Elemental Analyzers Carbon and Sulfur Analyzers CSBox HFA S Analyzer CSBox HFA S Analyzer Overview CSBox HF Analyzer is used to determine Sulfur in Inorganic samples like steel, Iron, ores, finished metals and other inorganic samples. It consists of infrared cell with wide measuring range of Sulfur. The measuring range of infrared […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "High Frequency Induction Furnace"
      ],
      [
        "Sulfur",
        "0.0001% to 20% based on the sample weight"
      ],
      [
        "Detector",
        "Non-Dispersive Infrared Detection"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Sensitivity",
        "0.1 ppm"
      ],
      [
        "Analysis Time",
        "20 to 60 Sec"
      ],
      [
        "Sample Weight",
        "20 to 2000 mg Depends on the sample type"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "csbox-tube-c-analyzer",
    "name": "CSBox Tube C Analyzer",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "CSBox Tube C Analyzer The CSBox Tube C Analyzer is used to determine carbon in variety of organic and inorganic materials such as coal, coke, oils, animal feed and biomass, cement , floors, etc.",
    "description": "CSBox Tube C Analyzer The CSBox Tube C Analyzer is used to determine carbon in variety of organic and inorganic materials such as coal, coke, oils, animal feed and biomass, cement , floors, etc. The analyzer allows determination of carbon with minimal sample preparation. It consists of one independent IR cells with a wide carbon […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "Horizontal Tube furnace"
      ],
      [
        "Heating Elements",
        "Resistance type Silicon Carbide Heating Elements"
      ],
      [
        "Maximum Temperature",
        "Up to 1500°C"
      ],
      [
        "Temperature Accuracy",
        "± 2°C"
      ],
      [
        "Detector",
        "Non-Dispersive Infrared Detection"
      ],
      [
        "Measuring Range",
        "Carbon: 0.005 to 100% using 1g to 40 mg Sample"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Analysis Time",
        "60 Sec to 180 sec"
      ],
      [
        "Sample Weight",
        "20 to 2000 mg Nominal Sample Weight is 100 mg (coal)"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz; 16 A"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "csbox-tube-cs-analyzer",
    "name": "CSBox Tube CS Analyzer",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "CSBox Tube CS Analyzer is used to determine Carbon and Sulfur in Organic samples like coal, coke, fuel oils, soil, biomass and other organic samples.",
    "description": "CSBox Tube CS Analyzer is used to determine Carbon and Sulfur in Organic samples like coal, coke, fuel oils, soil, biomass and other organic samples.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "Horizontal Tube furnace"
      ],
      [
        "Heating Elements",
        "Resistance type Silicon Carbide Heating Elements"
      ],
      [
        "Maximum Temperature",
        "Up to 1500°C"
      ],
      [
        "Temperature Accuracy",
        "± 2°C"
      ],
      [
        "Detector",
        "Non-Dispersive Infrared Detection"
      ],
      [
        "Measuring Range",
        "Carbon: 1% to 100% (or) up to saturation"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Analysis Time",
        "60 Sec to 180 sec"
      ],
      [
        "Sample Weight",
        "20 to 1000 mg Nominal Sample Weight is 100 mg (coal)"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz; 16 A"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "csbox-tube-s-analyzer",
    "name": "CSBox Tube S Analyzer",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "CSBox Tube S Analyzer The CSBox Tube S Analyzer is used to determine sulfur in variety of organic and inorganic materials such as coal, coke, oils, animal feed and biomass, cement , floors, etc.",
    "description": "CSBox Tube S Analyzer The CSBox Tube S Analyzer is used to determine sulfur in variety of organic and inorganic materials such as coal, coke, oils, animal feed and biomass, cement , floors, etc. The analyzer allows determination of sulfur with minimal sample preparation. It consists of one independent IR cells with a wide carbon […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Furnace",
        "Horizontal Tube furnace"
      ],
      [
        "Heating Elements",
        "Resistance type Silicon Carbide Heating Elements"
      ],
      [
        "Maximum Temperature",
        "Up to 1500°C"
      ],
      [
        "Temperature Accuracy",
        "± 2°C"
      ],
      [
        "Detector",
        "Non-Dispersive Infrared Detection"
      ],
      [
        "Measuring Range",
        "Carbon: 0.005 to 100% using 1g to 40 mg Sample"
      ],
      [
        "Accuracy",
        "± 1% Relative"
      ],
      [
        "Analysis Time",
        "60 Sec to 180 sec"
      ],
      [
        "Sample Weight",
        "20 to 2000 mg Nominal Sample Weight is 100 mg (coal)"
      ],
      [
        "Required Chemicals/ Reagents",
        "Magnesium perchlorate (Anhydrone) Glass Wool"
      ],
      [
        "Ambient Conditions",
        "15 to 35°C"
      ],
      [
        "Relative Humidity",
        "20 – 80% (not condensing)"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz; 16 A"
      ],
      [
        "Gases",
        "Oxygen 99.95% purity"
      ]
    ]
  },
  {
    "slug": "ecs-4010-chns-o-analyzer",
    "name": "ECS 4010 CHNS/O Analyzer",
    "category": "elemental-analyzers/chns-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "The elemental analyzer ECS 4010 is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "description": "The elemental analyzer ECS 4010 is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "ANALYTICAL RANGE C",
        "Up to 12 mg"
      ],
      [
        "ANALYTICAL RANGE H",
        "Up to 2 mg"
      ],
      [
        "ANALYTICAL RANGE N",
        "Up to 10 mg"
      ],
      [
        "ANALYTICAL RANGE S",
        "Up to 3 mg"
      ],
      [
        "ANALYTICAL RANGE O",
        "Up to 2 mg"
      ],
      [
        "SAMPLE SIZE",
        "Up to 200 mg (depending on C content)"
      ],
      [
        "PRECISION",
        "≤ 0.2% RSD"
      ],
      [
        "COMBUSTION VIEWING FACILITY",
        "Standard top viewing"
      ],
      [
        "DETECTION LIMIT",
        "200 PPM"
      ],
      [
        "REACTOR OXIDATION",
        "800–1100 °C"
      ],
      [
        "REACTOR REDUCTION",
        "600–1100 °C"
      ],
      [
        "ANALYSIS TIME",
        "10 minutes for CHNS, 5 minutes for O with standard GC column"
      ],
      [
        "CALIBRATIONS",
        "Linear, quadratic, cubic"
      ],
      [
        "GAS UTILITIES",
        "Compressed air (dry and oil-free), Helium (He), Oxygen (O₂). O₂ 99.999% (5.0) purity, 3–5 bar. He 99.999% (5.0) purity, 3–5 bar."
      ]
    ]
  },
  {
    "slug": "ecs-4024-chns-o-analyzer",
    "name": "ECS 4024 CHNS/O Analyzer",
    "category": "elemental-analyzers/chns-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "ANALYTICAL RANGE C",
        "Up to 12 mg"
      ],
      [
        "ANALYTICAL RANGE H",
        "Up to 2 mg"
      ],
      [
        "ANALYTICAL RANGE N",
        "Up to 10 mg"
      ],
      [
        "ANALYTICAL RANGE S",
        "Up to 3 mg"
      ],
      [
        "ANALYTICAL RANGE O",
        "Up to 2 mg"
      ],
      [
        "SAMPLE SIZE",
        "Up to 200 mg (depending on C content)"
      ],
      [
        "PRECISION",
        "≤ 0.2% RSD"
      ],
      [
        "COMBUSTION VIEWING FACILITY",
        "Standard top viewing"
      ],
      [
        "DETECTION LIMIT",
        "200 PPM"
      ],
      [
        "FURNACE",
        "800–1100 °C"
      ],
      [
        "ANALYSIS TIME",
        "10 minutes for CHNS, 5 minutes for O with standard GC column"
      ],
      [
        "CALIBRATIONS",
        "Linear, quadratic, cubic"
      ],
      [
        "GAS UTILITIES",
        "Compressed air (dry and oil-free), Helium (He), Oxygen (O₂). O₂ 99.999% (5.0) purity, 3–5 bar. He 99.999% (5.0) purity, 3–5 bar."
      ]
    ]
  },
  {
    "slug": "ecs-8020-chns-o-analyzer",
    "name": "ECS 8020 CHNS-O Analyzer",
    "category": "elemental-analyzers/chns-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "CHNS-O"
      ],
      [
        "CHNS",
        "13 min"
      ],
      [
        "O",
        "5 min"
      ],
      [
        "H",
        "Up to 5 mg"
      ],
      [
        "N",
        "Up to 20 mg"
      ],
      [
        "S",
        "Up to 6 mg"
      ],
      [
        "O",
        "Up to 2 mg"
      ],
      [
        "Precision",
        "≤ 0.2% RSD"
      ],
      [
        "Electronic auto sampler",
        "32, 50, 100 positions"
      ],
      [
        "Manual sampler",
        "Manual operation"
      ]
    ]
  },
  {
    "slug": "ecs-8024-nc-soil-special",
    "name": "ECS 8024 – NC Soil Special",
    "category": "elemental-analyzers/chns-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "CN"
      ],
      [
        "N",
        "0.002 - 20 mg"
      ],
      [
        "Accuracy*",
        "99.9%)"
      ],
      [
        "Precision*",
        "99.9%)"
      ],
      [
        "Electronic auto sampler",
        "32, 50, 100 positions"
      ]
    ]
  },
  {
    "slug": "ecs-8040-chns-o-analyzer",
    "name": "ECS 8040 CHNS-O Analyzer",
    "category": "elemental-analyzers/chns-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "CHNS-O"
      ],
      [
        "CHNS",
        "13 min"
      ],
      [
        "O",
        "5 min"
      ],
      [
        "H",
        "Up to 5 mg"
      ],
      [
        "N",
        "Up to 20 mg"
      ],
      [
        "S",
        "Up to 6 mg"
      ],
      [
        "O",
        "Up to 2 mg"
      ],
      [
        "Precision",
        "≤ 0.2% RSD"
      ],
      [
        "Electronic auto sampler",
        "32, 50, 100 positions"
      ],
      [
        "Manual sampler",
        "Manual operation"
      ]
    ]
  },
  {
    "slug": "ecs-8060-nprotein-analyzer",
    "name": "ECS 8060 N,Protein Analyzer",
    "category": "elemental-analyzers/chns-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "N - Proteins"
      ],
      [
        "CN",
        "8 min"
      ],
      [
        "C",
        "100 mg"
      ],
      [
        "Accuracy*",
        "99.9%)"
      ],
      [
        "Precision*",
        "99.9%)"
      ],
      [
        "Electronic auto sampler",
        "32, 50, 100 positions"
      ]
    ]
  },
  {
    "slug": "irms-analyzer",
    "name": "IRMS Analyzer",
    "category": "elemental-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "The sample, filled in a graphite crucible, will be fused in the electrode furnace.",
    "description": "The sample, filled in a graphite crucible, will be fused in the electrode furnace. Nitrogen and hydrogen gases are being released from the sample into the carrier gas and the oxygen is reacting with the carbon of the graphite crucible to CO.The CO is oxidised to CO2 afterwards.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "fusion-master-onh-analyzer",
    "name": "Fusion Master ONH Analyzer",
    "category": "elemental-analyzers/onh-analyzer",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "Oxygen, nitrogen and hydrogen analysis by inert gas fusion",
    "description": "The Fusion Master determines oxygen, nitrogen and hydrogen in inorganic materials by pulse-heating fusion in an inert gas stream, with thermal conductivity and infrared detection.",
    "features": [
      "Pulse-heating inert gas fusion technique",
      "Simultaneous O, N and H determination",
      "Analysis of metals, alloys, oxides and ceramics",
      "Automatic blank compensation and calibration routines"
    ],
    "applications": [
      "Metals & alloys",
      "Rare earths",
      "Ceramics",
      "Powder metallurgy"
    ],
    "specs": []
  },
  {
    "slug": "extraindus-100l",
    "name": "ExtraIndus 100L",
    "category": "extratex/industrial",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraIndus 100L Overview ExtraIndus 100L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process…",
    "description": "ExtraIndus 100L Overview ExtraIndus 100L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process parameters and high yields. Extraction Volume: 100 L / 2×100 L / 3×100 L Pressure: Up to 1000 bar Flow Rate: Up to 500 kg/h Note: All our equipment can be adapted […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "100 L 2×100 L 3×100 L"
      ],
      [
        "Debit",
        "0-500 kg/h"
      ],
      [
        "Pressure",
        "0-400 bar 0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-100 °C"
      ],
      [
        "Functionality",
        "Automatic pressure regulation"
      ],
      [
        "Norm",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extraindus-200l",
    "name": "ExtraIndus 200L",
    "category": "extratex/industrial",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraIndus 200L Overview ExtraIndus 200L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process…",
    "description": "ExtraIndus 200L Overview ExtraIndus 200L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process parameters and high yields. Extraction Volume: 200 L / 2×200 L / 3×200 L Pressure: Up to 1000 bar Flow Rate: up to 1000 kg/h Note: All our equipment can be adapted […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "200 L 2×200 L 3×200 L"
      ],
      [
        "Debit",
        "0-1000 kg/h"
      ],
      [
        "Pressure",
        "0-400 bar 0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-100 °C"
      ],
      [
        "Functionality",
        "Automatic pressure regulation"
      ],
      [
        "Norm",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extraindus-25l",
    "name": "ExtraIndus 25L",
    "category": "extratex/industrial",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraIndus 25L Overview ExtraIndus 25L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process…",
    "description": "ExtraIndus 25L Overview ExtraIndus 25L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process parameters and high yields. Extraction Volume: 25 L / 2×25 L / 3×25 L Pressure: Up to 1000 bar Flow Rate: Up to 150 kg/h Note: All our equipment can be adapted […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "25 L 2×25 L 3×25 L"
      ],
      [
        "Flow",
        "0-150 kg/h"
      ],
      [
        "Pressure",
        "0-400 bar 0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-150 °C"
      ],
      [
        "Options",
        "Automatic pressure control"
      ],
      [
        "Certifications",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extraindus-400l",
    "name": "ExtraIndus 400L",
    "category": "extratex/industrial",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraIndus 400L Overview ExtraIndus 400L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process…",
    "description": "ExtraIndus 400L Overview ExtraIndus 400L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process parameters and high yields. Extraction Volume: 400 L / 2×400 L / 3×400 L Pressure: Up to 1000 bar Flow Rate: Up to 2500 kg/h Note: All our equipment can be adapted […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "400 L 2×400 L 3×400 L"
      ],
      [
        "Debit",
        "2500 kg/h at 400 bar 1500 kg/h at 1000 bar"
      ],
      [
        "Pressure",
        "0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-100 °C"
      ],
      [
        "Functionality",
        "Automatic pressure regulation"
      ],
      [
        "Norm",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extraindus-50l",
    "name": "ExtraIndus 50L",
    "category": "extratex/industrial",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraIndus 50L​ Overview ExtraIndus 50L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process…",
    "description": "ExtraIndus 50L​ Overview ExtraIndus 50L, a supercritical CO2 extraction equipment, is specially designed for industrial applications offering continuous production, precise control of process parameters and high yields. Extraction Volume: 50 L / 2×50 L / 3×50 L Pressure: Up to 1000 bar Flow Rate: Up to 250 kg/h Note: All our equipment can be adapted […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "50 L 2×50 L 3×50 L"
      ],
      [
        "Debit",
        "0-250 kg/h"
      ],
      [
        "Pressure",
        "0-400 bar 0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-150 °C"
      ],
      [
        "Functionality",
        "Automatic pressure regulation"
      ],
      [
        "Norm",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extralab-1-l-to-2-l",
    "name": "ExtraLab 1L to 2L",
    "category": "extratex/laboratory",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraLab 1L to 2L Overview A versatile “multi-solvent” extraction equipment with precise control of process parameters for analytical purposes.Dedicated to be placed on a laboratory bench or skid.",
    "description": "ExtraLab 1L to 2L Overview A versatile “multi-solvent” extraction equipment with precise control of process parameters for analytical purposes.Dedicated to be placed on a laboratory bench or skid. Extraction Volume: 1 L / 2 L Pressure: Up to 1000 bar Flow Rate: Up to 100 g/min Note: All our equipment can be adapted to your […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "1 L 2 L"
      ],
      [
        "Flow",
        "100 g/min at 400 bar 50 g/min at 1000 bar"
      ],
      [
        "Pressure",
        "0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-150 °C"
      ],
      [
        "Options",
        "Automated pressure regulation"
      ],
      [
        "Certifications",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extralab-10-l",
    "name": "ExtraLab 10L",
    "category": "extratex/laboratory",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraLab 10L Overview Versatile “multi-solvent” extraction equipment with precise control of process parameters for analytical purposes.",
    "description": "ExtraLab 10L Overview Versatile “multi-solvent” extraction equipment with precise control of process parameters for analytical purposes. Equipment on chassis. Extraction Volume: 10 L / 2×10 L Pressure: Up to 1000 bar Flow Rate: Up to 50 kg/h Note: All our equipment can be adapted to your needs (custom-made). Specifications Downloads Volume 10 L 2×10 L […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "10 L 2×10 L"
      ],
      [
        "Flow",
        "0-50 kg/h"
      ],
      [
        "Pressure",
        "0-400 bar 0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-150 °C"
      ],
      [
        "Options",
        "Automated pressure regulation"
      ],
      [
        "Certifications",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extralab-5-l",
    "name": "ExtraLab 5L",
    "category": "extratex/laboratory",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraLab 5L Overview Versatile “multi-solvent” extraction equipment with precise control of process parameters for analytical purposes.",
    "description": "ExtraLab 5L Overview Versatile “multi-solvent” extraction equipment with precise control of process parameters for analytical purposes. Equipment on a chassis. Extraction Volume: 5 L / 2×5 L Pressure: Up to 1000 bar Flow Rate: Up to 30 kg/h Note: All our equipment can be adapted to your needs (custom-made). Specifications Downloads Volume 5 L2×5 L […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "5 L 2×5 L"
      ],
      [
        "Flow",
        "0-30 kg/h"
      ],
      [
        "Pressure",
        "0-400 bar 0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-150 °C"
      ],
      [
        "Options",
        "Co-solvent pump"
      ],
      [
        "Certifications",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "extralab-50-to-500ml",
    "name": "ExtraLab 50 to 500 ML",
    "category": "extratex/laboratory",
    "brand": "Extratex",
    "origin": "India",
    "tagline": "ExtraLab 50 to 500 ML Overview A versatile “multi-solvent” extraction machine with precise control of process parameters for analytical purposes.",
    "description": "ExtraLab 50 to 500 ML Overview A versatile “multi-solvent” extraction machine with precise control of process parameters for analytical purposes. Dedicated to be placed on a laboratory bench. Extraction Volume: 50 mL / 100 mL / 200 mL / 500 mL Pressure: Up to 1000 bar Flow Rate: Up to 100 g/min Note: All our […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Volume",
        "50 mL 100 mL 200 mL 500 mL"
      ],
      [
        "Flow",
        "100 g/min at 400 bar 50 g/min at 1000 bar"
      ],
      [
        "Pressure",
        "0-700 bar 0-1000 bar"
      ],
      [
        "Temperature",
        "0-150 °C"
      ],
      [
        "Options",
        "Automated pressure regulation"
      ],
      [
        "Certifications",
        "CE and ASME-U"
      ]
    ]
  },
  {
    "slug": "air-compressor",
    "name": "Air Compressor",
    "category": "gas-generators",
    "brand": "",
    "origin": "",
    "tagline": "Air Compressor Overview Air compressors may not be the flashiest equipment in the lab, yet they play a critical role truly behind the scenes.",
    "description": "Air Compressor Overview Air compressors may not be the flashiest equipment in the lab, yet they play a critical role truly behind the scenes. They provide a clean, dry stream of compressed air-a surprising number of essential tasks run on them. Oil-free Low Noise Built-in Humidity Removal System Automatic Water Drain Self-Protection Function Intuitive and […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "analytical-balances",
    "name": "Analytical Balances",
    "category": "gas-generators",
    "brand": "",
    "origin": "",
    "tagline": "Analytical Balances Premium-Level Micro/Semi-Micro Learn More Micro Analytical Learn More Semi-Micro Analytical Learn More Advanced-Level Analytical Learn More Standard-Level Analytical Learn More",
    "description": "Analytical Balances Premium-Level Micro/Semi-Micro Learn More Micro Analytical Learn More Semi-Micro Analytical Learn More Advanced-Level Analytical Learn More Standard-Level Analytical Learn More",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "hydrogen-gas-generator",
    "name": "Hydrogen Gas Generator – LMH & LMHPLUS Series",
    "category": "gas-generators",
    "brand": "",
    "origin": "",
    "tagline": "Hydrogen Generator – LMH & LMHPLUS Series Overview The LMH & LMHPLUS series use an electrolytic cell with a long life multilayer PEM technology to produce pure hydrogen gas.",
    "description": "Hydrogen Generator – LMH & LMHPLUS Series Overview The LMH & LMHPLUS series use an electrolytic cell with a long life multilayer PEM technology to produce pure hydrogen gas. The innovative gas-drying system of the LMHPLUS series is completely maintenance- free and can run operations 24 hours a day. The exclusive electronically controlled gas/liquid separator automatically checks for internal […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Electrolytic Cell",
        "Long Life Multilayer PEM Technology"
      ],
      [
        "Dimensions (W × D × H)",
        "40.5 × 60.5 × 46 cm"
      ],
      [
        "Parallel Mode",
        "Ready on Board"
      ],
      [
        "Auto Refill",
        "Included"
      ],
      [
        "Fill Canister",
        "Included"
      ],
      [
        "Quality",
        "Deionized, ASTM II, <0.1uS"
      ],
      [
        "Internal Tank Capacity",
        "3 L"
      ],
      [
        "External Tank Capacity",
        "5 or 10 L"
      ],
      [
        "Power Supply",
        "100-240VAC (±10%) 50/60Hz"
      ],
      [
        "Hydrogen Outlet",
        "1/8″ Compression Fitting"
      ],
      [
        "Water",
        "Quick Release Push-in Fitting"
      ],
      [
        "Temperature",
        "5–30°C (41–86°F)"
      ],
      [
        "Humidity",
        "70% Max (Non-condensing)"
      ],
      [
        "Noise",
        "<35 dB(A)"
      ]
    ]
  },
  {
    "slug": "liquid-nitrogen-gas-generator",
    "name": "Liquid Nitrogen Gas Generator",
    "category": "gas-generators",
    "brand": "",
    "origin": "",
    "tagline": "Liquid Nitrogen Gas Generator Overview Make your own high-quality liquid nitrogen, anywhere, anytime!",
    "description": "Liquid Nitrogen Gas Generator Overview Make your own high-quality liquid nitrogen, anywhere, anytime! LabTech offers a complete line of advanced Liquid Nitrogen Generators, designed for the production of reliable, high purity liquid nitrogen directly at your facility. With this advanced solution, on site liquid nitrogen generation is extremely easy. Just connecting it to a power […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "nitrogen-gas-generator-ln-series",
    "name": "Nitrogen Gas Generator – LN Series",
    "category": "gas-generators",
    "brand": "",
    "origin": "",
    "tagline": "Nitrogen Generator – LN Series Overview LabTech develops innovative Nitrogen Gas Generators for applications requiring high purity and rapid flow changes.",
    "description": "Nitrogen Generator – LN Series Overview LabTech develops innovative Nitrogen Gas Generators for applications requiring high purity and rapid flow changes. The LN series meets the “Green Lab Conditions” regulations by using eco-friendly materials.By integrating advanced technologies and continuous innovation, every stage of our production process is dedicated to delivering high-quality, customized solutions tailored to meet any […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Max. Elevation for Nominal Performance (m.a.s.l.)",
        "<2000"
      ]
    ]
  },
  {
    "slug": "zero-air-gas-generator-lza-series",
    "name": "Zero Air Gas Generator – LZA Series",
    "category": "gas-generators",
    "brand": "",
    "origin": "",
    "tagline": "Zero Air Generator – LZA Series Overview The LZA series is one of the smallest and most efficient hydrocarbon-free air purifier systems for laboratory use.",
    "description": "Zero Air Generator – LZA Series Overview The LZA series is one of the smallest and most efficient hydrocarbon-free air purifier systems for laboratory use. It utilizes the reliable and efficient heated catalyst technology to reduce the emission of THC and methane to less than 0.05 ppm.The LZA series increases the efficiency of any laboratory […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6400"
      ],
      [
        "Tests Per Hour",
        "6 – 7"
      ],
      [
        "Operator Time Per Test",
        "1 Minute"
      ],
      [
        "Temperature resolution",
        "0.0001 ℃"
      ],
      [
        "Precision Classification",
        "0.1% Class"
      ],
      [
        "Jacket Type",
        "Isoperibol, Water Jacket"
      ],
      [
        "Oxygen Fill",
        "Automatic"
      ],
      [
        "Bucket Fill",
        "Automatic"
      ],
      [
        "Bomb Wash",
        "Automatic"
      ],
      [
        "Memory",
        "1000 tests"
      ],
      [
        "Bomb Model Options",
        "1136, 250mL 1138, 250mL, Alloy 20 1138CL, 250mL, Alloy G30"
      ],
      [
        "Balance Communication",
        "USB Port"
      ],
      [
        "Printer Communication",
        "USB Port"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ]
    ]
  },
  {
    "slug": "high-temperature-high-pressure-reactor-systems",
    "name": "High Temperature High Pressure Reactor Systems",
    "category": "reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "High Temperature High Pressure Reactor Systems Parr Reactors Learn More Extratex Learn More Denatec Learn More",
    "description": "High Temperature High Pressure Reactor Systems Parr Reactors Learn More Extratex Learn More Denatec Learn More",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "high-temperature-tube-furnace-ht-1500",
    "name": "High Temperature Tube Furnace HT 1500",
    "category": "high-temperature-tube-furnace",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "High Temperature Tube Furnace HT 1500 supplied by Orbit Technologies with installation, commissioning and after-sales support across India.",
    "description": "High Temperature Tube Furnace HT 1500 supplied by Orbit Technologies with installation, commissioning and after-sales support across India.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "high-temperature-tube-furnace-ht-1800",
    "name": "High Temperature Tube Furnace HT 1800",
    "category": "high-temperature-tube-furnace",
    "brand": "Linn High Therm",
    "origin": "Germany",
    "tagline": "Tube furnace for extreme temperatures up to 1800 °C",
    "description": "The HT 1800 high-temperature tube furnace from Linn High Therm reaches temperatures up to 1800 °C, with resistance, induction and microwave heating platforms available across the Linn range.",
    "features": [
      "Maximum temperature up to 1800 °C",
      "Graphite and ceramic tube options",
      "Vacuum and protective atmosphere capable",
      "Broader Linn range: LM, VMK, HT-Vac, HT-Graphit series and more"
    ],
    "applications": [
      "Advanced ceramics",
      "Sintering",
      "Crystal growth",
      "Materials research"
    ],
    "specs": []
  },
  {
    "slug": "bm-series-2",
    "name": "BM Series",
    "category": "micro-analytical",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "BM Series Overview A built-in fanless ionizer that allows for instant removal of destabilizing static electricity from the sample and container Includes four 0.001 mg readability models to be…",
    "description": "BM Series Overview A built-in fanless ionizer that allows for instant removal of destabilizing static electricity from the sample and container Includes four 0.001 mg readability models to be selected for different purposes Comes equipped with the AD-1676 tabletop breeze break (medium) as standard (BM-5/5D/20/22) Anti-static glass breeze break with a transparent evaporated metal coating […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Weighing pan",
        "Ø25 mm"
      ]
    ]
  },
  {
    "slug": "high-energy-planetary-ball-mill-grinding-machine",
    "name": "High Energy Planetary Ball Mill Grinding Machine",
    "category": "milling-pulverising/ball-mill",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model",
        "OR-HEPBM-02"
      ],
      [
        "Grinding Jar volume (ML)",
        "100ML*2 (can with 50ML vacuum grinding tank)"
      ],
      [
        "Grinding Jar material",
        "Optional hard steel, stainless steel, zirconia, agate, corundum, tungsten carbide, nylon, polyurethane, PTFE, etc."
      ],
      [
        "Grinding media",
        "Stainless steel, agate, zirconia, corundum, etc."
      ],
      [
        "Maximum loading per Jar",
        "Material and grinding medium does not exceed 2/3 of the volume"
      ],
      [
        "Feeding material size",
        "Crispy materials ≤ 10 mm, other materials ≤ 3 mm"
      ],
      [
        "Discharge material size",
        "Min0.1um (According to material characteristics)"
      ],
      [
        "Rotating speed",
        "Maximum revolution 47- 815 rpm, Max rotation 94 -1630 rpm"
      ],
      [
        "Speed ratio (revolution : rotation)",
        "1:2"
      ],
      [
        "Speed mode Frequency",
        "Planetary disk drive, Mode gear drive"
      ],
      [
        "Lubrication method",
        "The gears are lubricated by liquid oil, the noise is lower, and the gears are not easy to wear. Easy maintenance"
      ],
      [
        "Working Voltage",
        "Single phase 220V, 50HZ"
      ],
      [
        "Motor power and variable frequency power",
        "0.37KW (The motor brand is Siemens, and the inverter brand is Siemens)"
      ],
      [
        "Maximum continuous operating time",
        "72 hours (Timer 0-9999h)"
      ]
    ]
  },
  {
    "slug": "lab-planetary-ball-mill-with-4-grinding-station",
    "name": "Planetary Ball Mill",
    "category": "milling-pulverising/ball-mill",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "Fine grinding and alloying down to micrometre range",
    "description": "A planetary ball mill for fine grinding, mixing and alloying of sample materials, achieving particle sizes in the sub-micrometre range for XRF, ICP and downstream analysis.",
    "features": [
      "Planetary motion for high energy input",
      "Grinding down to fine and ultrafine ranges",
      "Multiple grinding jar materials for contamination-free work",
      "Suitable for alloying and mechanical activation"
    ],
    "applications": [
      "XRF/ICP sample prep",
      "Alloying",
      "Ceramics",
      "Research institutes"
    ],
    "specs": [
      [
        "Model",
        "OR-PB-04"
      ],
      [
        "Grinding Jar volume",
        "100ml*4"
      ],
      [
        "Grinding Jar material",
        "Zirconia, corundum, agate, cemented carbide, stainless steel, PTFE, PU, nylon (According to your needs.)"
      ],
      [
        "Grinding ball sizes",
        "Matching grinding ball (large, medium and small size)"
      ],
      [
        "Max loading volume",
        "Material and grinding balls no more 1/3 of volume"
      ],
      [
        "Feeding material size",
        "Soil material ≤ 10 mm, other materials ≤ 3 mm"
      ],
      [
        "Speed",
        "Revolution 45-435 r/min, Rotation 90-870 r/min"
      ],
      [
        "Speed mode",
        "Stepless speed regulation, automatic timing forward and reverse, automatic shutdown"
      ],
      [
        "Working Voltage",
        "AC 220V"
      ],
      [
        "Motor frequency conversion controller power",
        "0.25kw"
      ]
    ]
  },
  {
    "slug": "cyclone-mill-2",
    "name": "Cyclone Mill",
    "category": "milling-pulverising",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "discmill",
    "name": "Disc Mill",
    "category": "milling-pulverising",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "Disc Mill Disc Mill Learn More Laboratory Disc Mill Learn More",
    "description": "Disc Mill Disc Mill Learn More Laboratory Disc Mill Learn More",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "roll-crusher",
    "name": "Roll Crusher",
    "category": "milling-pulverising",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "Roll Crusher Double-roller Mill – WS Learn More Cone Crusher – KM Learn More",
    "description": "Roll Crusher Double-roller Mill – WS Learn More Cone Crusher – KM Learn More",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "oxygen-flask-combustion-unit",
    "name": "Oxygen Flask Combustion Unit (OFCU)",
    "category": "other-instruments",
    "brand": "",
    "origin": "",
    "tagline": "Explore Orbit India Oxygen Flask Combustion Unit for safe Schoniger flask combustion and elemental analysis of halogens, sulfur, phosphorus and trace metals.",
    "description": "Explore Orbit India Oxygen Flask Combustion Unit for safe Schoniger flask combustion and elemental analysis of halogens, sulfur, phosphorus and trace metals.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Parameter",
        "Description"
      ],
      [
        "Application",
        "Sample ignition for Schöniger flask combustion"
      ],
      [
        "Ignition system",
        "Two tungsten-halogen lamps with infrared reflectors"
      ],
      [
        "Ignition duration",
        "10 seconds per cycle"
      ],
      [
        "Safety mechanism",
        "Door-lock interlock and pressure-relief vent holes"
      ],
      [
        "Chamber construction",
        "Aluminium interior"
      ],
      [
        "Observation window",
        "Thick black acrylic"
      ],
      [
        "Subsequent analysis",
        "Titration, ion chromatography and other suitable analytical techniques"
      ]
    ]
  },
  {
    "slug": "ad-apollo-gx-ae-wp-gf-awp-series",
    "name": "A&D Apollo GX-A(E/WP) & GF-A(WP) Series",
    "category": "precision-balances/advanced-level-precision",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "A&D Apollo GX-A(E/WP) & GF-A(WP) Series Overview High-speed weighing with 1-second stabilization*1 Compact Super Hybrid Sensor (C-SHS) enabling footprints smaller than an A4 sheet of paper…",
    "description": "A&D Apollo GX-A(E/WP) & GF-A(WP) Series Overview High-speed weighing with 1-second stabilization*1 Compact Super Hybrid Sensor (C-SHS) enabling footprints smaller than an A4 sheet of paper Anti-static, shatter-resistant, and easily-detachable breeze break with rotary sliding doors*2 IP65 dust and waterproof (FZ-WP/FX-WP) Guarded against accidental overloading Impact shock detection (ISD) providing feedback to prevent damage to […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Readability",
        "0.0001 g"
      ],
      [
        "Minimum weight* (typical)",
        "120 mg"
      ],
      [
        "Weighing pan size",
        "Ø90 mm"
      ],
      [
        "External dimensions",
        "259 (W) × 358 (D) × 332 (H) mm (including the large glass breeze break)"
      ],
      [
        "Net weight",
        "Approx. 7 kg"
      ]
    ]
  },
  {
    "slug": "ej-series",
    "name": "EJ Series",
    "category": "precision-balances/entry-level-precision",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "EJ Series Overview High resolution (1/120,000 – 1/310,000) load cell as the weight sensor Extremely high sensitivity with a readability from 0.0002 g (EJ-54D2) Breeze break with anti-static coating…",
    "description": "EJ Series Overview High resolution (1/120,000 – 1/310,000) load cell as the weight sensor Extremely high sensitivity with a readability from 0.0002 g (EJ-54D2) Breeze break with anti-static coating to ensure high precision and stability (for the EJ-54D2*1/123/303) Adjustable response characteristics depending on the degree of drafts and vibrations at the location Hygienic and chemically […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "ad-fortis-fz-wp-fx-wp-series",
    "name": "A&D Fortis FZ(-WP)/FX(-WP) Series",
    "category": "precision-balances/standard-level-precision",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "A&D Fortis FZ(-WP)/FX(-WP) Series Overview High-speed weighing with 1-second stabilization*1 Compact Super Hybrid Sensor (C-SHS) enabling footprints smaller than an A4 sheet of paper Anti-static,…",
    "description": "A&D Fortis FZ(-WP)/FX(-WP) Series Overview High-speed weighing with 1-second stabilization*1 Compact Super Hybrid Sensor (C-SHS) enabling footprints smaller than an A4 sheet of paper Anti-static, shatter-resistant, and easily-detachable breeze break with rotary sliding doors*2 IP65 dust and waterproof (FZ-WP/FX-WP) Guarded against accidental overloading Impact shock detection (ISD) providing feedback to prevent damage to the weight […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Minimum weight *iii (typical)",
        "140 mg"
      ],
      [
        "Stabilization time (typical when set to FAST)",
        "Approx. 2 secs"
      ],
      [
        "Weighing pan size",
        "Ø90 mm"
      ],
      [
        "External dimensions",
        "198 (W) × 294 (D) × 315 (H) mm (with the large breeze break)"
      ],
      [
        "Net weight",
        "FZ: approx. 3.9 kg | FX: approx. 3.5 kg"
      ]
    ]
  },
  {
    "slug": "ba-t-ba-series",
    "name": "BA-T/BA Series",
    "category": "premium-level-micro-semi-micro",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "BA-T/BA Series Overview Automatic opening/closing of the breeze break doors using non-contact IR sensors 5-inch wide color touch screen that enables intuitive operation (for the BA-T series) External…",
    "description": "BA-T/BA Series Overview Automatic opening/closing of the breeze break doors using non-contact IR sensors 5-inch wide color touch screen that enables intuitive operation (for the BA-T series) External ionizer for instant static elimination*1 Detachable breeze break unit and easily separable glass panes for better cleanability (patented) No grooves for the sliding doors so that contaminants […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "bh-t-bh-series-2",
    "name": "BH-T/BH Series",
    "category": "premium-level-micro-semi-micro",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "BH-T/BH Series Overview Automatic opening/closing of the breeze-break doors using non-contact IR sensors 5-inch wide color touch screen for intuitive operation (BH-T series) External ionizer for…",
    "description": "BH-T/BH Series Overview Automatic opening/closing of the breeze-break doors using non-contact IR sensors 5-inch wide color touch screen for intuitive operation (BH-T series) External ionizer for instant static elimination*1 Easily separable glass panes and floor plate for better cleanability No grooves for sliding doors, preventing contaminant accumulation Perforated weighing pan with shock absorber to mitigate […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Weighing pan size",
        "Ø90 mm"
      ]
    ]
  },
  {
    "slug": "a2000g-high-pressure-electrolyzes-cell",
    "name": "A2000G High Pressure Electrolyzes Cell",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "A2000G High Pressure Electrolyzer Cell Overview An essential ingredient of a sustainable energy framework is the ability to store energy chemically.",
    "description": "A2000G High Pressure Electrolyzer Cell Overview An essential ingredient of a sustainable energy framework is the ability to store energy chemically. While hydrogen is a possibility, several issues remain to make it a viable option. The production of either carbon monoxide (CO) or synthesis gas (syngas), a combination of CO and H2, electrochemically from CO2 and […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "apparatus-for-rate-of-pressure-change",
    "name": "Apparatus for Rate of Pressure Change",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Apparatus for rate of pressure change Overview This apparatus is used to study the burning characteristics of fuel-rich compositions such as lead dioxide-cupric oxide-silicon starter mix systems and…",
    "description": "Apparatus for rate of pressure change Overview This apparatus is used to study the burning characteristics of fuel-rich compositions such as lead dioxide-cupric oxide-silicon starter mix systems and related delay mixtures. Starter compositions are used to initiate a variety of pyrotechnic systems, for example flame and smoke markers. Factors that determine the behavior and predictability […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "apparatus-for-vapor-pressure-determination",
    "name": "Apparatus for Vapor Pressure Determination",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Apparatus for Vapor Pressure Determination Overview Vapor pressure (also known as equilibrium vapor pressure or saturation vapor pressure), is the pressure of a vapor in equilibrium with its…",
    "description": "Apparatus for Vapor Pressure Determination Overview Vapor pressure (also known as equilibrium vapor pressure or saturation vapor pressure), is the pressure of a vapor in equilibrium with its non-vapor phases in a closed container. At a given temperature, the pressure at which a pure liquid boils is called its vapor pressure. Vapor pressures are dependent […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "disbonding-apparatus",
    "name": "Disbonding Apparatus",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Disbonding Apparatus Overview Parr Instrument Company has developed an automated reactor system capable of attaining the conditions necessary for treating samples consisting of bimetallic plate…",
    "description": "Disbonding Apparatus Overview Parr Instrument Company has developed an automated reactor system capable of attaining the conditions necessary for treating samples consisting of bimetallic plate typically used in refinery high pressure/ high temperature (HP/HT) hydrogen gas service. The test temperature and hydrogen gas pressure are selected to simulate those conditions found in refinery hydrogen containing […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "gtl-gas-to-liquid-reactor-system",
    "name": "GTL (Gas-to-Liquid) reactor system",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "GTL (Gas-to-Liquid) reactor system Overview This system incorporates three tubular reactors that can be configured as required to operate in a strictly parallel fashion or in a cascade arrangement…",
    "description": "GTL (Gas-to-Liquid) reactor system Overview This system incorporates three tubular reactors that can be configured as required to operate in a strictly parallel fashion or in a cascade arrangement where the products from one reactor are immediately directed to a second reactor. This type of system can support reaction schemes including but not limited to […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "horizontal-reactor-systems",
    "name": "Horizontal Reactor Systems",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Horizontal Reactor Systems Overview Stirring biomass is not easy to do in a vertical reactor.",
    "description": "Horizontal Reactor Systems Overview Stirring biomass is not easy to do in a vertical reactor. A line of reactors has been developed by Parr Instrument Company to function horizontally. Specifications Downloads Description Horizontal Reactor Systems Stirring biomass is not easy to do in a vertical reactor. A line of reactors has been developed by Parr […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "power-compensation-reaction-calorimeter",
    "name": "Power Compensation Reaction Calorimeter",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Reaction calorimetry with precise power compensation control",
    "description": "A power-compensation reaction calorimeter for studying the heat of chemical reactions under controlled conditions — supporting process-safety studies and reaction optimisation in chemical development.",
    "features": [
      "Power compensation heating and control",
      "Real-time heat-flow measurement during reactions",
      "Suitable for batch reaction studies",
      "Compatible with stirred reactor vessels"
    ],
    "applications": [
      "Chemical process safety",
      "Pharma process development",
      "Polymerisation studies"
    ],
    "specs": []
  },
  {
    "slug": "pressure-etraction-vessel",
    "name": "Pressure Etraction Vessel",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Customized Reactors Pressure Etraction Vessel Pressure Etraction Vessel Overview This apparatus is used to test magnet wire used in hermetic applications.",
    "description": "Home Reactors Customized Reactors Pressure Etraction Vessel Pressure Etraction Vessel Overview This apparatus is used to test magnet wire used in hermetic applications. The test method determines the percentage of insulation on film insulated magnet wire that can be extracted by refrigerants or related solvents. The extractable material is functionally important since this material may […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "reactor-system-for-biofuel-and-alternative-fuel-research",
    "name": "Reactor system for Biofuel and Alternative fuel research",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Customized Reactors Reactor system for Biofuel and Alternative fuel research Reactor system for Biofuel and Alternative fuel research Overview Parr Instrument Company manufactures…",
    "description": "Home Reactors Customized Reactors Reactor system for Biofuel and Alternative fuel research Reactor system for Biofuel and Alternative fuel research Overview Parr Instrument Company manufactures non-stirred vessels for the decomposition of biomass in ammonia and steam. Parr stirred reactors, including a new horizontal reactor technology, have been designed for research processes that include hydrogenation, isomerization, […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "tri-axial-core-holder",
    "name": "Tri-Axial Core Holder",
    "category": "reactors/customized-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Customized Reactors Tri-Axial Core Holder Tri-Axial Core Holder Overview In the oil and gas industry it is common practice to take one or more cylindrical core samples of hydrocarbon…",
    "description": "Home Reactors Customized Reactors Tri-Axial Core Holder Tri-Axial Core Holder Overview In the oil and gas industry it is common practice to take one or more cylindrical core samples of hydrocarbon containing or other formation and to subsequently perform one or more tests with this core sample in a laboratory. During these tests the core […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Maximum Operating Overburden Pressure",
        "7500 psi (517 bar)"
      ],
      [
        "Maximum Operating Temperature",
        "200 °C"
      ],
      [
        "Core Diameter",
        "1” nominal"
      ],
      [
        "Core Lengths",
        "Up to 4”"
      ],
      [
        "Wetted Materials",
        "316SS or other corrosion resistant materials"
      ]
    ]
  },
  {
    "slug": "series-5100-160-1500ml-glass-reactors",
    "name": "Series 5100 Glass Reactors (160–1500 ml)",
    "category": "reactors/glass-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Borosilicate glass reactors for visible, low-pressure reactions",
    "description": "Parr Series 5100 glass reactors give researchers a clear view of the reaction in borosilicate vessels from 160 to 1500 ml, ideal for fermentation, extraction and other low-pressure chemistry.",
    "features": [
      "Borosilicate glass vessels, 160–1500 ml",
      "Stirred and non-stirred configurations",
      "Quick-open closures for fast turnaround",
      "Benchtop stands with overhead stirring"
    ],
    "applications": [
      "Fermentation",
      "Extraction",
      "Dissolution studies",
      "Process scouting"
    ],
    "specs": [
      [
        "Type",
        "Glass or Metal"
      ],
      [
        "Stand",
        "Bench Top"
      ],
      [
        "Mounting Style",
        "Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "160 Ml-1.5L (160, 300, 450, 600,1000 & 1500)"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "Glass: 150 (10) Metal: 1000 (69)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "225 w/ FKM O-ring 225 w/ FFKM O-ring, Glass Vessel 300 w/ FFKM O-ring, Metal Vessel"
      ]
    ]
  },
  {
    "slug": "series-4600-1-2-l-general-purpose-hp-reactor",
    "name": "Series 4600 1 & 2 L General Purpose HP Reactor",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4600 1 & 2 L General Purpose HP Reactor Series 4600 1 & 2 L General Purpose HP Reactor Overview The Series 4600, 1.0 and 2.0 L…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4600 1 & 2 L General Purpose HP Reactor Series 4600 1 & 2 L General Purpose HP Reactor Overview The Series 4600, 1.0 and 2.0 L Vessels are the largest of the Parr Vessels that can be handled on a bench top. These reactors are […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Pressure Vessel"
      ],
      [
        "Volume",
        "1000 ml and 2000 ml"
      ],
      [
        "Maximum Pressure (MAWP)",
        "1900 psi (131 bar) / 2900 psi (200 bar)"
      ],
      [
        "Maximum Temperature",
        "350 deg C"
      ],
      [
        "Mounting style",
        "Moveable (or) Fixed head"
      ],
      [
        "Closure",
        "Split Ring"
      ],
      [
        "Temperature Measurement",
        "Fixed Thermocouple (or) Thermowell for special alloys"
      ],
      [
        "Maximum Head openings",
        "Seven (depending on opening size and required fittings)"
      ]
    ]
  },
  {
    "slug": "series-4625-600-1200-ml-hp-reactor",
    "name": "Series 4625 600-1200 ml HP Reactor",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4625 600-1200 ml HP Reactor Series 4625 600-1200 ml HP Reactor Overview This series of vessels has been designed for users who need…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4625 600-1200 ml HP Reactor Series 4625 600-1200 ml HP Reactor Overview This series of vessels has been designed for users who need higher operating pressures than the 2000 to 3000 psi offered by the General Purpose Reactors, but do not require the high operating temperatures […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Pressure Vessel"
      ],
      [
        "Volume",
        "600ml and 1200 ml"
      ],
      [
        "Maximum Pressure (MAWP)",
        "5000 psi (345 bar)"
      ],
      [
        "Maximum Temperature",
        "350 deg C"
      ],
      [
        "Mounting style",
        "Moveable (or) Fixed head"
      ],
      [
        "Closure",
        "Split Ring"
      ],
      [
        "Temperature Measurement",
        "Fixed Thermocouple (or) Thermowell for special alloys"
      ],
      [
        "Maximum Head openings",
        "Seven (depending on opening size and required fittings)"
      ]
    ]
  },
  {
    "slug": "series-4650-250-1000-ml-hp-ht-pressure-vessel",
    "name": "Series 4650 250-1000 ml HP/HT Pressure Vessel",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4650 250-1000 ml HP/HT Pressure Vessel Series 4650 250-1000 ml HP/HT Pressure Vessel Overview 4650 Series High Pressure and High…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4650 250-1000 ml HP/HT Pressure Vessel Series 4650 250-1000 ml HP/HT Pressure Vessel Overview 4650 Series High Pressure and High Temperature Vessels are available in volumes of 250, 500, and 1000 mL. These vessels can obtain temperatures up to 600 °C and a maximum pressure […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "General Purpose Pressure vessels"
      ],
      [
        "Volume",
        "22 and 45 ml"
      ],
      [
        "Maximum Pressure (MAWP)",
        "1700 psi (115 bar0"
      ],
      [
        "Maximum Temperature",
        "300 deg C"
      ],
      [
        "Mounting style",
        "Moveable only"
      ],
      [
        "Closure",
        "Screw Cap-Steel"
      ],
      [
        "Head Seal",
        "Flat Gasket"
      ],
      [
        "Maximum Head openings",
        "ONE (depending on opening size and required fittings)"
      ]
    ]
  },
  {
    "slug": "series-4660-1-2-g-general-purpose-reactor",
    "name": "Series 4660 1 & 2 G General Purpose Reactor",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4660 1 & 2 G General Purpose Reactor Series 4660 1 & 2 G General Purpose Reactor Overview The Series 4660 General Purpose Vessels…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4660 1 & 2 G General Purpose Reactor Series 4660 1 & 2 G General Purpose Reactor Overview The Series 4660 General Purpose Vessels are available in either a 1 Gallon (3.75 L) or 2 Gallon (7.5 L) capacity. Maximum temperature for these vessels is […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "series-4670-11-5-g-hp-ht-reactor",
    "name": "Series 4670 1&1.5 G HP/HT Reactor",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4670 1&1.5 G HP/HT Reactor Series 4670 1&1.5 G HP/HT Reactor Overview The Series 4670 High Pressure/High Temperature Vessels are…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4670 1&1.5 G HP/HT Reactor Series 4670 1&1.5 G HP/HT Reactor Overview The Series 4670 High Pressure/High Temperature Vessels are available in either a 1.0 or 1.5 Gallon capacity. These vessels can obtain temperatures up to 600 °C and a maximum pressure of 3000 psi (207 […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "Non Stirred Pressure Vessel"
      ],
      [
        "Stand",
        "Floor Cart with heater (moveable head only) Floor Stand with Pneumatic Lift and heater (fixed head)"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "1 & 1.5 Gallon"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "3000 psi (207 bar, 200 bar for CE orders) @ 500 °C 2200 psi (151 bar) @ 600 °C"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "350 °C with PTFE Flat Gasket 500 – 600 °C with Flexible Graphite Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4675-2-6-5-g-general-purpose-reactor",
    "name": "Series 4675 2.6 & 5 G General Purpose Reactor",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4675 2.6 & 5 G General Purpose Reactor Series 4675 2.6 & 5 G General Purpose Reactor Overview The Series 4675 General Purpose…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4675 2.6 & 5 G General Purpose Reactor Series 4675 2.6 & 5 G General Purpose Reactor Overview The Series 4675 General Purpose Vessels are the largest vessels offered by Parr Instrument Company. Vessel styles are offered in a moveable head or fixed head design. These […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Pressure Vessel"
      ],
      [
        "Volume",
        "5 G (18.75 liters) and 2.6 G ( 10 liters)"
      ],
      [
        "Maximum Pressure (MAWP)",
        "1900 psi (131 bar)"
      ],
      [
        "Maximum Temperature",
        "350 deg C"
      ],
      [
        "Mounting style",
        "Moveable (or) Fixed head"
      ],
      [
        "Closure",
        "Split Ring"
      ],
      [
        "Temperature Measurement",
        "Fixed Thermocouple (or) Thermowell for special alloys"
      ],
      [
        "Maximum Head openings",
        "12 (depending on opening size and required fittings)"
      ]
    ]
  },
  {
    "slug": "series-4680-11-8-l-hp-ht-reactor",
    "name": "Series 4680 1&1.8 L HP/HT Reactor",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4680 1&1.8 L HP/HT Reactor Series 4680 1&1.8 L HP/HT Reactor Overview The Series 4680 High Pressure/High Temperature Vessels are…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4680 1&1.8 L HP/HT Reactor Series 4680 1&1.8 L HP/HT Reactor Overview The Series 4680 High Pressure/High Temperature Vessels are available with either a 1.0 L or 1.8 L capacity. These vessels can obtain temperatures up to 600 °C and a maximum pressure of 6000 psi […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Stand",
        "Floor Cart with heater (moveable head only) Floor Stand with Pneumatic Lift and heater (fixed head)"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "1000-1800"
      ],
      [
        "Pressure MAWP Rating, psi (bar)",
        "5000 psi (345 bar) @ 500 °C 6000 psi (413 bar) @ 350 °C 4200 psi(289 bar) @ 600 °C"
      ],
      [
        "Maximum operating temperature, deg C",
        "350 °C with PTFE Flat Gasket 500 – 600 °C with Flexible Graphite Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4700-22-45-ml-general-purpose-pressure-vessel",
    "name": "Series 4700 22-45 ml General purpose pressure vessel",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4700 22-45 ml General purpose pressure vessel Series 4700 22-45 ml General purpose pressure vessel Overview These are the smallest…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4700 22-45 ml General purpose pressure vessel Series 4700 22-45 ml General purpose pressure vessel Overview These are the smallest of the Parr General Purpose Pressure Vessels. They have a 1-inch inside diameter and are offered in two different lengths with volumes of 22 and 45 […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "General Purpose Pressure vessels"
      ],
      [
        "Volume",
        "22 and 45 ml"
      ],
      [
        "Maximum Pressure (MAWP)",
        "1700 psi (115 bar0"
      ],
      [
        "Maximum Temperature",
        "300 deg C"
      ],
      [
        "Mounting style",
        "Moveable only"
      ],
      [
        "Closure",
        "Screw Cap-Steel"
      ],
      [
        "Head Seal",
        "Flat Gasket"
      ],
      [
        "Maximum Head openings",
        "ONE (depending on opening size and required fittings)"
      ]
    ]
  },
  {
    "slug": "series-4703-4714-general-purpose-pressure-vessels",
    "name": "Series 4703-4714 General Purpose Pressure Vessels",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4703-4714 General Purpose Pressure Vessels Series 4703-4714 General Purpose Pressure Vessels Overview The Series 4703-4714 are the…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4703-4714 General Purpose Pressure Vessels Series 4703-4714 General Purpose Pressure Vessels Overview The Series 4703-4714 are the smallest of the Parr General Purpose Pressure Vessels. They have a 1-inch inside diameter and are offered in two different lengths with volumes of 22 and 45 mL.These […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "6400"
      ],
      [
        "Tests Per Hour",
        "6 – 7"
      ],
      [
        "Operator Time Per Test",
        "1 Minute"
      ],
      [
        "Temperature resolution",
        "0.0001 ℃"
      ],
      [
        "Precision Classification",
        "0.1% Class"
      ],
      [
        "Jacket Type",
        "Isoperibol, Water Jacket"
      ],
      [
        "Oxygen Fill",
        "Automatic"
      ],
      [
        "Bucket Fill",
        "Automatic"
      ],
      [
        "Bomb Wash",
        "Automatic"
      ],
      [
        "Memory",
        "1000 tests"
      ],
      [
        "Bomb Model Options",
        "1136, 250mL 1138, 250mL, Alloy 20 1138CL, 250mL, Alloy G30"
      ],
      [
        "Balance Communication",
        "USB Port"
      ],
      [
        "Printer Communication",
        "USB Port"
      ],
      [
        "Network Connection",
        "TCP/IP via Ethernet"
      ]
    ]
  },
  {
    "slug": "series-4740-25-75-ml-hp-ht-pressure-vessel",
    "name": "Series 4740 25-75 ml HP/HT Pressure vessel",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4740 25-75 ml HP/HT Pressure vessel Series 4740 25-75 ml HP/HT Pressure vessel Overview These High Pressure/High Temperature Vessels…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4740 25-75 ml HP/HT Pressure vessel Series 4740 25-75 ml HP/HT Pressure vessel Overview These High Pressure/High Temperature Vessels have a 1-inch inside diameter and offer volumes of 25 or 75 mL. These vessels are closed with an alloy steel screw cap which includes six cap […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Pressure"
      ],
      [
        "Stand",
        "Bench Top Stand with Heater"
      ],
      [
        "Mounting Style",
        "Moveable"
      ],
      [
        "Vessel Sizes, ml",
        "25 & 75 mL"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar) With Standard Screw Cap",
        "8500 psi (586 bar) @ 350 °C 4100 psi (282 bar) @ 500 °C 1850 psi (127 bar) @ 538 °C"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar) With Alloy C-276 Screw Cap",
        "8500 psi (586 bar) @ 350 °C 8000 psi (551 bar) @ 500 °C 7900 psi (544 bar) @ 538 °C"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "350 °Cw/With PTFE Flat Gasket With Flexible Graphite Flat Gasket 500-538 °C/With Flexible Graphite Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4750-125-200-ml-general-purpose-pressure-vessel",
    "name": "Series 4750 125-200 ml General purpose Pressure vessel",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4750 125-200 ml General purpose Pressure vessel Series 4750 125-200 ml General purpose Pressure vessel Overview General Purpose 4750…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4750 125-200 ml General purpose Pressure vessel Series 4750 125-200 ml General purpose Pressure vessel Overview General Purpose 4750 Series Vessels are available in volumes of 125 and 200 mL, with temperatures up to 350 °C and maximum pressure of 3000 psi (200 bar). They come standard […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "Genera Purpose Pressure Vessels"
      ],
      [
        "Stand",
        "Bench Top Stand with Heater"
      ],
      [
        "Mounting Style",
        "Moveable"
      ],
      [
        "Vessel Sizes, ml",
        "125 & 200mL"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "3000 psi (207 bar, 200 bar for CE orders)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "350 °C"
      ]
    ]
  },
  {
    "slug": "series-4760-100-600-ml-general-purpose-hp-ht-pressure-vessel",
    "name": "Series 4760 100-600 ml General Purpose HP/HT pressure vessel",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4760 100-600 ml General Purpose HP/HT pressure vessel Series 4760 100-600 ml General Purpose HP/HT pressure vessel Overview These…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4760 100-600 ml General Purpose HP/HT pressure vessel Series 4760 100-600 ml General Purpose HP/HT pressure vessel Overview These are the most popular of the small general purpose vessels. Parr offers a range of sizes large enough to work with significant sample sizes, yet small enough […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "Genera Purpose Pressure Vessels"
      ],
      [
        "Stand",
        "Bench Top Stand with Heater"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "100-600mL (100, 160, 300, 450 & 600)"
      ],
      [
        "Maximum Pressure MAWP Rating, psi (bar)",
        "3000 psi (200 bar)"
      ],
      [
        "Maximum operating temperature, deg C",
        "225 °C with FKM O-ring 300 °C With FFKM O-ring 350 °C with PTFE Flat Gasket"
      ],
      [
        "Maximum Pressure MAWP Rating, psi (bar) for High Temperature",
        "2000 psi (138 bar) for volumes 300, 450 and 600 ml only"
      ],
      [
        "High Temperature, deg C",
        "500 °C with Flexible Graphite Flat Gasket (HT) for volumes 300, 450 and 600 ml only"
      ]
    ]
  },
  {
    "slug": "series-4790-25-100ml-general-purpose-hp-ht-pressure-vessel",
    "name": "Series 4790 25-100ml General Purpose HP/HT pressure vessel",
    "category": "reactors/hp-ht-reactors/non-stirred-pressure-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4790 25-100ml General Purpose HP/HT pressure vessel Series 4790 25-100ml General Purpose HP/HT pressure vessel Overview These small…",
    "description": "Home Reactors HP / HT Reactors Non-Stirred Pressure Vessels Series 4790 25-100ml General Purpose HP/HT pressure vessel Series 4790 25-100ml General Purpose HP/HT pressure vessel Overview These small pressure vessels are a good choice for chemists working with very expensive materials or materials only available in small amounts. They will also appeal to users who wish […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "Micro Pressure Vessel"
      ],
      [
        "Stand",
        "Heater only(Standard rated and HP vessels only) Bench Top Stand with Heater(Required for HT Vessels)"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head(HP/HT requires Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "25-100 mL (25, 50 & 100)"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "3000 psi (200 bar)"
      ],
      [
        "High Pressure (HP) MAWP Rating, psi (bar)",
        "5000 psi (345 bar)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "225 w/ FKM O-ring 300 w/ FFKM O-ring 350 w/ PTFE Flat Gasket 500 w/Flexiable Graphite Flat Gasket ( HP/HT only)"
      ]
    ]
  },
  {
    "slug": "series-4520-1-2-l-general-purpose-bench-top-reactors",
    "name": "Series 4520 1 & 2 L General Purpose Bench Top Reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 4520 1 & 2 L General Purpose Bench Top Reactors Series 4520 1 & 2 L General Purpose Bench Top Reactors Overview Available in 1 and 2 Liter…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 4520 1 & 2 L General Purpose Bench Top Reactors Series 4520 1 & 2 L General Purpose Bench Top Reactors Overview Available in 1 and 2 Liter capacities, these are the largest of the Parr Stirred Reactor Systems that can be operated on a Bench […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Vessel Mounting",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, mL",
        "1000-2000"
      ],
      [
        "High Pressure Vessel Size, mL",
        "970-1900"
      ],
      [
        "Maximum Pressure",
        "1900 psi (131 bar) / 2900 psi (200 bar) HP"
      ],
      [
        "Maximum Temperature",
        "350 ˚C"
      ]
    ]
  },
  {
    "slug": "series-4530-1-2-l-general-purpose-floor-stand-reactors",
    "name": "Series 4530 1 & 2 L General Purpose Floor Stand Reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Orbit Technologies Page Home Reactors HP / HT Reactors Stirred Reactors Series 4530 1 & 2 L General Purpose Floor Stand Reactors Series 4530 1 & 2 L General Purpose Floor Stand Reactors Overview…",
    "description": "Orbit Technologies Page Home Reactors HP / HT Reactors Stirred Reactors Series 4530 1 & 2 L General Purpose Floor Stand Reactors Series 4530 1 & 2 L General Purpose Floor Stand Reactors Overview Series 4530 1-2L Floor Stand Reactors can be configured for polymer studies, modified to fit your needs, relocated when not in use, […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "General Purpose"
      ],
      [
        "Stand",
        "Floor Stand or Cart"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "1000-2000 Standard 970-1900 HP"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "1900 (131)"
      ],
      [
        "High Pressure (Hp) MAWP Rating, psi (ar)",
        "2900 (200)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "225 w/ FKM O-ring 300 w/ FFKM O-ring 350 w/ PTFE Flat Gasket"
      ],
      [
        "High Temperature (HT)/ High Pressure (HP) Maximum Operating Temperature, °C:",
        "350 @ 2900 psi"
      ]
    ]
  },
  {
    "slug": "series-4540-600-1200-ml-high-pressure-reactors",
    "name": "Series 4540 600-1200 ml High Pressure Reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 4540 600-1200 ml High Pressure Reactors Series 4540 600-1200 ml High Pressure Reactors Overview This series of stirred reactors has been…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 4540 600-1200 ml High Pressure Reactors Series 4540 600-1200 ml High Pressure Reactors Overview This series of stirred reactors has been designed for users who need higher operating pressures than the 1900 to 2900 psi offered by the General Purpose Reactors, but do not require the high […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Pressure"
      ],
      [
        "Stand",
        "Bench Top, Floor Stand, or Cart"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "600 and 1200"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar):",
        "5000(345)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "350 w/PTFE Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4550-1-2-gallon-general-purpose-reactor-2",
    "name": "Series 4550 1 & 2 Gallon General Purpose Reactor",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 4550 1 & 2 Gallon General Purpose Reactor Series 4550 1 & 2 Gallon General Purpose Reactor Overview These 4550 Reactors extend the size range of…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 4550 1 & 2 Gallon General Purpose Reactor Series 4550 1 & 2 Gallon General Purpose Reactor Overview These 4550 Reactors extend the size range of the 4530 Series to 1 and 2 gallon (3.75 and 7.99 liter) sizes, providing excellent options for pilot plant studies. These […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "General Purpose"
      ],
      [
        "Stand",
        "Floor Stand or Cart"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, mL",
        "1 (3.75) and 2 (7.99)"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "1900 (131)"
      ],
      [
        "Standard Maximum Operating Temp. ºC",
        "225 w/ FKM O-ring 300 w/ FFKM O-ring 350 w/ PTFE Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4555-10-20-l-general-purpose-floor-stand-reactors",
    "name": "Series 4555 10 & 20 L General Purpose Floor Stand Reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 4555 10 & 20 L General Purpose Floor Stand Reactors Series 4555 10 & 20 L General Purpose Floor Stand Reactors Overview The Model 4555 and 4557…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 4555 10 & 20 L General Purpose Floor Stand Reactors Series 4555 10 & 20 L General Purpose Floor Stand Reactors Overview The Model 4555 and 4557 Reactors have a 5 gallon (18.75 L) capacity while the 4556 and 4558 Models are similar units with a […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "Floor stand"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "2.6 (10) and 5 (18.75)"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar):",
        "1900 psi(131 bar)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "225 w/ FKM O-ring 300 w/ FFKM O-ring 350 w/ PTFE Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4560-100-600-ml-mini-reactor-systems",
    "name": "Series 4560 100-600 ml Mini Reactor Systems",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 4560 100-600 ml Mini Reactor Systems Series 4560 100-600 ml Mini Reactor Systems Overview These are the most popular of all Parr Stirred…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 4560 100-600 ml Mini Reactor Systems Series 4560 100-600 ml Mini Reactor Systems Overview These are the most popular of all Parr Stirred Reactors. Although they are called “Mini” reactors, they offer a range of sizes large enough to work with significant sample sizes, yet small enough […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "Mini"
      ],
      [
        "Stand",
        "Benchtop"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "100 – 600"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "3000 psi(200 bar)"
      ],
      [
        "High Temperature, MAWP Rating, psi (bar)",
        "2000 (138)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "225 w/ FKM O-ring 300 w/ FFKM O-ring 350 w/ PTFE Flat Gasket"
      ],
      [
        "High Temperature (HT) Maximum Operating Temperature, °C",
        "500 w/ FG Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4570-250-1800-ml-high-pressure-high-temperature-reactors",
    "name": "Series 4570 250-1800 ml High Pressure-High Temperature Reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 4570 250-1800 ml High Pressure-High Temperature Reactors Series 4570 250-1800 ml High Pressure-High Temperature Reactors Overview Parr offers a…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 4570 250-1800 ml High Pressure-High Temperature Reactors Series 4570 250-1800 ml High Pressure-High Temperature Reactors Overview Parr offers a number of different reactors in the 4570 Series in a variety of sizes and with different mountings for operating pressures to 5000 psi (345 bar) and temperatures […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Pressure/High Temperature"
      ],
      [
        "Stand",
        "Bench Top, Floor Stand or Moveable Cart"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, ml",
        "250-1800 (250, 500, 1000 & 1800)"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "5000 (345)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "225 w/ FKM O-ring 300 w/ FFKM O-ring 350 w/ PTFE Flat Gasket 500 w/FG Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series-4580-1-1-5-g-ht-reactors",
    "name": "Series 4580 1& 1.5G HT Reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 4580 1& 1.5G HT Reactors Series 4580 1& 1.5G HT Reactors Overview Parr offers a number of different reactors in the 4580 Series in a variety of…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 4580 1& 1.5G HT Reactors Series 4580 1& 1.5G HT Reactors Overview Parr offers a number of different reactors in the 4580 Series in a variety of sizes and with different mountings for operating pressures to 3000 psi (207 bar) and temperatures to 500 °C. 4581 […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Temperature/ High Pressure"
      ],
      [
        "Stand",
        "Bench Top, Floor Stand or Cart"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, mL",
        "3750 – 5500 mL"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "3000 (200)"
      ],
      [
        "Standard Maximum Operating Temp. ºC",
        "500 °C with Graphite Flat Gasket"
      ],
      [
        "Maximum Operating Temp., at High Pressure (HP)",
        "500 °C @ 3000 psi"
      ]
    ]
  },
  {
    "slug": "series-4590-25-100ml-mini-reactors",
    "name": "Series 4590 25-100ml mini Reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Orbit Technologies Page Home Reactors HP / HT Reactors Stirred Reactors Series 4590 25-100ml mini Reactors Series 4590 25-100ml mini Reactors Overview These are Parr’s smallest individual Stirred…",
    "description": "Orbit Technologies Page Home Reactors HP / HT Reactors Stirred Reactors Series 4590 25-100ml mini Reactors Series 4590 25-100ml mini Reactors Overview These are Parr’s smallest individual Stirred Reactors. Smaller vessel sizes are available in our Series 2500 Micro Batch System which includes three reactors in 5ml or 10ml volumes. They will be a good choice […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "Micro"
      ],
      [
        "Stand",
        "Benchtop"
      ],
      [
        "Mounting Style",
        "Moveable or Fixed Head"
      ],
      [
        "Vessel Sizes, mL",
        "25, 50, 100 ml"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "3000 psi (200 bar)"
      ],
      [
        "High Pressure (Hp) MAWP Rating, psi (ar)",
        "5000 psi (345 bar)"
      ],
      [
        "Standard Maximum operating temperature, deg C",
        "225 w/ FKM O-ring 275 w/ FFKM O-ring 350 w/ PTFE Flat Gasket"
      ],
      [
        "High Temperature (HT)/High Pressure (HP) Maximum Operating Temperature, °C:",
        "500 w/ FG Flat Gasket (Fixed Head only)"
      ]
    ]
  },
  {
    "slug": "series-5500-high-pressure-compact-laboratory-reactors",
    "name": "Series 5500 25-600ml compact reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "All of the safety, convenience and reliability features which have been the hallmark of Parr pressure reaction equipment for more than 50 years have been incorporated into a new line of high…",
    "description": "All of the safety, convenience and reliability features which have been the hallmark of Parr pressure reaction equipment for more than 50 years have been incorporated into a new line of high pressure, compact laboratory reactors.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "High Pressure Compact"
      ],
      [
        "Stand",
        "Bench top"
      ],
      [
        "Mounting Style",
        "Moveable"
      ],
      [
        "Vessel Sizes, mL",
        "25ml to 600 ml"
      ],
      [
        "Standard Pressure MAWP Rating, psi (bar)",
        "3000 psi (200 bar)"
      ],
      [
        "Maximum Operating Temp. ºC:",
        "225 w/ FKM O-ring 300 w/ FFKM O-ring 350 w/ PTFE Flat Gasket"
      ]
    ]
  },
  {
    "slug": "series8500-50100-l-floor-stand-reactors",
    "name": "Series 8500 50&100 L Floor stand reactors",
    "category": "reactors/hp-ht-reactors/stirred-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors HP / HT Reactors Stirred Reactors Series 8500 50&100 L Floor stand reactors Series 8500 50&100 L Floor stand reactors Overview The 8500 Series of stirred reactors, with volumes of 50 L…",
    "description": "Home Reactors HP / HT Reactors Stirred Reactors Series 8500 50&100 L Floor stand reactors Series 8500 50&100 L Floor stand reactors Overview The 8500 Series of stirred reactors, with volumes of 50 L or 100 L, are the largest reactors offered by Parr. This series expands the available volume of our standard offering by […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "apparatus-for-corrosion-studies",
    "name": "Apparatus for Corrosion Studies",
    "category": "reactors/reactor-systems-for-corrosion-monitoring-studies",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Corrosion Monitoring Apparatus for Corrosion Studies Apparatus for Corrosion Studies Overview Parr Instrument Company has designed a vessel specifically to be used for long term (up to…",
    "description": "Home Reactors Corrosion Monitoring Apparatus for Corrosion Studies Apparatus for Corrosion Studies Overview Parr Instrument Company has designed a vessel specifically to be used for long term (up to 4000 hours) corrosion testing of zirconium alloy samples in aqueous solutions near the critical point of water. The vessel illustrated is a non-stirred, fixed head design […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "high-pressure-high-temperature-rotating-cylinder-electrode-rce-system",
    "name": "HP/HT Rotating Cylinder Electrode (RCE) System",
    "category": "reactors/reactor-systems-for-corrosion-monitoring-studies",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Corrosion studies under high pressure and high temperature",
    "description": "A high-pressure, high-temperature rotating cylinder electrode system for studying corrosion and erosion-corrosion behaviour of metals under controlled hydrodynamic conditions.",
    "features": [
      "High-pressure, high-temperature autoclave",
      "Controlled cylinder rotation for defined flow conditions",
      "Electrochemical measurement capability",
      "Also supplied as rotating cage corrosion apparatus"
    ],
    "applications": [
      "Oil & gas corrosion",
      "Power plant materials",
      "Chemical plant metallurgy"
    ],
    "specs": [
      [
        "Max Allowable Working Pressure",
        "2900 psi (200 bar)"
      ],
      [
        "Max Allowable Working Temperature",
        "200 °C"
      ],
      [
        "Material of Construction",
        "C276/PEEK"
      ],
      [
        "Maximum RCE Speed",
        "2000 RPM"
      ],
      [
        "Counter Electrode: Reference Electrode:",
        "Pt Ag/AgCl"
      ],
      [
        "Potentiostat",
        "Gamry 1010B"
      ],
      [
        "Control/Logging Software",
        "SpecView"
      ]
    ]
  },
  {
    "slug": "nanocorr-cmas-as-per-astm-g217",
    "name": "NanoCorr CMAS as per ASTM G217",
    "category": "reactors/reactor-systems-for-corrosion-monitoring-studies",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Corrosion Monitoring NanoCorr CMAS as per ASTM G217 NanoCorr CMAS as per ASTM G217 Overview NanoCorr Analyser for localized and general Corrosion Monitoring which uses Coupled…",
    "description": "Home Reactors Corrosion Monitoring NanoCorr CMAS as per ASTM G217 NanoCorr CMAS as per ASTM G217 Overview NanoCorr Analyser for localized and general Corrosion Monitoring which uses Coupled Multi-electrode Array Sensors (CMAS) technique. The NanoCorr CMAS monitoring system confirms to ASTM G217 test method (i.e. Standard Guide for Corrosion Monitoring in Laboratories and Plants with […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "rotating-cage-apparatus",
    "name": "Rotating Cage Apparatus",
    "category": "reactors/reactor-systems-for-corrosion-monitoring-studies",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Reactor Systems for Corrosion Monitoring Studies Rotating Cage Apparatus Rotating Cage Apparatus Overview Evaluation of corrosion inhibitors for use in refinery and oilfield…",
    "description": "Home Reactors Reactor Systems for Corrosion Monitoring Studies Rotating Cage Apparatus Rotating Cage Apparatus Overview Evaluation of corrosion inhibitors for use in refinery and oilfield applications typically requires apparatus that can simulate the interaction between the corrosive fluid and the carbon/low alloy steel used in the construction of the refinery, pipeline, or drilling equipment. ASTM […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "4744-general-purpose-acid-digestion-vessel-45-ml",
    "name": "4744 General Purpose Acid Digestion Vessel, 45 mL",
    "category": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4744 General Purpose Acid Digestion Vessel, 45 mL 4744 General Purpose Acid Digestion Vessel, 45 mL Overview This…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4744 General Purpose Acid Digestion Vessel, 45 mL 4744 General Purpose Acid Digestion Vessel, 45 mL Overview This is a 45 mL modification of the 23 mL, 4749 PTFE lined vessel for users who want additional capacity in this popular model. It is made […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4744"
      ],
      [
        "Inorganic Sample",
        "2.0"
      ],
      [
        "Organic Sample",
        "0.2"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum pressure, psig",
        "1800"
      ],
      [
        "Body Material",
        "Stainless Steel"
      ],
      [
        "Cup Seal",
        "Flanged"
      ],
      [
        "Overpressure Protection",
        "Blow-off Disc"
      ],
      [
        "Closure Style",
        "Spanner Wrench"
      ],
      [
        "Overall Height",
        "13.41"
      ],
      [
        "Maximum O.D.",
        "6.35"
      ],
      [
        "Inside Diameter",
        "2.64"
      ],
      [
        "Inside Depth",
        "9.47"
      ]
    ]
  },
  {
    "slug": "4745-general-purpose-acid-digestion-vessel-23-ml-1200-psig",
    "name": "4745 General Purpose Acid Digestion Vessel, 23 mL, 1200 psig",
    "category": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Orbit Technologies Page Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4745 General Purpose Acid Digestion Vessel, 23 mL, 1200 psig 4745 General Purpose Acid…",
    "description": "Orbit Technologies Page Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4745 General Purpose Acid Digestion Vessel, 23 mL, 1200 psig 4745 General Purpose Acid Digestion Vessel, 23 mL, 1200 psi Overview This is the original acid digestion vessel introduced by Parr in 1969 to provide a PTFE lined metal vessel of […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4745"
      ],
      [
        "Size, mL",
        "23"
      ],
      [
        "Inorganic Sample",
        "1.0"
      ],
      [
        "Organic Sample",
        "0.1"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "150"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum pressure, psig",
        "1200"
      ],
      [
        "Body Material",
        "Stainless Steel"
      ],
      [
        "Cup Seal",
        "Tapered"
      ],
      [
        "Overpressure Protection",
        "Bottom plate design"
      ],
      [
        "Closure Style",
        "Hand Tighten"
      ],
      [
        "Overall Height",
        "8.56"
      ],
      [
        "Maximum O.D.",
        "5.99"
      ],
      [
        "Inside Diameter",
        "3.10"
      ]
    ]
  },
  {
    "slug": "4746-high-pressure-acid-digestion-vessel-23-ml-5000-psig",
    "name": "4746 High Pressure Acid Digestion Vessel, 23 mL, 5000 psig",
    "category": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4746 High Pressure Acid Digestion Vessel, 23 mL, 5000 psig 4746 High Pressure Acid Digestion Vessel, 23 mL, 5000…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4746 High Pressure Acid Digestion Vessel, 23 mL, 5000 psig 4746 High Pressure Acid Digestion Vessel, 23 mL, 5000 psi Overview The 4746 is a High Pressure Acid Digestion Vessel with a 23 mL, A255AC PTFE Cup and Cover in a strong outer body […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4746"
      ],
      [
        "Size, mL",
        "23"
      ],
      [
        "Inorganic Sample",
        "1.0"
      ],
      [
        "Organic Sample",
        "0.1"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "275"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "275"
      ],
      [
        "Absolute Maximum pressure, psig",
        "5000"
      ],
      [
        "Body Material",
        "Stainless Steel"
      ],
      [
        "Cup Seal",
        "Tapered"
      ],
      [
        "Overpressure Protection",
        "Blow-off Disc"
      ],
      [
        "Closure Style",
        "Spanner Wrench"
      ],
      [
        "Overall Height",
        "12.57"
      ],
      [
        "Maximum O.D.",
        "8.41"
      ],
      [
        "Inside Diameter",
        "3.10"
      ]
    ]
  },
  {
    "slug": "4747-high-pressure-acid-digestion-vessel-23-ml-33000-psig",
    "name": "4747 High Pressure Acid Digestion Vessel, 23 mL, 33000 psig",
    "category": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4747 High Pressure Acid Digestion Vessel, 23 mL, 33000 psig Orbit Technologies Page 4747 High Pressure Acid…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4747 High Pressure Acid Digestion Vessel, 23 mL, 33000 psig Orbit Technologies Page 4747 High Pressure Acid Digestion Vessel, 23 mL, 33000 psi Overview The 4747 High Pressure Acid Digestion Vessel with a nickel body is to be used with HCl, HF and other […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4747"
      ],
      [
        "Size, mL",
        "23"
      ],
      [
        "Inorganic Sample",
        "1.0"
      ],
      [
        "Organic Sample",
        "0.1"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "275"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "275"
      ],
      [
        "Absolute Maximum pressure, psig",
        "3300"
      ],
      [
        "Body Material",
        "Nickel"
      ],
      [
        "Cup Seal",
        "Tapered"
      ],
      [
        "Overpressure Protection",
        "Blow-off Disc"
      ],
      [
        "Closure Style",
        "Spanner Wrench"
      ],
      [
        "Overall Height",
        "8.56"
      ],
      [
        "Maximum O.D.",
        "12.57"
      ],
      [
        "Inside Diameter",
        "3.10"
      ]
    ]
  },
  {
    "slug": "4748-large-capacity-acid-digestion-vessels-125-ml",
    "name": "4748 Large Capacity Acid Digestion Vessels, 125 mL",
    "category": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4748 Large Capacity Acid Digestion Vessels, 125 mL Orbit Technologies Page 4748 Large Capacity Acid Digestion…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4748 Large Capacity Acid Digestion Vessels, 125 mL Orbit Technologies Page 4748 Large Capacity Acid Digestion Vessels, 125 mL Overview The 4748 Large Capacity Acid Digestion Vessels and 4748A vessels are the largest of all Parr acid digestion vessels. The 4748 has a 125 […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4748"
      ],
      [
        "Size, mL",
        "125"
      ],
      [
        "Inorganic Sample",
        "5.0"
      ],
      [
        "Organic Sample",
        "0.5"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum pressure, psig",
        "1900"
      ],
      [
        "Body Material",
        "Stainless steel"
      ],
      [
        "Cup Seal",
        "Flanged"
      ],
      [
        "Overpressure Protection",
        "Blow-off Disc"
      ],
      [
        "Closure Style",
        "Six Cap Screws"
      ],
      [
        "Overall Height",
        "15.21"
      ],
      [
        "Maximum O.D.",
        "9.45"
      ],
      [
        "Inside Diameter",
        "4.45"
      ]
    ]
  },
  {
    "slug": "4748a-large-capacity-acid-digestion-vessels-200-ml",
    "name": "4748A Large Capacity Acid Digestion Vessels, 200 mL",
    "category": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4748A Large Capacity Acid Digestion Vessels, 200 mL Orbit Technologies Page 4748A Large Capacity Acid Digestion…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4748A Large Capacity Acid Digestion Vessels, 200 mL Orbit Technologies Page 4748A Large Capacity Acid Digestion Vessels, 200 mL Overview The 4748 and 4748A Large Capacity Acid Digestion Vessels are the largest of all Parr acid digestion vessels. The 4748 has a 125 mL, […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4748A"
      ],
      [
        "Inorganic Sample",
        "8.0"
      ],
      [
        "Organic Sample",
        "0.8"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum pressure, psig",
        "1900"
      ],
      [
        "Body Material",
        "Stainless steel"
      ],
      [
        "Cup Seal",
        "Flanged"
      ],
      [
        "Overpressure Protection",
        "Blow-off Disc"
      ],
      [
        "Closure Style",
        "Six Cap Screws"
      ],
      [
        "Overall Height",
        "20.29"
      ],
      [
        "Maximum O.D.",
        "9.45"
      ],
      [
        "Inside Diameter",
        "4.45"
      ],
      [
        "Inside Depth",
        "13.34"
      ]
    ]
  },
  {
    "slug": "4749-general-purpose-acid-digestion-vessels-23-ml",
    "name": "4749 General Purpose Acid Digestion Vessels, 23 mL",
    "category": "reactors/sample-preparation-vessels/acid-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4749 General Purpose Acid Digestion Vessels, 23 mL 4749 General Purpose Acid Digestion Vessels, 23 mL Overview The…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Acid Digestion Vessels 4749 General Purpose Acid Digestion Vessels, 23 mL 4749 General Purpose Acid Digestion Vessels, 23 mL Overview The 4749 is a 23 mL, general purpose acid digestion vessel, similar to the original 4745 model but modified for use at higher temperatures and pressures, and […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4749"
      ],
      [
        "Size, mL",
        "23"
      ],
      [
        "Inorganic Sample",
        "1.0"
      ],
      [
        "Organic Sample",
        "0.1"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum pressure, psig",
        "1800"
      ],
      [
        "Body Material",
        "Stainless Steel"
      ],
      [
        "Cup Seal",
        "Flanged"
      ],
      [
        "Overpressure Protection",
        "Blow-off Disc"
      ],
      [
        "Closure Style",
        "Spanner Wrench"
      ],
      [
        "Overall Height",
        "8.33"
      ],
      [
        "Maximum O.D.",
        "6.35"
      ],
      [
        "Inside Diameter",
        "2.64"
      ]
    ]
  },
  {
    "slug": "4635-cell-disruption-vessel-920ml",
    "name": "4635 Cell Disruption Vessel, 920mL",
    "category": "reactors/sample-preparation-vessels/cell-disruption-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4635 Cell Disruption Vessel, 920mL Orbit Technologies Page 4635 Cell Disruption Vessel, 920mL Overview The 4635…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4635 Cell Disruption Vessel, 920mL Orbit Technologies Page 4635 Cell Disruption Vessel, 920mL Overview The 4635 Cell Disruption Vessel, 920ml is the general purpose model with a capacity for treating samples ranging in size from a few milliliters up to 600 ml. more details […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Part Number",
        "4635"
      ],
      [
        "Internal Volume",
        "920mL"
      ],
      [
        "Maximum Sample Size",
        "600mL"
      ],
      [
        "Maximum Working Pressure, psig",
        "3000"
      ],
      [
        "Inside Diameter",
        "3.75 Inches"
      ],
      [
        "Inside Depth",
        "5.1 Inches"
      ]
    ]
  },
  {
    "slug": "4636-cell-disruption-vessels-1850-ml",
    "name": "4636 Cell Disruption Vessels, 1850 mL",
    "category": "reactors/sample-preparation-vessels/cell-disruption-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4636 Cell Disruption Vessels, 1850 mL Orbit Technologies Page 4636 Cell Disruption Vessels, 1850 mL Overview The…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4636 Cell Disruption Vessels, 1850 mL Orbit Technologies Page 4636 Cell Disruption Vessels, 1850 mL Overview The larger vessels, 4636 Cell Disruption Vessel (1850 ml), 4637 (1 gallon) and 4638 (2 gallon), are intended for large volume applications. Users are urged to run preliminary […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Part Number",
        "4636"
      ],
      [
        "Internal Volume",
        "1850mL"
      ],
      [
        "Maximum Sample Size",
        "1200mL"
      ],
      [
        "Maximum Working Pressure, psig",
        "2200"
      ],
      [
        "Inside Diameter",
        "3.75 Inches"
      ],
      [
        "Inside Depth",
        "10.1 Inches"
      ]
    ]
  },
  {
    "slug": "4637-cell-disruption-vessels-1-gallon",
    "name": "4637 Cell Disruption Vessels, 1 Gallon",
    "category": "reactors/sample-preparation-vessels/cell-disruption-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4637 Cell Disruption Vessels, 1 Gallon Orbit Technologies Page 4637 Cell Disruption Vessels, 1 Gallon Overview…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4637 Cell Disruption Vessels, 1 Gallon Orbit Technologies Page 4637 Cell Disruption Vessels, 1 Gallon Overview The larger vessels, 4636 (1850 ml), 4637 Cell Disruption Vessel (1 gallon) and 4638 (2 gallon), are intended for large volume applications. Users are urged to run preliminary […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Part Number",
        "4637"
      ],
      [
        "Internal Volume",
        "1 Gallon"
      ],
      [
        "Maximum Sample Size",
        "2.5L"
      ],
      [
        "Maximum Working Pressure, psig",
        "2900"
      ],
      [
        "Inside Diameter",
        "6.0 Inches"
      ],
      [
        "Inside Depth",
        "8.6 Inches"
      ]
    ]
  },
  {
    "slug": "4638-cell-disruption-vessels-2-gallon",
    "name": "4638 Cell Disruption Vessels, 2 Gallon",
    "category": "reactors/sample-preparation-vessels/cell-disruption-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4638 Cell Disruption Vessels, 2 Gallon Orbit Technologies Page 4638 Cell Disruption Vessels, 2 Gallon Overview…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4638 Cell Disruption Vessels, 2 Gallon Orbit Technologies Page 4638 Cell Disruption Vessels, 2 Gallon Overview The larger vessels, 4636 (1850 ml), 4637 (1 gallon) and 4638 Cell Disruption Vessel (2 gallon), are intended for large volume applications. Users are urged to run preliminary […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Part Number",
        "4638"
      ],
      [
        "Internal Volume",
        "2 Gallon"
      ],
      [
        "Maximum Sample Size",
        "5.0L"
      ],
      [
        "Maximum Working Pressure, psig",
        "2900"
      ],
      [
        "Inside Diameter",
        "6.0 Inches"
      ],
      [
        "Inside Depth",
        "17.2 Inches"
      ]
    ]
  },
  {
    "slug": "4639-cell-disruption-vessel",
    "name": "4639 Cell Disruption Vessel",
    "category": "reactors/sample-preparation-vessels/cell-disruption-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4639 Cell Disruption Vessel Orbit Technologies Page 4639 Cell Disruption Vessel, 45ml Overview The 4639 Cell…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Cell Disruption Vessels 4639 Cell Disruption Vessel Orbit Technologies Page 4639 Cell Disruption Vessel, 45ml Overview The 4639 Cell Disruption Vessel 45 mL is designed specifically for small samples from 30 mL down to less than one milliliter. It has a tapered bottom that drains directly into […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Part Number",
        "4639"
      ],
      [
        "Internal Volume",
        "45 mL"
      ],
      [
        "Maximum Sample Size",
        "30 mL"
      ],
      [
        "Maximum Working Pressure, psig",
        "2900"
      ],
      [
        "Inside Diameter",
        "1.5 Inches"
      ],
      [
        "Inside Depth",
        "2.25 Inches"
      ]
    ]
  },
  {
    "slug": "4781-microwave-acid-digestion-vessels-23ml",
    "name": "4781 Microwave Acid Digestion Vessels, 23mL",
    "category": "reactors/sample-preparation-vessels/microwave-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Microwave Digestion Vessels 4781 Microwave Acid Digestion Vessels, 23mL Orbit Technologies Page 4781 Microwave Acid Digestion Vessels,…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Microwave Digestion Vessels 4781 Microwave Acid Digestion Vessels, 23mL Orbit Technologies Page 4781 Microwave Acid Digestion Vessels, 23mL Overview Fast digestion times. Temperatures to 250 °C. Pressures to 1200 psi. Complete containment of volatiles. Freedom from metal contamination. more details Specifications Downloads Model Number 4781 Size, mL […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4781"
      ],
      [
        "Size, mL",
        "23"
      ],
      [
        "Inorganic Sample",
        "1.0"
      ],
      [
        "Organic Sample",
        "0.1"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "-"
      ],
      [
        "Absolute Maximum pressure, psig",
        "1200"
      ],
      [
        "Body Material",
        "High Strength Polymer"
      ],
      [
        "Cup Seal",
        "PTFE O-ring"
      ],
      [
        "Overpressure Protection",
        "Compressible Relief Disc"
      ],
      [
        "Closure Style",
        "Hand Tighten"
      ],
      [
        "Overall Height",
        "11.2"
      ],
      [
        "Maximum O.D.",
        "7.8"
      ],
      [
        "Inside Diameter",
        "3.18"
      ]
    ]
  },
  {
    "slug": "4782-microwave-acid-digestion-vessels-45-ml",
    "name": "4782 Microwave Acid Digestion Vessels, 45 mL",
    "category": "reactors/sample-preparation-vessels/microwave-digestion-vessels",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors & Sample Preparation Sample Preparation Vessels Microwave Digestion Vessels 4782 Microwave Acid Digestion Vessels, 45 mL Orbit Technologies Page 4782 Microwave Acid Digestion Vessels,…",
    "description": "Home Reactors & Sample Preparation Sample Preparation Vessels Microwave Digestion Vessels 4782 Microwave Acid Digestion Vessels, 45 mL Orbit Technologies Page 4782 Microwave Acid Digestion Vessels, 45 mL Overview Fast digestion times. Temperatures to 250 °C. Pressures to 1200 psi. Complete containment of volatiles. Freedom from metal contamination. more details Specifications Downloads Model Number 4782 […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Model Number",
        "4782"
      ],
      [
        "Size, mL",
        "45"
      ],
      [
        "Inorganic Sample",
        "2.0"
      ],
      [
        "Organic Sample",
        "0.2"
      ],
      [
        "Recommended Maximum Temperature, °C",
        "250"
      ],
      [
        "Absolute Maximum Temperature, °C",
        "-"
      ],
      [
        "Absolute Maximum pressure, psig",
        "1200"
      ],
      [
        "Body Material",
        "High Strength Polymer"
      ],
      [
        "Cup Seal",
        "PTFE O-ring"
      ],
      [
        "Overpressure Protection",
        "Compressible Relief Disc"
      ],
      [
        "Closure Style",
        "Hand Tighten"
      ],
      [
        "Overall Height",
        "14.3"
      ],
      [
        "Maximum O.D.",
        "7.8"
      ],
      [
        "Inside Diameter",
        "3.18"
      ]
    ]
  },
  {
    "slug": "series-3910-shaker-hydrogenation-apparatus",
    "name": "Series 3910 Shaker Hydrogenation Apparatus",
    "category": "reactors/shaker-hydrogenation-apparatus",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Hydrogenation reactor system with reciprocating shaker",
    "description": "The Series 3910 combines small stirred pressure vessels with a vigorous shaking mechanism to keep hydrogen in contact with the catalyst during hydrogenation reactions at moderate pressures.",
    "features": [
      "Reciprocal shaking for gas-liquid contact",
      "Multiple small-volume vessels per run",
      "Heating capability for elevated-temperature reactions",
      "Parr safety fittings and rupture disc protection"
    ],
    "applications": [
      "Catalyst screening",
      "Hydrogenation",
      "Food & oil research",
      "Pharma R&D"
    ],
    "specs": [
      [
        "Specifications",
        "3910 series Hydrogenator"
      ],
      [
        "Base plate",
        "22 x 19 in."
      ],
      [
        "Overall height",
        "14 in."
      ],
      [
        "Bottle Sizes",
        "250 and 500 mL"
      ],
      [
        "Maximum Pressure",
        "60 psi"
      ],
      [
        "Maximum Temperature",
        "80 deg C"
      ],
      [
        "Motor Type",
        "Standard, Air, or Explosion Proof"
      ]
    ]
  },
  {
    "slug": "series-3920-shaker-hydrogenation-apparatus",
    "name": "Series 3920 Shaker Hydrogenation Apparatus",
    "category": "reactors/shaker-hydrogenation-apparatus",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Shaker Hydrogenation Apparatus Series 3920 Shaker Hydrogenation Apparatus Series 3920 Shaker Hydrogenation Apparatus Overview The Parr 3921 & 3926 Shaker Hydrogenation Apparatus both…",
    "description": "Home Reactors Shaker Hydrogenation Apparatus Series 3920 Shaker Hydrogenation Apparatus Series 3920 Shaker Hydrogenation Apparatus Overview The Parr 3921 & 3926 Shaker Hydrogenation Apparatus both utilize either a 1 L or 2 L non-reactant vessel of Borosilicate Glass, hand-blown Borosilicate Glass, or Stainless Steel. Maximum working pressures vary according to the vessel with ranges from 30 – 65 psig […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Specifications",
        "3910 series Hydrogenator"
      ],
      [
        "Base plate",
        "22 x 19 in."
      ],
      [
        "Overall height",
        "14 in."
      ],
      [
        "Bottle Sizes",
        "250 and 500 mL"
      ],
      [
        "Maximum Pressure",
        "60 psi"
      ],
      [
        "Maximum Temperature",
        "80 deg C"
      ],
      [
        "Motor Type",
        "Standard, Air, or Explosion Proof"
      ]
    ]
  },
  {
    "slug": "supercritical-co2-extraction-systems",
    "name": "Supercritical CO2 Extraction Systems",
    "category": "reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Supercritical CO2 Extraction Systems SFE 5L / 2x5L / 10L / 2x10L Learn More",
    "description": "Supercritical CO2 Extraction Systems SFE 5L / 2x5L / 10L / 2x10L Learn More",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "5400-continuous-flow-tubular-reactors",
    "name": "5400 Continuous Flow Tubular Reactors",
    "category": "reactors/tubular-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Tubular Reactors 5400 Continuous Flow Tubular Reactors 5400 Continuous Flow Tubular Reactors Overview Tubular reactors may be empty for homogenous reactions or packed with catalyst or…",
    "description": "Home Reactors Tubular Reactors 5400 Continuous Flow Tubular Reactors 5400 Continuous Flow Tubular Reactors Overview Tubular reactors may be empty for homogenous reactions or packed with catalyst or other solid particles for heterogeneous reactions. Packed reactors require upper and lower supports to hold particles in place. Upper packing often includes inert material to serve as a […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "5410-fluidizedbed-reactors",
    "name": "5410 Fluidized Bed reactors",
    "category": "reactors/tubular-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Tubular Reactors 5410 Fluidized Bed reactors 5410 Fluidized Bed reactors Overview Fluidized Bed Reactors Parr Fluidized Bed Reactors are used extensively in the chemical process…",
    "description": "Home Reactors Tubular Reactors 5410 Fluidized Bed reactors 5410 Fluidized Bed reactors Overview Fluidized Bed Reactors Parr Fluidized Bed Reactors are used extensively in the chemical process industries. The distinguishing feature of a fluidized bed reactor is that the bed of solid particles or catalyst is supported by an upflow of gas. This reactor provides easy […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Type",
        "Floor Stand"
      ],
      [
        "Vessel geometry",
        "1” ID, 36” length, with 2.5” ID, 2” length disengagement zone or custom"
      ],
      [
        "Standard Pressure MAWP rating, psi (bar)",
        "Up to 3000 psi (207 bar) based on temperature"
      ],
      [
        "Maximum operating temperature deg C at High pressure",
        "350, 600, or > 600 deg C"
      ]
    ]
  },
  {
    "slug": "5420-continuous-flow-tubular-reactor-with-touch-screen",
    "name": "5420 Continuous Flow Tubular Reactor with touch Screen",
    "category": "reactors/tubular-reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Home Reactors Tubular Reactors 5420 Continuous Flow Tubular Reactor with touch Screen 5420 Continuous Flow Tubular Reactor with touch Screen Overview Parr’s new Continuous Flow Tubular Reactor with…",
    "description": "Home Reactors Tubular Reactors 5420 Continuous Flow Tubular Reactor with touch Screen 5420 Continuous Flow Tubular Reactor with touch Screen Overview Parr’s new Continuous Flow Tubular Reactor with Touchscreen Control was designed with researchers in mind. In addition to accommodating Parr’s standard line of 5400 Tubular Reactors, it offers a compact footprint, easy set-up, and integrated touchscreen […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "gh-series",
    "name": "GH Series",
    "category": "semi-micro-analytical",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "GH Series Overview Semi-micro, 0.01 mg readability up to 101 g (GH-252) Adjustable (manual or automatic) response characteristics to help cope with the effect of drafts and vibrations Automatic self…",
    "description": "GH Series Overview Semi-micro, 0.01 mg readability up to 101 g (GH-252) Adjustable (manual or automatic) response characteristics to help cope with the effect of drafts and vibrations Automatic self calibration to maintain accuracy under temperature changes Anti-static glass breeze break with a thin evaporated metal coating Multiple weighing units: g, mg, oz, ozt, ct, […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Sensitivity drift (10 °C to 30 °C)",
        "±2 ppm/°C (when automatic self calibration is not used)"
      ],
      [
        "Weighing pan",
        "Ø90 mm"
      ]
    ]
  },
  {
    "slug": "gr-series",
    "name": "GR Series",
    "category": "semi-micro-analytical",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "GR Series Overview Semi-micro, 0.01 mg readability up to 42 g (GR-202) Handy lever on the front to open either side of the weighing chamber for quick and efficient access Small footprint of 249 mm by…",
    "description": "GR Series Overview Semi-micro, 0.01 mg readability up to 42 g (GR-202) Handy lever on the front to open either side of the weighing chamber for quick and efficient access Small footprint of 249 mm by 330 mm to save space Adjustable (manual or automatic) response characteristics to help cope with the effect of drafts […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Sensitivity drift (10 °C to 30 °C)",
        "±2 ppm/˚C (when automatic self calibration is not used)"
      ],
      [
        "Weighing pan",
        "Ø85 mm"
      ]
    ]
  },
  {
    "slug": "hr-i-series",
    "name": "HR-i Series",
    "category": "semi-micro-analytical",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "HR-i Series Overview Semi-micro, 0.01 mg readability up to 51 g (HR-202i) Adjustable response characteristics to help cope with the effect of drafts and vibrations Anti-static glass breeze break with…",
    "description": "HR-i Series Overview Semi-micro, 0.01 mg readability up to 51 g (HR-202i) Adjustable response characteristics to help cope with the effect of drafts and vibrations Anti-static glass breeze break with a thin evaporated metal coating Multiple weighing units: g, mg, oz, ozt, ct, mom, dwt, grain (either tael or tola can be added upon request) […]",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Sensitivity drift (10 °C to 30 °C)",
        "±2 ppm/°C"
      ],
      [
        "Weighing pan",
        "Ø90 mm"
      ]
    ]
  },
  {
    "slug": "laboratory-sieve-shaker",
    "name": "Laboratory Sieve Shaker",
    "category": "sieving",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "Laboratory Sieve Shaker Sieve Shaker ASM 200 Learn More Analytical Screening Machine LAVIB Learn More Sieve Shaker ASM 400 Learn More Large Analytical Screening Machine – Gas Learn More",
    "description": "Laboratory Sieve Shaker Sieve Shaker ASM 200 Learn More Analytical Screening Machine LAVIB Learn More Sieve Shaker ASM 400 Learn More Large Analytical Screening Machine – Gas Learn More",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "split-tub-furnace",
    "name": "Split Tube Furnaces | Precision & High-Performance Solutions",
    "category": "tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Experience Elite Furnaces' split tube furnaces—engineered for precision heating, reliable performance, and versatility in demanding industrial applications.",
    "description": "Experience Elite Furnaces' split tube furnaces—engineered for precision heating, reliable performance, and versatility in demanding industrial applications.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "ad-fortis-fz-wp-fx-wpseries",
    "name": "A&D Fortis FZ(-WP)/FX(-WP) Series",
    "category": "standard-level-analytical",
    "brand": "A&D Company",
    "origin": "Japan",
    "tagline": "Explore the A&D Fortis FZ(-WP)/FX(-WP) Series precision balances, designed for accurate weighing, reliable performance, and efficient laboratory applications.",
    "description": "Explore the A&D Fortis FZ(-WP)/FX(-WP) Series precision balances, designed for accurate weighing, reliable performance, and efficient laboratory applications.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Minimum weight *iii (typical)",
        "140 mg"
      ],
      [
        "Stabilization time (typical when set to FAST)",
        "Approx. 2 secs"
      ],
      [
        "Weighing pan size",
        "Ø90 mm"
      ],
      [
        "External dimensions",
        "198 (W) × 294 (D) × 315 (H) mm (with the large breeze break)"
      ],
      [
        "Net weight",
        "FZ: approx. 3.9 kg | FX: approx. 3.5 kg"
      ]
    ]
  },
  {
    "slug": "tga-1500-thermogravimetric-analyzer",
    "name": "TGA 1500 Thermogravimetric Analyser",
    "category": "tga-proximate-analyzers",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Compact thermogravimetric analyser for routine proximate analysis",
    "description": "The TGA 1500 brings thermogravimetric proximate analysis to laboratories that need a compact, economical instrument without compromising on repeatability.",
    "features": [
      "Compact benchtop footprint",
      "Single-sample proximate analysis",
      "Straightforward operation for routine labs",
      "Low maintenance furnace and balance design"
    ],
    "applications": [
      "Fuel testing laboratories",
      "Quality control",
      "Educational institutes"
    ],
    "specs": [
      [
        "Temperature",
        "Ambient to 1100 °C"
      ],
      [
        "Temperature Control Precision",
        "±2% (or) ±2deg C"
      ],
      [
        "Accuracy",
        "±2deg C of tolerance limit"
      ],
      [
        "Ramp Rate",
        "10deg C /minute to 50deg C /minute"
      ],
      [
        "Balance",
        "Integrated balance"
      ],
      [
        "Resolution",
        "0.0001g (0.1mg)"
      ],
      [
        "Readability",
        "0.0001g (0.1mg)"
      ],
      [
        "Sample Size",
        "up to 5 grams (Higher range can be offered on request)"
      ],
      [
        "Number of Samples",
        "19 Samples +1 Reference"
      ],
      [
        "Number of Carousels",
        "one for Crucibles and Crucible lids"
      ],
      [
        "Carousel Material",
        "The carousels are made of special material which are not susceptible to warping under high temperature stress"
      ],
      [
        "Weighing Precision",
        "0.02% RSD (on inert Samples)"
      ],
      [
        "Gas Connection",
        "Oxygen & Nitrogen, Compressed Air"
      ],
      [
        "Power Supply",
        "230V AC ± 10%; 50/60Hz/15A"
      ]
    ]
  },
  {
    "slug": "tga-3000-thermogravimetric-analyzer",
    "name": "TGA 3000 Thermogravimetric Analyser",
    "category": "tga-proximate-analyzers",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Reliable and fast proximate analysis by TGA",
    "description": "The TGA 3000 performs rapid proximate analysis — moisture, volatile matter, fixed carbon and ash — by thermogravimetry in a single, controlled heating program, replacing slow conventional furnace methods.",
    "features": [
      "Complete proximate analysis in a single run",
      "Fast, repeatable furnace programming",
      "Applicable to coal, coke, biomass and other solid fuels",
      "Result calculation and reporting software",
      "Now manufactured in India by Sylab Scientific"
    ],
    "applications": [
      "Coal & coke",
      "Biomass",
      "Refuse-derived fuels",
      "Cement"
    ],
    "specs": [
      [
        "Furnace Temperature Range",
        "Ambient to 1100 °C"
      ],
      [
        "Temperature Control Precision",
        "±2% (or) ±2deg C"
      ],
      [
        "Accuracy",
        "±2deg C of tolerance limit"
      ],
      [
        "Ramp Rate",
        "10deg C /minute to 50deg C /minute"
      ],
      [
        "Balance",
        "Integrated balance"
      ],
      [
        "Resolution",
        "0.0001g (0.1mg)"
      ],
      [
        "Readability",
        "0.0001g (0.1mg)"
      ],
      [
        "Sample Size",
        "up to 5 grams (Higher range can be offered on request)"
      ],
      [
        "Number of Samples",
        "19 Samples +1 Reference"
      ],
      [
        "Carousel Material",
        "The carousels are made of special material which are not susceptible to warping under high temperature stress"
      ]
    ]
  },
  {
    "slug": "tube-furnace-single-zone-1200c-to-1850-c",
    "name": "TSH12 Single Zone Tube Furnace | Lab Tube Furnace | Elite",
    "category": "tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "High-precision tube furnace with 1500°C max temp, silicon carbide heaters, PID controller & custom work tubes.",
    "description": "High-precision tube furnace with 1500°C max temp, silicon carbide heaters, PID controller & custom work tubes. Ideal for lab thermal applications. Call now!",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "multi-zone-tube-furnaces",
    "name": "Multi Zone Tube Furnaces",
    "category": "tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Multi-Zone Tube Furnaces TMH12 Maximum Furnace Temperature: 1200°C Work Tube Internal Diameter (mm): 38 to 100 Heated Lengths (mm): 500 to 940 Orientation: Horizontal Learn More TMV12 Maximum Furnace…",
    "description": "Multi-Zone Tube Furnaces TMH12 Maximum Furnace Temperature: 1200°C Work Tube Internal Diameter (mm): 38 to 100 Heated Lengths (mm): 500 to 940 Orientation: Horizontal Learn More TMV12 Maximum Furnace Temperature: 1200°C Work Tube Internal Diameter (mm): 38 to 100 Heated Lengths (mm): 500 to 940 Orientation: Vertical Learn More TMH15 Maximum Furnace Temperature: 1500°C Work […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "single-zone-tube-furnaces",
    "name": "Single Zone Tube Furnaces",
    "category": "tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Single-Zone Tube Furnaces TSH12 Maximum Furnace Temperature: 1200°C Work Tube Internal Diameter (mm): 25 to 100 Heated Lengths (mm): 250 to 940 Orientation: Horizontal Learn More TSV12 Maximum…",
    "description": "Single-Zone Tube Furnaces TSH12 Maximum Furnace Temperature: 1200°C Work Tube Internal Diameter (mm): 25 to 100 Heated Lengths (mm): 250 to 940 Orientation: Horizontal Learn More TSV12 Maximum Furnace Temperature: 1200°C Work Tube Internal Diameter (mm): 25 to 100 Heated Lengths (mm): 250 to 940 Orientation: Vertical Learn More TSH14 Maximum Furnace Temperature: 1400°C Work […]",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "split-tube-furnace-single-zone-tshh-12",
    "name": "Split Tube Furnace",
    "category": "tube-furnaces/split-tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Split-tube design for easy sample access along the hot zone",
    "description": "A split tube furnace that opens along its length for quick tube and sample access, supporting a wide variety of atmosphere and vacuum experiments over long hot zones.",
    "features": [
      "Split-body design for fast access",
      "Long uniform hot zone",
      "Single and multi-zone configurations",
      "Vacuum and controlled-atmosphere variants available"
    ],
    "applications": [
      "Tube experiments",
      "Atmosphere-controlled heating",
      "Materials research"
    ],
    "specs": []
  },
  {
    "slug": "split-tube-furnace-single-zone-tsvh-17",
    "name": "TSVH17",
    "category": "tube-furnaces/split-tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "description": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "split-tube-furnaces-single-zone-tshh-11",
    "name": "TSHH11",
    "category": "tube-furnaces/split-tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "description": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "split-tube-furnaces-single-zone-tsvh-12",
    "name": "TSVH12",
    "category": "tube-furnaces/split-tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "description": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "vertical-split-tube-furnace-single-zone-tsvh-11",
    "name": "TSVH11",
    "category": "tube-furnaces/split-tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "description": "The TSHH11 split tube furnace range achieves first class performance due to high-quality heating elements, thermal insulation and low energy consumption.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "vacuum-tube-furnaces-tshvc-12",
    "name": "TSHvc12",
    "category": "tube-furnaces/vacuum-tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Elite Thermal Vacuum Tube Furnaces come with an integrated vacuum system for precise heating in a controlled environment.",
    "description": "Elite Thermal Vacuum Tube Furnaces come with an integrated vacuum system for precise heating in a controlled environment.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "vacuum-tube-furnaces-tshvc-15",
    "name": "TSHvc15",
    "category": "tube-furnaces/vacuum-tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "The TSHVC15 is a Horizontal tube furnace with integral vacuum equipment for low vacuum use with an ultimate vacuum level 10 ¯5 mbar nominal.",
    "description": "The TSHVC15 is a Horizontal tube furnace with integral vacuum equipment for low vacuum use with an ultimate vacuum level 10 ¯5 mbar nominal.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "vacuum-tube-furnaces-single-zone-1200c-1500-c",
    "name": "Vacuum Tube Furnaces | Controlled Atmosphere | Elite Furnaces",
    "category": "tube-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "Vacuum Tube Furnaces TSHVC12 & TSHVC15 offer precise heating up to 1500°C with flexible tube sizes & horizontal/vertical orientation for reliable industry use.",
    "description": "Vacuum Tube Furnaces TSHVC12 & TSHVC15 offer precise heating up to 1500°C with flexible tube sizes & horizontal/vertical orientation for reliable industry use.",
    "features": [],
    "applications": [],
    "specs": []
  },
  {
    "slug": "electric-fluxer",
    "name": "Electric Fluxer",
    "category": "xrf-icp-sample-preparation-equipment",
    "brand": "",
    "origin": "",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Method",
        "Fusion, stirring, mixing and homogenization"
      ],
      [
        "Applications",
        "Geological samples, cement, minerals, slag, ceramics, oxides, glass, metals, ferroalloys, sulphides, fluorides, and alloys"
      ],
      [
        "Programs",
        "50 independent editable programs"
      ],
      [
        "Maximum consumption",
        "1500W"
      ],
      [
        "Power",
        "220V – 15A"
      ],
      [
        "Controller",
        "PC"
      ],
      [
        "Cooling system",
        "Closed circuit with a 300 W chiller / open circuit via external feeding 1.5 LPM"
      ],
      [
        "Work frequency",
        "130..160 KHz"
      ],
      [
        "Programmable elements",
        "Crucible stirring system / crucible stirring angle / speed and pouring angle / revolutions system for the solutions / crucible and mold cooling down system by fan"
      ],
      [
        "Temperature control",
        "400 to 1200ºC limited by software"
      ],
      [
        "Software",
        "Intuitive, with graphics. Diagnosis and settings"
      ],
      [
        "Accessories",
        "Platinum and zirconium crucibles, platinum molds"
      ],
      [
        "Dimensions",
        "42 cm (high) x 35.5 cm (long) x 50 cm (wide)"
      ],
      [
        "Approximate weight",
        "43kg"
      ]
    ]
  },
  {
    "slug": "eqp-30-manual-pellet-press",
    "name": "EQP-30 Manual Pellet Press",
    "category": "xrf-icp-sample-preparation-equipment",
    "brand": "",
    "origin": "",
    "tagline": "The Hydraulic Manual Pellet Press EQP-30 has been specially designed to achieve high quality pellets, homogeneous and stable.",
    "description": "The Hydraulic Manual Pellet Press EQP-30 has been specially designed to achieve high quality pellets, homogeneous and stable.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Applications Method",
        "Glass, cement, plaster, ceramics, minerals, silicates, slags"
      ],
      [
        "Prospect",
        "Cement industry, metallurgical in companies, Geology and Mineralogy, ceramics"
      ],
      [
        "Maximum Pressure",
        "30 t"
      ],
      [
        "Sample Diameter",
        "Ø 32 / 40 mm. (other sizes and shapes on demand"
      ],
      [
        "Consumables",
        "Aluminium cups Ø 32 - 40 mm"
      ],
      [
        "Dimensions",
        "50cm (height) x 22cm (width) x 23cm (depth)"
      ],
      [
        "Approximate Weight",
        "20 Kg"
      ]
    ]
  },
  {
    "slug": "manual-pellet-press",
    "name": "Manual Pellet Press",
    "category": "xrf-icp-sample-preparation-equipment",
    "brand": "",
    "origin": "",
    "tagline": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of…",
    "description": "CHNS-O ELEMENTAL COMBUSTION SYSTEM The elemental analyzer CHNS-O Classic 4024 Model is an instrument for organic elemental analysis based on the Dumas method for the simultaneous determination of CHNS-O elements.",
    "features": [],
    "applications": [],
    "specs": [
      [
        "Method",
        "Pressure"
      ],
      [
        "Applications",
        "Cement industry, metallurgy, recycling plants, geology and mineralogy, ceramics, others"
      ],
      [
        "Maximum pressure",
        "20 tons"
      ],
      [
        "Diameter of the pellets",
        "Ø 32 / 40 mm (other sizes on demand)"
      ],
      [
        "Consumables",
        "Aluminium cups Ø 32 / 40 mm, binding wax-c"
      ],
      [
        "Dimensions",
        "50 cm (high) x 22 cm (long) x 23 cm (wide)"
      ],
      [
        "Approximate weight",
        "20 kg"
      ]
    ]
  },
  {
    "slug": "carbon-sulfur-analyzers",
    "name": "Carbon & Sulfur Analyzers",
    "category": "elemental-analyzers/carbon-and-sulfur-analyzers",
    "brand": "NCS Testing Technology",
    "origin": "Germany",
    "tagline": "High-frequency infrared carbon & sulfur determination",
    "description": "Carbon and sulfur analysers for inorganic materials, using high-frequency combustion and infrared detection to determine total carbon and sulfur in metals, ores, ceramics and geological samples.",
    "features": [
      "High-frequency induction furnace combustion",
      "Infrared detection of CO₂ and SO₂",
      "Suitable for metals, ores, refractories and geological samples",
      "Rapid analysis cycle with automatic baseline correction"
    ],
    "applications": [
      "Steel & iron",
      "Ores & minerals",
      "Cement",
      "Refractories"
    ],
    "specs": []
  },
  {
    "slug": "chns-o-analyzers",
    "name": "CHNS/O Analyzers",
    "category": "elemental-analyzers/chns-analyzers",
    "brand": "NC Technologies",
    "origin": "Italy",
    "tagline": "High-performance elemental analysers for organic compounds",
    "description": "CHNS/O analysers for organic elemental analysis, available in single-furnace and dual-furnace configurations, delivering fast and precise carbon, hydrogen, nitrogen, sulfur and oxygen determination.",
    "features": [
      "Single and dual furnace configurations",
      "CHNS and separate oxygen determination",
      "High-temperature combustion for difficult matrices",
      "Suitable for soils, fertilisers, food, pharma and polymers"
    ],
    "applications": [
      "Soil & fertiliser testing",
      "Food & feed",
      "Pharmaceuticals",
      "Polymers"
    ],
    "specs": []
  },
  {
    "slug": "eatc16",
    "name": "EATC16 Ash Fusion Analyser",
    "category": "ash-fusion-analyzers",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Compact ash fusion temperature characterisation",
    "description": "The EATC16 provides ash fusion temperature measurement in a compact format for laboratories that need reliable, standard-compliant ash behaviour characterisation.",
    "features": [
      "Standard-compliant ash fusion measurement",
      "Compact benchtop design",
      "Automatic temperature logging",
      "Easy sample loading and cone preparation"
    ],
    "applications": [
      "Fuel laboratories",
      "Power generation",
      "Research institutes"
    ],
    "specs": []
  },
  {
    "slug": "ash-fusion-determinator-eatc17",
    "name": "Ash Fusion Determinator - EATC17",
    "category": "ash-fusion-analyzers",
    "brand": "Elite Furnaces / Sylab",
    "origin": "UK / India",
    "tagline": "High-temperature automatic ash fusion determinator for coal and biomass",
    "description": "The EATC17 Ash Fusion Determinator is designed for accurate, standard-compliant determination of ash fusibility characteristics in coal, coke, and biomass fuels up to 1600°C with automated optical imaging.",
    "features": [
      "Automated optical image recording and thermal profiling",
      "Compliant with ISO 5416, ASTM D1857, and DIN 51730",
      "Programmable multi-ramp heating up to 1600°C",
      "Oxidizing and reducing atmosphere gas controls"
    ],
    "applications": [
      "Thermal Power Stations",
      "Coal Quality Testing Laboratories",
      "Biomass & Waste-to-Energy Plants"
    ],
    "specs": [
      ["Maximum Temperature", "1600 °C"],
      ["Atmosphere Control", "Reducing (CO/CO2) and Oxidizing (Air)"],
      ["Image Capture", "High-Resolution CCD with Digital Analysis"],
      ["Test Standards", "ASTM D1857, ISO 5416, BS 1016"]
    ]
  },
  {
    "slug": "high-pressure-chambers",
    "name": "Very High Pressure Chambers",
    "category": "denatec",
    "brand": "DENATEC",
    "origin": "Germany / India",
    "tagline": "Extreme pressure containment chambers rated up to 10,000+ bar",
    "description": "DENATEC very high pressure chambers are forged and engineered for ultra-high isostatic and hydrostatic pressure testing, research into phase transitions, and extreme-environment material qualification.",
    "features": [
      "Working pressures from 1,000 bar to 10,000+ bar",
      "Forged high-strength alloy construction with pre-stressed wire or shrink ring designs",
      "Automated quick-opening breech or thread closures with safety interlocks",
      "Integrated heating, cooling, and instrumentation feedthroughs"
    ],
    "applications": [
      "Aerospace Component Qualification",
      "Deep-Sea Hyperbaric Simulation",
      "Ultra-High Pressure Material Synthesis",
      "Defense & Subsea Systems"
    ],
    "specs": [
      ["Pressure Range", "Up to 10,000 bar (145,000 psi)"],
      ["Internal Volumes", "100 mL to 250 Litres"],
      ["Operating Temperature", "-40 °C to +300 °C"],
      ["Closure Type", "Hydraulic Quick-Clamp / Segmented Breech"]
    ]
  },
  {
    "slug": "pressure-test-bench",
    "name": "Pressure Test Bench",
    "category": "denatec",
    "brand": "DENATEC",
    "origin": "Germany / India",
    "tagline": "Automated hydrostatic and pneumatic test benches for industrial validation",
    "description": "Turnkey pressure test benches designed for production testing, proof testing, burst testing, and cycle fatigue testing of valves, pipes, hoses, pressure vessels, and hydraulic components.",
    "features": [
      "Hydrostatic and gas proof-testing and burst-testing capabilities",
      "PLC automation with digital data logging and calibration certificates",
      "Armored safety enclosure with bulletproof poly-carbonate viewing panels",
      "Rapid fill and high-pressure intensifier pumps"
    ],
    "applications": [
      "Valve & Actuator Manufacturing",
      "Hose & Coupling Proof Testing",
      "Oil & Gas Subsea Tree Validation",
      "Automotive Fuel System Quality Control"
    ],
    "specs": [
      ["Test Medium", "Water, Mineral Oil, Nitrogen, or Helium"],
      ["Max Test Pressure", "Up to 7,000 bar"],
      ["Control System", "Touchscreen PLC with automated test cycles"],
      ["Safety Classification", "Class IV Enclosure with Door Interlocks"]
    ]
  },
  {
    "slug": "pressure-testing-facility",
    "name": "Pressure Testing Facilities",
    "category": "denatec",
    "brand": "DENATEC",
    "origin": "Germany / India",
    "tagline": "Turnkey hyperbaric testing centres and large-scale pressure pits",
    "description": "Complete engineered pressure test facilities incorporating armored test pits, high-capacity fluid handling, hyperbaric simulation chambers, remote control bunkers, and video surveillance systems.",
    "features": [
      "Full turnkey facility design from civil test pit to control room",
      "Multi-channel sensor acquisition for strain, displacement, temperature, and pressure",
      "Automated depressurization and safety venting circuits",
      "Tailored for large subsea assemblies and defense hardware"
    ],
    "applications": [
      "Naval & Defense Certification",
      "Subsea Equipment Testing (API 6A / 17D)",
      "High-Pressure Pipeline Infrastructure",
      "Aerospace Pressure Vessels"
    ],
    "specs": [
      ["Chamber Sizes", "Up to 3.5 m diameter × 8 m length"],
      ["Simulated Depth", "Up to 10,000 meters sea water (1,000 bar)"],
      ["Data Acquisition", "Up to 64 high-speed channels"],
      ["Safety Compliance", "ASME Section VIII, CE PED, DIN standards"]
    ]
  },
  {
    "slug": "under-water-applications",
    "name": "Underwater Applications & Hyperbaric Systems",
    "category": "denatec",
    "brand": "DENATEC",
    "origin": "Germany / India",
    "tagline": "Deep-sea environmental simulation and hyperbaric qualification chambers",
    "description": "Specialized hyperbaric testing systems engineered to simulate benthic ocean floor conditions, including hydrostatic pressure up to 1,200 bar, controlled temperature from 2°C to 40°C, and ocean salinity.",
    "features": [
      "Realistic abyssal depth simulation up to 12,000 meters",
      "Multi-core electrical and fiber-optic feedthrough penetrators",
      "Continuous long-term immersion cycle and fatigue testing",
      "Temperature regulated jackets for full arctic to equatorial water profiling"
    ],
    "applications": [
      "Oceanographic Research Equipment",
      "Autonomous Underwater Vehicles (AUVs) & ROVs",
      "Subsea Cables, Connectors & Sensors",
      "Marine Geotechnology & Benthic Samplers"
    ],
    "specs": [
      ["Simulated Water Depth", "0 to 12,000 meters (1,200 bar)"],
      ["Temperature Range", "+2 °C to +50 °C chilled/heated"],
      ["Penetrations", "Coaxial, optical, high-current, and fluid lines"],
      ["Vessel Material", "Forged duplex stainless steel or nickel alloys"]
    ]
  },
  {
    "slug": "continuous-flow-tubular-reactors-5400",
    "name": "5400 Continuous Flow Tubular Reactors",
    "category": "reactors",
    "brand": "Parr Instrument Company",
    "origin": "USA",
    "tagline": "Continuous-flow high-pressure tubular reactor systems",
    "description": "The 5400 series continuous flow tubular reactors allow uninterrupted high-pressure, high-temperature reactions for process development — from biofuel research to gas-to-liquid studies.",
    "features": [
      "Continuous feed and product withdrawal",
      "High-pressure, high-temperature operation",
      "Modular preheater and reactor tube options",
      "A touch-screen variant (5420) available for direct control"
    ],
    "applications": [
      "Biofuel & alternative fuel research",
      "GTL systems",
      "Corrosion studies",
      "Catalysis"
    ],
    "specs": []
  },
  {
    "slug": "vibratory-sieve-shaker",
    "name": "Vibratory Sieve Shaker",
    "category": "sieving",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "Efficient particle size analysis by vibratory sieving",
    "description": "A vibratory sieve shaker for accurate particle size determination of dry and wet samples, delivering reproducible sieving action suitable for routine and research laboratories.",
    "features": [
      "Adjustable amplitude and sieving time",
      "Stacks of test sieves up to several levels",
      "Suitable for powders, granulates and ores",
      "Quiet, low-maintenance operation"
    ],
    "applications": [
      "Minerals & ores",
      "Cement",
      "Agriculture",
      "Powder metallurgy"
    ],
    "specs": []
  },
  {
    "slug": "jaw-crusher",
    "name": "Jaw Crusher",
    "category": "milling-pulverising",
    "brand": "SIEBTECHNIK TEMA",
    "origin": "Germany",
    "tagline": "Primary crushing of hard materials for laboratory sample prep",
    "description": "A robust laboratory jaw crusher for the primary size reduction of hard and brittle materials — ores, clinker, slag and similar — producing a uniform feed for subsequent milling.",
    "features": [
      "Crushing of hard, brittle materials",
      "Uniform output particle size",
      "Wear-resistant crushing surfaces",
      "Easy cleaning between samples to avoid cross-contamination"
    ],
    "applications": [
      "Mining & geology",
      "Cement",
      "Metallurgy",
      "Environmental testing"
    ],
    "specs": []
  },
  {
    "slug": "hydraulic-pellet-press",
    "name": "Hydraulic Pellet Press",
    "category": "xrf-icp-sample-preparation-equipment",
    "brand": "Sylab",
    "origin": "France / India",
    "tagline": "Consistent pellets for XRF and ICP sample presentation",
    "description": "A hydraulic press producing uniform, defect-free pellets of powdered samples for XRF analysis, with manual and semiautomatic variants including the Semiautomatic Pellet Ultrapress.",
    "features": [
      "Reproducible pressing force",
      "Manual, semiautomatic and Ultrapress configurations",
      "Pellet sizes for standard XRF sample holders",
      "Simple die and mould changes"
    ],
    "applications": [
      "XRF sample preparation",
      "Cement",
      "Mining",
      "Geological survey"
    ],
    "specs": []
  },
  {
    "slug": "chamber-furnace",
    "name": "Laboratory Chamber Furnace",
    "category": "chamber-furnaces",
    "brand": "Elite Thermal Systems",
    "origin": "UK",
    "tagline": "General-purpose laboratory chamber furnace",
    "description": "A general-purpose chamber furnace for routine heat treatment, ashing and determinations in laboratories — now also manufactured in India by Sylab Scientific following Elite Thermal's acquisition.",
    "features": [
      "Uniform chamber temperature",
      "Programmable heating options",
      "Bottom-loading and light industrial variants available",
      "Durable refractory lining for long service life"
    ],
    "applications": [
      "Ashing",
      "Heat treatment",
      "Ceramics",
      "Quality control"
    ],
    "specs": []
  },
  {
    "slug": "certified-reference-materials",
    "name": "Certified & Standard Reference Materials",
    "category": "certified-and-standard-reference-materials",
    "brand": "Elemental Microanalysis",
    "origin": "UK",
    "tagline": "Standards and consumables for elemental analysers of every brand",
    "description": "A comprehensive range of certified and standard reference materials plus consumables for elemental analysers — supporting accurate calibration and validation regardless of instrument brand.",
    "features": [
      "Certified reference materials for CHNS/O and C&S analysis",
      "Standards for coal, coke, soils, foods and more",
      "Consumables: crucibles, boats, filters and reagents",
      "Compatible with all major analyser brands"
    ],
    "applications": [
      "Calibration & QA/QC",
      "Accredited laboratories",
      "Routine analysis"
    ],
    "specs": []
  },
  {
    "slug": "laboratory-consumables-and-labware",
    "name": "Laboratory Consumables & Labware",
    "category": "laboratory-accessories",
    "brand": "Orbit Technologies",
    "origin": "India",
    "tagline": "Labware, pumps, samplers and containers from world-renowned companies",
    "description": "An extensive range of laboratory accessories including screw joints and components, tubing, films and tiles, temperature measurement accessories, vessels and distillation equipment, pumps, samplers and containers.",
    "features": [
      "Screw joints and components up to 5 bar and EX-protection variants",
      "Tubing, films and PTFE laboratory components",
      "Vessels and distillation equipment",
      "Pumps, samplers and sample containers"
    ],
    "applications": [
      "Everyday laboratory operations",
      "Sampling",
      "Distillation",
      "General labware"
    ],
    "specs": []
  }
];

/** Products in a category; deep includes all subcategory levels. */
export function productsByCategory(path: string, opts?: { deep?: boolean }): Product[] {
  const deep = opts?.deep ?? true;
  if (!deep) return products.filter((p) => p.category === path);
  return products.filter((p) => p.category === path || p.category.startsWith(path + "/"));
}

export function getProduct(slug: string): Product | null {
  return products.find((p) => p.slug === slug) ?? null;
}

/** Stable catalogue code derived from the product category and slug. */
export function productCode(p: Product): string {
  const prefix = p.category
    .split(/[\/-]/)
    .filter(Boolean)
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 3)
    .toUpperCase();
  let h = 7;
  for (let i = 0; i < p.slug.length; i++) h = (h * 31 + p.slug.charCodeAt(i)) >>> 0;
  return "OT-" + prefix + "-" + (1000 + (h % 9000));
}
