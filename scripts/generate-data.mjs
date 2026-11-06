/**
 * Generates src/data/categories.ts and src/data/products.ts.
 *
 * Sources of truth:
 *   1. src/data/live-extract.json  — real orbitindia.com content (names,
 *      hierarchy, descriptions, specs) produced by scripts/extract-live.mjs
 *   2. tmp/editorial.json          — the hand-written editorial layer
 *      (rich guides/FAQs/features), captured once from the original
 *      src/data/products.ts before the first regeneration
 *
 * The merge is deterministic: live data wins for names, URLs, hierarchy and
 * specs; editorial wins for long-form copy (tagline/description/features/
 * applications/guide/faq) wherever a confident slug match exists.
 *
 * Run: node scripts/generate-data.mjs
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const EXTRACT = "src/data/live-extract.json";
const EDITORIAL = "tmp/editorial.json";
const OUT_CATS = "src/data/categories.ts";
const OUT_PRODS = "src/data/products.ts";

// --- entity helpers (payload-safe: no literal entity text in this file) ----
const NAMED = {
  nbsp: 32, lt: 60, gt: 62, amp: 38, quot: 34, apos: 39, rsquo: 8217,
  lsquo: 8216, ldquo: 8220, rdquo: 8221, ndash: 8211, mdash: 8212,
  hellip: 8230, middot: 183, copy: 169, bull: 8226, deg: 176, trade: 8482,
};
const decode = (s) =>
  String(s || "")
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in NAMED ? String.fromCharCode(NAMED[n.toLowerCase()]) : m));

const clean = (s) => decode(s).replace(/\s+/g, " ").trim();

// ---------------------------------------------------------------------------
// 1. capture the editorial layer once (before the first regeneration)
// ---------------------------------------------------------------------------
async function loadEditorial() {
  try {
    return JSON.parse(await fs.readFile(EDITORIAL, "utf8"));
  } catch {}
  const current = await fs.readFile(OUT_PRODS, "utf8").catch(() => "");
  if (current.includes("GENERATED FROM live-extract")) {
    throw new Error("src/data/products.ts is already generated but tmp/editorial.json is missing.");
  }
  const mod = await import(pathToFileURL(path.resolve(OUT_PRODS)).href);
  const data = { categories: mod.categories, products: mod.products };
  await fs.mkdir("tmp", { recursive: true });
  await fs.writeFile(EDITORIAL, JSON.stringify(data, null, 2), "utf8");
  console.log(`captured editorial layer: ${data.categories.length} categories, ${data.products.length} products`);
  return data;
}

// ---------------------------------------------------------------------------
// 2. taxonomy constants — the recommended hierarchy (nav + breadcrumbs) and
//    the curation decisions about which live URLs are categories vs products
// ---------------------------------------------------------------------------

/** Root-level URLs that are landing/hub pages without sitemap children. */
const LEAF_CATEGORIES = new Set([
  "laboratory-accessories", "special-analyzers", "certified-and-standard-reference-materials",
  "metal-sample-preparation-equipment", "ovens", "tube-furnace",
  "light-industrial-chamber-furnace-1400c-to-1700-c", "rapid-heating-chamber-furnaces-1200",
  "melting-furnaces", "muffle-furnace", "retort-furnace", "sintering-furnace",
]);

/** The four pillar hub URLs that exist on the live site. */
const PILLAR_PATHS = {
  "analytical-instruments": "analytical",
  "reactors": "reactors",
  "furnace-heating-systems": "furnaces",
  "crms-srms-laboratory-accessories": "crms",
};

