"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product-card";

const PAGE_SIZE = 12;

/**
 * Product card grid that renders the first 12 products and reveals 12 more
 * per "Show more" tap, so long catalogues don't become 25+ screens on phones.
 * `resetKey` (e.g. the active filters) returns the grid to the first page.
 */
export function ProductGrid({
  products,
  className,
  itemListId,
  itemListName,
  resetKey = "",
}: {
  products: Product[];
  className: string;
  itemListId?: string;
  itemListName?: string;
  resetKey?: string;
}) {
  const [state, setState] = useState({ key: resetKey, count: PAGE_SIZE });
  const count = state.key === resetKey ? state.count : PAGE_SIZE;
  const visible = products.slice(0, count);
  const remaining = products.length - visible.length;

  return (
    <>
      <div className={className}>
        {visible.map((p, idx) => (
          <ProductCard
            key={p.slug}
            product={p}
            itemListId={itemListId}
            itemListName={itemListName}
            index={idx}
          />
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setState({ key: resetKey, count: count + PAGE_SIZE })}
            className="btn btn-outline min-h-[48px] w-full max-w-xs justify-center"
          >
            Show more <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
}
