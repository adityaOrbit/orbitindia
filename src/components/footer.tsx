"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { withBasePath } from "@/lib/utils";
import { trackContactClick } from "@/lib/analytics";

const quickLinks = [
  { href: "/about-us", label: "About Orbit" },
  { href: "/products", label: "All Products" },
  { href: "/orbit-as-a-manufacturer", label: "Manufacturing (Orlab)" },
  { href: "/orbit-as-a-distributor", label: "Distribution Heritage" },
  { href: "/principals", label: "OEM Principals" },
  { href: "/industries", label: "Industry Solutions" },
  { href: "/our-services", label: "Services & Hydrotesting" },
  { href: "/service-complaint-form", label: "Service Complaint Form" },
  { href: "/our-clients", label: "Our Clients" },
  { href: "/knowledge-hub", label: "Knowledge Hub" },
  { href: "/news", label: "News & Events" },
  { href: "/locations", label: "PAN-India Locations" },
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

export function Footer() {
  return (
    <footer className="mt-16 bg-[#002f49] text-slate-300">
      <div className="container-x py-14">
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Description */}
          <div>
            <Image
              src={withBasePath("/logo-white.png")}
              alt="Orbit Technologies"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#ffb347]">
              Orbit Technologies Pvt. Ltd.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Scientific and analytical instruments for laboratories and research.
            </p>
            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb347]" />
                <span>
                  B-50, Industrial Estate, Sanath Nagar, Hyderabad – 500018, Telangana, India
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#ffb347]" />
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
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#ffb347]" />
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
                    className="text-slate-300 transition hover:text-[#ffb347]"
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
                    className="text-slate-300 transition hover:text-[#ffb347]"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Branch Network */}
          <div>
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
            <div className="mt-4">
              <Link
                href="/locations/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffb347] hover:underline"
              >
                View Detailed Branch Profiles &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Orbit Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition">
              Terms and Conditions
            </a>
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