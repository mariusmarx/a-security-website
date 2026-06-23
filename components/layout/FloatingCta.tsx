"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Persistent "Kostenlose Beratung" call-to-action (client request: the CTA
 * should follow along while scrolling). On desktop the fixed header already
 * carries this button, so this floating variant is mobile-only. It fades in
 * once the user has scrolled past the first viewport and hides again near the
 * footer so it never covers the contact section's own CTA.
 */
export function FloatingCta() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const nearBottom = y + vh >= docH - 360;
      setShow(y > vh * 0.5 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 18 }}
          transition={{ duration: 0.35, ease: EASE.out }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
        >
          <Link
            href="/#kontakt"
            className="group/btn flex items-center justify-center gap-2.5 rounded-none border border-ink bg-ink px-6 py-4 font-medium uppercase leading-none tracking-[0.14em] text-paper shadow-[0_8px_36px_-14px_rgba(0,0,0,0.55)] transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] text-[0.78rem] hover:bg-slate hover:border-slate"
          >
            Kostenlose Beratung
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
