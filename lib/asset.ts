/**
 * Prefix a public asset path (e.g. "/images/hero.jpg") with the deploy
 * basePath. Needed because Next.js does NOT add basePath to string `src`
 * values on next/image — only to _next/ chunks, <Link>, and static imports.
 * Empty on local/custom-domain builds, "/a-security-website" on GitHub Pages.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
