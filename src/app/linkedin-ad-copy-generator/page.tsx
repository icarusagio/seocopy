import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Ad Copy Generator",
  description:
    "Generate LinkedIn ad copy, B2B paid social hooks, sponsored content variants, lead-gen CTA angles, FAQs, and landing-page snippets from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/linkedin-ad-copy-generator",
  },
  keywords: [
    "LinkedIn ad copy generator",
    "LinkedIn ad generator",
    "B2B paid social copy",
    "sponsored content copy generator",
    "LinkedIn lead gen ad copy",
    "LinkedIn campaign copy AI",
  ],
  openGraph: {
    title: "LinkedIn Ad Copy Generator | SEOCopy",
    description:
      "Turn one B2B campaign brief into sponsored content hooks, lead-gen CTAs, landing-page snippets, FAQs, and paid social copy variants.",
    url: "https://seocopy.vercel.app/linkedin-ad-copy-generator",
    type: "website",
  },
};

const adAngles = [
  {
    label: "B2B paid social hooks",
    body: "Convert product positioning, audience pain, proof points, and offer notes into scroll-stopping LinkedIn hooks for founders, marketers, and sales-led teams.",
  },
  {
    label: "Sponsored content variants",
    body: "Generate concise single-image copy, document ad intros, thought-leadership style variants, and retargeting angles without rewriting the brief from scratch.",
  },
  {
    label: "Lead-gen CTA angles",
    body: "Package demo, audit, checklist, webinar, free trial, and sales-assist offers with CTA language that matches LinkedIn campaign intent.",
  },
];

const outputs = [
  "LinkedIn ad copy for prospecting, retargeting, and lead-generation campaigns",
  "B2B paid social hooks that call out the pain, proof, audience, and desired outcome",
  "Sponsored content variants for founder-led posts, company ads, and document ad intros",
  "Lead-gen CTA angles for demo requests, audits, reports, webinars, checklists, and free trials",
  "Landing-page snippets, FAQs, objection reducers, and SEO metadata to keep the ad-to-page message aligned",
];

const faqs = [
  {
    question: "What is a LinkedIn ad copy generator?",
    answer:
      "A LinkedIn ad copy generator turns a campaign brief into LinkedIn ad copy, B2B paid social hooks, sponsored content variants, lead-gen CTA angles, FAQs, and landing-page snippets for paid social campaigns.",
  },
  {
    question: "Can I use this for B2B lead generation campaigns?",
    answer:
      "Yes. SEOCopy is built for B2B lead-generation flows such as demo requests, audits, lead magnets, webinars, free trials, and sales-assist campaigns where ad copy needs to match the landing page CTA.",
  },
  {
    question: "How is this different from a general ad copy generator?",
    answer:
      "This page focuses on LinkedIn-specific sponsored content and B2B paid social workflows: professional-audience hooks, proof-led messaging, lead-gen CTA angles, and landing-page snippets for ad-to-page consistency.",
  },
  {
    question: "How many LinkedIn ad copy generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function LinkedinAdCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,41,59,0.75))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              LinkedIn Ad Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate LinkedIn ad copy for B2B campaigns that need clicks and qualified leads.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a campaign brief, audience, offer, proof points, and landing-page promise. SEOCopy creates LinkedIn ad copy, B2B paid social hooks, sponsored content variants, lead-gen CTA angles, FAQs, and page snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=linkedin-ad-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate LinkedIn Ads
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
              Paid social output checklist
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
            From campaign brief to ad-to-page copy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn one B2B offer into LinkedIn hooks, sponsored content options, and conversion CTAs.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {adAngles.map((item) => (
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
            Launch paid social faster
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep every LinkedIn ad aligned with the landing-page promise.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps B2B founders, agencies, marketers, and sales teams move from campaign notes to testable LinkedIn ad variants, CTA copy, page snippets, and FAQ content before budget goes live.
          </p>
          <Link
            href="/generate?source=linkedin-ad-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">LinkedIn ad copy generator questions</h2>
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
