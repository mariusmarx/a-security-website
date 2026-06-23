import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { PageHeader } from "@/components/sections/PageHeader";
import { company, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${company.legalName}, Berlin.`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Section tone="paper" size="default">
        <Container>
          <Prose>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              {company.legalName}
              <br />
              {contact.address.street}
              <br />
              {contact.address.zip} {contact.address.city}
            </p>

            <h2>Vertreten durch</h2>
            <p>Geschäftsführer: {company.proprietor}</p>

            <h2>Kontakt</h2>
            <p>
              Telefon (Büro): {contact.phoneLabel}
              <br />
              Telefon (24/7): {contact.emergencyLabel}
              <br />
              E-Mail: <a href={contact.emailHref}>{contact.email}</a>
            </p>

            <h2>Registereintrag</h2>
            <p>
              Eingetragen im Handelsregister.
              <br />
              Registergericht: Amtsgericht Charlottenburg
              <br />
              Registernummer: HRB 249953 B
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Die Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG wird nach
              Vergabe durch das Finanzamt ergänzt.
            </p>

            <h2>Erlaubnis nach § 34a GewO</h2>
            <p>
              Zugelassenes Sicherheitsunternehmen gemäß § 34a Gewerbeordnung
              (Bewachungsgewerbe).
              <br />
              Erlaubnisbehörde nach § 34a GewO: Bezirksamt
              Friedrichshain-Kreuzberg von Berlin
            </p>

            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              {company.proprietor}
              <br />
              {contact.address.street}, {contact.address.zip}{" "}
              {contact.address.city}
            </p>

            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
              nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
