import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/icons";

type CtaLink = { label: string; href: string };

type HeroSectionProps = {
  eyebrow?: string;
  headline: ReactNode;
  subheadline?: ReactNode;
  supporting?: ReactNode;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  trust?: readonly string[];
};

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  supporting,
  primaryCta,
  secondaryCta,
  trust,
}: HeroSectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 50% at 10% 0%, rgba(78,209,200,0.10), transparent 60%), radial-gradient(60% 50% at 100% 100%, rgba(221,247,245,0.50), transparent 60%), linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 60%, #F2F6F7 100%)",
        }}
      />

      <div className="container-page pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-4xl">
          {eyebrow ? (
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-block h-px w-10 bg-brand-500" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                {eyebrow}
              </p>
            </div>
          ) : null}

          <h1
            id="hero-heading"
            className="font-display font-semibold text-slate-900 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-[-0.02em]"
          >
            {headline}
          </h1>

          {subheadline ? (
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-700">
              {subheadline}
            </p>
          ) : null}

          {supporting ? (
            <p className="mt-5 max-w-2xl text-base md:text-lg text-brand-700 font-medium">
              {supporting}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {primaryCta ? (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>

        {trust && trust.length > 0 ? (
          <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-ink-700"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 mt-0.5">
                  <CheckIcon width={12} height={12} strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
