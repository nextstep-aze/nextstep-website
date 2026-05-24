"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "li" | "article";
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const node = ref.current;
    if (!node) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const t = setTimeout(() => setVisible(true), delay);
            observer.disconnect();
            return () => clearTimeout(t);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const composed = `reveal ${visible ? "is-visible" : ""} ${className}`.trim();

  return (
    // @ts-expect-error generic HTML element ref typing
    <Tag ref={ref} className={composed}>
      {children}
    </Tag>
  );
}
