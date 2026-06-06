import { cn } from "@/lib/utils";

/** Lightweight long-form prose styling (no plugin) for legal pages. */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[68ch] text-body text-slate",
        "[&_h2]:mb-3 [&_h2]:mt-14 [&_h2]:text-h4 [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink first:[&_h2]:mt-0",
        "[&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-body [&_h3]:font-semibold [&_h3]:text-ink",
        "[&_p]:mt-4 [&_p]:hyphenate",
        "[&_a]:underline [&_a]:decoration-gold-deep/50 [&_a]:underline-offset-4 [&_a]:hover:text-ink",
        "[&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2",
        "[&_li]:relative [&_li]:pl-5",
        "[&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:h-px [&_li]:before:w-3 [&_li]:before:bg-gold-deep/70",
        "[&_strong]:font-semibold [&_strong]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
