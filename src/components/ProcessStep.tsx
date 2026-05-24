type ProcessStepProps = {
  index: number;
  title: string;
  body: string;
  total?: number;
  tone?: "light" | "dark";
};

export function ProcessStep({
  index,
  title,
  body,
  total,
  tone = "light",
}: ProcessStepProps) {
  const isDark = tone === "dark";
  const numberLabel = String(index).padStart(2, "0");
  const last = total !== undefined && index === total;

  return (
    <li className="relative flex gap-5 md:gap-7 pb-10 last:pb-0">
      <div className="relative flex flex-col items-center">
        <span
          className={`relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-base ${
            isDark
              ? "bg-gold-500 text-navy-900"
              : "bg-navy-900 text-gold-400"
          }`}
          aria-hidden
        >
          {numberLabel}
        </span>
        {!last && (
          <span
            aria-hidden
            className={`absolute top-12 bottom-0 w-px ${
              isDark ? "bg-white/15" : "bg-gray-200"
            }`}
          />
        )}
      </div>

      <div className="pt-2 pb-2">
        <h3
          className={`font-display text-xl ${
            isDark ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-[0.95rem] leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {body}
        </p>
      </div>
    </li>
  );
}
