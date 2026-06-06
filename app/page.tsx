import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Pillars } from "@/components/sections/Pillars";
import { Clients } from "@/components/sections/Clients";
import { Why } from "@/components/sections/Why";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { siteMeta, company, contact } from "@/content/site";
import { pillars } from "@/content/services";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: company.legalName,
  description: siteMeta.description,
  url: siteMeta.url,
  telephone: contact.phoneLabel,
  email: contact.email,
  areaServed: { "@type": "Country", name: "Deutschland" },
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    postalCode: contact.address.zip,
    addressLocality: contact.address.city,
    addressCountry: "DE",
  },
  makesOffer: pillars.map((p) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: p.brand ?? p.name },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Intro />
      <Pillars />
      <Clients />
      <Why />
      <Approach />
      <Contact />
    </>
  );
}
