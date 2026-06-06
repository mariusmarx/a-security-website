/**
 * The three service pillars of A-Security & Service GmbH.
 * Copy is taken verbatim (lightly tightened) from the client's source documents.
 */

export type ServiceGroup = {
  title: string;
  intro?: string;
  points: string[];
};

export type Pillar = {
  slug: "sicherheit" | "reinigung" | "eventsupport";
  index: string;
  name: string;
  /** Brand name shown as an overline on the detail page, if any. */
  brand?: string;
  tagline: string;
  /** One-liner for the homepage services index. */
  summary: string;
  /** Opening paragraph on the detail page. */
  lead: string;
  /** Headline offerings, shown as a list on the homepage card + detail intro. */
  highlights: string[];
  /** Full breakdown for the detail page. */
  groups: ServiceGroup[];
  /** Treated photograph used on the detail hero. */
  image: string;
  imageAlt: string;
};

export const pillars: Pillar[] = [
  {
    slug: "sicherheit",
    index: "01",
    name: "Sicherheit",
    tagline: "Sicherheit aus einer Hand",
    summary:
      "Professioneller Sicherheitsdienst aus Berlin — für Unternehmen, Veranstaltungen und Privatpersonen. National und international, diskret und individuell abgestimmt.",
    lead: "Sicherheit bedeutet Vertrauen. Als professioneller Sicherheitsdienst aus Berlin stehen wir für Zuverlässigkeit, Diskretion und individuell abgestimmte Sicherheitslösungen. Unsere Kunden begleiten wir partnerschaftlich — mit klarer Kommunikation, persönlicher Beratung und maßgeschneiderten Konzepten.",
    highlights: [
      "Eventsicherheit",
      "Objekt- & Baustellensicherung",
      "Personen- & Begleitschutz",
      "Shopguard & Doorman",
      "Hotel- & Messesicherheit",
      "Chauffeur- & Concierge-Services",
    ],
    image: "/images/event-redcarpet.jpg",
    imageAlt:
      "Diskrete Sicherheitsbegleitung auf einem Empfang bei Abendlicht in Berlin.",
    groups: [
      {
        title: "Eventsicherheit",
        intro:
          "Jede Veranstaltung bringt besondere Anforderungen mit sich. Wir entwickeln individuelle Sicherheitskonzepte und stellen erfahrenes, geschultes Personal für einen reibungslosen Ablauf.",
        points: [
          "Personen- und Einlasskontrollen",
          "Sicherung während Auf- und Abbau",
          "Schutz von Bühnen, Künstlern und VIPs",
          "Brandsicherheits- und Sanitätsdienste",
          "Hostessen & Hosts für Akkreditierung und Gästebetreuung",
        ],
      },
      {
        title: "Objekt- und Baustellensicherung",
        intro:
          "Unbefugter Zutritt, Diebstahl und Vandalismus stellen ein hohes Risiko dar. Wir schützen Ihre Objekte zuverlässig — präventiv und reaktionsschnell.",
        points: [
          "Objekt- und Baustellenbewachung",
          "Regelmäßige Bestreifung",
          "Empfangs- und Pförtnertätigkeiten",
          "Mobiler Kontrolldienst",
          "Identifikation von Sicherheitsrisiken",
          "Beratung zu baulichen und technischen Maßnahmen",
        ],
      },
      {
        title: "Personen- und Begleitschutz",
        intro:
          "Im beruflichen und privaten Alltag können Situationen entstehen, die erhöhte Aufmerksamkeit erfordern. Unser erfahrenes Personal sorgt für diskreten und zuverlässigen Schutz.",
        points: [
          "Personenschutz",
          "Begleitschutz",
          "Familiensicherheit",
          "Sicherheitsberatung & Risikoanalyse",
        ],
      },
      {
        title: "Shopguard & Doorman",
        intro:
          "Ein Shopguard vereint Sicherheit, Service und Präsenz. Unsere Mitarbeiter treten freundlich, souverän und deeskalierend auf — ohne die Atmosphäre zu beeinträchtigen.",
        points: [
          "Kontrolle des Kundenflusses",
          "Ausübung des Hausrechts",
          "Prävention und Deeskalation",
          "Diskrete Beobachtung",
          "Schutz vor Diebstahl und Sachbeschädigung",
        ],
      },
      {
        title: "Weitere Sicherheitsservices",
        intro: "Ergänzend bieten wir ein breites Spektrum spezialisierter Leistungen.",
        points: [
          "Hotel- & Messesicherheit",
          "Chauffeur- & Fahrdienste",
          "Concierge-Services",
          "Observation & Zugangskontrollen",
          "Brandsicherheits- & Sanitätsdienste",
          "Geld- und Werttransporte",
        ],
      },
    ],
  },
  {
    slug: "reinigung",
    index: "02",
    name: "Reinigung",
    brand: "A-Cleaning",
    tagline: "Sauberkeit mit System",
    summary:
      "Sauberkeit als Teil von Werterhalt und professionellem Auftreten. Zuverlässige Reinigung für Unternehmen, Privathaushalte und Veranstaltungsorte.",
    lead: "Sauberkeit ist ein wesentlicher Bestandteil von Sicherheit, Werterhalt und professionellem Auftreten. Mit A-Cleaning bietet die A-Security & Service GmbH zuverlässige Reinigungsdienstleistungen — strukturiert geplant, fachgerecht umgesetzt und regelmäßig kontrolliert.",
    highlights: ["Unterhaltsreinigung", "Grundreinigung", "Fenster- & Glasreinigung"],
    image: "/images/chauffeur-venue.jpg",
    imageAlt: "Gepflegtes Berliner Geschäftsgebäude aus Klinker bei Tageslicht.",
    groups: [
      {
        title: "Unterhaltsreinigung",
        intro:
          "Die regelmäßige Unterhaltsreinigung gewährleistet dauerhaft hygienische und gepflegte Räumlichkeiten — geeignet für Büros, Praxen, Gewerbeflächen und private Objekte.",
        points: [
          "Reinigung und Pflege aller Bodenbeläge",
          "Reinigung von Oberflächen, Arbeits- und Kontaktflächen",
          "Möbelreinigung und -pflege",
          "Entleerung und Reinigung der Abfallbehälter",
          "Reinigung und Desinfektion sanitärer Anlagen",
          "Reinigung von Küchen- und Pausenbereichen",
          "Sichtreinigung von Türen, Fenstern und Griffbereichen",
        ],
      },
      {
        title: "Grundreinigung",
        intro:
          "Die Grundreinigung ist eine intensive, tiefgehende Reinigung in größeren Abständen. Sie dient der Substanzerhaltung und schafft die Grundlage für eine effektive Unterhaltsreinigung. Empfohlen: 1–2 Mal jährlich.",
        points: [
          "Intensive Bodenreinigung und Pflege",
          "Reinigung von Möbeln, Schränken und Regalen (innen & außen)",
          "Reinigung von Wänden, Türen, Rahmen, Lampen und Schaltern",
          "Entfernung hartnäckiger Verschmutzungen",
          "Spezialreinigungen wie Entkalkung, Desinfektion oder Polierarbeiten",
        ],
      },
      {
        title: "Fenster- und Glasreinigung",
        intro:
          "Unsere Fensterreinigung sorgt für klare Sicht und ein gepflegtes Erscheinungsbild.",
        points: [
          "Glasflächen aller Art",
          "Fensterrahmen und -kanten innen und außen",
          "Fensterbänke",
          "Glastüren, Schaufenster, Spiegel, Wintergärten und Fassaden",
        ],
      },
    ],
  },
  {
    slug: "eventsupport",
    index: "03",
    name: "Eventsupport",
    tagline: "Veranstaltungen, sicher umgesetzt",
    summary:
      "Strukturierter Eventsupport und zuverlässiges Servicepersonal für Veranstaltungen jeder Größe — auf Wunsch die komplette Koordination aller Servicebereiche.",
    lead: "Veranstaltungen erfordern präzise Planung, erfahrenes Personal und klare Zuständigkeiten. Wir unterstützen Events jeder Größe mit strukturiertem Eventsupport und zuverlässigem Servicepersonal — auf Wunsch übernehmen wir die komplette Koordination einzelner oder aller Servicebereiche.",
    highlights: [
      "Hostessen- & Host-Service",
      "Akkreditierung & Check-in",
      "VIP-Betreuung",
      "Veranstaltungspaket (Full-Service)",
    ],
    image: "/images/event-gala.jpg",
    imageAlt:
      "Abendveranstaltung in einer Berliner Eventhalle mit Bühnenlicht und Gästen.",
    groups: [
      {
        title: "Hostessen-Service",
        intro:
          "Unsere Hostessen und Hosts treten professionell, freundlich und situationssicher auf und repräsentieren Ihr Unternehmen.",
        points: [
          "Akkreditierung und Check-in",
          "Gästebetreuung & Informationsweitergabe",
          "VIP-Betreuung",
          "Serviceleistungen",
          "Unterstützung bei Präsentationen",
          "Repräsentation Ihres Unternehmens",
        ],
      },
      {
        title: "Veranstaltungspaket — Full-Service",
        intro:
          "Unser Full-Service-Angebot bündelt alle Gewerke für einen reibungslosen, sicheren und professionellen Veranstaltungsablauf.",
        points: [
          "Sicherheitsplanung & Sicherheitskonzepte",
          "Sicherheits- und Servicepersonal",
          "Reinigung vor, während und nach der Veranstaltung",
          "Toiletten- und Hygieneservice",
          "Hostessen für Garderobe, Akkreditierung und Gästeführung",
          "Unterstützung bei Planung und Ablauf",
        ],
      },
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

/** "Why A-Security" — verbatim reasons from the source doc. */
export const reasons: { title: string; body: string }[] = [
  {
    title: "Berliner Unternehmen",
    body: "Regionale Marktkenntnis und feste Verankerung in Berlin — mit dem Anspruch, national und international zu liefern.",
  },
  {
    title: "Alles aus einer Hand",
    body: "Sicherheitsdienst, Reinigungsservice und Eventsupport gebündelt bei einem Ansprechpartner — abgestimmt statt fragmentiert.",
  },
  {
    title: "Geschultes Fachpersonal",
    body: "Erfahrene Mitarbeiter mit nachgewiesener Sachkunde, Diskretion und ausgeprägtem Verantwortungsbewusstsein.",
  },
  {
    title: "Individuelle Konzepte",
    body: "Maßgeschneiderte Sicherheits- und Leistungskonzepte statt Standardlösungen — präzise auf Ihren Bedarf zugeschnitten.",
  },
  {
    title: "Klare Kommunikation",
    body: "Feste Ansprechpartner, verlässliche Abstimmung und transparente Abläufe über die gesamte Zusammenarbeit hinweg.",
  },
];

/** Working method — the "Arbeitsweise" steps. */
export const process: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Persönliche Beratung",
    body: "Jeder Auftrag beginnt mit einer persönlichen Beratung in Berlin oder Umgebung — wir hören zu und verstehen Ihren Bedarf.",
  },
  {
    step: "02",
    title: "Analyse & Konzept",
    body: "Wir analysieren Anforderungen, identifizieren Risiken und entwickeln ein passendes Leistungs- und Sicherheitskonzept.",
  },
  {
    step: "03",
    title: "Geschulte Umsetzung",
    body: "Erfahrenes Fachpersonal setzt das Konzept mit klaren Zuständigkeiten und einem festen Ansprechpartner um.",
  },
  {
    step: "04",
    title: "Verlässliche Begleitung",
    body: "Wir stehen für eine zuverlässige, langfristige und kontrollierte Zusammenarbeit — vorausschauend und diskret.",
  },
];
