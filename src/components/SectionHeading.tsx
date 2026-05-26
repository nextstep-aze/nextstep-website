import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";
  const introClasses = isDark ? "text-slate-100/85" : "text-ink-700";
  const titleClasses = isDark ? "text-white" : "text-slate-900";
  const eyebrowClasses = isDark ? "text-brand-300" : "text-brand-700";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowClasses} mb-3`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`font-display font-semibold text-3xl md:text-4xl lg:text-[2.625rem] leading-[1.15] tracking-[-0.015em] ${titleClasses}`}
      >
        {title}
      </Tag>
      {intro ? (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${introClasses}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
