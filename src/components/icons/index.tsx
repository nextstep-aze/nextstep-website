import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ConciergeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v2" />
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M3 14h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function ForkKnifeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3v9a2 2 0 0 0 2 2v6" />
      <path d="M11 3v6" />
      <path d="M9 3v6" />
      <path d="M16 3c-1.5 1.5-2 3-2 5s.5 3.5 2 5v7" />
    </svg>
  );
}

export function ChefHatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 14h12v6H6z" />
      <path d="M6 14a4 4 0 1 1 1.5-7.7A4 4 0 0 1 12 4a4 4 0 0 1 4.5 2.3A4 4 0 1 1 18 14" />
      <path d="M9 14v6" />
      <path d="M15 14v6" />
    </svg>
  );
}

export function BedIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 14h18" />
      <path d="M3 18v2" />
      <path d="M21 18v2" />
      <circle cx="8" cy="11" r="1.5" />
    </svg>
  );
}

export function SmileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="10" x2="9.01" y2="10" />
      <line x1="15" y1="10" x2="15.01" y2="10" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8.5 8 9 4.8-.5 8-4.5 8-9V6l-8-3z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

export type DepartmentIconName =
  | "concierge"
  | "fork-knife"
  | "chef-hat"
  | "bed"
  | "smile"
  | "briefcase";

const departmentIconMap: Record<DepartmentIconName, (props: IconProps) => ReturnType<typeof ConciergeIcon>> = {
  concierge: ConciergeIcon,
  "fork-knife": ForkKnifeIcon,
  "chef-hat": ChefHatIcon,
  bed: BedIcon,
  smile: SmileIcon,
  briefcase: BriefcaseIcon,
};

export function DepartmentIcon({
  name,
  ...props
}: { name: DepartmentIconName } & IconProps) {
  const Cmp = departmentIconMap[name];
  return <Cmp {...props} />;
}
