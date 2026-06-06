import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShieldMark } from "./ShieldMark";

/**
 * Lockup: shield mark + wordmark. Inherits text color from context,
 * so it reads correctly on both the paper and ink worlds.
 */
export function Logo({
  className,
  withWordmark = true,
  href = "/",
}: {
  className?: string;
  withWordmark?: boolean;
  href?: string | null;
}) {
  const inner = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <ShieldMark className="h-8 w-auto shrink-0" />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[0.95rem] font-semibold uppercase tracking-[0.22em]">
            A-Security
          </span>
          <span className="eyebrow mt-1 text-[0.6rem] tracking-[0.34em] opacity-60">
            Security &amp; Service
          </span>
        </span>
      )}
    </span>
  );

  if (href === null) return inner;

  return (
    <Link
      href={href}
      aria-label="A-Security & Service — Startseite"
      className="inline-flex items-center transition-opacity duration-300 hover:opacity-70"
    >
      {inner}
    </Link>
  );
}
