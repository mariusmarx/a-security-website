import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { ShieldMark } from "@/components/brand/ShieldMark";
import { company, contact, nav, legalNav } from "@/content/site";

const year = 2026; // build-time constant

export function Footer() {
  return (
    <footer className="relative bg-ink text-mist [--color-line:var(--color-line-inv)]">
      {/* gold-60% top hairline */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            "color-mix(in oklab, var(--color-gold) 55%, transparent)",
        }}
      />
      <Container className="grid grid-cols-1 gap-x-8 gap-y-14 py-20 md:grid-cols-12 md:py-24">
        {/* Brand + tagline */}
        <div className="md:col-span-5">
          <Logo className="text-paper" href={null} />
          <p className="measure-tight mt-7 text-balance text-lead leading-snug text-mist">
            {company.claim}
          </p>
          <p className="mt-6 max-w-sm text-small text-stone">
            {company.name} — Sicherheitsdienst, Reinigung und Eventsupport mit
            Sitz in {company.city}.
          </p>
        </div>

        <div className="md:col-span-1" />

        {/* Leistungen */}
        <nav aria-label="Leistungen" className="md:col-span-3">
          <h2 className="eyebrow text-greige">Leistungen</h2>
          <ul className="mt-6 flex flex-col gap-3.5">
            {nav
              .filter((n) => ["/sicherheit", "/reinigung", "/eventsupport"].includes(n.href))
              .map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
          </ul>
        </nav>

        {/* Kontakt */}
        <div className="md:col-span-3">
          <h2 className="eyebrow text-greige">Kontakt</h2>
          <address className="mt-6 flex flex-col gap-3.5 not-italic">
            <span className="text-small text-mist">
              {contact.address.street}
              <br />
              {contact.address.zip} {contact.address.city}
            </span>
            <a
              href={contact.phoneHref}
              className="font-mono text-[0.8rem] tabular-nums tracking-wide text-mist transition-colors hover:text-paper"
            >
              {contact.phoneLabel}
            </a>
            <a
              href={contact.emailHref}
              className="font-mono text-[0.8rem] tracking-wide text-mist transition-colors hover:text-paper"
            >
              {contact.email}
            </a>
            <span className="mt-1 text-small text-stone">{contact.hours}</span>
          </address>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <Container className="flex flex-col items-start justify-between gap-5 py-7 md:flex-row md:items-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone">
            © {year} {company.legalName}
          </p>
          <div className="flex items-center gap-7">
            {legalNav.map((item) => (
              <FooterLink key={item.href} href={item.href} small>
                {item.label}
              </FooterLink>
            ))}
          </div>
          <ShieldMark className="hidden h-6 w-auto text-stone md:block" title="" />
        </Container>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  small,
}: {
  href: string;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        small
          ? "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone transition-colors hover:text-paper"
          : "group inline-flex w-fit items-center text-small text-mist transition-colors hover:text-paper"
      }
    >
      {children}
    </Link>
  );
}
