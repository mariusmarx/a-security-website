"use client";

import { motion } from "framer-motion";
import { EASE, DUR } from "@/lib/motion";

/** Enter-only route transition — a barely-there lift + fade on every navigation. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DUR.base, ease: EASE.out }}
    >
      {children}
    </motion.div>
  );
}
