export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "For Hotels", href: "/for-hotels" },
  { label: "For Students", href: "/for-students" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav: readonly NavItem[] = [
  { label: "For Hotels", href: "/for-hotels" },
  { label: "For Students", href: "/for-students" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
