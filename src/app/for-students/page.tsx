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
  UsersIcon,
  BriefcaseIcon,
  LayersIcon,
} from "@/components/icons";
import { studentsContent } from "@/lib/content/en";
import { operationalDepartments } from "@/lib/departments";

export const metadata: Metadata = {
  title: "For Students | International Hospitality Internships | NextStep",
  description:
    "Launch your international hospitality career with NextStep. Real hotel experience abroad, pre-departure support, and partnerships with verified international hospitality partners.",
  alternates: { canonical: "/for-students" },
  openGraph: {
    title: "For Students | International Hospitality Internships | NextStep",
    description:
      "Real hotel experience abroad — apply for international hospitality internships through NextStep.",
    url: "/for-students",
  },
};

const whoIcons = [UsersIcon, LayersIcon, BriefcaseIcon, GlobeIcon];

export default function ForStudentsPage() {
  const { hero, who, benefits, steps, finalCta } = studentsContent;

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

      {/* Who Can Apply */}
      <section className="bg-white" aria-labelledby="who-heading">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={who.eyebrow}
              title={<span id="who-heading">{who.title}</span>}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {who.points.map((point, i) => {
              const Icon = whoIcons[i % whoIcons.length];
              return (
                <Reveal key={point.title} delay={i * 60}>
                  <FeatureCard
                    icon={<Icon width={28} height={28} />}
                    title={point.title}
                    body={point.body}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Departments */}
      <section
        className="bg-gray-50 border-y border-gray-200"
        aria-labelledby="student-dept-heading"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Internship Departments"
              title={
                <span id="student-dept-heading">
                  Where you can build real experience.
                </span>
              }
              intro="Choose where your hospitality career begins. We place candidates across every core hotel department."
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

      {/* Benefits — dark */}
      <section
        className="relative isolate overflow-hidden bg-navy-900 text-white"
        aria-labelledby="benefits-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 70% at 0% 0%, rgba(201,169,97,0.10), transparent 60%), linear-gradient(180deg, #0A1F33 0%, #0D2640 100%)",
          }}
        />
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={benefits.eyebrow}
              title={<span id="benefits-heading">{benefits.title}</span>}
            />
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.points.map((point, i) => (
              <Reveal as="li" key={point.title} delay={i * 50}>
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-gold-500/15 text-gold-400"
                    aria-hidden
                  >
                    <CheckIcon width={16} height={16} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-white">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-300 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Steps */}
      <section
        id="steps"
        className="bg-white"
        aria-labelledby="steps-heading"
      >
        <div className="container-page py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow={steps.eyebrow}
              title={<span id="steps-heading">{steps.title}</span>}
              intro="A structured path from your first application to your first day at an international hotel."
            />
          </Reveal>
          <Reveal>
            <ol className="relative">
              {steps.steps.map((step, i) => (
                <ProcessStep
                  key={step.title}
                  index={i + 1}
                  total={steps.steps.length}
                  title={step.title}
                  body={step.body}
                />
              ))}
            </ol>
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
