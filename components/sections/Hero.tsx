"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { useParallaxEnabled } from "@/lib/useParallax";
import { asset } from "@/lib/asset";
import { company } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const ySpring = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.5 });
  const y = parallax ? ySpring : 0;

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-paper [--color-line:var(--color-line-inv)]"
    >
      {/* Parallax, dark-graded background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-20 h-[118%]">
        <Image
          src={asset("/images/event-redcarpet-dark.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </motion.div>

      {/* Legibility scrim — heavier bottom-left behind the headline, image stays
          visible toward the top-right where there is no text. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/45 to-ink/5" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/80 via-ink/20 to-transparent" />

      <Container className="relative w-full pb-24 pt-40 md:pb-32">
        <div className="max-w-4xl">
          <Reveal y={14}>
            <Eyebrow tone="dark">Sicherheit · Reinigung · Eventsupport</Eyebrow>
          </Reveal>

          <h1 className="mt-8 text-display uppercase text-paper">
            <RevealText
              label="Sicherheit mit Haltung."
              delay={0.15}
              lines={[
                "Sicherheit",
                <Fragment key="l2">
                  mit Haltung<span className="text-gold">.</span>
                </Fragment>,
              ]}
            />
          </h1>

          <Reveal delay={0.55} y={16}>
            <p className="measure-tight mt-9 text-balance text-lead text-mist">
              {company.claim}
            </p>
          </Reveal>

          <Reveal
            delay={0.7}
            y={16}
            className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <Magnetic strength={0.25}>
              <ButtonLink href="/#kontakt" variant="inverse" size="lg">
                Angebot anfragen
              </ButtonLink>
            </Magnetic>
            <ButtonLink
              href="/#leistungen"
              variant="ghost"
              className="text-paper hover:text-gold"
            >
              Leistungen
            </ButtonLink>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 right-(--spacing-gutter) hidden items-center gap-3 md:flex"
      >
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-mist">
          Scrollen
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-line-inv">
          <motion.span
            className="absolute inset-x-0 top-0 block h-1/2 bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
