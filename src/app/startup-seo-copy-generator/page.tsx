import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Startup SEO Copy Generator",
  description:
    "Generate startup landing page SEO titles, meta descriptions, hero headlines, positioning copy, and CTA variants from a rough product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/startup-seo-copy-generator",
  },
  keywords: [
    "startup SEO copy generator",
    "startup landing page copy generator",
    "AI startup copy generator",
    "startup meta description generator",
    "founder SEO copy",
  ],
  openGraph: {
    title: "Startup SEO Copy Generator | SEOCopy",
    description:
      "Turn a rough startup brief into search-ready metadata, sharper positioning, and launch page copy variants.",
    url: "https://seocopy.vercel.app/startup-seo-copy-generator",
    type: "website",
  },
};

const deliverables = [
  "SEO title and meta description for the launch page",
  "Hero headline and subheadline variants for early positioning tests",
  "Open Graph title and description for launch posts and directories",
  "CTA ideas for waitlists, demos, beta access, and free trials",
];

const playbooks = [
  {
    title: "Pre-launch waitlists",
    body: "Convert a raw idea into a landing page promise that explains the audience, problem, and outcome clearly enough for early signups.",
  },
  {
    title: "Product Hunt and directory launches",
    body: "Create search snippets and social previews that make your category, use case, and reason to click obvious at a glance.",
  },
  {
    title: "Fast positioning iterations",
    body: "Generate multiple angles for the same product so founders can test pain-first, outcome-first, and category-first messaging.",
  },
];

const faqs = [
  {
    question: "Can this help before we have polished positioning?",
    answer:
      "Yes. Paste a rough product brief, target customer, category, and desired action. SEOCopy returns structured metadata and landing page copy variants you can refine instead of starting from a blank page.",
  },
  {
    question: "Is it only for SaaS startups?",
    answer:
      "No. It works for SaaS, AI tools, marketplaces, Shopify apps, service businesses, and any founder-led product that needs SEO metadata and launch copy.",
  },
  {
    question: "What should I include in the prompt?",
    answer:
      "Include who the product is for, the problem it solves, one or two differentiators, pricing or offer details if available, and whether the goal is waitlist signup, demo booking, trial start, or purchase.",
  },
];

export default function StartupSeoCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Startup SEO Copy Generator
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn a rough startup idea into SEO copy ready for launch.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy helps founders create search snippets, social previews,
              hero copy, and CTA variants for waitlists, beta launches, demo
              pages, and new product announcements.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=startup-seo-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Startup Copy
              </Link>
              <a
                href="#faq"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                Read FAQ
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              What you get
            </p>
            <div className="mt-6 space-y-4">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {playbooks.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
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
