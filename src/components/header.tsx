"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { authenticMegaMenu } from "@/data/categories";
import { cn, withBasePath } from "@/lib/utils";
import { trackContactClick } from "@/lib/analytics";

const aboutLinks = [
  {
    href: "/about-us/",
    label: "About Orbit Overview",
    description: "Corporate history, infrastructure & 35-year legacy",
  },
  {
    href: "/orbit-as-a-manufacturer/",
    label: "Orbit as a Manufacturer",
    description: "Orlab Instruments Pvt. Ltd. 30,000 sq. ft. manufacturing facility",
  },
  {
    href: "/orbit-as-a-distributor/",
    label: "Orbit as a Distributor",
    description: "35+ years distribution legacy & exclusive Parr partnership",
  },
  {
    href: "/principals/",
    label: "OEM Principals",
    description: "Parr, NCS, NC Tech, Elite, Sylab & international partners",
  },
  {
    href: "/our-clients/",
    label: "Our Clients",
    description: "7,000+ client installations across power, steel, mining & R&D",
  },
];

const mainNav = [
  { href: "/industries/", label: "Industries" },
  { href: "/our-services/", label: "Services" },
  { href: "/knowledge-hub/", label: "Knowledge Hub" },
  { href: "/news/", label: "News & Events" },
  { href: "/contact-us/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState<string | null>("analytical-instruments");
  const [activeTabId, setActiveTabId] = useState<string>("analytical-instruments");

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const closeAboutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const activeTab =
    authenticMegaMenu.find((t) => t.id === activeTabId) || authenticMegaMenu[0];

  const openMegaMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setAboutOpen(false);
    setProductsOpen(true);
  };

  const scheduleCloseMegaMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 200);
  };

  const closeMegaMenuImmediately = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setProductsOpen(false);
  };

  const openAboutMenu = () => {
    if (closeAboutTimerRef.current) {
      clearTimeout(closeAboutTimerRef.current);
      closeAboutTimerRef.current = null;
    }
    setProductsOpen(false);
    setAboutOpen(true);
  };

  const scheduleCloseAboutMenu = () => {
    if (closeAboutTimerRef.current) {
      clearTimeout(closeAboutTimerRef.current);
    }
    closeAboutTimerRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 200);
  };

  const closeAboutMenuImmediately = () => {
    if (closeAboutTimerRef.current) {
      clearTimeout(closeAboutTimerRef.current);
      closeAboutTimerRef.current = null;
    }
    setAboutOpen(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (closeAboutTimerRef.current) clearTimeout(closeAboutTimerRef.current);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden bg-[#001c2c] text-slate-300 md:block">
        <div className="container-x flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${site.phones.office.replace(/[^+\d]/g, "")}`}
              onClick={() =>
                trackContactClick({
                  type: "phone",
                  value: site.phones.office,
                  context: "header_top_bar",
                })
              }
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-[#ffb347]" /> {site.phones.office}
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={() =>
                trackContactClick({
                  type: "email",
                  value: site.email,
                  context: "header_top_bar",
                })
              }
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-[#ffb347]" /> {site.email}
            </a>
          </div>
          <p className="text-slate-400">Mon–Fri 9:30 AM – 5:30 PM · Sat 9:30 AM – 1:00 PM</p>
        </div>
      </div>

      {/* Logo Row: Only the official logo image */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src={withBasePath("/logo-orbit.png")}
              alt="Orbit Technologies"
              width={140}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/contact-us#quote" className="btn btn-accent hidden sm:inline-flex">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="rounded-md border border-slate-200 p-2 text-[#002f49] transition hover:bg-slate-100 sm:hidden cursor-pointer"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={cn("border-b border-slate-200 bg-white sm:hidden", open ? "block" : "hidden")}>
          <nav className="container-x flex flex-col py-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Home
            </Link>

            {/* Mobile Products Accordion */}
            <button
              type="button"
              onClick={() => setMobileProducts((v) => !v)}
              className="flex items-center justify-between rounded-md px-2 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 cursor-pointer"
            >
              <span>Products (8 Divisions)</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileProducts && "rotate-180")} />
            </button>
            {mobileProducts && (
              <div className="mb-2 ml-2 border-l-2 border-[#b91c1c] pl-3 py-2 space-y-3">
                <Link
                  href="/products/"
                  onClick={() => setOpen(false)}
                  className="block text-xs font-bold text-[#b91c1c] uppercase tracking-wide hover:underline"
                >
                  Browse All 178+ Instruments &rarr;
                </Link>
                {authenticMegaMenu.map((tab) => {
                  const isExpanded = mobileActiveTab === tab.id;
                  return (
                    <div key={tab.id} className="border-b border-slate-100 pb-2 last:border-b-0">
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/${tab.path}/`}
                          onClick={() => setOpen(false)}
                          className="block text-xs font-bold text-[#002f49] hover:text-[#b91c1c]"
                        >
                          {tab.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileActiveTab(isExpanded ? null : tab.id)}
                          className="p-1 text-slate-400 hover:text-slate-700"
                          aria-label={`Toggle ${tab.title}`}
                        >
                          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isExpanded && "rotate-180")} />
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="mt-2 ml-2 border-l border-slate-200 pl-2 space-y-2">
                          {tab.columns.flat().map((sec) => (
                            <div key={sec.title} className="space-y-1">
                              <Link
                                href={`/${sec.path}/`}
                                onClick={() => setOpen(false)}
                                className="text-xs font-bold text-[#b91c1c] block"
                              >
                                {sec.title}
                              </Link>
                              {sec.items.length > 0 && (
                                <ul className="ml-1 space-y-0.5">
                                  {sec.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={`/${item.path}/`}
                                        onClick={() => setOpen(false)}
                                        className="text-[11px] text-slate-600 hover:text-[#b91c1c] block py-0.5"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Mobile About Us Accordion */}
            <button
              type="button"
              onClick={() => setMobileAbout((v) => !v)}
              className="flex items-center justify-between rounded-md px-2 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 cursor-pointer"
            >
              <span>About Us</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileAbout && "rotate-180")} />
            </button>
            {mobileAbout && (
              <div className="mb-2 ml-2 border-l-2 border-[#002f49] pl-3 py-1 space-y-1">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#c4620a]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contact-us#quote" onClick={() => setOpen(false)} className="btn btn-accent my-2">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>

      {/* Navy Navigation Bar (Desktop sm:) */}
      <div className="relative hidden bg-[#002f49] sm:block">
        <div className="container-x flex items-center justify-between">
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              onMouseEnter={() => {
                closeMegaMenuImmediately();
                closeAboutMenuImmediately();
              }}
              className="px-3.5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:text-[#ffb347]"
            >
              Home
            </Link>

            {/* Products Dropdown: Clicking navigates to /products, hovering opens mega menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAboutMenuImmediately();
                openMegaMenu();
              }}
              onMouseLeave={scheduleCloseMegaMenu}
            >
              <Link
                href="/products/"
                onClick={() => setProductsOpen(false)}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-3 text-xs font-bold uppercase tracking-[0.08em] transition rounded-t-sm cursor-pointer select-none",
                  productsOpen
                    ? "bg-white text-[#002f49]"
                    : "text-white hover:text-[#ffb347]"
                )}
              >
                <span>Products</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    productsOpen && "rotate-180 text-[#b91c1c]"
                  )}
                />
              </Link>
            </div>

            {/* About Us Dropdown with Manufacturing, Distribution, Principal, Our Client */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeMegaMenuImmediately();
                openAboutMenu();
              }}
              onMouseLeave={scheduleCloseAboutMenu}
            >
              <Link
                href="/about-us/"
                onClick={() => setAboutOpen(false)}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-3 text-xs font-bold uppercase tracking-[0.08em] transition rounded-t-sm cursor-pointer select-none",
                  aboutOpen
                    ? "bg-white text-[#002f49]"
                    : "text-white hover:text-[#ffb347]"
                )}
              >
                <span>About Us</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    aboutOpen && "rotate-180 text-[#c4620a]"
                  )}
                />
              </Link>

              {/* About Us Submenu Dropdown */}
              <div
                role="menu"
                aria-orientation="vertical"
                className={cn(
                  "absolute left-0 top-full z-50 w-72 rounded-b-xl border border-slate-200 bg-white py-2 shadow-2xl transition-all duration-150 ease-out",
                  "before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']",
                  aboutOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                )}
              >
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setAboutOpen(false)}
                    className="group flex flex-col px-4 py-2.5 transition hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                  >
                    <span className="text-xs font-bold text-[#002f49] group-hover:text-[#c4620a] transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => {
                  closeMegaMenuImmediately();
                  closeAboutMenuImmediately();
                }}
                className="px-3.5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:text-[#ffb347]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        <div
          role="region"
          aria-label="Products Navigation Menu"
          aria-hidden={!productsOpen}
          className={cn(
            "absolute left-0 right-0 top-full z-50 transition-all duration-150 ease-out",
            "before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']",
            productsOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-1 pointer-events-none"
          )}
          onMouseEnter={openMegaMenu}
          onMouseLeave={scheduleCloseMegaMenu}
        >
          <div className="container-x">
            <div className="overflow-hidden rounded-b-2xl border border-slate-200 bg-white shadow-[0_30px_70px_-15px_rgba(0,30,55,0.45)]">
              {/* Split Layout: Left Tabs Column + Right Content Area */}
              <div className="flex min-h-[440px]">
                {/* Left Column: 8 Divisions Tabs */}
                <div className="w-80 shrink-0 border-r border-slate-200 bg-[#efebe4]/80">
                  <ul className="flex flex-col py-1">
                    {authenticMegaMenu.map((tab) => {
                      const isActive = tab.id === activeTab.id;
                      return (
                        <li key={tab.id}>
                          <Link
                            href={`/${tab.path}/`}
                            onMouseEnter={() => setActiveTabId(tab.id)}
                            onClick={() => setProductsOpen(false)}
                            className={cn(
                              "flex items-center justify-between px-4 py-3.5 text-xs font-semibold transition-all border-b border-slate-200/70",
                              isActive
                                ? "bg-[#002f49] text-white font-bold border-r-[5px] border-r-[#b91c1c] shadow-xs"
                                : "text-slate-800 hover:bg-[#e4ded5]"
                            )}
                          >
                            <span className="leading-snug">{tab.title}</span>
                            <ArrowRight
                              className={cn(
                                "h-3.5 w-3.5 shrink-0 transition-opacity",
                                isActive ? "opacity-100 text-[#ffb347]" : "opacity-0"
                              )}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Right Panel: Clean Subcategory Columns for Active Tab (No preview images, No explore button) */}
                <div className="flex-1 bg-white p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Active Tab Title */}
                    <div className="border-b border-slate-100 pb-3 mb-6">
                      <h2 className="text-base font-black text-[#002f49] tracking-tight">
                        {activeTab.title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {activeTab.columns.map((col, colIdx) => (
                        <div key={colIdx} className="space-y-6">
                          {col.map((sec) => (
                            <div key={sec.title}>
                              <Link
                                href={`/${sec.path}/`}
                                onClick={() => setProductsOpen(false)}
                                className="block font-bold text-sm text-[#b91c1c] hover:underline mb-2 transition-colors"
                              >
                                {sec.title}
                              </Link>
                              {sec.items.length > 0 && (
                                <ul className="space-y-1.5">
                                  {sec.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={`/${item.path}/`}
                                        onClick={() => setProductsOpen(false)}
                                        className="text-xs text-slate-700 hover:text-[#b91c1c] hover:underline block py-0.5 leading-snug transition-colors"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {sec.viewAllPath && (
                                <Link
                                  href={`/${sec.viewAllPath}/`}
                                  onClick={() => setProductsOpen(false)}
                                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#b91c1c] hover:underline uppercase tracking-wide"
                                >
                                  VIEW ALL &gt;
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Bar */}
              <div className="flex flex-wrap items-center justify-between border-t border-slate-200 bg-[#f8fafc] px-7 py-3 text-xs">
                <div className="flex items-center gap-4 text-slate-600">
                  <span className="font-bold text-[#002f49]">Orbit Technologies</span>
                  <span className="text-slate-300">·</span>
                  <span>35+ Years in India</span>
                  <span className="text-slate-300">·</span>
                  <span className="font-semibold text-emerald-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-4 font-bold">
                  <Link
                    href="/products/"
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center gap-1.5 text-xs text-[#002f49] hover:text-[#b91c1c]"
                  >
                    Browse All 178+ Instruments <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/contact-us#quote"
                    onClick={() => setProductsOpen(false)}
                    className="rounded-lg bg-[#b91c1c] px-3.5 py-1.5 text-xs text-white hover:bg-[#991b1b] transition-colors shadow-xs"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
