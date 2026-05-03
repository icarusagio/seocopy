import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Post Generator",
  description:
    "Generate LinkedIn posts, hooks, carousels, SEO snippets, and CTA variants from a product update, founder insight, or campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/linkedin-post-generator",
  },
  keywords: [
    "LinkedIn post generator",
    "AI LinkedIn post generator",
    "LinkedIn content generator",
    "B2B social post generator",
    "founder LinkedIn post generator",
    "LinkedIn hook generator",
  ],
  openGraph: {
    title: "LinkedIn Post Generator | SEOCopy",
    description:
      "Turn product updates, founder notes, and campaign briefs into LinkedIn hooks, post drafts, proof points, and conversion CTAs.",
    url: "https://seocopy.vercel.app/linkedin-post-generator",
    type: "website",
  },
};

const copyBlocks = [
  {
    label: "Scroll-stopping hook",
    title: "Hooks + opening lines",
    body: "Start with clear tension, a sharp lesson, or a buyer pain point so the post earns the first click and keeps the right audience reading.",
  },
  {
    label: "B2B proof",
    title: "Story spine + credibility bullets",
    body: "Turn launches, wins, lessons, and product updates into founder-led narratives with specific proof points instead of generic thought leadership.",
  },
  {
    label: "Conversion path",
    title: "CTA variants + SEO snippets",
    body: "Generate soft CTAs, reply prompts, landing page snippets, and search-friendly copy you can reuse across the campaign.",
  },
];

const workflow = [
  "Paste a product update, founder insight, customer win, or campaign brief.",
  "Choose the audience, tone, and desired action for the LinkedIn post.",
  "Generate hook options, post drafts, proof bullets, SEO snippets, and CTAs.",
  "Publish the strongest post and reuse the metadata on the linked landing page.",
];

const faqs = [
  {
    question: "What is a LinkedIn post generator?",
    answer:
      "A LinkedIn post generator turns a rough idea, product update, or campaign brief into social post drafts with hooks, body copy, proof points, and calls to action for a professional audience.",
  },
  {
    question: "Can SEOCopy help with B2B founder-led content?",
    answer:
      "Yes. SEOCopy helps founders and small teams turn product lessons, launch notes, customer wins, and market insights into LinkedIn-ready posts that can point readers back to a landing page or offer.",
  },
  {
    question: "Does the generator only write social posts?",
    answer:
      "No. It can also produce SEO titles, meta descriptions, Open Graph copy, landing page angles, and CTA variants so the social post and destination page stay aligned.",
  },
  {
    question: "How many free LinkedIn post generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function LinkedinPostGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              LinkedIn Post Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate LinkedIn posts that turn product moments into demand.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns rough founder notes, product updates, customer wins, and campaign briefs into LinkedIn hooks, post drafts, SEO snippets, and CTA angles you can ship fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=linkedin-post-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate LinkedIn Posts
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
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One idea, multiple assets for social and search.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {copyBlocks.map((item) => (
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
            Founder-led demand
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop letting useful product updates disappear in a launch doc.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to convert release notes, customer proof, and campaign ideas into LinkedIn posts that create demand and lead readers to the next page.
          </p>
          <Link
            href="/generate?source=linkedin-post-generator-cta"
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
