import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Page Copy Generator",
  description:
    "Generate service page copy, SEO title tags, meta descriptions, hero headlines, proof points, FAQs, and CTA variants for agencies and local service businesses.",
  alternates: {
    canonical: "https://seocopy.vercel.app/service-page-copy-generator",
  },
  keywords: [
    "service page copy generator",
    "AI service page copy generator",
    "service business SEO copy",
    "agency service page copy",
    "local service page SEO",
    "website copy generator",
  ],
  openGraph: {
    title: "Service Page Copy Generator | SEOCopy",
    description:
      "Turn a service offer into SEO metadata, proof-led page copy, FAQs, and calls to action that help visitors request a quote or book a consult.",
    url: "https://seocopy.vercel.app/service-page-copy-generator",
    type: "website",
  },
};

const sections = [
  {
    label: "Search intent",
    title: "SEO title + meta description",
    body: "Translate your service, audience, location, and outcome into a search snippet that earns qualified clicks.",
  },
  {
    label: "Conversion copy",
    title: "Hero, proof, and CTA variants",
    body: "Generate headlines, value props, trust signals, and calls to action for visitors comparing vendors.",
  },
  {
    label: "Sales enablement",
    title: "FAQs and objection handling",
    body: "Answer price, process, timing, and fit questions before leads book a consult or request a quote.",
  },
];

const workflow = [
  "Describe the service, target customer, service area, and strongest proof point.",
  "Pick a tone that fits your market: expert, approachable, premium, or direct-response.",
  "Review SEO metadata, hero copy, proof bullets, FAQ ideas, and CTA variants.",
  "Paste the best copy into your CMS, Webflow page, or agency launch doc.",
];

const faqs = [
  {
    question: "What is a service page copy generator?",
    answer:
      "A service page copy generator turns a short offer brief into copy for a service landing page: SEO titles, meta descriptions, hero headlines, proof bullets, FAQs, and calls to action.",
  },
  {
    question: "Who should use SEOCopy for service pages?",
    answer:
      "It is useful for agencies, consultants, local service businesses, B2B providers, and founders who need clearer pages for offers like audits, installations, repairs, retainers, or done-for-you services.",
  },
  {
    question: "Can it help with local SEO service pages?",
    answer:
      "Yes. Include the city, region, service area, and customer type in your prompt so SEOCopy can draft localized metadata and page copy without stuffing keywords.",
  },
  {
    question: "How many free service page generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function ServicePageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Service Page Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate service page copy that turns search visitors into leads.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a service offer into SEO metadata, hero copy, proof points, FAQs, and CTA ideas for agencies, consultants, and local service businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=service-page-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Service Page Copy
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
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build a service page around the search promise and the sales conversation.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((item) => (
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

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Lead-focused output
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop publishing service pages that list what you do but never explain why a buyer should act now.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align the search snippet, first-screen promise, proof points, and next-step CTA around one clear service offer.
          </p>
          <Link
            href="/generate?source=service-page-copy-generator-cta"
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
