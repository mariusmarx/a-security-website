import Image from "next/image";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

/**
 * Image cropped to an angled parallelogram — echoes the brand's diagonal
 * shield/diamond geometry ("angeschrägte Bilder"). The photo itself is never
 * skewed/distorted, only the crop edge is angled, which keeps it premium.
 */
const clips: Record<string, string> = {
  lean: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)", // leans right
  leanBack: "polygon(0 0, 92% 0, 100% 100%, 8% 100%)", // leans left
  blade: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)", // single diagonal left edge
};

export function AngledImage({
  src,
  alt = "",
  variant = "lean",
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 42vw, 90vw",
  priority = false,
  grade = true,
  children,
}: {
  src: string;
  alt?: string;
  variant?: keyof typeof clips;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  grade?: boolean;
  children?: React.ReactNode;
}) {
  const clip = clips[variant];
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ clipPath: clip, WebkitClipPath: clip }}
    >
      <Image
        src={asset(src)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
      {/* faint warm grade so the dark event photos sit calmly on the bright page */}
      {grade && (
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-tr from-ink/25 via-transparent to-transparent"
        />
      )}
      {children}
    </div>
  );
}
