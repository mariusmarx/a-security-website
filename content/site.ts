/**
 * Central site configuration — company facts, navigation, contact, SEO.
 *
 * Contact facts below are taken from the live company site (a-security.de,
 * verified 2026-06-03). Items still marked `TODO` were not published there and
 * must be confirmed before launch — see handoff notes.
 */

export const company = {
  // Trade name shown across the marketing site.
  name: "A-Security & Service GmbH",
  // Registered legal entity — confirmed by the client (2026-06-23):
  // A-Security&Service GmbH, Amtsgericht Charlottenburg HRB 249953 B.
  legalName: "A-Security&Service GmbH",
  shortName: "A-Security",
  // Geschäftsführer / vertretungsberechtigte Person for the Impressum.
  // TODO: confirm the GmbH's registered managing director (assumed Pedram Aghel).
  proprietor: "Pedram Aghel",
  claim: "Sicherheit, Eventsupport und Reinigung aus einer Hand.",
  city: "Berlin",
  // Founding year confirmed by client (2026-06-14): the company has been active
  // since 2010 — its long experience should be emphasised across the site.
  since: "2010",
} as const;

// Contact facts confirmed by the client (2026-06-23) — replaced 1:1.
export const contact = {
  // Büro (office) line
  phoneLabel: "+49 (0)30 350 50 363",
  phoneHref: "tel:+493035050363",
  // 24/7 Einsatzbereitschaft
  emergencyLabel: "+49 (0)30 28 37 11 37",
  emergencyHref: "tel:+493028371137",
  email: "info@a-securityservice.de",
  emailHref: "mailto:info@a-securityservice.de",
  address: {
    street: "Kreuzbergstraße 37/38",
    zip: "10965",
    city: "Berlin",
  },
  hours: "Büro: 09:00–15:00 Uhr",
} as const;

// Service labels in English per client request (2026-06-23); URLs stay German.
export const nav: { label: string; href: string }[] = [
  { label: "Security", href: "/sicherheit" },
  { label: "Eventsupport", href: "/eventsupport" },
  { label: "Cleaning", href: "/reinigung" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const legalNav: { label: string; href: string }[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

/** Qualitative trust markers — derived from the source docs (no invented figures). */
export const trustStats: { value: string; label: string }[] = [
  { value: "03", label: "Leistungs­bereiche aus einer Hand" },
  { value: "§ 34a", label: "Geprüftes Fachpersonal" },
  { value: "24/7", label: "Einsatz­bereitschaft" },
  { value: "DE · INT", label: "National & international tätig" },
];

/**
 * Clients & references — taken from the supplied logo set.
 * Split into "Aktuelle Kunden" and "Referenzen" per client request.
 * TODO: confirm the correct assignment of each name to current vs. reference,
 * and confirm permission to display each name publicly. (Provisional split.)
 */
export const currentClients: string[] = [
  "Funkhaus Berlin",
  "Berliner Festspiele",
  "Factory Berlin",
  "KINDL",
];

export const referenceClients: string[] = [
  "Four Music",
  "Kickz",
  "Burmester",
  "Sneakersnstuff",
  "Schönbrunn",
  "Studio NOW",
  "Ulmen Television",
  "Guerilla Production",
];

export const siteMeta = {
  title:
    "A-Security & Service GmbH — Security, Eventsupport & Cleaning in Berlin",
  description:
    "Sicherheitsdienst aus Berlin — seit 2010: Eventsicherheit, Objekt- & Personenschutz, Eventsupport und Reinigung. Diskret, zuverlässig und individuell. National und international.",
  // TODO: confirm the launch domain (live company site is www.a-security.de).
  url: "https://www.a-security.de",
  locale: "de_DE",
} as const;
