import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: emits a plain `out/` folder of HTML/CSS/JS that runs on any
  // static host (GitHub Pages, Netlify, Cloudflare, the current provider).
  output: "export",
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
