/**
 * Central site configuration — company facts, navigation, contact, SEO.
 *
 * Contact facts below are taken from the live company site (a-security.de,
 * verified 2026-06-03). Items still marked `TODO` were not published there and
 * must be confirmed before launch — see handoff notes.
 */

export const company = {
  name: "A-Security & Service",
  // The live Impressum lists the entity as "A-Security" (proprietor Pedram
  // Aghel), with no "GmbH" suffix and no HRB — i.e. not a registered GmbH.
  // TODO: confirm the exact registered legal form/name for the Impressum.
  legalName: "A-Security",
  shortName: "A-Security",
  proprietor: "Pedram Aghel",
  claim: "Sicherheit, Reinigung und Eventsupport aus einer Hand.",
  city: "Berlin",
  // TODO: confirm real founding year (event references date back to ~2012).
  since: "2014",
} as const;

export const contact = {
  phoneLabel: "+49 (0)30 283 711 37",
  phoneHref: "tel:+493028371137",
  mobileLabel: "+49 (0)172 800 30 30",
  mobileHref: "tel:+491728003030",
  fax: "+49 (0)30 350 503 63",
  email: "info@a-security.de",
  emailHref: "mailto:info@a-security.de",
  address: {
    street: "Kreuzbergstraße 37–38",
    zip: "10965",
    city: "Berlin",
  },
  // TODO: confirm office hours (not published on the live site).
  hours: "Mo–Fr 9–18 Uhr · 24/7 Einsatzbereitschaft",
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Sicherheit", href: "/sicherheit" },
  { label: "Reinigung", href: "/reinigung" },
  { label: "Eventsupport", href: "/eventsupport" },
  { label: "Warum wir", href: "/#warum" },
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
 * Reference clients — taken from the supplied logo set.
 * TODO: confirm permission to display each name publicly.
 */
export const clients: string[] = [
  "Funkhaus Berlin",
  "Berliner Festspiele",
  "Factory Berlin",
  "Four Music",
  "Kickz",
  "KINDL",
  "Burmester",
  "Sneakersnstuff",
  "Schönbrunn",
  "Studio NOW",
  "Ulmen Television",
  "Guerilla Production",
];

export const siteMeta = {
  title: "A-Security & Service — Sicherheit, Reinigung & Eventsupport in Berlin",
  description:
    "Professioneller Sicherheitsdienst aus Berlin: Eventsicherheit, Objekt- & Personenschutz, Reinigung und Eventsupport — diskret, zuverlässig und individuell. National und international.",
  // TODO: confirm the launch domain (live company site is www.a-security.de).
  url: "https://www.a-security.de",
  locale: "de_DE",
} as const;
