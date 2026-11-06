import { site, branchOffices } from "@/data/site";
import { BRANCH_LOCATIONS } from "@/data/locations";
import { PRODUCT_IMAGE_MAP } from "@/data/product-media";
import type { Product } from "@/data/products";
import type { Category } from "@/data/categories";
import type { KnowledgeArticle } from "@/data/knowledge-hub";
import type { NewsArticle, EventArticle } from "@/data/news";

export const SITE_URL = "https://orbitindia.com";

/**
 * Ensures an image URL or path is absolute.
 */
export function absoluteUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return `${SITE_URL}/logo.png`;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const clean = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${clean}`;
}

/**
 * 1. Global Site Schema (Corporation & WebSite with SearchAction)
 */
export function getSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": `${SITE_URL}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          width: "280",
          height: "80",
        },
        image: `${SITE_URL}/logo.png`,
        description: site.description,
        telephone: site.phones.office,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.pin.replace(/\s+/g, ""),
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phones.office,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: site.phones.sales1,
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: site.phones.service,
            contactType: "technical support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        knowsAbout: [
          "Bomb Calorimetry",
          "High Pressure Reactors and Autoclaves",
          "Thermogravimetric Analysis",
          "Ash Fusion Temperature Determination",
          "Elemental Carbon and Sulfur Analysis",
          "Laboratory Furnaces",
          "Gas Generators",
          "Hydrotesting Services",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: site.name,
        description: site.tagline,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/products/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-US",
      },
    ],
  };
}

/**
 * 2. Product Schema (Google Search & Merchant Compliant)
 */
export function getProductSchema(
  product: Product,
  category?: Category | null,
  skuCode?: string
) {
  const rawImages = PRODUCT_IMAGE_MAP[product.slug] || [];
  const images = (rawImages.length > 0 ? rawImages : ["/logo.png"]).map((img) =>
    absoluteUrl(img)
  );

  const additionalProperties = (product.specs || []).map(([name, value]) => ({
    "@type": "PropertyValue",
    name,
    value,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.slug}/#product`,
    name: product.name,
    url: `${SITE_URL}/products/${product.slug}/`,
    image: images,
    description: (product.description || product.tagline).slice(0, 5000),
    sku: skuCode || product.slug.toUpperCase(),
    mpn: product.slug,
    brand: {
      "@type": "Brand",
      name: product.brand || "Orbit Technologies",
    },
    manufacturer: {
      "@type": "Organization",
      name: product.brand || "Orbit Technologies",
    },
    category: category?.name || product.category,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.slug}/`,
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: site.legalName,
      },
    },
    ...(additionalProperties.length > 0
      ? { additionalProperty: additionalProperties }
      : {}),
  };
}

/**
 * 3. Knowledge Hub Article Schema (TechArticle)
 */
export function getKnowledgeArticleSchema(article: KnowledgeArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/knowledge-hub/${article.slug}/#article`,
    headline: article.title,
    description: article.summary,
    url: `${SITE_URL}/knowledge-hub/${article.slug}/`,
    datePublished: "2026-01-15T09:00:00+05:30",
    dateModified: "2026-11-06T10:00:00+05:30",
    articleSection: article.category,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: article.author || "Orbit Technologies Applications Engineering Division",
      url: `${SITE_URL}/about-us/`,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    about: article.standards.map((std) => ({
      "@type": "Thing",
      name: std,
    })),
  };
}

/**
 * 4. News & Events Schema (NewsArticle or Event)
 */
