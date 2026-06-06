/** Shared motion tokens — one easing + duration system across the whole site. */
export const EASE = {
  out: [0.16, 1, 0.3, 1] as const, // entering (default)
  in: [0.7, 0, 0.84, 0] as const, // exiting
  inOut: [0.65, 0, 0.35, 1] as const, // crossfades
} as const;

export const DUR = {
  micro: 0.2,
  sm: 0.4,
  base: 0.6,
  lg: 0.9,
  xl: 1.2,
} as const;
