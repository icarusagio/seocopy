import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Description Generator",
  description:
    "Generate Google Business Profile descriptions, local SEO snippets, service blurbs, posts, FAQs, and call-focused CTAs for local businesses from rough notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/google-business-profile-description-generator",
  },
  keywords: [
    "Google Business Profile description generator",
    "Google business description generator",
    "GBP description generator",
    "Google My Business description generator",
    "local business description generator",
    "local SEO copy generator",
  ],
  openGraph: {
    title: "Google Business Profile Description Generator | SEOCopy",
    description:
      "Turn local business notes, services, neighborhoods, differentiators, and booking goals into GBP descriptions, service blurbs, posts, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/google-business-profile-description-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "GBP description",
    title: "A clear business summary that fits local search intent",
    body: "Draft a concise Google Business Profile description that explains what you do, who you serve, where you work, and why customers should call, book, or request a quote.",
  },
  {
    label: "Local SEO",
    title: "Service and location copy for stronger discovery",
    body: "Create supporting snippets for services, neighborhood pages, city landing pages, and website metadata using the same positioning as your profile.",
  },
  {
    label: "Conversion",
    title: "Posts, FAQs, and CTAs that move searchers to action",
    body: "Generate Google posts, objection-handling FAQs, proof points, appointment CTAs, and quote-request copy for high-intent local visitors.",
  },
];

const workflow = [
  "Enter your business category, services, city or service area, ideal customer, proof points, and main conversion goal.",
  "Choose a tone that matches the business: professional, friendly, premium, urgent, neighborhood-focused, or trust-first.",
  "Review GBP descriptions, local SEO metadata, service blurbs, Google post ideas, FAQs, and CTA variants.",
  "Publish the strongest copy to your Google Business Profile, website homepage, service pages, booking flow, or quote request page.",
];

const faqs = [
  {
    question: "What is a Google Business Profile description generator?",
    answer:
      "A Google Business Profile description generator turns rough local business notes into polished GBP descriptions, local SEO metadata, service blurbs, Google post ideas, FAQs, and call-to-action copy for searchers who are ready to call, book, or request a quote.",
  },
  {
    question: "Can SEOCopy help with Google My Business descriptions?",
    answer:
      "Yes. Google Business Profile is the current name for Google My Business. Add your services, service area, customer type, differentiators, proof points, and booking goal, then adapt the generated description for your profile and website.",
  },
  {
    question: "What types of local businesses can use this page?",
    answer:
      "Use it for home services, dentists, med spas, restaurants, agencies, consultants, real estate teams, fitness studios, repair shops, specialty retailers, and any local business that needs clearer search copy.",
  },
  {
    question: "How many free GBP description generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing local SEO and website copy production.",
  },
];

export default function GoogleBusinessProfileDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(240,253,250,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.96),rgba(20,83,45,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Google Business Profile Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Google Business Profile descriptions that turn local searches into calls.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your services, city, proof points, and customer intent into GBP descriptions, local SEO metadata, service blurbs, Google posts, FAQs, and booking-focused CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=google-business-profile-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate GBP Copy
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
            Build local copy around relevance, trust, and the next customer action.
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
            Local search conversion
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop letting your profile sound generic when customers are comparing nearby options.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align your Google Business Profile, website metadata, service page copy, FAQs, proof points, and CTAs around one clear local buying moment.
          </p>
          <Link
            href="/generate?source=google-business-profile-description-generator-cta"
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
