import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "NextStep | Hospitality Internship & Talent Supply Company in Azerbaijan",
    template: "%s | NextStep",
  },
  description:
    "NextStep is Azerbaijan's first specialized hospitality internship and talent supply company, connecting pre-screened hospitality students and graduates with hotels and resorts worldwide.",
  applicationName: site.name,
  keywords: [
    "hospitality internship Azerbaijan",
    "hotel internship Baku",
    "hospitality talent supply",
    "hotel staffing partner",
    "multilingual hospitality interns",
    "hospitality recruitment Azerbaijan",
    "international hotel internship",
    "NextStep Azerbaijan",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title:
      "NextStep | Hospitality Internship & Talent Supply Company in Azerbaijan",
    description:
      "Azerbaijan's first specialized hospitality internship and talent supply company. Pre-screened, multilingual hospitality students and graduates for international hotels.",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — Hospitality Internship & Talent Supply`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NextStep | Hospitality Internship & Talent Supply Company in Azerbaijan",
    description:
      "Azerbaijan's first specialized hospitality internship & talent supply company. Pre-screened, multilingual hospitality candidates for international hotels.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/NextStepLogo.svg", type: "image/svg+xml" }],
    shortcut: "/NextStepLogo.svg",
    apple: "/NextStepLogo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#4ed1c8",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: "NextStep Hospitality",
  url: site.url,
  logo: `${site.url}${site.logo}`,
  description:
    "Azerbaijan's first specialized hospitality internship and talent supply company. We source, screen and prepare multilingual hospitality students and graduates for hotels worldwide.",
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      telephone: site.phone,
      areaServed: ["AZ", "EU", "AE", "TR", "Worldwide"],
      availableLanguage: ["English", "Russian", "Turkish", "Azerbaijani"],
    },
  ],
  areaServed: "Worldwide",
  founder: {
    "@type": "Organization",
    name: site.name,
  },
  knowsAbout: [
    "Hospitality internships",
    "Hotel staffing",
    "Talent supply",
    "Hospitality recruitment",
    "International internship placement",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-surface text-ink-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-slate-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