/** Top-level segment -> pillar for every catalogued segment. */
const TOP_PILLAR = {
  "advanced-level-analytical": "analytical", "analytical-instruments": "analytical",
  "ash-fusion-analyzers": "analytical", "calorimeter": "analytical",
  "coal-and-coke-testing-instruments": "analytical", "combustion-master-cs-analyzer": "analytical",
  "ea3100": "analytical", "elemental-analyzers": "analytical", "gas-generators": "analytical",
  "micro-analytical": "analytical", "precision-balances": "analytical",
  "premium-level-micro-semi-micro": "analytical", "semi-micro-analytical": "analytical",
  "special-analyzers": "analytical", "standard-level-analytical": "analytical",
  "tga-proximate-analyzers": "analytical", "other-instruments": "analytical",
  "reactors": "reactors", "high-temperature-high-pressure-reactor-systems": "reactors",
  "chamber-furnaces": "furnaces", "tube-furnaces": "furnaces", "tube-furnace": "furnaces",
  "high-temperature-tube-furnace": "furnaces", "furnace-heating-systems": "furnaces",
  "melting-furnaces": "furnaces", "muffle-furnace": "furnaces", "retort-furnace": "furnaces",
  "sintering-furnace": "furnaces", "ovens": "furnaces",
  "light-industrial-chamber-furnace-1400c-to-1700-c": "furnaces",
  "rapid-heating-chamber-furnaces-1200": "furnaces",
  "tube-furnace-single-zone-1200c-to-1850-c": "furnaces",
  "vacuum-tube-furnaces-single-zone-1200c-1500-c": "furnaces",
  "split-tub-furnace": "furnaces",
  "milling-pulverising": "sample-prep", "sieving": "sample-prep",
  "xrf-icp-sample-preparation-equipment": "sample-prep", "cone-mill": "sample-prep",
  "crms-srms-laboratory-accessories": "crms", "laboratory-accessories": "crms",
  "certified-and-standard-reference-materials": "crms",
};

/** Root-level product pages whose catalog category lives elsewhere. */
const ROOT_PRODUCT_CATEGORY = {
  "combustion-master-cs-analyzer": "elemental-analyzers",
  "ea3100": "elemental-analyzers",
  "cone-mill": "milling-pulverising",
  "high-temperature-high-pressure-reactor-systems": "reactors",
  "light-industrial-chamber-furnace-1400c-to-1700-c": "chamber-furnaces",
  "rapid-heating-chamber-furnaces-1200": "chamber-furnaces",
  "tube-furnace-single-zone-1200c-to-1850-c": "tube-furnaces",
  "vacuum-tube-furnaces-single-zone-1200c-1500-c": "tube-furnaces",
  "split-tub-furnace": "tube-furnaces",
};

/** Old editorial category slug -> live path. */
const EDITORIAL_CAT = {
  calorimeters: "calorimeter",
  "thermogravimetric-analysers": "tga-proximate-analyzers",
  "elemental-analyzers": "elemental-analyzers",
  "ash-fusion-analyzers": "ash-fusion-analyzers",
  "coal-coke-testing": "coal-and-coke-testing-instruments",
  "reactor-systems": "reactors",
  "sample-preparation": "milling-pulverising",
  furnaces: "chamber-furnaces",
  "reference-materials": "certified-and-standard-reference-materials",
};

/** Editorial slug -> live slug pairings for near-miss names. */
const EDITORIAL_LIVE_MATCH = {
  "tga-3000": "tga-3000-thermogravimetric-analyzer",
  "tga-1500": "tga-1500-thermogravimetric-analyzer",
  "if2000g-hdc": "ash-fusion-analyzer-if2000g-hdc",
  "if2000g-hdbm": "ash-fusion-analyzer-ht-if2000g-hdbm",
  "series-5100-glass-reactors": "series-5100-160-1500ml-glass-reactors",
  "planetary-ball-mill": "lab-planetary-ball-mill-with-4-grinding-station",
  "rotating-cylinder-electrode-system":
    "high-pressure-high-temperature-rotating-cylinder-electrode-rce-system",
  "detonation-calorimeter": "6790-detonation-calorimeter",
  "linn-ht-1800-high-temperature-tube-furnace": "high-temperature-tube-furnace-ht-1800",
};

/** Editorial products with no live counterpart keep these categories. */
const EDITORIAL_PRODUCT_CATEGORY = {
  "laboratory-consumables-and-labware": "laboratory-accessories",
  "vibratory-sieve-shaker": "sieving",
  "hydraulic-pellet-press": "xrf-icp-sample-preparation-equipment",
  "carbon-sulfur-analyzers": "elemental-analyzers/carbon-and-sulfur-analyzers",
  "chns-o-analyzers": "elemental-analyzers/chns-analyzers",
};

