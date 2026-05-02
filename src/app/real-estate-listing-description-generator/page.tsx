import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate Listing Description Generator",
  description:
    "Generate SEO-friendly real estate listing descriptions, MLS-ready property highlights, neighborhood copy, FAQs, and inquiry-focused CTAs from rough listing notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/real-estate-listing-description-generator",
  },
  keywords: [
    "real estate listing description generator",
    "AI real estate listing description generator",
    "property description generator",
    "MLS listing copy generator",
    "realtor listing description generator",
    "real estate SEO copy generator",
  ],
  openGraph: {
    title: "Real Estate Listing Description Generator | SEOCopy",
    description:
      "Turn property notes, amenities, neighborhood context, and buyer profile into listing descriptions, SEO metadata, social previews, FAQs, and lead CTAs.",
    url: "https://seocopy.vercel.app/real-estate-listing-description-generator",
    type: "website",
  },
};

const sections = [
  {
    label: "Listing SEO",
    title: "Search-friendly property titles and snippets",
    body: "Draft title tags and meta descriptions for listing pages, neighborhood pages, and agent websites without burying the strongest selling point.",
  },
  {
    label: "MLS-ready copy",
    title: "Property descriptions from rough notes",
    body: "Convert bedrooms, upgrades, layout details, amenities, and location context into polished copy that sounds specific instead of generic.",
  },
  {
    label: "Buyer inquiries",
    title: "Social hooks, FAQs, and showing CTAs",
    body: "Create open-house blurbs, social preview copy, buyer questions, and calls to action that move prospects toward a tour or consultation.",
  },
];

const workflow = [
  "Enter the address area, property type, price band, buyer profile, standout amenities, and recent upgrades.",
  "Choose whether the copy should prioritize showings, lead capture, relocation buyers, luxury positioning, or quick sale momentum.",
  "Review listing descriptions, SEO metadata, social previews, FAQ ideas, and CTA variants.",
  "Publish the strongest version to your MLS notes, listing page, brokerage site, email campaign, or social post.",
];

const faqs = [
  {
    question: "What is a real estate listing description generator?",
    answer:
      "A real estate listing description generator turns rough property notes into listing copy, SEO titles, meta descriptions, social previews, FAQs, and inquiry-focused calls to action for agents, teams, brokerages, and property marketers.",
  },
  {
    question: "Can SEOCopy write MLS-friendly property descriptions?",
    answer:
      "Yes. Add property facts, upgrades, amenities, location context, and target buyer details. SEOCopy drafts polished descriptions you can adapt for MLS fields, listing pages, flyers, and social captions.",
  },
  {
    question: "Does this replace compliance review for real estate copy?",
    answer:
      "No. Treat generated copy as a strong first draft. Review it against brokerage, MLS, fair housing, and local advertising rules before publishing.",
  },
  {
    question: "How many free real estate listing generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing listing and real estate SEO copy production.",
  },
];

export default function RealEstateListingDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Real Estate Listing Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate real estate listing descriptions that turn property notes into buyer interest.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns property details, upgrades, amenities, neighborhood context, and buyer profile into listing descriptions, SEO snippets, social previews, FAQs, and tour-focused CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=real-estate-listing-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Listing Copy
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
            Build listing copy around the property, the buyer, and the next showing request.
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
            More qualified inquiries
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop publishing listing copy that lists features but never explains why the right buyer should book a tour.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align the page title, property description, neighborhood angle, objection-handling FAQ, and CTA around one clear showing request.
          </p>
          <Link
            href="/generate?source=real-estate-listing-description-generator-cta"
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
