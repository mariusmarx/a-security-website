import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { contact } from "@/content/site";

/** Compact closing CTA used on the service & legal pages. */
export function CtaBand({
  title = "Sprechen wir über Ihr Projekt.",
  href = "/#kontakt",
  cta = "Kostenlose Beratung",
}: {
  title?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <Section tone="cream" size="lg">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:items-end md:gap-x-8">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="text-balance text-h1 text-ink">
                {title}
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col items-start gap-6 md:col-span-4 md:items-end">
            <Reveal delay={0.1}>
              <Magnetic strength={0.25}>
                <ButtonLink href={href} variant="primary" size="lg">
                  {cta}
                </ButtonLink>
              </Magnetic>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={contact.phoneHref}
                className="font-mono text-[0.72rem] uppercase tracking-[0.16em] tabular-nums text-stone transition-colors hover:text-gold-deep"
              >
                {contact.phoneLabel}
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
