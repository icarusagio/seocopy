import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Feedback Survey Generator",
  description:
    "Generate customer feedback surveys, post-purchase survey questions, NPS prompts, product feedback forms, FAQs, and retention CTAs from one research brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/customer-feedback-survey-generator",
  },
  keywords: [
    "customer feedback survey generator",
    "customer feedback surveys",
    "post-purchase survey questions",
    "NPS prompts",
    "product feedback forms",
    "customer research questions",
  ],
  openGraph: {
    title: "Customer Feedback Survey Generator | SEOCopy",
    description:
      "Turn one customer research brief into survey questions, NPS prompts, product feedback forms, objection probes, and retention-ready follow-up copy.",
    url: "https://seocopy.vercel.app/customer-feedback-survey-generator",
    type: "website",
  },
};

const surveySections = [
  {
    label: "Post-purchase survey questions",
    body: "Ask customers why they bought, what almost stopped them, which benefit mattered most, and what would make the next purchase easier.",
  },
  {
    label: "NPS prompts and follow-ups",
    body: "Generate NPS prompts, score-specific follow-up questions, promoter testimonial asks, passive research probes, and detractor recovery copy.",
  },
  {
    label: "Product feedback forms",
    body: "Create product feedback forms for SaaS, Shopify, services, and launches with feature prioritization, friction, pricing, and onboarding questions.",
  },
];

const outputs = [
  "Customer feedback survey objective and audience framing",
  "Post-purchase survey questions for buyer motivation and objections",
  "NPS prompts with score-specific follow-up questions",
  "Product feedback forms for feature, pricing, onboarding, and retention insights",
  "Thank-you copy, incentive reminders, and customer research FAQ answers",
];

const faqs = [
  {
    question: "What is a customer feedback survey generator?",
    answer:
      "A customer feedback survey generator turns a research goal, audience, product, and customer moment into customer feedback surveys with post-purchase survey questions, NPS prompts, product feedback forms, and follow-up copy.",
  },
  {
    question: "Can SEOCopy write post-purchase survey questions?",
    answer:
      "Yes. SEOCopy can draft post-purchase survey questions that uncover purchase motivation, hesitation, trust gaps, product expectations, shipping or onboarding friction, and ideas for better retention campaigns.",
  },
  {
    question: "How is this different from a review request email?",
    answer:
      "A review request email asks a happy customer to publish social proof. A customer feedback survey asks structured research questions so you can improve positioning, product copy, onboarding, pricing, and retention before asking for a public review.",
  },
  {
    question: "How many customer feedback surveys can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing survey, SEO, and conversion copy production.",
  },
];

export default function CustomerFeedbackSurveyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.72))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Customer Feedback Survey Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate customer feedback surveys that reveal why buyers convert, churn, or hesitate.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product, customer segment, purchase moment, or research goal. SEOCopy returns customer feedback surveys with post-purchase survey questions, NPS prompts, product feedback forms, follow-up copy, and retention insights you can turn into better offers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=customer-feedback-survey-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Customer Feedback Survey Copy
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
              Survey output checklist
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
            Voice-of-customer research
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn raw customer moments into survey questions your marketing, product, and retention teams can use.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {surveySections.map((item) => (
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
            Learn before you optimize
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Ask the questions that turn customers into better landing pages, offers, onboarding, and lifecycle campaigns.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps survey copy tied to revenue: clearer objections, sharper positioning, stronger testimonials, fewer churn surprises, and better follow-up messages.
          </p>
          <Link
            href="/generate?source=customer-feedback-survey-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Customer feedback survey generator questions</h2>
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
