/**
 * One-off content extractor for the Orbit redesign.
 *
 * Fetches the live sitemap of orbitindia.com (256 URLs), classifies each URL
 * (section / category / product / content / corporate), strips the global
 * Elementor header/footer chrome, and scrapes per-page content:
 *   - title, meta/og description, h1, h2s
 *   - JSON-LD: BreadcrumbList (authoritative live hierarchy), Article
 *     headline/keywords/dates
 *   - first wp-content content images, spec table rows, principal mentions
 * Output: src/data/live-extract.json for hand-curation into data files.
 *
 * Read-only towards the remote site: GET requests, rate-limited, pages
 * cached under tmp/live-pages so reruns are cheap.
 *
 * Usage: node scripts/extract-live.mjs [--refresh]
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import https from "node:https";

const ORIGIN = "https://www.orbitindia.com";
const OUT = path.resolve("src/data/live-extract.json");
const CACHE = path.resolve("tmp/live-pages");
const CONCURRENCY = 6;
const REFRESH = process.argv.includes("--refresh");

function get(url, redirects = 3) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { "user-agent": "OrbitRedesignResearch/1.0 (+local)" } },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects > 0) {
          res.resume();
          const next = new URL(res.headers.location, url).href;
          resolve(get(next, redirects - 1));
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      },
    );
    req.setTimeout(20000, () => req.destroy(new Error(`timeout ${url}`)));
    req.on("error", reject);
  });
}

// HTML entities -> code points (keys deliberately carry no ampersand so the
// tool-call payload layer cannot mangle them on the way into this file).
const NAMED = {
  nbsp: 32, lt: 60, gt: 62, amp: 38, quot: 34, apos: 39, rsquo: 8217,
  lsquo: 8216, ldquo: 8220, rdquo: 8221, ndash: 8211, mdash: 8212,
  hellip: 8230, middot: 183, copy: 169, bull: 8226, deg: 176, trade: 8482,
  euro: 8364, pound: 163, times: 215, divide: 247, micro: 181, para: 182,
};

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in NAMED ? String.fromCharCode(NAMED[n.toLowerCase()]) : m));

const textOf = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();

const match = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

/**
 * Remove a balanced <div ...class="marker"...> ... </div> zone (Elementor
 * header/footer widgets live here and pollute h2 extraction with menu titles).
 */
function stripZone(html, marker) {
  const idx = html.indexOf(marker);
  if (idx === -1) return html;
  const start = html.lastIndexOf("<div", idx);
  if (start === -1) return html;
  const re = /<div\b|<\/div>/g;
  re.lastIndex = start;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    depth += m[0] === "</div>" ? -1 : 1;
    if (depth === 0) return html.slice(0, start) + html.slice(re.lastIndex);
  }
  return html;
}

/** Flatten a JSON-LD node (object/array/@graph) into a list of objects. */
function collectObjects(node, out = []) {
  if (!node || typeof node !== "object") return out;
  if (Array.isArray(node)) {
    for (const n of node) collectObjects(n, out);
    return out;
  }
  out.push(node);
  if (node["@graph"]) collectObjects(node["@graph"], out);
  for (const [k, v] of Object.entries(node)) {
    if (k !== "@graph" && v && typeof v === "object") collectObjects(v, out);
  }
  return out;
}

function extractLd(html) {
  const result = { crumbs: [], article: null, webpage: null };
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const b of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(b[1]);
    } catch {
      continue;
    }
    const objs = collectObjects(parsed);
    const bl = objs.find((o) => Array.isArray(o.itemListElement));
    if (bl && !result.crumbs.length) {
      result.crumbs = bl.itemListElement.map((i) => ({
        position: i.position,
        name: i.item?.name || i.name || "",
        url: i.item?.["@id"] || i.url || "",
      }));
    }
    if (!result.article) {
      const a = objs.find((o) => typeof o["@type"] === "string" && /Article|NewsArticle|BlogPosting/.test(o["@type"]));
      if (a) {
        result.article = {
          headline: a.headline || a.name || "",
          keywords: a.keywords || "",
          datePublished: a.datePublished || "",
          dateModified: a.dateModified || "",
        };
      }
    }
    if (!result.webpage) {
      const w = objs.find((o) => typeof o["@type"] === "string" && /WebPage/.test(o["@type"]));
      if (w) result.webpage = { name: w.name || "", description: w.description || "" };
    }
  }
  return result;
}

