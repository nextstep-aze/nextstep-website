import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { contactContent } from "@/lib/content/en";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact NextStep | Hospitality Internship & Talent Partner",
  description:
    "Get in touch with NextStep — hospitality internship and talent supply partner based in Baku, Azerbaijan. Email office@nextstep.az or send us a message.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NextStep | Hospitality Internship & Talent Partner",
    description:
      "Talk to NextStep about a hospitality partnership or an international internship.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const { hero, formIntro, channels, ctaCards } = contactContent;

  return (
    <>
      {/* Hero (compact, navy) */}
      <section
        className="relative isolate overflow-hidden bg-navy-900 text-white"
        aria-labelledby="contact-hero-heading"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(80% 60% at 20% 0%, rgba(201,169,97,0.10), transparent 60%), linear-gradient(180deg, #0A1F33 0%, #0E2740 100%)",
          }}
        />
        <div className="container-page pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-10 bg-gold-500" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                {hero.eyebrow}
              </p>
            </div>
            <h1
              id="contact-hero-heading"
              className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200/90 leading-relaxed">
              {hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Form + channels */}
      <section className="bg-white" aria-labelledby="form-heading">
        <div className="container-page py-20 md:py-24 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Inquiry"
                title={<span id="form-heading">{formIntro.title}</span>}
                intro={formIntro.body}
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <aside className="lg:pl-10 lg:border-l lg:border-gray-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                {channels.title}
              </p>
              <ul className="mt-6 space-y-5">
                {channels.items.map((item) => (
                  <li key={item.label}>
                    <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 inline-block text-lg text-navy-900 font-medium hover:text-gold-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg text-navy-900 font-medium">
                        {item.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 rounded-sm bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Prefer to write directly? Email us at{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-navy-900 underline underline-offset-2 hover:text-gold-500"
                  >
                    {site.email}
                  </a>{" "}
                  or message{" "}
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy-900 underline underline-offset-2 hover:text-gold-500"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Dual CTAs */}
      <section
        className="bg-gray-50 border-t border-gray-200"
        aria-labelledby="contact-cta-heading"
      >
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <h2 id="contact-cta-heading" className="sr-only">
              Audience-specific entry points
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {ctaCards.map((card, i) => (
              <Reveal key={card.eyebrow} delay={i * 80}>
                <Link
                  href={card.cta.href}
                  className="group block h-full p-8 md:p-10 rounded-sm bg-white border border-gray-200 hover:border-gold-500/60 hover:-translate-y-1 transition-all duration-200 shadow-card hover:shadow-card-hover"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-navy-900 leading-[1.15]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{card.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-900 group-hover:text-gold-500 transition-colors">
                    {card.cta.label}
                    <ArrowRightIcon
                      width={16}
                      height={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
