import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { clients } from "@/content/site";

export function Clients() {
  return (
    <Section id="referenzen" tone="paper" size="default">
      <Container>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:items-end md:gap-x-8">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow index="02">Kunden & Referenzen</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h2 text-ink">
                Vertraut von Berlins Kultur, Marken und Veranstaltern.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <p className="measure-tight text-small text-stone">
                Eine Auswahl an Auftraggebern aus Kultur, Musik, Mode und
                Wirtschaft — national und international begleitet.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Combined roster ("Auszug aus Aktuelle Kunden und Referenzen") */}
        <div className="mt-14 md:mt-20">
          <Reveal>
            <div className="flex items-center justify-between border-t border-line-strong pt-5">
              <span className="eyebrow flex items-center gap-3.5 text-stone">
                <span aria-hidden className="h-px w-7 bg-gold-deep/70" />
                Auszug
              </span>
              <span className="font-mono text-[0.7rem] tabular-nums tracking-[0.16em] text-greige">
                {String(clients.length).padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          <Stagger
            className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            gap={0.03}
          >
            {clients.map((name) => (
              <StaggerItem key={name}>
                <div className="flex items-baseline gap-3.5 border-b border-line py-5 sm:py-6">
                  <span
                    aria-hidden
                    className="mt-2 h-px w-4 shrink-0 bg-gold-deep/45"
                  />
                  <span className="text-balance text-h4 font-medium leading-snug text-ink">
                    {name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