/** Pull everything useful from a single live page. */
function parsePage(htmlRaw) {
  const ld = extractLd(htmlRaw);

  const title = decode(match(htmlRaw, /<title[^>]*>([\s\S]*?)<\/title>/i) || "")
    .replace(/[|\-]\s*Orbit (Technologies|India).*$/i, "")
    .trim();
  const description = decode(
    match(htmlRaw, /<meta\s+name="description"\s+content="([^"]*)"/i) ||
      match(htmlRaw, /property="og:description"\s+content="([^"]*)"/i) ||
      ld.webpage?.description ||
      "",
  );

  // Drop the global header/footer chrome so menu widget titles don't show up
  // as page headings.
  const html = stripZone(stripZone(htmlRaw, "elementor-location-header"), "elementor-location-footer");

  const h1 = textOf(match(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) || "");
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)]
    .map((m) => textOf(m[1]))
    .filter((t) => t && t.length < 140)
    .slice(0, 8);

  // Content images from wp-content (skip logos/icons/thumbnail sizes)
  const images = [
    ...new Set(
      [...html.matchAll(/(?:src|data-src)="(https:\/\/www\.orbitindia\.com\/wp-content\/uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"/gi)].map(
        (m) => m[1],
      ),
    ),
  ].filter((u) => !/logo|icon|favicon|150x|300x|thumbnail|placeholder/i.test(u));

  // Spec tables: prefer one that looks like a spec sheet
  const specs = [];
  const tables = [...html.matchAll(/<table[^>]*>[\s\S]*?<\/table>/gi)]
    .map((m) => m[0])
    .slice(0, 4);
  const table =
    tables.find((t) => /model|capacity|temperature|range|weight|power|accuracy/i.test(t)) || tables[0];
  if (table) {
    const rows = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].slice(0, 30);
    for (const r of rows) {
      const cells = [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => textOf(c[1]));
      if (cells.length === 2 && cells[0] && cells[1] && cells[0].length < 90) specs.push([cells[0], cells[1]]);
    }
  }

  // Principals from page text only (header/footer stripped above)
  const body = textOf(html);
  const principals = [
    "Parr", "A&D", "NCS", "LECO", "Sylab", "Labtech", "DENATEC", "Extratex",
    "Elite Thermal", "Labtron", "IKA", "Binder", "Memmert", "CEM",
    "Anton Paar", "Thermo", "Mettler", "Shimadzu",
  ].filter((p) => new RegExp(`\\b${p}\\b`, "i").test(body));

  // Standards mentioned (ASTM/ISO/IS numbers) — SEO gold
  const standards = [
    ...new Set(body.match(/\b(?:ASTM|ISO|IS|EN|BIS)\s?[A-Z]?\d[\w.:\-]*|\bASTM\sD\d+|\bISO\s\d+/gi) || []),
  ].slice(0, 12);

  return {
    title,
    description,
    h1,
    h2s,
    crumbs: ld.crumbs,
    article: ld.article,
    images: images.slice(0, 6),
    specs,
    principals,
    standards,
  };
}

/** Fetch the sitemap index, then every sub-sitemap, and flatten to URLs. */
async function allUrls() {
  const idx = await get(`${ORIGIN}/sitemap_index.xml`);
  const subs = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((l) => !l.includes("sitemap-index"));
  const urls = [];
  for (const s of subs) {
    const xml = await get(s);
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      if (!m[1].includes("sitemap")) urls.push(m[1]);
    }
  }
  return [...new Set(urls)];
}

