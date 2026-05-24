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
  BriefcaseIcon,
} from "@/components/icons";
import { hotelsContent } from "@/lib/content/en";
import { operationalDepartments } from "@/lib/departments";

export const metadata: Metadata = {
  title: "For Hotels | Hospitality Interns from Azerbaijan | NextStep",
  description:
    "NextStep supplies pre-screened, multilingual hospitality interns and graduates from Azerbaijan to hotels and resorts worldwide. Zero-risk cooperation, direct university pipeline, full lifecycle support.",
  alternates: { canonical: "/for-hotels" },
  openGraph: {
    title: "For Hotels | Hospitality Interns from Azerbaijan | NextStep",
    description:
      "Build your hospitality talent pipeline with NextStep — Azerbaijan's first specialized hospitality internship and talent supply partner.",
    url: "/for-hotels",
  },
};

const problemIcons = [GlobeIcon, BriefcaseIcon, ShieldIcon, UsersIcon];

export default function ForHotelsPage() {
  const { hero, problems, solution, whyChoose, process, finalCta } = hotelsContent;

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

      <section
        className="bg-white"
        aria-labelledby="problems-heading"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={problems.eyebrow}
              title={<span id="problems-heading">{problems.title}</span>}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {problems.items.map((item, i) => {
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

      <section
        className="bg-gray-50 border-y border-gray-200"
        aria-labelledby="solution-heading"
      >
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
          <Reveal>
            <SectionHeading
              eyebrow={solution.eyebrow}
              title={<span id="solution-heading">{solution.title}</span>}
              intro={solution.body}
            />
          </Reveal>
          <Reveal>
            <div className="grid gap-4">
              {[
                { label: "Source", body: "Active relationships with universities and graduate networks." },
                { label: "Screen", body: "Language, motivation, academic standing, conduct." },
                { label: "Match", body: "Departments, languages, durations matched to your operation." },
                { label: "Prepare", body: "Pre-departure briefing on expectations and conduct." },
                { label: "Support", body: "We stay involved through the entire placement." },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start gap-5 p-5 rounded-sm border border-gray-200 bg-white"
                >
                  <span className="font-display text-2xl text-gold-500 w-24 shrink-0">
                    {row.label}
                  </span>
                  <span className="text-[0.95rem] text-gray-700 leading-relaxed">
                    {row.body}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Hotels Choose — dark */}
      <section
        className="relative isolate overflow-hidden bg-navy-900 text-white"
        aria-labelledby="why-hotels-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 70% at 100% 0%, rgba(201,169,97,0.10), transparent 60%), linear-gradient(180deg, #0A1F33 0%, #0D2640 100%)",
          }}
        />
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={whyChoose.eyebrow}
              title={<span id="why-hotels-heading">{whyChoose.title}</span>}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 50}>
                <div className="h-full p-7 rounded-sm border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-500/15 text-gold-400"
                      aria-hidden
                    >
                      <CheckIcon width={14} height={14} strokeWidth={2.5} />
                    </span>
                    <h3 className="font-display text-lg text-white">{point.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Departments */}
      <section className="bg-white" aria-labelledby="hotels-departments-heading">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Operational Departments"
              title={
                <span id="hotels-departments-heading">
                  Coverage across every core hotel function.
                </span>
              }
              intro="Whether you need rooms division support, F&B operations, or guest-facing roles, our candidate pool covers the departments that drive your daily operation."
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

      {/* Simple Process */}
      <section
        id="process"
        className="bg-gray-50 border-y border-gray-200"
        aria-labelledby="hotels-process-heading"
      >
        <div className="container-page py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow={process.eyebrow}
              title={<span id="hotels-process-heading">{process.title}</span>}
            />
          </Reveal>
          <Reveal>
            <ol className="relative">
              {process.steps.map((step, i) => (
                <ProcessStep
                  key={step.title}
                  index={i + 1}
                  total={process.steps.length}
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
