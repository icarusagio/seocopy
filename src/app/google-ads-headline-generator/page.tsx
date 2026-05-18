import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Ads Headline Generator",
  description:
    "Generate responsive search ad headlines, keyword-matched PPC angles, landing page hooks, and CTA variants from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/google-ads-headline-generator",
  },
  keywords: [
    "Google Ads headline generator",
    "Google ad headline generator",
    "PPC headline generator",
    "responsive search ad headline generator",
    "search ad headline ideas",
    "AI Google Ads copy tool",
  ],
  openGraph: {
    title: "Google Ads Headline Generator | SEOCopy",
    description:
      "Turn one offer, keyword, or landing page brief into Google Ads headline variants, message-match hooks, and CTA angles.",
    url: "https://seocopy.vercel.app/google-ads-headline-generator",
    type: "website",
  },
};

const headlineAssets = [
  {
    label: "Keyword fit",
    title: "Headlines mapped to search intent",
    body: "Draft Google Ads headlines that reuse core terms naturally while rotating pain points, outcomes, proof, and urgency for responsive search ads.",
  },
  {
    label: "Message match",
    title: "Hooks that align with the landing page",
    body: "Generate headline angles that can be mirrored in hero copy, subheads, SEO snippets, and calls to action after the click.",
  },
  {
    label: "Testing velocity",
    title: "More variants for faster PPC experiments",
    body: "Create batches of benefit-led, objection-aware, and CTA-driven headlines before campaign setup slows your launch.",
  },
];

const workflow = [
  "Paste a target keyword, landing page URL, product promise, or PPC campaign brief.",
  "Add audience, differentiators, proof points, and the conversion action you want.",
  "Generate Google Ads headline variants, description hooks, landing page snippets, and CTA ideas.",
  "Move the strongest headlines into your RSA assets, experiment doc, or landing page test plan.",
];

const faqs = [
  {
    question: "What is a Google Ads headline generator?",
    answer:
      "A Google Ads headline generator turns a product, service, keyword, or landing page brief into paid search headline variants for responsive search ads, campaign tests, and message-matched landing pages.",
  },
  {
    question: "Can SEOCopy help with responsive search ad headlines?",
    answer:
      "Yes. SEOCopy can create multiple responsive search ad headline angles from one brief, including keyword-led, benefit-led, proof-led, urgency-led, and CTA-focused variants.",
  },
  {
    question: "Can I generate matching landing page copy too?",
    answer:
      "Yes. The same SEOCopy brief can produce Google Ads headlines, description ideas, landing page hooks, SEO metadata, social previews, and CTA variants so the ad and page stay aligned.",
  },
  {
    question: "How many free Google Ads headline generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing paid search and landing page copy production.",
  },
];

export default function GoogleAdsHeadlineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Google Ads Headline Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Google Ads headlines that match the keyword and the page.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a PPC brief into responsive search ad headlines, keyword angles, landing page hooks, SEO snippets, and CTA variants you can test in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=google-ads-headline-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Google Ads Headlines
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
            PPC headlines included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One search brief, multiple headline angles.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {headlineAssets.map((item) => (
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

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Search-ad-ready output
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Build headline tests before PPC setup becomes the bottleneck.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to create Google Ads headline variants, landing page hooks, and CTA ideas before you spend more budget on disconnected copy.
          </p>
          <Link
            href="/generate?source=google-ads-headline-generator-cta"
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
