import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import {
  GlobeIcon,
  UsersIcon,
  ShieldIcon,
  LayersIcon,
  CheckIcon,
} from "@/components/icons";
import { aboutContent } from "@/lib/content/en";

export const metadata: Metadata = {
  title: "About NextStep | Azerbaijan's Hospitality Internship Company",
  description:
    "NextStep is an international hospitality internship placement initiative based in Baku, Azerbaijan — connecting hospitality students with hotels and resorts abroad.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About NextStep | Azerbaijan's Hospitality Internship Company",
    description:
      "Building Azerbaijan's first hospitality talent pipeline to the world.",
    url: "/about",
  },
};

const whyAzIcons = [LayersIcon, GlobeIcon, UsersIcon, ShieldIcon];

export default function AboutPage() {
  const { hero, who, mission, vision, whyAzerbaijan, pipeline, longTerm, finalCta } =
    aboutContent;

  return (
    <>
      <HeroSection
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />

      {/* Who We Are */}
      <section className="bg-white" aria-labelledby="about-who-heading">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={who.eyebrow}
              title={<span id="about-who-heading">{who.title}</span>}
            />
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2 max-w-5xl">
            {who.body.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision side-by-side on dark */}
      <section
        className="relative isolate overflow-hidden bg-navy-900 text-white"
        aria-labelledby="mission-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 70% at 100% 0%, rgba(201,169,97,0.10), transparent 60%), linear-gradient(180deg, #0A1F33 0%, #0D2640 100%)",
          }}
        />
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 mb-4">
                {mission.eyebrow}
              </p>
              <h2
                id="mission-heading"
                className="font-display text-white text-3xl md:text-4xl leading-[1.15]"
              >
                {mission.title}
              </h2>
              <p className="mt-6 text-base md:text-lg text-gray-200/90 leading-relaxed">
                {mission.body}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="lg:border-l lg:border-white/15 lg:pl-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 mb-4">
                {vision.eyebrow}
              </p>
              <h2 className="font-display text-white text-3xl md:text-4xl leading-[1.15]">
                {vision.title}
              </h2>
              <p className="mt-6 text-base md:text-lg text-gray-200/90 leading-relaxed">
                {vision.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Azerbaijan */}
      <section
        className="bg-white"
        aria-labelledby="why-az-heading"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={whyAzerbaijan.eyebrow}
              title={<span id="why-az-heading">{whyAzerbaijan.title}</span>}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyAzerbaijan.points.map((point, i) => {
              const Icon = whyAzIcons[i % whyAzIcons.length];
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

      {/* University Pipeline */}
      <section
        className="bg-gray-50 border-y border-gray-200"
        aria-labelledby="about-pipeline-heading"
      >
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeading
              eyebrow={pipeline.eyebrow}
              title={<span id="about-pipeline-heading">{pipeline.title}</span>}
              intro={pipeline.body}
            />
          </Reveal>
          <Reveal>
            <div className="p-8 md:p-10 rounded-sm border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <LayersIcon width={28} height={28} className="text-gold-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-700">
                  Pipeline characteristics
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Annual cohorts from tourism & hospitality faculties",
                  "Continuous flow aligned with the academic calendar",
                  "Pre-screened motivation, language, conduct",
                  "Reliable supply for repeat-partner properties",
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

      {/* Long-term goal */}
      <section className="bg-white" aria-labelledby="long-term-heading">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={longTerm.eyebrow}
              title={<span id="long-term-heading">{longTerm.title}</span>}
              intro={longTerm.body}
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </>
  );
}
