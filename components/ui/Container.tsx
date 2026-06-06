import { cn } from "@/lib/utils";

/** Page container with architectural gutters. Max width ~1408px. */
export function Container({
  children,
  className,
  bleed = false,
}: {
  children: React.ReactNode;
  className?: string;
  /** When true, removes horizontal padding (for full-bleed children). */
  bleed?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[88rem]",
        !bleed && "px-(--spacing-gutter)",
        className,
      )}
    >
      {children}
    </div>
  );
}