// --- classification -------------------------------------------------------

const CONTENT = new Set([
  "/applications", "/applications/knowledge-base", "/knowledge-library",
  "/gcv-of-coal", "/working-of-calorimeter", "/loss-on-drying-principle",
  "/news-and-events", "/upcoming-events", "/under-construction",
  "/sample", "/elementskit-content/dynamic-content-megamenu-menuitem42",
]);
const CORPORATE = new Set([
  "/careers", "/contact-us", "/our-clients", "/our-services",
  "/orbit-as-a-distributor", "/orbit-as-a-manufacturer", "/product-enquiry",
  "/service-complaint-form", "/denatec", "/extratex",
  "/elite-thermal-systems-limited",
]);

function classify(paths) {
  const set = new Set(paths);
  const depth1 = (p) => p.split("/").length - 1; // "/" -> 0, "/calorimeter" -> 1
  const out = [];
  for (const p of paths) {
    const hasChildren = [...set].some((q) => q !== p && q.startsWith(p + "/"));
    let kind;
    if (p === "/") kind = "home";
    else if (CONTENT.has(p)) kind = "content";
    else if (CORPORATE.has(p)) kind = "corporate";
    else if (hasChildren) kind = depth1(p) === 1 ? "section" : "subcategory";
    else kind = "product";
    out.push({ path: p, kind, hasChildren });
  }
  // Leaves under corporate/content roots inherit their parent's kind
  for (const e of out) {
    if (e.kind === "product") {
      const parent = e.path.slice(0, e.path.lastIndexOf("/")) || "/";
      const parentEntry = out.find((x) => x.path === parent);
      if (parentEntry && parentEntry.kind === "corporate") e.kind = "corporate";
      else if (parentEntry && parentEntry.kind === "content") e.kind = "content";
    }
  }
  return out;
}

/** Bounded-concurrency map that preserves order. */
async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: limit }, run));
  return results;
}

/** Load from disk cache when warm, otherwise GET and persist. */
async function cached(url) {
  const key = url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]/gi, "_") + ".html";
  const file = path.join(CACHE, key);
  if (!REFRESH) {
    try {
      return await fs.readFile(file, "utf8");
    } catch {}
  }
  const html = await get(url);
  await fs.writeFile(file, html, "utf8");
  return html;
}

(async () => {
  await fs.mkdir(CACHE, { recursive: true });
  const urls = await allUrls();
  const paths = urls.map((u) => u.replace(ORIGIN, "").replace(/\/$/, "") || "/").sort();
  const classified = classify(paths);
  console.log(`sitemap: ${paths.length} urls`);
  const counts = {};
  for (const c of classified) counts[c.kind] = (counts[c.kind] || 0) + 1;
  console.log("classification:", JSON.stringify(counts));

  const toFetch = classified.filter((c) => c.kind !== "home");
  let done = 0;
  const pages = await pool(toFetch, CONCURRENCY, async (entry) => {
    try {
      const html = await cached(ORIGIN + (entry.path === "/" ? "/" : entry.path + "/"));
      const parsed = parsePage(html);
      done++;
      if (done % 25 === 0) console.log(`  fetched ${done}/${toFetch.length}`);
      return { ...entry, ...parsed };
    } catch (e) {
      console.error(`  FAIL ${entry.path}: ${e.message}`);
      return { ...entry, crumbs: [], error: e.message };
    }
  });

  const out = {
    generatedAt: new Date().toISOString(),
    origin: ORIGIN,
    totals: counts,
    pages,
  };
  await fs.writeFile(OUT, JSON.stringify(out, null, 2), "utf8");
  console.log(
    `wrote ${path.relative(process.cwd(), OUT)} — ${pages.length} pages, ${pages.filter((p) => p.error).length} errors`,
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});