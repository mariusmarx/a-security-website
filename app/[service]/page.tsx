import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pillars, getPillar } from "@/content/services";
import { ServiceDetail } from "@/components/service/ServiceDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return pillars.map((p) => ({ service: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const p = getPillar(service);
  if (!p) return {};
  const name = p.brand ?? p.name;
  return {
    title: `${name} — ${p.tagline}`,
    description: p.summary,
    alternates: { canonical: `/${p.slug}` },
    openGraph: {
      title: `${name} — A-Security & Service`,
      description: p.summary,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const pillar = getPillar(service);
  if (!pillar) notFound();
  return <ServiceDetail pillar={pillar} />;
}
