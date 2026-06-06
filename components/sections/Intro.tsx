import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <Section tone="paper" size="lg">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow index="00">Haltung</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h1 font-semibold uppercase tracking-tight text-ink">
                Diskretion ist kein Detail.
                <br className="hidden sm:block" /> Sie ist das{" "}
                <span className="text-gold-deep">Prinzip</span>.
              </h2>
            </Reveal>
          </div>

          <div className="flex items-end md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <p className="measure hyphenate text-body text-slate">
                Wir begleiten Kulturinstitutionen, Marken und private
                Auftraggeber in Berlin und darüber hinaus. Vom Empfang bis zum
                Personenschutz, von der Veranstaltung bis zur Reinigung —
                abgestimmte Leistungen aus einer Hand, mit geschultem Personal
                und einem festen Ansprechpartner.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
