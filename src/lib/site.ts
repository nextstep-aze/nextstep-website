export const site = {
  name: "NextStep",
  legalName: "NextStep",
  tagline:
    "The first specialized hospitality internship & talent supply company in Azerbaijan.",
  url: "https://www.nextstep.az",
  domain: "nextstep.az",
  locale: "en",
  email: "office@nextstep.az",
  phone: "+994 50 487 8963",
  phoneHref: "+994504878963",
  whatsapp: "+994504878963",
  address: {
    city: "Baku",
    country: "Azerbaijan",
  },
  logo: "/NextStepLogo.svg",
  ogImage: "/og-image.png",
} as const;

export type Site = typeof site;
