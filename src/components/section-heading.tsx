import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Render on a charcoal/dark band: white title, light subtitle. */
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "text-2xl font-extrabold tracking-tight sm:text-3xl",
          dark ? "text-white" : "text-[#002f49]",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed sm:text-base",
            dark ? "text-slate-300" : "text-slate-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
