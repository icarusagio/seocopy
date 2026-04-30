import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://seocopy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SEOCopy — AI SEO Metadata & Landing Page Copy Generator",
    template: "%s | SEOCopy",
  },
  description:
    "Generate SEO titles, meta descriptions, OG tags, headlines, subheadlines, and CTA ideas from a URL or product description in seconds.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "AI SEO copy generator",
    "SEO title generator",
    "meta description generator",
    "landing page copy generator",
    "OG tag generator",
    "Shopify SEO copy",
  ],
  openGraph: {
    title: "SEOCopy — AI SEO Metadata & Landing Page Copy Generator",
    description:
      "Turn a URL or product description into SEO metadata and landing page copy variants you can publish immediately.",
    url: siteUrl,
    siteName: "SEOCopy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEOCopy — AI SEO Metadata & Landing Page Copy Generator",
    description:
      "Generate SEO titles, meta descriptions, OG tags, headlines, subheadlines, and CTA ideas in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
