import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Meta Description Generator",
  description:
    "Generate blog meta descriptions, search snippets, social preview copy, title alternatives, and CTA variants from one article brief or draft.",
  alternates: {
    canonical: "https://seocopy.vercel.app/blog-meta-description-generator",
  },
  keywords: [
    "blog meta description generator",
    "AI blog meta description generator",
    "SEO description generator for blog posts",
    "blog search snippet generator",
    "article meta description generator",
    "blog SEO copy generator",
  ],
  openGraph: {
    title: "Blog Meta Description Generator | SEOCopy",
    description:
      "Turn a blog topic, keyword, audience, and draft angle into search snippets, meta descriptions, social previews, and CTA copy.",
    url: "https://seocopy.vercel.app/blog-meta-description-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "Search snippets",
    title: "Write meta descriptions that match the article intent",
    body: "Generate concise blog meta descriptions for how-to guides, list posts, comparisons, tutorials, thought leadership, local posts, and product-led articles.",
  },
  {
    label: "SERP and social variants",
    title: "Package the same article for search and sharing",
    body: "Create SEO descriptions, Open Graph copy, social preview blurbs, title alternatives, and short promotional hooks without rewriting the full article.",
  },
  {
    label: "Conversion angles",
    title: "Connect informational traffic to a next step",
    body: "Turn blog readers toward demos, products, newsletters, templates, downloads, audits, or quote requests with subtle CTA variants aligned to the article topic.",
  },
];

const workflow = [
  "Paste the blog topic, working title, target keyword, audience, search intent, and the offer or next step the article should support.",
  "Add the article angle, key takeaways, brand tone, location or industry context, and whether the snippet should feel educational, urgent, expert, or product-led.",
  "Generate blog meta descriptions, SERP snippets, social previews, title alternatives, and CTA endings tailored to the post.",
  "Publish the strongest description in your CMS, reuse the social variants for promotion, and route readers to the most relevant product, lead magnet, or signup path.",
];

const examples = [
  {
    brief: "How Shopify brands can recover more out-of-stock demand",
    output:
      "Learn how Shopify merchants can capture out-of-stock interest, notify shoppers faster, and turn lost product-page visits into measurable restock revenue.",
  },
  {
    brief: "B2B SaaS onboarding checklist for activation",
    output:
      "Use this SaaS onboarding checklist to reduce activation friction, guide new users to value, and identify product moments that improve trial conversion.",
  },
  {
    brief: "Local dentist guide to ranking service pages",
    output:
      "See how dental practices can improve local service-page SEO with clearer keywords, patient-focused copy, stronger FAQs, and calls to book an appointment.",
  },
];

const faqs = [
  {
    question: "What is a blog meta description generator?",
    answer:
      "A blog meta description generator turns a post topic, target keyword, audience, search intent, and article angle into concise SEO snippets that can appear in search results and social previews.",
  },
  {
    question: "Can SEOCopy write descriptions for existing drafts?",
    answer:
      "Yes. Paste the working title, outline, excerpt, or rough draft notes and SEOCopy can generate meta description variants, Open Graph copy, title alternatives, and CTA snippets.",
  },
  {
    question: "How long should a blog meta description be?",
    answer:
      "Most teams keep blog meta descriptions concise enough for search snippets while prioritizing clarity, relevance, and a compelling reason to click. SEOCopy drafts short variants you can trim for your CMS.",
  },
  {
    question: "How many blog descriptions can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function BlogMetaDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(236,253,245,1),rgba(240,249,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.48))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Blog Meta Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate blog meta descriptions that earn the click before the article is read.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a topic, keyword, audience, draft angle, and offer into search-ready blog meta descriptions, social previews, title alternatives, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=blog-meta-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate blog descriptions
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              From article brief to publish-ready snippets
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-emerald-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Blog SEO deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One blog brief, multiple snippet assets for search and promotion.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Blog meta description examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn a rough blog angle into a snippet readers want to click.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Generated description</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=blog-meta-description-generator"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Generate your blog meta descriptions
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Blog meta description generator questions
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
