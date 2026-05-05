import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facebook Ad Copy Generator",
  description:
    "Generate Facebook ad headlines, primary text, hooks, CTA variants, landing page snippets, and SEO-friendly campaign copy from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/facebook-ad-copy-generator",
  },
  keywords: [
    "Facebook ad copy generator",
    "AI Facebook ad copy generator",
    "Meta ad copy generator",
    "Facebook ads headline generator",
    "paid social ad copy",
    "Facebook ad text generator",
  ],
  openGraph: {
    title: "Facebook Ad Copy Generator | SEOCopy",
    description:
      "Turn one offer brief into scroll-stopping Facebook ad hooks, headlines, primary text, CTAs, and matching landing page snippets.",
    url: "https://seocopy.vercel.app/facebook-ad-copy-generator",
    type: "website",
  },
};

const adAssets = [
  {
    label: "Hooks",
    title: "Stop-the-scroll openers for cold audiences",
    body: "Generate curiosity hooks, pain-led openers, product-benefit angles, and first-line variants for Meta placements without starting from a blank document.",
  },
  {
    label: "Creative testing",
    title: "Multiple angles for faster ad tests",
    body: "Create direct-response, founder-story, objection-handling, offer-led, and proof-led copy variants you can pair with different images or videos.",
  },
  {
    label: "Conversion support",
    title: "Match ad promise to the landing page",
    body: "Pair each Facebook ad with headline, CTA, SEO title, meta description, and landing section copy so the click feels consistent after the ad.",
  },
];

const workflow = [
  "Paste the offer, product, audience, price point, and campaign goal.",
  "Add proof points, objections, promotion details, and the landing page action you want.",
  "Generate Facebook ad headlines, primary text, hooks, CTAs, and landing page snippets.",
  "Test the strongest angles by audience segment and keep the winning promise consistent on the landing page.",
];

const faqs = [
  {
    question: "What is a Facebook ad copy generator?",
    answer:
      "A Facebook ad copy generator creates Meta ad hooks, primary text, headlines, descriptions, CTAs, and campaign angles from a short offer or product brief.",
  },
  {
    question: "Can SEOCopy write Meta Ads copy for ecommerce and SaaS?",
    answer:
      "Yes. SEOCopy can generate Facebook and Instagram ad copy for ecommerce products, Shopify promotions, SaaS trials, service offers, lead magnets, and launch campaigns.",
  },
  {
    question: "Does this create policy-compliant ads automatically?",
    answer:
      "No generator can guarantee platform approval. Use the drafts as starting points, avoid prohibited claims, and review every ad against current Meta advertising policies before publishing.",
  },
  {
    question: "How many free Facebook ad copy generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO, landing page, and ad copy production.",
  },
];

export default function FacebookAdCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,64,175,0.54))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-800 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
              Facebook Ad Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Facebook ad copy built for sharper creative tests.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one product or offer brief into Facebook ad hooks, primary text, headlines, CTA variants, and matching landing page snippets for paid social campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=facebook-ad-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Facebook Ad Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
              Four-step paid social workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 dark:text-blue-300">
            Paid social copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, multiple ad angles for Facebook and Instagram placements.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {adAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Campaign-to-page consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop writing ads in one tab and landing page copy in another.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to generate ad copy and the landing page promise together, so every click sees the same benefit, proof point, and next step that earned attention in the feed.
          </p>
          <Link
            href="/generate?source=facebook-ad-copy-generator-cta"
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
