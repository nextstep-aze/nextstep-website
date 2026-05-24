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
      className="relative isolate overflow-hidden bg-navy-900 text-white"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 0%, rgba(201,169,97,0.10), transparent 60%), radial-gradient(60% 50% at 100% 100%, rgba(37,87,127,0.35), transparent 60%), linear-gradient(180deg, #0A1F33 0%, #0A1F33 60%, #0E2740 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <div className="container-page pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-4xl">
          {eyebrow ? (
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-block h-px w-10 bg-gold-500" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                {eyebrow}
              </p>
            </div>
          ) : null}

          <h1
            id="hero-heading"
            className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-[-0.01em]"
          >
            {headline}
          </h1>

          {subheadline ? (
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-200/90">
              {subheadline}
            </p>
          ) : null}

          {supporting ? (
            <p className="mt-5 max-w-2xl text-base md:text-lg text-gold-300 font-medium">
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
                <Button
                  href={secondaryCta.href}
                  variant="outline-light"
                  size="lg"
                >
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
                className="flex items-start gap-3 text-sm text-gray-200/90"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-gold-400 mt-0.5">
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
