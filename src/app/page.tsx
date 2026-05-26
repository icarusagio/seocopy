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
    cta: "Start free",
    href: "/generate",
  },
  {
    name: "Pay Per Use",
    price: "$5",
    description: "Buy a single paid generation whenever you need one more.",
    cta: "Buy one generation",
    href: "/generate?plan=one-time&source=homepage-pricing-card",
  },
  {
    name: "Monthly",
    price: "$19/mo",
    description: "Unlimited generations for teams shipping landing pages every week.",
    cta: "Start monthly",
    href: "/generate?plan=subscription&source=homepage-pricing-card",
  },
];

const pricingTrustBullets = [
  "Try 2 free generations with no signup before you buy.",
  "Keep every title, description, CTA, and page section you generate.",
  "Use one $5 generation for a one-off sprint or cancel monthly access anytime.",
];

const sampleOutputs = [
  {
    vertical: "DTC skincare",
    input: "Sensitive-skin serum launch with a premium positioning.",
    title: "Barrier Repair Serum for Calm, Camera-Ready Skin",
    description:
      "Soothe redness, rebuild your moisture barrier, and get a healthy glow with a dermatologist-informed serum made for sensitive skin.",
    cta: "Build my skincare page",
  },
  {
    vertical: "Local service",
    input: "Emergency plumbing page for homeowners in Austin.",
    title: "Austin Emergency Plumbers Available in 60 Minutes",
    description:
      "Book licensed plumbers for burst pipes, leaks, and clogged drains with upfront pricing, fast arrival windows, and cleanup included.",
    cta: "Write my local SEO page",
  },
  {
    vertical: "B2B SaaS",
    input: "Analytics product for revenue teams trying to reduce churn.",
    title: "Spot Expansion Risks Before Renewal Calls Start",
    description:
      "Turn product usage, support signals, and account notes into renewal-ready insights so customer success teams know where to act first.",
    cta: "Draft my SaaS landing copy",
  },
];

const revenueShortcuts = [
  {
    title: "Launch a product page today",
    body: "Turn a rough offer into SEO metadata, proof bullets, FAQs, and CTA copy for the page most likely to start a checkout.",
    href: "/product-page-seo-generator",
    cta: "Build a product page",
  },
  {
    title: "Fix an underperforming landing page",
    body: "Rewrite the hero, objection handling, pricing CTA, and social preview copy before you buy another traffic test.",
    href: "/landing-page-seo-generator",
    cta: "Rewrite a landing page",
  },
  {
    title: "Ship a revenue email",
    body: "Generate subject lines, preview text, offer framing, and CTA variants for a winback, sale, or launch campaign.",
    href: "/email-marketing-copy-generator",
    cta: "Draft an email campaign",
  },
];

const promptStarters = [
  {
    label: "Product page sprint",
    prompt:
      "Write SEO metadata, proof bullets, FAQs, and a primary CTA for a $79 posture-correcting desk chair aimed at remote workers with back pain.",
    source: "homepage-prompt-starter-product-page",
  },
  {
    label: "Local service sprint",
    prompt:
      "Create a local SEO landing page angle, title, meta description, FAQs, and call CTA for same-day HVAC repair in Phoenix.",
    source: "homepage-prompt-starter-local-service",
  },
  {
    label: "Retention campaign sprint",
    prompt:
      "Draft a winback email, subject line, preview text, SMS variant, and offer CTA for inactive subscribers who bought skincare 90 days ago.",
    source: "homepage-prompt-starter-retention",
  },
];

function promptStarterHref(starter: (typeof promptStarters)[number]) {
  return `/generate?source=${starter.source}&prompt=${encodeURIComponent(starter.prompt)}`;
}

const trialChecklist = [
  {
    step: "1. Paste a ready brief",
    body: "Start from a product, landing page, or retention prompt so the first free run has enough context to produce buyer-facing copy.",
  },
  {
    step: "2. Compare the output to a live page",
    body: "Check the SEO title, meta description, CTA, FAQs, and objection handling against the page or campaign you want to improve.",
  },
  {
    step: "3. Upgrade only for the next revenue asset",
    body: "Use the $5 one-off option when the free output proves useful and you need the next product page, email, or landing page variation.",
  },
];

const conversionSprints = [
  {
    name: "Product page rescue",
    before: "Premium travel mug with lid. Keeps drinks hot. Available in black and silver.",
    after:
      "Leakproof Travel Mug That Keeps Coffee Hot Through the Commute — stainless steel insulation, cup-holder fit, and a spill-safe lid for busy mornings.",
    href: "/generate?source=homepage-before-after-product-page",
  },
  {
    name: "Local service booking",
    before: "We offer pest control services in Dallas. Call us for a quote.",
    after:
      "Dallas Pest Control With Same-Week Appointments — stop ants, roaches, and rodents with licensed technicians, upfront pricing, and family-safe treatment options.",
    href: "/generate?source=homepage-before-after-local-service",
  },
  {
    name: "Retention email winback",
    before: "Come back and shop our sale. Use this coupon before it ends.",
    after:
      "Your favorites are back in stock — take 15% off the routine you loved, plus see three new bundles picked for your last order.",
    href: "/generate?source=homepage-before-after-retention-email",
  },
];

const revenuePathways = [
  {
    audience: "Shopify merchant",
    goal: "Recover carts and product views",
    pages: [
      { label: "Abandoned cart email", href: "/abandoned-cart-email-generator" },
      { label: "Browse abandonment email", href: "/browse-abandonment-email-generator" },
      { label: "Back-in-stock email", href: "/back-in-stock-email-generator" },
    ],
  },
  {
    audience: "Founder launching paid traffic",
    goal: "Turn ad clicks into a clearer page",
    pages: [
      { label: "Landing page SEO", href: "/landing-page-seo-generator" },
      { label: "Google Ads description", href: "/google-ads-description-generator" },
      { label: "Pricing page copy", href: "/pricing-page-copy-generator" },
    ],
  },
  {
    audience: "Agency or content operator",
    goal: "Package repeatable SEO deliverables",
    pages: [
      { label: "SEO audit report", href: "/seo-audit-report-generator" },
      { label: "Content brief", href: "/content-brief-generator" },
      { label: "Case study", href: "/case-study-generator" },
    ],
  },
];

const paidIntentSprints = [
  {
    audience: "Merchant with stock or cart leaks",
    trigger: "Visitors are reaching products, then leaving before checkout.",
    proof: "Start with cart, browse, and back-in-stock messages that can recover already-qualified demand.",
    href: "/generate?source=homepage-paid-intent-merchant-recovery",
  },
  {
    audience: "Founder buying traffic this week",
    trigger: "Ad spend is live, but the landing page does not explain the offer fast enough.",
    proof: "Generate the headline, objection handling, FAQs, and pricing CTA before the next campaign test.",
    href: "/generate?source=homepage-paid-intent-traffic-page",
  },
  {
    audience: "Agency packaging recurring delivery",
    trigger: "Clients need a repeatable SEO or conversion asset instead of another blank-doc kickoff.",
    proof: "Turn one brief into a content brief, audit report, and case-study angle you can sell as a sprint.",
    href: "/generate?source=homepage-paid-intent-agency-sprint",
  },
];

const readyBriefBuilders = [
  {
    segment: "Ecommerce operator",
    outcome: "Recover revenue from carts, browse sessions, or restock demand.",
    prompt:
      "Create a revenue recovery copy brief for an ecommerce store: include the product category, recent buyer objection, offer, urgency reason, email/SMS angle, and CTA so SEOCopy can generate the campaign copy next.",
    source: "homepage-brief-builder-ecommerce-recovery",
  },
  {
    segment: "Paid traffic founder",
    outcome: "Turn a campaign hypothesis into page copy before spend scales.",
    prompt:
      "Create a paid traffic landing page copy brief: include the audience, ad promise, offer, proof points, top objections, pricing risk reversal, and conversion CTA so SEOCopy can generate the page next.",
    source: "homepage-brief-builder-paid-traffic",
  },
  {
    segment: "Agency sprint lead",
    outcome: "Package one client brief into a sellable SEO or conversion deliverable.",
    prompt:
      "Create an agency delivery brief for a client SEO/conversion sprint: include the client niche, target page, buyer pain, proof assets, deliverables needed, review criteria, and next-step CTA.",
    source: "homepage-brief-builder-agency-sprint",
  },
];

function readyBriefBuilderHref(builder: (typeof readyBriefBuilders)[number]) {
  return `/generate?source=${builder.source}&prompt=${encodeURIComponent(builder.prompt)}`;
}

const launchPlaybooks = [
  {
    segment: "Shopify launch",
    trigger: "A product drop or app launch needs one path from listing copy to launch emails.",
    pages: [
      { label: "Shopify App Store Listing", href: "/shopify-app-store-listing-generator" },
      { label: "Shopify App Launch Copy", href: "/shopify-app-launch-copy-generator" },
      { label: "Product Update Email", href: "/product-update-email-generator" },
    ],
    ctaHref: "/generate?source=homepage-launch-playbook-shopify",
  },
  {
    segment: "Paid campaign launch",
    trigger: "A founder is turning a new offer into ads, landing-page proof, and checkout copy.",
    pages: [
      { label: "Google Ads Description", href: "/google-ads-description-generator" },
      { label: "Landing Page A/B Test", href: "/landing-page-ab-test-generator" },
      { label: "Checkout Page Copy", href: "/checkout-page-copy-generator" },
    ],
    ctaHref: "/generate?source=homepage-launch-playbook-paid-campaign",
  },
  {
    segment: "Retention launch",
    trigger: "A merchant needs repeat-purchase copy after the first sale or restock moment.",
    pages: [
      { label: "Post-purchase Email", href: "/post-purchase-email-generator" },
      { label: "Winback Email", href: "/winback-email-generator" },
      { label: "Loyalty Program Email", href: "/loyalty-program-email-generator" },
    ],
    ctaHref: "/generate?source=homepage-launch-playbook-retention",
  },
];

