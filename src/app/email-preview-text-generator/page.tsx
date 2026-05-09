import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Preview Text Generator",
  description:
    "Generate email preview text, preheader copy, subject-line pairings, inbox snippets, landing hooks, and CTA variants from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/email-preview-text-generator",
  },
  keywords: [
    "email preview text generator",
    "AI email preheader generator",
    "email snippet generator",
    "email subject preview text generator",
    "newsletter preview text",
    "ecommerce email preheader copy",
    "email marketing copy generator",
  ],
  openGraph: {
    title: "Email Preview Text Generator | SEOCopy",
    description:
      "Turn one launch, newsletter, ecommerce, or nurture-email brief into preview text, preheaders, subject pairings, inbox snippets, and CTA variants.",
    url: "https://seocopy.vercel.app/email-preview-text-generator",
    type: "website",
  },
};

const previewAssets = [
  {
    label: "Inbox snippets",
    title: "Pair every subject line with a stronger second line",
    body: "Generate preview text that extends the subject instead of repeating it, clarifies the offer, and gives subscribers a reason to open the email now.",
  },
  {
    label: "Campaign variants",
    title: "Draft options for launches, promos, and newsletters",
    body: "Create preheaders for product drops, back-in-stock emails, founder newsletters, nurture sequences, event reminders, and SaaS lifecycle campaigns.",
  },
  {
    label: "Conversion support",
    title: "Connect the inbox promise to the landing page CTA",
    body: "Turn the same brief into preview copy, landing hooks, FAQ snippets, and CTA variants so the click path stays consistent from inbox to checkout.",
  },
];

const workflow = [
  "Paste the email goal, audience, product or offer, subject-line candidates, deadline, and landing-page URL or CTA.",
  "Choose the campaign type: launch, sale, newsletter, abandoned cart, onboarding, winback, webinar, or product update.",
  "Generate preview text variants, preheader pairings, inbox snippet angles, landing hooks, FAQs, and CTA copy in one pass.",
  "Test the strongest preview text against the subject line, then ship the matching landing hook and CTA with the campaign.",
];

const faqs = [
  {
    question: "What does the email preview text generator create?",
    answer:
      "It creates email preview text, preheader copy, subject-line pairings, inbox snippets, landing-page hooks, FAQ snippets, and CTA variants from one campaign brief.",
  },
  {
    question: "Can I use it for ecommerce and Shopify emails?",
    answer:
      "Yes. SEOCopy can turn product details, discount offers, inventory updates, back-in-stock alerts, abandoned-cart notes, and customer segments into preview text for ecommerce email campaigns.",
  },
  {
    question: "How is preview text different from a subject line?",
    answer:
      "The subject line gets attention; preview text supports the subject by adding context, urgency, proof, or a benefit. The best preview text does not simply repeat the subject line.",
  },
  {
    question: "How many free preview text drafts can I generate?",
    answer:
      "You can run two free generations without signup. After that, buy one more generation for $5 or use the $19/month plan for ongoing email, SEO, and conversion copy.",
  },
];

export default function EmailPreviewTextGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Email Preview Text Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate email preview text that earns more opens.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy helps ecommerce teams, founders, newsletters, SaaS marketers, agencies, and local businesses turn one campaign brief into inbox-ready preview text, preheaders, landing hooks, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=email-preview-text-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Preview Text
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
            Preview assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One campaign brief becomes a sharper inbox test set.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {previewAssets.map((item) => (
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
            Better open hooks without the blank page
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every email campaign a preview line, landing hook, and CTA that work together.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy when the subject line is set but the inbox snippet is still weak: generate preview text, supporting landing copy, and CTA options that match the promise subscribers see before they open.
          </p>
          <Link
            href="/generate?source=email-preview-text-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Preview Text Drafts
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
