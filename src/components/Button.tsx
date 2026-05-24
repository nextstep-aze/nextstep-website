import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-500/90 shadow-sm",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-900",
  ghost:
    "bg-transparent text-navy-900 hover:bg-gray-100 active:bg-gray-200",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const composed = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  if ("href" in props && props.href !== undefined) {
    const { href, external, ariaLabel } = props;
    if (external) {
      return (
        <a
          href={href}
          className={composed}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={composed} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const { href: _ignored, ...buttonProps } = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={composed}>
      {children}
    </button>
  );
}
