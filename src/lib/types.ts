import type { INDUSTRIES, TONES } from "@/lib/constants";

export type Tone = (typeof TONES)[number];
export type Industry = (typeof INDUSTRIES)[number] | "";

export type GeneratePayload = {
  url?: string;
  description?: string;
  industry?: Industry;
  tone?: Tone;
};

export type GenerationResult = {
  seoTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  headlines: string[];
  subheadlines: string[];
  ctaSuggestions: string[];
};

export type UsageState = {
  freeUsed: number;
  freeRemaining: number;
  paidCredits: number;
  subscriptionActive: boolean;
  accessMode: "free" | "paid" | "subscription";
};

export type GenerateResponse = {
  data: GenerationResult;
  usage: UsageState;
  sourceSummary?: string;
};
