import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AngledImage } from "@/components/ui/AngledImage";
import { reasons } from "@/content/services";
import { company, trustStats } from "@/content/site";

const aboutImages = [
  { src: "/images/event-gala-live.jpg", alt: "Abendgala in einer Berliner Eventhalle, von A-Security betreut." },
  { src: "/images/event-lounge-live.jpg", alt: "Empfang in einer Berliner Industrie-Location bei Abendlicht." },
  { src: "/images/event-hall-live.jpg", alt: "Großveranstaltung in einer Berliner Halle mit Gästen." },
];

export function Why() {
  return (
    <Section id="ueber-uns" tone="cream" size="lg">
      <Container>
        {/* Header — the company itself, emphasised */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:items-end md:gap-x-8">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow index="03">Über uns</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance text-h1 text-ink">
                Seit {company.since} in Berlin.
                <br className="hidden sm:block" /> Alles aus einer Hand.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <p className="measure-tight text-body text-slate">
                Seit {company.since} steht A-Security &amp; Service in Berlin für
                Sicherheit, Eventsupport und Reinigung — gebündelt bei einem
                festen Ansprechpartner, mit langjähriger Erfahrung, geschultem
                Fachpersonal und dem Anspruch, national wie international
                zuverlässig zu liefern.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Angled image tiles — replace the previous number placeholders */}
        <Stagger
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-16 md:gap-6"
          gap={0.1}
        >
          {aboutImages.map((img) => (
            <StaggerItem key={img.src}>
              <AngledImage
                src={img.src}
                alt={img.alt}
                variant="lean"
                className="aspect-[4/3] w-full sm:aspect-[3/4]"
                sizes="(min-width: 640px) 30vw, 92vw"
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Trust band — large, spacious (alternatives to be confirmed by client) */}
        <Stagger
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 border-y border-line py-14 md:mt-20 md:grid-cols-4 md:py-20"
          gap={0.1}
        >
          {trustStats.map((s, i) => (
            <StaggerItem key={s.label}>
              <div className="flex flex-col gap-4 md:items-start md:border-l md:border-line md:pl-6 md:first:border-l-0 md:first:pl-0">
                <span
                  className={`font-mono text-[clamp(2.4rem,1rem+3.6vw,3.6rem)] leading-none tabular-nums tracking-tight ${
                    i === 0 ? "text-gold-deep" : "text-ink"
                  }`}
                >
                  {s.value}
                </span>
                <span className="hyphenate measure-tight font-mono text-[0.74rem] uppercase leading-relaxed tracking-[0.14em] text-stone">
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
              <span className="eyebrow text-stone">Warum A-Security</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-7 text-balance text-h2 text-ink">
                Verlässlich im Detail. Souverän im Ganzen.
              </h3>
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
                    <h4 className="text-h4 font-medium text-ink sm:col-span-4">
                      {r.title}
                    </h4>
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
