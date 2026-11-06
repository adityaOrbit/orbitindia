import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Orbit Technologies' range of calorimeters, thermogravimetric analysers, elemental analysers, ash fusion analysers, reactor systems, sample preparation equipment, furnaces and reference materials.",
};

export default function ProductsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Products" }]} />
      <PageHero
        eyebrow="Product catalogue"
        title="Analytical instruments & laboratory equipment"
        subtitle="We supply, install and service high-quality scientific and specialised equipment — backed by installation, training and after-sales service across India."
      />
      <section className="container-x mt-10 pb-6">
        <ProductCatalog />
      </section>
    </div>
  );
}
