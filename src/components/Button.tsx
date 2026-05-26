import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700",
  secondary:
    "bg-white text-brand-700 border border-brand-500 hover:bg-brand-50",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100",
  "on-dark":
    "bg-white text-slate-900 hover:bg-brand-100",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

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
