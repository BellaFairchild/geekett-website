export const TAGLINE = "Smart apps. Bright ideas. Built with heart.";
export const STUDIO_EMAIL = "bella@geekett.com";
export const LIVE_HOME = "https://geekett.com";
export const LIVE_BRIEF = "https://geekett.com/project-brief/";

export const siteNav = [
  { to: "/", label: "Home" },
  { to: "/geekettapp", label: "App Studio" },
  { to: "/lab", label: "App Lab" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
] as const;

export const wpProcess = [
  {
    n: "1",
    title: "Send a brief",
    body: "Tell me what you’re building in writing. No intro call required.",
    icon: "file" as const,
  },
  {
    n: "2",
    title: "Clear package + price",
    body: "Fit + fixed CAD package (Refresh, Starter, or Business).",
    icon: "tag" as const,
  },
  {
    n: "3",
    title: "Shared updates",
    body: "Shared workspace with written updates and short screen recordings.",
    icon: "chat" as const,
  },
  {
    n: "4",
    title: "Launch guide + handoff",
    body: "Launch guide and you know exactly what changed.",
    icon: "clip" as const,
  },
] as const;

export const wpTiers = [
  {
    name: "Refresh",
    price: "$1,800",
    best: "When the bones are there and the presentation isn’t helping you sell.",
    line: "Tighten an existing site: offer, structure, phone experience, handoff.",
    includes: [
      "Mobile-first pass",
      "Offer / nav clarity",
      "Polish pass",
      "Launch notes",
    ],
    pay: "50% to start, 50% before handoff.",
  },
  {
    name: "Starter",
    price: "$2,800",
    best: "A new site, phones first, with a clear homepage promise.",
    line: "New 5–7 page WordPress site, basic SEO, launch guide.",
    includes: [
      "Strategy + structure",
      "Design / build",
      "Content layout",
      "Basic SEO",
      "Launch guide",
    ],
    pay: "50% to start, 50% before launch.",
  },
  {
    name: "Business",
    price: "$5,500",
    best: "When the site is a real growth tool, not just a brochure.",
    line: "Custom sections, stronger SEO map, two revision rounds, fuller handoff.",
    includes: [
      "Custom layout work",
      "Expanded pages / features",
      "Stronger SEO / content map",
      "Two revision rounds",
      "Fuller launch + handoff",
    ],
    pay: "50% to start, 50% before launch.",
  },
] as const;

export const fitChips = [
  "Solo founders",
  "Service providers",
  "Async / written",
  "Phones first",
] as const;

export const paths = [
  {
    id: "ai-apps",
    kicker: "01",
    title: "AI App Packages",
    blurb:
      "Turn a fuzzy app idea into a clear MVP path, feature map, and launch structure — with Bobby keeping the checklist tidy.",
    href: "/geekettapp#ai-apps",
    cta: "Explore AI apps",
    icon: "smartphone",
  },
  {
    id: "wordpress",
    kicker: "02",
    title: "WordPress Website Packages",
    blurb:
      "Mobile-first WordPress sites with a clear offer, clean structure, and a written build process. No meeting marathon.",
    href: "/#packages",
    cta: "Explore WordPress",
    icon: "globe",
  },
  {
    id: "marketing",
    kicker: "03",
    title: "AI Marketing Systems",
    blurb:
      "Friendly AI workflows that help you create, schedule, and ship marketing without drowning in tools.",
    href: "/geekettapp#marketing",
    cta: "Explore marketing",
    icon: "sparkles",
  },
  {
    id: "shop",
    kicker: "04",
    title: "Digital Product Shop",
    blurb:
      "Grab-and-go guides, templates, and systems you can use today — progress before a full package.",
    href: "/shop",
    cta: "Browse the shop",
    icon: "bag",
  },
] as const;

export const packages = [
  {
    id: "ai-apps",
    title: "AI App Packages",
    price: "From $1,800 CAD",
    priceNote: "Recommended starting line — confirm before launch",
    priceStatus: "proposed" as const,
    bestFor:
      "Founders and creators with an app idea who need a clear MVP path",
    who: "Solo founders, creators, and idea people who have an app concept (or a messy pile of notes) and want a friendly, actionable path from “what if” to “here’s what we build first.”",
    includes: [
      "Idea clarity and positioning workshop (async-friendly)",
      "MVP scope map and feature priorities",
      "User flow outlines and launch checklist",
      "Tech recommendations in plain language",
      "Written handoff you can actually follow",
    ],
    how: "You share your idea → Bella (with Builder Bot Bobby) shapes a clear package → we work in a shared space with written updates → you leave with a plan, and build-support options if it’s a fit.",
    outcome:
      "A beginner-friendly MVP plan and next steps — not a jargon fog. You’ll know what to build first, what to skip, and how to talk about your app.",
    bobby:
      "Start with the smallest version that proves your idea. Bobby loves a tight MVP — fewer features, clearer story, faster launch.",
    mailSubject: "AI App Package enquiry",
    cta: "Ask about AI apps",
  },
  {
    id: "wordpress",
    title: "WordPress Website Packages",
    price: "From $1,800 CAD",
    priceNote: "Live on geekett.com — Refresh $1,800 · Starter $2,800 · Business $5,500",
    priceStatus: "live" as const,
    bestFor:
      "Independent businesses who need a mobile-first site that sells clearly",
    who: "Solo founders and service providers who want a responsive WordPress site with a clear offer — without a meeting-heavy agency process.",
    includes: [
      "Strategy + site structure for phones first",
      "Design / build on WordPress",
      "Content layout and basic SEO foundations",
      "Written updates and short screen recordings",
      "Launch guide and clear handoff",
    ],
    how: "You send a brief → Bella replies with a clear package → we build with shared updates (Bobby keeps the checklist tidy) → you get a launch guide and know exactly what changed.",
    outcome:
      "A site that feels like you, works on mobile, and makes the next step obvious for visitors — refresh, new build, or growth-ready package.",
    bobby:
      "A clear homepage promise beats ten clever sections. Lead with what you help people do — Bobby will remind us if we wander.",
    mailSubject: "WordPress Package enquiry",
    cta: "Open the WordPress brief",
    liveTiers: wpTiers,
  },
  {
    id: "marketing",
    title: "AI Marketing Systems",
    price: "From $1,800 CAD",
    priceNote: "Recommended starting line — confirm before launch",
    priceStatus: "proposed" as const,
    bestFor: "Creators who want smart systems, not another tool pile",
    who: "Digital creators and founders who want AI-assisted marketing workflows — content, outreach, or launch rhythms — without a degree in prompt engineering.",
    includes: [
      "Workflow map tailored to your offers",
      "AI prompt packs and process templates",
      "Tool stack recommendations (keep it simple)",
      "Setup support and a reusable playbook",
      "Tips for staying human while automating the busywork",
    ],
    how: "We learn how you market today → design a lean AI system → Bella and Bobby help you install and test it → you walk away with hours back and a process you can actually run.",
    outcome:
      "Marketing that feels like magic but is really just smart systems — consistent, beginner-friendly, and shaped around your voice.",
    bobby:
      "Automate the repetitive bits; keep the personality. Bobby’s favourite systems still sound like you.",
    mailSubject: "AI Marketing Systems enquiry",
    cta: "Ask about marketing systems",
  },
] as const;

export const shopItems = [
  {
    id: "launch-guide",
    title: "App Launch Guide",
    price: 47,
    priceLabel: "$47 CAD",
    category: "App launch",
    blurb:
      "A first-time builder’s path from idea notes to launch checklist. Practical, friendly, no jargon.",
    icon: "rocket",
    includes: [
      "Idea-to-MVP worksheet",
      "Launch-week checklist",
      "Store listing prompts",
      "What to skip on v1",
    ],
  },
  {
    id: "clarity",
    title: "Offer & site clarity templates",
    price: 37,
    priceLabel: "$37 CAD",
    category: "WordPress",
    blurb:
      "Homepage promise worksheets and page maps so your WordPress site sells before you polish pixels.",
    icon: "map",
    includes: [
      "Homepage promise sheet",
      "5–7 page map",
      "Nav labels that convert",
      "Content gather list",
    ],
  },
  {
    id: "workflows",
    title: "AI workflow starter pack",
    price: 57,
    priceLabel: "$57 CAD",
    category: "AI workflows",
    blurb:
      "Prompt packs and process cards Bobby would approve — save hours without losing your voice.",
    icon: "bot",
    includes: [
      "Weekly content rhythm",
      "Voice-safe prompt pack",
      "Tool stack one-pager",
      "Review checklist",
    ],
  },
] as const;

export const labProjects = [
  {
    name: "SubDeck",
    status: "Cooking",
    type: "SaaS",
    blurb:
      "A calm software subscription manager. Lead with the AI Subscription Auditor — receipts in, savings decisions out.",
    customer: "Creators, freelancers, solo founders",
    priority: "Audit, annual spend, renewal alerts, cancel support.",
  },
  {
    name: "LaunchDeckAI",
    status: "In build",
    type: "SaaS",
    blurb:
      "A calm guided route from app idea to launch. Missions + Astro copilot — not a generic project manager.",
    customer: "First-time mobile app creators",
    priority: "Auth, persistent projects, Missions, core shell, Astro.",
  },
  {
    name: "Soul Kindred",
    status: "Concept",
    type: "Consumer app",
    blurb:
      "An AI companion for adults 30–55. Best friend first, wellness second — connection and calm, not a clinic.",
    customer: "Adults seeking connection and calm",
    priority: "Prove the daily loop: Friend, mood, journal, calm exercise.",
  },
  {
    name: "AppFlowDeck",
    status: "Cooking",
    type: "SaaS",
    blurb:
      "AI-guided planning workspace. Makes the app visible through an App Map, linked tasks, and starter screens.",
    customer: "First-time app creators",
    priority: "App Map, tasks, screen uploads. Defer collaboration.",
  },
  {
    name: "BuildCanvas",
    status: "Beta planned",
    type: "SaaS",
    blurb:
      "A multi-project command center for indie builders: planning, build tracking, SEO/ASO, domains, resources.",
    customer: "Indie builders with several properties",
    priority: "20–30 person private beta with HQ, Blueprint, Kanban.",
  },
  {
    name: "VideoBumpers",
    status: "Cooking",
    type: "Creator tool",
    blurb:
      "Mobile-first 15–60s intros and outros so non-pro creators sound like a show and look like a brand.",
    customer: "Podcasters, coaches, educators, streamers",
    priority: "High-quality templates + dependable voice/export flow.",
  },
  {
    name: "WebinarWorkshops",
    status: "Concept",
    type: "Media",
    blurb:
      "Evergreen webinar business: replay libraries, affiliate funnels, and mobile-first viewing infrastructure.",
    customer: "Experts, affiliates, webinar sellers",
    priority: "One vertical, one curated replay set, one proven funnel.",
  },
  {
    name: "WpDesignerMag",
    status: "Content brand",
    type: "Media",
    blurb:
      "Multimedia publication for the design side of WordPress — mobile-first responsive design, taught with confidence.",
    customer: "WordPress designers and business owners",
    priority: "Connect hub, weekly email, resource shop, first document packs.",
  },
] as const;

export const beats = [
  {
    n: "1",
    title: "Share where you are",
    body: "Idea stage, need-a-website stage, or “please just give me the system” — tell Bella in plain words. A written brief. No intro call required.",
  },
  {
    n: "2",
    title: "Get a clear package",
    body: "Scoped deliverables, a From $ price line, and a written process. Bobby helps keep the plan neat. Fit first — then we start.",
  },
  {
    n: "3",
    title: "Build and launch",
    body: "Shared updates, short screen recordings, friendly handoff, and beginner-friendly guidance so you can ship with confidence.",
  },
] as const;

export const faqs = [
  {
    q: "What’s the difference between a package and a digital product?",
    a: "Packages are custom or guided builds with Bella (AI apps, WordPress, or marketing systems). Digital products are grab-and-go — guides, templates, and kits you can use today from the shop. Many people start with a product, then book a package when they’re ready.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. Geekett is built for beginners and non-technical founders. You’ll get plain-language plans, WordPress builds, and systems you can run without writing code — unless you want to learn, in which case Bobby will cheer from the sidelines.",
  },
  {
    q: "Who’s Builder Bot Bobby?",
    a: "Builder Bot Bobby is Bella’s helpful robot sidekick. He assists with research, checklists, drafts, and keeping builds organized so Bella can focus on strategy, design, and the human touch. One-woman studio + one builder bot.",
  },
  {
    q: "Can I get WordPress or marketing help without an app idea?",
    a: "Absolutely. WordPress Website Packages and AI Marketing Systems stand on their own. You don’t need an app idea — pick the path that matches where you are.",
  },
  {
    q: "How long do packages take?",
    a: "Most packages land in about 2–6 weeks depending on scope and how quickly content comes back. Shop digital products are instant after purchase.",
  },
  {
    q: "Will you fully build my app?",
    a: "AI App Packages focus on clarity, MVP planning, and launch structure. Full build support can be discussed case by case — Bella will be honest about fit, timeline, and what’s included so there’s no jargon fog.",
  },
  {
    q: "Are the digital products beginner-friendly?",
    a: "Yes. Products like the App Launch Guide are written to be practical, friendly, and jargon-free — designed for first-time builders and idea people.",
  },
  {
    q: "How do I start?",
    a: "Send a Project Brief for WordPress, open App Studio for apps and marketing, or grab something from the shop. Or email bella@geekett.com.",
  },
] as const;

export const proofCards = [
  {
    title: "The cash-plan WordPress home",
    meta: "Live · geekett.com",
    body: "Fixed CAD packages, a written process, and a Project Brief that replies in one business day. This is the proof that Geekett already sells with clarity.",
  },
  {
    title: "Studio products in the lab",
    meta: "Cooking · 8 ventures",
    body: "SubDeck, LaunchDeckAI, Soul Kindred, and five more. The lab is evidence that the studio ships friendly tech — not just plans for other people.",
  },
  {
    title: "Three documented proof examples",
    meta: "Priority · Sept 2026 brief",
    body: "The business brief names this as the next proof job. Until real named client quotes exist, pages should not invent a wall of love.",
  },
] as const;

export const planToc = [
  { id: "brief", label: "1. Brief" },
  { id: "audit", label: "2. Audit" },
  { id: "job", label: "3. Job of the page" },
  { id: "decisions", label: "4. Decisions" },
  { id: "ia", label: "5. Architecture" },
  { id: "visual", label: "6. Visual system" },
  { id: "walkthrough", label: "7. Page map" },
  { id: "copy", label: "8. Copy & voice" },
  { id: "pricing", label: "9. Pricing" },
  { id: "conversion", label: "10. Conversion" },
  { id: "phases", label: "11. Phases" },
  { id: "open", label: "12. Open questions" },
] as const;
