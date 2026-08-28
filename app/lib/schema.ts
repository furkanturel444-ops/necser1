import { SITE_URL, contact, serviceAreas, services, seoKeywords } from "./site-data";
import { SEO } from "./seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Necser",
    legalName: "Necser Yazıcı Kiralama",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description: SEO.defaultDescription,
    email: contact.email,
    telephone: contact.phoneLinks,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sakarya",
      addressRegion: "Sakarya",
      addressCountry: "TR",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    knowsAbout: seoKeywords.slice(0, 10),
    sameAs: [],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Necser - Sakarya Yazıcı Kiralama",
    alternateName: [
      "Necser",
      "Necser Sakarya",
      "Sakarya Yazıcı Kiralama Necser",
    ],
    description: SEO.defaultDescription,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: contact.phoneLinks,
    email: contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sakarya",
      addressLocality: "Sakarya",
      addressRegion: "Sakarya",
      postalCode: "54000",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7569,
      longitude: 30.3785,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sakarya Yazıcı Kiralama Hizmetleri",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Sakarya" },
        },
      })),
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SEO.siteName,
    url: SITE_URL,
    description: SEO.defaultDescription,
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceListSchema(name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        areaServed: { "@type": "City", name: "Sakarya" },
        serviceType: service.title,
      },
    })),
  };
}

export function servicePageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: name,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Necser İletişim - Sakarya Yazıcı Kiralama",
    url: `${SITE_URL}/iletisim`,
    description:
      "Sakarya yazıcı kiralama ve fotokopi makinesi kiralama teklif almak için iletişim.",
    mainEntity: { "@id": `${SITE_URL}/#localbusiness` },
  };
}
