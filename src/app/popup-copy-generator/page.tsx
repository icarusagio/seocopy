import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Popup Copy Generator",
  description:
    "Generate popup copy for exit-intent offers, email capture modals, discount prompts, lead magnet opt-ins, microcopy, FAQs, and conversion CTAs from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/popup-copy-generator",
  },
  keywords: [
    "popup copy generator",
    "exit-intent popup copy",
    "email capture modal copy",
    "discount popup copy",
    "lead magnet popup generator",
    "newsletter popup copy",
  ],
  openGraph: {
    title: "Popup Copy Generator | SEOCopy",
    description:
      "Turn a rough offer into exit-intent popup copy, email capture modal variants, discount prompts, lead magnet hooks, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/popup-copy-generator",
    type: "website",
  },
};

const popupTypes = [
  {
    label: "Exit-intent offers",
    body: "Recover leaving visitors with concise offer hooks, urgency-safe benefit copy, objection reducers, and CTAs that invite one more click before they bounce.",
  },
  {
    label: "Email capture modals",
    body: "Draft newsletter, waitlist, product-drop, and founder update popups with headline options, helper text, privacy reassurance, and button copy.",
  },
  {
    label: "Discount and lead magnet variants",
    body: "Create coupon prompts, guide downloads, quiz opt-ins, and welcome-offer copy that feels specific instead of generic pop-up noise.",
  },
];

const outputs = [
  "Popup headline and subheadline options for the offer",
  "Exit-intent offers with concise benefit and urgency framing",
  "Email capture modals with reassurance and button microcopy",
  "Discount and lead magnet variants for ecommerce and SaaS funnels",
  "FAQPage copy, metadata, social snippets, and follow-up CTA angles",
];

const faqs = [
  {
    question: "What is a popup copy generator?",
    answer:
      "A popup copy generator turns a campaign or offer brief into conversion-focused popup copy: headlines, subheads, CTA buttons, helper text, reassurance snippets, and follow-up angles for modals and opt-ins.",
  },
  {
    question: "Can SEOCopy write exit-intent offers?",
    answer:
      "Yes. SEOCopy can draft exit-intent offers, discount prompts, objection-reducing helper copy, and CTA variants designed to save abandoning visitors without sounding spammy.",
  },
  {
    question: "Can I use it for email capture modals?",
    answer:
      "Yes. Paste your audience, incentive, product, or newsletter promise and SEOCopy can create email capture modals, lead magnet hooks, welcome-offer copy, privacy reassurance, and signup button text.",
  },
  {
    question: "How many popup copy drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing conversion copy and SEO copy production.",
  },
];

export default function PopupCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.72))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Popup Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate popup copy that turns abandoning visitors into subscribers, leads, and buyers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a campaign, discount, product-drop, newsletter, or lead magnet brief. SEOCopy returns popup copy for exit-intent offers, email capture modals, discount and lead magnet variants, reassurance microcopy, FAQPage content, and CTAs built for conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=popup-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Popup Copy
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
              Popup output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Conversion popups
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create opt-in and offer copy for ecommerce, SaaS, newsletter, and lead-generation funnels.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {popupTypes.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Capture more demand
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from generic modal text to a focused offer, reassurance, and CTA path.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps popup copy tied to the next revenue step: collecting emails, saving carts, promoting a discount, driving demo interest, or turning anonymous traffic into a reachable audience.
          </p>
          <Link
            href="/generate?source=popup-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Popup copy generator questions</h2>
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
