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
    ? "border border-white/10 bg-white/5 hover:bg-white/[0.08]"
    : "border border-border-soft bg-white hover:border-brand-500/50 hover:-translate-y-1 hover:shadow-card-hover";
  const titleClasses = isDark ? "text-white" : "text-slate-900";
  const bodyClasses = isDark ? "text-slate-100/85" : "text-ink-700";
  const iconClasses = isDark ? "text-brand-300" : "text-brand-600";

  return (
    <article
      className={`group relative p-7 md:p-8 rounded-2xl transition-all duration-200 ${cardClasses}`}
    >
      {icon ? (
        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
            isDark ? "bg-brand-500/15" : "bg-brand-100"
          } ${iconClasses}`}
          aria-hidden
        >
          {icon}
        </div>
      ) : null}
      <h3 className={`font-display font-semibold text-xl ${titleClasses}`}>{title}</h3>
      <p className={`mt-3 text-[0.95rem] leading-relaxed ${bodyClasses}`}>{body}</p>
    </article>
  );
}
