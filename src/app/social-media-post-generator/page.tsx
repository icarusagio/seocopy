import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Post Generator",
  description:
    "Generate social media posts, platform-specific post drafts, campaign angles, engagement CTAs, captions, and landing page snippets from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/social-media-post-generator",
  },
  keywords: [
    "social media post generator",
    "AI social media post generator",
    "social media posts",
    "platform-specific post drafts",
    "campaign angles",
    "engagement CTAs",
    "social content ideas",
    "social media copy generator",
  ],
  openGraph: {
    title: "Social Media Post Generator | SEOCopy",
    description:
      "Turn one campaign brief into social media posts, platform-specific drafts, campaign angles, engagement CTAs, and matching landing page snippets.",
    url: "https://seocopy.vercel.app/social-media-post-generator",
    type: "website",
  },
};

const postAssets = [
  {
    label: "Platform-specific post drafts",
    title: "Adapt one message for the channels you actually use",
    body: "Draft LinkedIn thought-starters, Instagram caption variants, X/Twitter hooks, short-form video prompts, and Facebook community posts from the same offer.",
  },
  {
    label: "Campaign angles",
    title: "Turn a product update into a full social content queue",
    body: "Generate launch posts, educational angles, proof-led posts, objection reducers, customer story prompts, and repurposing ideas without starting over for every platform.",
  },
  {
    label: "Engagement CTAs",
    title: "Give each post a specific next step",
    body: "Create comment prompts, save/share asks, demo nudges, newsletter opt-ins, trial CTAs, and landing page snippets that connect social attention to conversion.",
  },
];

const workflow = [
  "Paste the offer, audience, product proof, channel mix, campaign goal, tone, and any launch or promo details.",
  "Add examples, objections, customer language, content pillars, and the action you want readers to take after the post.",
  "Generate social media posts, platform-specific post drafts, campaign angles, engagement CTAs, and reusable caption variants.",
  "Route the best-performing angles into matching landing page copy, email follow-ups, or product page snippets so social traffic sees a consistent promise.",
];

const faqs = [
  {
    question: "What is a social media post generator?",
    answer:
      "A social media post generator turns a campaign, product, or audience brief into social media posts, platform-specific post drafts, campaign angles, captions, hooks, and engagement CTAs.",
  },
  {
    question: "How is this different from the social media caption generator?",
    answer:
      "The social media caption generator focuses on caption copy. This social media post generator plans fuller multi-platform post drafts, campaign angles, engagement prompts, channel-specific structure, and conversion paths from one brief.",
  },
  {
    question: "Can SEOCopy create posts for LinkedIn, Instagram, X, TikTok, and Facebook?",
    answer:
      "Yes. Paste your campaign brief and channel mix to generate platform-specific post drafts for LinkedIn, Instagram, X/Twitter, TikTok or Reels concepts, Facebook posts, and repurposed campaign copy.",
  },
  {
    question: "How many social media post generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, SMS, and social media copy.",
  },
];

export default function SocialMediaPostGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,165,233,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              Social Media Post Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate social media posts that turn campaign ideas into channel-ready copy.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one campaign brief into social media posts, platform-specific post drafts, campaign angles, engagement CTAs, caption variants, and landing snippets that keep the next click consistent.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=social-media-post-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate Social Media Posts
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              Multi-platform workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800 dark:bg-sky-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            Social content assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One campaign brief, multiple post angles for organic and paid social distribution.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {postAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Social-to-site consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair each social post with a landing page promise, proof point, and CTA.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align platform-specific social media posts, engagement CTAs, campaign angles, SEO snippets, and destination-page copy around the same buyer intent.
          </p>
          <Link
            href="/generate?source=social-media-post-generator-cta"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Social media post questions</h2>
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
