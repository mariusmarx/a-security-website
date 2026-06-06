import { cn } from "@/lib/utils";

type Tone = "paper" | "cream" | "ink";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-slate",
  cream: "bg-cream text-slate",
  ink: "bg-ink text-mist",
};

/** A vertically-rhythmic page section with optional light/dark tone. */
export function Section({
  children,
  id,
  tone = "paper",
  className,
  size = "default",
}: {
  children: React.ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  size?: "default" | "lg" | "sm";
}) {
  const pad =
    size === "lg"
      ? "py-20 md:py-40"
      : size === "sm"
        ? "py-12 md:py-24"
        : "py-16 md:py-32";
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        toneClass[tone],
        pad,
        tone === "ink" && "[--color-line:var(--color-line-inv)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
