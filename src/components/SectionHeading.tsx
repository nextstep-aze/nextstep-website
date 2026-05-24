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
  const introClasses = isDark ? "text-gray-200/90" : "text-gray-700";
  const titleClasses = isDark ? "text-white" : "text-navy-900";
  const eyebrowClasses = isDark ? "text-gold-300" : "text-gold-500";

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
        className={`font-display text-3xl md:text-4xl lg:text-[2.625rem] leading-[1.15] ${titleClasses}`}
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
