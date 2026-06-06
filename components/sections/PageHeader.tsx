import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/** Compact dark page header for legal / interior pages. */
export function PageHeader({
  title,
  eyebrow,
  intro,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <header className="relative bg-ink pb-20 pt-40 text-paper md:pb-24 md:pt-48 [--color-line:var(--color-line-inv)]">
      <Container>
        {eyebrow && (
          <Reveal>
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-7 text-balance text-h1 font-semibold uppercase tracking-tight text-paper">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="measure mt-7 text-lead text-mist">{intro}</p>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
