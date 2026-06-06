import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { clients } from "@/content/site";

export function Clients() {
  return (
    <Section id="referenzen" tone="cream" size="default">
      <Container>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:items-end md:gap-x-8">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow index="02">Ausgewählte Kunden</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h2 font-semibold uppercase tracking-tight text-ink">
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

        {/* Roster wall — hairline grid, greige at rest → ink on hover */}
        <Stagger
          className="mt-14 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4"
          gap={0.05}
        >
          {clients.map((name) => (
            <StaggerItem key={name}>
              <div className="flex h-24 items-center justify-center border-b border-r border-line px-5 text-center md:h-28">
                <span className="text-balance text-[1.05rem] font-medium tracking-tight text-stone transition-colors duration-500 hover:text-ink">
                  {name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
