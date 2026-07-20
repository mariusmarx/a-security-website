import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { pillars } from "@/content/services";

export function Pillars() {
  return (
    <Section id="leistungen" tone="cream" size="lg">
      <Container>
        <div className="grid grid-cols-1 items-end gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow index="01">Leistungen</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h1 text-ink">
                Drei Disziplinen, ein Anspruch.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="measure-tight text-body text-stone">
                Security, Eventsupport und Cleaning — koordiniert aus einer
                Hand, jede Disziplin mit eigenem Fachpersonal.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Numbered editorial chapters — text left, leistungen listed vertically
            on the right (like the detail pages) so each one stands on its own. */}
        <Stagger className="mt-16 md:mt-24" gap={0.12}>
          {pillars.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/${p.slug}`}
                className="group grid grid-cols-1 gap-y-8 border-t border-line py-12 md:grid-cols-12 md:gap-x-8 md:py-16"
              >
                {/* left: name + summary + cta */}
                <div className="md:col-span-5">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-[0.85rem] tabular-nums tracking-wide text-gold-deep">
                      {p.index}
                    </span>
                    <h3 className="text-h2 text-ink transition-colors duration-400 group-hover:text-gold-deep">
                      {p.name}
                    </h3>
                  </div>
                  <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                    {p.tagline}
                  </p>
                  <p className="measure mt-6 text-body text-slate">{p.summary}</p>
                  <span className="mt-7 inline-flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-stone transition-colors duration-400 group-hover:text-gold-deep">
                    Mehr erfahren
                    <ArrowRight
                      strokeWidth={1.5}
                      className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    />
                  </span>
                </div>

                {/* right: leistungen listed vertically */}
                <ul className="flex flex-col self-center md:col-span-6 md:col-start-7">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="hyphenate flex items-baseline gap-3.5 border-b border-line/70 py-3.5 text-body text-slate first:border-t first:border-line/70"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-4 shrink-0 bg-gold-deep/45"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <div aria-hidden className="border-t border-line" />
      </Container>
    </Section>
  );
}
