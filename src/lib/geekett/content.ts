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

export const homeHero = {
  kicker: "One-woman studio · Bella + Builder Bot Bobby",
  title: "Your Business Is Running On Sticky Notes And A Prayer.",
  sub: "Let’s Give It A System, A Site, And A Sidekick That Actually Ship.",
  body: "Most “tech partners” show up with a deck, a discovery-call stack, and a six-month fog. Geekett is Bella — one woman, one builder bot, and a written process. No committee. No jargon. You write a brief. We send a plan. Then we build.",
  chips: [
    "No meeting marathon",
    "Written process",
    "Phones first",
    "Slightly allergic to boring",
  ],
} as const;

export const services = [
  {
    id: "automation",
    kicker: "01",
    title: "AI Automation Systems",
    headline: "Stop Feeding The Machine. Make The Machine Feed You.",
    lead: "You didn’t start a business to copy-paste the same caption, chase the same follow-up, or open seventeen tabs named “final_FINAL2.” That’s not hustle. That’s a bug.",
    body: "Geekett builds AI automation systems that steal hours back without stealing your voice. Bobby maps the busywork. Bella keeps it human. You keep sounding like you — just faster.",
    punch:
      "This is not a robot takeover. It’s a very polite uprising against copy-paste.",
    benefits: [
      {
        label: "Save Time",
        text: "Recurring tasks run while you’re with clients, not instead of them.",
      },
      {
        label: "Increase Efficiency",
        text: "One lean stack. One playbook. No “we bought another tool” spiral.",
      },
      {
        label: "Grow Revenue",
        text: "Follow-ups go out. Offers stay visible. Leaks in your pipeline get patched.",
      },
    ],
    cta: "Get Free Blueprint",
    href: "/automation",
    note: "Written brief. Bella replies in one business day with fit, scope, and a From $ starting line.",
    icon: "automation" as const,
  },
  {
    id: "mvp-blueprint",
    kicker: "02",
    title: "App MVP Blueprint",
    headline: "From Fuzzy Idea To A Blueprint You Can Build",
    lead: "Have an app idea but no idea what belongs in version one? That’s normal. A pile of notes is not a plan.",
    body: "Send your idea in. You’ll get a personalized App MVP Blueprint — what to build first, what to skip, and how to explain it so people actually get it. Written for founders who want a plan, not a pep talk.",
    punch: "No pitch-deck theater. A document you can actually use.",
    benefits: [
      {
        label: "Save Time",
        text: "Stop rebuilding the same feature list in three notebooks.",
      },
      {
        label: "Increase Efficiency",
        text: "One blueprint. First version, skip list, and a story you can say out loud.",
      },
      {
        label: "Grow Revenue",
        text: "A product story people understand is a product people pay for.",
      },
    ],
    cta: "Submit Your App Idea",
    href: "/geekettapp#mvp-blueprint",
    note: "Bella reads every idea. Your blueprint comes back in writing in 2–3 business days.",
    icon: "blueprint" as const,
  },
  {
    id: "apps",
    kicker: "03",
    title: "App Consulting",
    headline: "Your App Idea Is Not “Too Early.” It’s Under-Briefed.",
    lead: "Everyone has an app idea. Almost nobody has an MVP that a stranger would open twice. That’s the gap. We live in the gap.",
    body: "Geekett app consulting turns a fuzzy “what if” into a build order: what to ship first, what to skip, how to talk about it, and how not to light money on fire in version 1. Bella is the strategist. Bobby is the checklist tyrant (affectionate).",
    punch: "We won’t pretend you need a 40-screen empire. We will pretend Bobby didn’t just highlight “cut this.” He did.",
    benefits: [
      {
        label: "Save Time",
        text: "Stop rebuilding the same feature list in three notebooks.",
      },
      {
        label: "Increase Efficiency",
        text: "One MVP path. One feature map. One launch checklist you can follow on a Tuesday.",
      },
      {
        label: "Grow Revenue",
        text: "A product story people understand is a product people pay for.",
      },
    ],
    cta: "Get MVP Plan",
    href: "/geekettapp#mvp-blueprint",
    note: "Tell us the idea in writing. We’ll send a scoped App Package (from $1,800 CAD) if it’s a match.",
    icon: "apps" as const,
  },
  {
    id: "websites",
    kicker: "04",
    title: "Mobile Responsive Websites",
    headline: "If They Have To Pinch-Zoom, They Already Left.",
    lead: "Your site is not a digital brochure. It’s the employee who never clocks out. If that employee mumbles, loads like 2009, or hides the “hire me” button under a metaphor — you’re paying rent on a ghost town.",
    body: "Geekett builds mobile-first WordPress sites for independent businesses who want a clear offer, a clean structure, and a written build. Not a meeting marathon. Fixed CAD packages. Phones first. Handoff you can actually use.",
    punch: "50% to start. 50% before launch. Written updates — not a calendar hostage situation.",
    benefits: [
      {
        label: "Save Time",
        text: "No six-call “discovery journey.” You brief. We reply. We build.",
      },
      {
        label: "Increase Efficiency",
        text: "One promise. One path. Pages that do a job.",
      },
      {
        label: "Grow Revenue",
        text: "A clear next step on every screen means more people take it.",
      },
    ],
    cta: "Start a Project Brief",
    href: "/project-brief",
    note: "Three short steps. Fit, package, and next steps in writing within one business day. No intro call required.",
    icon: "websites" as const,
  },
] as const;

