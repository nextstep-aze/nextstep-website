import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessStep } from "@/components/ProcessStep";
import { DepartmentCard } from "@/components/DepartmentCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import {
  CheckIcon,
  GlobeIcon,
  ShieldIcon,
  UsersIcon,
  LayersIcon,
  BriefcaseIcon,
} from "@/components/icons";
import { homeContent } from "@/lib/content/en";
import { operationalDepartments } from "@/lib/departments";

export const metadata: Metadata = {
  title:
    "NextStep | Hospitality Internship & Talent Supply Company in Azerbaijan",
  description:
    "NextStep is Azerbaijan's first specialized hospitality internship and talent supply company, connecting pre-screened hospitality students and graduates with hotels and resorts worldwide.",
  alternates: { canonical: "/" },
};

const problemIcons = [GlobeIcon, BriefcaseIcon, ShieldIcon, UsersIcon];

export default function HomePage() {
  const {
    hero,
    whatIs,
    problem,
    whyUs,
    howItWorks,
    candidateProfiles,
    pipeline,
    partners,
    finalCta,
  } = homeContent;

  return (
    <>
      <HeroSection
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
        supporting={hero.supporting}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        trust={hero.trust}
      />

      {/* What is NextStep */}
      <section className="bg-white" aria-labelledby="what-is-heading">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={whatIs.eyebrow}
              title={<span id="what-is-heading">{whatIs.title}</span>}
            />
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2 max-w-5xl">
            {whatIs.body.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base md:text-lg text-ink-700 leading-relaxed">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section
        className="bg-surface-muted border-y border-border-soft"
        aria-labelledby="problem-heading"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={problem.eyebrow}
              title={<span id="problem-heading">{problem.title}</span>}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {problem.points.map((item, i) => {
              const Icon = problemIcons[i % problemIcons.length];
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <FeatureCard
                    icon={<Icon width={26} height={26} />}
                    title={item.title}
                    body={item.body}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why NextStep — light section with subtle aqua wash */}
      <section
        className="relative isolate overflow-hidden bg-white"
        aria-labelledby="why-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 60% at 90% 0%, rgba(78,209,200,0.08), transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
          }}
        />
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={whyUs.eyebrow}
              title={<span id="why-heading">{whyUs.title}</span>}
            />
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {whyUs.points.map((point, i) => (
              <Reveal as="li" key={point} delay={i * 50}>
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 mt-0.5"
                    aria-hidden
                  >
                    <CheckIcon width={14} height={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-base md:text-lg text-ink-700">
                    {point}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-muted border-y border-border-soft" aria-labelledby="how-heading">
        <div className="container-page py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow={howItWorks.eyebrow}
              title={<span id="how-heading">{howItWorks.title}</span>}
            />
            <p className="mt-6 text-base text-ink-700 leading-relaxed max-w-md">
              Every NextStep partnership follows the same structured process —
              from initial conversation to interns arriving on property.
            </p>
          </Reveal>
          <Reveal>
            <ol className="relative">
              {howItWorks.steps.map((step, i) => (
                <ProcessStep
                  key={step.title}
                  index={i + 1}
                  total={howItWorks.steps.length}
                  title={step.title}
                  body={step.body}
                />
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Candidate Profiles */}
      <section
        className="bg-white"
        aria-labelledby="profiles-heading"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={candidateProfiles.eyebrow}
              title={
                <span id="profiles-heading">{candidateProfiles.title}</span>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {candidateProfiles.profiles.map((profile, i) => (
              <Reveal key={profile.title} delay={i * 60}>
                <FeatureCard
                  icon={<UsersIcon width={26} height={26} />}
                  title={profile.title}
                  body={profile.body}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Departments */}
      <section className="bg-surface-muted border-y border-border-soft" aria-labelledby="departments-heading">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Operational Departments"
              title={
                <span id="departments-heading">
                  The departments we source for.
                </span>
              }
              intro="Pre-screened candidates ready to support core hotel operations across every guest-facing and back-of-house function."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {operationalDepartments.map((dept, i) => (
              <Reveal key={dept.slug} delay={i * 50}>
                <DepartmentCard
                  icon={dept.icon}
                  name={dept.name}
                  description={dept.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* University Pipeline */}
      <section
        className="bg-white"
        aria-labelledby="pipeline-heading"
      >
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeading
              eyebrow={pipeline.eyebrow}
              title={<span id="pipeline-heading">{pipeline.title}</span>}
              intro={pipeline.body}
            />
          </Reveal>
          <Reveal>
            <div className="relative p-8 md:p-10 rounded-2xl border border-border-soft bg-surface-muted">
              <div className="flex items-center gap-3 mb-6">
                <LayersIcon width={26} height={26} className="text-brand-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                  Why this matters
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Fresh cohorts every academic year — never a stale database",
                  "Direct faculty relationships, not third-party aggregators",
                  "Aligned with university calendars, internship credit requirements",
                  "Continuous candidate flow for multi-property partners",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-ink-700">
                    <CheckIcon
                      width={18}
                      height={18}
                      className="text-brand-600 mt-0.5 shrink-0"
                      strokeWidth={2.25}
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2026 Partner Network — soft aqua section */}
      <section
        className="relative isolate overflow-hidden bg-surface-soft"
        aria-labelledby="partners-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 70% at 0% 100%, rgba(78,209,200,0.18), transparent 60%), linear-gradient(180deg, #DDF7F5 0%, #F2F6F7 100%)",
          }}
        />
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={partners.eyebrow}
              title={<span id="partners-heading">{partners.title}</span>}
              intro={partners.body}
            />
          </Reveal>
          <Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
              {[
                { label: "Europe", body: "Resort & city hotels" },
                { label: "Gulf Region", body: "Luxury & MICE properties" },
                { label: "Türkiye", body: "Seasonal resort operations" },
                { label: "Worldwide", body: "Open to qualified operators" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="p-6 rounded-2xl border border-border-soft bg-white"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-700">
                    Region
                  </p>
                  <p className="mt-2 font-display font-semibold text-2xl text-slate-900">
                    {card.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-700">{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        body={finalCta.body}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </>
  );
}
