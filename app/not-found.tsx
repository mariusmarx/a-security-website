import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="metallic relative isolate flex min-h-[80svh] items-center overflow-hidden text-ink">
      <div aria-hidden className="hair-grid absolute inset-0 -z-10 opacity-50" />
      <Container>
        <Eyebrow>Fehler 404</Eyebrow>
        <h1 className="mt-8 text-balance text-display text-ink">
          Seite nicht
          <br />
          gefunden<span className="text-gold-deep">.</span>
        </h1>
        <p className="measure-tight mt-8 text-lead text-stone">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-11">
          <ButtonLink href="/" variant="primary" size="lg">
            Zur Startseite
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
