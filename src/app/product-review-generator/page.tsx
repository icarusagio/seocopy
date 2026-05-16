import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Review Generator",
  description:
    "Generate product review copy, star-rating summaries, testimonial snippets, review request follow-ups, and review-powered SEO snippets from one customer-feedback brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-review-generator",
  },
  keywords: [
    "product review generator",
    "AI product review generator",
    "product review copy",
    "star-rating summaries",
    "testimonial snippets",
    "review request follow-ups",
    "ecommerce review copy",
    "Shopify product reviews",
  ],
  openGraph: {
    title: "Product Review Generator | SEOCopy",
    description:
      "Turn customer feedback into product review copy, star-rating summaries, testimonial snippets, review request follow-ups, and SEO-ready proof blocks.",
    url: "https://seocopy.vercel.app/product-review-generator",
    type: "website",
  },
};

const reviewAssets = [
  {
    label: "Star-rating summaries",
    title: "Summarize review patterns without losing buyer language",
    body: "Transform raw reviews, support quotes, survey notes, and rating themes into short product review copy that highlights fit, quality, delivery, value, and use-case proof.",
  },
  {
    label: "Testimonial snippets",
    title: "Turn customer words into reusable proof blocks",
    body: "Draft testimonial snippets for PDPs, collection pages, paid landing pages, social proof strips, lifecycle emails, and sales enablement without inventing claims.",
  },
  {
    label: "Review request follow-ups",
    title: "Ask for better reviews after the customer has value",
    body: "Create review request follow-ups, reminder copy, incentive-safe language, and post-purchase CTAs that help merchants collect more useful customer proof.",
  },
];

const workflow = [
  "Paste review excerpts, star ratings, support comments, survey responses, customer segment notes, and the product benefit you want to reinforce.",
  "Add constraints such as marketplace policy, tone, claims to avoid, review request timing, and where the proof block will be published.",
  "Generate product review copy, star-rating summaries, testimonial snippets, review request follow-ups, social proof blurbs, and FAQ-ready answers.",
  "Reuse the strongest proof across product pages, collection pages, ad landing pages, post-purchase email flows, and customer-support macros.",
];

const faqs = [
  {
    question: "What is a product review generator?",
    answer:
      "A product review generator turns real customer feedback into product review copy, star-rating summaries, testimonial snippets, review request follow-ups, and SEO-friendly proof blocks for ecommerce pages.",
  },
  {
    question: "How is this different from the review request email generator?",
    answer:
      "The review request email generator focuses on asking customers for reviews. This product review generator focuses on repurposing existing customer feedback into proof blocks, summaries, testimonials, page snippets, and follow-up prompts.",
  },
  {
    question: "Can SEOCopy write product review copy without making up claims?",
    answer:
      "Yes. Use the brief to paste only approved customer language, rating patterns, claim constraints, and support evidence. SEOCopy can then draft safer testimonial snippets and summaries grounded in the source material you provide.",
  },
  {
    question: "How many product review generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing product page, SEO, email, SMS, social, and proof-building copy.",
  },
];

export default function ProductReviewGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(16,185,129,0.28))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Product Review Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product review copy that turns customer proof into revenue.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns real customer feedback into product review copy, star-rating summaries, testimonial snippets, review request follow-ups, and SEO-ready proof blocks for product pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-review-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Product Review Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Review-to-proof workflow
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
            Review assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Convert messy customer feedback into credible, reusable proof.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviewAssets.map((item) => (
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

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Stronger product proof
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair review summaries with benefit-led PDP copy, FAQs, and conversion CTAs.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to turn authentic customer proof into product review copy, testimonial snippets, star-rating summaries, FAQ answers, and follow-up prompts that support the buying decision.
          </p>
          <Link
            href="/generate?source=product-review-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Product review generator questions</h2>
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
