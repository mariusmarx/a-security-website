"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { AngledImage } from "@/components/ui/AngledImage";
import { useParallaxEnabled } from "@/lib/useParallax";
import { EASE } from "@/lib/motion";
import type { Pillar } from "@/content/services";

const heroImage: Record<Pillar["slug"], string> = {
  sicherheit: "/images/event-redcarpet.jpg",
  eventsupport: "/images/event-gala-live.jpg",
  reinigung: "/images/chauffeur-venue.jpg",
};

export function ServiceHero({ pillar }: { pillar: Pillar }) {
  const ref = useRef<HTMLElement>(null);
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const ySpring = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.5 });
  const y = parallax ? ySpring : 0;

  const accent = pillar.slug;

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[74svh] items-center overflow-hidden bg-paper text-ink"
    >
      <div aria-hidden className="metallic absolute inset-0 -z-20" />
      <div aria-hidden className="hair-grid absolute inset-0 -z-10 opacity-50" />

      <Container className="grid w-full grid-cols-1 items-center gap-y-10 pb-16 pt-36 lg:grid-cols-12 lg:gap-x-12 lg:pb-20 lg:pt-32">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <Reveal y={12}>
            <nav
              aria-label="Brotkrumen"
              className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-stone"
            >
              <Link href="/#leistungen" className="hover:text-gold-deep">
                Leistungen
              </Link>
              <span className="text-greige">/</span>
              <span className="text-gold-deep">{pillar.index}</span>
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

            {/* sized so the longest service word ("Eventsupport") fits the
                left column and isn't clipped by the reveal mask */}
            <h1 className="text-[clamp(2.2rem,1rem+5.6vw,5.75rem)] font-[560] leading-[0.98] tracking-[-0.022em] text-ink">
              <RevealText label={pillar.name} lines={[pillar.name]} delay={0.15} />
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
                animate={{ scale: [0, 1.25, 1], opacity: [0, 1, 1], rotate: 45 }}
                transition={{ duration: 1, ease: EASE.out, delay: 0.6 }}
                className="mt-7 block h-3.5 w-3.5 bg-gold"
              />
            )}
          </div>

          <Reveal delay={0.45} y={14}>
            <p className="measure mt-8 text-balance text-lead text-stone">
              {pillar.tagline} — {pillar.summary}
            </p>
          </Reveal>

          <Reveal delay={0.6} y={14}>
            <div className="mt-10">
              <Magnetic strength={0.25}>
                <ButtonLink href="/#kontakt" variant="primary" size="lg">
                  Kostenlose Beratung
                </ButtonLink>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <motion.div
          style={{ y }}
          className="order-1 w-full lg:order-2 lg:col-span-5"
        >
          <AngledImage
            src={heroImage[pillar.slug]}
            variant="lean"
            priority
            className="aspect-[4/3] w-full lg:aspect-[5/6]"
            sizes="(min-width: 1024px) 42vw, 92vw"
          />
        </motion.div>
      </Container>
    </section>
  );
}
