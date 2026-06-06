import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceHero } from "./ServiceHero";
import { pillars, type Pillar } from "@/content/services";

export function ServiceDetail({ pillar }: { pillar: Pillar }) {
  const others = pillars.filter((p) => p.slug !== pillar.slug);

  return (
    <>
      <ServiceHero pillar={pillar} />

      {/* Overview */}
      <Section tone="paper" size="lg">
        <Container>
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-6">
              <Reveal>
                <Eyebrow index="—">Überblick</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="hyphenate mt-8 text-balance text-h1 font-semibold uppercase tracking-tight text-ink">
                  {pillar.tagline}
                </h2>
              </Reveal>
            </div>
            <div className="flex items-end md:col-span-5 md:col-start-8">
              <Reveal delay={0.1}>
                <p className="measure hyphenate text-lead leading-relaxed text-slate">
                  {pillar.lead}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Scope — detailed groups */}
      <Section tone="cream" size="lg">
        <Container>
          <Reveal>
            <Eyebrow index="01">Leistungen im Detail</Eyebrow>
          </Reveal>

          <Stagger className="mt-14 border-t border-line" gap={0.08}>
            {pillar.groups.map((g) => (
              <StaggerItem key={g.title}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 border-b border-line py-12 md:grid-cols-12 md:py-14">
                  <div className="md:col-span-5">
                    <h3 className="hyphenate text-h3 font-medium tracking-tight text-ink">
                      {g.title}
                    </h3>
                    {g.intro && (
                      <p className="measure-tight hyphenate mt-5 text-small text-slate">
                        {g.intro}
                      </p>
                    )}
                  </div>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-3 self-start sm:grid-cols-2 md:col-span-6 md:col-start-7">
                    {g.points.map((pt) => (
                      <li
                        key={pt}
                        className="hyphenate flex items-baseline gap-3 border-b border-line/60 pb-3 text-body text-slate"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-px w-3 shrink-0 bg-line-strong"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Context imagery band — caption below carries the description, so the
          image itself is decorative (alt="") to avoid a double screen-reader read. */}
      <section className="relative">
        <ParallaxImage
          src={pillar.image}
          alt=""
          className="h-[55vh] md:h-[72vh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent" />
        <Container className="pointer-events-none absolute inset-x-0 bottom-0 pb-8">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper/85">
            {pillar.imageAlt}
          </p>
        </Container>
      </section>

      {/* Cross-links to other disciplines */}
      <Section tone="ink" size="lg" className="[--color-line:var(--color-line-inv)]">
        <Container>
          <Reveal>
            <Eyebrow index="—" tone="dark">
              Weitere Leistungen
            </Eyebrow>
          </Reveal>
          <Stagger className="mt-12 border-t border-line" gap={0.1}>
            {others.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group grid grid-cols-1 items-baseline gap-y-4 border-b border-line py-10 md:grid-cols-12 md:gap-x-8"
                >
                  <span className="font-mono text-[0.85rem] tabular-nums text-gold md:col-span-1">
                    {p.index}
                  </span>
                  <h3 className="text-h2 font-semibold uppercase tracking-tight text-paper transition-colors duration-400 group-hover:text-mist md:col-span-7">
                    {p.brand ?? p.name}
                  </h3>
                  <p className="measure-tight text-small text-mist md:col-span-3">
                    {p.tagline}
                  </p>
                  <span className="flex items-center justify-start text-mist transition-colors duration-400 group-hover:text-gold md:col-span-1 md:justify-end">
                    <ArrowRight
                      strokeWidth={1.5}
                      className="h-5 w-5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