const checkoutReadinessSteps = [
  {
    stage: "1. Pick the asset tied to revenue",
    proof: "Choose a product page, paid landing page, or retention email so the free run maps to a campaign you can ship this week.",
    href: "/generate?source=homepage-checkout-readiness-asset",
  },
  {
    stage: "2. Paste the exact offer and proof",
    proof: "Add audience, offer, objection, proof, urgency, and CTA details before checkout so the next paid generation has sharper inputs.",
    href: "/generate?source=homepage-checkout-readiness-brief",
  },
  {
    stage: "3. Buy only when the next output has a home",
    proof: "Use the $5 one-off generation after you know where the next copy block will be published, tested, or sent.",
    href: "/generate?plan=one-time&source=homepage-checkout-readiness-upgrade",
  },
];

const paidGenerationTriggers = [
  {
    signal: "The free output names a campaign you can ship today",
    action: "Buy one more generation to produce the follow-up asset: SEO metadata plus the launch email, ad variant, or retention CTA.",
    href: "/generate?plan=one-time&source=homepage-paid-generation-trigger-campaign",
  },
  {
    signal: "You found a stronger page angle but need variants",
    action: "Use the $5 generation to create alternate headlines, proof blocks, FAQs, and CTAs before a traffic test.",
    href: "/generate?plan=one-time&source=homepage-paid-generation-trigger-variants",
  },
  {
    signal: "A client or teammate approved the first draft",
    action: "Turn the approval into a second deliverable while the brief is still fresh and buyer context is loaded.",
    href: "/generate?plan=one-time&source=homepage-paid-generation-trigger-approved-brief",
  },
];

const subscriptionUpgradeSignals = [
  {
    signal: "You need more than three copy assets this month",
    action: "Move to monthly when the roadmap includes a product page, launch emails, ads, and SEO refreshes instead of one isolated output.",
    href: "/generate?plan=subscription&source=homepage-subscription-upgrade-signal-roadmap",
  },
  {
    signal: "A paid campaign needs weekly iteration",
    action: "Use unlimited generations to keep headlines, FAQs, objections, and CTA tests moving without deciding on a $5 checkout every run.",
    href: "/generate?plan=subscription&source=homepage-subscription-upgrade-signal-iteration",
  },
  {
    signal: "An agency or operator is shipping for multiple clients",
    action: "Turn monthly access into a repeatable delivery lane for briefs, audits, landing pages, and lifecycle emails across accounts.",
    href: "/generate?plan=subscription&source=homepage-subscription-upgrade-signal-agency",
  },
];

const monthlyOutputPlans = [
  {
    plan: "Merchant retention month",
    cadence: "Generate the product refresh, restock email, winback email, and loyalty follow-up before each campaign window.",
    href: "/generate?plan=subscription&source=homepage-monthly-output-plan-retention",
  },
  {
    plan: "Paid traffic testing month",
    cadence: "Use one subscription to create ad variants, landing-page proof blocks, objection FAQs, and checkout CTA tests every week.",
    href: "/generate?plan=subscription&source=homepage-monthly-output-plan-paid-traffic",
  },
  {
    plan: "Agency delivery month",
    cadence: "Turn each client brief into SEO metadata, landing-page copy, email sequences, and audit-ready recommendations without per-output checkout.",
    href: "/generate?plan=subscription&source=homepage-monthly-output-plan-agency",
  },
];

const subscriptionHandoffKits = [
  {
    kit: "Founder approval kit",
    promise:
      "Create the hero, objection handling, and final CTA variants a founder can approve before paying for another traffic test.",
    href: "/generate?plan=subscription&source=homepage-subscription-handoff-kit-founder",
  },
  {
    kit: "Marketer launch kit",
    promise:
      "Bundle ad copy, landing-page proof blocks, email angles, and reporting notes so the next weekly launch has every asset ready.",
    href: "/generate?plan=subscription&source=homepage-subscription-handoff-kit-marketer",
  },
  {
    kit: "Client delivery kit",
    promise:
      "Turn one client brief into review-ready SEO metadata, campaign copy, and next-step recommendations an agency can send the same day.",
    href: "/generate?plan=subscription&source=homepage-subscription-handoff-kit-client",
  },
];

const subscriptionSuccessCheckpoints = [
  {
    checkpoint: "Week 1: Ship the first revenue asset",
    proof:
      "Use monthly access to turn the approved brief into a product page, landing-page test, or retention email that can go live immediately.",
    href: "/generate?plan=subscription&source=homepage-subscription-success-week-one",
  },
  {
    checkpoint: "Week 2: Create the follow-up variants",
    proof:
      "Generate alternate headlines, proof blocks, and email angles while the first launch data is still fresh.",
    href: "/generate?plan=subscription&source=homepage-subscription-success-variants",
  },
  {
    checkpoint: "Week 4: Package the renewal proof",
    proof:
      "Summarize the shipped assets, winners, and next campaign brief so the subscription feels like a repeatable revenue system.",
    href: "/generate?plan=subscription&source=homepage-subscription-success-renewal",
  },
];

const subscriptionObjectionReducers = [
  {
    objection: "I am not sure I will use it every week",
    answer:
      "Start with one live campaign and use the subscription for the adjacent assets: page refresh, launch email, paid ad variants, and follow-up CTA copy.",
    href: "/generate?plan=subscription&source=homepage-subscription-objection-weekly-use",
  },
  {
    objection: "I need proof before adding another tool",
    answer:
      "Turn the first month into a measurable copy sprint with shipped assets, winning variants, and renewal notes ready for a founder or client review.",
    href: "/generate?plan=subscription&source=homepage-subscription-objection-proof",
  },
  {
    objection: "My team already has scattered prompts",
    answer:
      "Use monthly access to standardize briefs, outputs, and handoff-ready copy so every launch or SEO sprint starts from the same revenue-focused workflow.",
    href: "/generate?plan=subscription&source=homepage-subscription-objection-workflow",
  },
];

const subscriptionRenewalGuides = [
  {
    moment: "Before the monthly plan starts",
    guidance:
      "Pick the three campaign assets that would make the first $19 month obviously useful: one live page, one lifecycle email, and one variant test.",
    href: "/generate?plan=subscription&source=homepage-subscription-renewal-guide-start",
  },
  {
    moment: "Halfway through the first month",
    guidance:
      "Use the subscription to refresh the asset that already shipped, then generate a second angle while campaign context is still current.",
    href: "/generate?plan=subscription&source=homepage-subscription-renewal-guide-midpoint",
  },
  {
    moment: "Before the next billing decision",
    guidance:
      "Package shipped copy, winners, and next briefs into a renewal note so the plan feels tied to output instead of tool access.",
    href: "/generate?plan=subscription&source=homepage-subscription-renewal-guide-decision",
  },
];

const subscriptionExpansionTriggers = [
  {
    trigger: "One campaign becomes three channels",
    action:
      "Use the subscription to turn the winning page angle into email, paid-social, and retargeting variants before context goes stale.",
    href: "/generate?plan=subscription&source=homepage-subscription-expansion-trigger-channels",
  },
  {
    trigger: "A client asks for a faster second sprint",
    action:
      "Keep the approved brief warm and generate the follow-up landing page, SEO snippets, and reporting notes without a new checkout decision.",
    href: "/generate?plan=subscription&source=homepage-subscription-expansion-trigger-client-sprint",
  },
  {
    trigger: "A founder needs weekly launch copy",
    action:
      "Convert product notes into a repeatable weekly rhythm of page tests, lifecycle emails, and proof blocks tied to the same launch goal.",
    href: "/generate?plan=subscription&source=homepage-subscription-expansion-trigger-weekly-launch",
  },
];

const subscriptionCompoundingPrompts = [
  {
    prompt: "Turn the shipped page into follow-up email angles",
    outcome:
      "Keep the same offer, objections, proof, and CTA moving into the next nurture or winback campaign without rebuilding context.",
    href: "/generate?plan=subscription&source=homepage-subscription-compounding-prompt-email-followup",
  },
  {
    prompt: "Turn the winning ad into landing-page variants",
    outcome:
      "Use the monthly plan to convert the strongest paid-social or search hook into hero, proof, FAQ, and CTA tests for the page.",
    href: "/generate?plan=subscription&source=homepage-subscription-compounding-prompt-landing-variants",
  },
  {
    prompt: "Turn the client approval into next-month deliverables",
    outcome:
      "Package the approved angle into SEO snippets, campaign copy, and a renewal-ready handoff before the next client check-in.",
    href: "/generate?plan=subscription&source=homepage-subscription-compounding-prompt-client-renewal",
  },
];

const subscriptionProofLoops = [
  {
    loop: "Weekly shipped-asset receipt",
    action:
      "Generate the page, email, or ad copy plus a short summary of where it shipped so the monthly plan has visible output every week.",
    href: "/generate?plan=subscription&source=homepage-subscription-proof-loop-weekly-receipt",
  },
  {
    loop: "Variant-to-winner note",
    action:
      "Turn a second generation into a quick winner/loser note for headlines, CTAs, or emails so teams can see why the next month is worth keeping.",
    href: "/generate?plan=subscription&source=homepage-subscription-proof-loop-variant-winner",
  },
  {
    loop: "Renewal-ready next brief",
    action:
      "Use the last generation of the month to summarize shipped copy, remaining gaps, and the next revenue brief before the renewal decision arrives.",
    href: "/generate?plan=subscription&source=homepage-subscription-proof-loop-renewal-brief",
  },
];

