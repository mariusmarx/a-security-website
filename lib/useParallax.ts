"use client";

import { useEffect, useState } from "react";

/**
 * True only on pointer-fine, ≥768px viewports — i.e. where scroll-linked
 * parallax is smooth. On phones/tablets we skip the transform entirely to
 * avoid scroll jank (repainting full-bleed images on every scroll frame).
 */
export function useParallaxEnabled() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return enabled;
}
