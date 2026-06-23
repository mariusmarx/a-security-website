"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { AngledImage } from "@/components/ui/AngledImage";
import { company } from "@/content/site";

const HERO_IMG = "/images/event-redcarpet.jpg";
const HERO_ALT = "Diskrete Sicherheitsbegleitung auf einem Empfang in Berlin.";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-paper text-ink">
      {/* Bright silver-metallic field — the premium "upper area" the client liked */}
      <div aria-hidden className="metallic absolute inset-0 -z-20" />
      <div aria-hidden className="hair-grid absolute inset-0 -z-10 opacity-50" />

      {/* Desktop: full-height angled photograph on the right */}
      <div className="absolute inset-y-0 right-0 hidden w-[47%] lg:block xl:w-[44%]">
        <AngledImage
          src={HERO_IMG}
          alt={HERO_ALT}
          variant="blade"
          grade={false}
          priority
          className="h-full w-full"
          imgClassName="object-[33%_center]"
          sizes="46vw"
        >
          {/* keep the dark navigation legible over the image top */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-paper via-paper/40 to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-ink/25 via-transparent to-transparent"
          />
        </AngledImage>
      </div>

      <Container className="relative w-full py-28 lg:py-24">
        {/* Mobile: angled photo band above the text */}
        <div className="mb-10 lg:hidden">
          <AngledImage
            src={HERO_IMG}
            alt={HERO_ALT}
            variant="lean"
            priority
            className="aspect-[16/11] w-full"
            imgClassName="object-[40%_center]"
            sizes="92vw"
          />
        </div>

        <div className="lg:max-w-[54%]">
          <Reveal y={14}>
            <Eyebrow>Security · Eventsupport · Cleaning</Eyebrow>
          </Reveal>

          <div className="relative mt-7">
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute -left-6 top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-gold md:block"
            />
            <h1 className="text-display text-ink">
              <RevealText
                label="Sicherheit mit Haltung."
                delay={0.15}
                lines={[
                  "Sicherheit",
                  <Fragment key="l2">
                    mit Haltung<span className="text-gold-deep">.</span>
                  </Fragment>,
                ]}
              />
            </h1>
          </div>

          <Reveal delay={0.5} y={16}>
            <p className="measure mt-8 text-balance text-lead text-stone">
              {company.claim}
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone">
              Berliner Sicherheitsunternehmen · seit {company.since}
            </p>
          </Reveal>

          <Reveal
            delay={0.7}
            y={16}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <Magnetic strength={0.25}>
              <ButtonLink href="/#kontakt" variant="primary" size="lg">
                Kostenlose Beratung
              </ButtonLink>
            </Magnetic>
            <ButtonLink
              href="/#leistungen"
              variant="ghost"
              className="text-ink hover:text-gold-deep"
            >
              Leistungen
            </ButtonLink>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue (kept on the silver side) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-(--spacing-gutter) hidden items-center gap-3 lg:flex"
      >
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-stone">
          Scrollen
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-line-strong">
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
