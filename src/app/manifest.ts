import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SEOCopy — AI SEO Copy Generator",
    short_name: "SEOCopy",
    description:
      "SEO metadata, OG tags, landing page copy, FAQs, and CTAs from a URL/product brief.",
    start_url: "/generate",
    scope: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#2563eb",
    categories: ["business", "productivity", "marketing"],
  };
}