export function getNewsOrEventSchema(item: NewsArticle | EventArticle) {
  if (item.type === "news") {
    return {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${SITE_URL}/news/${item.slug}/#news`,
      headline: item.title,
      description: item.summary,
      url: `${SITE_URL}/news/${item.slug}/`,
      image: [absoluteUrl(item.image)],
      datePublished: item.publishDate
        ? `${item.publishDate}T09:00:00+05:30`
        : "2026-08-01T09:00:00+05:30",
      dateModified: "2026-11-06T10:00:00+05:30",
      articleSection: item.category,
      inLanguage: "en-US",
      author: {
        "@type": "Organization",
        name: "Orbit Technologies Communications Desk",
        url: `${SITE_URL}/about-us/`,
      },
      publisher: {
        "@type": "Organization",
        name: site.legalName,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
      },
    };
  }

  // Event schema
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${SITE_URL}/news/${item.slug}/#event`,
    name: item.title,
    description: item.subtitle,
    url: `${SITE_URL}/news/${item.slug}/`,
    image: [absoluteUrl(item.image)],
    startDate: item.startDate ? `${item.startDate}T09:00:00+05:30` : undefined,
    endDate: item.endDate ? `${item.endDate}T18:00:00+05:30` : undefined,
    eventStatus:
      item.status === "past"
        ? "https://schema.org/EventMovedOnline"
        : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: item.venue || item.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: item.location,
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: item.show || site.legalName,
      url: `${SITE_URL}/`,
    },
  };
}

/**
 * 5. Contact Page Schema (ContactPage + LocalBusiness)
 */
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact-us/#contact`,
    url: `${SITE_URL}/contact-us/`,
    name: `Contact Us · ${site.name}`,
    description: `Connect with Orbit Technologies' headquarters in Hyderabad and 14 sales and service branches across India.`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: site.legalName,
      image: `${SITE_URL}/logo.png`,
      telephone: site.phones.office,
      email: site.email,
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.pin.replace(/\s+/g, ""),
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:30",
          closes: "17:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:30",
          closes: "13:00",
        },
      ],
      areaServed: branchOffices.map((city) => ({
        "@type": "City",
        name: city,
      })),
    },
  };
}

/**
 * 6. About Page Schema (AboutPage)
 */
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about-us/#about`,
    url: `${SITE_URL}/about-us/`,
    name: `About Us · ${site.legalName}`,
    description: site.description,
    mainEntity: {
      "@type": "Corporation",
      name: site.legalName,
      foundingDate: "1995",
      foundingLocation: {
        "@type": "Place",
        name: "Hyderabad, India",
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "50-100",
      },
      url: `${SITE_URL}/`,
    },
  };
}

/**
 * 7. Industry Solutions Schema (CollectionPage + ItemList)
 */
export function getIndustryPageSchema(industryTitle: string, industryDescription: string, productSlugs: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${industryTitle} Analytical Instruments & Solutions`,
    description: industryDescription,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: productSlugs.length,
      itemListElement: productSlugs.slice(0, 15).map((slug, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/products/${slug}/`,
      })),
    },
  };
}

/**
 * 8. Services Page Schema (Service)
 */
export function getServicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/our-services/#service`,
    name: "Scientific Instrument Calibration, Hydrotesting & Maintenance",
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: `${SITE_URL}/`,
    },
    serviceType: [
      "Hydrotesting of Pressure Vessels and Autoclaves",
      "Calorimeter Temperature and Heat Capacity Calibration",
      "Installation and IQ/OQ/PQ Commissioning",
      "Annual Maintenance Contracts (AMC) and Preventative Maintenance",
      "Spare Parts & Bomb Cylinder Re-certification",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

/**
 * 10. OEM Principal Schema (Brand & Organization)
 */
export function getPrincipalSchema(name: string, tagline: string, slug: string, logo?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": `${SITE_URL}/principals/${slug}/#brand`,
    name: name,
    description: tagline,
    url: `${SITE_URL}/principals/${slug}/`,
    image: absoluteUrl(logo),
  };
}

/**
 * 11. Locations Page Schema (CollectionPage + ItemList of LocalBusiness branches)
 */
export function getLocationsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Orbit Technologies PAN-India Branch Network",
    description:
      "15 direct sales and service locations across India providing 24-48 hour on-site laboratory support.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: BRANCH_LOCATIONS.length,
      itemListElement: BRANCH_LOCATIONS.map((loc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "LocalBusiness",
          name: `Orbit Technologies Pvt. Ltd. - ${loc.city} Office`,
          telephone: loc.phone,
          email: loc.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.address,
            addressLocality: loc.city,
            addressRegion: loc.state,
            addressCountry: "IN",
          },
        },
      })),
    },
  };
}