export const mvpBlueprint = {
  kicker: "App MVP Blueprint",
  headline: "From Fuzzy Idea To A Blueprint You Can Build",
  body: "Have an app idea but no idea what belongs in version one? Send it in. You’ll get a personalized App MVP Blueprint — what to build first, what to skip, and how to explain it so people actually get it. Written for founders who want a plan, not a pep talk.",
  cta: "Submit Your App Idea",
  note: "Bella reads every idea. Your blueprint comes back in writing in 2–3 business days.",
} as const;

export const whyGeekett = {
  eyebrow: "Why Geekett",
  title: "One Woman. One Builder Bot. Real Results.",
  body: "Bella does the strategy, design, and human judgment. Bobby keeps the checklists tidy, the updates rolling, and the scope from wandering into a side quest. We work by message and shared docs. If your favorite vendor’s love language is “circling back,” we are not that vendor.",
  pills: ["Smart apps", "Bright ideas", "Built with heart", "Slightly allergic to boring"],
} as const;

export const automationStrategies = [
  {
    n: "01",
    title: "Follow-Up That Doesn’t Ghost",
    win: "Grow revenue",
    body: "Leads don’t die of disinterest. They die of “I’ll reply later.” A simple sequence — thank-you, next step, nudge — runs while you’re on a call. Humans still send the weird, personal ones.",
    skip: "Don’t automate the close. Automate the silence.",
  },
  {
    n: "02",
    title: "Content Without The 17-Tab Ritual",
    win: "Save time",
    body: "One weekly rhythm. Voice-safe prompts. Drafts in your tone, not ChatGPT’s TED Talk. You approve, schedule, done. Tab 47 can retire.",
    skip: "If it doesn’t sound like you, it doesn’t ship.",
  },
  {
    n: "03",
    title: "Lead Capture That Files Itself",
    win: "Increase efficiency",
    body: "Form → list → tagged → first email. No copy-paste into a spreadsheet named clients_REAL. The next step is obvious for them and for you.",
    skip: "If nobody is visiting, automation won’t invent traffic. Fix the site first.",
  },
  {
    n: "04",
    title: "Client Onboarding On Rails",
    win: "Save time",
    body: "Paid → welcome → intake → kickoff doc. Same warm path every time. You stop rewriting “so excited to work together” at 11pm.",
    skip: "Keep the first live conversation human. The paperwork can be a bot.",
  },
  {
    n: "05",
    title: "Inbox First Drafts, Your Voice",
    win: "Increase efficiency",
    body: "Repeating FAQs get a first draft in your language. You hit send or rewrite the sentence that matters. Bobby loves a snippet library. Bella checks it still sounds like Bella.",
    skip: "Never auto-send anything that could start a fight.",
  },
  {
    n: "06",
    title: "Launch Loops, Not One-Day Fireworks",
    win: "Grow revenue",
    body: "Offers shouldn’t vanish after Tuesday. A small loop: tease, open, reminder, last call, recap. Reusable. Calm. No 40-tool launch circus.",
    skip: "If you don’t have an offer, we won’t automate a void.",
  },
] as const;

export const automationRules = [
  "Automate the repetitive bits. Keep the personality.",
  "One lean stack beats a graveyard of logins.",
  "If you wouldn’t say it out loud, the bot doesn’t send it.",
  "Start with one leak. Patch it. Then pick the next.",
] as const;

export const automationBeats = [
  {
    n: "1",
    title: "Show Us A Messy Week",
    body: "Where time actually goes: follow-ups, content, onboarding, inbox. Written. No intro call.",
  },
  {
    n: "2",
    title: "Pick The Automations That Pay Rent",
    body: "We choose 1–3 plays with a clear From $ line. Not a 40-workflow fantasy map.",
  },
  {
    n: "3",
    title: "Install + A Playbook You Can Run",
    body: "Bella and Bobby set it up, test it, and hand you steps a tired Tuesday can follow.",
  },
] as const;

