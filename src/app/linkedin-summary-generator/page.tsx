import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Summary Generator",
  description:
    "Generate LinkedIn About summaries, profile introductions, proof-led story arcs, recruiter keywords, and CTA variants from one professional profile brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/linkedin-summary-generator",
  },
  keywords: [
    "LinkedIn summary generator",
    "AI LinkedIn about generator",
    "LinkedIn profile summary ideas",
    "LinkedIn about section generator",
    "professional bio generator",
    "founder LinkedIn summary generator",
  ],
  openGraph: {
    title: "LinkedIn Summary Generator | SEOCopy",
    description:
      "Turn a role, audience, career goal, proof points, and offer into LinkedIn About section drafts, profile intros, keyword angles, and CTA copy.",
    url: "https://seocopy.vercel.app/linkedin-summary-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "About section drafts",
    title: "Write a profile story that explains why visitors should care",
    body: "Generate LinkedIn summary options for founders, consultants, job seekers, creators, operators, executives, and agency owners that connect role, proof, offer, and audience.",
  },
  {
    label: "Search-friendly positioning",
    title: "Blend human credibility with LinkedIn discovery keywords",
    body: "Turn services, skills, tools, industries, locations, credentials, and outcomes into natural profile copy that supports recruiter, partner, and prospect searches.",
  },
  {
    label: "Proof and next steps",
    title: "Convert profile attention into conversations",
    body: "Draft proof snippets, featured-link blurbs, availability notes, portfolio hooks, and soft calls to action for hiring, sales, partnerships, newsletters, or demos.",
  },
];

const workflow = [
  "Describe the profile: role, offer, audience, industry, career goal, and the visitor you want to persuade.",
  "Add proof points, career wins, tools, credentials, tone, location, and whether the summary should optimize for hiring, sales, partnerships, or audience growth.",
  "Generate About section drafts, opening hooks, keyword angles, proof snippets, featured-section blurbs, and CTA endings.",
  "Publish the strongest summary on LinkedIn and reuse the supporting copy in a personal site, portfolio, pitch deck, proposal, or founder bio.",
];

const examples = [
  {
    brief: "Fractional CMO helping B2B SaaS teams fix pipeline gaps",
    output:
      "I help lean B2B SaaS teams turn scattered acquisition work into a clear growth engine: sharper positioning, cleaner funnels, and campaigns tied to revenue instead of vanity metrics.",
  },
  {
    brief: "Senior product designer looking for fintech roles",
    output:
      "I design fintech products that make complex money workflows feel obvious. My work spans onboarding, risk review, dashboards, and design systems for regulated teams.",
  },
  {
    brief: "Shopify developer selling conversion and theme cleanup services",
    output:
      "I help Shopify brands speed up storefronts, clean up theme debt, and improve conversion paths so paid traffic lands on pages that are ready to sell.",
  },
];

const faqs = [
  {
    question: "What is a LinkedIn summary generator?",
    answer:
      "A LinkedIn summary generator turns your role, audience, offer, proof points, keywords, and career goal into About section drafts and supporting profile copy you can edit before publishing.",
  },
  {
    question: "Can SEOCopy write summaries for founders, freelancers, and job seekers?",
    answer:
      "Yes. SEOCopy can generate LinkedIn About copy for founders, consultants, freelancers, job seekers, creators, agency owners, executives, marketers, operators, and product teams.",
  },
  {
    question: "Will the LinkedIn About section include search keywords?",
    answer:
      "Yes. Add your services, skills, industry, audience, location, tools, and outcomes so the generated summaries include relevant keywords without sounding like a keyword list.",
  },
  {
    question: "How many LinkedIn summary ideas can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing profile, SEO, and copy production.",
  },
];

export default function LinkedInSummaryGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(239,246,255,1),rgba(240,253,250,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              LinkedIn Summary Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate LinkedIn summaries that turn profile visits into conversations.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your role, audience, offer, proof, keywords, and goal into LinkedIn About drafts, professional profile intros, credibility snippets, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=linkedin-summary-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate LinkedIn summaries
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              From profile brief to opportunity-ready About copy
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800 dark:bg-sky-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            LinkedIn About deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One professional brief, multiple profile-ready summary assets.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            LinkedIn summary examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn a short profile brief into an About section visitors understand.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Summary angle</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=linkedin-summary-generator"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Generate your LinkedIn summary
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            LinkedIn summary generator questions
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
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
