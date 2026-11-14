import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { PRODUCT_IMAGE_MAP } from "@/data/product-media";
import { withBasePath } from "@/lib/utils";

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
const SKIP = new Set(["modelnumber", "specification", "model", "type"]);

function specsOf(p: Product): [string, string][] {
  return (p.specs || []).filter(([k]) => !SKIP.has(norm(k)));
}

/**
 * Spec columns shared by the products in a category: the keys that appear in
 * at least half of the products (max 4), in the order they first appear.
 */
export function sharedSpecColumns(products: Product[]): string[] {
  const withSpecs = products.filter((p) => specsOf(p).length > 0);
  if (withSpecs.length < 2) return [];
  const count = new Map<string, { label: string; n: number; first: number }>();
  let order = 0;
  for (const p of withSpecs) {
    const seen = new Set<string>();
    for (const [k] of specsOf(p)) {
      const key = norm(k);
      if (seen.has(key)) continue;
      seen.add(key);
      const prev = count.get(key);
      if (prev) prev.n += 1;
      else count.set(key, { label: k, n: 1, first: order++ });
    }
  }
  return [...count.values()]
    .filter((c) => c.n >= Math.max(2, Math.ceil(withSpecs.length / 2)))
    .sort((a, b) => a.first - b.first)
    .slice(0, 4)
    .map((c) => c.label);
}

function valueFor(p: Product, label: string) {
  const hit = specsOf(p).find(([k]) => norm(k) === norm(label));
  return hit ? hit[1] : "—";
}

function imageFor(p: Product) {
  const img = (PRODUCT_IMAGE_MAP[p.slug] || []).find((src) => !/parr-1\.png|logo/i.test(src));
  return img ? withBasePath(img) : null;
}

/**
 * Desktop: a comparison table (photo, model, brand, shared spec columns).
 * The caller shows product cards on smaller screens.
 */
export function CategoryProductTable({ products, columns }: { products: Product[]; columns: string[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="data-table min-w-[760px]">
        <thead>
          <tr>
            <th scope="col" className="w-[34%]">Model</th>
            {columns.map((c) => (
              <th scope="col" key={c}>{c}</th>
            ))}
            <th scope="col" className="w-[1%]"><span className="sr-only">Details</span></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            const img = imageFor(p);
            return (
              <tr key={p.slug} className="group">
                <td>
                  <Link href={`/products/${p.slug}/`} className="flex items-center gap-4">
                    <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-sm bg-[var(--soft)]">
                      {img && (
                        <Image src={img} alt="" fill sizes="80px" className="object-contain p-1.5 mix-blend-multiply" />
                      )}
                    </span>
                    <span>
                      <span className="block font-semibold text-[var(--ink)] group-hover:text-[#0056B3]">{p.name}</span>
                      {p.brand && <span className="block text-[13px] text-[var(--ink-3)]">{p.brand}</span>}
                    </span>
                  </Link>
                </td>
                {columns.map((c) => (
                  <td key={c} className="font-medium text-[var(--ink)] tnum">{valueFor(p, c)}</td>
                ))}
                <td className="whitespace-nowrap">
                  <Link href={`/products/${p.slug}/`} className="link-more">
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
