import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { currentClients, referenceClients } from "@/content/site";

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

        {/* Two rosters, stacked — aktuelle Kunden above, Referenzen below */}
        <div className="mt-14 flex flex-col gap-14 md:mt-20 md:gap-20">
          <ClientList label="Aktuelle Kunden" items={currentClients} />
          <ClientList label="Referenzen" items={referenceClients} />
        </div>
      </Container>
    </Section>
  );
}

function ClientList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <Reveal>
        <div className="flex items-center justify-between border-t border-line-strong pt-5">
          <span className="eyebrow flex items-center gap-3.5 text-stone">
            <span aria-hidden className="h-px w-7 bg-gold-deep/70" />
            {label}
          </span>
          <span className="font-mono text-[0.7rem] tabular-nums tracking-[0.16em] text-greige">
            {String(items.length).padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      <Stagger className="mt-2" gap={0.05}>
        {items.map((name) => (
          <StaggerItem key={name}>
            <div className="border-b border-line py-5 md:py-6">
              <span className="text-balance text-h4 font-medium text-ink">
                {name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
