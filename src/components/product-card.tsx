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
}

const isBrandLogo = (url: string) =>
  /parr-1\.png|elite(-1)?\.png|sylab-[a-z0-9]+\.png|orlab-[a-z0-9]+\.png/i.test(url);

export function ProductCard({
  product,
  itemListId,
  itemListName,
  index,
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
      className="group flex flex-col rounded-xl border border-slate-200/90 bg-white shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md overflow-hidden cursor-pointer"
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
      </div>
      <div className="flex flex-1 flex-col p-4 pb-5">
        <h3 className="text-sm sm:text-base font-semibold leading-snug text-[#0056B3] group-hover:text-[#d00000] transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-600">
          {product.tagline}
        </p>
      </div>
    </Link>
  );
}
