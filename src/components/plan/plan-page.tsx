import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Brand, ViewSwitch } from "@/components/brand";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { planToc, TAGLINE } from "@/lib/geekett/content";

function Chapter({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-14 first:border-t-0 first:pt-0">
      <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-heart">
        {kicker}
      </p>
      <h2 className="mt-2 max-w-3xl font-display text-[1.7rem] font-semibold leading-tight sm:text-[2rem]">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="max-w-full overflow-x-auto rounded-xl border border-line bg-cream">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead className="bg-sand/70 text-ink">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-display font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-line align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-ink-soft">
                  {j === 0 ? <span className="font-medium text-ink">{cell}</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PlanPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <Brand to="/plan" subtitle="Design plan" />
          <ViewSwitch current="plan" />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-14">
        <aside className="hidden lg:block">
          <nav
            className="sticky top-24 space-y-1"
            aria-label="Plan sections"
          >
            {planToc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-sm px-2 py-1.5 text-[0.8rem] text-ink-soft hover:bg-cream hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/"
              className="mt-4 flex items-center gap-1 px-2 py-2 text-[0.8rem] font-medium text-heart"
            >
              Open live prototype
              <ArrowRight className="size-3.5" />
            </Link>
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl">
          <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bobby">
            Geekett · September 2026
          </p>
          <h1 className="mt-3 font-display text-[2.05rem] font-semibold leading-[1.1] break-words sm:text-[3rem]">
            Updated design plan for geekett.com
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            This is the main Geekett.com website — WordPress packages, App
            Studio, shop, and project brief in one place. Not a sibling of the
            old cash-plan page. This plan reviewed what’s live, the reference
            mock, and the e-business briefs, then the site was built as the
            studio home.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="live">Live home audited</Badge>
            <Badge variant="plan">Mock reviewed</Badge>
            <Badge variant="bobby">9-project briefs</Badge>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/">Open the prototype</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#decisions">Jump to decisions</a>
            </Button>
          </div>

          <Chapter id="brief" kicker="01 · Brief" title="What this page is for">
            <p>
              Geekett is Bella Fairchild’s founder-led studio. The live homepage
              is a focused cash plan: mobile-first WordPress sites, three fixed
              CAD packages, a written process, and a Project Brief. That page
              should stay exactly what it is.
            </p>
            <p>
              <span className="font-medium text-ink">/geekettapp</span> does a
              different job. It is the App Studio landing — the place a visitor
              goes when they have an app idea, want an AI marketing system, want
              a digital product, or want to see what Bella is building. The
              tagline does the brand work the cash-plan home cannot:
            </p>
            <blockquote className="rounded-xl border border-line bg-cream px-5 py-4 font-display text-xl font-semibold text-ink">
              {TAGLINE}
            </blockquote>
          </Chapter>

          <Chapter id="audit" kicker="02 · Audit" title="What we reviewed">
            <p>
              Three sources. They agree on voice. They disagree on what the
              website is for.
            </p>
            <Table
              headers={["Source", "What it is", "What it actually sells"]}
              rows={[
                [
                  "geekett.com home",
                  "Live cash-plan WordPress page",
                  "Refresh $1,800 · Starter $2,800 · Business $5,500 CAD. Brief → package → written updates → handoff. Bobby as sidekick. No shop, no App Lab, no AI app packages.",
                ],
                [
                  "geekett.com/geekettapp",
                  "Does not exist (empty / unpublished)",
                  "The slug is reserved in the mock. Nothing for a visitor to land on.",
                ],
                [
                  "Reference mock",
                  "Copy + IA exploration for /geekettapp",
                  "Four paths (AI apps, WordPress, marketing, shop), App Lab (3 of 9 projects), FAQ, Build List. Prices left as $[PRICE]. Fake wall of love. Hero is a package laundry list.",
                ],
                [
                  "E-business briefs",
                  "9-project portfolio, Sept 2026",
                  "Geekett studio priority: focused home (done), project brief (done), starter shop, welcome sequence, three documented proof examples. Offer is broader than WordPress: vibe-coded apps, automations, digital resources, curated tools.",
                ],
              ]}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-cream p-4">
                <p className="font-display text-sm font-semibold text-ink">Keep from the live home</p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {[
                    "Written process, no meeting marathon",
                    "Fixed CAD honesty",
                    "Bobby as helper, not a replacement for Bella",
                    "Project Brief as the conversion engine",
                    "Phones first",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-bobby" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-cream p-4">
                <p className="font-display text-sm font-semibold text-ink">Gaps in the mock</p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {[
                    "TBD prices next to a live $1,800 offer",
                    "WordPress restated without the real tiers",
                    "Only 3 of 8 lab projects",
                    "Invented testimonials",
                    "Shop with no prices and a self-linking CTA",
                    "Hero that lists offerings instead of making a promise",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-heart" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Chapter>

          <Chapter id="job" kicker="03 · Job" title="The job of /geekettapp">
            <p>
              One sentence: <span className="font-medium text-ink">help a founder pick a path without sending them into a second homepage that competes with WordPress.</span>
            </p>
            <p>That means the page must do four things, in this order:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Name the studio (Bella + Bobby, Canadian, beginner-friendly).</li>
              <li>Offer four clear paths, with WordPress pointing back to the cash-plan home.</li>
              <li>Prove the studio ships — via the lab, not fake quotes.</li>
              <li>Capture two lists: a Studio Brief, and the Build List (welcome sequence).</li>
            </ol>
            <p>
              It is not a replacement for geekett.com. It is not a 9-product
              SaaS marketing site. It is the umbrella page the briefs describe:
              services, products, affiliates later, audience now.
            </p>
          </Chapter>

          <Chapter id="decisions" kicker="04 · Decisions" title="The calls this plan makes">
            <Table
              headers={["Decision", "Choice", "Why"]}
              rows={[
                [
                  "Relationship to home",
                  "Sibling, not successor",
                  "The cash-plan home is already converting. Do not dilute $1,800–$5,500 WordPress with a vague studio homepage.",
                ],
                [
                  "Hero",
                  "Lead with the tagline",
                  "“Smart apps. Bright ideas. Built with heart.” is unique, memorable, and not used as the H1 on the live home. The mock’s laundry-list H1 is a sitemap, not a promise.",
                ],
                [
                  "Hero media",
                  "Geekett character still, Bobby not in the clip",
                  "Matches the mock’s own art direction. Video can slot in later. Bobby appears in How we work.",
                ],
                [
                  "WordPress module",
                  "Show live tiers + link to Project Brief",
                  "The mock hid real prices behind $[PRICE]. Honesty is the brand. Deep WordPress selling stays on the cash-plan home.",
                ],
                [
                  "App & marketing prices",
                  "From $1,800 CAD (proposed)",
                  "Same floor as Refresh so the studio feels like one pricing logic. Mark as proposed until Bella confirms.",
                ],
                [
                  "Shop",
                  "Three SKUs, real CAD prices",
                  "Brief says starter shop. $37 / $47 / $57. Request/email until a cart exists.",
                ],
                [
                  "App Lab",
                  "All 8 ventures, honest status",
                  "Mock showed 3. The briefs have 8 besides Geekett itself. Status language from each brief’s business priority.",
                ],
                [
                  "Social proof",
                  "Studio proof, no invented quotes",
                  "Sarah L. / Elena M. / David K. / Jess T. read as filler. Brief priority is three documented proof examples — don’t fake the wall.",
                ],
                [
                  "How we work",
                  "Move above shop",
                  "Trust before merchandise. The mock buried Bella and Bobby after the shop.",
                ],
                [
                  "Primary conversion",
                  "Studio Brief + Build List",
                  "Mailto-only is a dead end. Mirror the live Project Brief with a path picker. Build List starts the welcome sequence.",
                ],
              ]}
            />
          </Chapter>

          <Chapter id="ia" kicker="05 · Architecture" title="Site map around the new page">
            <Table
              headers={["URL", "Role", "Notes"]}
              rows={[
                [
                  "geekett.com/",
                  "Cash-plan WordPress home",
                  "Unchanged. Add one quiet link: “App Studio → /geekettapp”.",
                ],
                [
                  "geekett.com/geekettapp/",
                  "App Studio landing",
                  "This page. Four paths, lab, starter shop, brief, list.",
                ],
                [
                  "geekett.com/project-brief/",
                  "WordPress brief (live)",
                  "Keep. WordPress CTAs on /geekettapp deep-link here.",
                ],
                [
                  "Future /shop",
                  "Cart + delivery",
                  "Not required for launch. Email-request is enough for three SKUs.",
                ],
                [
                  "Future /lab/*",
                  "Per-product pages",
                  "Only when a product has its own story. Lab cards can stay unlinked until then.",
                ],
              ]}
            />
            <p>
              Navigation on /geekettapp: Packages, App Lab, Shop, About, Contact.
              Header CTA: See packages. Secondary: Shop. Footer always offers
              the cash-plan home so WordPress buyers never get lost.
            </p>
          </Chapter>

          <Chapter id="visual" kicker="06 · Visual" title="Pink + teal, from the mascots">
            <p>
              The live home is already clear and written. /geekettapp should
              feel like the same person, with more character — Geekett pink,
              Bobby teal, cool white paper. No cream-brown studio palette.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Paper", "bg-paper", "Pink white"],
                ["Ink", "bg-ink", "Cool charcoal"],
                ["Heart", "bg-heart", "Geekett pink"],
                ["Bobby", "bg-bobby", "Visor teal"],
              ].map(([name, swatch, note]) => (
                <div key={name} className="overflow-hidden rounded-lg border border-line">
                  <div className={`h-16 ${swatch}`} />
                  <div className="bg-cream px-3 py-2">
                    <p className="text-sm font-medium text-ink">{name}</p>
                    <p className="text-xs text-muted">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Type: <span className="font-medium text-ink">Sora</span> for
              display, <span className="font-medium text-ink">DM Sans</span> for
              body — carried from the mock. Characters: the Geekett mascot in
              the hero; Bobby in How we work. No emoji icons. No purple AI glow.
              No fake dashboard screenshots.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <img
                src="/characters/geekett-full.webp"
                alt="Proposed Geekett character"
                className="mx-auto h-64 w-auto object-contain"
              />
              <img
                src="/characters/bobby.webp"
                alt="Proposed Builder Bot Bobby"
                className="mx-auto h-64 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted">
              Official Geekett character (full-body, resting, and app-orbs poses)
              and Builder Bot Bobby, as supplied.
            </p>
          </Chapter>

          <Chapter id="walkthrough" kicker="07 · Page map" title="Section by section">
            <Table
              headers={["Section", "What changed vs mock", "Job"]}
              rows={[
                [
                  "Hero",
                  "Tagline as H1. Character still. Three proof chips.",
                  "Name the studio and invite a path.",
                ],
                [
                  "Four ways",
                  "Kept. Real icons instead of emoji.",
                  "Orientation. Four equal doors.",
                ],
                [
                  "Deep dives",
                  "Live WP tiers. Proposed $1,800 floor for apps and marketing. Bobby tips kept.",
                  "Scope, price, fit.",
                ],
                [
                  "How we work",
                  "Moved up. Character pair. Three beats from the live process.",
                  "Trust. Human + bot.",
                ],
                [
                  "App Lab",
                  "8 cards with status from the briefs, not 3 dead links.",
                  "Proof of shipping.",
                ],
                [
                  "Shop",
                  "Prices. Request CTA. Starter set of 3.",
                  "Low-friction progress.",
                ],
                [
                  "Studio proof",
                  "Replaces wall of love.",
                  "Honesty until real quotes exist.",
                ],
                [
                  "FAQ",
                  "Kept, plus a cash-plan pointer.",
                  "Objection handling.",
                ],
                [
                  "Build List",
                  "Kept as the welcome-sequence capture.",
                  "Audience.",
                ],
                [
                  "Studio Brief",
                  "Path picker form, not only mailto.",
                  "The conversion.",
                ],
              ]}
            />
          </Chapter>

          <Chapter id="copy" kicker="08 · Copy" title="Voice stays. Structure gets sharper.">
            <p>
              Keep the mock’s voice: plain, warm, slightly funny, never agency.
              “No jargon fog.” “No meeting marathon.” “Bobby files the nice
              emails first. (Kidding. Mostly.)”
            </p>
            <p>
              Tighten the hero. The mock asked one sentence to carry packages,
              WordPress, marketing, and a shop. That’s a menu. The tagline is
              the promise; the subhead is the menu.
            </p>
            <div className="rounded-xl border border-line bg-cream p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Proposed hero</p>
              <p className="mt-2 font-display text-2xl font-semibold text-ink">{TAGLINE}</p>
              <p className="mt-2 text-sm leading-relaxed">
                Geekett is Bella Fairchild’s App Studio — packages for AI apps,
                mobile-first WordPress, and marketing systems, plus a shop of
                grab-and-go tools. Clear packages. Real deliverables. No jargon fog.
              </p>
            </div>
          </Chapter>

          <Chapter id="pricing" kicker="09 · Pricing" title="One floor. Honest labels.">
            <Table
              headers={["Offer", "Price", "Status"]}
              rows={[
                ["WordPress Refresh", "$1,800 CAD", "Live on geekett.com"],
                ["WordPress Starter", "$2,800 CAD", "Live"],
                ["WordPress Business", "$5,500 CAD", "Live"],
                ["AI App Packages", "From $1,800 CAD", "Proposed — confirm"],
                ["AI Marketing Systems", "From $1,800 CAD", "Proposed — confirm"],
                ["App Launch Guide", "$47 CAD", "Proposed starter SKU"],
                ["Offer & site clarity templates", "$37 CAD", "Proposed starter SKU"],
                ["AI workflow starter pack", "$57 CAD", "Proposed starter SKU"],
              ]}
            />
            <p>
              Why $1,800 as the studio floor: it already exists. A visitor who
              sees Refresh at $1,800 and “AI apps from $TBD” will not trust
              either. Match the floor, then let Bella raise app/build-partner
              work case by case. Payment language can stay 50% to start, 50%
              before handoff — same as WordPress.
            </p>
          </Chapter>

          <Chapter id="conversion" kicker="10 · Conversion" title="Two captures, one written process">
            <p>
              The live site already taught us the conversion: a short written
              brief, reply in one business day, no calls. /geekettapp should
              not invent a calendar booking flow.
            </p>
            <ul className="space-y-2">
              <li>
                <span className="font-medium text-ink">Primary.</span> Studio
                Brief — name, email, path, a few sentences. Production should
                share the same queue as /project-brief, with a path field.
              </li>
              <li>
                <span className="font-medium text-ink">Secondary.</span> Build
                List — first name + email. This is the welcome sequence named
                in the Geekett brief.
              </li>
              <li>
                <span className="font-medium text-ink">WordPress escape hatch.</span>{" "}
                Every WP module links to the live Project Brief so that revenue
                path never waits on this page’s form.
              </li>
            </ul>
          </Chapter>

          <Chapter id="phases" kicker="11 · Phases" title="Ship the page, then the shop, then the proof">
            <div className="grid gap-3">
              {[
                [
                  "Phase 1 — Publish /geekettapp",
                  "This prototype’s IA and copy. Live WP prices. Proposed app/marketing floor marked clearly. Studio Brief emails Bella. Build List into the welcome sequence. Quiet link from the cash-plan home.",
                ],
                [
                  "Phase 2 — Starter shop that actually delivers",
                  "Three SKUs, checkout, instant download. Until then, request-via-email is honest.",
                ],
                [
                  "Phase 3 — Three documented proof examples",
                  "Replace Studio proof with named, permitted stories. Only then consider a wall of love.",
                ],
                [
                  "Phase 4 — Lab pages, not a lab grid",
                  "Give LaunchDeckAI, SubDeck, or Soul Kindred their own URL when the product can carry a visit. Don’t link “View project” into nowhere.",
                ],
              ].map(([title, body], i) => (
                <div key={title} className="rounded-xl border border-line bg-cream p-5">
                  <p className="font-display text-sm font-semibold text-ink">
                    {i + 1}. {title.replace(/^Phase \d+ — /, "")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </Chapter>

          <Chapter id="open" kicker="12 · Open" title="Questions for Bella before production">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Confirm $1,800 CAD as the From-line for AI App Packages and AI Marketing Systems, or send the real numbers.</li>
              <li>Which three shop SKUs actually ship first — and are the $37 / $47 / $57 prices right?</li>
              <li>Do official Geekett character and Bobby files replace the proposed art in this prototype?</li>
              <li>Is the slug /geekettapp final, or should this live at /studio or /apps?</li>
              <li>Any permitted client proof we can name now, even one?</li>
              <li>Should the cash-plan home get a single “App Studio” link in the header, the footer, or both?</li>
            </ol>
            <div className="mt-8 rounded-2xl border border-line bg-ink p-6 text-cream">
              <p className="font-display text-xl font-semibold">See it as a page.</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                The live prototype uses this plan’s IA, copy, prices, and
                characters. Toggle back here any time.
              </p>
              <Button className="mt-5" asChild>
                <Link to="/">Open live prototype</Link>
              </Button>
            </div>
          </Chapter>
        </article>
      </div>
    </div>
  );
}
