import Link from "next/link";

const valueProps = [
  {
    title: "Save hours on SEO production",
    body: "Generate ready-to-publish titles, descriptions, and landing page copy in one pass.",
  },
  {
    title: "Built for conversion",
    body: "Get sharper headlines, stronger CTAs, and copy angles aligned to the action you want.",
  },
  {
    title: "Grounded in SEO best practices",
    body: "Outputs are tuned for metadata length, keyword clarity, and social sharing performance.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "2 generations",
    description: "Perfect for trying the workflow with no signup.",
  },
  {
    name: "Pay Per Use",
    price: "$5",
    description: "Buy a single paid generation whenever you need one more.",
  },
  {
    name: "Monthly",
    price: "$19/mo",
    description: "Unlimited generations for teams shipping landing pages every week.",
  },
];

const useCasePages = [
  {
    title: "AI SEO Copy Generator",
    href: "/ai-seo-copy-generator",
    body: "Search titles, meta descriptions, OG tags, headlines, and CTA variants from a URL or rough offer.",
  },
  {
    title: "SaaS Landing Page Copy Generator",
    href: "/saas-landing-page-copy-generator",
    body: "Hero copy, SEO metadata, feature-benefit sections, objection handling, and CTA variants for SaaS teams.",
  },
  {
    title: "Ecommerce SEO Copy Generator",
    href: "/ecommerce-seo-copy-generator",
    body: "SEO titles, meta descriptions, product-page angles, and campaign copy for ecommerce teams.",
  },
  {
    title: "Shopify SEO Copy Generator",
    href: "/shopify-seo-copy-generator",
    body: "Product titles, meta descriptions, OG tags, and conversion copy for Shopify merchants.",
  },
  {
    title: "Startup SEO Copy Generator",
    href: "/startup-seo-copy-generator",
    body: "Search snippets, hero copy, social previews, and CTA variants for founder-led launches.",
  },
  {
    title: "Meta Tag Generator",
    href: "/meta-tag-generator",
    body: "SEO title tags, meta descriptions, Open Graph copy, and social preview angles for any product page or landing page.",
  },
  {
    title: "Free SEO Copy Generator",
    href: "/free-seo-copy-generator",
    body: "Two free AI generations for SEO titles, meta descriptions, social previews, headlines, and CTA variants.",
  },
  {
    title: "Product Description Generator",
    href: "/product-description-generator",
    body: "Benefit-led ecommerce product descriptions, metadata, and CTA variants for faster merchandising.",
  },
  {
    title: "Landing Page Copy Generator",
    href: "/landing-page-copy-generator",
    body: "Hero headlines, subheadlines, CTAs, and SEO metadata for launches and page refreshes.",
  },
  {
    title: "Meta Description Generator",
    href: "/meta-description-generator",
    body: "Click-worthy meta descriptions, SEO title ideas, and OG copy for pages that need more search traffic.",
  },
  {
    title: "SEO Title Generator",
    href: "/seo-title-generator",
    body: "Search-friendly title tags, snippet copy, and headline variants for pages competing for buyer intent.",
  },
  {
    title: "Website Copy Generator",
    href: "/website-copy-generator",
    body: "Homepage-ready headlines, SEO metadata, social previews, and CTA ideas from a rough offer.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_28%),linear-gradient(180deg,rgba(248,250,252,1),rgba(241,245,249,0.8)_60%,rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.18),_transparent_24%),linear-gradient(180deg,rgba(2,6,23,1),rgba(15,23,42,0.92)_55%,rgba(2,6,23,1))]" />
        <div className="mx-auto flex max-w-7xl flex-col px-6 pb-24 pt-8 lg:px-10">
          <header className="mb-16 flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                SEOCopy
              </p>
            </div>
            <nav className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#pricing" className="transition hover:text-slate-950 dark:hover:text-white">
                Pricing
              </a>
              <Link
                href="/generate"
                className="rounded-full border border-slate-300 px-4 py-2 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:hover:border-white dark:hover:text-white"
              >
                Open Generator
              </Link>
            </nav>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                AI-Powered SEO Copy in Seconds
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
                Generate metadata and landing page copy that reads like it was
                written by a strong growth team.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                SEOCopy turns a URL or product description into SEO titles, meta
                descriptions, OG tags, headlines, subheadlines, and CTA ideas
                you can use immediately.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/generate"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
                >
                  Generate Free
                </Link>
                <a
                  href="#pricing"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
                >
                  View Pricing
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[linear-gradient(155deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 text-white shadow-[0_30px_110px_rgba(15,23,42,0.24)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Live Output Style
                </span>
                <span className="text-sm text-slate-300">60 char SEO title</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    SEO Title
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    Luxury Skincare That Restores Glow Without Irritation
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    Meta Description
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Discover dermatologist-informed skincare for sensitive skin,
                    built to brighten, calm, and convert more clicks into
                    customers.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      Headline
                    </p>
                    <p className="mt-2 text-base font-medium">
                      Calm Skin. Visible Radiance. Zero Guesswork.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      CTA
                    </p>
                    <p className="mt-2 text-base font-medium">Shop the Ritual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-black/10 bg-white/75 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="generator-preview"
        className="mx-auto max-w-7xl px-6 py-12 lg:px-10"
      >
        <div className="rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,245,249,0.86))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,0.72))]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                Generator Preview
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Start with two free generations, then upgrade only if it earns
                its place in your workflow.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Drop in a page URL or describe your offer. SEOCopy returns
                structured SEO assets and landing page copy variants, ready to
                paste into CMS, ads, and new page drafts.
              </p>
              <Link
                href="/generate"
                className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Open the Generator
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["SEO Title", "Meta Description", "OG Tags", "Headlines", "Subheadlines", "CTAs"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                      {item}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Structured output with copy-ready variants and one-click
                      clipboard actions.
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Popular generators
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Start with a focused workflow.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCasePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {page.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {page.body}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                Open generator page →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Simple pricing for testing, one-off work, and always-on production.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ${
                index === 1
                  ? "border-slate-950 bg-slate-950 text-white dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950"
                  : "border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  index === 1
                    ? "text-cyan-200 dark:text-slate-700"
                    : "text-slate-500 dark:text-slate-300"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-5 text-4xl font-semibold tracking-tight">
                {plan.price}
              </p>
              <p
                className={`mt-4 text-base leading-7 ${
                  index === 1
                    ? "text-slate-200 dark:text-slate-800"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {plan.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-300">
          <p>SEOCopy helps teams ship sharper SEO metadata and landing page copy.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="transition hover:text-slate-950 dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/generate"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              Generator
            </Link>
            <a href="#pricing" className="transition hover:text-slate-950 dark:hover:text-white">
              Pricing
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
