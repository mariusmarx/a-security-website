import { Fragment } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { contact } from "@/content/site";

export function Contact() {
  return (
    <Section id="kontakt" tone="cream" size="lg">
      <Container>
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-12 md:gap-x-12">
          {/* Invitation + channels */}
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow index="05">Kontakt</Eyebrow>
            </Reveal>
            <h2 className="mt-8 text-h1 text-ink">
              <RevealText
                label="Sprechen wir über Ihr Projekt."
                lines={[
                  "Sprechen wir",
                  <Fragment key="l2">
                    über Ihr Projekt<span className="text-gold-deep">.</span>
                  </Fragment>,
                ]}
              />
            </h2>
            <Reveal delay={0.3}>
              <p className="measure-tight mt-8 text-body text-stone">
                Sie benötigen einen Sicherheitsdienst, Eventsupport für Ihre
                Veranstaltung oder einen professionellen Reinigungsservice? Wir
                beraten Sie strukturiert, diskret und lösungsorientiert.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <dl className="mt-12 flex flex-col divide-y divide-line border-y border-line">
                <Channel label="Büro">
                  <a
                    href={contact.phoneHref}
                    className="tabular-nums transition-colors hover:text-gold-deep"
                  >
                    {contact.phoneLabel}
                  </a>
                </Channel>
                <Channel label="24/7">
                  <a
                    href={contact.emergencyHref}
                    className="tabular-nums transition-colors hover:text-gold-deep"
                  >
                    {contact.emergencyLabel}
                  </a>
                </Channel>
                <Channel label="E-Mail">
                  <a
                    href={contact.emailHref}
                    className="transition-colors hover:text-gold-deep"
                  >
                    {contact.email}
                  </a>
                </Channel>
                <Channel label="Adresse">
                  {contact.address.street}, {contact.address.zip}{" "}
                  {contact.address.city}
                </Channel>
                <Channel label="Zeiten">{contact.hours}</Channel>
              </dl>
            </Reveal>
          </div>

          {/* Form */}
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <div className="border border-line bg-paper p-7 shadow-[0_1px_40px_-24px_rgba(0,0,0,0.25)] md:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Channel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-4">
      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone sm:col-span-3">
        {label}
      </dt>
      <dd className="text-body text-ink sm:col-span-9">{children}</dd>
    </div>
  );
}
