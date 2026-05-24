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
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section
        className="bg-gray-50 border-y border-gray-200"
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
                    icon={<Icon width={28} height={28} />}
                    title={item.title}
                    body={item.body}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why NextStep — dark section */}
      <section
        className="relative isolate overflow-hidden bg-navy-900 text-white"
        aria-labelledby="why-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 60% at 90% 0%, rgba(201,169,97,0.10), transparent 60%), linear-gradient(180deg, #0A1F33 0%, #0D2640 100%)",
          }}
        />
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={whyUs.eyebrow}
              title={<span id="why-heading">{whyUs.title}</span>}
            />
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {whyUs.points.map((point, i) => (
              <Reveal as="li" key={point} delay={i * 50}>
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400 mt-0.5"
                    aria-hidden
                  >
                    <CheckIcon width={14} height={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-base md:text-lg text-gray-200/95">
                    {point}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white" aria-labelledby="how-heading">
        <div className="container-page py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow={howItWorks.eyebrow}
              title={<span id="how-heading">{howItWorks.title}</span>}
            />
            <p className="mt-6 text-base text-gray-700 leading-relaxed max-w-md">
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
        className="bg-gray-50 border-y border-gray-200"
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
                  icon={<UsersIcon width={28} height={28} />}
                  title={profile.title}
                  body={profile.body}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Departments */}
      <section className="bg-white" aria-labelledby="departments-heading">
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
        className="bg-gray-50 border-y border-gray-200"
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
            <div className="relative p-8 md:p-10 rounded-sm border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <LayersIcon width={28} height={28} className="text-gold-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-700">
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
                  <li key={line} className="flex gap-3 text-sm text-gray-700">
                    <CheckIcon
                      width={18}
                      height={18}
                      className="text-gold-500 mt-0.5 shrink-0"
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

      {/* 2026 Partner Network */}
      <section
        className="relative isolate overflow-hidden bg-navy-800 text-white"
        aria-labelledby="partners-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 70% at 0% 100%, rgba(201,169,97,0.08), transparent 60%), linear-gradient(180deg, #11304D 0%, #0A1F33 100%)",
          }}
        />
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              tone="dark"
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
                  className="p-6 rounded-sm border border-white/10 bg-white/[0.03]"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-gold-300">
                    Region
                  </p>
                  <p className="mt-2 font-display text-2xl text-white">
                    {card.label}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{card.body}</p>
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
