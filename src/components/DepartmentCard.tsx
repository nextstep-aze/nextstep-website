import { DepartmentIcon, type DepartmentIconName } from "@/components/icons";

type DepartmentCardProps = {
  icon: DepartmentIconName;
  name: string;
  description: string;
  tone?: "light" | "dark";
};

export function DepartmentCard({
  icon,
  name,
  description,
  tone = "light",
}: DepartmentCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={`group relative p-7 md:p-8 rounded-2xl transition-all duration-200 ${
        isDark
          ? "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
          : "border border-border-soft bg-white hover:border-brand-500/50 hover:-translate-y-1 hover:shadow-card-hover"
      }`}
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
          isDark ? "bg-brand-500/15 text-brand-300" : "bg-brand-100 text-brand-700"
        }`}
      >
        <DepartmentIcon name={icon} width={26} height={26} />
      </div>

      <h3
        className={`mt-5 font-display font-semibold text-xl ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-2 text-[0.95rem] leading-relaxed ${
          isDark ? "text-slate-100/85" : "text-ink-700"
        }`}
      >
        {description}
      </p>
    </article>
  );
}
