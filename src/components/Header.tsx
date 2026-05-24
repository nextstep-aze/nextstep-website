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
    ? "bg-white/95 backdrop-blur border-b border-gray-200"
    : "bg-white/0 border-b border-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-2"
          aria-label={`${site.name} — Home`}
        >
          <Image
            src={site.logo}
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span
            className={`font-display text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            {site.name}
          </span>
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
                  scrolled
                    ? active
                      ? "text-navy-900"
                      : "text-gray-700 hover:text-navy-900"
                    : active
                      ? "text-white"
                      : "text-gray-200 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`block h-px mt-1 origin-left transition-transform duration-300 ${
                    active
                      ? "bg-gold-500 scale-x-100"
                      : "bg-gold-500 scale-x-0"
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
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              scrolled
                ? "bg-navy-900 text-white hover:bg-navy-800"
                : "bg-gold-500 text-navy-900 hover:bg-gold-400"
            }`}
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 transition-colors duration-300 ${
            menuOpen || scrolled ? "text-navy-900" : "text-white"
          }`}
          onClick={() => setMenuOpen((s) => !s)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 top-16 bg-white transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="container-page py-8 flex flex-col gap-1"
          aria-label="Mobile"
        >
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 px-2 text-lg font-medium border-b border-gray-100 ${
                  active ? "text-navy-900" : "text-gray-700"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-sm bg-gold-500 text-navy-900 font-medium"
          >
            Get in touch
          </Link>
        </nav>
        <button
          type="button"
          className="absolute top-[-3.5rem] right-4 md:hidden w-10 h-10 inline-flex items-center justify-center text-navy-900"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
      </div>
    </header>
  );
}
