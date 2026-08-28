import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seoKeywords } from "./lib/site-data";
import { defaultMetadata, SEO } from "./lib/seo";
import JsonLd from "./components/JsonLd";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "./lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  keywords: seoKeywords,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: SEO.siteName,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#33aff6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SEO.language}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
        {children}
      </body>
    </html>
  );
}
