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
    <header className="metallic relative isolate overflow-hidden pb-20 pt-40 text-ink md:pb-24 md:pt-48">
      <div aria-hidden className="hair-grid absolute inset-0 -z-10 opacity-50" />
      <Container>
        {eyebrow && (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-7 text-balance text-h1 text-ink">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="measure mt-7 text-lead text-stone">{intro}</p>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
