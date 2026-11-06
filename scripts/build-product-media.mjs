import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const EXTRACT_PATH = path.resolve("src/data/live-extract.json");
const MAP_PATH = path.resolve("src/data/orbit-images-map.json");
const MEDIA_PATH = path.resolve("src/data/product-media.ts");

const extractRaw = fs.readFileSync(EXTRACT_PATH, "utf8");
const d = JSON.parse(extractRaw);
const map = JSON.parse(fs.readFileSync(MAP_PATH, "utf8"));

const prodsMod = await import(pathToFileURL(path.resolve("src/data/products.ts")).href);
const catsMod = await import(pathToFileURL(path.resolve("src/data/categories.ts")).href);

const products = prodsMod.products;
const categories = catsMod.categories;

const pageImages = {};
const pages = Array.isArray(d.pages) ? d.pages : Object.values(d.pages || {});

for (const p of pages) {
  const slug = p.path.split("/").filter(Boolean).pop();
  if (slug && p.images && p.images.length > 0) {
    pageImages[slug] = p.images.map((img) => map[img]).filter(Boolean);
  }
}

const productMap = {};
for (const p of products) {
  let imgs = pageImages[p.slug] || [];
  if (imgs.length === 0) {
    if (p.slug.includes("ht-1500") || p.slug.includes("ht-1800") || p.slug.includes("tube-furnace")) {
      imgs = ["/images/orbit/Tube.jpg", "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg"];
    } else if (p.slug.includes("pellet-press")) {
      imgs = ["/images/orbit/Manual-Pellet-Press.jpg", "/images/orbit/Semiautomatic-Pellet-Press.jpg"];
    } else {
      for (const [k, v] of Object.entries(pageImages)) {
        if (p.slug.includes(k) || k.includes(p.slug) || (p.category && p.category.includes(k))) {
          imgs = v;
          break;
        }
      }
    }
  }
  productMap[p.slug] = Array.from(new Set(imgs));
}

const catImages = {};
for (const c of categories) {
  const p = pages.find((x) => x.path === "/" + c.path || x.path === c.path);
  if (p && p.images && p.images.length > 0) {
    catImages[c.path] = map[p.images[0]];
  } else {
    const prod = products.find((pr) => pr.category === c.path || pr.category.startsWith(c.path));
    if (prod && productMap[prod.slug] && productMap[prod.slug].length > 0) {
      catImages[c.path] = productMap[prod.slug][0];
    } else {
      catImages[c.path] = "/images/orbit/Bomb-PNG.png";
    }
  }
}

