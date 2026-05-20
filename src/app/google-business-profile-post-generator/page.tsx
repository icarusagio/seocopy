import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Post Generator",
  description:
    "Generate Google Business Profile posts, local offer updates, event promos, service announcements, FAQs, and call-focused CTAs for local businesses.",
  alternates: {
    canonical: "https://seocopy.vercel.app/google-business-profile-post-generator",
  },
  keywords: [
    "Google Business Profile post generator",
    "Google post generator",
    "GBP post generator",
    "Google My Business post generator",
    "local business post generator",
    "local SEO post ideas",
  ],
  openGraph: {
    title: "Google Business Profile Post Generator | SEOCopy",
    description:
      "Turn offers, events, service updates, reviews, and seasonal moments into Google Business Profile posts, local landing snippets, FAQs, and call-ready CTAs.",
    url: "https://seocopy.vercel.app/google-business-profile-post-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "GBP posts",
    title: "Weekly updates that match local search intent",
    body: "Draft Google Business Profile posts for offers, events, new services, seasonal reminders, availability updates, and proof-led announcements.",
  },
  {
    label: "Local SEO",
    title: "Reusable snippets for service pages and landing pages",
    body: "Turn one post idea into matching website metadata, local landing page blurbs, neighborhood-specific hooks, and FAQ prompts.",
  },
  {
    label: "Conversion",
    title: "Calls, bookings, and quote requests from profile visitors",
    body: "Generate action-focused CTAs, urgency notes, trust signals, and objection-handling lines for customers comparing nearby options.",
  },
];

const workflow = [
  "Enter your business type, service area, offer or update, proof points, timing, and the action you want searchers to take.",
  "Choose a tone such as friendly, urgent, premium, neighborhood-focused, event-led, or service-first.",
  "Review GBP post variants, local SEO snippets, FAQ ideas, landing page angles, and CTA options.",
  "Publish the best post to Google Business Profile and reuse matching snippets on service pages, email, SMS, or paid local campaigns.",
];

const faqs = [
  {
    question: "What is a Google Business Profile post generator?",
    answer:
      "A Google Business Profile post generator turns local offers, events, service updates, seasonal reminders, and proof points into publish-ready GBP posts, website snippets, FAQs, and calls to action for people ready to call, book, or request a quote.",
  },
  {
    question: "Can I use this for Google My Business posts?",
    answer:
      "Yes. Google Business Profile is the current name for Google My Business. Add your update, service area, customer type, timing, and conversion goal, then adapt the generated copy for your profile post.",
  },
  {
    question: "What should local businesses post on Google Business Profile?",
    answer:
      "Strong GBP posts often cover limited-time offers, booking availability, new services, seasonal reminders, events, review highlights, before-and-after proof, emergency availability, and helpful local tips tied to a clear next action.",
  },
  {
    question: "How many free Google post generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing local SEO, profile, email, and website copy production.",
  },
];

export default function GoogleBusinessProfilePostGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(240,253,250,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.96),rgba(20,83,45,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Google Business Profile Post Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Google Business Profile posts that turn local searches into action.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns offers, events, service updates, and proof points into Google posts, local SEO snippets, FAQs, landing page angles, and call-ready CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=google-business-profile-post-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate GBP Posts
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
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build profile posts around freshness, relevance, and the next customer action.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
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
            Local profile conversion
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep your profile active with posts that answer why customers should call this week.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align Google Business Profile posts, service page snippets, local FAQs, proof points, and CTAs around timely buyer intent.
          </p>
          <Link
            href="/generate?source=google-business-profile-post-generator-cta"
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
