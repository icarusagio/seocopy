import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Introduction Generator",
  description:
    "Generate blog introductions, SEO hooks, search-intent openers, meta descriptions, and CTA copy from one topic or article brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/blog-introduction-generator",
  },
  keywords: [
    "blog introduction generator",
    "AI blog introduction generator",
    "blog intro generator",
    "article introduction generator",
    "SEO blog introduction generator",
    "content introduction generator",
  ],
  openGraph: {
    title: "Blog Introduction Generator | SEOCopy",
    description:
      "Turn article topics, keywords, and outlines into compelling blog introductions, search-intent hooks, SEO snippets, and CTA variants.",
    url: "https://seocopy.vercel.app/blog-introduction-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Search-intent hooks",
    title: "Open with the reader problem and target keyword",
    body: "Create introductions that match what searchers came to solve, naturally include the primary keyword, and set up the article promise without sounding generic.",
  },
  {
    label: "Article-ready angles",
    title: "Multiple intros for tutorials, lists, and comparisons",
    body: "Generate intro variants for how-to guides, listicles, product comparisons, thought leadership, and bottom-of-funnel content so teams can pick the strongest angle fast.",
  },
  {
    label: "Conversion support",
    title: "Pair intros with metadata and CTAs",
    body: "Package every introduction with SEO titles, meta descriptions, social preview copy, and calls to action that guide readers toward signup, checkout, or a sales conversation.",
  },
];

const workflow = [
  "Paste the working title, target keyword, outline, audience, and product or CTA you want to support.",
  "Add the reader pain point, search intent, proof points, and preferred tone for the article.",
  "Generate blog introductions, SEO metadata, social preview text, and CTA variants in one pass.",
  "Choose the strongest opening, drop it into the draft, and reuse the metadata for publishing and promotion.",
];

const examples = [
  "How-to article introduction for a Shopify inventory planning guide",
  "Comparison-post opener for a SaaS tool alternatives page",
  "Listicle introduction for ecommerce SEO tips targeting busy merchants",
  "Thought-leadership intro with a founder-led product CTA",
];

const faqs = [
  {
    question: "What is a blog introduction generator?",
    answer:
      "A blog introduction generator turns a topic, keyword, outline, and audience into opening paragraphs that frame the reader problem, establish the article promise, and lead naturally into the rest of the post.",
  },
  {
    question: "Can SEOCopy write SEO-friendly blog intros?",
    answer:
      "Yes. SEOCopy can generate introductions that align with search intent, include the target keyword naturally, and pair the opener with SEO titles, meta descriptions, social previews, and CTA variants.",
  },
  {
    question: "What inputs make the best blog introduction?",
    answer:
      "Use the working title, primary keyword, audience, article outline, pain point, offer, and desired action. The more specific the brief, the easier it is to generate an intro that feels written for the exact reader.",
  },
  {
    question: "How many free blog introduction generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO and content copy production.",
  },
];

export default function BlogIntroductionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Blog Introduction Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate blog introductions that hook readers and satisfy search intent.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a topic, keyword, outline, and audience into blog introductions, SEO metadata, social preview copy, and CTA variants that help content teams publish faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=blog-introduction-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Blog Introduction
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Content Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Four-step workflow
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
            Blog copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One content brief, multiple openings for search, retention, and conversion.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputBlocks.map((item) => (
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
            Example content briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft better openings from the title, outline, keyword, and CTA you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=blog-introduction-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
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
