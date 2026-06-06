"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/content/site";
import { cn } from "@/lib/utils";

const services = ["Sicherheit", "Reinigung", "Eventsupport", "Mehrere Bereiche"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string)?.trim() ?? "";
    const leistung = get("leistung") || "Allgemeine Anfrage";
    const subject = `Anfrage — ${leistung}`;
    const body = [
      `Name: ${get("name")}`,
      `Unternehmen: ${get("unternehmen") || "—"}`,
      `E-Mail: ${get("email")}`,
      `Telefon: ${get("telefon") || "—"}`,
      `Leistung: ${leistung}`,
      "",
      get("nachricht"),
    ].join("\n");
    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-7" noValidate={false}>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <Field id="name" label="Name" required autoComplete="name" />
        <Field
          id="unternehmen"
          label="Unternehmen"
          autoComplete="organization"
        />
        <Field
          id="email"
          label="E-Mail"
          type="email"
          required
          autoComplete="email"
        />
        <Field id="telefon" label="Telefon" type="tel" autoComplete="tel" />
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="leistung" className={labelClass}>
          Leistung
        </label>
        <select
          id="leistung"
          name="leistung"
          defaultValue=""
          className={cn(inputClass, "appearance-none")}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-onyx text-paper">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="nachricht" className={labelClass}>
          Nachricht
          <span className="ml-1 text-gold" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          required
          aria-required="true"
          placeholder="Worum geht es? Ort, Zeitraum, Rahmen …"
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-stone">
        <span className="text-gold" aria-hidden="true">
          *
        </span>{" "}
        Pflichtfeld
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
        <button
          type="submit"
          className="group/btn inline-flex items-center justify-center gap-2.5 rounded-none border border-paper bg-paper px-8 py-5 text-[0.78rem] font-medium uppercase tracking-[0.14em] leading-none text-ink transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-cream"
        >
          Anfrage senden
          <ArrowUpRight
            strokeWidth={1.5}
            className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
        {sent && (
          <p role="status" className="text-small text-mist">
            Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Anfrage.
          </p>
        )}
      </div>

      <p className="text-[0.75rem] leading-relaxed text-stone">
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm. Alternativ erreichen
        Sie uns direkt unter{" "}
        <a
          href={contact.emailHref}
          className="text-mist underline decoration-gold/50 underline-offset-4 hover:text-paper"
        >
          {contact.email}
        </a>
        .
      </p>
    </form>
  );
}

const labelClass =
  "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-greige";

const inputClass =
  "w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-body text-paper placeholder:text-greige focus:border-gold focus:outline-none focus:ring-0";

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && (
          <span className="ml-1 text-gold" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-required={required}
        className={inputClass}
      />
    </div>
  );
}
