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
      className="relative isolate overflow-hidden bg-surface-soft"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 0%, rgba(78,209,200,0.18), transparent 60%), linear-gradient(180deg, #DDF7F5 0%, #F2F6F7 100%)",
        }}
      />
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 mb-4">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id="cta-heading"
            className="font-display font-semibold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
          >
            {title}
          </h2>
          {body ? (
            <p className="mt-6 text-base md:text-lg text-ink-700 max-w-2xl leading-relaxed">
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
                <Button href={secondaryCta.href} variant="secondary" size="lg">
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
