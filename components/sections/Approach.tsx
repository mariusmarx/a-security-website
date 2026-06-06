import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { process } from "@/content/services";

export function Approach() {
  return (
    <Section tone="cream" size="lg">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <Eyebrow index="04">Arbeitsweise</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h1 font-semibold uppercase tracking-tight text-ink">
                So arbeiten wir.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="measure-tight mt-8 text-body text-slate">
                Jeder Auftrag beginnt mit einem persönlichen Gespräch — und
                mündet in eine zuverlässige, langfristige Zusammenarbeit.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Stagger className="border-t border-line" gap={0.1}>
              {process.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-3 border-b border-line py-8 sm:grid-cols-12">
                    <span className="font-mono text-[0.85rem] tabular-nums text-stone sm:col-span-2">
                      {step.step}
                    </span>
                    <h3 className="text-h3 font-medium tracking-tight text-ink sm:col-span-4">
                      {step.title}
                    </h3>
                    <p className="hyphenate text-body text-slate sm:col-span-6">
                      {step.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