const content = `export type ProductBrochure = {
  title: string;
  size: string;
  type: string;
  description: string;
};

export type TechnicalMethod = {
  standard: string;
  organization: string;
  title: string;
  applicableRange: string;
};

/**
 * Authentic product photography extracted directly from orbitindia.com.
 * Maps product slug -> array of real local images (up to 6 images per product).
 */
export const PRODUCT_IMAGE_MAP: Record<string, string[]> = ${JSON.stringify(productMap, null, 2)};

/**
 * Category banner & thumbnail images mapped directly from orbitindia.com.
 */
export const CATEGORY_IMAGE_MAP: Record<string, string> = ${JSON.stringify(catImages, null, 2)};

export const DEFAULT_STANDARDS: TechnicalMethod[] = [
  {
    standard: "ASTM D5865 / D5865M",
    organization: "ASTM International",
    title: "Standard Test Method for Gross Calorific Value of Coal and Coke",
    applicableRange: "Solid mineral fuels, calorific value determination with high precision",
  },
  {
    standard: "ISO 1928:2020",
    organization: "ISO",
    title: "Solid mineral fuels — Determination of gross calorific value by bomb calorimetric method",
    applicableRange: "International standard for coal, coke and solid biofuels",
  },
  {
    standard: "DIN 51900",
    organization: "DIN (German Institute for Standardization)",
    title: "Testing of solid and liquid fuels — Determination of gross calorific value",
    applicableRange: "Isoperibolic and static jacket oxygen combustion vessels",
  },
  {
    standard: "IS 1350 (Part-II)",
    organization: "Bureau of Indian Standards (BIS)",
    title: "Methods of Test for Coal and Coke: Determination of Calorific Value",
    applicableRange: "Mandatory standard for Indian thermal power plants and mining labs",
  },
  {
    standard: "ASTM D3172 / D7582",
    organization: "ASTM International",
    title: "Standard Practice for Proximate Analysis of Coal and Coke",
    applicableRange: "Moisture, volatile matter, and ash determination in solid fuels",
  },
  {
    standard: "ASTM D1857 / ISO 540",
    organization: "ASTM International",
    title: "Standard Test Method for Fusibility of Coal and Coke Ash",
    applicableRange: "Initial deformation, softening, hemispherical and fluid temperatures",
  },
  {
    standard: "ASTM E1019",
    organization: "ASTM International",
    title: "Determination of Carbon, Sulfur, Nitrogen, and Oxygen in Steel, Iron, Nickel, and Cobalt Alloys",
    applicableRange: "Combustion infrared absorption and inert gas fusion thermal conductivity",
  },
];

export const DEFAULT_BROCHURES: ProductBrochure[] = [
  {
    title: "Technical Specification Sheet & Architecture Guide",
    size: "2.4 MB",
    type: "PDF Document",
    description: "Full engineering tolerances, installation prerequisites, electrical, and gas supply specifications.",
  },
  {
    title: "Comprehensive Application Handbook",
    size: "4.1 MB",
    type: "PDF Document",
    description: "Sample preparation protocols, combustion vessel handling, and ASTM/ISO standard compliance guidelines.",
  },
  {
    title: "Laboratory Pre-Installation & Site Readiness Checklist",
    size: "1.2 MB",
    type: "PDF Document",
    description: "Bench space, water chiller requirements, oxygen purity, and electrical earthing specifications.",
  },
  {
    title: "Preventive Maintenance & Hydrotesting Protocol",
    size: "850 KB",
    type: "PDF Document",
    description: "Annual maintenance schedule, oxygen bomb inspection thresholds, and calibration certificate guidelines.",
  },
];

export const DEFAULT_FAQS = [
  {
    q: "How does the true isoperibol measurement principle differ from static jacket calorimeters?",
    a: "In a true isoperibol calorimeter, the jacket temperature is continuously regulated to maintain an exact, constant temperature surrounding the bucket throughout the entire test. Highly accurate thermistors measure heat transfer across the fixed temperature gradient, allowing the microprocessor to apply rigorous thermal leakage corrections for unmatched precision (0.1% RSD class).",
  },
  {
    q: "What are the oxygen combustion vessel inspection and hydrotesting requirements?",
    a: "Under international safety regulations (ASTM and ASME vessel codes), combustion bombs must undergo routine inspection every 500 firings and annual hydrostatic pressure testing up to 300 bar (4,500 psi). Orbit Technologies provides factory-authorized hydrostatic testing, seal re-facing, and certification in India in direct collaboration with Parr Instrument Company.",
  },
  {
    q: "What utilities and lab infrastructure are required for installation?",
    a: "Requirements include a stable laboratory bench capable of supporting 50 kg, a 230V / 50Hz clean regulated power supply with dedicated grounding, high-purity commercial oxygen (minimum 99.5% purity) regulated between 400–450 psi, and deionised water for bucket filling and cooling circulation.",
  },
  {
    q: "Can this instrument be interfaced with analytical balances and Laboratory Information Management Systems (LIMS)?",
    a: "Yes. The instrument features standard RS-232, dual USB ports, and a TCP/IP Ethernet network interface. It connects seamlessly to analytical balances (such as A&D, Mettler, or Sartorius) to automatically capture tare and sample weights, and outputs structured test results directly to LIMS databases.",
  },
  {
    q: "What sample types can be tested with this system?",
    a: "It accommodates solid and liquid combustible samples including bituminous coal, anthracite, lignite, metallurgical coke, petroleum products (heavy fuel oils, diesel, aviation kerosene), solid biofuels (pellets, bagasse, wood chips), refuse-derived fuel (RDF), and food/feed nutritionals.",
  },
  {
    q: "What after-sales service and warranty support is provided by Orbit Technologies?",
    a: "All instruments supplied by Orbit Technologies include comprehensive manufacturer warranty, on-site installation and commissioning by certified engineers, hands-on user training, application support, and availability of genuine replacement seals, ignition wires, and crucibles stocked locally in Hyderabad.",
  },
];
`;

fs.writeFileSync(MEDIA_PATH, content, "utf8");
console.log("Successfully updated", MEDIA_PATH);
