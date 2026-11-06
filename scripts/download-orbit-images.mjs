/**
 * Downloads authentic images from orbitindia.com into public/images/orbit/
 * and generates a mapping file src/data/orbit-images-map.json.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import https from "node:https";
import http from "node:http";

const EXTRACT_PATH = path.resolve("src/data/live-extract.json");
const OUT_DIR = path.resolve("public/images/orbit");
const MAP_OUT = path.resolve("src/data/orbit-images-map.json");
const CONCURRENCY = 6;

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  Referer: "https://www.orbitindia.com/",
};

function fetchBuffer(url, redirects = 3) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "http:" ? http : https;
    const req = client.get(url, { headers: HEADERS }, (res) => {
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location &&
        redirects > 0
      ) {
        res.resume();
        const next = new URL(res.headers.location, url).href;
        resolve(fetchBuffer(next, redirects - 1));
        return;
      }
      if (res.statusCode !== 200) {
        res.resume();
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.setTimeout(25000, () => req.destroy(new Error(`Timeout: ${url}`)));
    req.on("error", reject);
  });
}

function fetchText(url, redirects = 3) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "http:" ? http : https;
    const req = client.get(
      url,
      {
        headers: {
          ...HEADERS,
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location &&
          redirects > 0
        ) {
          res.resume();
          const next = new URL(res.headers.location, url).href;
          resolve(fetchText(next, redirects - 1));
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
      }
    );
    req.setTimeout(25000, () => req.destroy(new Error(`Timeout: ${url}`)));
    req.on("error", reject);
  });
}

function sanitizeFilename(url) {
  try {
    const pathname = new URL(url).pathname;
    let base = path.basename(pathname);
    // decode uri components like %20
    base = decodeURIComponent(base);
    // replace unsafe chars
    base = base.replace(/[^a-zA-Z0-9._-]/g, "_");
    return base;
  } catch {
    return "img_" + Math.random().toString(36).slice(2) + ".jpg";
  }
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const allImageUrls = new Set();

  // 1. Collect from live-extract.json
  try {
    const raw = await fs.readFile(EXTRACT_PATH, "utf8");
    const data = JSON.parse(raw);
    const pages = Array.isArray(data.pages)
      ? data.pages
      : Object.values(data.pages || {});

    for (const p of pages) {
      if (Array.isArray(p.images)) {
        for (const img of p.images) {
          if (img && typeof img === "string" && img.startsWith("http")) {
            allImageUrls.add(img);
          }
        }
      }
    }
    console.log(`Found ${allImageUrls.size} images from live-extract.json`);
  } catch (err) {
    console.error("Error reading live-extract.json:", err.message);
  }

  // 2. Crawl homepage and key landing pages for additional images (logos, banners, partners)
  const crawlPages = [
    "https://www.orbitindia.com/",
    "https://www.orbitindia.com/orbit-as-a-manufacturer/",
    "https://www.orbitindia.com/orbit-as-a-distributor/",
    "https://www.orbitindia.com/our-services/",
    "https://www.orbitindia.com/our-clients/",
  ];

  for (const pageUrl of crawlPages) {
    try {
      console.log(`Crawling ${pageUrl} for images...`);
      const html = await fetchText(pageUrl);
      const matches = html.matchAll(
        /https?:\/\/[^"'\s)]+?\.(?:jpg|jpeg|png|webp|svg)/gi
      );
      let count = 0;
      for (const m of matches) {
        const u = m[0];
        if (
          u.includes("orbitindia.com/wp-content") &&
          !u.includes("gravatar") &&
          !u.includes("plugins")
        ) {
          allImageUrls.add(u);
          count++;
        }
      }
      console.log(`  Added ${count} images from ${pageUrl}`);
    } catch (err) {
      console.warn(`  Failed to crawl ${pageUrl}: ${err.message}`);
    }
  }

  console.log(`Total unique images to process: ${allImageUrls.size}`);

  const urlList = Array.from(allImageUrls);
  const mapping = {};
  let completed = 0;
  let failed = 0;

  async function worker(items) {
    while (items.length > 0) {
      const url = items.shift();
      const filename = sanitizeFilename(url);
      const destPath = path.join(OUT_DIR, filename);
      const publicPath = `/images/orbit/${filename}`;
      mapping[url] = publicPath;

      try {
        // check if file already exists with non-zero size
        const stat = await fs.stat(destPath).catch(() => null);
        if (stat && stat.size > 0) {
          completed++;
          continue;
        }

        const buf = await fetchBuffer(url);
        await fs.writeFile(destPath, buf);
        completed++;
        if (completed % 20 === 0 || completed === urlList.length) {
          console.log(`Progress: ${completed}/${urlList.length} downloaded`);
        }
      } catch (err) {
        failed++;
        console.warn(`Failed: ${url} (${err.message})`);
      }
    }
  }

  const chunks = [];
  const queue = [...urlList];
  for (let i = 0; i < CONCURRENCY; i++) {
    chunks.push(worker(queue));
  }
  await Promise.all(chunks);

  console.log(`\nCompleted: ${completed} succeeded, ${failed} failed.`);

  // Write mapping file
  await fs.writeFile(MAP_OUT, JSON.stringify(mapping, null, 2), "utf8");
  console.log(`Saved mapping to ${MAP_OUT}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
