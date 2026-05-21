import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loyalty Program Email Generator",
  description:
    "Generate loyalty program emails, rewards campaign copy, VIP tier announcements, points reminders, member perks CTAs, FAQs, and SEO snippets from one retention brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/loyalty-program-email-generator",
  },
  keywords: [
    "loyalty program email generator",
    "loyalty program emails",
    "rewards campaign copy",
    "VIP tier announcement email",
    "points reminder email",
    "member perks CTAs",
    "customer loyalty email copy",
    "ecommerce rewards email",
    "loyalty lifecycle emails",
  ],
  openGraph: {
    title: "Loyalty Program Email Generator | SEOCopy",
    description:
      "Turn a rewards program, VIP tier, points balance, or member perk into loyalty program emails, rewards campaign copy, VIP announcements, and repeat-purchase CTAs.",
    url: "https://seocopy.vercel.app/loyalty-program-email-generator",
    type: "website",
  },
};

const loyaltyMoments = [
  {
    label: "Rewards launches",
    body: "Introduce the program, explain how points or perks work, highlight the first action to take, and make the enrollment CTA feel valuable now.",
  },
  {
    label: "VIP tier announcements",
    body: "Package member status, unlocked perks, exclusive access, and next-tier progress into concise emails that make loyalty feel tangible.",
  },
  {
    label: "Points and perk reminders",
    body: "Convert balances, expiring rewards, birthday offers, replenishment windows, and member-only drops into repeat-purchase nudges.",
  },
];

const outputs = [
  "Loyalty program emails for ecommerce stores, subscription brands, SaaS products, memberships, creator communities, and local businesses",
  "Rewards campaign copy with subject lines, preview text, benefit framing, points rules, perk explanations, and a clear redemption CTA",
  "VIP tier announcements for unlocked benefits, member-only drops, birthday rewards, status progress, and exclusive early-access moments",
  "Points reminder emails that connect expiring rewards, balance updates, reorder timing, and product recommendations to repeat purchases",
  "Tone variants for premium, playful, concise, founder-led, community-first, urgent, helpful, and brand-loyalty campaigns",
];

const faqs = [
  {
    question: "What is a loyalty program email generator?",
    answer:
      "A loyalty program email generator turns a rewards or membership brief into loyalty program emails, rewards campaign copy, VIP tier announcements, points reminders, subject lines, preview text, CTAs, FAQs, and SEO-friendly snippets.",
  },
  {
    question: "Can I use this for points and VIP tier campaigns?",
    answer:
      "Yes. SEOCopy can draft points balance reminders, expiring reward emails, VIP tier unlock announcements, member-only drop copy, birthday perk emails, and redemption CTAs that point customers back to purchase.",
  },
  {
    question: "How is this different from the referral email generator?",
    answer:
      "The referral email generator focuses on asking advocates to share with friends. This loyalty program email generator focuses on member retention, rewards redemption, VIP status, repeat purchases, and program engagement after someone is already in the loyalty base.",
  },
  {
    question: "How many loyalty email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and lifecycle copy.",
  },
];

export default function LoyaltyProgramEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Loyalty Program Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn rewards members into repeat buyers with clearer loyalty emails.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the loyalty offer, points rules, VIP tier, member segment, perk deadline, product proof, and redemption link. SEOCopy creates loyalty program emails, rewards campaign copy, VIP tier announcements, points reminders, member perks CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=loyalty-program-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Loyalty Email
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
              Loyalty email output checklist
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
            Make every member easier to reactivate
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create loyalty emails for rewards launches, VIP tiers, points reminders, member-only drops, birthday perks, replenishment nudges, and repeat-purchase campaigns.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {loyaltyMoments.map((item) => (
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
            Repeat-purchase loyalty copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Package points, perks, and member status into one clear reason to buy again.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, subscription teams, and agencies turn loyalty program details into reward-aware subject lines, benefit-led member updates, VIP hooks, redemption CTAs, and repeatable lifecycle campaign angles without starting from a blank page.
          </p>
          <Link
            href="/generate?source=loyalty-program-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Loyalty program email questions</h2>
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
