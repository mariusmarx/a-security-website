"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, contact } from "@/content/site";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const links = nav.filter((n) => n.label !== "Kontakt");

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll + Escape-to-close while the overlay is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const light = !scrolled && !open; // light (paper) text over the dark hero

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-line bg-paper/85 text-ink backdrop-blur-md supports-[backdrop-filter]:bg-paper/75"
          : "border-b border-transparent bg-transparent text-paper",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-9 lg:flex">
          {links.map((item) => (
            <HeaderLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {item.label}
            </HeaderLink>
          ))}
          <Link
            href="/#kontakt"
            className={cn(
              "group/btn inline-flex items-center gap-2 rounded-none border px-5 py-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] leading-none transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
              light
                ? "border-[color-mix(in_oklab,white_30%,transparent)] text-paper hover:bg-paper hover:text-ink"
                : "border-ink bg-ink text-paper hover:bg-slate",
            )}
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menü öffnen"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-1 inline-flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <Menu strokeWidth={1.5} className="h-6 w-6" />
        </button>
      </Container>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} pathname={pathname} />}
      </AnimatePresence>
    </header>
  );
}

function HeaderLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="group relative py-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em]"
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-0 left-0 h-px w-full origin-left bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}

function MobileMenu({
  onClose,
  pathname,
}: {
  onClose: () => void;
  pathname: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Minimal focus trap + restore focus to the trigger on close
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // The element that opened the menu (the hamburger toggle) currently has focus.
    const trigger = document.activeElement as HTMLElement | null;
    const focusables = node.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    node.addEventListener("keydown", onKey);
    return () => {
      node.removeEventListener("keydown", onKey);
      // Return focus to the trigger so keyboard/SR users keep their place.
      trigger?.focus?.();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE.out }}
      className="fixed inset-0 z-50 flex flex-col bg-ink text-paper lg:hidden"
    >
      <Container className="flex h-20 shrink-0 items-center justify-between">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="-mr-1 inline-flex h-11 w-11 items-center justify-center"
        >
          <X strokeWidth={1.5} className="h-6 w-6" />
        </button>
      </Container>

      <Container className="flex flex-1 flex-col justify-center">
        <nav aria-label="Hauptnavigation" className="flex flex-col">
          {nav.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE.out, delay: 0.08 + i * 0.06 }}
              className="border-b border-line"
            >
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="flex items-baseline gap-4 py-5 text-h3 font-semibold uppercase tracking-tight"
              >
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </Container>

      <Container className="shrink-0 pb-10">
        <div className="flex flex-col gap-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-mist">
          <a href={contact.phoneHref} className="tabular-nums hover:text-paper">
            {contact.phoneLabel}
          </a>
          <a href={contact.emailHref} className="hover:text-paper">
            {contact.email}
          </a>
        </div>
      </Container>
    </motion.div>
  );
}
