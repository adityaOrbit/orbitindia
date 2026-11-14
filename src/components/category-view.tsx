import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumb, type Crumb } from "@/components/breadcrumb";
import { TemperatureCurve } from "@/components/temperature-curve";
import { ProductGrid } from "@/components/product-grid";
import { CategoryProductTable, sharedSpecColumns } from "@/components/category-product-table";
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
import { CATEGORY_IMAGE_MAP, PRODUCT_IMAGE_MAP } from "@/data/product-media";
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
  const specColumns = hasChildren ? [] : sharedSpecColumns(allCategoryProducts);
  const showTable = specColumns.length >= 2;
  const firstProductImage = allCategoryProducts
    .flatMap((p) => PRODUCT_IMAGE_MAP[p.slug] || [])
    .find((src) => !/parr-1\.png|logo/i.test(src));
  const headerImage = CATEGORY_IMAGE_MAP[category.path] || firstProductImage || null;

  return (
    <div className="bg-white">
      <CategoryTracker category={category} products={allCategoryProducts} />
      <Breadcrumb items={crumbsFor(category)} />
      {/* Split header: name, intro and actions left; category photo on a pale field bleeding right */}
      <section className="relative border-b border-[var(--line)]">
        {headerImage && <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f5f8] lg:block" />}
        <div className={`container-x relative grid items-center ${headerImage ? "lg:grid-cols-[1.38fr_1fr]" : ""}`}>
          <div className="py-8 sm:py-10 lg:py-14 lg:pr-14">
            <h1 className="max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.2rem] lg:text-[2.6rem]">
              {category.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">{heroIntro}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
                Request Configuration &amp; Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`} className="btn btn-outline min-h-[48px] px-6">
                Call Technical Sales: {site.phones.sales1}
              </a>
            </div>
          </div>
          {headerImage && (
            <div className="relative -mx-4 h-56 bg-[#f3f5f8] sm:-mx-6 sm:h-72 lg:mx-0 lg:h-full lg:min-h-[320px] lg:bg-transparent">
              <Image
                src={headerImage}
                alt={category.name}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-6 mix-blend-multiply lg:p-10"
              />
            </div>
          )}
        </div>
      </section>

      <div className="container-x">
        {hasChildren ? (
          /* Subcategories: photo, name and one-line intro in a shared-hairline grid */
          <section aria-label={`Subcategories in ${category.name}`} className="section">
            <div className="cells grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {children.map((c) => {
                const subIntro = getCategoryHeroIntro(c);
                const imgSrc = CATEGORY_IMAGE_MAP[c.path] || "/images/orbit/Bomb-PNG.png";
                return (
                  <Link
                    key={c.path}
                    href={`/${c.path}/`}
                    className="group flex gap-4 p-5 transition-colors hover:bg-[var(--soft)] sm:flex-col"
                  >
                    <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-sm bg-[var(--soft)] sm:w-full">
                      <Image
                        src={imgSrc}
                        alt={c.name}
                        fill
                        className="object-contain p-2 mix-blend-multiply"
                        sizes="(max-width: 640px) 112px, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0056B3]">
                        {c.name}
                      </h3>
                      <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-[var(--ink-3)]">{subIntro}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : (
          /* Products: comparison table on desktop (when specs allow), cards otherwise */
          <section aria-label={`Products in ${category.name}`} className="section">
            {allCategoryProducts.length > 0 ? (
              <>
                {showTable && (
                  <div className="hidden lg:block">
                    <CategoryProductTable products={allCategoryProducts} columns={specColumns} />
                  </div>
                )}
                <div className={showTable ? "lg:hidden" : ""}>
                  <ProductGrid
                    products={allCategoryProducts}
                    className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4"
                    itemListId={category.path}
                    itemListName={category.name}
                    resetKey={category.path}
                  />
                </div>
              </>
            ) : (
              <div className="rounded-md border border-[var(--line)] p-8 text-center sm:p-12">
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  Specialized Configurations Available for {category.name}
                </h3>
                <p className="mx-auto mt-2 max-w-md text-[15px] text-[var(--ink-2)]">
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

        {/* Technical guide, standards and FAQs */}
        <CategorySeoSection category={category} products={allCategoryProducts} />

      </div>

      {/* Selection help — navy closing band */}
      <section className="relative overflow-hidden bg-[#001733] py-14 text-white sm:py-16">
        <TemperatureCurve className="pointer-events-none absolute inset-x-0 bottom-6 h-24 opacity-35" />
        <div className="container-x relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
              Need Expert Selection Assistance for Your Laboratory?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#c9d4e3]">
              Orbit Technologies supports laboratories across India from instrument
              selection and purchase through installation, commissioning, operator training,
              and preventative maintenance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact-us#quote" className="btn btn-accent min-h-[48px] px-6">
              Request Configuration &amp; Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
              className="btn min-h-[48px] border border-white/45 px-6 text-white hover:border-white"
            >
              Call Technical Sales: {site.phones.sales1}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
