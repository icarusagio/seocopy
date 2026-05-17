import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions Generator",
  description:
    "Generate terms and conditions copy, store policy clauses, checkout acceptance language, support-reducing terms FAQs, and merchant trust snippets from one business rules brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/terms-and-conditions-generator",
  },
  keywords: [
    "terms and conditions generator",
    "AI terms generator",
    "terms and conditions copy",
    "store policy clauses",
    "checkout acceptance language",
    "support-reducing terms FAQs",
    "Shopify terms and conditions",
    "ecommerce policy copy",
  ],
  openGraph: {
    title: "Terms and Conditions Generator | SEOCopy",
    description:
      "Turn store rules into terms and conditions copy, checkout acceptance language, store policy clauses, support-reducing terms FAQs, and buyer-trust snippets.",
    url: "https://seocopy.vercel.app/terms-and-conditions-generator",
    type: "website",
  },
};

const termsAssets = [
  {
    label: "Store policy clauses",
    title: "Turn business rules into clearer terms sections",
    body: "Draft plain-language sections for account rules, acceptable use, order changes, pricing updates, digital product access, subscriptions, cancellations, warranties, and liability boundaries.",
  },
  {
    label: "Checkout acceptance language",
    title: "Clarify the agreement moment before purchase",
    body: "Create checkbox microcopy, checkout policy summaries, consent reminders, membership terms snippets, and post-purchase references that reduce ambiguity without overloading the buyer.",
  },
  {
    label: "Support-reducing terms FAQs",
    title: "Answer terms questions before they become tickets",
    body: "Generate FAQ answers for payment terms, renewal timing, cancellation windows, promo exclusions, user responsibilities, account access, dispute paths, and policy-update notices.",
  },
];

const workflow = [
  "Paste your store rules, offer type, account or subscription terms, cancellation windows, refund dependencies, usage constraints, and support escalation path.",
  "Add constraints such as Shopify tone, digital product access, international customers, marketplace policies, checkout acceptance wording, and legal review notes.",
  "Generate terms and conditions copy, store policy clauses, checkout acceptance language, support-reducing terms FAQs, account notices, and buyer-trust summaries.",
  "Reuse the clearest snippets across your terms page, checkout agreement text, help center, onboarding emails, subscription reminders, and support macros.",
];

const faqs = [
  {
    question: "What is a terms and conditions generator?",
    answer:
      "A terms and conditions generator turns business rules into terms and conditions copy, store policy clauses, checkout acceptance language, support-reducing terms FAQs, and buyer-trust snippets.",
  },
  {
    question: "How is this different from return or shipping policy generators?",
    answer:
      "Return and shipping policy generators focus on refunds, exchanges, processing windows, carriers, and delivery expectations. This terms and conditions generator focuses on the broader agreement: account rules, order terms, usage constraints, checkout acceptance, subscriptions, and policy-update language.",
  },
  {
    question: "Can SEOCopy replace legal review for terms and conditions?",
    answer:
      "No. SEOCopy helps draft clearer policy copy from the rules you provide, but merchants and founders should review terms and conditions copy with qualified legal counsel before publishing or relying on it.",
  },
  {
    question: "How many terms and conditions generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, ecommerce, lifecycle, policy, and conversion copy.",
  },
];

export default function TermsAndConditionsGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(238,242,255,0.95))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(99,102,241,0.24))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-800 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-200">
              Terms and Conditions Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate terms and conditions copy that clarifies store rules before support tickets start.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns business rules into terms and conditions copy, store policy clauses, checkout acceptance language, support-reducing terms FAQs, and merchant trust snippets for ecommerce and SaaS pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=terms-and-conditions-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-indigo-300 dark:text-slate-950 dark:hover:bg-indigo-200"
              >
                Generate Terms Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
              Rules-to-policy workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-800 dark:bg-indigo-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 dark:text-indigo-300">
            Policy assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn scattered store rules into a clearer agreement system.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {termsAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">
            Clearer terms, fewer disputes
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair terms and conditions copy with checkout acceptance language, help-center answers, and account notices.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to explain store policy clauses, subscription terms, cancellation windows, user responsibilities, checkout acceptance language, and support-reducing terms FAQs before confusion becomes a pre-sale objection or post-purchase dispute.
          </p>
          <Link
            href="/generate?source=terms-and-conditions-generator-cta"
            className="mt-8 inline-flex rounded-full bg-indigo-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-indigo-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Terms and conditions generator questions</h2>
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
