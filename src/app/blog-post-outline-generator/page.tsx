import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Post Outline Generator",
  description:
    "Generate SEO blog post outlines, search-intent angles, H2 structures, FAQ sections, meta descriptions, and CTA copy from one topic or keyword brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/blog-post-outline-generator",
  },
  keywords: [
    "blog post outline generator",
    "AI blog outline generator",
    "SEO blog outline generator",
    "blog content brief generator",
    "article outline generator",
    "content outline generator",
  ],
  openGraph: {
    title: "Blog Post Outline Generator | SEOCopy",
    description:
      "Turn a keyword, topic, or rough content idea into a publishable SEO outline with H2s, FAQ ideas, metadata, and conversion CTAs.",
    url: "https://seocopy.vercel.app/blog-post-outline-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Search intent",
    title: "Clarify the angle before drafting",
    body: "Map the target keyword to reader intent, buying stage, objection, and promise so every section has a reason to exist.",
  },
  {
    label: "Article structure",
    title: "H2s, bullets, and examples from one brief",
    body: "Generate a logical blog outline with section summaries, talking points, examples, internal-link prompts, and FAQ candidates.",
  },
  {
    label: "Conversion path",
    title: "Metadata and CTAs included",
    body: "Pair each outline with SEO title ideas, meta descriptions, Open Graph copy, pull quotes, and CTAs that move readers toward the offer.",
  },
];

const workflow = [
  "Paste the target keyword, working title, audience, offer, and any source notes or examples.",
  "Add search intent, desired CTA, internal links, proof points, and tone constraints.",
  "Generate the article outline, section bullets, FAQ ideas, metadata, social preview, and CTA variants.",
  "Hand the outline to a writer or expand it into a draft without losing the SEO and conversion strategy.",
];

const examples = [
  "Founder-led SaaS blog outline targeting a competitor-alternative keyword",
  "Shopify merchant article outline for seasonal product discovery",
  "Agency content brief for a local service page support article",
  "Product-led SEO article outline with upgrade CTA and internal links",
];

const faqs = [
  {
    question: "What is a blog post outline generator?",
    answer:
      "A blog post outline generator turns a keyword or topic brief into a structured article plan with search intent, H2 sections, talking points, examples, FAQs, metadata, and CTA copy.",
  },
  {
    question: "Can SEOCopy create SEO content briefs?",
    answer:
      "Yes. SEOCopy can turn the audience, keyword, offer, internal links, and proof points into a content brief that writers can use before drafting the full post.",
  },
  {
    question: "Does the outline include meta descriptions?",
    answer:
      "Yes. Each generation can include SEO title ideas, meta descriptions, Open Graph copy, social snippets, and CTA variants alongside the outline.",
  },
  {
    question: "How many free blog outline generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO and content production.",
  },
];

export default function BlogPostOutlineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Blog Post Outline Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO blog outlines that turn keywords into publishable content briefs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns topics, keywords, audience notes, and offers into search-intent angles, H2 structures, section bullets, FAQs, metadata, social previews, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=blog-post-outline-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Blog Outline
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Outline Briefs
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
            Outline assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One topic brief, multiple assets for ranking, writing, and converting.
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
            Example outline briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Build article briefs from the keywords, positioning notes, and product proof already in your backlog.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=blog-post-outline-generator-cta"
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
