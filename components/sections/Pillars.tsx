import Link from "next/link";
import { ShieldCheck, Droplets, Sparkles, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { pillars } from "@/content/services";

const icons = {
  sicherheit: ShieldCheck,
  reinigung: Droplets,
  eventsupport: Sparkles,
} as const;

export function Pillars() {
  return (
    <Section id="leistungen" tone="ink" size="lg">
      <Container>
        <div className="grid grid-cols-1 items-end gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow index="01" tone="dark">
                Leistungen
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h1 font-semibold uppercase tracking-tight text-paper">
                Drei Disziplinen,
                <br className="hidden sm:block" /> ein Anspruch.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="measure-tight text-body text-mist">
                Sicherheit, Reinigung und Eventsupport — koordiniert aus einer
                Hand, jede Disziplin mit eigenem Fachpersonal.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Numbered editorial chapters, hairline-separated */}
        <Stagger className="mt-16 md:mt-24" gap={0.12}>
          {pillars.map((p) => {
            const Icon = icons[p.slug];
            return (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group grid grid-cols-1 gap-y-7 border-t border-line py-12 md:grid-cols-12 md:gap-x-8 md:py-16"
                >
                  {/* index */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-[0.9rem] tabular-nums tracking-wide text-gold">
                      {p.index}
                    </span>
                  </div>

                  {/* name + cta */}
                  <div className="md:col-span-5">
                    <Icon
                      strokeWidth={1.1}
                      className="h-9 w-9 text-greige transition-colors duration-500 group-hover:text-gold"
                      aria-hidden
                    />
                    <h3 className="mt-7 text-h2 font-semibold uppercase tracking-tight text-paper">
                      {p.brand ?? p.name}
                    </h3>
                    {p.brand && (
                      <span className="mt-2 block font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                        {p.name}
                      </span>
                    )}
                    <span className="mt-7 inline-flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-mist transition-colors duration-400 group-hover:text-gold">
                      Mehr erfahren
                      <ArrowRight
                        strokeWidth={1.5}
                        className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                      />
                    </span>
                  </div>

                  {/* description + scope */}
                  <div className="md:col-span-6">
                    <p className="measure text-body text-mist">{p.summary}</p>
                    <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="hyphenate flex items-baseline gap-3 text-small text-greige"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-px w-3 shrink-0 bg-greige/55"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
        <div aria-hidden className="border-t border-line" />
      </Container>
    </Section>
  );
}
