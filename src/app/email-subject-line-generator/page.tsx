import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Subject Line Generator",
  description:
    "Generate email subject lines, preview text, SEO metadata, landing page hooks, and CTA variants from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/email-subject-line-generator",
  },
  keywords: [
    "email subject line generator",
    "AI email subject line generator",
    "newsletter subject line generator",
    "cold email subject line generator",
    "email preview text generator",
    "marketing copy generator",
  ],
  openGraph: {
    title: "Email Subject Line Generator | SEOCopy",
    description:
      "Turn a rough campaign brief into email subject lines, preview text, landing page hooks, SEO snippets, and CTA ideas.",
    url: "https://seocopy.vercel.app/email-subject-line-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Inbox click",
    title: "Subject lines + preview text",
    body: "Create curiosity-led, benefit-led, and direct-response subject line variants with matching preview text for the same campaign.",
  },
  {
    label: "Landing page fit",
    title: "Hero hooks + CTA ideas",
    body: "Keep the promise consistent after the click with landing page headline and CTA angles that match the email offer.",
  },
  {
    label: "Search + social",
    title: "SEO snippets + OG copy",
    body: "Repurpose the strongest campaign angle into metadata and social previews so the launch message works beyond the inbox.",
  },
];

const workflow = [
  "Paste a product, newsletter, promotion, or cold outreach brief.",
  "Choose the audience and tone: direct, friendly, bold, or polished.",
  "Generate subject lines, preview text, SEO snippets, landing hooks, and CTAs.",
  "Copy the best variants into your ESP, launch doc, landing page, or campaign tracker.",
];

const examples = [
  "Back-in-stock drop for a sold-out Shopify product",
  "Founder newsletter announcing a new feature",
  "Agency cold email offering an audit",
  "Limited-time ecommerce promotion",
];

const faqs = [
  {
    question: "What is an email subject line generator?",
    answer:
      "An email subject line generator turns a short campaign brief into subject line options, preview text, and related copy angles designed to improve opens and make the next click feel consistent.",
  },
  {
    question: "Can SEOCopy generate preview text too?",
    answer:
      "Yes. Use SEOCopy to create subject line and preview text pairs, then extend the same campaign angle into landing page hooks, SEO metadata, social previews, and CTA variants.",
  },
  {
    question: "Is this only for newsletters?",
    answer:
      "No. It works for newsletters, ecommerce promotions, feature launches, cold outreach, event invites, and lifecycle campaigns where you need multiple headline angles quickly.",
  },
  {
    question: "How many free email subject line generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function EmailSubjectLineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Email Subject Line Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate email subject lines that earn the next click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a rough campaign brief into subject line variants, preview text, landing page hooks, SEO snippets, social previews, and CTA ideas your team can test immediately.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=email-subject-line-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Email Subject Lines
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Use Cases
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
            Campaign copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, multiple angles for the inbox and the page after it.
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
            Example campaign briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft subject line angles for the campaigns already on your calendar.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=email-subject-line-generator-cta"
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
