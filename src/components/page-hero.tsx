import type { ReactNode } from "react";

/**
 * Calm white page header: H1 in ink, intro paragraph, optional actions and a
 * hairline below. Pages render <Breadcrumb> directly above it.
 */
export function PageHero({
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Optional actions (buttons / links) shown under the intro. */
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <div className="container-x py-8 sm:py-10 lg:py-12">
        <h1 className="max-w-4xl text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-[2.1rem] lg:text-[2.4rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-2)] sm:text-[17px]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
