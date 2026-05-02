import type { Metadata } from "next";
import Link from "next/link";

const route = "/about-us-page-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "About Us Page Generator",
  description:
    "Generate an About Us page, founder story, mission statement, trust proof, team intro, SEO metadata, FAQs, and CTA copy from rough brand notes.",
  alternates: {
    canonical,
  },
  keywords: [
    "About Us page generator",
    "about page generator",
    "company bio generator",
    "founder story generator",
    "mission statement generator",
    "website copy generator",
  ],
  openGraph: {
    title: "About Us Page Generator | SEOCopy",
    description:
      "Turn rough company notes into a conversion-ready About Us page with founder story, mission, proof points, FAQs, metadata, and CTAs.",
    url: canonical,
    type: "website",
  },
};

const sections = [
  {
    label: "Story",
    title: "A clear origin story without the blank-page drag",
    body: "Turn founder notes, customer pains, values, and milestones into an About Us narrative that feels specific instead of generic.",
  },
  {
    label: "Trust",
    title: "Proof points that help visitors believe the claim",
    body: "Generate credibility bullets for customers served, category expertise, guarantees, team strengths, press mentions, certifications, or community roots.",
  },
  {
    label: "Conversion",
    title: "Next-step CTAs for a page that usually gets ignored",
    body: "Add relevant calls to action for booking, requesting a quote, shopping, joining a waitlist, or reading the service page after the brand story lands.",
  },
];

const workflow = [
  "Enter your company type, audience, origin story, differentiators, values, proof points, and main conversion goal.",
  "Choose a tone: founder-led, premium, warm, local, expert, mission-driven, playful, or direct.",
  "Review About Us page sections, company bio variants, mission statements, SEO metadata, FAQs, and CTA options.",
  "Publish the strongest draft to your website, investor page, marketplace profile, press kit, or sales deck.",
];

const faqs = [
  {
    question: "What is an About Us page generator?",
    answer:
      "An About Us page generator turns rough company notes into polished website copy: origin story, mission, values, proof points, team intro, SEO metadata, FAQs, and CTAs for visitors who want to know why they should trust you.",
  },
  {
    question: "Who should use this About Us page generator?",
    answer:
      "Use it for startups, Shopify stores, agencies, consultants, local businesses, restaurants, SaaS companies, and service providers that need a sharper brand story without hiring a copywriter for the first draft.",
  },
  {
    question: "Can SEOCopy write a founder story or company bio?",
    answer:
      "Yes. Add founder background, customer problem, product promise, milestones, and tone notes, then adapt the generated founder story or company bio for your About page, press kit, LinkedIn, or marketplace profile.",
  },
  {
    question: "How many free About Us page generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing website, SEO, and landing page copy production.",
  },
];

export default function AboutUsPageGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,249,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.96),rgba(49,46,129,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-800 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-200">
              About Us Page Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate About Us pages that make your story easier to trust.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your origin story, audience, values, proof points, and offer into an About Us page, founder bio, mission statement, FAQs, SEO metadata, and conversion-focused CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=about-us-page-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate About Page Copy
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
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-800 dark:bg-cyan-300 dark:text-slate-950">
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
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build an About page around clarity, credibility, and the next visitor action.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((item) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Website trust copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Make the page visitors check before they buy sound intentional.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align your founder story, brand promise, proof points, FAQs, metadata, and CTAs so the About page supports conversion instead of sitting as filler copy.
          </p>
          <Link
            href="/generate?source=about-us-page-generator-cta"
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
