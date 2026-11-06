import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-[#002f49]">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        The page you are looking for doesn&apos;t exist or has moved. Browse our product
        catalogue or head back home.
      </p>
      <div className="mt-6 flex gap-3">
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
