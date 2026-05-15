import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referral Email Generator",
  description:
    "Generate referral emails, friend-invite campaigns, reward reminders, advocate sharing CTAs, FAQs, and SEO snippets from one referral program brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/referral-email-generator",
  },
  keywords: [
    "referral email generator",
    "referral emails",
    "friend-invite campaigns",
    "reward reminder emails",
    "advocate sharing CTAs",
    "customer referral copy",
    "refer a friend email",
    "loyalty referral campaign",
  ],
  openGraph: {
    title: "Referral Email Generator | SEOCopy",
    description:
      "Turn a referral offer, loyalty program, or ambassador ask into referral emails, friend-invite campaigns, reward reminders, and advocate sharing CTAs.",
    url: "https://seocopy.vercel.app/referral-email-generator",
    type: "website",
  },
};

const referralMoments = [
  {
    label: "Friend-invite campaigns",
    body: "Explain the referral offer, who it is for, why it matters, and how customers can share it without burying the invite link.",
  },
  {
    label: "Reward reminders",
    body: "Nudge advocates with clear reward status, redemption timing, eligibility notes, and urgency that keeps the program trustworthy.",
  },
  {
    label: "Advocate sharing CTAs",
    body: "Generate CTA variants for email buttons, SMS snippets, post-purchase modules, loyalty dashboards, and ambassador follow-ups.",
  },
];

const outputs = [
  "Referral emails for ecommerce stores, SaaS products, creator communities, loyalty programs, agencies, and local service businesses",
  "Friend-invite campaigns with subject lines, preview text, benefit framing, reward rules, and a clear sharing CTA",
  "Reward reminders for pending credits, expiring bonuses, post-purchase prompts, milestone unlocks, and seasonal referral pushes",
  "Advocate sharing CTAs that match the incentive, audience, program terms, proof point, and destination link",
  "Tone variants for helpful, excited, premium, founder-led, community-first, VIP, playful, and concise referral campaigns",
];

const faqs = [
  {
    question: "What is a referral email generator?",
    answer:
      "A referral email generator turns a referral program brief into referral emails, friend-invite campaigns, reward reminders, subject lines, preview text, advocate sharing CTAs, and SEO-friendly snippets.",
  },
  {
    question: "Can I use this for refer-a-friend campaigns?",
    answer:
      "Yes. SEOCopy can draft refer-a-friend campaigns that explain the incentive, clarify program rules, make sharing feel natural, and point advocates to the correct invite link or referral dashboard.",
  },
  {
    question: "How is this different from the discount email generator?",
    answer:
      "The discount email generator focuses on proactive sale and coupon announcements. This referral email generator focuses on turning satisfied customers into advocates through friend invites, reward reminders, sharing CTAs, and loyalty-program prompts.",
  },
  {
    question: "How many referral email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and lifecycle copy.",
  },
];

export default function ReferralEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Referral Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn happy customers into referrals with sharper invite emails.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the incentive, audience, program rules, reward deadline, product proof, and referral link. SEOCopy creates referral emails, friend-invite campaigns, reward reminders, advocate sharing CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=referral-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Referral Email
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
              Referral email output checklist
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
            Make every advocate easier to activate
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create referral copy for loyalty launches, friend invites, reward reminders, ambassador asks, post-purchase prompts, and VIP sharing pushes.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {referralMoments.map((item) => (
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
            Revenue-focused referral copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Package referral incentives with trust, clarity, and a share-ready CTA.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, subscription teams, and agencies turn referral program details into clear asks, reward-aware reminders, invite copy, social proof, and repeatable campaign angles without starting from a blank page.
          </p>
          <Link
            href="/generate?source=referral-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Referral email questions</h2>
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
