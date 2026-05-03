import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press Release Generator",
  description:
    "Generate press releases, launch announcements, media pitches, SEO metadata, and CTA copy from one company update or product launch brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/press-release-generator",
  },
  keywords: [
    "press release generator",
    "AI press release generator",
    "product launch press release generator",
    "startup press release generator",
    "media pitch generator",
    "announcement copy generator",
  ],
  openGraph: {
    title: "Press Release Generator | SEOCopy",
    description:
      "Turn product launches, funding news, feature releases, events, and company milestones into press release copy, media pitches, SEO snippets, and CTA variants.",
    url: "https://seocopy.vercel.app/press-release-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Announcement copy",
    title: "Launch-ready press releases from rough notes",
    body: "Transform a product update, funding milestone, partnership, event, or feature launch into a structured press release with a clear headline, summary, quote, and boilerplate.",
  },
  {
    label: "Distribution angles",
    title: "Pitches for journalists, newsletters, and social",
    body: "Generate outreach angles, subject lines, short media pitches, social posts, and founder blurbs that make the announcement easier to distribute.",
  },
  {
    label: "Search ready",
    title: "SEO metadata and conversion CTAs",
    body: "Pair the announcement with title tags, meta descriptions, Open Graph copy, FAQ ideas, and calls to action that move readers toward a demo, waitlist, or checkout.",
  },
];

const workflow = [
  "Paste the product launch, funding update, event announcement, feature release, or company milestone.",
  "Add the audience, proof points, quote notes, timing, geography, and target publication angle.",
  "Generate a press release, media pitch, SEO metadata, social preview copy, and CTA variants.",
  "Publish the release, pitch relevant outlets, and reuse the strongest snippets across launch channels.",
];

const examples = [
  "Startup product launch announcement for a new AI workflow tool",
  "Shopify merchant app release with customer quote and early traction",
  "Funding or partnership update that needs a clear media hook",
  "Local event announcement with SEO snippet and press pitch",
];

const faqs = [
  {
    question: "What is a press release generator?",
    answer:
      "A press release generator turns a company update into launch-ready announcement copy, including a headline, summary, quote, body copy, boilerplate, SEO metadata, social preview text, and media pitch angles.",
  },
  {
    question: "Can SEOCopy write product launch press releases?",
    answer:
      "Yes. Paste the launch brief, customer segment, differentiators, availability details, and proof points. SEOCopy drafts product launch press releases and supporting copy for search, social, and outreach.",
  },
  {
    question: "Does this replace a PR agency?",
    answer:
      "No. It helps founders and small teams get a strong first draft, clarify the news hook, and create reusable launch assets faster. A PR professional can still refine strategy, targeting, and media relationships.",
  },
  {
    question: "How many free press release generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO and launch copy production.",
  },
];

export default function PressReleaseGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Press Release Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate press releases that turn company news into launch momentum.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns product launches, funding updates, partnerships, feature releases, events, and founder notes into press release copy, media pitches, SEO metadata, social previews, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=press-release-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Press Release
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Launch Examples
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
            Launch copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One announcement brief, multiple assets for publicity, search, and conversion.
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
            Example announcement briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft launch copy from the notes already sitting in product docs, investor updates, and founder emails.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=press-release-generator-cta"
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
