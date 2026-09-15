import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  Globe,
  Mail,
  Map,
  Rocket,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { WorkingTogether } from "@/components/chrome/working-together";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Eyebrow,
  Section,
  SectionIntro,
  SectionTitle,
} from "@/components/section";
import {
  beats,
  faqs,
  labProjects,
  packages,
  paths,
  proofCards,
  shopItems,
  STUDIO_EMAIL,
  TAGLINE,
} from "@/lib/geekett/content";
import { cn } from "@/lib/utils";

const pathIcons = {
  smartphone: Smartphone,
  globe: Globe,
  sparkles: Sparkles,
  bag: ShoppingBag,
} as const;

const shopIcons = {
  rocket: Rocket,
  map: Map,
  bot: Bot,
} as const;

function mailTo(subject: string) {
  return `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function PrototypePage() {
  const [joined, setJoined] = useState(false);
  const [briefed, setBriefed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function onJoin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      name: String(data.get("first_name") || ""),
      email: String(data.get("email") || ""),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("geekett-build-list") || "[]");
      localStorage.setItem(
        "geekett-build-list",
        JSON.stringify([...prev, record]),
      );
    } catch {
      /* demo only */
    }
    setJoined(true);
  }

  function onBrief(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      path: String(data.get("path") || ""),
      note: String(data.get("note") || ""),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("geekett-briefs") || "[]");
      localStorage.setItem("geekett-briefs", JSON.stringify([...prev, record]));
    } catch {
      /* demo only */
    }
    setBriefed(true);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader current="/geekettapp" />

      <main>
        <section className="px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <p className="mb-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bobby">
                One-woman studio · Powered with Builder Bot Bobby
              </p>
              <h1 className="text-[2.35rem] font-semibold leading-[1.08] text-ink sm:text-[3.15rem] lg:text-[3.4rem]">
                {TAGLINE}
              </h1>
              <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft">
                Geekett is Bella Fairchild’s App Studio — packages for AI apps,
                mobile-first WordPress, and marketing systems, plus a shop of
                grab-and-go tools. Clear packages. Real deliverables. No jargon fog.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#packages">See packages</a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href="#shop">Browse the shop</a>
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {["100% solo-built", "Strategy to launch", "Beginner-friendly"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium text-ink-soft"
                    >
                      <Check className="size-3.5 text-bobby" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <WorkingTogether />
          </div>
        </section>

        <Section id="packages" alt>
          <Eyebrow>Packages</Eyebrow>
          <SectionTitle>Four ways to build with Geekett</SectionTitle>
          <SectionIntro>
            Whether you need a full package or a ready-made digital product, pick
            the path that matches where you are — idea stage, need-a-website
            stage, or “please just give me the system” stage.
          </SectionIntro>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {paths.map((path) => {
              const Icon = pathIcons[path.icon];
              return (
                <a
                  key={path.id}
                  href={path.href}
                  className="group flex flex-col rounded-xl border border-line bg-cream p-5 shadow-lift transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <span className="flex size-11 items-center justify-center rounded-md bg-sand text-ink">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-5 font-display text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    {path.kicker}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
                    {path.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {path.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-heart">
                    {path.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </Section>

        <Section id="deep-dives">
          <Eyebrow>Deep dives</Eyebrow>
          <SectionTitle>What’s inside each path</SectionTitle>
          <SectionIntro>
            Every package is scoped for clarity: who it’s for, what’s included,
            how we work, and a transparent starting price. WordPress prices are
            live. App and marketing prices are the recommended starting lines.
          </SectionIntro>

          <div className="mt-12 space-y-8">
            {packages.map((pack) => (
              <article
                key={pack.id}
                id={pack.id}
                className="rounded-2xl border border-line bg-cream p-6 shadow-soft sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {pack.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      <span className="font-medium text-ink">Best for:</span>{" "}
                      {pack.bestFor}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-semibold tabular-nums">
                      {pack.price}
                    </p>
                    <Badge
                      variant={pack.priceStatus === "live" ? "live" : "plan"}
                      className="mt-1"
                    >
                      {pack.priceStatus === "live" ? "Live" : "Proposed"}
                    </Badge>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted">{pack.priceNote}</p>

                {"liveTiers" in pack && pack.liveTiers ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {pack.liveTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className="rounded-lg border border-line bg-paper p-4"
                      >
                        <p className="font-display text-sm font-semibold">
                          {tier.name}
                        </p>
                        <p className="mt-0.5 font-display text-lg tabular-nums">
                          {tier.price} CAD
                        </p>
                        <p className="mt-2 text-sm text-ink-soft">{tier.line}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-lg bg-paper p-4">
                    <h4 className="font-display text-sm font-semibold">
                      Who it’s for
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {pack.who}
                    </p>
                  </div>
                  <div className="rounded-lg bg-paper p-4">
                    <h4 className="font-display text-sm font-semibold">
                      What’s included
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
                      {pack.includes.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-bobby" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-paper p-4">
                    <h4 className="font-display text-sm font-semibold">
                      How it works
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {pack.how}
                    </p>
                  </div>
                  <div className="rounded-lg bg-paper p-4">
                    <h4 className="font-display text-sm font-semibold">Outcome</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {pack.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3 rounded-lg border border-bobby/20 bg-bobby-mist/60 p-4">
                  <Bot className="mt-0.5 size-5 shrink-0 text-bobby" />
                  <p className="text-sm leading-relaxed text-bobby-deep">
                    <span className="font-semibold">Bobby tip.</span> {pack.bobby}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild>
                    <a
                      href={
                        pack.id === "wordpress"
                          ? "/project-brief"
                          : mailTo(pack.mailSubject)
                      }
                    >
                      {pack.cta}
                    </a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="#contact">Contact Bella</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="about" alt>
          <Eyebrow>How we work</Eyebrow>
          <SectionTitle>One woman. One builder bot. Real results.</SectionTitle>
          <SectionIntro>
            Geekett is Bella Fairchild’s one-woman studio. Builder Bot Bobby
            assists with research, checklists, and keeping builds tidy — so you
            get personalized attention with extra robot horsepower.
          </SectionIntro>

          <div className="mt-10 grid items-end gap-5 sm:grid-cols-2">
            <figure className="flex h-[380px] flex-col items-center justify-end rounded-xl border border-line bg-cream px-4 pt-4">
              <img
                src="/characters/geekett-full.webp"
                alt="Geekett character representing Bella’s studio brand"
                width={515}
                height={1400}
                className="h-[320px] w-auto object-contain object-bottom"
              />
              <figcaption className="py-3 text-sm text-muted">
                Geekett character
              </figcaption>
            </figure>
            <figure className="flex h-[380px] flex-col items-center justify-end rounded-xl border border-line bg-cream px-4 pt-4">
              <img
                src="/characters/bobby.webp"
                alt="Builder Bot Bobby — helpful robot sidekick"
                width={952}
                height={1400}
                className="h-[300px] w-auto object-contain object-bottom"
              />
              <figcaption className="py-3 text-sm text-muted">
                Builder Bot Bobby
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {beats.map((beat) => (
              <div
                key={beat.n}
                className="rounded-xl border border-line bg-cream p-5"
              >
                <span className="grid size-9 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-cream">
                  {beat.n}
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold">
                  {beat.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {beat.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#packages">See packages</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={mailTo("Hello from the App Studio")}>
                <Mail className="size-4" />
                Email {STUDIO_EMAIL}
              </a>
            </Button>
          </div>
        </Section>

        <Section id="applab">
          <Eyebrow>App Lab</Eyebrow>
          <SectionTitle>Ideas cooking in the Geekett lab</SectionTitle>
          <SectionIntro>
            A honest look at products and concepts Bella is building — proof
            that the studio ships friendly tech, not just plans. Eight ventures
            from the September 2026 briefs, with real status — not a fake
            portfolio.
          </SectionIntro>
          <div className="mt-8 flex justify-center">
            <img
              src="/characters/geekett-desk.webp"
              alt="Geekett at her desk with Android, Apple, React, WordPress, and app-studio orbs"
              width={750}
              height={772}
              className="h-auto w-full max-h-[360px] object-contain sm:max-h-[420px]"
            />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {labProjects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-xl border border-line bg-cream p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {project.name}
                  </h3>
                  <Badge variant={project.status === "In build" ? "bobby" : "paper"}>
                    {project.status}
                  </Badge>
                </div>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                  {project.type}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {project.blurb}
                </p>
                <p className="mt-4 border-t border-line pt-3 text-xs text-muted">
                  Next: {project.priority}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="shop" alt>
          <Eyebrow>Shop</Eyebrow>
          <SectionTitle>Digital products you can use today</SectionTitle>
          <SectionIntro>
            A starter shop — three SKUs, not a catalogue. Instant access when
            you’re not ready for a full package, or you want a head start.
          </SectionIntro>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {shopItems.map((item) => {
              const Icon = shopIcons[item.icon];
              return (
                <article
                  key={item.id}
                  className="flex flex-col rounded-xl border border-line bg-cream p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-md bg-sand text-ink">
                    <Icon className="size-5" />
                  </span>
                  <Badge variant="paper" className="mt-4 w-fit">
                    {item.category}
                  </Badge>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.blurb}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-display text-lg font-semibold tabular-nums">
                      {item.priceLabel}
                    </p>
                    <Button size="sm" variant="ink" asChild>
                      <a href={mailTo(`Shop: ${item.title}`)}>Request</a>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="love">
          <Eyebrow>Studio proof</Eyebrow>
          <SectionTitle>Show the work. Don’t invent the love.</SectionTitle>
          <SectionIntro>
            The reference mock used placeholder quotes. This plan replaces a
            wall of love with proof the studio can actually stand behind until
            three documented client examples exist.
          </SectionIntro>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {proofCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-line bg-cream p-6"
              >
                <Badge variant="plan">{card.meta}</Badge>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="faq" alt>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <SectionTitle>Questions, answered clearly</SectionTitle>
            <div className="mt-8 divide-y divide-line rounded-xl border border-line bg-cream">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      <span className="font-display text-[0.98rem] font-semibold">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid size-8 shrink-0 place-items-center rounded-full border border-line text-sm",
                          isOpen ? "bg-ink text-cream" : "bg-paper text-ink",
                        )}
                      >
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        <Section id="build-list">
          <div className="overflow-hidden rounded-2xl border border-line bg-ink px-6 py-10 text-cream sm:px-10">
            <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-heart-fg/70">
              Build List
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight">
              Join the Geekett Build List
            </h2>
            <p className="mt-3 max-w-xl text-[1.02rem] leading-relaxed text-cream/75">
              Build notes, product drops, and friendly updates from Bella (and
              occasional wisdom from Builder Bot Bobby). No spam — just useful
              shipping energy.
            </p>
            {joined ? (
              <p className="mt-6 max-w-xl rounded-md bg-cream/10 px-4 py-3 text-sm" role="status">
                You’re on the demo list. In production this feeds the welcome
                sequence from the Geekett business brief.
              </p>
            ) : (
              <form
                onSubmit={onJoin}
                className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <label className="sr-only" htmlFor="bl-name">
                  First name
                </label>
                <Input
                  id="bl-name"
                  name="first_name"
                  placeholder="First name"
                  required
                  className="bg-cream text-ink"
                />
                <label className="sr-only" htmlFor="bl-email">
                  Email
                </label>
                <Input
                  id="bl-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-cream text-ink"
                />
                <Button type="submit" variant="primary" className="shrink-0">
                  Join the list
                </Button>
              </form>
            )}
          </div>
        </Section>

        <Section id="contact">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>Studio Brief</Eyebrow>
            <SectionTitle>Ready to pick your path?</SectionTitle>
            <SectionIntro>
              Tell Bella what you’re building — an app idea, a WordPress site, a
              marketing system, or a shop question. Canadian studio energy,
              clear next steps.
            </SectionIntro>

            {briefed ? (
              <p
                className="mt-8 rounded-xl border border-line bg-cream p-6 text-sm leading-relaxed"
                role="status"
              >
                Brief saved on this device. In production this would email Bella
                and land in the same written-process queue as the WordPress
                Project Brief. Prefer email?{" "}
                <a className="font-medium text-heart underline" href={mailTo("Studio Brief")}>
                  {STUDIO_EMAIL}
                </a>
              </p>
            ) : (
              <form
                onSubmit={onBrief}
                className="mt-8 space-y-4 rounded-2xl border border-line bg-cream p-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="br-name">
                      Name
                    </label>
                    <Input id="br-name" name="name" required placeholder="First name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="br-email">
                      Email
                    </label>
                    <Input id="br-email" name="email" type="email" required placeholder="you@studio.com" />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium text-ink-soft">Path</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      "AI App Package",
                      "WordPress site",
                      "AI Marketing System",
                      "Shop / not sure yet",
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex min-h-11 items-center gap-2 rounded-sm border border-line bg-paper px-3 text-sm"
                      >
                        <input
                          type="radio"
                          name="path"
                          value={label}
                          required
                          className="accent-heart"
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="br-note">
                    What are you building?
                  </label>
                  <textarea
                    id="br-note"
                    name="note"
                    required
                    rows={4}
                    className="w-full rounded-sm border border-line bg-paper px-3.5 py-3 text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heart/40"
                    placeholder="A few sentences in plain words."
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit">Send Studio Brief</Button>
                  <Button variant="ghost" type="button" asChild>
                    <Link to="/">Geekett home</Link>
                  </Button>
                </div>
                <p className="text-xs text-muted">
                  Prototype form — saves locally. Production should share the
                  written queue with geekett.com/project-brief.
                </p>
              </form>
            )}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
