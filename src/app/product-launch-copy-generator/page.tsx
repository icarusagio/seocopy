import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Launch Copy Generator",
  description:
    "Generate product launch copy, SEO metadata, launch page headlines, announcement snippets, social previews, and CTA variants from one launch brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-launch-copy-generator",
  },
  keywords: [
    "product launch copy generator",
    "AI product launch copy generator",
    "launch copy generator",
    "product announcement copy",
    "launch page copy generator",
    "startup launch copy",
  ],
  openGraph: {
    title: "Product Launch Copy Generator | SEOCopy",
    description:
      "Turn a rough product launch brief into SEO snippets, launch page headlines, announcement copy, social previews, and CTA variants.",
    url: "https://seocopy.vercel.app/product-launch-copy-generator",
    type: "website",
  },
};

const launchAssets = [
  {
    label: "Search discovery",
    title: "Launch SEO titles + snippets",
    body: "Translate the launch promise into keyword-aware title tags, meta descriptions, and Open Graph copy for your announcement page.",
  },
  {
    label: "Launch page",
    title: "Hero copy + CTA angles",
    body: "Generate concise headlines, subheadlines, benefit bullets, and action-focused CTAs for the page that needs to convert first visitors.",
  },
  {
    label: "Distribution",
    title: "Announcement + social previews",
    body: "Create launch-ready messaging for founder posts, newsletter blurbs, and social shares so every channel points to the same offer.",
  },
];

const workflow = [
  "Paste a rough product launch brief, beta notes, or landing page URL.",
  "Add the target customer, primary use case, and launch goal.",
  "Generate SEO metadata, launch page copy, announcement angles, and CTAs.",
  "Ship the strongest copy to your launch page, email, and social posts.",
];

const faqs = [
  {
    question: "What is a product launch copy generator?",
    answer:
      "A product launch copy generator turns a rough launch brief into usable launch assets such as SEO titles, meta descriptions, hero headlines, announcement blurbs, social preview copy, benefit bullets, and calls to action.",
  },
  {
    question: "Can SEOCopy write copy for startup launches?",
    answer:
      "Yes. SEOCopy is built for founders and small teams that need fast launch copy for new products, feature announcements, beta pages, waitlists, and campaign landing pages.",
  },
  {
    question: "Do I need a finished landing page before generating launch copy?",
    answer:
      "No. You can start with a URL if you have one, or paste a short brief that explains the product, audience, value proposition, and desired action.",
  },
  {
    question: "How many free product launch copy generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing launch and SEO copy production.",
  },
];

export default function ProductLaunchCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Launch Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product launch copy that turns attention into action.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a rough launch brief into SEO metadata, launch page headlines, product announcement copy, social previews, benefit bullets, and CTA variants your team can publish quickly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-launch-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Launch Copy
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
              Four-step launch workflow
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
            Launch assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One launch brief, copy for the whole first impression.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {launchAssets.map((item) => (
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
            Launch-ready output
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop launching with vague copy stitched together at the last minute.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align the story people see in search, the reason they click the announcement, and the CTA that moves them toward signup, checkout, or a demo.
          </p>
          <Link
            href="/generate?source=product-launch-copy-generator-cta"
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
