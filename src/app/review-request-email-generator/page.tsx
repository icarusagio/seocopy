import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Review Request Email Generator",
  description:
    "Generate review request emails, post-purchase review flows, customer feedback prompts, testimonial collection CTAs, FAQs, and SEO snippets from one customer moment.",
  alternates: {
    canonical: "https://seocopy.vercel.app/review-request-email-generator",
  },
  keywords: [
    "review request email generator",
    "review request emails",
    "post purchase review email",
    "customer feedback email",
    "testimonial request email",
    "product review request copy",
  ],
  openGraph: {
    title: "Review Request Email Generator | SEOCopy",
    description:
      "Turn a purchase, appointment, delivery, or support win into review request emails, customer feedback prompts, testimonial CTAs, and follow-up copy.",
    url: "https://seocopy.vercel.app/review-request-email-generator",
    type: "website",
  },
};

const requestTypes = [
  {
    label: "Post-purchase review flows",
    body: "Ask recent buyers for product reviews after delivery, onboarding, or first-use milestones with timing notes and low-friction CTAs.",
  },
  {
    label: "Customer feedback prompts",
    body: "Collect NPS-style feedback, service comments, and support recovery notes before routing happy customers toward public reviews.",
  },
  {
    label: "Testimonial collection CTAs",
    body: "Turn customer wins into testimonial asks, case-study invitations, Google review requests, and social-proof snippets for landing pages.",
  },
];

const outputs = [
  "Review request emails for ecommerce purchases, local services, SaaS milestones, agency projects, and support wins",
  "Post-purchase review flows with subject lines, preview text, body copy, gentle reminders, and testimonial collection CTAs",
  "Customer feedback prompts that separate private feedback, public reviews, and case-study invitations without sounding pushy",
  "SEO snippets, social proof angles, FAQ copy, and landing-page CTAs that explain why customers should share a review",
  "Tone variants for warm, concise, premium, local-business, and merchant-friendly review requests",
];

const faqs = [
  {
    question: "What is a review request email generator?",
    answer:
      "A review request email generator turns a customer purchase, service visit, product delivery, or support win into polite review request emails, reminder copy, feedback prompts, and testimonial collection CTAs.",
  },
  {
    question: "Can I use this for post-purchase review flows?",
    answer:
      "Yes. SEOCopy can draft post-purchase review flows for ecommerce stores, Shopify merchants, local businesses, SaaS onboarding milestones, and agencies that need review asks after a successful customer outcome.",
  },
  {
    question: "How is this different from the email sequence generator?",
    answer:
      "The email sequence generator covers broad welcome, launch, nurture, and sales flows. This review request email generator focuses specifically on collecting reviews, private feedback, testimonials, and social proof after a customer interaction.",
  },
  {
    question: "How many review request email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function ReviewRequestEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Review Request Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Ask for reviews without writing from scratch.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the customer moment, product, service result, proof point, and preferred review destination. SEOCopy creates review request emails, post-purchase review flows, customer feedback prompts, testimonial collection CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=review-request-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Review Request Email
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
              Review request output checklist
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
            Turn happy customers into proof
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create review asks for ecommerce, local services, SaaS, agencies, and support teams.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {requestTypes.map((item) => (
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
            Grow trust and conversion
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give merchants and founders a faster path from customer success to public proof.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn a positive buyer moment into polished review request copy, follow-up reminders, feedback routing, testimonial asks, and landing-page proof snippets so social proof does not get stuck in a blank document.
          </p>
          <Link
            href="/generate?source=review-request-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Review request email questions</h2>
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
