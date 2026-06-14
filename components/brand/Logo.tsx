import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

/**
 * Lockup: official A-Security shield mark + wordmark. The shield is the real
 * black+gold brand asset (public/brand/asecurity-shield.png); the wordmark text
 * inherits the surrounding text color, so it reads on any light surface.
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
      <Image
        src={asset("/brand/asecurity-shield.png")}
        alt=""
        width={471}
        height={612}
        priority
        className="h-9 w-auto shrink-0"
      />
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
