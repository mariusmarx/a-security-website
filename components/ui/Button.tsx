import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary" // dark fill, for light backgrounds
  | "inverse" // light fill, for dark backgrounds
  | "outline" // hairline, light backgrounds
  | "outlineInverse" // hairline, dark backgrounds
  | "ghost"; // text + arrow only

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-slate border border-ink hover:border-slate",
  inverse:
    "bg-paper text-ink hover:bg-cream border border-paper hover:border-cream",
  outline:
    "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
  outlineInverse:
    "border border-[color-mix(in_oklab,white_28%,transparent)] text-paper hover:bg-paper hover:text-ink hover:border-paper",
  ghost: "text-current hover:text-gold-deep px-0! py-0! border-0",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  arrow?: boolean;
};

function classes(variant: Variant, size: "md" | "lg", className?: string) {
  return cn(
    "group/btn inline-flex items-center justify-center gap-2.5 rounded-none",
    "text-[0.78rem] font-medium uppercase tracking-[0.14em] leading-none",
    "transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer",
    size === "lg" ? "px-8 py-5" : "px-6 py-4",
    variants[variant],
    className,
  );
}

function Arrow() {
  return (
    <ArrowUpRight
      className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      strokeWidth={1.5}
    />
  );
}

/** Link-styled button (renders <a> via next/link). */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = true,
  ...rest
}: CommonProps & { href: string } & React.ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

/** Native <button>. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = true,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
