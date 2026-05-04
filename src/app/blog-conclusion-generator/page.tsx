import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Conclusion Generator",
  description:
    "Generate blog conclusions, recap paragraphs, final CTAs, FAQ ideas, SEO metadata, and social preview copy from one article brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/blog-conclusion-generator",
  },
  keywords: [
    "blog conclusion generator",
    "AI blog conclusion generator",
    "article conclusion generator",
    "blog ending generator",
    "SEO blog conclusion generator",
    "content conclusion generator",
  ],
  openGraph: {
    title: "Blog Conclusion Generator | SEOCopy",
    description:
      "Turn article outlines, target keywords, and conversion goals into clear blog conclusions, final CTAs, recap copy, and SEO snippets.",
    url: "https://seocopy.vercel.app/blog-conclusion-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Reader recap",
    title: "Summarize the takeaway without repeating the whole article",
    body: "Create concise closing paragraphs that reinforce the article promise, restate the most useful next action, and help readers feel like the search intent was answered.",
  },
  {
    label: "Conversion close",
    title: "End with a CTA that fits the content stage",
    body: "Generate final calls to action for free tools, demos, newsletter signups, checkout starts, product pages, and sales conversations without making the ending feel bolted on.",
  },
  {
    label: "SEO support",
    title: "Pair conclusions with metadata and FAQ ideas",
    body: "Package each conclusion with title tags, meta descriptions, social previews, and FAQ prompts that can strengthen the page before publishing.",
  },
];

const workflow = [
  "Paste the article title, target keyword, outline, audience, and the action you want readers to take next.",
  "Add the main proof points, objections, product angle, and tone notes for the closing section.",
  "Generate blog conclusions, CTA variants, SEO metadata, social previews, and FAQ ideas in one pass.",
  "Choose the strongest ending, add it to the draft, and reuse the supporting snippets for distribution.",
];

const examples = [
  "Conclusion for a Shopify inventory forecasting guide with a trial CTA",
  "Wrap-up for a SaaS comparison article that leads to a demo request",
  "Ending paragraph for an ecommerce SEO tips post with a checklist download",
  "Founder-led article close that turns thought leadership into newsletter signups",
];

const faqs = [
  {
    question: "What is a blog conclusion generator?",
    answer:
      "A blog conclusion generator turns an article title, outline, keyword, audience, and desired CTA into closing paragraphs that summarize the takeaway and guide readers toward the next step.",
  },
  {
    question: "Can SEOCopy write SEO-friendly blog conclusions?",
    answer:
      "Yes. SEOCopy can generate conclusions that reflect search intent, mention the target keyword naturally, and pair the ending with SEO titles, meta descriptions, social previews, FAQ ideas, and CTA variants.",
  },
  {
    question: "What should I include in a conclusion brief?",
    answer:
      "Include the working title, primary keyword, audience, key points, product or offer, objection to overcome, and preferred conversion goal. Specific inputs help the ending feel connected to the article instead of generic.",
  },
  {
    question: "How many free blog conclusion generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO and content copy production.",
  },
];

export default function BlogConclusionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Blog Conclusion Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate blog conclusions that recap the value and move readers to act.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns an article brief into blog conclusions, final CTAs, SEO metadata, FAQ ideas, and social preview copy that help content teams finish publishable posts faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=blog-conclusion-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Blog Conclusion
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Conclusion Examples
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
            Closing copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One content brief, stronger endings for search, retention, and conversion.
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
            Finish articles with a useful recap, a clear CTA, and reusable SEO snippets.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=blog-conclusion-generator-cta"
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
