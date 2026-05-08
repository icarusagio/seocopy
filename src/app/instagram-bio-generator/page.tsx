import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram Bio Generator",
  description:
    "Generate Instagram bios, creator profile taglines, niche positioning, link-in-bio hooks, keyword angles, and CTA variants from one profile brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/instagram-bio-generator",
  },
  keywords: [
    "Instagram bio generator",
    "AI Instagram bio generator",
    "Instagram profile bio ideas",
    "creator bio generator",
    "business Instagram bio generator",
    "link in bio copy generator",
  ],
  openGraph: {
    title: "Instagram Bio Generator | SEOCopy",
    description:
      "Turn a creator, business, or product profile brief into Instagram bios, profile taglines, keyword angles, link-in-bio CTAs, and social preview copy.",
    url: "https://seocopy.vercel.app/instagram-bio-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "Profile bios",
    title: "Make the first line explain why to follow",
    body: "Generate short Instagram bios for founders, creators, coaches, local businesses, ecommerce brands, and agencies that make the audience and promise clear fast.",
  },
  {
    label: "CTA angles",
    title: "Connect profile visits to clicks",
    body: "Turn the same brief into link-in-bio calls to action, pinned-post hooks, offer blurbs, and profile highlights that point followers toward the next step.",
  },
  {
    label: "Searchable positioning",
    title: "Include niche keywords without sounding robotic",
    body: "Add category phrases, location cues, proof points, audience language, and brand tone so the bio feels natural while supporting Instagram discovery.",
  },
];

const workflow = [
  "Describe the profile: creator, founder, store, service, community, product, or campaign.",
  "Add audience, niche, location if relevant, proof point, offer, tone, and the main link-in-bio goal.",
  "Generate bio variants, headline-style first lines, keyword angles, CTA endings, and pinned-post hooks.",
  "Publish the clearest version on Instagram and reuse the supporting copy in social previews, landing pages, and email signups.",
];

const examples = [
  {
    brief: "Nutrition coach for busy founders",
    output: "Simple high-protein meals for founders who want more energy without tracking every bite. Grab the free 5-day reset ↓",
  },
  {
    brief: "Shopify jewelry store",
    output: "Everyday gold-filled jewelry made for sensitive skin, fast gifting, and no-green-neck confidence. Shop the newest drops ↓",
  },
  {
    brief: "Solo SaaS founder building analytics tool",
    output: "Building clearer product analytics for tiny teams. Sharing growth lessons, dashboard teardowns, and launch notes weekly.",
  },
];

const faqs = [
  {
    question: "What is an Instagram bio generator?",
    answer:
      "An Instagram bio generator turns a profile, product, audience, proof point, and CTA goal into short bio variants, niche positioning lines, link-in-bio prompts, and social copy you can edit before publishing.",
  },
  {
    question: "Can SEOCopy write bios for both creators and businesses?",
    answer:
      "Yes. SEOCopy can generate bios for creators, founders, coaches, local service providers, ecommerce stores, agencies, podcasts, newsletters, and product-led brands.",
  },
  {
    question: "Does the generator include Instagram SEO keywords?",
    answer:
      "Yes. You can include niche, category, audience, location, offer, and proof details so the generated bios include natural searchable phrases without keyword stuffing.",
  },
  {
    question: "How many Instagram bio ideas can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function InstagramBioGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-pink-700 dark:text-pink-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(253,242,248,1),rgba(245,243,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(157,23,77,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-pink-800 dark:border-pink-400/20 dark:bg-pink-400/10 dark:text-pink-200">
              Instagram Bio Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Instagram bios that turn profile visits into followers and clicks.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your niche, audience, offer, proof, tone, and link-in-bio goal into profile bios, creator taglines, keyword angles, pinned-post hooks, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=instagram-bio-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-pink-300 dark:text-slate-950 dark:hover:bg-pink-200"
              >
                Generate Instagram bios
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-700 dark:text-pink-300">
              From profile brief to follow-worthy bio
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-800 dark:bg-pink-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-700 dark:text-pink-300">
            Instagram profile deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One profile brief, multiple bio-ready copy assets.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-700 dark:text-pink-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-200">
            Instagram bio examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn a short profile into a clear reason to follow.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-pink-200">Bio angle</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=instagram-bio-generator"
            className="mt-8 inline-flex rounded-full bg-pink-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-pink-200"
          >
            Generate your Instagram bio
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-700 dark:text-pink-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Instagram bio generator questions
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
