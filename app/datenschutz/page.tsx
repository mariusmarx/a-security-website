import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { PageHeader } from "@/components/sections/PageHeader";
import { company, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung der ${company.legalName}.`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutz"
        intro="Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO)."
      />
      <Section tone="paper" size="default">
        <Container>
          <Prose>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              {company.legalName}
              <br />
              {contact.address.street}, {contact.address.zip}{" "}
              {contact.address.city}
              <br />
              E-Mail: <a href={contact.emailHref}>{contact.email}</a>
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              ([TODO: Hosting-Anbieter, z. B. Vercel Inc. / Hetzner]). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters gespeichert. Der Einsatz erfolgt
              im Interesse einer sicheren und effizienten Bereitstellung unseres
              Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h2>3. Server-Log-Dateien</h2>
            <p>
              Der Provider erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch
              übermittelt. Dies sind: Browsertyp und -version, verwendetes
              Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners,
              Uhrzeit der Serveranfrage und IP-Adresse. Rechtsgrundlage ist Art.
              6 Abs. 1 lit. f DSGVO.
            </p>

            <h2>4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden
              Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b bzw. lit. f DSGVO.
            </p>
            <p>
              Das Kontaktformular dieser Website öffnet Ihr lokales
              E-Mail-Programm; es werden dabei keine Formulardaten an unsere
              Server übertragen.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Zudem steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu (in Berlin: Berliner Beauftragte für
              Datenschutz und Informationsfreiheit).
            </p>

            <h2>6. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an
              {" "}
              <span className="whitespace-nowrap">„https://&ldquo;</span> in der
              Adresszeile Ihres Browsers.
            </p>

            <p className="text-small text-stone">
              [Hinweis: Diese Datenschutzerklärung ist ein Entwurf mit
              Platzhaltern. Sie muss an die tatsächlich eingesetzten Dienste
              (Hosting, Analyse, Schriftarten, etc.) angepasst und rechtlich
              geprüft werden.]
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
