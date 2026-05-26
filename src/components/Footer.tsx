import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container-page py-16 grid gap-12 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <Link href="/" className="inline-flex items-center" aria-label={`${site.name} — Home`}>
            <Image
              src={site.logo}
              alt={site.name}
              width={160}
              height={56}
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-slate-200/85">
            The first specialized hospitality internship & talent supply company in
            Azerbaijan. We connect pre-screened hospitality students and graduates
            with hotels and resorts worldwide.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-brand-500" aria-hidden />
            <span className="text-xs uppercase tracking-[0.18em] text-brand-300">
              Baku · Azerbaijan
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-200/85 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-slate-200/85 hover:text-white transition-colors"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="text-slate-200/85 hover:text-white transition-colors"
              >
                {site.phone}
              </a>
            </li>
            <li className="text-slate-200/85">
              {site.address.city}, {site.address.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-300/70">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Hospitality Talent Supply · Sourcing Partner for International Hotels
          </p>
        </div>
      </div>
    </footer>
  );
}
