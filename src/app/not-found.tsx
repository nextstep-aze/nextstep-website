import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-surface min-h-[80vh] flex items-center">
      <div className="container-page py-24 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
          404
        </p>
        <h1 className="mt-4 font-display font-semibold text-slate-900 text-4xl md:text-5xl">
          This page hasn't been built yet.
        </h1>
        <p className="mt-6 text-lg text-ink-700 leading-relaxed">
          You may have followed a stale link. Head back to the homepage or get in
          touch — we'd be happy to point you in the right direction.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Try one of these instead:{" "}
          <Link href="/for-hotels" className="underline underline-offset-2 hover:text-brand-700">
            For Hotels
          </Link>
          ,{" "}
          <Link href="/for-students" className="underline underline-offset-2 hover:text-brand-700">
            For Students
          </Link>
          ,{" "}
          <Link href="/about" className="underline underline-offset-2 hover:text-brand-700">
            About
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
