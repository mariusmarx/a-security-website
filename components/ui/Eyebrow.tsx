import { cn } from "@/lib/utils";

/** Mono overline label with a fine gold tick. Use sparingly. */
export function Eyebrow({
  children,
  index,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  index?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow flex items-center gap-3.5",
        tone === "light" ? "text-stone" : "text-mist",
        className,
      )}
    >
      {index && (
        <span className={tone === "light" ? "text-stone" : "text-gold"}>
          {index}
        </span>
      )}
      <span
        aria-hidden
        className={cn(
          "h-px w-7",
          tone === "light" ? "bg-gold-deep/70" : "bg-gold/80",
        )}
      />
      <span>{children}</span>
    </span>
  );
}
