"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { useParallaxEnabled } from "@/lib/useParallax";
import { asset } from "@/lib/asset";
import { EASE } from "@/lib/motion";
import type { Pillar } from "@/content/services";

const heroImage: Record<Pillar["slug"], string> = {
  sicherheit: "/images/event-redcarpet-dark.jpg",
  reinigung: "/images/chauffeur-venue-dark.jpg",
  eventsupport: "/images/event-gala-dark.jpg",
};

export function ServiceHero({ pillar }: { pillar: Pillar }) {
  const ref = useRef<HTMLElement>(null);
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const ySpring = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.5 });
  const y = parallax ? ySpring : 0;

  const display = pillar.brand ?? pillar.name;
  const accent = pillar.slug;

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-paper [--color-line:var(--color-line-inv)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-20 h-[118%]">
        <Image
          src={asset(heroImage[pillar.slug])}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </motion.div>
      {/* Legibility scrim — heavier bottom-left behind the headline and copy,
          image stays visible toward the top-right where there is no text. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/50 to-ink/8" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/80 via-ink/22 to-transparent" />

      {/* oversized ghost index */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-(--spacing-gutter) top-28 font-mono text-[clamp(5rem,18vw,16rem)] font-medium leading-none tracking-tighter text-paper/[0.04]"
      >
        {pillar.index}
      </span>

      <Container className="relative w-full pb-24 pt-40 md:pb-28">
        <Reveal y={12}>
          <nav
            aria-label="Brotkrumen"
            className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist"
          >
            <Link href="/#leistungen" className="hover:text-gold">
              Leistungen
            </Link>
            <span className="text-stone">/</span>
            <span className="text-gold">{pillar.index}</span>
          </nav>
        </Reveal>

        {/* accent + headline */}
        <div className="relative mt-7">
          {accent === "sicherheit" && (
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, ease: EASE.out, delay: 0.2 }}
              className="absolute -left-5 top-1 hidden h-[calc(100%-0.5rem)] w-px origin-top bg-gold md:block"
            />
          )}

          {/* Below sm the single long service word (e.g. EVENTSUPPORT) would clip
              against the reveal mask, so scale it down on phones; snap to the full
              display size from sm up to match the homepage hero. */}
          <h1 className="text-[clamp(2rem,11vw,4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.035em] text-paper sm:text-display">
            <RevealText label={display} lines={[display]} delay={0.15} />
          </h1>

          {accent === "reinigung" && (
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: EASE.out, delay: 0.5 }}
              className="mt-6 block h-px w-40 origin-left bg-gold"
            />
          )}
          {accent === "eventsupport" && (
            <motion.span
              aria-hidden
              initial={{ scale: 0, rotate: 45, opacity: 0 }}
              animate={{
                scale: [0, 1.25, 1],
                opacity: [0, 1, 1],
                rotate: 45,
              }}
              transition={{ duration: 1, ease: EASE.out, delay: 0.6 }}
              className="mt-7 block h-3.5 w-3.5 bg-gold"
            />
          )}
        </div>

        <Reveal delay={0.45} y={14}>
          <p className="measure-tight mt-8 text-balance text-lead text-mist">
            {pillar.tagline} — {pillar.summary}
          </p>
        </Reveal>

        <Reveal delay={0.6} y={14}>
          <div className="mt-11">
            <Magnetic strength={0.25}>
              <ButtonLink href="/#kontakt" variant="inverse" size="lg">
                Angebot anfragen
              </ButtonLink>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
