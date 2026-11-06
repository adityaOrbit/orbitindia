"use client";

import { useEffect } from "react";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { trackViewItemList } from "@/lib/analytics";

export function CategoryTracker({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  useEffect(() => {
    trackViewItemList({
      itemListId: category.path,
      itemListName: category.name,
      products,
    });
  }, [category.path, category.name, products]);

  return null;
}
