import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Topic Generator",
  description:
    "Generate SEO blog topic ideas, search-intent angles, metadata prompts, FAQ questions, and conversion CTAs from one product, audience, or keyword brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/blog-topic-generator",
  },
  keywords: [
    "blog topic generator",
    "SEO blog topic generator",
    "blog ideas generator",
    "content ideas generator",
    "AI blog topic ideas",
    "blog post ideas generator",
  ],
  openGraph: {
    title: "Blog Topic Generator | SEOCopy",
    description:
      "Turn a rough keyword, audience, or product note into SEO-ready blog topics with intent angles, metadata prompts, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/blog-topic-generator",
    type: "website",
  },
};

const topicAngles = [
  {
    label: "Search-intent clusters",
    body: "Group informational, comparison, commercial, and conversion-ready ideas so each blog topic has a clear job in the funnel.",
  },
  {
    label: "Product-led education",
    body: "Tie each topic back to the offer with proof points, examples, internal-link suggestions, and CTA direction instead of publishing generic traffic bait.",
  },
  {
    label: "Campaign-ready ideas",
    body: "Generate themes that can feed blog posts, newsletters, social captions, landing snippets, and paid-test hooks from the same brief.",
  },
];

const outputs = [
  "SEO blog topic ideas organized by funnel stage and search intent",
  "Working titles, target readers, and primary keyword angles",
  "Meta description, FAQ, and internal-link prompts for each topic",
  "CTA recommendations that connect articles to product or service pages",
  "Repurposing notes for email, social, and launch campaigns",
];

const faqs = [
  {
    question: "What is a blog topic generator?",
    answer:
      "A blog topic generator turns a keyword, product, audience, or campaign brief into article ideas with search intent, reader angles, metadata prompts, FAQs, and conversion paths.",
  },
  {
    question: "Can SEOCopy generate SEO blog topic ideas?",
    answer:
      "Yes. SEOCopy can draft topic clusters, working titles, meta prompts, FAQ ideas, internal-link opportunities, and CTA suggestions from one rough brief.",
  },
  {
    question: "Who should use an AI blog topic generator?",
    answer:
      "Founders, Shopify merchants, agencies, local businesses, and content marketers can use it to turn scattered product knowledge into search-focused article ideas.",
  },
  {
    question: "How many blog topic ideas can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO and copy planning.",
  },
];

export default function BlogTopicGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Blog Topic Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO blog topics that lead readers toward your revenue pages.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product, keyword, audience, or campaign brief. SEOCopy turns it into focused blog topic ideas with search intent, working titles, metadata prompts, FAQs, internal links, and CTA direction.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=blog-topic-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Blog Topics
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
              Topic output checklist
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
            Topic strategy modes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build article ideas for search visibility, education, and conversion.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {topicAngles.map((item) => (
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
            From rough keyword to publishable topic queue
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn one idea into a prioritized list of blog topics, metadata prompts, and CTA paths.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps topic ideation connected to outcomes. Each generation helps you choose content that can educate buyers, support product pages, and create reusable campaign assets.
          </p>
          <Link
            href="/generate?source=blog-topic-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Blog topic generator questions</h2>
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