export const wpProcess = [
  {
    n: "1",
    title: "Send A Brief",
    body: "Tell me what you’re building in writing. No intro call required.",
    icon: "file" as const,
  },
  {
    n: "2",
    title: "Clear Package + Price",
    body: "Fit + fixed CAD package (Refresh, Starter, or Business).",
    icon: "tag" as const,
  },
  {
    n: "3",
    title: "Shared Updates",
    body: "Shared workspace with written updates and short screen recordings.",
    icon: "chat" as const,
  },
  {
    n: "4",
    title: "Launch Guide + Handoff",
    body: "Launch guide and you know exactly what changed.",
    icon: "clip" as const,
  },
] as const;

export const wpTiers = [
  {
    name: "Refresh",
    price: "$1,800",
    icon: "refresh" as const,
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
    icon: "starter" as const,
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
    icon: "business" as const,
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

export const appTiers = [
  {
    name: "Blueprint",
    price: "2–3 days",
    priceSuffix: "turnaround",
    icon: "blueprint" as const,
    badge: "plan" as const,
    badgeLabel: "Written",
    best: "When the idea is in your notes and version one is still a fog.",
    line: "A personalized App MVP Blueprint: what to build first, what to skip, how to talk about it.",
    includes: [
      "Idea in writing",
      "First-version map",
      "Skip list",
      "Story you can say out loud",
    ],
    pay: "Bella reads every idea. Blueprint back in 2–3 business days.",
    cta: "Submit Your App Idea",
    href: "/geekettapp#mvp-blueprint",
  },
  {
    name: "Consulting",
    price: "From $1,800",
    priceSuffix: "CAD",
    icon: "apps" as const,
    badge: "plan" as const,
    badgeLabel: "Proposed",
    best: "When you have an app idea and need a clear path — not another pep talk.",
    line: "A build order: MVP path, feature map, and a launch checklist you can follow.",
    includes: [
      "Idea clarity workshop",
      "MVP scope map",
      "User flow outlines",
      "Tech in plain language",
      "Written handoff",
    ],
    pay: "50% to start, 50% before handoff. Confirm before we start.",
    cta: "Get MVP Plan",
    href: "/geekettapp#ai-apps",
  },
  {
    name: "Automation",
    price: "From $1,800",
    priceSuffix: "CAD",
    icon: "automation" as const,
    badge: "plan" as const,
    badgeLabel: "Proposed",
    best: "When follow-ups, content, or onboarding keep eating the week.",
    line: "Lean AI systems that steal hours back without stealing your voice.",
    includes: [
      "Workflow map",
      "Prompt packs + templates",
      "Simple tool stack",
      "Setup support",
      "Reusable playbook",
    ],
    pay: "50% to begin. Confirm in writing before we start.",
    cta: "Get Free Blueprint",
    href: "/automation",
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
    title: "App Consulting",
    blurb:
      "Turn a fuzzy “what if” into a build order — MVP path, feature map, and a launch checklist Bobby will actually let you keep.",
    href: "/geekettapp#mvp-blueprint",
    cta: "Submit Your App Idea",
    icon: "smartphone",
    mark: "apps" as const,
  },
  {
    id: "wordpress",
    kicker: "02",
    title: "Mobile Responsive Websites",
    blurb:
      "Mobile-first WordPress that sells on a phone. Clear offer, clean structure, written build. Pinch-zoom is not a strategy.",
    href: "/#packages",
    cta: "See website packages",
    icon: "globe",
    mark: "websites" as const,
  },
  {
    id: "marketing",
    kicker: "03",
    title: "AI Automation Systems",
    blurb:
      "Steal hours back without stealing your voice. Lean AI workflows for follow-ups, content, and the tabs named final_FINAL2.",
    href: "/automation",
    cta: "Explore strategies",
    icon: "sparkles",
    mark: "automation" as const,
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
    mark: "starter" as const,
  },
] as const;

export const packages = [
  {
    id: "ai-apps",
    title: "App Consulting",
    price: "From $1,800 CAD",
    priceNote: "Recommended starting line — confirm before launch",
    priceStatus: "proposed" as const,
    bestFor:
      "Founders and creators with an app idea who need a clear MVP path — not another pep talk",
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
      "Start with the smallest version that proves your idea. Bobby loves a tight MVP — fewer features, clearer story, faster launch. He will highlight “cut this.” Affectionately.",
    mailSubject: "App Consulting enquiry",
    cta: "Get MVP Plan",
    mark: "apps" as const,
  },
  {
    id: "wordpress",
    title: "Mobile Responsive Websites",
    price: "From $1,800 CAD",
    priceNote: "Live on geekett.com — Refresh $1,800 · Starter $2,800 · Business $5,500",
    priceStatus: "live" as const,
    bestFor:
      "Independent businesses who need a mobile-first site that sells clearly — not a pretty ghost town",
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
    mailSubject: "Website Package enquiry",
    cta: "Start a Project Brief",
    mark: "websites" as const,
    liveTiers: wpTiers,
  },
  {
    id: "marketing",
    title: "AI Automation Systems",
    price: "From $1,800 CAD",
    priceNote: "Recommended starting line — confirm before launch",
    priceStatus: "proposed" as const,
    bestFor: "Owners who want hours back — not another tool pile and a prompt degree",
    who: "Digital creators and founders who want AI-assisted workflows — content, outreach, or launch rhythms — without sounding like a robot or drowning in apps.",
    includes: [
      "Workflow map tailored to your offers",
      "AI prompt packs and process templates",
      "Tool stack recommendations (keep it simple)",
      "Setup support and a reusable playbook",
      "Tips for staying human while automating the busywork",
    ],
    how: "We learn how you work today → design a lean AI system → Bella and Bobby help you install and test it → you walk away with hours back and a process you can actually run.",
    outcome:
      "Busywork on autopilot. Personality still yours. Follow-ups go out, offers stay visible, and tab 47 finally closes.",
    bobby:
      "Automate the repetitive bits; keep the personality. Bobby’s favourite systems still sound like you.",
    mailSubject: "AI Automation Systems enquiry",
    cta: "Get Free Blueprint",
    mark: "automation" as const,
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
    title: "Offer & Site Clarity Templates",
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
    title: "AI Workflow Starter Pack",
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
    title: "Share Where You Are",
    body: "Idea stage, need-a-website stage, or “please just give me the system” — tell Bella in plain words. A written brief. No intro call required.",
  },
  {
    n: "2",
    title: "Get A Clear Package",
    body: "Scoped deliverables, a From $ price line, and a written process. Bobby helps keep the plan neat. Fit first — then we start.",
  },
  {
    n: "3",
    title: "Build And Launch",
    body: "Shared updates, short screen recordings, friendly handoff, and beginner-friendly guidance so you can ship with confidence.",
  },
] as const;

export const faqs = [
  {
    q: "What’s the difference between a package and a digital product?",
    a: "Packages are custom or guided builds with Bella — App Consulting, mobile-first websites, or AI Automation Systems. Digital products are grab-and-go: guides, templates, and kits from the shop. Many people start with a product, then book a package when they’re ready.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. Geekett is built for beginners and non-technical founders. You’ll get plain-language plans, WordPress builds, and systems you can run without writing code — unless you want to learn, in which case Bobby will cheer from the sidelines.",
  },
  {
    q: "Who’s Builder Bot Bobby?",
    a: "Builder Bot Bobby is Bella’s helpful robot sidekick. He assists with research, checklists, drafts, and keeping builds organized so Bella can focus on strategy, design, and the human touch. One-woman studio + one builder bot. He lives for the list.",
  },
  {
    q: "Can I get a website or automation without an app idea?",
    a: "Absolutely. Mobile Responsive Websites and AI Automation Systems stand on their own. You don’t need an app idea — pick the path that matches where you are.",
  },
  {
    q: "How long do packages take?",
    a: "Most packages land in about 2–6 weeks depending on scope and how quickly content comes back. Shop digital products are instant after purchase.",
  },
  {
    q: "Will you fully build my app?",
    a: "App Consulting focuses on clarity, MVP planning, and launch structure. Full build support can be discussed case by case — Bella will be honest about fit, timeline, and what’s included so there’s no jargon fog.",
  },
  {
    q: "Are the digital products beginner-friendly?",
    a: "Yes. Products like the App Launch Guide are written to be practical, friendly, and jargon-free — designed for first-time builders and idea people.",
  },
  {
    q: "How do I start?",
    a: "Send a Project Brief for a website, open App Studio for app consulting or automation, or grab something from the shop. Or email bella@geekett.com. Bobby will put it on the list.",
  },
] as const;

export const proofCards = [
  {
    title: "The Cash-Plan WordPress Home",
    meta: "Live · geekett.com",
    body: "Fixed CAD packages, a written process, and a Project Brief that replies in one business day. This is the proof that Geekett already sells with clarity.",
  },
  {
    title: "Studio Products In The Lab",
    meta: "Cooking · 8 ventures",
    body: "SubDeck, LaunchDeckAI, Soul Kindred, and five more. The lab is evidence that the studio ships friendly tech — not just plans for other people.",
  },
  {
    title: "Three Documented Proof Examples",
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