"use client";

import { MotionConfig } from "framer-motion";

/** Root motion config — honors the OS "reduce motion" setting globally. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
