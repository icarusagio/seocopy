import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You Page Copy Generator",
  description:
    "Generate thank you page copy, post-conversion next steps, upsell and referral CTAs, confirmation page FAQs, and SEO snippets from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/thank-you-page-copy-generator",
  },
  keywords: [
    "thank you page copy generator",
    "thank you page copy",
    "confirmation page copy",
    "post-conversion next steps",
    "upsell and referral CTAs",
    "confirmation page FAQs",
    "purchase confirmation copy",
    "lead magnet thank you page",
  ],
  openGraph: {
    title: "Thank You Page Copy Generator | SEOCopy",
    description:
      "Turn a form submit, purchase, demo booking, or download into thank you page copy with next steps, upsells, referrals, FAQs, and follow-up CTAs.",
    url: "https://seocopy.vercel.app/thank-you-page-copy-generator",
    type: "website",
  },
};

const conversionMoments = [
  {
    label: "Post-conversion next steps",
    body: "Clarify what happens after a purchase, demo booking, waitlist signup, download, application, quote request, or webinar registration.",
  },
  {
    label: "Upsell and referral CTAs",
    body: "Add tasteful next actions for add-ons, bundles, onboarding calls, referral rewards, newsletter shares, product education, and account setup.",
  },
  {
    label: "Confirmation page FAQs",
    body: "Answer delivery timing, refund policy, support, setup, invite, shipping, account access, and calendar questions before they become tickets.",
  },
];

const outputs = [
  "Thank you page copy for purchases, lead magnets, demo requests, newsletter signups, waitlists, webinars, quotes, and account activations",
  "Post-conversion next steps that tell customers what happens now, when to expect follow-up, and how to get the most value",
  "Upsell and referral CTAs for bundles, add-ons, consultation calls, review requests, loyalty programs, and share-with-a-friend moments",
  "Confirmation page FAQs that reduce support load while keeping buyers confident after they convert",
  "SEO snippets, social preview copy, and follow-up email angles that keep the post-conversion journey consistent",
];

const faqs = [
  {
    question: "What is a thank you page copy generator?",
    answer:
      "A thank you page copy generator turns a conversion moment into confirmation copy, post-conversion next steps, upsell and referral CTAs, confirmation page FAQs, and follow-up messaging ideas.",
  },
  {
    question: "Can I use it after checkout or lead capture?",
    answer:
      "Yes. Use it for ecommerce checkout confirmations, lead magnet downloads, demo requests, quote forms, waitlist signups, webinar registrations, and onboarding starts.",
  },
  {
    question: "What should a thank you page include?",
    answer:
      "A strong thank you page confirms the action, sets expectations, explains the next step, answers obvious questions, offers one helpful CTA, and keeps trust high after the conversion.",
  },
  {
    question: "How many thank you page generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and revenue copy.",
  },
];

export default function ThankYouPageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Thank You Page Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn every conversion into a confident next step.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the conversion moment, offer, buyer stage, delivery details, support notes, and next-best action. SEOCopy creates thank you page copy, post-conversion next steps, upsell and referral CTAs, confirmation page FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=thank-you-page-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Thank You Page Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Thank you page output checklist
            </p>
            <div className="mt-6 space-y-4">
              {outputs.map((output) => (
                <div key={output} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <p className="font-medium">{output}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Reduce drop-off after the yes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create post-conversion pages that reassure buyers, guide leads, and open one more revenue path.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {conversionMoments.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Revenue-focused confirmation copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep momentum after checkout, signup, or booking.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps ecommerce teams, SaaS founders, agencies, course creators, local services, and lead-gen teams turn default confirmation screens into useful pages that reduce confusion and create more chances to buy, refer, book, or share.
          </p>
          <Link
            href="/generate?source=thank-you-page-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Thank you page questions</h2>
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
