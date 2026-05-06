import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Post Generator",
  description:
    "Generate SEO-friendly blog post drafts, outlines, introductions, conclusions, metadata, FAQs, and conversion CTAs from one topic, keyword, or content brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/blog-post-generator",
  },
  keywords: [
    "blog post generator",
    "AI blog post generator",
    "SEO blog post generator",
    "blog article generator",
    "content writing generator",
    "AI article generator",
  ],
  openGraph: {
    title: "Blog Post Generator | SEOCopy",
    description:
      "Turn a topic, keyword, URL, or rough brief into a structured SEO blog post draft with metadata, FAQ ideas, and conversion CTAs.",
    url: "https://seocopy.vercel.app/blog-post-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "SEO draft",
    title: "Move from keyword to publishable structure",
    body: "Create a search-intent aligned blog post draft with an H1, H2 sections, intro, conclusion, and skimmable talking points that keep the article focused.",
  },
  {
    label: "Snippet package",
    title: "Ship the metadata with the article",
    body: "Generate title tags, meta descriptions, Open Graph copy, excerpt options, and social preview angles alongside the blog copy so publishing does not stall at the CMS.",
  },
  {
    label: "Conversion layer",
    title: "Add CTAs without breaking reader trust",
    body: "Get FAQ ideas, internal-link prompts, content upgrades, and soft CTA variants that connect the article to trials, demos, products, or newsletter signups.",
  },
];

const workflow = [
  "Paste the target keyword, audience, search intent, product, and any angle the post should support.",
  "Add proof points, examples, internal links, objections, and the conversion action you want readers to take.",
  "Generate a structured SEO blog post draft with metadata, FAQs, and CTA options in one pass.",
  "Edit the strongest sections into your CMS, then reuse the metadata and social copy for distribution.",
];

const examples = [
  {
    topic: "How to reduce cart abandonment for replenishable products",
    output: "A practical ecommerce post with problem framing, retention tactics, product-page improvements, FAQs, and a CTA to try back-in-stock alerts.",
  },
  {
    topic: "Best CRM workflows for solo consultants",
    output: "A search-led article with workflow sections, examples, comparison angles, metadata, and a CTA for a template or product trial.",
  },
  {
    topic: "Email subject line benchmarks for course launches",
    output: "A tactical post outline with intro hooks, data prompts, reusable examples, FAQ schema ideas, and newsletter signup CTAs.",
  },
];

const faqs = [
  {
    question: "What is a blog post generator?",
    answer:
      "A blog post generator turns a topic, keyword, URL, or content brief into a structured article draft with headings, intro copy, supporting sections, metadata, and CTA ideas.",
  },
  {
    question: "Can SEOCopy write SEO metadata for the blog post too?",
    answer:
      "Yes. SEOCopy creates SEO title options, meta descriptions, Open Graph copy, excerpts, FAQ ideas, and CTA variants alongside the blog post draft.",
  },
  {
    question: "Who should use an AI blog post generator?",
    answer:
      "Founders, marketers, agencies, Shopify merchants, consultants, and small teams can use it to turn buyer-intent topics into faster first drafts for organic acquisition.",
  },
  {
    question: "How many blog post briefs can I generate for free?",
    answer:
      "You can run two free generations without an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function BlogPostGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.95))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,58,138,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Blog Post Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO blog posts that point readers toward revenue.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one keyword, URL, topic, or rough brief into a structured blog post draft, SEO metadata, FAQ ideas, social previews, and CTA angles for organic acquisition.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=blog-post-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Blog Post
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              From topic to article package
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800 dark:bg-cyan-300 dark:text-slate-950">
                    {index + 1}
                  </span>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Blog deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, a complete organic content starting point.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Blog post examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn buyer-intent questions into articles with a next step.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.topic} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Topic</p>
                <p className="mt-2 font-semibold">{example.topic}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Generated direction</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=blog-post-generator"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate an SEO blog post
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Blog post generator questions
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
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
