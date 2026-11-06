import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Crumb } from "@/components/breadcrumb";
import { ProductDetailView } from "@/components/product-detail-view";
import { ancestorsOf, getCategoryByPath } from "@/data/categories";
import {
  getProduct,
  productCode,
  products,
  productsByCategory,
} from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} | Orbit Technologies`,
    description: `${p.tagline} Supplied and supported with factory-authorized commissioning, warranty and calibration across India by Orbit Technologies.`,
  };
}

function crumbsFor(productSlug: string): Crumb[] {
  const p = getProduct(productSlug)!;
  const cat = getCategoryByPath(p.category);
  const crumbs: Crumb[] = [{ label: "Products", href: "/products/" }];
  if (cat) {
    for (const a of ancestorsOf(cat.path)) {
      if (a.path !== cat.path) crumbs.push({ label: a.name, href: `/${a.path}/` });
    }
    crumbs.push({ label: cat.name, href: `/${cat.path}/` });
  }
  crumbs.push({ label: p.name });
  return crumbs;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const cat = getCategoryByPath(product.category);
  const inCategory = productsByCategory(product.category, { deep: true }).filter(
    (p) => p.slug !== product.slug,
  );
  const inPillar = cat
    ? products.filter(
        (p) =>
          p.slug !== product.slug &&
          getCategoryByPath(p.category)?.pillar === cat.pillar &&
          !inCategory.some((x) => x.slug === p.slug),
      )
    : [];
  const related = [...inCategory, ...inPillar].slice(0, 4);

  return (
    <ProductDetailView
      product={product}
      category={cat}
      skuCode={productCode(product)}
      crumbs={crumbsFor(slug)}
      relatedProducts={related}
    />
  );
}