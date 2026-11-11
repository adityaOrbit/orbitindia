"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  // Auto-rotate the background image every 1.5 seconds (no manual controls).
  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] w-full overflow-hidden bg-[#001733] text-white flex items-center"
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
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
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
                    className="object-cover sm:object-contain object-center lg:object-right"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Multi-Stop Gradient Masks ensuring left-side text visibility */}
              {/* Desktop: Horizontal left-to-right fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001733] via-[#001733]/95 via-35% md:via-45% to-[#001733]/20 pointer-events-none" />
              {/* Mobile: Vertical top-to-bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001733] via-transparent to-[#001733]/60 pointer-events-none sm:hidden" />
              {/* Ambient Bottom blend */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#001733] to-transparent pointer-events-none" />
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

    </div>
  );
}
