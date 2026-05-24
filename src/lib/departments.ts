export type Department = {
  slug: string;
  name: string;
  description: string;
  icon:
    | "concierge"
    | "fork-knife"
    | "chef-hat"
    | "bed"
    | "smile"
    | "briefcase";
};

export const operationalDepartments: readonly Department[] = [
  {
    slug: "front-office",
    name: "Front Office",
    description:
      "Reception, check-in, concierge and guest services — the first impression of the property.",
    icon: "concierge",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage Service",
    description:
      "Restaurant, bar and banquet service roles supporting daily operations and events.",
    icon: "fork-knife",
  },
  {
    slug: "kitchen",
    name: "Kitchen Operations",
    description:
      "Culinary support across hot, cold and pastry sections, working alongside experienced chefs.",
    icon: "chef-hat",
  },
  {
    slug: "housekeeping",
    name: "Housekeeping",
    description:
      "Rooms division operations covering guest rooms, public areas and laundry standards.",
    icon: "bed",
  },
  {
    slug: "guest-relations",
    name: "Guest Relations",
    description:
      "Multilingual guest support, VIP handling and resolution of in-house requests.",
    icon: "smile",
  },
  {
    slug: "administration",
    name: "Hotel Administration Support",
    description:
      "Back-office assistance across HR, sales coordination, reservations and reporting.",
    icon: "briefcase",
  },
] as const;
