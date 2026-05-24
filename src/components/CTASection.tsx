import type { ReactNode } from "react";
import { Button } from "@/components/Button";

type CTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-navy-900 text-white"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 0%, rgba(201,169,97,0.10), transparent 60%), linear-gradient(180deg, #0A1F33 0%, #11304D 100%)",
        }}
      />
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id="cta-heading"
            className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
          >
            {title}
          </h2>
          {body ? (
            <p className="mt-6 text-base md:text-lg text-gray-200/90 max-w-2xl leading-relaxed">
              {body}
            </p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
      </div>
    </section>
  );
}
