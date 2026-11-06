"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { PRODUCT_IMAGE_MAP } from "@/data/product-media";
import { InstrumentArt } from "@/components/instrument-art";
import { trackSelectItem } from "@/lib/analytics";

interface ProductCardProps {
  product: Product;
  itemListId?: string;
  itemListName?: string;
  index?: number;
}

export function ProductCard({
  product,
  itemListId,
  itemListName,
  index,
}: ProductCardProps) {
  const images = PRODUCT_IMAGE_MAP[product.slug] || [];
  const mappedImage = images.length > 0 ? images[0] : null;

  const handleClick = () => {
    trackSelectItem({
      itemListId,
      itemListName,
      product,
      index,
    });
  };

  return (
    <Link
      href={`/products/${product.slug}/`}
      onClick={handleClick}
      className="group flex flex-col rounded-xl border border-slate-200/90 bg-white shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md overflow-hidden"
    >
      <div className="relative aspect-4/3 w-full border-b border-slate-100 bg-[#f9fafb] p-3 flex items-center justify-center overflow-hidden">
        {mappedImage ? (
          <div className="relative h-full w-full">
            <Image
              src={mappedImage}
              alt={product.name}
              fill
              className="object-contain transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ) : (
          <InstrumentArt
            seed={product.slug}
            view={0}
            className="w-full transition duration-300 group-hover:scale-[1.02]"
          />
        )}
        {product.brand && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#002f49] ring-1 ring-slate-200/80 shadow-xs">
            {product.brand}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm sm:text-base font-bold leading-snug text-[#002f49] group-hover:text-[#c4620a] transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-600">
          {product.tagline}
        </p>
        <span className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#002f49]">
          <span>View details</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#c4620a] transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
