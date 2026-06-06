import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// On GitHub Pages project sites the app is served under /<repo> (e.g.
// /a-security-website), so assets must be prefixed. The deploy workflow sets
// PAGES_BASE_PATH; for a custom domain (a-security.de, served at the root) or
// local builds, leave it unset and the site builds at "/".
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: emits a plain `out/` folder of HTML/CSS/JS that runs on any
  // static host (GitHub Pages, Netlify, Cloudflare, the current provider).
  output: "export",
  basePath: basePath || undefined,
  // Next prefixes _next/ assets and <Link> with basePath automatically, but NOT
  // string `src` on next/image. Expose the prefix so asset() can apply it.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  // Folder-style URLs (/sicherheit/index.html) — what GitHub Pages serves cleanly.
  trailingSlash: true,
  images: {
    // The Next image optimizer can't run on a static host, so serve the
    // (pre-sized) source files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
