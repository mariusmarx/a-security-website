import { cn } from "@/lib/utils";

/**
 * A-Security shield mark — recolorable.
 * The shield body uses `currentColor` (set via text color);
 * the champagne diamond is fixed gold. Faithful, geometric reduction
 * of the brand logo (shield · gold diamond · chevron "A" cut).
 */
export function ShieldMark({
  className,
  title = "A-Security",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 118"
      className={cn("block", className)}
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* Shield body with the chevron "A" cut punched out (even-odd) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current"
        d="M8 4 L50 12 L92 4 L92 58 C92 86 74 104 50 116 C26 104 8 86 8 58 Z
           M12 73 L50 35 L88 73 L88 85 L50 47 L12 85 Z"
      />
      {/* Champagne diamond */}
      <path
        className="fill-gold"
        d="M50 40 L66 56 L50 72 L34 56 Z"
      />
    </svg>
  );
}
