import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Return Policy Generator",
  description:
    "Generate return policy copy, refund and exchange rules, shipping cutoff notes, support-reducing FAQs, and trust-building ecommerce policy snippets from one store brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/return-policy-generator",
  },
  keywords: [
    "return policy generator",
    "AI return policy generator",
    "return policy copy",
    "refund and exchange rules",
    "shipping cutoff notes",
    "support-reducing FAQs",
    "Shopify return policy copy",
    "ecommerce return policy",
  ],
  openGraph: {
    title: "Return Policy Generator | SEOCopy",
    description:
      "Turn store rules into return policy copy, refund and exchange rules, shipping cutoff notes, support-reducing FAQs, and buyer-trust snippets.",
    url: "https://seocopy.vercel.app/return-policy-generator",
    type: "website",
  },
};

const policyAssets = [
  {
    label: "Refund and exchange rules",
    title: "Translate operational rules into buyer-friendly policy copy",
    body: "Draft clear return windows, refund conditions, exchange steps, restocking-fee language, final-sale caveats, and warranty notes without burying the purchase decision in legalese.",
  },
  {
    label: "Shipping cutoff notes",
    title: "Set expectations before shoppers contact support",
    body: "Create shipping cutoff notes, damaged-item instructions, international-return caveats, gift-return paths, and timeline summaries that reduce avoidable tickets.",
  },
  {
    label: "Support-reducing FAQs",
    title: "Answer return objections where purchase hesitation starts",
    body: "Generate FAQ answers for refund timing, exchange eligibility, prepaid labels, sale items, bundle returns, replacements, and how customers should start a return.",
  },
];

const workflow = [
  "Paste your return window, refund timing, exchange rules, shipping responsibilities, product exceptions, and support contact path.",
  "Add constraints such as Shopify policy tone, markets served, warranty language, legal review notes, and claims you want to avoid.",
  "Generate return policy copy, refund and exchange rules, shipping cutoff notes, support-reducing FAQs, PDP reassurance snippets, and footer policy summaries.",
  "Reuse the clearest sections across your policy page, product pages, checkout reassurance copy, order confirmation emails, and help-center macros.",
];

const faqs = [
  {
    question: "What is a return policy generator?",
    answer:
      "A return policy generator turns store rules into return policy copy, refund and exchange rules, shipping cutoff notes, support-reducing FAQs, and buyer-trust snippets for ecommerce pages.",
  },
  {
    question: "How is this different from a checkout page copy generator?",
    answer:
      "The checkout page copy generator focuses on payment-step reassurance and CTAs. This return policy generator focuses on the policy, FAQ, and support language that clarifies what happens after purchase if a shopper needs a refund or exchange.",
  },
  {
    question: "Can SEOCopy replace legal review for return policies?",
    answer:
      "No. SEOCopy helps draft clearer policy and FAQ copy from the rules you provide, but merchants should review return policy copy with their own legal, compliance, and operations teams before publishing.",
  },
  {
    question: "How many return policy generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing product page, SEO, email, SMS, social, and policy-support copy.",
  },
];

export default function ReturnPolicyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(59,130,246,0.28))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-800 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
              Return Policy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate return policy copy that reduces buyer hesitation and support tickets.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns store operations notes into return policy copy, refund and exchange rules, shipping cutoff notes, support-reducing FAQs, and trust-building snippets for ecommerce pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=return-policy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-300 dark:text-slate-950 dark:hover:bg-blue-200"
              >
                Generate Return Policy Copy
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
              Policy-to-support workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 dark:bg-blue-300 dark:text-slate-950">
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
            Policy assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn messy return rules into a clearer purchase-confidence system.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {policyAssets.map((item) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
            Clearer policy, fewer tickets
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair return policy copy with product-page reassurance, checkout trust copy, and support macros.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to explain refund windows, exchange steps, shipping cutoff notes, product exceptions, and support-reducing FAQs before uncertainty becomes a pre-sale or post-purchase ticket.
          </p>
          <Link
            href="/generate?source=return-policy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-blue-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Return policy generator questions</h2>
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
