import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonial Generator",
  description:
    "Generate customer testimonials, review quotes, social proof snippets, SEO metadata, and CTA copy from raw customer feedback.",
  alternates: {
    canonical: "https://seocopy.vercel.app/testimonial-generator",
  },
  keywords: [
    "testimonial generator",
    "AI testimonial generator",
    "customer testimonial generator",
    "review quote generator",
    "social proof copy generator",
    "testimonial copywriting",
  ],
  openGraph: {
    title: "Testimonial Generator | SEOCopy",
    description:
      "Turn customer feedback, reviews, survey responses, and sales notes into polished testimonials, proof snippets, SEO copy, and CTA variants.",
    url: "https://seocopy.vercel.app/testimonial-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Proof copy",
    title: "Polished testimonials from rough feedback",
    body: "Transform unstructured customer notes into concise testimonial quotes, before-and-after proof, and homepage-ready social proof blocks.",
  },
  {
    label: "Reuse angles",
    title: "Snippets for ads, landing pages, and email",
    body: "Generate short review highlights, hero proof blurbs, objection-handling snippets, and campaign copy variants from the same customer voice.",
  },
  {
    label: "Search ready",
    title: "SEO metadata and conversion CTAs",
    body: "Pair testimonial assets with title tags, meta descriptions, Open Graph copy, and CTA ideas that send proof-driven visitors into your funnel.",
  },
];

const workflow = [
  "Paste a review, support note, survey answer, interview quote, or sales call summary.",
  "Add the customer type, product outcome, measurable result, and tone you want to preserve.",
  "Generate testimonial quotes, proof snippets, SEO metadata, social previews, and CTA variants.",
  "Publish the strongest proof on your homepage, landing page, pricing page, email, or paid campaign.",
];

const examples = [
  "Founder quote about saving hours on SEO production",
  "Shopify merchant review after improving product page copy",
  "Agency client testimonial with traffic and conversion lift",
  "B2B customer proof snippet for a pricing page objection",
];

const faqs = [
  {
    question: "What is a testimonial generator?",
    answer:
      "A testimonial generator turns raw customer feedback into concise testimonial quotes, review highlights, proof snippets, SEO metadata, and CTA copy that can be reused across sales and marketing pages.",
  },
  {
    question: "Can SEOCopy keep the customer's voice intact?",
    answer:
      "Yes. Paste the original review or interview notes and describe the tone to preserve. SEOCopy drafts cleaner variants while keeping the customer's outcome, phrasing, and proof points central.",
  },
  {
    question: "Where should I use generated testimonials?",
    answer:
      "Use testimonial copy on homepages, landing pages, pricing pages, product pages, email launches, social posts, ads, sales decks, and case study teasers wherever proof can improve conversion.",
  },
  {
    question: "How many free testimonial generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO and conversion copy production.",
  },
];

export default function TestimonialGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Testimonial Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate customer testimonials that turn trust into conversions.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns reviews, survey responses, customer call notes, and raw feedback into polished testimonial quotes, proof snippets, SEO metadata, social previews, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=testimonial-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Testimonial
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Testimonial Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Testimonial copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One customer feedback brief, multiple proof assets for acquisition and conversion.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputBlocks.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Example testimonial briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft social proof from the feedback already sitting in reviews, calls, emails, and surveys.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=testimonial-generator-cta"
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
