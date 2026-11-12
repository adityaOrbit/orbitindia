"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { withBasePath } from "@/lib/utils";
import { trackContactClick } from "@/lib/analytics";
import { NewsletterSignup } from "@/components/newsletter-signup";

const quickLinks = [
  { href: "/about-us", label: "About Orbit" },
  { href: "/products", label: "All Products" },
  { href: "/orbit-as-a-manufacturer", label: "Manufacturing (Orlab)" },
  { href: "/orbit-as-a-distributor", label: "Distribution Heritage" },
  { href: "/principals", label: "Principals" },
  { href: "/industries", label: "Industry Solutions" },
  { href: "/our-services", label: "Services & Hydrotesting" },
  { href: "/service-complaint-form", label: "Service Complaint Form" },
  { href: "/our-clients", label: "Our Clients" },
  { href: "/knowledge-hub", label: "Knowledge Hub" },
  { href: "/news", label: "News & Events" },
  { href: "/contact-us", label: "Contact Us" },
];

const productCategories = [
  { href: "/analytical-instruments/", label: "Analytical Instruments" },
  { href: "/reactors/", label: "Reactors and Pressure Systems" },
  { href: "/milling-pulverising/", label: "Sample Preparation" },
  { href: "/furnace-heating-systems/", label: "Furnaces" },
  { href: "/gas-generators/", label: "Gas Generators" },
  { href: "/precision-balances/", label: "Balances" },
  { href: "/crms-srms-laboratory-accessories/", label: "Labware and Accessories" },
  { href: "/crms-srms-laboratory-accessories/", label: "Reference Materials" },
];

const branchNetwork = [
  "Delhi",
  "Lucknow",
  "Mumbai",
  "Nagpur",
  "Pune",
  "Baroda",
  "Kolkata",
  "Bhubaneswar",
  "Bilaspur",
  "Ranchi",
  "Raipur",
  "Vizag",
  "Bangalore",
  "Chennai",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/orbittechnologies",
    color: "#1877F2",
    icon: <path d="M13.5 21v-7.5h2.6l.4-3.1h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.9v3.1h2.6V21h3Z" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/orbit-technologies-india-pvt-ltd/",
    color: "#0A66C2",
    icon: (
      <>
        <rect x="4" y="9" width="3.4" height="11" />
        <circle cx="5.7" cy="5.6" r="2" />
        <path d="M10 9h3.3v1.5c.5-.9 1.7-1.8 3.4-1.8 3.2 0 3.8 2.1 3.8 4.8V20h-3.4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20H10V9Z" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/orbittechnologiespvtltd/",
    color: "#E4405F",
    icon: (
      <>
        <path d="M12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1 1.1-.1 1.4-.1 4.1-.1Zm0-1.6c-2.7 0-3.1 0-4.2.1-3.6.2-5.6 2.2-5.8 5.8C2 8.9 2 9.3 2 12s0 3.1.1 4.2c.2 3.6 2.2 5.6 5.8 5.8 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c3.6-.2 5.6-2.2 5.8-5.8.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.2-3.6-2.2-5.6-5.8-5.8C15.1 2 14.7 2 12 2Z" />
        <path d="M12 6.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Zm0 8.5a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Z" />
        <circle cx="17.3" cy="6.7" r="1.2" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@orbittechnologies4462/featured",
    color: "#FF0000",
    icon: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />,
  },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#001c3d] text-slate-300">
      <div className="container-x py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {/* Col 1: Brand & Description */}
          <div className="col-span-2 text-center md:col-span-1 md:text-left">
            <Image
              src={withBasePath("/logo-white.png")}
              alt="Orbit Technologies"
              width={150}
              height={60}
              className="mx-auto h-12 w-auto md:mx-0"
            />
            <p className="mt-2 text-xs font-semibold text-[#93c5fd]">
              Orbit Technologies Pvt. Ltd.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Scientific and analytical instruments for laboratories and research.
            </p>
            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <p className="flex items-start justify-center gap-2 md:justify-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#93c5fd]" />
                <span>
                  B-50, Industrial Estate, Sanath Nagar, Hyderabad – 500018, Telangana, India
                </span>
              </p>
              <p className="flex items-center justify-center gap-2 md:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-[#93c5fd]" />
                <a
                  href="tel:+914067216354"
                  onClick={() =>
                    trackContactClick({
                      type: "phone",
                      value: "+91 40 6721 6354",
                      context: "footer_contact",
                    })
                  }
                  className="hover:text-white transition"
                >
                  +91 40 6721 6354
                </a>
              </p>
              <p className="flex items-center justify-center gap-2 md:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-[#93c5fd]" />
                <a
                  href="mailto:orbit@orbitindia.com"
                  onClick={() =>
                    trackContactClick({
                      type: "email",
                      value: "orbit@orbitindia.com",
                      context: "footer_contact",
                    })
                  }
                  className="hover:text-white transition"
                >
                  orbit@orbitindia.com
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Product Categories
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {productCategories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Branch Network */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Branch Network
            </h3>
            <p className="mt-4 text-xs text-slate-300">
              Pan-India sales and service support across 14 key cities:
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {branchNetwork.map((branch) => (
                <span
                  key={branch}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                >
                  {branch}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter + Social Row */}
        <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="w-full md:max-w-md">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Subscribe to Our Newsletter
            </h3>
            <div className="mt-4">
              <NewsletterSignup source="Footer" />
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch with Us
            </h3>
            <ul className="mt-4 flex items-center gap-3 md:justify-end">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Orbit Technologies on ${s.label}`}
                    title={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:-translate-y-0.5 hover:brightness-110"
                    style={{ backgroundColor: s.color }}
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Orbit Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-use/" className="hover:text-white transition">
              Terms of Use
            </Link>
            <span>|</span>
            <a href="#sitemap" className="hover:text-white transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}