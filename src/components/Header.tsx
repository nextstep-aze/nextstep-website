"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { MenuIcon, CloseIcon } from "@/components/icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur border-b border-border-soft shadow-[0_1px_0_rgb(47_55_66_/0.03)]"
    : "bg-white border-b border-transparent";

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${site.name} — Home`}
        >
          <Image
            src={site.logo}
            alt={site.name}
            width={160}
            height={56}
            priority
            className="h-11 md:h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`block h-[2px] mt-1 origin-left transition-transform duration-300 ${
                    active
                      ? "bg-brand-500 scale-x-100"
                      : "bg-brand-500 scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-colors"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-slate-700"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>

    <div
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overflow-y-auto ${
          menuOpen ? "block" : "hidden"
        }`}
        aria-hidden={!menuOpen}
      >
        <span
          aria-hidden
          className="block h-px w-full bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
        />
        <div className="container-page pt-6 pb-10 flex flex-col gap-8">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center pl-5 pr-3 py-4 text-lg rounded-xl transition-colors ${
                    active
                      ? "bg-brand-50 text-slate-900 font-semibold"
                      : "text-slate-700 font-medium hover:bg-surface-muted"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-colors ${
                      active ? "bg-brand-500" : "bg-transparent"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
          >
            Get in touch
          </Link>

          <div className="pt-6 border-t border-border-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-700 hover:text-brand-700 transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-ink-700 hover:text-brand-700 transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-ink-700">
                {site.address.city}, {site.address.country}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
