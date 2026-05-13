import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Calendar Generator",
  description:
    "Generate SEO content calendar ideas, weekly publishing plans, keyword clusters, metadata prompts, and campaign CTAs from one business or product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/content-calendar-generator",
  },
  keywords: [
    "content calendar generator",
    "SEO content calendar generator",
    "content planning tool",
    "blog calendar generator",
    "marketing calendar generator",
    "AI content calendar",
  ],
  openGraph: {
    title: "Content Calendar Generator | SEOCopy",
    description:
      "Turn one product, audience, or keyword brief into a practical SEO content calendar with titles, metadata prompts, CTAs, and campaign angles.",
    url: "https://seocopy.vercel.app/content-calendar-generator",
    type: "website",
  },
};

const calendarAngles = [
  {
    label: "SEO publishing calendar",
    body: "Cluster buyer-intent keywords into weekly blog topics, metadata prompts, FAQ angles, and internal-link ideas for compounding organic reach.",
  },
  {
    label: "Launch and campaign calendar",
    body: "Map product announcements, landing pages, email themes, social posts, and CTA variants around a launch or seasonal offer.",
  },
  {
    label: "Founder and ecommerce calendar",
    body: "Plan practical posts for founders, Shopify merchants, agencies, and local businesses that need consistent content without a strategist on call.",
  },
];

const outputs = [
  "30-day topic calendar organized by search intent and funnel stage",
  "SEO title, meta description, and FAQ prompts for each priority idea",
  "Content brief notes with target audience, proof points, and CTA direction",
  "Repurposing ideas for email, social, and product-page updates",
  "Internal-link and next-action recommendations for revenue pages",
];

const faqs = [
  {
    question: "What is a content calendar generator?",
    answer:
      "A content calendar generator turns a business, audience, keyword, product, or campaign brief into a publishing plan with topics, priorities, SEO metadata prompts, and conversion CTAs.",
  },
  {
    question: "Can SEOCopy plan SEO content calendars?",
    answer:
      "Yes. SEOCopy can draft content calendar ideas, blog titles, content briefs, FAQ prompts, social angles, and metadata suggestions from one rough brief so teams can publish consistently.",
  },
  {
    question: "Who should use an AI content calendar generator?",
    answer:
      "Founders, Shopify merchants, agencies, content marketers, and local businesses can use it to convert scattered product knowledge into a weekly plan for search, email, and social distribution.",
  },
  {
    question: "How many content calendars can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy one generation for $5 or use the $19/month plan for ongoing content and SEO planning.",
  },
];

export default function ContentCalendarGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(238,242,255,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(49,46,129,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Content Calendar Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate a content calendar that connects SEO topics to revenue pages.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product, audience, keyword, or campaign brief. SEOCopy turns it into a practical publishing plan with topic clusters, SEO metadata prompts, FAQs, internal links, and CTA direction for each content idea.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=content-calendar-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Content Calendar
              </Link>
              <a
                href="#faq"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                Read FAQ
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Calendar output checklist
            </p>
            <div className="mt-6 space-y-4">
              {outputs.map((output) => (
                <div key={output} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <p className="font-medium">{output}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Planning modes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build a repeatable content engine for search, launch, and lifecycle campaigns.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {calendarAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            From blank calendar to publishable briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn one rough positioning note into weeks of SEO topics, metadata, and CTA-ready content briefs.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps the plan tied to revenue outcomes. Each generation helps you prioritize content that can support search visibility, product education, email campaigns, and conversion paths.
          </p>
          <Link
            href="/generate?source=content-calendar-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Content calendar generator questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </main>
  );
}
