import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ink text-paper [--color-line:var(--color-line-inv)]">
      <Container>
        <Eyebrow tone="dark">Fehler 404</Eyebrow>
        <h1 className="mt-8 text-balance text-display uppercase text-paper">
          Seite nicht
          <br />
          gefunden<span className="text-gold">.</span>
        </h1>
        <p className="measure-tight mt-8 text-lead text-mist">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-11">
          <ButtonLink href="/" variant="inverse" size="lg">
            Zur Startseite
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
