"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown, SlidersHorizontal } from "lucide-react";
import { site } from "@/data/site";
import { authenticMegaMenu } from "@/data/categories";
import { cn, withBasePath } from "@/lib/utils";
import { trackContactClick } from "@/lib/analytics";

const aboutLinks = [
  { href: "/about-us/", label: "About Us" },
  { href: "/orbit-as-a-manufacturer/", label: "Orbit as a Manufacturer" },
  { href: "/orbit-as-a-distributor/", label: "Orbit as a Distributor" },
  { href: "/principals/", label: "Principals" },
  { href: "/our-clients/", label: "Our Clients" },
];

/** Mobile/tablet menu: flat product category links (no nested sub-menus). */
const mobileProductLinks = [
  { href: "/analytical-instruments/", label: "Analytical Instruments" },
  { href: "/reactors/", label: "Parr Reactors" },
  { href: "/milling-pulverising/", label: "Sample Preparation Equipment" },
  { href: "/furnace-heating-systems/", label: "Furnace & Heating Systems" },
  { href: "/crms-srms-laboratory-accessories/", label: "CRM’s, SRM’s & Laboratory Accessories" },
];

/** Knowledge Hub sub-pages (dropdown on desktop, accordion on phones). */
const knowledgeLinks = [
  { href: "/knowledge-hub/blogs/", label: "Blogs" },
  { href: "/knowledge-hub/tools/", label: "Tools" },
  { href: "/knowledge-hub/resources/", label: "Resources" },
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
  const [mobileKnowledge, setMobileKnowledge] = useState(false);
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

  // Publish the sticky header's height as --header-h so in-page sticky bars
  // (e.g. the product section bar) can sit directly underneath it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const bar = el.firstElementChild as HTMLElement | null;
    const update = () => {
      // Measure the logo row + nav bar only (not an open menu panel).
      let h = 0;
      for (const child of Array.from(el.children) as HTMLElement[]) {
        const pos = getComputedStyle(child).position;
        if (pos === "absolute" || pos === "fixed" || child.offsetHeight === 0) continue;
        if (child.tagName === "NAV" || child === bar || child.dataset.headerRow !== undefined) h += child.offsetHeight;
      }
      document.documentElement.style.setProperty("--header-h", `${h || el.offsetHeight}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

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
      {/* Logo & Contact Action Row */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-x flex h-16 sm:h-20 items-center justify-between gap-3 py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center py-1">
            <Image
              src={withBasePath("/logo-orbit.png")}
              alt="Orbit Technologies"
              width={240}
              height={90}
              className="h-12 sm:h-14 md:h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right Actions: Phone, Email & Request a Quote (Desktop md+) */}
          <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-6">
            <div className="hidden md:flex flex-col justify-center gap-1.5">
              {/* Phone */}
              <a
                href={`tel:${site.phones.office.replace(/[^+\d]/g, "")}`}
                onClick={() =>
                  trackContactClick({
                    type: "phone",
                    value: site.phones.office,
                    context: "header_action_row",
                  })
                }
                className="group flex items-center gap-2 transition"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ebf3fc] text-[#0056B3] transition group-hover:bg-[#feeceb] group-hover:text-[#d00000]">
                  <Phone className="h-3 w-3" />
                </div>
                <span className="text-xs font-bold text-[#0056B3] transition group-hover:text-[#d00000] whitespace-nowrap">
                  {site.phones.office}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${site.email}`}
                onClick={() =>
                  trackContactClick({
                    type: "email",
                    value: site.email,
                    context: "header_action_row",
                  })
                }
                className="group flex items-center gap-2 transition"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ebf3fc] text-[#0056B3] transition group-hover:bg-[#feeceb] group-hover:text-[#d00000]">
                  <Mail className="h-3 w-3" />
                </div>
                <span className="text-xs font-bold text-[#0056B3] transition group-hover:text-[#d00000] whitespace-nowrap">
                  {site.email}
                </span>
              </a>
            </div>

            {/* Request a Quote CTA (Desktop md+) */}
            <Link
              href="/contact-us#quote"
              className="btn btn-accent hidden md:inline-flex shadow-sm hover:shadow text-xs lg:text-sm"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#0056B3] hover:bg-slate-100 lg:hidden cursor-pointer transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            "border-b border-slate-200 bg-white lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl transition-all duration-200 ease-in-out",
            open ? "block" : "hidden"
          )}
        >
          <nav className="container-x flex flex-col py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-[#0056B3]"
            >
              Home
            </Link>

            {/* Mobile Products Accordion */}
            <div className="rounded-lg bg-slate-50/70 border border-slate-100 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileProducts((v) => !v)}
                className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0056B3] transition cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-slate-500 transition-transform duration-200",
                    mobileProducts && "rotate-180"
                  )}
                />
              </button>

              {mobileProducts && (
                <div className="border-t border-slate-100 bg-white px-3 py-1.5 space-y-1">
                  {mobileProductLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0056B3]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile About Us Accordion */}
            <div className="rounded-lg bg-slate-50/70 border border-slate-100 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileAbout((v) => !v)}
                className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0056B3] transition cursor-pointer"
              >
                <span>About Us</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-slate-500 transition-transform duration-200",
                    mobileAbout && "rotate-180"
                  )}
                />
              </button>
              {mobileAbout && (
                <div className="border-t border-slate-100 bg-white px-3 py-1.5 space-y-1">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0056B3]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard Nav Items (Knowledge Hub opens its sub-pages) */}
            {mainNav.map((item) =>
              item.href === "/knowledge-hub/" ? (
                <div key={item.href} className="rounded-lg bg-slate-50/70 border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileKnowledge((v) => !v)}
                    aria-expanded={mobileKnowledge}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0056B3] transition cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-slate-500 transition-transform duration-200",
                        mobileKnowledge && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileKnowledge && (
                    <div className="border-t border-slate-100 bg-white px-3 py-1.5 space-y-1">
                      {knowledgeLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-2 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0056B3]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-[#0056B3]"
              >
                {item.label}
              </Link>
              )
            )}

            {/* Instrument Finder Link (Mobile) */}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/instrument-finder/"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-lg border border-slate-200 bg-[#f8fafc] p-3 shadow-xs transition hover:border-[#0056B3]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#ebf3fc] text-[#0056B3]">
                    <SlidersHorizontal className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0056B3]">Instrument Finder</p>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Filter by test method or standard
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#0056B3]" />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Royal Blue Navigation Bar (Desktop lg:) */}
      <div data-header-row className="relative hidden bg-[#0056B3] lg:block">
        <div className="container-x flex items-center justify-between">
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              onMouseEnter={() => {
                closeMegaMenuImmediately();
                closeAboutMenuImmediately();
              }}
              className="px-3.5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:text-[#cce1f9]"
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
                    ? "bg-white text-[#0056B3]"
                    : "text-white hover:text-[#cce1f9]"
                )}
              >
                <span>Products</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    productsOpen && "rotate-180 text-[#d00000]"
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
                    ? "bg-white text-[#0056B3]"
                    : "text-white hover:text-[#cce1f9]"
                )}
              >
                <span>About Us</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    aboutOpen && "rotate-180 text-[#d00000]"
                  )}
                />
              </Link>

              {/* About Us Submenu Dropdown */}
              <div
                role="menu"
                aria-orientation="vertical"
                className={cn(
                  "absolute left-0 top-full z-50 w-56 rounded-b-xl border border-slate-200 bg-white py-1.5 shadow-xl transition-all duration-150 ease-out",
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
                    className="block px-4 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-[#0056B3]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {mainNav.map((item) =>
              item.href === "/knowledge-hub/" ? (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseEnter={() => {
                    closeMegaMenuImmediately();
                    closeAboutMenuImmediately();
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    className="flex cursor-default items-center gap-1.5 rounded-t-sm px-3.5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition group-hover:bg-white group-hover:text-[#0056B3] group-focus-within:bg-white group-focus-within:text-[#0056B3]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-hover:text-[#d00000]" />
                  </button>
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    className="invisible absolute left-0 top-full z-50 w-56 -translate-y-1 rounded-b-xl border border-slate-200 bg-white py-1.5 opacity-0 shadow-xl transition-all duration-150 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                  >
                    {knowledgeLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        role="menuitem"
                        className="block px-4 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-[#0056B3]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => {
                    closeMegaMenuImmediately();
                    closeAboutMenuImmediately();
                  }}
                  className="px-3.5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:text-[#cce1f9]"
                >
                  {item.label}
                </Link>
              )
            )}
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
                <div className="w-80 shrink-0 border-r border-slate-200 bg-[#f8fafc] flex flex-col justify-between">
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
                              "flex items-center justify-between px-4 py-3 text-xs font-semibold transition-all border-b border-slate-200/70",
                              isActive
                                ? "bg-[#0056B3] text-white font-bold border-r-[5px] border-r-[#d00000] shadow-xs"
                                : "text-slate-800 hover:bg-[#ebf3fc]"
                            )}
                          >
                            <span className="leading-snug">{tab.title}</span>
                            <ArrowRight
                              className={cn(
                                "h-3.5 w-3.5 shrink-0 transition-opacity",
                                isActive ? "opacity-100 text-white" : "opacity-0"
                              )}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Standout Instrument Finder Link (Below CRM's & SRM's Category) */}
                  <div className="p-3 border-t border-slate-200 bg-slate-50">
                    <Link
                      href="/instrument-finder/"
                      onClick={() => setProductsOpen(false)}
                      className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 shadow-xs transition-all hover:border-[#0056B3] hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#ebf3fc] text-[#0056B3] transition-colors group-hover:bg-[#feeceb] group-hover:text-[#d00000]">
                          <SlidersHorizontal className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0056B3] transition-colors group-hover:text-[#d00000]">
                            Instrument Finder
                          </p>
                          <p className="text-[11px] text-slate-500 leading-tight">
                            Filter by test method or standard
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#0056B3]" />
                    </Link>
                  </div>
                </div>

                {/* Right Panel: Clean Subcategory Columns for Active Tab (No preview images, No explore button) */}
                <div className="flex-1 bg-white p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Active Tab Title */}
                    <div className="border-b border-slate-100 pb-3 mb-6">
                      <h2 className="text-base font-semibold text-[#0056B3] tracking-tight">
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
                                className="block font-bold text-sm text-[#d00000] hover:underline mb-2 transition-colors"
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
                                        className="text-xs text-slate-700 hover:text-[#d00000] hover:underline block py-0.5 leading-snug transition-colors"
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
                                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#d00000] hover:underline uppercase tracking-wide"
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
