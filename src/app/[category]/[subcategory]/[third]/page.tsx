import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/category-view";
import { categories, getCategoryByPath } from "@/data/categories";

import { getCategorySeoData } from "@/data/category-seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories
    .filter((c) => c.path.split("/").length === 3)
    .map((c) => {
      const [category, subcategory, third] = c.path.split("/");
      return { category, subcategory, third };
    });
}

type Params = { category: string; subcategory: string; third: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, subcategory, third } = await params;
  const cat = getCategoryByPath(`${category}/${subcategory}/${third}`);
  if (!cat) return {};
  const seo = getCategorySeoData(cat);
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      type: "website",
    },
  };
}

export default async function ThirdLevelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, subcategory, third } = await params;
  const cat = getCategoryByPath(`${category}/${subcategory}/${third}`);
  if (!cat) notFound();
  return <CategoryView category={cat} />;
}