/** Brand by path prefix (longest prefix wins). */
const BRANDS = [
  ["calorimeter/", { brand: "Parr Instrument Company", origin: "USA" }],
  ["reactors/", { brand: "Parr Instrument Company", origin: "USA" }],
  ["extratex/", { brand: "Extratex", origin: "India" }],
  ["precision-balances/", { brand: "A&D Company", origin: "Japan" }],
  ["standard-level-analytical/", { brand: "A&D Company", origin: "Japan" }],
  ["advanced-level-analytical/", { brand: "A&D Company", origin: "Japan" }],
  ["micro-analytical/", { brand: "A&D Company", origin: "Japan" }],
  ["semi-micro-analytical/", { brand: "A&D Company", origin: "Japan" }],
  ["premium-level-micro-semi-micro/", { brand: "A&D Company", origin: "Japan" }],
  ["elemental-analyzers/carbon-and-sulfur", { brand: "NCS Testing Technology", origin: "Germany" }],
  ["elemental-analyzers/onh", { brand: "NCS Testing Technology", origin: "Germany" }],
  ["elemental-analyzers/chns", { brand: "NC Technologies", origin: "Italy" }],
  ["elemental-analyzers/", { brand: "NC Technologies", origin: "Italy" }],
  ["tga-proximate-analyzers/", { brand: "Sylab Scientific", origin: "India" }],
  ["ash-fusion-analyzers/", { brand: "Sylab Scientific", origin: "India" }],
  ["milling-pulverising/", { brand: "SIEBTECHNIK TEMA", origin: "Germany" }],
  ["sieving/", { brand: "SIEBTECHNIK TEMA", origin: "Germany" }],
  ["cone-mill", { brand: "SIEBTECHNIK TEMA", origin: "Germany" }],
  ["chamber-furnaces/", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["tube-furnaces/", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["high-temperature-tube-furnace/", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["melting-furnaces", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["muffle-furnace", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["retort-furnace", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["sintering-furnace", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["ovens", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["tube-furnace", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["light-industrial-chamber-furnace", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["rapid-heating-chamber-furnaces", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["vacuum-tube-furnaces", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["split-tub-furnace", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["certified-and-standard-reference-materials", { brand: "Elemental Microanalysis", origin: "UK" }],
  ["combustion-master-cs-analyzer", { brand: "NCS Testing Technology", origin: "Germany" }],
  ["ea3100", { brand: "NC Technologies", origin: "Italy" }],
  ["high-temperature-high-pressure-reactor-systems", { brand: "Parr Instrument Company", origin: "USA" }],
];

const KNOWN_PRINCIPALS = [
  ["Parr", { brand: "Parr Instrument Company", origin: "USA" }],
  ["A&D", { brand: "A&D Company", origin: "Japan" }],
  ["NCS", { brand: "NCS Testing Technology", origin: "Germany" }],
  ["NC Technologies", { brand: "NC Technologies", origin: "Italy" }],
  ["Sylab", { brand: "Sylab Scientific", origin: "India" }],
  ["Elite", { brand: "Elite Thermal Systems", origin: "UK" }],
  ["Extratex", { brand: "Extratex", origin: "India" }],
  ["DENATEC", { brand: "DENATEC", origin: "India" }],
  ["SIEBTECHNIK", { brand: "SIEBTECHNIK TEMA", origin: "Germany" }],
  ["LECO", { brand: "LECO", origin: "USA" }],
  ["IKA", { brand: "IKA", origin: "Germany" }],
  ["Labtron", { brand: "Labtron", origin: "UK" }],
];

function brandFor(categoryPath, page) {
  const sorted = [...BRANDS].sort((a, b) => b[0].length - a[0].length);
  for (const [prefix, value] of sorted) {
    if (categoryPath.startsWith(prefix) || categoryPath === prefix.replace(/\/$/, "")) return value;
  }
  const body = page ? [...(page.principals || [])] : [];
  const hits = KNOWN_PRINCIPALS.filter(([n]) => body.includes(n));
  if (hits.length === 1) return hits[0][1];
  return { brand: "", origin: "" };
}

// ---------------------------------------------------------------------------
// 3. name utilities
// ---------------------------------------------------------------------------
const ACRONYMS = {
  chns: "CHNS", tga: "TGA", xrf: "XRF", icp: "ICP", gcv: "GCV", hp: "HP",
  ht: "HT", crm: "CRM", srms: "SRMs", crms: "CRMs", onh: "ONH", irms: "IRMS",
  ea3100: "EA3100", co2: "CO2", ad: "A&D", astm: "ASTM", iso: "ISO", uv: "UV",
};

function prettify(segment) {
  return segment
    .split("-")
    .map((w) => ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function firstSentence(text, max = 240) {
  const t = clean(text);
  if (!t) return "";
  const m = t.match(/^.+?[.!?](\s|$)/);
  let out = m ? m[0].trim() : t;
  if (out.length > max) {
    out = t.slice(0, max);
    out = out.slice(0, Math.max(out.lastIndexOf(" "), 60)) + "\u2026";
  }
  return out;
}

// ---------------------------------------------------------------------------
// 4. build the catalog
// ---------------------------------------------------------------------------
async function main() {
  const editorial = await loadEditorial();
  const extract = JSON.parse(await fs.readFile(EXTRACT, "utf8"));

  // breadcrumb names give the live site's own display names
  const nameByPath = new Map();
  for (const p of extract.pages) {
    for (const c of p.crumbs || []) {
      const u =
        clean(c.url)
          .replace(/^https?:\/\/(www\.)?orbitindia\.com/, "")
          .replace(/\?.*$/, "")
          .replace(/\/$/, "") || "/";
      if (u && c.name && !nameByPath.has(u)) nameByPath.set(u, clean(c.name));
    }
  }
  nameByPath.set("/xrf-icp-sample-preparation-equipment", "XRF/ICP Sample Preparation Equipment");
  nameByPath.set("/reactors/sample-preparation-vessels", "Sample Preparation Vessels");

  const isExcluded = (p) => p.kind === "corporate" || p.kind === "content" || p.kind === "home";

  const productPages = [];
  const categoryPages = [];
  for (const p of extract.pages) {
    if (isExcluded(p)) continue;
    const seg = p.path.replace(/^\//, "");
    if (PILLAR_PATHS[seg] !== undefined) {
      categoryPages.push({ ...p, forceKind: "pillar" });
    } else if (p.kind === "section" || p.kind === "subcategory") {
      categoryPages.push(p);
    } else if (LEAF_CATEGORIES.has(seg)) {
      categoryPages.push({ ...p, forceKind: "section" });
    } else {
      productPages.push(p);
    }
  }

  const blankCategory = (catPath) => ({
    path: "/" + catPath,
    forceKind: catPath.split("/").length === 1 ? "section" : "subsection",
    title: "",
    description: "",
    h2s: [],
    crumbs: [],
    specs: [],
    standards: [],
    principals: [],
    images: [],
    synthesized: true,
  });

  const allCatPaths = new Set(categoryPages.map((c) => c.path.replace(/^\//, "")));

  const ensureAncestorChain = (catPath) => {
    let cur = catPath;
    while (cur && !allCatPaths.has(cur)) {
      allCatPaths.add(cur);
      categoryPages.push(blankCategory(cur));
      cur = cur.includes("/") ? cur.slice(0, cur.lastIndexOf("/")) : null;
    }
  };

  // synthesize missing ancestors for product categories and subcategories
  for (const p of productPages) {
    const seg = p.path.replace(/^\//, "");
    const parent = seg.includes("/") ? seg.slice(0, seg.lastIndexOf("/")) : ROOT_PRODUCT_CATEGORY[seg];
    if (parent) ensureAncestorChain(parent);
  }
  for (const c of [...categoryPages]) {
    const seg = c.path.replace(/^\//, "");
    if (seg.includes("/")) ensureAncestorChain(seg.slice(0, seg.lastIndexOf("/")));
  }

  const categoryFor = (catPath) => categoryPages.find((c) => c.path === "/" + catPath);

  function parentCategoryOf(p) {
    const seg = p.path.replace(/^\//, "");
    if (seg.includes("/")) return seg.slice(0, seg.lastIndexOf("/"));
    return ROOT_PRODUCT_CATEGORY[seg] || null;
  }

  // ---- categories ----
  const editorialCatByPath = new Map();
  for (const ec of editorial.categories) {
    const mapped = EDITORIAL_CAT[ec.slug];
    if (mapped) editorialCatByPath.set(mapped, ec);
  }

  const categoryOut = categoryPages.map((c) => {
    const pathNoSlash = c.path.replace(/^\//, "");
    const depth = pathNoSlash.split("/").length;
    const seg = pathNoSlash.split("/").pop();
    const name =
      nameByPath.get("/" + pathNoSlash) ||
      (c.title && c.title.length < 70 && c.title.split(" ").length <= 8 ? clean(c.title) : "") ||
      prettify(seg);
    const pillar = TOP_PILLAR[pathNoSlash.split("/")[0]] || "analytical";
    const kind =
      c.forceKind ||
      (PILLAR_PATHS[seg] !== undefined && depth === 1
        ? "pillar"
        : depth === 1
          ? "section"
          : "subsection");
    const parent = depth > 1 ? pathNoSlash.slice(0, pathNoSlash.lastIndexOf("/")) : null;

    const ed = editorialCatByPath.get(pathNoSlash);
    const realBlurb = firstSentence(c.description, 240);

    let blurb;
    let guide;
    let faq = [];
    if (ed) {
      blurb = ed.blurb;
      guide = ed.guide;
      faq = ed.faq;
    } else {
      blurb =
        realBlurb ||
        `${name} from Orbit Technologies — supplied, installed and serviced across India.`;
      guide = [];
      if (realBlurb) guide.push(realBlurb);
      const kids = productPages.filter((p) => parentCategoryOf(p) === pathNoSlash);
      if (kids.length) {
        guide.push(
          `Orbit supplies ${kids.length} ${kids.length === 1 ? "model" : "models"} in this range, with specifications, pricing and lead times shared on request. Every instrument is delivered by our own engineers — selection, installation, commissioning and operator training included, followed by after-sales service and spares from 14 sales and service locations across India.`,
        );
      }
      const standards = new Set();
      for (const p of extract.pages) {
        if (p.path === "/" + pathNoSlash || p.path.startsWith("/" + pathNoSlash + "/")) {
          for (const s of p.standards || []) standards.add(s);
        }
      }
      if (standards.size) {
        const list = [...standards].slice(0, 8).join(", ");
        guide.push(
          `Buyers in this range typically specify compliance with ${list} — tell us the standard you must meet and we will configure the instrument accordingly.`,
        );
      }
      if (!guide.length) {
        guide.push(
          `${name} supplied by Orbit Technologies with installation, training and after-sales support across India.`,
        );
      }
    }

    return { path: pathNoSlash, name, parent, pillar, kind, blurb, guide, faq };
  });

  const ensureCategoryOut = (catPath) => {
    if (categoryOut.some((c) => c.path === catPath)) return;
    const depth = catPath.split("/").length;
    categoryOut.push({
      path: catPath,
      name: nameByPath.get("/" + catPath) || prettify(catPath.split("/").pop()),
      parent: depth > 1 ? catPath.slice(0, catPath.lastIndexOf("/")) : null,
      pillar: TOP_PILLAR[catPath.split("/")[0]] || "analytical",
      kind: depth > 1 ? "subsection" : "section",
      blurb: "",
      guide: [
        `${nameByPath.get("/" + catPath) || prettify(catPath.split("/").pop())} supplied by Orbit Technologies with installation, training and after-sales support across India.`,
      ],
      faq: [],
    });
  };

  // ---- products ----
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const editorialByNorm = new Map(editorial.products.map((p) => [norm(p.slug), p]));
  const explicitByLive = new Map();
  for (const [edSlug, liveSlug] of Object.entries(EDITORIAL_LIVE_MATCH)) {
    const ep = editorial.products.find((p) => p.slug === edSlug);
    if (ep) explicitByLive.set(norm(liveSlug), ep);
  }

  const usedSlugs = new Set();
  const dedupe = (slug) => {
    if (!usedSlugs.has(slug)) {
      usedSlugs.add(slug);
      return slug;
    }
    let i = 2;
    while (usedSlugs.has(`${slug}-${i}`)) i++;
    const fixed = `${slug}-${i}`;
    usedSlugs.add(fixed);
    console.warn(`  slug collision: ${slug} -> ${fixed}`);
    return fixed;
  };

  const matchedEditorial = new Set();
  const pickEditorial = (liveSlug) => {
    const n = norm(liveSlug);
    const ex = explicitByLive.get(n);
    if (ex && !matchedEditorial.has(ex.slug)) {
      matchedEditorial.add(ex.slug);
      return ex;
    }
    if (editorialByNorm.has(n)) {
      matchedEditorial.add(editorialByNorm.get(n).slug);
      return editorialByNorm.get(n);
    }
    for (const [en, ep] of editorialByNorm) {
      if (matchedEditorial.has(ep.slug)) continue;
      if ((en.length >= 8 && n.startsWith(en)) || (n.length >= 8 && en.startsWith(n))) {
        matchedEditorial.add(ep.slug);
        return ep;
      }
    }
    return null;
  };

  const productOut = [];
  for (const p of productPages) {
    const seg = p.path.replace(/^\//, "");
    const liveSlug = seg.split("/").pop();
    const category = parentCategoryOf(p) || "other-instruments";
    ensureCategoryOut(category);
    const ed = pickEditorial(liveSlug);
    const { brand: liveBrand, origin: liveOrigin } = brandFor(category, p);

    let name = nameByPath.get(p.path) || clean(p.title) || prettify(liveSlug);
    if (ed && ed.name && ed.name.length < 90) name = ed.name;
    if (!name) name = prettify(liveSlug);

    const realDesc = clean(p.description);
    const description =
      ed?.description ||
      realDesc ||
      `${name} supplied by Orbit Technologies with installation, commissioning and after-sales support across India.`;
    const tagline = ed?.tagline || firstSentence(description, 200) || name;

    productOut.push({
      slug: dedupe(liveSlug),
      name,
      category,
      brand: ed?.brand || liveBrand,
      origin: ed?.origin || liveOrigin,
      tagline,
      description,
      features: ed?.features || [],
      applications: ed?.applications || [],
      specs: (p.specs || []).slice(0, 14),
    });
  }

  // editorial products with no live counterpart stay in the catalogue
  for (const ed of editorial.products) {
    if (matchedEditorial.has(ed.slug)) continue;
    const mapped = EDITORIAL_PRODUCT_CATEGORY[ed.slug] || EDITORIAL_CAT[ed.category] || "other-instruments";
    ensureCategoryOut(mapped);
    productOut.push({
      slug: dedupe(ed.slug),
      name: ed.name,
      category: mapped,
      brand: ed.brand,
      origin: ed.origin,
      tagline: ed.tagline,
      description: ed.description,
      features: ed.features,
      applications: ed.applications,
      specs: [],
    });
    console.log(`  editorial-only product kept: ${ed.slug} -> ${mapped}`);
  }

  // guarantee parent chains for every category that ended up in the output
  for (const c of [...categoryOut]) {
    if (c.parent && !categoryOut.some((x) => x.path === c.parent)) ensureCategoryOut(c.parent);
  }

  console.log(`categories: ${categoryOut.length}, products: ${productOut.length}`);

  // ---- emit categories.ts ----
  const pillars = [
    { key: "analytical", name: "Analytical Instruments", path: "analytical-instruments" },
    { key: "reactors", name: "Parr Reactors", path: "reactors" },
    { key: "furnaces", name: "Furnace & Heating Systems", path: "furnace-heating-systems" },
    { key: "sample-prep", name: "Sample Preparation", path: "" },
    { key: "crms", name: "CRM's, SRM's & Laboratory Accessories", path: "crms-srms-laboratory-accessories" },
  ];

  const megaMenu = [
    {
      key: "analytical", name: "Analytical Instruments", path: "analytical-instruments",
      links: [
        ["Calorimeters", "calorimeter"], ["Elemental Analyzers", "elemental-analyzers"],
        ["TGA / Proximate Analyzers", "tga-proximate-analyzers"], ["Ash Fusion Analyzers", "ash-fusion-analyzers"],
        ["Coal & Coke Testing", "coal-and-coke-testing-instruments"], ["Special Analyzers", "special-analyzers"],
        ["Precision Balances", "precision-balances"], ["Gas Generators", "gas-generators"],
      ],
    },
    {
      key: "reactors", name: "Parr Reactors", path: "reactors",
      links: [
        ["HP/HT Reactors", "reactors/hp-ht-reactors"], ["Glass Reactors", "reactors/glass-reactors"],
        ["Tubular Reactors", "reactors/tubular-reactors"], ["Customized Reactors", "reactors/customized-reactors"],
        ["Sample Preparation Vessels", "reactors/sample-preparation-vessels"],
        ["Supercritical CO2 Extraction", "reactors/supercritical-co2-extraction-systems"],
      ],
    },
    {
      key: "furnaces", name: "Furnace & Heating Systems", path: "furnace-heating-systems",
      links: [
        ["Chamber Furnaces", "chamber-furnaces"], ["Tube Furnaces", "tube-furnaces"],
        ["High-Temperature Tube Furnaces", "high-temperature-tube-furnace"], ["Melting Furnaces", "melting-furnaces"],
        ["Muffle Furnaces", "muffle-furnace"], ["Ovens", "ovens"], ["Retort Furnaces", "retort-furnace"],
        ["Sintering Furnaces", "sintering-furnace"],
      ],
    },
    {
      key: "sample-prep", name: "Sample Preparation", path: "",
      links: [
        ["Milling & Pulverising", "milling-pulverising"], ["Sieving", "sieving"],
        ["Metal Sample Preparation", "metal-sample-preparation-equipment"],
        ["XRF/ICP Sample Preparation", "xrf-icp-sample-preparation-equipment"],
      ],
    },
    {
      key: "crms", name: "CRM's, SRM's & Lab Accessories", path: "crms-srms-laboratory-accessories",
      links: [
        ["Laboratory Accessories", "laboratory-accessories"],
        ["Certified & Standard Reference Materials", "certified-and-standard-reference-materials"],
      ],
    },
  ];

  const catsTs = `/* GENERATED FROM live-extract — run scripts/generate-data.mjs to refresh.
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

export const pillars: { key: Pillar; name: string; path: string }[] = ${JSON.stringify(pillars, null, 2)};

/** Grouped product navigation for the mega menu (paths verified against the live sitemap). */
export const megaMenu: { key: Pillar; name: string; path: string; links: [string, string][] }[] = ${JSON.stringify(megaMenu, null, 2)};

export const categories: Category[] = ${JSON.stringify(categoryOut, null, 2)};

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
  if (getCategoryByPath(cur)) chain.unshift(cur);
  return chain.map((p) => getCategoryByPath(p)).filter((c): c is Category => c !== null);
}
`;

  // ---- emit products.ts ----
  const prodsTs = `/* GENERATED FROM live-extract — run scripts/generate-data.mjs to refresh.
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

export const products: Product[] = ${JSON.stringify(productOut, null, 2)};

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
    .split(/[\\/-]/)
    .filter(Boolean)
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 3)
    .toUpperCase();
  let h = 7;
  for (let i = 0; i < p.slug.length; i++) h = (h * 31 + p.slug.charCodeAt(i)) >>> 0;
  return "OT-" + prefix + "-" + (1000 + (h % 9000));
}
`;

  await fs.writeFile(OUT_CATS, catsTs, "utf8");
  await fs.writeFile(OUT_PRODS, prodsTs, "utf8");
  console.log(`wrote ${OUT_CATS} and ${OUT_PRODS}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});