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
      className={`group relative p-7 md:p-8 rounded-sm transition-all duration-200 ${
        isDark
          ? "border border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
          : "border border-gray-200 bg-white hover:border-gold-500/50 hover:-translate-y-1 hover:shadow-card-hover"
      }`}
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-sm ${
          isDark ? "bg-gold-500/15 text-gold-300" : "bg-navy-900/[0.04] text-navy-900"
        }`}
      >
        <DepartmentIcon name={icon} width={26} height={26} />
      </div>

      <h3
        className={`mt-5 font-display text-xl ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-2 text-[0.95rem] leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {description}
      </p>
    </article>
  );
}
