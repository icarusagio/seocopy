import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SEOCopy — AI SEO Copy Generator",
    short_name: "SEOCopy",
    description:
      "Generate SEO titles, meta descriptions, OG tags, landing page headlines, FAQs, and CTA variants from a URL or product brief.",
    start_url: "/generate",
    scope: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#2563eb",
    categories: ["business", "productivity", "marketing"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
