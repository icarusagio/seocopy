import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Magnet Generator",
  description:
    "Generate lead magnet ideas, opt-in page copy, SEO snippets, email follow-up angles, FAQs, and CTAs from one audience or offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/lead-magnet-generator",
  },
  keywords: [
    "lead magnet generator",
    "AI lead magnet generator",
    "lead magnet ideas generator",
    "opt-in page copy generator",
    "lead generation copy generator",
    "freebie idea generator",
  ],
  openGraph: {
    title: "Lead Magnet Generator | SEOCopy",
    description:
      "Turn an audience, pain point, and offer into lead magnet ideas, opt-in page copy, SEO metadata, FAQ answers, and follow-up email angles.",
    url: "https://seocopy.vercel.app/lead-magnet-generator",
    type: "website",
  },
};

const leadMagnetAngles = [
  {
    label: "Audience-specific hook",
    body: "Translate the audience, pain, promise, and awareness level into a lead magnet angle that feels useful enough to trade an email for.",
  },
  {
    label: "Opt-in page conversion",
    body: "Generate headline, subheadline, bullet, form CTA, and risk-reversal copy for landing pages, popups, and newsletter signup blocks.",
  },
  {
    label: "Nurture-ready follow-up",
    body: "Pair each lead magnet idea with delivery email angles, next-step CTAs, and offer bridges so subscribers move toward a paid action.",
  },
];

const outputs = [
  "Lead magnet ideas for guides, checklists, templates, audits, webinars, and calculators",
  "Opt-in landing page headlines, bullets, form CTAs, and thank-you page copy",
  "SEO title, meta description, Open Graph copy, and FAQ prompts",
  "Delivery email subject lines, nurture angles, and sales bridge CTAs",
  "Audience-fit notes that explain why each asset should attract qualified leads",
];

const faqs = [
  {
    question: "What is a lead magnet generator?",
    answer:
      "A lead magnet generator turns an audience, pain point, offer, and desired next step into lead magnet ideas plus opt-in page copy, SEO snippets, FAQs, and follow-up email angles.",
  },
  {
    question: "What lead magnet formats can SEOCopy suggest?",
    answer:
      "SEOCopy can suggest checklists, guides, templates, audits, swipe files, quizzes, webinars, calculators, mini-courses, and other free resources matched to the audience and offer.",
  },
  {
    question: "Can I use this for newsletter growth?",
    answer:
      "Yes. Use the generator to create newsletter signup hooks, landing page bullets, welcome email angles, and CTA copy that explains the value of subscribing.",
  },
  {
    question: "How many lead magnet generations are free?",
    answer:
      "You can try two free generations without signing up. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function LeadMagnetGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.48))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Lead Magnet Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate lead magnet ideas and opt-in copy that turn traffic into qualified subscribers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your audience, pain point, offer, and next-step CTA. SEOCopy turns the brief into lead magnet concepts, opt-in page copy, SEO metadata, FAQs, and follow-up email angles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=lead-magnet-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Lead Magnet Copy
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
              Lead capture output checklist
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
            Lead generation angles
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build a lead magnet around a painful problem, a fast win, and a clear next step.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {leadMagnetAngles.map((item) => (
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
            From traffic to subscriber pipeline
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn rough audience notes into a lead capture asset and nurture path in minutes.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, agencies, creators, and marketers ship lead magnets without waiting on a full copywriting cycle. Use it for checklist opt-ins, webinar promos, template libraries, audit offers, and newsletter signup pages.
          </p>
          <Link
            href="/generate?source=lead-magnet-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Lead magnet generator questions</h2>
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
