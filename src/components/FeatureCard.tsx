import type { ReactNode } from "react";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  body: string;
  tone?: "light" | "dark";
};

export function FeatureCard({ icon, title, body, tone = "light" }: FeatureCardProps) {
  const isDark = tone === "dark";
  const cardClasses = isDark
    ? "border border-white/10 bg-white/5 hover:bg-white/[0.07]"
    : "border border-gray-200 bg-white hover:border-gold-500/50 hover:-translate-y-1";
  const titleClasses = isDark ? "text-white" : "text-navy-900";
  const bodyClasses = isDark ? "text-gray-300" : "text-gray-700";
  const iconClasses = isDark ? "text-gold-400" : "text-gold-500";

  return (
    <article
      className={`group relative p-7 md:p-8 rounded-sm transition-all duration-200 ${cardClasses}`}
    >
      {icon ? (
        <div className={`mb-5 ${iconClasses}`} aria-hidden>
          {icon}
        </div>
      ) : null}
      <h3 className={`font-display text-xl ${titleClasses}`}>{title}</h3>
      <p className={`mt-3 text-[0.95rem] leading-relaxed ${bodyClasses}`}>{body}</p>
    </article>
  );
}
