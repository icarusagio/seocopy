import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Marketing Copy Generator",
  description:
    "Generate SMS marketing copy, abandoned-cart texts, launch promos, compliance-friendly disclaimers, landing snippets, and CTA variants from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/sms-marketing-copy-generator",
  },
  keywords: [
    "SMS marketing copy generator",
    "AI SMS copy generator",
    "text message marketing generator",
    "abandoned cart SMS generator",
    "Shopify SMS marketing copy",
    "promotional text message generator",
    "SMS campaign copy",
  ],
  openGraph: {
    title: "SMS Marketing Copy Generator | SEOCopy",
    description:
      "Turn one ecommerce, Shopify, SaaS, or local campaign brief into concise SMS copy, promo texts, CTA variants, disclaimers, and landing-page snippets.",
    url: "https://seocopy.vercel.app/sms-marketing-copy-generator",
    type: "website",
  },
};

const smsAssets = [
  {
    label: "Promo texts",
    title: "Write short messages that make the offer obvious",
    body: "Generate sale announcements, back-in-stock nudges, product-drop texts, renewal reminders, and event promos that fit tight character counts without losing the CTA.",
  },
  {
    label: "Retention flows",
    title: "Create copy for the revenue moments after signup",
    body: "Draft abandoned-cart, browse-abandon, winback, replenishment, and post-purchase SMS variants for Shopify merchants, SaaS teams, agencies, and local businesses.",
  },
  {
    label: "Compliance-aware framing",
    title: "Keep opt-out and expectation copy in the brief",
    body: "Produce concise disclaimers, frequency reminders, landing-page snippets, and FAQ answers so marketers can review SMS copy with their compliance and platform rules in mind.",
  },
];

const workflow = [
  "Paste the product, campaign goal, audience, offer, timing, landing page, and any compliance or brand voice notes.",
  "Choose the SMS moment: abandoned cart, back in stock, product launch, sale, appointment reminder, winback, or event follow-up.",
  "Generate short SMS variants, CTA options, opt-out reminder language, landing snippets, FAQs, and social preview copy in one pass.",
  "Review the text against your SMS provider rules, then publish the strongest variant to the campaign or automation flow.",
];

const faqs = [
  {
    question: "What does the SMS marketing copy generator create?",
    answer:
      "It creates short promotional texts, abandoned-cart messages, back-in-stock nudges, product-launch SMS copy, winback variants, CTA options, opt-out reminder wording, landing snippets, and FAQ copy from one campaign brief.",
  },
  {
    question: "Can I use it for Shopify and ecommerce campaigns?",
    answer:
      "Yes. SEOCopy can turn Shopify product details, collection promos, inventory updates, discount offers, and customer-segment notes into SMS variants for ecommerce revenue flows.",
  },
  {
    question: "Does it replace legal or SMS compliance review?",
    answer:
      "No. It helps draft concise, compliance-aware copy and opt-out language, but marketers should still review every campaign against their SMS provider, consent, TCPA, CTIA, GDPR, and local requirements before sending.",
  },
  {
    question: "How many free SMS drafts can I generate?",
    answer:
      "You can run two free generations without signup. After that, buy one more generation for $5 or use the $19/month plan for ongoing campaign, SEO, and conversion copy.",
  },
];

export default function SmsMarketingCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              SMS Marketing Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SMS marketing copy for promos, carts, and retention flows.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy helps Shopify merchants, ecommerce teams, SaaS founders, agencies, and local businesses turn one campaign brief into concise text-message copy, CTA variants, and review-ready SMS snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=sms-marketing-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate SMS Copy
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
            SMS assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One campaign brief becomes a practical SMS test set.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {smsAssets.map((item) => (
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
            Revenue texts without the blank page
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every SMS campaign a sharper offer, clearer CTA, and supporting landing copy.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy when a campaign needs more than one text: generate SMS variants, opt-out language to review, landing snippets, and follow-up copy that support both conversion and search discovery.
          </p>
          <Link
            href="/generate?source=sms-marketing-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free SMS Drafts
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
