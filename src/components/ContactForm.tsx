"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";

type Role = "Hotel Partner" | "Student" | "University" | "Other";

type FormValues = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  role: Role;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  role: "Hotel Partner",
  message: "",
};

const roles: Role[] = ["Hotel Partner", "Student", "University", "Other"];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!emailPattern.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (!values.message.trim() || values.message.trim().length < 10)
    errors.message = "Please share a few words about your inquiry (min. 10 characters).";
  return errors;
}

function buildMailto(values: FormValues) {
  const subject = encodeURIComponent(
    `[${values.role}] Inquiry from ${values.fullName || "Website"}`,
  );
  const body = encodeURIComponent(
    [
      `Full name: ${values.fullName}`,
      `Company / University: ${values.organization || "—"}`,
      `Email: ${values.email}`,
      `Phone / WhatsApp: ${values.phone || "—"}`,
      `I am a: ${values.role}`,
      "",
      "Message:",
      values.message,
      "",
      "— Sent from nextstep.az",
    ].join("\n"),
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const v = validate(values);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.location.href = buildMailto(values);
    }
  }

  const fieldClasses =
    "w-full rounded-lg border border-border-soft bg-white px-4 py-3 text-[0.95rem] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 transition-colors";
  const labelClasses =
    "block text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 mb-2";
  const errorClasses = "mt-1.5 text-xs text-red-600";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClasses}>
            Full name *
          </label>
          <input
            id="cf-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className={fieldClasses}
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "cf-name-err" : undefined}
          />
          {errors.fullName ? (
            <p id="cf-name-err" className={errorClasses}>
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="cf-org" className={labelClasses}>
            Company / University
          </label>
          <input
            id="cf-org"
            name="organization"
            type="text"
            autoComplete="organization"
            className={fieldClasses}
            value={values.organization}
            onChange={(e) => update("organization", e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={labelClasses}>
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClasses}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
          />
          {errors.email ? (
            <p id="cf-email-err" className={errorClasses}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="cf-phone" className={labelClasses}>
            Phone / WhatsApp
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+994 ..."
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClasses}>I am a *</legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
          {roles.map((role) => {
            const active = values.role === role;
            return (
              <label
                key={role}
                className={`cursor-pointer text-center text-sm py-2.5 rounded-full border transition-colors ${
                  active
                    ? "bg-brand-500 text-white border-brand-500"
                    : "bg-white text-slate-700 border-border-soft hover:border-brand-500"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={active}
                  onChange={() => update("role", role)}
                  className="sr-only"
                />
                {role}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-msg" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="cf-msg"
          name="message"
          required
          rows={5}
          className={`${fieldClasses} resize-y min-h-[8rem]`}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-msg-err" : undefined}
          placeholder="Tell us about your hotel, your studies, or the partnership you'd like to explore."
        />
        {errors.message ? (
          <p id="cf-msg-err" className={errorClasses}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-slate-500">
          We respond within one business day. Your message will open in your default
          email client.
        </p>
        <Button type="submit" variant="primary" size="lg" className="sm:self-end">
          Send message
        </Button>
      </div>

      {submitted ? (
        <p
          role="status"
          className="text-sm text-slate-900 bg-brand-100 border border-brand-500/40 rounded-lg px-4 py-3"
        >
          Opening your email client... If nothing happens, write us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium underline underline-offset-2"
          >
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
