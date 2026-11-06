"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Share2,
  Maximize2,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { InstrumentArt } from "@/components/instrument-art";
import { PRODUCT_IMAGE_MAP } from "@/data/product-media";
import type { Product } from "@/data/products";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeThumb, setActiveThumb] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const rawImages = PRODUCT_IMAGE_MAP[product.slug] || [];
  const realImages = rawImages.filter(
    (img) => !/parr-1\.png|elite(-1)?\.png|sylab-[a-z0-9]+\.png|orlab-[a-z0-9]+\.png/i.test(img)
  );
  const images = realImages.length > 0 ? realImages : rawImages;
  const hasImages = images.length > 0;
  const totalImages = hasImages ? images.length : 1;

  const currentImage = hasImages ? images[activeThumb] || images[0] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveThumb((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveThumb((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && navigator?.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Main Viewport Card */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f8fafc] shadow-xs">
        {/* Top-Right Action Controls: Share Link & Lightbox Toggle */}
        <div className="absolute right-3.5 top-3.5 z-10 flex items-center gap-1.5">
          {/* Sharable Link Icon Only */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="cursor-pointer relative rounded-lg bg-white/95 p-2 text-slate-600 shadow-xs hover:bg-white hover:text-[#0056B3] transition-all"
            title={copied ? "Link copied!" : "Copy sharable link"}
            aria-label="Copy link to clipboard"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-600" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}
            {copied && (
              <span className="absolute -bottom-8 right-0 rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-white shadow-md whitespace-nowrap">
                Link copied!
              </span>
            )}
          </button>

          {/* Maximize / Lightbox Toggle */}
          {hasImages && (
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="cursor-pointer rounded-lg bg-white/95 p-2 text-slate-600 shadow-xs hover:bg-white hover:text-[#0056B3] transition-all"
              title="Open high-resolution lightbox"
              aria-label="Expand image view"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Navigation Arrow Left (if multiple images) */}
        {totalImages > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md text-slate-700 hover:bg-white hover:text-[#0056B3] transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {/* Navigation Arrow Right (if multiple images) */}
        {totalImages > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md text-slate-700 hover:bg-white hover:text-[#0056B3] transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}

        {/* Main Display Area */}
        <div
          onClick={() => hasImages && setLightboxOpen(true)}
          className="relative flex items-center justify-center p-6 min-h-[380px] sm:min-h-[440px] cursor-pointer"
        >
          {currentImage ? (
            <div className="relative h-[340px] sm:h-[400px] w-full">
              <Image
                src={currentImage}
                alt={`${product.name} - view ${activeThumb + 1}`}
                fill
                priority
                className="object-contain transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="w-full">
              <InstrumentArt
                seed={product.slug}
                view={0}
                className="w-full"
                label={product.name}
              />
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails Row (if multiple images) */}
      {totalImages > 1 && (
        <div className="mt-3.5 flex gap-2.5 overflow-x-auto scrollbar-thin pb-1">
          {images.map((img, idx) => {
            const isActive = idx === activeThumb;
            return (
              <button
                key={img + idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveThumb(idx);
                }}
                className={`cursor-pointer relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border bg-white p-1 transition-all ${
                  isActive
                    ? "border-[#d00000] ring-2 ring-[#d00000]/40 shadow-sm"
                    : "border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100"
                }`}
                title={`View photo ${idx + 1}`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="cursor-pointer absolute top-2 right-2 z-50 rounded-full bg-white/20 p-2.5 text-white hover:bg-white/30 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Nav Arrows in Lightbox */}
            {totalImages > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Lightbox Main Image */}
            <div className="relative w-full h-[80vh]">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-3 text-center text-white">
              <p className="text-sm font-bold">{product.name}</p>
              <p className="text-xs text-slate-300">
                Photo {activeThumb + 1} of {totalImages} &middot; Orbit Technologies
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
