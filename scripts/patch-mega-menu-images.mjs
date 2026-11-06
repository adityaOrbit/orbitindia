import fs from "node:fs";
import path from "node:path";

const CATS_PATH = path.resolve("src/data/categories.ts");
let content = fs.readFileSync(CATS_PATH, "utf8");

// Add images to analytical-instruments if not present
if (!content.includes('id: "analytical-instruments",\n    title: "Analytical Instruments",\n    path: "analytical-instruments",\n    columns: [\n      [\n        {\n          title: "Calorimeters"')) {
  console.log("Locating analytical-instruments");
}

// 1. Replace sample-prep image
content = content.replace(
  `    images: [
      {
        src: "/images/products/ofcu.jpg",
        alt: "Sample Preparation Equipment",
        label: "Precision Sample Milling & Sizing",
      },
    ],`,
  `    images: [
      {
        src: "/images/orbit/Manual-Pellet-Press.jpg",
        alt: "Sample Preparation Equipment",
        label: "Precision Sample Milling & Sizing",
      },
    ],`
);

// 2. Replace furnaces image
content = content.replace(
  `    images: [
      {
        src: "/images/products/ecs-8024.jpg",
        alt: "Laboratory Furnaces",
        label: "High-Temperature Furnaces up to 1800°C",
      },
    ],`,
  `    images: [
      {
        src: "/images/orbit/high-temperature-chamber-furnaces.jpg",
        alt: "Laboratory Furnaces",
        label: "High-Temperature Furnaces up to 1800°C",
      },
    ],`
);

// 3. Replace gas-generators image
content = content.replace(
  `    images: [
      {
        src: "/images/products/ht-if2000g-hdbm.jpg",
        alt: "Gas Generators",
        label: "High-Purity Laboratory Gas Generators",
      },
    ],`,
  `    images: [
      {
        src: "/images/orbit/Air-Compressor-1.jpg",
        alt: "Gas Generators",
        label: "High-Purity Laboratory Gas Generators",
      },
    ],`
);

// 4. Replace precision-balances image
content = content.replace(
  `    images: [
      {
        src: "/images/products/ht-if2000g-hdbm.jpg",
        alt: "Precision Balances",
        label: "Analytical & Precision Weighing",
      },
      {
        src: "/images/products/tga-3000.jpg",
        alt: "Micro Balances",
        label: "High Resolution Balances",
      },
    ],`,
  `    images: [
      {
        src: "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg",
        alt: "Precision Balances",
        label: "Analytical & Precision Weighing",
      },
      {
        src: "/images/orbit/ad-fortis.jpg",
        alt: "Micro Balances",
        label: "High Resolution Balances",
      },
    ],`
);

// 5. Replace labware image
content = content.replace(
  `    images: [
      {
        src: "/images/products/ht-if2000g-hdbm.jpg",
        alt: "Labware & Accessories",
        label: "PTFE & Borosilicate Laboratory Components",
      },
    ],`,
  `    images: [
      {
        src: "/images/orbit/CSBoxTubeCatalogue.jpg",
        alt: "Labware & Accessories",
        label: "PTFE & Borosilicate Laboratory Components",
      },
    ],`
);

// 6. Replace crms image
content = content.replace(
  `    images: [
      {
        src: "/images/products/ht-if2000g-hdbm.jpg",
        alt: "Reference Materials",
        label: "NABL & NIST Traceable Standards",
      },
      {
        src: "/images/products/6050-automatic-pc-based-calorimeter.jpg",
        alt: "Combustion Accessories",
        label: "Parr Oxygen Vessels & Electrodes",
      },
    ],`,
  `    images: [
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
    ],`
);

// Add images to analytical-instruments if not present
const analyticalAnchor = `            { label: "Oxygen Flask Combustion Unit (OFCU)", path: "other-instruments" },
          ],
        },
      ],
    ],
  },
  {
    id: "reactor-systems",`;

const analyticalWithImages = `            { label: "Oxygen Flask Combustion Unit (OFCU)", path: "other-instruments" },
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
    id: "reactor-systems",`;

content = content.replace(analyticalAnchor, analyticalWithImages);

// Add images to reactor-systems if not present
const reactorAnchor = `            { label: "Underwater Applications", path: "products/under-water-applications" },
          ],
        },
      ],
    ],
  },
  {
    id: "sample-prep",`;

const reactorWithImages = `            { label: "Underwater Applications", path: "products/under-water-applications" },
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
        src: "/images/orbit/Series-4520-1-2-L-General-Purpose-Bench-top-Reactors-img.jpg",
        alt: "Parr Benchtop Autoclave",
        label: "General Purpose Benchtop Autoclaves",
      },
    ],
  },
  {
    id: "sample-prep",`;

content = content.replace(reactorAnchor, reactorWithImages);

fs.writeFileSync(CATS_PATH, content, "utf8");
console.log("Successfully patched mega menu images in categories.ts");