const subscriptionTeamRollouts = [
  {
    step: "Assign the campaign owner",
    action:
      "Turn monthly access into a named owner, revenue target, and first-page or first-email brief so the subscription starts with accountability.",
    href: "/generate?plan=subscription&source=homepage-subscription-team-rollout-owner",
  },
  {
    step: "Queue the next three assets",
    action:
      "Use the plan to prebuild a product page, paid-traffic variant, and lifecycle email before the team loses launch context.",
    href: "/generate?plan=subscription&source=homepage-subscription-team-rollout-asset-queue",
  },
  {
    step: "Set the weekly review rhythm",
    action:
      "Make every Friday a shipped-copy review: what went live, what variant won, and what brief deserves the next generation.",
    href: "/generate?plan=subscription&source=homepage-subscription-team-rollout-review-rhythm",
  },
];

const subscriptionApprovalPackets = [
  {
    packet: "Budget justification note",
    action:
      "Turn the monthly plan into a plain-language approval memo: expected copy assets, campaign deadline, and why $19 is cheaper than another delayed launch.",
    href: "/generate?plan=subscription&source=homepage-subscription-approval-packet-budget",
  },
  {
    packet: "Stakeholder preview brief",
    action:
      "Generate a preview the founder, marketer, or client can review before checkout so the buyer knows what the first subscription sprint will produce.",
    href: "/generate?plan=subscription&source=homepage-subscription-approval-packet-stakeholder",
  },
  {
    packet: "Implementation handoff",
    action:
      "Map the first month into owner, publish destination, and review cadence so the subscription starts as an operating plan instead of another tool login.",
    href: "/generate?plan=subscription&source=homepage-subscription-approval-packet-handoff",
  },
];

