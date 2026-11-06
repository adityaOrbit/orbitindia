export function PageHero({
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="hero-light border-b border-slate-200">
      <div className="container-x py-12 sm:py-14">
        <h1 className="max-w-3xl text-3xl font-black tracking-tight text-[#002f49] sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
