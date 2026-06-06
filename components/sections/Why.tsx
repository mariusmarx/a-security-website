import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { reasons } from "@/content/services";
import { trustStats } from "@/content/site";

export function Why() {
  return (
    <Section id="warum" tone="paper" size="lg">
      <Container>
        {/* Trust stats strip */}
        <Stagger className="grid grid-cols-2 gap-y-10 border-y border-line py-10 md:grid-cols-4 md:gap-x-8">
          {trustStats.map((s, i) => (
            <StaggerItem key={s.label}>
              <div className="flex flex-col gap-3 md:px-2">
                <span
                  className={`font-mono text-h2 tabular-nums tracking-tight ${
                    i === 0 ? "text-gold-deep" : "text-ink"
                  }`}
                >
                  {s.value}
                </span>
                <span className="font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-stone">
                  {s.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Reasons */}
        <div className="mt-20 grid grid-cols-1 gap-y-12 md:mt-28 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow index="03">Warum wir</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h2 font-semibold uppercase tracking-tight text-ink">
                Verlässlich im Detail. Souverän im Ganzen.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Stagger className="border-t border-line" gap={0.08}>
              {reasons.map((r, i) => (
                <StaggerItem key={r.title}>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-line py-7 sm:grid-cols-12">
                    <span className="font-mono text-[0.8rem] tabular-nums text-stone sm:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-h4 font-medium tracking-tight text-ink sm:col-span-4">
                      {r.title}
                    </h3>
                    <p className="hyphenate text-small text-slate sm:col-span-7">
                      {r.body}
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