const subscriptionRoiReceipts = [
  {
    receipt: "Shipped asset log",
    action:
      "Turn each monthly generation into a simple record of the page, email, or ad that went live so the plan feels tied to shipped work.",
    href: "/generate?plan=subscription&source=homepage-subscription-roi-receipt-shipped-assets",
  },
  {
    receipt: "Variant decision note",
    action:
      "Summarize which headline, CTA, or email angle should win the next test so stakeholders see the subscription creating decisions, not drafts.",
    href: "/generate?plan=subscription&source=homepage-subscription-roi-receipt-variant-decision",
  },
  {
    receipt: "Next-month ROI brief",
    action:
      "Package the first month’s shipped copy, lessons, and next revenue bet into a renewal-ready brief before another subscription cycle starts.",
    href: "/generate?plan=subscription&source=homepage-subscription-roi-receipt-renewal-brief",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://seocopy.vercel.app/#app",
      name: "SEOCopy",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://seocopy.vercel.app/",
      description:
        "AI SEO metadata and landing page copy generator for founders, marketers, and Shopify merchants.",
      offers: [
        {
          "@type": "Offer",
          name: "Free",
          price: "0",
          priceCurrency: "USD",
          url: "https://seocopy.vercel.app/generate",
          description: "Two free AI SEO copy generations with no signup.",
        },
        {
          "@type": "Offer",
          name: "Pay Per Use",
          price: "5",
          priceCurrency: "USD",
          url: "https://seocopy.vercel.app/generate?plan=one-time",
          description: "One paid SEO or landing page copy generation.",
        },
        {
          "@type": "Offer",
          name: "Monthly",
          price: "19",
          priceCurrency: "USD",
          url: "https://seocopy.vercel.app/generate?plan=subscription",
          description: "Unlimited SEO and landing page copy generations for teams.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://seocopy.vercel.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What can SEOCopy generate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEOCopy generates SEO titles, meta descriptions, Open Graph copy, landing page headlines, subheadlines, CTAs, FAQs, and campaign copy variants from a URL, keyword, product description, or rough offer brief.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try SEOCopy for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The free plan includes two AI generations so marketers and founders can test the workflow before buying a single generation or monthly access.",
          },
        },
        {
          "@type": "Question",
          name: "Who is SEOCopy built for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEOCopy is built for founders, Shopify merchants, content marketers, agencies, and small businesses that need publish-ready SEO metadata and conversion copy quickly.",
          },
        },
      ],
    },
  ],
};

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
    title: "Shopify App Store Listing Generator",
    href: "/shopify-app-store-listing-generator",
    body: "App subtitles, listing copy, merchant-facing benefits, feature bullets, FAQs, screenshot captions, and install CTAs for Shopify app launches.",
  },
  {
    title: "Shopify App Launch Copy Generator",
    href: "/shopify-app-launch-copy-generator",
    body: "Launch emails, Product Hunt blurbs, social posts, App Store update notes, merchant FAQs, SEO snippets, and install CTAs for Shopify app launches.",
  },
  {
    title: "Shopify Email Marketing Generator",
    href: "/shopify-email-marketing-generator",
    body: "Product-drop email campaigns, segmented promo angles, Klaviyo-ready copy blocks, subject lines, preview text, and CTAs for Shopify merchants.",
  },
  {
    title: "Klaviyo Email Generator",
    href: "/klaviyo-email-generator",
    body: "Klaviyo subject lines, preview text, campaign blocks, lifecycle flow copy, segment variants, FAQs, and CTAs for ecommerce teams.",
  },
  {
    title: "Mailchimp Email Generator",
    href: "/mailchimp-email-generator",
    body: "Mailchimp newsletter copy, promo campaigns, audience segment variants, subject lines, preview text, landing snippets, and CTAs from one brief.",
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
    title: "FAQ Generator",
    href: "/faq-generator",
    body: "SEO FAQ questions, answer snippets, schema-ready copy, objection handling, and CTAs for landing pages.",
  },
  {
    title: "Blog Title Generator",
    href: "/blog-title-generator",
    body: "SEO blog titles, snippets, social previews, and CTA angles from one rough topic or keyword.",
  },
  {
    title: "Blog Topic Generator",
    href: "/blog-topic-generator",
    body: "SEO blog topic ideas, search-intent angles, metadata prompts, FAQs, internal links, and CTA direction from one product or keyword brief.",
  },
  {
    title: "Blog Post Outline Generator",
    href: "/blog-post-outline-generator",
    body: "SEO blog outlines, search-intent angles, H2 structures, FAQ sections, metadata, and CTA variants from one topic brief.",
  },
  {
    title: "Blog Post Generator",
    href: "/blog-post-generator",
    body: "SEO blog post drafts, metadata, FAQs, social previews, and CTA angles from one topic, keyword, URL, or content brief.",
  },
  {
    title: "Content Brief Generator",
    href: "/content-brief-generator",
    body: "Search intent, outlines, metadata, FAQ ideas, internal links, and CTAs for SEO content assignments.",
  },
  {
    title: "SEO Content Generator",
    href: "/seo-content-generator",
    body: "SEO titles, meta descriptions, outlines, FAQ ideas, social previews, and CTA variants from one keyword, URL, or offer brief.",
  },
  {
    title: "SEO Audit Report Generator",
    href: "/seo-audit-report-generator",
    body: "Prioritized SEO audit findings, metadata rewrites, content gaps, FAQ ideas, and conversion CTAs from one URL or crawl brief.",
  },
  {
    title: "SEO Keyword Generator",
    href: "/seo-keyword-generator",
    body: "Keyword ideas, search-intent clusters, metadata prompts, FAQ opportunities, and conversion copy briefs from one product or topic.",
  },
  {
    title: "SEO Friendly URL Generator",
    href: "/seo-friendly-url-generator",
    body: "Readable URL slugs, matching metadata, social previews, and CTA variants for product, blog, and landing pages.",
  },
  {
    title: "Schema Markup Generator",
    href: "/schema-markup-generator",
    body: "Schema type recommendations, JSON-LD starter copy, FAQ snippets, metadata, and validation notes for richer search results.",
  },
  {
    title: "How-To Guide Generator",
    href: "/how-to-guide-generator",
    body: "How-to guides, step-by-step tutorial sections, instructional SEO outlines, FAQ schema prompts, metadata, and CTAs from one process brief.",
  },
  {
    title: "Content Calendar Generator",
    href: "/content-calendar-generator",
    body: "SEO content calendar ideas, publishing plans, metadata prompts, FAQ angles, and CTA direction from one product or audience brief.",
  },
  {
    title: "Lead Magnet Generator",
    href: "/lead-magnet-generator",
    body: "Lead magnet ideas, opt-in page copy, SEO snippets, nurture email angles, FAQs, and CTAs from one audience or offer brief.",
  },
  {
    title: "Lead Nurturing Email Generator",
    href: "/lead-nurturing-email-generator",
    body: "Lead nurturing emails, drip campaign copy, segment-aware follow-ups, objection reducers, sales handoff notes, and conversion CTAs from one prospect brief.",
  },
  {
    title: "Coupon Email Generator",
    href: "/coupon-email-generator",
    body: "Coupon emails, promo code announcements, redemption reminders, offer FAQs, urgency angles, and click-ready CTAs from one campaign brief.",
  },
  {
    title: "Loyalty Program Email Generator",
    href: "/loyalty-program-email-generator",
    body: "Loyalty program emails, rewards campaign copy, VIP tier announcements, points reminders, member perks CTAs, and repeat-purchase nudges from one retention brief.",
  },
  {
    title: "Popup Copy Generator",
    href: "/popup-copy-generator",
    body: "Popup copy, exit-intent offers, email capture modals, discount and lead magnet variants, reassurance microcopy, and CTAs from one campaign brief.",
  },
  {
    title: "Homepage Copy Generator",
    href: "/homepage-copy-generator",
    body: "Homepage copy, hero section messaging, homepage section copy, proof blocks, FAQs, and above-the-fold CTAs from one offer brief.",
  },
  {
    title: "Blog Introduction Generator",
    href: "/blog-introduction-generator",
    body: "Search-intent blog introductions, article openers, SEO metadata, social previews, and CTA variants from one topic brief.",
  },
  {
    title: "Blog Conclusion Generator",
    href: "/blog-conclusion-generator",
    body: "Article wrap-ups, recap paragraphs, final CTAs, SEO metadata, and social preview copy from one content brief.",
  },
  {
    title: "Blog Meta Description Generator",
    href: "/blog-meta-description-generator",
    body: "Blog meta descriptions, SERP snippets, social previews, title alternatives, and CTA variants from one article brief.",
  },
  {
    title: "Competitor Comparison Page Generator",
    href: "/competitor-comparison-page-generator",
    body: "Comparison pages, alternative-page positioning, proof sections, FAQs, SEO metadata, and CTAs from one competitor brief.",
  },
  {
    title: "Product Comparison Table Generator",
    href: "/product-comparison-table-generator",
    body: "Product comparison tables, feature grids, alternative-page proof points, FAQs, and CTAs from one product or competitor brief.",
  },
  {
    title: "Product Description Generator",
    href: "/product-description-generator",
    body: "Benefit-led ecommerce product descriptions, metadata, and CTA variants for faster merchandising.",
  },
  {
    title: "AI Product Description Generator",
    href: "/ai-product-description-generator",
    body: "AI product descriptions, feature-to-benefit product copy, ecommerce SEO snippets, and Shopify/Amazon listing angles from one product brief.",
  },
  {
    title: "Product Demo Script Generator",
    href: "/product-demo-script-generator",
    body: "Product demo scripts, demo flow, feature proof moments, objection-handling talk tracks, follow-up CTAs, and FAQs from one product or sales brief.",
  },
  {
    title: "Product Explainer Video Generator",
    href: "/product-explainer-video-generator",
    body: "Product explainer videos, voiceover hooks, problem-solution storyboards, scene-by-scene scripts, and launch CTAs from one product brief.",
  },
  {
    title: "Product FAQ Generator",
    href: "/product-faq-generator",
    body: "Product FAQs, buyer objection answers, PDP FAQ schema snippets, and Shopify product questions from one product brief.",
  },
  {
    title: "Product Review Generator",
    href: "/product-review-generator",
    body: "Product review copy, star-rating summaries, testimonial snippets, review request follow-ups, and SEO proof blocks from one customer-feedback brief.",
  },
  {
    title: "Return Policy Generator",
    href: "/return-policy-generator",
    body: "Return policy copy, refund and exchange rules, shipping cutoff notes, support-reducing FAQs, and trust snippets from one store operations brief.",
  },
  {
    title: "Shipping Policy Generator",
    href: "/shipping-policy-generator",
    body: "Shipping policy copy, delivery timelines, carrier cutoff notes, support-reducing shipping FAQs, and delivery trust snippets from one fulfillment brief.",
  },
  {
    title: "Terms and Conditions Generator",
    href: "/terms-and-conditions-generator",
    body: "Terms and conditions copy, store policy clauses, checkout acceptance language, support-reducing terms FAQs, and trust snippets from one business rules brief.",
  },
  {
    title: "Shopify Product Description Generator",
    href: "/shopify-product-description-generator",
    body: "Shopify-ready product descriptions, SEO metadata, benefit bullets, social previews, and CTAs from rough product notes.",
  },
  {
    title: "Etsy Product Description Generator",
    href: "/etsy-product-description-generator",
    body: "Etsy-ready listing descriptions, marketplace SEO titles, tag angles, benefit bullets, social previews, and CTAs from maker notes.",
  },
  {
    title: "Etsy Product Title Generator",
    href: "/etsy-product-title-generator",
    body: "Etsy product titles, marketplace SEO snippets, tag angles, giftable benefit hooks, and listing CTAs from one handmade or vintage product brief.",
  },
  {
    title: "Amazon Product Description Generator",
    href: "/amazon-product-description-generator",
    body: "Amazon-ready product descriptions, SEO titles, feature bullets, keyword angles, A+ content ideas, and campaign copy from product specs.",
  },
  {
    title: "Amazon A+ Content Generator",
    href: "/amazon-a-plus-content-generator",
    body: "Amazon A+ content modules, Enhanced Brand Content copy, comparison charts, image-copy prompts, brand story blocks, FAQs, and listing CTAs from one product brief.",
  },
  {
    title: "Amazon Product Title Generator",
    href: "/amazon-product-title-generator",
    body: "Amazon listing titles, marketplace SEO snippets, feature-led angles, bullets, and campaign CTAs from one product brief.",
  },
  {
    title: "Amazon Bullet Point Generator",
    href: "/amazon-bullet-point-generator",
    body: "Amazon bullet points, feature bullets, marketplace SEO snippets, benefit-led listing bullets, FAQs, and CTAs from one product brief.",
  },
  {
    title: "Product Page SEO Generator",
    href: "/product-page-seo-generator",
    body: "SEO titles, meta descriptions, benefit bullets, social previews, and CTAs for ecommerce product pages.",
  },
  {
    title: "Collection Page SEO Generator",
    href: "/collection-page-seo-generator",
    body: "Search titles, meta descriptions, collection intros, social previews, and CTAs for Shopify collections and ecommerce category pages.",
  },
  {
    title: "Shopify Collection Description Generator",
    href: "/shopify-collection-description-generator",
    body: "Shopify collection descriptions, SEO metadata, social previews, benefit bullets, and CTA ideas for category pages and gift guides.",
  },
  {
    title: "Shopify Meta Description Generator",
    href: "/shopify-meta-description-generator",
    body: "Shopify product and collection meta descriptions, SEO title ideas, social previews, benefit bullets, and CTA copy for ecommerce search traffic.",
  },
  {
    title: "Shopify Image Alt Text Generator",
    href: "/shopify-image-alt-text-generator",
    body: "Shopify product image alt text, collection image descriptions, SEO captions, filename ideas, and accessibility-friendly variants for ecommerce image updates.",
  },
  {
    title: "Category Description Generator",
    href: "/category-description-generator",
    body: "SEO category descriptions, collection intros, merchandising angles, metadata, FAQs, and CTAs for ecommerce category pages.",
  },
  {
    title: "Small Business SEO Copy Generator",
    href: "/small-business-seo-copy-generator",
    body: "SEO metadata, website copy, service blurbs, FAQs, and CTAs for small businesses turning local interest into calls, bookings, and quote requests.",
  },
  {
    title: "Service Page Copy Generator",
    href: "/service-page-copy-generator",
    body: "SEO metadata, hero copy, proof points, FAQs, and CTA variants for agencies, consultants, and local service businesses.",
  },
  {
    title: "Local SEO Copy Generator",
    href: "/local-seo-copy-generator",
    body: "City-aware metadata, local service page copy, proof bullets, FAQs, and booking CTAs for local businesses and agencies.",
  },
  {
    title: "Real Estate Listing Description Generator",
    href: "/real-estate-listing-description-generator",
    body: "Property descriptions, SEO metadata, social previews, FAQs, and showing CTAs for agents and real estate teams.",
  },
  {
    title: "Restaurant Menu Description Generator",
    href: "/restaurant-menu-description-generator",
    body: "Menu descriptions, restaurant SEO metadata, delivery app blurbs, specials, FAQs, and ordering CTAs from rough dish notes.",
  },
  {
    title: "Google Business Profile Description Generator",
    href: "/google-business-profile-description-generator",
    body: "GBP descriptions, local SEO metadata, service blurbs, Google posts, FAQs, and call-focused CTAs for local businesses.",
  },
  {
    title: "Google Business Profile Post Generator",
    href: "/google-business-profile-post-generator",
    body: "Google Business Profile posts, local offer updates, event promos, service announcements, FAQs, and call-focused CTAs for active local profiles.",
  },
  {
    title: "Google Review Response Generator",
    href: "/google-review-response-generator",
    body: "Google review replies, service recovery responses, local SEO snippets, FAQs, and CTAs for reputation-focused local businesses.",
  },
  {
    title: "Product SEO Title Generator",
    href: "/product-seo-title-generator",
    body: "Buyer-intent product title tags, meta descriptions, social previews, and PDP copy for ecommerce pages.",
  },
  {
    title: "Shopify Product Title Generator",
    href: "/shopify-product-title-generator",
    body: "Shopify product titles, SEO title tags, collection-ready angles, social previews, and PDP copy variants from one product brief.",
  },
  {
    title: "Product Name Generator",
    href: "/product-name-generator",
    body: "Brandable product names, ecommerce listing titles, SEO snippets, social previews, and launch copy angles from one product brief.",
  },
  {
    title: "Product Name Ideas Generator",
    href: "/product-name-ideas-generator",
    body: "Product name ideas, naming territories, SEO listing titles, social previews, and launch copy from one product brief.",
  },
  {
    title: "Product Bullet Point Generator",
    href: "/product-bullet-point-generator",
    body: "Benefit-led product bullets, feature-to-benefit rewrites, SEO metadata, FAQs, and CTAs for Shopify, Amazon, and ecommerce PDPs.",
  },
  {
    title: "Product Comparison Generator",
    href: "/product-comparison-generator",
    body: "Comparison-page copy, alternative-page positioning, proof tables, SEO metadata, FAQs, and CTAs from one competitor brief.",
  },
  {
    title: "Landing Page Copy Generator",
    href: "/landing-page-copy-generator",
    body: "Hero headlines, subheadlines, CTAs, and SEO metadata for launches and page refreshes.",
  },
  {
    title: "Landing Page CTA Generator",
    href: "/landing-page-cta-generator",
    body: "Landing page CTAs, button copy, section-specific calls to action, objection reducers, and conversion microcopy from one offer brief.",
  },
  {
    title: "Landing Page Outline Generator",
    href: "/landing-page-outline-generator",
    body: "Section-by-section page plans, conversion flows, wireframe-ready copy briefs, FAQs, and CTAs from one offer brief.",
  },
  {
    title: "Landing Page SEO Generator",
    href: "/landing-page-seo-generator",
    body: "Landing page SEO, search-intent sections, metadata and H1 ideas, FAQ schema prompts, social previews, and CTA variants from one offer brief.",
  },
  {
    title: "Landing Page Wireframe Generator",
    href: "/landing-page-wireframe-generator",
    body: "Landing page wireframes, section layout blocks, above-the-fold structure, conversion-ready wireframe notes, FAQs, and CTA direction from one offer brief.",
  },
  {
    title: "Landing Page A/B Test Generator",
    href: "/landing-page-ab-test-generator",
    body: "Landing page A/B tests, variant hypotheses, experiment-ready copy blocks, conversion test ideas, FAQs, and CTA directions from one offer brief.",
  },
  {
    title: "B2B Landing Page Copy Generator",
    href: "/b2b-landing-page-copy-generator",
    body: "Demo-focused B2B page copy, proof sections, objection handling, SEO snippets, FAQs, and sales CTAs from one offer brief.",
  },
  {
    title: "Landing Page Headline Generator",
    href: "/landing-page-headline-generator",
    body: "Hero headlines, subheadlines, SEO metadata, social previews, and CTA variants for faster landing page tests.",
  },
  {
    title: "Hero Headline Generator",
    href: "/hero-headline-generator",
    body: "Conversion-focused hero headlines, subheadlines, CTA variants, proof bullets, and SEO snippets from one offer brief.",
  },
  {
    title: "Sales Page Copy Generator",
    href: "/sales-page-copy-generator",
    body: "Long-form sales page headlines, proof sections, objection handling, FAQs, SEO snippets, and CTA variants from one offer brief.",
  },
  {
    title: "Proposal Generator",
    href: "/proposal-generator",
    body: "Client proposal positioning, scope, pricing rationale, proof, FAQs, follow-up copy, and CTA variants from one project brief.",
  },
  {
    title: "Image Alt Text Generator",
    href: "/image-alt-text-generator",
    body: "Accessible image alt text, SEO captions, filename ideas, product image snippets, and metadata variants from one image brief.",
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
    title: "AI Page Title Generator",
    href: "/ai-page-title-generator",
    body: "SEO page titles, meta descriptions, social previews, and CTA ideas from a URL, keyword, or rough page brief.",
  },
  {
    title: "Homepage Title Generator",
    href: "/homepage-title-generator",
    body: "Homepage SEO title tags, meta descriptions, social previews, hero headlines, and CTA copy from a rough offer.",
  },
  {
    title: "Holiday Gift Guide Generator",
    href: "/holiday-gift-guide-generator",
    body: "Holiday gift guide copy, curated product picks, seasonal SEO snippets, email angles, FAQs, and shop-now CTAs from one ecommerce campaign brief.",
  },
  {
    title: "Website Copy Generator",
    href: "/website-copy-generator",
    body: "Homepage-ready headlines, SEO metadata, social previews, and CTA ideas from a rough offer.",
  },
  {
    title: "Copywriting Generator",
    href: "/copywriting-generator",
    body: "Conversion-focused page copy, SEO snippets, social previews, campaign angles, and CTA variants from one product or offer brief.",
  },
  {
    title: "Course Description Generator",
    href: "/course-description-generator",
    body: "Course descriptions, learning outcomes, module summaries, FAQs, SEO snippets, and enrollment CTAs from one course brief.",
  },
  {
    title: "Job Description Generator",
    href: "/job-description-generator",
    body: "Job descriptions, responsibilities, qualifications, candidate FAQs, interview scorecard prompts, and hiring CTAs from one role brief.",
  },
  {
    title: "Customer Feedback Survey Generator",
    href: "/customer-feedback-survey-generator",
    body: "Customer feedback surveys, post-purchase survey questions, NPS prompts, product feedback forms, and retention insight CTAs from one research brief.",
  },
  {
    title: "Customer Retention Email Generator",
    href: "/customer-retention-email-generator",
    body: "Customer retention emails, lifecycle email copy, repeat-purchase CTAs, loyalty offers, renewal reminders, and save-flow FAQs from one segment brief.",
  },
  {
    title: "Marketing Copy Generator",
    href: "/marketing-copy-generator",
    body: "Campaign-ready SEO snippets, landing page headlines, social previews, and CTA variants from one product brief.",
  },
  {
    title: "Advertorial Copy Generator",
    href: "/advertorial-copy-generator",
    body: "Story-led advertorial hooks, proof sections, SEO snippets, FAQs, and CTA variants for native ad and pre-sell page tests.",
  },
  {
    title: "AI Copy Rewriter",
    href: "/ai-copy-rewriter",
    body: "Rewrite rough website, product, ad, and landing page copy into clearer SEO snippets, headlines, social previews, and CTA variants.",
  },
  {
    title: "Product Launch Copy Generator",
    href: "/product-launch-copy-generator",
    body: "Launch page headlines, announcement copy, SEO snippets, social previews, benefit bullets, and CTA variants from one launch brief.",
  },
  {
    title: "Call to Action Generator",
    href: "/call-to-action-generator",
    body: "CTA buttons, supporting microcopy, objection reducers, SEO snippets, and headline angles for pages that need more clicks.",
  },
  {
    title: "Cold Email Generator",
    href: "/cold-email-generator",
    body: "Cold email drafts, subject lines, follow-up sequences, CTA options, and outreach landing snippets from one prospect or offer brief.",
  },
  {
    title: "Influencer Outreach Email Generator",
    href: "/influencer-outreach-email-generator",
    body: "Influencer outreach emails, creator collaboration pitches, affiliate partnership asks, gifted-collab follow-ups, and campaign CTAs from one partnership brief.",
  },
  {
    title: "Brand Voice Generator",
    href: "/brand-voice-generator",
    body: "Brand voice guidelines, tone examples, SEO metadata, landing page copy, and CTA variants from one positioning brief.",
  },
  {
    title: "Brand Story Generator",
    href: "/brand-story-generator",
    body: "Founder stories, About page narratives, proof bullets, SEO snippets, social previews, and CTAs from one positioning brief.",
  },
  {
    title: "Ad Copy Generator",
    href: "/ad-copy-generator",
    body: "Paid search headlines, social ad hooks, landing page copy, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Google Ads Copy Generator",
    href: "/google-ads-copy-generator",
    body: "Paid search headlines, descriptions, landing page angles, SEO snippets, and CTA variants from one PPC brief.",
  },
  {
    title: "Google Ads Description Generator",
    href: "/google-ads-description-generator",
    body: "Responsive search ad descriptions, PPC offer angles, landing page hooks, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Google Ads Headline Generator",
    href: "/google-ads-headline-generator",
    body: "Responsive search ad headlines, keyword-matched PPC angles, landing page hooks, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Microsoft Ads Description Generator",
    href: "/microsoft-ads-description-generator",
    body: "Microsoft Ads descriptions, Bing search ad copy, PPC offer angles, landing page hooks, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Facebook Ad Copy Generator",
    href: "/facebook-ad-copy-generator",
    body: "Facebook ad hooks, primary text, headlines, CTAs, landing page snippets, and paid social SEO copy from one campaign brief.",
  },
  {
    title: "Instagram Ad Copy Generator",
    href: "/instagram-ad-copy-generator",
    body: "Instagram ad copy, Reels hooks, Story ad variants, carousel captions, CTAs, and paid social landing snippets from one campaign brief.",
  },
  {
    title: "Pinterest Ad Copy Generator",
    href: "/pinterest-ad-copy-generator",
    body: "Pinterest ad copy, promoted pin headlines, shopping campaign descriptions, creative angles, FAQs, and save-to-cart CTAs from one visual commerce brief.",
  },
  {
    title: "Reddit Ad Copy Generator",
    href: "/reddit-ad-copy-generator",
    body: "Reddit ad copy, promoted post headlines, community-aware angles, comment-safe proof, FAQs, and conversion CTAs from one subreddit campaign brief.",
  },
  {
    title: "TikTok Ad Copy Generator",
    href: "/tiktok-ad-copy-generator",
    body: "TikTok ad hooks, primary text, Spark Ads angles, creator-style CTAs, landing page snippets, and paid social copy from one campaign brief.",
  },
  {
    title: "UGC Ad Script Generator",
    href: "/ugc-ad-script-generator",
    body: "UGC ad scripts, creator hook ideas, testimonial-style product proof, B-roll prompts, short-form video CTAs, and landing snippets from one campaign brief.",
  },
  {
    title: "Email Subject Line Generator",
    href: "/email-subject-line-generator",
    body: "Subject lines, preview text, landing hooks, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Event Invitation Email Generator",
    href: "/event-invitation-email-generator",
    body: "Event invitation emails, RSVP follow-ups, agenda teasers, reminder copy, FAQs, and attendance CTAs from one event brief.",
  },
  {
    title: "Email Marketing Copy Generator",
    href: "/email-marketing-copy-generator",
    body: "Promotional emails, lifecycle sends, subject lines, preview text, landing snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Email Preview Text Generator",
    href: "/email-preview-text-generator",
    body: "Preview text, preheader pairings, inbox snippets, landing hooks, and CTA variants from one campaign brief.",
  },
  {
    title: "Email Signature Generator",
    href: "/email-signature-generator",
    body: "Email signatures, professional signature copy, founder and sales CTAs, disclaimer snippets, and polished signoffs from one profile brief.",
  },
  {
    title: "Winback Email Generator",
    href: "/winback-email-generator",
    body: "Winback emails, customer reactivation campaigns, lapsed-customer offers, subscription renewal nudges, and CTA variants from one retention brief.",
  },
  {
    title: "Post-Purchase Email Generator",
    href: "/post-purchase-email-generator",
    body: "Post-purchase emails, order confirmation follow-ups, cross-sell recommendations, second-purchase CTAs, FAQs, and SEO snippets from one customer moment.",
  },
  {
    title: "Discount Email Generator",
    href: "/discount-email-generator",
    body: "Discount emails, promo code announcements, limited-time offer angles, coupon redemption CTAs, FAQs, and SEO snippets from one offer brief.",
  },
  {
    title: "Black Friday Email Generator",
    href: "/black-friday-email-generator",
    body: "Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, FAQs, and CTAs from one seasonal offer brief.",
  },
  {
    title: "Referral Email Generator",
    href: "/referral-email-generator",
    body: "Referral emails, friend-invite campaigns, reward reminders, advocate sharing CTAs, FAQs, and SEO snippets from one referral program brief.",
  },
  {
    title: "Checkout Page Copy Generator",
    href: "/checkout-page-copy-generator",
    body: "Checkout page copy, trust-building payment CTAs, shipping and returns reassurance, checkout FAQ snippets, and conversion copy from one checkout brief.",
  },
  {
    title: "Thank You Page Copy Generator",
    href: "/thank-you-page-copy-generator",
    body: "Thank you page copy, post-conversion next steps, upsell and referral CTAs, confirmation page FAQs, and SEO snippets from one offer brief.",
  },
  {
    title: "SMS Marketing Copy Generator",
    href: "/sms-marketing-copy-generator",
    body: "SMS promos, cart nudges, winback texts, opt-out reminders, landing snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Abandoned Cart SMS Generator",
    href: "/abandoned-cart-sms-generator",
    body: "Abandoned cart SMS, Shopify cart recovery texts, discount and urgency reminders, compliance-safe opt-out language, and mobile CTAs from one checkout brief.",
  },
  {
    title: "Newsletter Copy Generator",
    href: "/newsletter-copy-generator",
    body: "Newsletter subject lines, preview text, issue sections, sponsor blurbs, SEO snippets, and CTA variants from one rough email brief.",
  },
  {
    title: "Social Media Caption Generator",
    href: "/social-media-caption-generator",
    body: "Social captions, post hooks, SEO snippets, landing page copy, social previews, and CTA variants from one campaign brief.",
  },
  {
    title: "Social Media Post Generator",
    href: "/social-media-post-generator",
    body: "Social media posts, platform-specific post drafts, campaign angles, engagement CTAs, and landing snippets from one campaign brief.",
  },
  {
    title: "Instagram Caption Generator",
    href: "/instagram-caption-generator",
    body: "Instagram captions, post hooks, landing page copy, SEO snippets, social previews, and CTA variants from one offer brief.",
  },
  {
    title: "Instagram Bio Generator",
    href: "/instagram-bio-generator",
    body: "Instagram bios, creator profile taglines, link-in-bio CTAs, keyword angles, and pinned-post hooks from one profile brief.",
  },
  {
    title: "TikTok Caption Generator",
    href: "/tiktok-caption-generator",
    body: "TikTok captions, short-video hooks, hashtag angles, SEO snippets, social previews, and CTA variants from one campaign brief.",
  },
  {
    title: "Pinterest Pin Description Generator",
    href: "/pinterest-pin-description-generator",
    body: "Pinterest pin descriptions, board SEO copy, keyword angles, idea pin hooks, and CTA variants from one visual campaign brief.",
  },
  {
    title: "Twitter Bio Generator",
    href: "/twitter-bio-generator",
    body: "Twitter/X bios, profile taglines, pinned-post hooks, SEO snippets, social previews, and CTA variants from one profile brief.",
  },
  {
    title: "X Twitter Post Generator",
    href: "/x-twitter-post-generator",
    body: "X/Twitter posts, hooks, threads, launch updates, engagement prompts, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "YouTube Description Generator",
    href: "/youtube-description-generator",
    body: "YouTube descriptions, SEO titles, chapters, pinned comments, social previews, and CTA variants from one video brief.",
  },
  {
    title: "YouTube Title Generator",
    href: "/youtube-title-generator",
    body: "YouTube titles, thumbnail hooks, search angles, description openings, and CTA variants from one video brief.",
  },
  {
    title: "YouTube Script Generator",
    href: "/youtube-script-generator",
    body: "Video scripts, hooks, intros, SEO titles, descriptions, pinned comments, and CTA variants from one creator brief.",
  },
  {
    title: "YouTube Shorts Script Generator",
    href: "/youtube-shorts-script-generator",
    body: "YouTube Shorts scripts, hooks, retention beats, caption overlays, SEO snippets, and CTA variants from one short-form video brief.",
  },
  {
    title: "Podcast Show Notes Generator",
    href: "/podcast-show-notes-generator",
    body: "Podcast show notes, episode summaries, SEO titles, timestamps, newsletter blurbs, social hooks, and CTA variants from one episode brief.",
  },
  {
    title: "Podcast Episode Description Generator",
    href: "/podcast-episode-description-generator",
    body: "Podcast episode descriptions, SEO summaries, app snippets, guest blurbs, show notes hooks, and listener CTAs from one episode brief.",
  },
  {
    title: "Podcast Title Generator",
    href: "/podcast-title-generator",
    body: "Podcast titles, episode hooks, SEO episode titles, show description angles, social teasers, and CTA variants from one episode brief.",
  },
  {
    title: "LinkedIn Post Generator",
    href: "/linkedin-post-generator",
    body: "LinkedIn hooks, founder-led post drafts, proof bullets, SEO snippets, and CTA variants from one product update or campaign brief.",
  },
  {
    title: "LinkedIn Ad Copy Generator",
    href: "/linkedin-ad-copy-generator",
    body: "LinkedIn ad copy, B2B paid social hooks, sponsored content variants, lead-gen CTA angles, landing snippets, and FAQs from one campaign brief.",
  },
  {
    title: "AI Email Writer Generator",
    href: "/ai-email-writer-generator",
    body: "Sales emails, launch announcements, lifecycle nurture copy, follow-ups, subject lines, and CTA variants from one campaign brief.",
  },
  {
    title: "Email Sequence Generator",
    href: "/email-sequence-generator",
    body: "Welcome flows, product launches, sales nurture, abandoned-cart reminders, follow-ups, subject lines, and CTA variants from one campaign brief.",
  },
  {
    title: "Trial Activation Email Generator",
    href: "/trial-activation-email-generator",
    body: "Trial activation emails, onboarding nudges, feature prompts, usage reminders, upgrade CTAs, FAQs, and lifecycle landing snippets from one SaaS trial brief.",
  },
  {
    title: "Churn Reduction Email Generator",
    href: "/churn-reduction-email-generator",
    body: "Churn reduction emails, cancellation-save copy, renewal-risk nudges, retention offers, customer success FAQs, and landing snippets from one customer-risk brief.",
  },
  {
    title: "Product Update Email Generator",
    href: "/product-update-email-generator",
    body: "Product update emails, feature announcement copy, release-note summaries, upgrade CTAs, FAQs, and landing snippets from one launch brief.",
  },
  {
    title: "Product Launch Email Generator",
    href: "/product-launch-email-generator",
    body: "Product launch emails, pre-launch teasers, launch-day announcements, follow-up sequences, FAQs, and conversion CTAs from one go-to-market brief.",
  },
  {
    title: "Review Request Email Generator",
    href: "/review-request-email-generator",
    body: "Review request emails, post-purchase review flows, customer feedback prompts, testimonial collection CTAs, FAQs, and SEO snippets from one customer moment.",
  },
  {
    title: "Abandoned Cart Email Generator",
    href: "/abandoned-cart-email-generator",
    body: "Abandoned cart emails, cart recovery sequences, discount and urgency angles, Shopify recovery copy, FAQs, and SEO snippets from one checkout moment.",
  },
  {
    title: "Back-in-Stock Email Generator",
    href: "/back-in-stock-email-generator",
    body: "Back-in-stock emails, restock alert subject lines, Shopify inventory recovery copy, product-return CTAs, FAQs, and SEO snippets from one restock brief.",
  },
  {
    title: "Back-in-Stock SMS Generator",
    href: "/back-in-stock-sms-generator",
    body: "Back-in-stock SMS alerts, Shopify restock texts, low-stock reminders, compliance-safe opt-out language, and mobile CTAs from one restock brief.",
  },
  {
    title: "Browse Abandonment Email Generator",
    href: "/browse-abandonment-email-generator",
    body: "Browse abandonment emails, product-view recovery flows, personalized product reminders, Shopify browse recovery copy, FAQs, and SEO snippets from one viewed product moment.",
  },
  {
    title: "Welcome Email Generator",
    href: "/welcome-email-generator",
    body: "Welcome emails, onboarding email sequences, first-purchase nurture copy, subscriber activation CTAs, FAQs, and SEO snippets from one signup moment.",
  },
  {
    title: "Sales Email Generator",
    href: "/sales-email-generator",
    body: "Sales emails, demo follow-up emails, proposal follow-up copy, objection-handling CTAs, FAQs, and SEO snippets from one warm pipeline moment.",
  },
  {
    title: "LinkedIn Headline Generator",
    href: "/linkedin-headline-generator",
    body: "LinkedIn profile headlines, recruiter keywords, founder positioning, proof hooks, and CTA variants from one professional profile brief.",
  },
  {
    title: "LinkedIn Carousel Generator",
    href: "/linkedin-carousel-generator",
    body: "LinkedIn carousels, slide-by-slide outlines, hook slides, captions, SEO snippets, and CTA variants from one B2B content brief.",
  },
  {
    title: "LinkedIn Company Page Description Generator",
    href: "/linkedin-company-page-description-generator",
    body: "LinkedIn company About sections, tagline options, specialties, proof bullets, SEO snippets, and follow CTAs from one B2B brand brief.",
  },
  {
    title: "LinkedIn Summary Generator",
    href: "/linkedin-summary-generator",
    body: "LinkedIn About sections, professional profile intros, proof-led story arcs, recruiter keywords, and CTA variants from one profile brief.",
  },
  {
    title: "Pricing Page Copy Generator",
    href: "/pricing-page-copy-generator",
    body: "Pricing page headlines, plan blurbs, FAQs, objection handling, SEO snippets, and CTA variants from one offer brief.",
  },
  {
    title: "Pricing Table Copy Generator",
    href: "/pricing-table-copy-generator",
    body: "Pricing table copy, plan names, feature-grid labels, upgrade nudges, risk reducers, FAQs, and conversion CTAs from one pricing brief.",
  },
  {
    title: "Value Proposition Generator",
    href: "/value-proposition-generator",
    body: "Positioning statements, homepage hero copy, proof bullets, SEO snippets, social previews, and CTA variants from one product brief.",
  },
  {
    title: "Unique Selling Proposition Generator",
    href: "/unique-selling-proposition-generator",
    body: "USP statements, differentiation angles, proof bullets, SEO snippets, FAQs, and CTA variants from one product or service brief.",
  },
  {
    title: "Website Headline Generator",
    href: "/website-headline-generator",
    body: "Homepage headlines, subheadlines, proof bullets, SEO snippets, FAQ ideas, and CTA variants from one website brief.",
  },
  {
    title: "Product Positioning Generator",
    href: "/product-positioning-generator",
    body: "Positioning statements, differentiation angles, messaging pillars, SEO snippets, FAQs, and CTA variants from one product brief.",
  },
  {
    title: "Feature Benefit Generator",
    href: "/feature-benefit-generator",
    body: "Turn raw features and specs into buyer-focused benefits, proof bullets, objection reducers, SEO snippets, and CTA angles.",
  },
  {
    title: "Microcopy Generator",
    href: "/microcopy-generator",
    body: "UX microcopy, form helper text, empty states, confirmations, errors, CTA labels, and SEO snippets from one product flow brief.",
  },
  {
    title: "Case Study Generator",
    href: "/case-study-generator",
    body: "Customer story outlines, interview questions, proof snippets, SEO metadata, pull quotes, and CTA copy from one win brief.",
  },
  {
    title: "Testimonial Generator",
    href: "/testimonial-generator",
    body: "Customer testimonials, review highlights, social proof snippets, SEO metadata, and CTA variants from raw customer feedback.",
  },
  {
    title: "Press Release Generator",
    href: "/press-release-generator",
    body: "Press releases, media pitches, announcement copy, SEO metadata, social previews, and CTA variants from one launch brief.",
  },
  {
    title: "Press Kit Generator",
    href: "/press-kit-generator",
    body: "Company boilerplates, founder bios, product facts, media pitches, FAQs, SEO snippets, and CTAs from one brand or launch brief.",
  },
  {
    title: "Webinar Landing Page Generator",
    href: "/webinar-landing-page-generator",
    body: "Webinar registration pages, agendas, speaker proof, SEO snippets, reminder copy, and CTA variants from one event brief.",
  },
  {
    title: "Webinar Invitation Email Generator",
    href: "/webinar-invitation-email-generator",
    body: "Webinar invitation emails, reminder sequences, agenda teasers, speaker proof, replay follow-ups, and CTA variants from one webinar brief.",
  },
  {
    title: "White Paper Generator",
    href: "/white-paper-generator",
    body: "White paper outlines, executive summaries, research-backed sections, lead magnet CTAs, FAQs, and SEO snippets from one B2B topic brief.",
  },
  {
    title: "Tagline Generator",
    href: "/tagline-generator",
    body: "Brand taglines, slogans, homepage one-liners, SEO snippets, social previews, and CTA variants from one positioning brief.",
  },
  {
    title: "About Us Page Generator",
    href: "/about-us-page-generator",
    body: "About page copy, founder story, mission statements, proof points, FAQs, metadata, and CTAs from rough brand notes.",
  },
  {
    title: "App Store Description Generator",
    href: "/app-store-description-generator",
    body: "App Store and Google Play descriptions, ASO angles, feature bullets, screenshot captions, FAQs, and CTAs from one app brief.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-violet-200 bg-violet-50/80 p-8 shadow-[0_24px_80px_rgba(124,58,237,0.12)] dark:border-violet-300/20 dark:bg-violet-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">
              Revenue pathway finder
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Match the next generator to the buyer outcome.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Three curated paths turn the large generator library into fast choices for merchants,
              founders, and operators who need the next asset that can drive checkout, pipeline, or retention.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {revenuePathways.map((pathway) => (
              <article
                key={pathway.audience}
                className="rounded-[1.5rem] border border-black/10 bg-white/85 p-6 dark:border-white/10 dark:bg-slate-950/45"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
                  {pathway.audience}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {pathway.goal}
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  {pathway.pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-800 transition hover:border-violet-400 hover:bg-white dark:border-violet-300/20 dark:bg-white/5 dark:text-violet-100"
                    >
                      {page.label} →
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-rose-200 bg-rose-50/80 p-8 shadow-[0_24px_80px_rgba(244,63,94,0.12)] dark:border-rose-300/20 dark:bg-rose-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700 dark:text-rose-300">
              Paid-intent action map
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Turn the visitor’s revenue problem into the next generation.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Give high-intent visitors a direct path from the leak they recognize to a tracked generator session,
              reducing the number of choices before the first paid-ready output.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {paidIntentSprints.map((sprint) => (
              <Link
                key={sprint.href}
                href={sprint.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-rose-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-300">
                  {sprint.audience}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {sprint.trigger}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {sprint.proof}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-rose-700 dark:text-rose-300">
                  Open this revenue sprint →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-fuchsia-200 bg-fuchsia-50/80 p-8 shadow-[0_24px_80px_rgba(217,70,239,0.12)] dark:border-fuchsia-300/20 dark:bg-fuchsia-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-700 dark:text-fuchsia-300">
              Ready-to-buy brief builder
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Turn a fuzzy problem into a copy-ready prompt before the free trial.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              High-intent visitors often know the revenue leak but not the inputs SEOCopy needs.
              These prefilled briefs collect the buyer, offer, proof, objection, and CTA details before the first generation.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {readyBriefBuilders.map((builder) => (
              <Link
                key={builder.source}
                href={readyBriefBuilderHref(builder)}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-fuchsia-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-700 dark:text-fuchsia-300">
                  {builder.segment}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {builder.outcome}
                </h3>
                <p className="mt-4 flex-1 rounded-2xl bg-fuchsia-100/70 p-4 text-sm leading-7 text-slate-700 dark:bg-white/10 dark:text-slate-300">
                  {builder.prompt}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-300">
                  Open prefilled brief →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50/80 p-8 shadow-[0_24px_80px_rgba(79,70,229,0.12)] dark:border-indigo-300/20 dark:bg-indigo-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 dark:text-indigo-300">
              Launch playbook router
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Bundle the next three assets for a revenue launch.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              High-intent visitors can move from a launch goal to the exact generator sequence that supports listing copy,
              paid traffic, or retention without browsing the full library first.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {launchPlaybooks.map((playbook) => (
              <article
                key={playbook.segment}
                className="rounded-[1.5rem] border border-black/10 bg-white/85 p-6 dark:border-white/10 dark:bg-slate-950/45"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
                  {playbook.segment}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {playbook.trigger}
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  {playbook.pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-800 transition hover:border-indigo-400 hover:bg-white dark:border-indigo-300/20 dark:bg-white/5 dark:text-indigo-100"
                    >
                      {page.label} →
                    </Link>
                  ))}
                </div>
                <Link
                  href={playbook.ctaHref}
                  className="mt-6 inline-flex text-sm font-semibold text-indigo-700 dark:text-indigo-300"
                >
                  Open launch sprint →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-sky-200 bg-sky-50/80 p-8 shadow-[0_24px_80px_rgba(14,165,233,0.12)] dark:border-sky-300/20 dark:bg-sky-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
              Checkout readiness ladder
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Show visitors when the next paid generation is justified.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Reduce hesitation by turning the free trial into a short decision path: pick a revenue asset,
              sharpen the brief, then buy only when the next output has a specific publishing slot.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {checkoutReadinessSteps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-sky-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {step.stage}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {step.proof}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-sky-700 dark:text-sky-300">
                  Open this checkout step →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-lime-200 bg-lime-50/80 p-8 shadow-[0_24px_80px_rgba(132,204,22,0.12)] dark:border-lime-300/20 dark:bg-lime-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-700 dark:text-lime-300">
              Paid generation triggers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Know the exact moment to spend $5 on the next output.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Convert free-trial momentum into a concrete one-time purchase by showing visitors the revenue signals
              that justify another generation without needing a subscription decision.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {paidGenerationTriggers.map((trigger) => (
              <Link
                key={trigger.href}
                href={trigger.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-lime-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {trigger.signal}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {trigger.action}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-lime-700 dark:text-lime-300">
                  Buy the next $5 output →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-teal-200 bg-teal-50/80 p-8 shadow-[0_24px_80px_rgba(20,184,166,0.12)] dark:border-teal-300/20 dark:bg-teal-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
              Subscription upgrade signals
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Show repeat users when monthly access beats one-off checkout.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Convert serious trial users into the $19/month plan by naming the moments when unlimited generations
              remove friction from ongoing campaigns, launch calendars, and client delivery.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionUpgradeSignals.map((signal) => (
              <Link
                key={signal.href}
                href={signal.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-teal-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {signal.signal}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {signal.action}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-teal-700 dark:text-teal-300">
                  Start monthly when this fits →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/80 p-8 shadow-[0_24px_80px_rgba(16,185,129,0.12)] dark:border-emerald-300/20 dark:bg-emerald-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
              Monthly output plans
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Turn a subscription into a shipping calendar.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Give high-intent visitors concrete monthly use cases so the $19 plan feels like a repeatable
              revenue workflow instead of an abstract unlimited-generation upgrade.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {monthlyOutputPlans.map((plan) => (
              <Link
                key={plan.href}
                href={plan.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-emerald-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {plan.plan}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {plan.cadence}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Open the monthly plan →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50/80 p-8 shadow-[0_24px_80px_rgba(99,102,241,0.12)] dark:border-indigo-300/20 dark:bg-indigo-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 dark:text-indigo-300">
              Subscription handoff kits
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Make monthly outputs easy to approve and ship.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Turn subscription interest into team-ready deliverables so founders, marketers, and agencies know
              exactly what the next paid month will produce after checkout.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionHandoffKits.map((kit) => (
              <Link
                key={kit.href}
                href={kit.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {kit.kit}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {kit.promise}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Start this monthly handoff →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50/80 p-8 shadow-[0_24px_80px_rgba(245,158,11,0.12)] dark:border-amber-300/20 dark:bg-amber-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
              Subscription success checkpoints
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Show subscribers how the first month pays back.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Reduce subscription hesitation by making the first paid month feel measurable: ship one revenue asset,
              create follow-up variants, then package the renewal proof before the next billing decision.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionSuccessCheckpoints.map((checkpoint) => (
              <Link
                key={checkpoint.href}
                href={checkpoint.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-amber-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {checkpoint.checkpoint}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {checkpoint.proof}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-amber-700 dark:text-amber-300">
                  Start this success checkpoint →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-orange-200 bg-orange-50/80 p-8 shadow-[0_24px_80px_rgba(249,115,22,0.12)] dark:border-orange-300/20 dark:bg-orange-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
              Subscription objection reducers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Answer the last questions before monthly checkout.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Convert high-intent visitors who like the output but hesitate on recurring access by turning common doubts
              into tracked subscription-start prompts they can test immediately.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionObjectionReducers.map((objection) => (
              <Link
                key={objection.href}
                href={objection.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-orange-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {objection.objection}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {objection.answer}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-orange-700 dark:text-orange-300">
                  Start this monthly answer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-violet-200 bg-violet-50/80 p-8 shadow-[0_24px_80px_rgba(124,58,237,0.12)] dark:border-violet-300/20 dark:bg-violet-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">
              Subscription renewal guide
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Make the monthly plan feel accountable before checkout.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Help high-intent visitors see exactly how a subscription turns into shipped assets,
              campaign variants, and renewal proof before they commit to recurring access.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionRenewalGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-violet-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {guide.moment}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {guide.guidance}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-violet-700 dark:text-violet-300">
                  Plan this subscription moment →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-fuchsia-200 bg-fuchsia-50/80 p-8 shadow-[0_24px_80px_rgba(217,70,239,0.12)] dark:border-fuchsia-300/20 dark:bg-fuchsia-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-700 dark:text-fuchsia-300">
              Subscription expansion triggers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Show monthly users when to turn one win into the next sprint.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Help high-intent subscribers connect a useful first output to the repeat work that makes recurring access worth keeping.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionExpansionTriggers.map((trigger) => (
              <Link
                key={trigger.href}
                href={trigger.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-fuchsia-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {trigger.trigger}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {trigger.action}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-300">
                  Expand this monthly sprint →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/80 p-8 shadow-[0_24px_80px_rgba(16,185,129,0.12)] dark:border-emerald-300/20 dark:bg-emerald-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
              Subscription compounding prompts
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Turn every monthly output into the next revenue brief.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Give subscribers concrete follow-up prompts so a useful first asset becomes repeatable paid work instead of a one-and-done generation.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionCompoundingPrompts.map((prompt) => (
              <Link
                key={prompt.href}
                href={prompt.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-emerald-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {prompt.prompt}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {prompt.outcome}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Compound this monthly output →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-slate-300/20 dark:bg-slate-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 dark:text-slate-300">
              Subscription proof loops
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Make the next renewal decision easier before checkout.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Give monthly buyers a simple evidence loop: ship an asset, compare variants, and turn the month’s work into the next paid brief before renewal.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionProofLoops.map((loop) => (
              <Link
                key={loop.href}
                href={loop.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {loop.loop}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {loop.action}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Build this proof loop →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50/80 p-8 shadow-[0_24px_80px_rgba(79,70,229,0.12)] dark:border-indigo-300/20 dark:bg-indigo-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 dark:text-indigo-300">
              Subscription team rollout
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Help teams turn monthly access into a launch habit.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Give subscription buyers a simple operating rhythm before checkout: assign ownership, queue the next assets, and review shipped copy every week.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionTeamRollouts.map((rollout) => (
              <Link
                key={rollout.href}
                href={rollout.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {rollout.step}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {rollout.action}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Start this team rollout →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-violet-200 bg-violet-50/80 p-8 shadow-[0_24px_80px_rgba(124,58,237,0.12)] dark:border-violet-300/20 dark:bg-violet-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">
              Subscription approval packets
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Give monthly buyers the internal case before they upgrade.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Reduce checkout hesitation by turning the $19 plan into a budget note, stakeholder preview, and first-month implementation handoff.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionApprovalPackets.map((packet) => (
              <Link
                key={packet.href}
                href={packet.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-violet-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {packet.packet}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {packet.action}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-violet-700 dark:text-violet-300">
                  Build this approval packet →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-sky-200 bg-sky-50/80 p-8 shadow-[0_24px_80px_rgba(14,165,233,0.12)] dark:border-sky-300/20 dark:bg-sky-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
              Subscription ROI receipts
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Make monthly value visible before the next billing cycle.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Help subscription buyers turn generated copy into proof they can share: shipped assets, variant decisions, and the next ROI brief.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {subscriptionRoiReceipts.map((receipt) => (
              <Link
                key={receipt.href}
                href={receipt.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-sky-400 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {receipt.receipt}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {receipt.action}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-sky-700 dark:text-sky-300">
                  Build this ROI receipt →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50/80 p-8 shadow-[0_24px_80px_rgba(14,165,233,0.12)] dark:border-cyan-300/20 dark:bg-cyan-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Revenue sprint shortcuts
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Start with the copy task closest to revenue.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Pick the asset that can unlock a checkout, campaign, or conversion test fastest,
              then use the free generator before deciding whether to pay for more outputs.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {revenueShortcuts.map((shortcut) => (
              <Link
                key={shortcut.href}
                href={shortcut.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-cyan-400 dark:border-white/10 dark:bg-slate-950/50"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {shortcut.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {shortcut.body}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  {shortcut.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Copy-paste prompt starters
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Remove the blank-page step before the first free generation.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Start from a revenue-ready brief, paste it into the generator, and swap in your product,
              audience, proof points, and CTA so the free trial gets to useful output faster.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {promptStarters.map((starter) => (
              <Link
                key={starter.label}
                href={promptStarterHref(starter)}
                className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-white/10 dark:bg-slate-950/40"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {starter.label}
                </h3>
                <p className="mt-4 flex-1 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-600 dark:bg-white/5 dark:text-slate-300">
                  “{starter.prompt}”
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  Open generator with this sprint →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/80 p-8 shadow-[0_24px_80px_rgba(16,185,129,0.12)] dark:border-emerald-300/20 dark:bg-emerald-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
              Free trial activation path
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Know exactly when a free generation is worth paying for.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              The first session now gives visitors a simple quality gate: paste a complete brief,
              judge the generated revenue asset, then buy only when the next output can support a real campaign.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {trialChecklist.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.5rem] border border-black/10 bg-white/85 p-6 dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {item.step}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=homepage-trial-activation-path"
            className="mt-8 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
          >
            Run the two-generation trial →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50/80 p-8 shadow-[0_24px_80px_rgba(245,158,11,0.12)] dark:border-amber-300/20 dark:bg-amber-300/10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
              Before/after conversion proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Show trial visitors the rewrite quality before they spend a free generation.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Concrete before-and-after examples make the upgrade path easier to trust: SEOCopy can turn flat product, service, and retention copy into specific revenue-ready angles.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {conversionSprints.map((sprint) => (
              <Link
                key={sprint.name}
                href={sprint.href}
                className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {sprint.name}
                </h3>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Before
                </p>
                <p className="mt-2 rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  “{sprint.before}”
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                  After
                </p>
                <p className="mt-2 flex-1 rounded-2xl bg-amber-100/70 p-4 text-sm font-medium leading-6 text-slate-800 dark:bg-amber-300/10 dark:text-slate-100">
                  “{sprint.after}”
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-amber-800 dark:text-amber-200">
                  Try this rewrite sprint →
                </span>
              </Link>
            ))}
          </div>
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
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Output proof
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            See the type of publish-ready copy buyers get before they pay.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Each free generation returns concrete SEO assets and conversion angles,
            so founders, merchants, and marketers can judge quality before opening
            a paid checkout.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {sampleOutputs.map((sample) => (
            <article
              key={sample.vertical}
              className="flex h-full flex-col rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {sample.vertical}
              </p>
              <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-600 dark:bg-white/10 dark:text-slate-300">
                <span className="font-semibold text-slate-950 dark:text-white">Input:</span>{" "}
                {sample.input}
              </p>
              <div className="mt-5 flex flex-1 flex-col gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    SEO title
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {sample.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Meta description
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {sample.description}
                  </p>
                </div>
              </div>
              <Link
                href="/generate"
                className="mt-6 inline-flex justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                {sample.cta}
              </Link>
            </article>
          ))}
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
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Pricing
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Simple pricing for testing, one-off work, and always-on production.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50/80 p-5 text-sm leading-6 text-slate-700 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-slate-200">
            <p className="font-semibold text-slate-950 dark:text-white">
              Low-risk checkout promise
            </p>
            <ul className="mt-3 space-y-2">
              {pricingTrustBullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="text-cyan-700 dark:text-cyan-300">
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
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
              <Link
                href={plan.href}
                className={`mt-7 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  index === 1
                    ? "bg-white text-slate-950 hover:bg-cyan-50 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
                    : "bg-slate-950 text-white hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
                }`}
              >
                {plan.cta}
              </Link>
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
