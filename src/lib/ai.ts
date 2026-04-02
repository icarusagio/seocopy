import Anthropic from "@anthropic-ai/sdk";

import type { GeneratePayload, GenerationResult } from "@/lib/types";

const FALLBACK_MODEL = "claude-3-7-sonnet-latest";

function stripHtml(input: string) {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchUrlContext(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "SEOCopyBot/1.0 (+https://seocopy.local)",
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      return `URL fetch failed with status ${response.status}.`;
    }

    const html = await response.text();
    return stripHtml(html).slice(0, 4000);
  } catch (error) {
    return `URL fetch failed: ${
      error instanceof Error ? error.message : "Unknown error"
    }.`;
  }
}

function extractTextBlock(response: Anthropic.Message) {
  const text = response.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  return text.trim();
}

function safeParseGeneration(text: string): GenerationResult {
  const cleaned = text.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
  const parsed = JSON.parse(cleaned) as Partial<GenerationResult>;

  return {
    seoTitle: parsed.seoTitle?.trim() ?? "",
    metaDescription: parsed.metaDescription?.trim() ?? "",
    ogTitle: parsed.ogTitle?.trim() ?? "",
    ogDescription: parsed.ogDescription?.trim() ?? "",
    headlines: (parsed.headlines ?? []).slice(0, 3).map((item) => item.trim()),
    subheadlines: (parsed.subheadlines ?? [])
      .slice(0, 3)
      .map((item) => item.trim()),
    ctaSuggestions: (parsed.ctaSuggestions ?? [])
      .slice(0, 3)
      .map((item) => item.trim()),
  };
}

export async function generateSeoCopy(payload: GeneratePayload) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured.");
  }

  const anthropic = new Anthropic({ apiKey });
  const urlContext = payload.url ? await fetchUrlContext(payload.url) : "";
  const sourceSummary = payload.url
    ? "Generated from URL context and provided inputs."
    : "Generated from the provided business description.";

  const prompt = [
    "You generate SEO metadata and landing page copy.",
    "Return valid JSON only with these keys:",
    "seoTitle, metaDescription, ogTitle, ogDescription, headlines, subheadlines, ctaSuggestions.",
    "Requirements:",
    "- seoTitle: one string, 60 characters or fewer, compelling and keyword-aware.",
    "- metaDescription: one string, 155 characters or fewer.",
    "- ogTitle and ogDescription: concise, click-worthy social copy.",
    "- headlines: array of exactly 3 distinct landing page headline variants.",
    "- subheadlines: array of exactly 3 distinct supporting subheadline variants.",
    "- ctaSuggestions: array of exactly 3 distinct CTA button labels.",
    "- Respect the requested tone.",
    "",
    `URL: ${payload.url ?? "Not provided"}`,
    `Business description: ${payload.description ?? "Not provided"}`,
    `Industry: ${payload.industry || "Not specified"}`,
    `Tone: ${payload.tone || "Professional"}`,
    `Fetched URL context: ${urlContext || "Not provided"}`,
  ].join("\n");

  const response = await anthropic.messages.create({
    model: FALLBACK_MODEL,
    max_tokens: 1400,
    system:
      "You are an expert SEO strategist and conversion copywriter. Output JSON only and never add commentary.",
    messages: [{ role: "user", content: prompt }],
  });

  const text = extractTextBlock(response);
  const data = safeParseGeneration(text);

  return { data, sourceSummary };
}
