"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  title: string;
  tagline: string;
  badge: string;
  image: string;
  model: string;
  href: string;
}

const DEFAULT_SLIDES: HeroSlide[] = [
  {
    title: "Precision Bomb Calorimetry",
    tagline: "True isoperibol jacket regulation with 0.0001°C precision thermometry",
    badge: "Parr Exclusive Partner",
    image: "/images/products/calorimeter-hero.jpg",
    model: "Parr 7200 / 6400 Series",
    href: "/calorimeter/bomb-calorimeters/",
  },
  {
    title: "High Pressure & High Temperature Reactors",
    tagline: "Custom stirred & non-stirred autoclaves rated up to 350 bar & 500°C",
    badge: "Engineered for Research",
    image: "/images/products/ecs-8024.jpg",
    model: "Parr Series 4520 / 4540",
    href: "/reactors/",
  },
  {
    title: "Thermogravimetric & Proximate Analysis",
    tagline: "Automated moisture, volatile matter, ash, and fixed carbon in one sequence",
    badge: "Orlab Manufacturing",
    image: "/images/products/tga-3000.jpg",
    model: "Orlab TGA 3000",
    href: "/tga-proximate-analyzers/",
  },
  {
    title: "Laboratory & Industrial Furnaces",
    tagline: "Chamber, tube, ashing, and custom sintering furnaces reaching up to 1800°C",
    badge: "Elite Thermal Systems (UK)",
    image: "/images/products/ofcu.jpg",
    model: "High Temperature Systems",
    href: "/furnace-heating-systems/",
  },
];

interface HeroCarouselProps {
  slides?: HeroSlide[];
  children?: React.ReactNode;
}

export function HeroCarousel({ slides = DEFAULT_SLIDES, children }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play timer (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] w-full overflow-hidden bg-[#001421] text-white flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Scientific Instruments Showcase Carousel"
    >
      {/* ------------------------------------------------------------- */}
      {/* BACKGROUND SLIDES: Image right-focused, gradient left-focused */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={slide.model + idx}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Right Side Image Viewport */}
              <div className="absolute inset-y-0 right-0 w-full sm:w-4/5 lg:w-3/5 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    className="object-cover sm:object-contain object-center lg:object-right transition-transform duration-7000 ease-out scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  {/* Subtle lighting highlight */}
                  <div className="absolute inset-0 bg-radial-[circle_at_70%_50%] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Multi-Stop Gradient Masks ensuring left-side text visibility */}
              {/* Desktop: Horizontal left-to-right fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001421] via-[#001421]/95 via-35% md:via-45% to-[#001421]/20 pointer-events-none" />
              {/* Mobile: Vertical top-to-bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001421] via-transparent to-[#001421]/60 pointer-events-none sm:hidden" />
              {/* Ambient Bottom blend */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#001421] to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FOREGROUND CONTENT (Left-aligned text & interactive CTA)     */}
      {/* ------------------------------------------------------------- */}
      <div className="container-x relative z-20 py-16 sm:py-20 lg:py-24">
        {children}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SLIDE INDICATORS & CONTROLS (Floating at bottom-right)        */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 z-30 flex items-center gap-3">
        {/* Active Instrument Badge */}
        <div className="hidden md:flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs border border-white/15">
          <span className="h-2 w-2 rounded-full bg-[#ff8d0a] animate-pulse" />
          <span className="font-semibold text-white/90">
            {slides[current].model}
          </span>
          <span className="text-white/40">·</span>
          <span className="text-slate-300 text-[11px]">
            {slides[current].badge}
          </span>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md p-1 border border-white/10">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="cursor-pointer rounded-full p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1 px-1">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrent(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`cursor-pointer rounded-full transition-all ${
                  dotIdx === current
                    ? "w-5 h-2 bg-[#ff8d0a]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="cursor-pointer rounded-full p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
