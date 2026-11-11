"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { PRODUCT_IMAGE_MAP } from "@/data/product-media";
import { InstrumentArt } from "@/components/instrument-art";
import { trackSelectItem } from "@/lib/analytics";

interface ProductCardProps {
  product: Product;
  itemListId?: string;
  itemListName?: string;
  index?: number;
  /** Smaller card for carousels / dense rows. */
  compact?: boolean;
}

const isBrandLogo = (url: string) =>
  /parr-1\.png|elite(-1)?\.png|sylab-[a-z0-9]+\.png|orlab-[a-z0-9]+\.png/i.test(url);

export function ProductCard({
  product,
  itemListId,
  itemListName,
  index,
  compact = false,
}: ProductCardProps) {
  const images = (PRODUCT_IMAGE_MAP[product.slug] || []).filter(
    (img) => !isBrandLogo(img)
  );
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
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-xs transition-colors hover:border-[#0056B3]/60 overflow-hidden cursor-pointer"
    >
      <div className={`relative ${compact ? "aspect-square p-1.5" : "aspect-4/3 p-2 sm:p-3"} w-full border-b border-slate-100 bg-[#f9fafb] flex items-center justify-center overflow-hidden`}>
        {mappedImage ? (
          <div className="relative h-full w-full">
            <Image
              src={mappedImage}
              alt={product.name}
              fill
              className="object-contain"
              sizes={compact ? "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw" : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
            />
          </div>
        ) : (
          <InstrumentArt
            seed={product.slug}
            view={0}
            className="w-full"
          />
        )}
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-3" : "p-3 sm:p-4 sm:pb-5"}`}>
        <h3 className={`${compact ? "text-xs sm:text-sm line-clamp-2" : "text-sm sm:text-base"} font-semibold leading-snug text-[#0056B3] group-hover:text-[#d00000] transition-colors`}>
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
