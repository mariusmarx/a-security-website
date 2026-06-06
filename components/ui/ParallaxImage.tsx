"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useParallaxEnabled } from "@/lib/useParallax";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

/** Full-bleed image with a subtle scroll-linked parallax (±8%). */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  range = 8,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  range?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${range}%`, `${range}%`],
  );
  const ySpring = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.5 });
  const y = parallax ? ySpring : 0;

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-0 h-[116%]">
        <Image
          src={asset(src)}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}
