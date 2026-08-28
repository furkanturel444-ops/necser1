import type { Metadata } from "next";
import { SITE_URL } from "./site-data";

export const SEO = {
  siteName: "Necser - Sakarya Yazıcı Kiralama",
  defaultTitle: "Sakarya Yazıcı Kiralama | Fotokopi Makinesi Kiralama - Necser",
  titleTemplate: "%s | Necser Sakarya",
  defaultDescription:
    "Sakarya yazıcı kiralama ve fotokopi makinesi kiralama hizmetleri. Necser ile büro tipi yazıcı kiralama, sarf malzemeleri, teknik destek. Adapazarı, Akyazı, Hendek, Serdivan. Toner dahil, aynı gün servis.",
  primaryKeywords: [
    "Sakarya yazıcı kiralama",
    "Sakarya fotokopi makinesi kiralama",
    "fotokopi makinesi kiralama Sakarya",
    "yazıcı kiralama Sakarya",
  ],
  locale: "tr_TR",
  language: "tr",
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.defaultDescription,
  applicationName: "Necser",
  authors: [{ name: "Necser", url: SITE_URL }],
  creator: "Necser",
  publisher: "Necser",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: SITE_URL,
    siteName: SEO.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        alt: "Necser - Sakarya Yazıcı Kiralama ve Fotokopi Makinesi Kiralama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [`${SITE_URL}/logo.png`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "tr-TR": SITE_URL,
    },
  },
  category: "Yazıcı Kiralama",
  other: {
    "geo.region": "TR-54",
    "geo.placename": "Sakarya",
    "geo.position": "40.7569;30.3785",
    ICBM: "40.7569, 30.3785",
  },
};

export function pageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  absoluteTitle,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  absoluteTitle?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = absoluteTitle ?? `${title} | Necser Sakarya`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: { "tr-TR": url },
    },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      url,
      siteName: SEO.siteName,
      title: ogTitle,
      description,
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [`${SITE_URL}/logo.png`],
    },
  };
}
