import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter Copy Generator",
  description:
    "Generate newsletter subject lines, preview text, issue intros, product updates, sponsorship blurbs, SEO snippets, and CTA copy from one rough email brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/newsletter-copy-generator",
  },
  keywords: [
    "newsletter copy generator",
    "AI newsletter generator",
    "newsletter subject line generator",
    "email newsletter copy generator",
    "product update email generator",
    "newsletter intro generator",
  ],
  openGraph: {
    title: "Newsletter Copy Generator | SEOCopy",
    description:
      "Turn product updates, editorial notes, launches, and campaign briefs into newsletter copy with subject lines, preview text, sections, CTAs, and reusable social snippets.",
    url: "https://seocopy.vercel.app/newsletter-copy-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Inbox hook",
    title: "Subject lines and preview text that earn the open",
    body: "Generate curiosity-driven, benefit-led, and direct-response subject line options paired with preview text that sets up the email instead of repeating it.",
  },
  {
    label: "Issue body",
    title: "Newsletter sections from messy campaign notes",
    body: "Turn product updates, founder notes, curated links, feature releases, and editorial angles into a clean intro, section blurbs, transitions, and closing CTA.",
  },
  {
    label: "Repurposing",
    title: "SEO snippets, social posts, and landing CTAs",
    body: "Extend every issue into metadata, social previews, LinkedIn hooks, sponsor copy, and conversion CTAs for the landing page or checkout path you want readers to take.",
  },
];

const workflow = [
  "Paste the rough newsletter brief, campaign goal, audience, offer, and any product or editorial notes.",
  "Add tone, proof points, links, CTA destination, sponsor requirements, and the desired reader action.",
  "Generate subject lines, preview text, newsletter intro, body sections, CTA copy, SEO snippets, and social variants.",
  "Send the strongest issue draft, then reuse the snippets across your archive page, social posts, and launch assets.",
];

const examples = [
  "Founder newsletter announcing a new product feature and monthly plan",
  "Shopify merchant campaign email for a seasonal inventory drop",
  "Weekly SaaS product update with links, proof, and upgrade CTA",
  "Editorial newsletter intro with sponsor blurb and landing page snippet",
];

const faqs = [
  {
    question: "What is a newsletter copy generator?",
    answer:
      "A newsletter copy generator turns a rough email brief into subject lines, preview text, intro copy, body sections, sponsor blurbs, CTA variants, SEO snippets, and social posts that support the same campaign.",
  },
  {
    question: "Can SEOCopy write product update newsletters?",
    answer:
      "Yes. Paste the feature notes, customer benefit, launch link, proof points, and audience segment. SEOCopy drafts product update newsletter copy plus related metadata and social snippets.",
  },
  {
    question: "Does this help with newsletter SEO?",
    answer:
      "Yes. In addition to the email itself, SEOCopy can produce archive-page titles, meta descriptions, Open Graph copy, and social previews so each issue is easier to discover and reuse after sending.",
  },
  {
    question: "How many free newsletter generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing newsletter, SEO, and launch copy production.",
  },
];

export default function NewsletterCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Newsletter Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate newsletter copy that moves readers from inbox to action.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns product updates, campaign notes, editorial ideas, and sponsor briefs into subject lines, preview text, issue sections, SEO snippets, social posts, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=newsletter-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Newsletter Copy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Newsletter Briefs
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
            Newsletter assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One email brief, multiple assets for opens, clicks, and post-send reuse.
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
            Example newsletter briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft issue copy from the launch notes, founder updates, and campaign ideas already on your desk.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=newsletter-copy-generator-cta"
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
