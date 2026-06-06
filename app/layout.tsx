import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteMeta, company } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: "%s — A-Security & Service",
  },
  description: siteMeta.description,
  applicationName: company.legalName,
  authors: [{ name: company.legalName }],
  keywords: [
    "Sicherheitsdienst Berlin",
    "Eventsicherheit",
    "Personenschutz",
    "Objektschutz",
    "Reinigung Berlin",
    "Eventsupport",
    "A-Security",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteMeta.locale,
    url: siteMeta.url,
    siteName: company.legalName,
    title: siteMeta.title,
    description: siteMeta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-none bg-ink px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Zum Inhalt springen
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
