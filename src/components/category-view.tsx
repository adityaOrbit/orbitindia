import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Breadcrumb, type Crumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { CategorySeoSection } from "@/components/category-seo-section";
import { CategoryTracker } from "@/components/category-tracker";
import {
  ancestorsOf,
  categories,
  getCategoryByPath,
  type Category,
} from "@/data/categories";
import { getCategoryHeroIntro } from "@/data/category-seo";
import { products, productsByCategory } from "@/data/products";
import { CATEGORY_IMAGE_MAP } from "@/data/product-media";
import { site } from "@/data/site";

function getSubcategories(category: Category): Category[] {
  // Direct children registered with this category as parent
  const direct = categories.filter((c) => c.parent === category.path);
  if (direct.length > 0) return direct;

  if (category.path === "analytical-instruments") {
    const order = [
      "calorimeter",
      "ash-fusion-analyzers",
      "tga-proximate-analyzers",
      "elemental-analyzers",
      "coal-and-coke-testing-instruments",
      "other-instruments",
    ];
    return order
      .map((p) => getCategoryByPath(p))
      .filter((c): c is Category => c !== null);
  }

  if (category.path === "crms-srms-laboratory-accessories") {
    const order = [
      "laboratory-accessories",
      "certified-and-standard-reference-materials",
    ];
    return order
      .map((p) => getCategoryByPath(p))
      .filter((c): c is Category => c !== null);
  }

  if (category.path === "furnace-heating-systems") {
    return categories.filter(
      (c) =>
        c.parent === null &&
        c.pillar === "furnaces" &&
        c.path !== "furnace-heating-systems",
    );
  }

  return [];
}

function getCategoryProducts(category: Category) {
  if (category.path === "denatec") {
    return products.filter((p) => p.category === "denatec");
  }
  if (category.path === "analytical-balances") {
    return products.filter((p) =>
      [
        "premium-level-micro-semi-micro",
        "micro-analytical",
        "semi-micro-analytical",
        "advanced-level-analytical",
        "standard-level-analytical",
      ].includes(p.category),
    );
  }
  return productsByCategory(category.path, { deep: true });
}

/** Breadcrumb: Home > ancestors > self */
function crumbsFor(category: Category): Crumb[] {
  const ancestors = ancestorsOf(category.path)
    .filter((a) => a.path !== category.path)
    .map((a) => ({ label: a.name, href: `/${a.path}/` }));
  return [...ancestors, { label: category.name }];
}

export function CategoryView({ category }: { category: Category }) {
  const children = getSubcategories(category);
  const allCategoryProducts = getCategoryProducts(category);
  const heroIntro = getCategoryHeroIntro(category);
  const hasChildren = children.length > 0;

  return (
    <div className="bg-white">
      <CategoryTracker category={category} products={allCategoryProducts} />
      {/* 1. HERO SECTION: Clean breadcrumb & clear title with concise intro */}
      <Breadcrumb items={crumbsFor(category)} />
      <PageHero
        title={category.name}
        subtitle={heroIntro}
      />

      {/* 2. MAIN CONTENT AREA: Clean, visual presentation */}
      <div className="container-x mt-8 space-y-12">
        {hasChildren ? (
          /* Subcategory Grid with Authentic Photography */
          <section aria-label={`Subcategories in ${category.name}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#002f49]">
                Browse Categories ({children.length})
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                Certified Laboratory Instrumentation
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {children.map((c) => {
                const count = productsByCategory(c.path, { deep: true }).length;
                const subIntro = getCategoryHeroIntro(c);
                const imgSrc = CATEGORY_IMAGE_MAP[c.path] || "/images/orbit/Bomb-PNG.png";

                return (
                  <Link
                    key={c.path}
                    href={`/${c.path}/`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:-translate-y-1 hover:border-[#c4620a]/60 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Visual Category Photo Thumbnail */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-[#f8fafc] p-4 flex items-center justify-center border-b border-slate-100">
                      <Image
                        src={imgSrc}
                        alt={c.name}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-[#002f49] shadow-xs ring-1 ring-slate-200">
                        {count} {count === 1 ? "Model" : "Models"} Available
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-base leading-snug text-[#002f49] group-hover:text-[#c4620a] transition-colors">
                            {c.name}
                          </h3>
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[#c4620a] group-hover:bg-[#c4620a] group-hover:text-white transition-colors">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                          {subIntro}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-bold text-[#c4620a] group-hover:underline inline-flex items-center gap-1">
                          Explore Models &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : (
          /* Products Grid (when no subcategories are present) */
          <section aria-label={`Products in ${category.name}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#002f49]">
                Available Instruments ({allCategoryProducts.length})
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                Parr &middot; Orlab &middot; Sylab &middot; Elite
              </span>
            </div>

            {allCategoryProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allCategoryProducts.map((p, idx) => (
                  <ProductCard
                    key={p.slug}
                    product={p}
                    itemListId={category.path}
                    itemListName={category.name}
                    index={idx}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-12 shadow-xs">
                <h3 className="text-lg font-bold text-[#002f49]">
                  Specialized Configurations Available for {category.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  Share your test method, sample matrix, or temperature/pressure parameters.
                  Our application engineers will recommend the ideal certified configuration.
                </p>
                <Link href="/contact-us#quote" className="btn btn-accent mt-5">
                  Consult Application Engineering <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </section>
        )}
      </div>

      {/* 3. Clean Technical Guide & Standards */}
      <div className="container-x mt-12">
        <CategorySeoSection
          category={category}
          products={allCategoryProducts}
        />
      </div>

      {/* 4. Quote and Support Banner */}
      <section className="quote-band relative overflow-hidden py-14 text-white mt-12">
        <div className="container-x relative text-center">
          <Quote className="mx-auto h-8 w-8 text-[#ffb347]" />
          <p className="mx-auto mt-5 max-w-3xl text-2xl font-black tracking-tight sm:text-3xl">
            Need Expert Selection Assistance for Your Laboratory?
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Orbit Technologies supports laboratories across India from instrument
            selection and purchase through installation, commissioning, operator training,
            and preventative maintenance.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact-us#quote" className="btn btn-accent">
              Request Configuration &amp; Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
              className="btn border border-white/25 bg-white/10 text-white hover:bg-white/20"
            >
              Call Technical Sales: {site.phones.sales1}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
