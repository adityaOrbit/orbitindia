import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x py-16 sm:py-24">
      <p className="text-sm font-medium text-[var(--ink-3)] tnum">404</p>
      <h1 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.1rem]">
        Page not found
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
        The page you are looking for doesn&apos;t exist or has moved. Browse our product
        catalogue or head back home.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <Link href="/products" className="btn btn-outline">
          Browse products
        </Link>
      </div>
    </section>
  );
}
