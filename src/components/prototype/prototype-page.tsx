import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  Mail,
} from "lucide-react";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { WorkingTogether } from "@/components/chrome/working-together";
import { BrandTagline } from "@/components/brand";
import { RenderedIcon, type IconName } from "@/components/icons/rendered-icon";
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
  packages,
  paths,
  proofCards,
  mvpBlueprint,
  STUDIO_EMAIL,
} from "@/lib/geekett/content";
import { cn } from "@/lib/utils";

const studioPaths = paths.filter(
  (path) => path.id === "ai-apps" || path.id === "marketing",
);
const studioPackages = packages.filter(
  (pack) => pack.id === "ai-apps" || pack.id === "marketing",
);
const studioFaqs = faqs
  .filter((item) =>
    [
      "Do I need to know how to code?",
      "Who’s Builder Bot Bobby?",
      "How long do packages take?",
      "Will you fully build my app?",
    ].includes(item.q),
  )
  .map((item) =>
    item.q === "Do I need to know how to code?"
      ? {
          ...item,
          a: "No. Geekett is built for beginners and non-technical founders. You’ll get plain-language app plans and automation systems you can run without writing code — unless you want to learn, in which case Bobby will cheer from the sidelines.",
        }
      : item.q === "How long do packages take?"
        ? {
            ...item,
            a: "Most packages land in about 2–6 weeks depending on scope and how quickly content comes back. Bella confirms timeline in writing before we start.",
          }
        : item,
  );
const studioProof = proofCards.filter(
  (card) => card.title !== "The Cash-Plan WordPress Home",
);

function mailTo(subject: string) {
  return `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function PrototypePage() {
  const [joined, setJoined] = useState(false);
  const [briefed, setBriefed] = useState(false);
  const [blueprintSent, setBlueprintSent] = useState(false);
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

  function onBlueprint(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      idea: String(data.get("idea") || ""),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("geekett-mvp-blueprint") || "[]");
      localStorage.setItem(
        "geekett-mvp-blueprint",
        JSON.stringify([...prev, record]),
      );
    } catch {
      /* demo only */
    }
    setBlueprintSent(true);
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
              <h1 className="text-[2.15rem] font-semibold leading-[1.08] text-ink sm:text-[3.05rem] lg:text-[3.25rem]">
                Your Business Is Running On Sticky Notes And A Prayer.
              </h1>
              <p className="mt-4 max-w-xl font-display text-[1.15rem] font-semibold leading-snug text-heart sm:text-[1.25rem]">
                Let’s Give It A Plan, A System, And A Sidekick That Actually Ship.
              </p>
              <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft">
                Geekett is Bella’s App Studio — App Consulting and AI
                Automation Systems. Clear packages. Real deliverables. No jargon
                fog. No foosball table.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#packages">See packages</a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href="#contact">Contact Bella</a>
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {["100% solo-built", "Written process", "Beginner-friendly"].map(
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
              <BrandTagline className="mt-7" />
            </div>
            <WorkingTogether />
          </div>
        </section>

        <Section id="packages" alt>
          <Eyebrow>Packages</Eyebrow>
          <SectionTitle>Two Ways To Build With Geekett</SectionTitle>
          <SectionIntro>
            App consulting or an automation system. Pick the path that matches
            the mess on your desk — idea stage, or “please just give me the
            system” stage.
          </SectionIntro>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {studioPaths.map((path, i) => {
              return (
                <a
                  key={path.id}
                  href={path.href}
                  className="group flex flex-col items-center rounded-xl border border-line bg-cream p-5 text-center shadow-lift transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <RenderedIcon name={path.mark as IconName} delay={(i % 4) as 0 | 1 | 2 | 3} />
                  <p className="mt-4 font-display text-[0.68rem] uppercase tracking-[0.16em] text-muted">
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

        <Section id="mvp-blueprint">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <RenderedIcon name="blueprint" size="lg" />
            </div>
            <Eyebrow className="mt-4">{mvpBlueprint.kicker}</Eyebrow>
            <SectionTitle className="mx-auto text-center">
              {mvpBlueprint.headline}
            </SectionTitle>
            <SectionIntro className="mx-auto text-center">
              {mvpBlueprint.body}
            </SectionIntro>
          </div>

          {blueprintSent ? (
            <p
              className="mx-auto mt-8 max-w-xl rounded-xl border border-line bg-cream p-6 text-center text-sm leading-relaxed"
              role="status"
            >
              Idea received. Bella will send your App MVP Blueprint in writing
              in 2–3 business days. Prefer email?{" "}
              <a
                className="font-medium text-heart underline"
                href={mailTo("App MVP Blueprint")}
              >
                {STUDIO_EMAIL}
              </a>
            </p>
          ) : (
            <form
              onSubmit={onBlueprint}
              className="mx-auto mt-8 max-w-xl space-y-4 rounded-2xl border border-line bg-cream p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-1.5 block text-xs font-medium text-ink-soft"
                    htmlFor="mvp-name"
                  >
                    Name
                  </label>
                  <Input
                    id="mvp-name"
                    name="name"
                    required
                    placeholder="First name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs font-medium text-ink-soft"
                    htmlFor="mvp-email"
                  >
                    Email
                  </label>
                  <Input
                    id="mvp-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@studio.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-1.5 block text-xs font-medium text-ink-soft"
                  htmlFor="mvp-idea"
                >
                  Your app idea
                </label>
                <textarea
                  id="mvp-idea"
                  name="idea"
                  required
                  rows={4}
                  className="w-full rounded-sm border border-line bg-paper px-3.5 py-3 text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bobby/40"
                  placeholder="Who it’s for, what it helps them do, and anything you’ve already tried."
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button type="submit">{mvpBlueprint.cta}</Button>
                <p className="text-center text-xs text-muted">{mvpBlueprint.note}</p>
              </div>
            </form>
          )}
        </Section>

        <Section id="deep-dives">
          <Eyebrow>Deep Dives</Eyebrow>
          <SectionTitle>What’s Inside Each Path</SectionTitle>
          <SectionIntro>
            Every package is scoped for clarity: who it’s for, what’s included,
            how we work, and a transparent starting price. App consulting and
            automation prices are the recommended starting lines — confirm
            before we start.
          </SectionIntro>

          <div className="mt-12 space-y-8">
            {studioPackages.map((pack) => (
              <article
                key={pack.id}
                id={pack.id}
                className="group rounded-2xl border border-line bg-cream p-6 shadow-soft sm:p-8"
              >
                <div className="flex justify-center">
                  <RenderedIcon name={pack.mark} />
                </div>
                <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
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
                    <Badge variant="plan" className="mt-1">
                      Proposed
                    </Badge>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted">{pack.priceNote}</p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-lg bg-paper p-4">
                    <h4 className="font-display text-sm font-semibold">
                      Who It’s For
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {pack.who}
                    </p>
                  </div>
                  <div className="rounded-lg bg-paper p-4">
                    <h4 className="font-display text-sm font-semibold">
                      What’s Included
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
                      How It Works
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
                        pack.id === "marketing"
                          ? "/automation"
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
          <Eyebrow>How We Work</Eyebrow>
          <SectionTitle>One Woman. One Builder Bot. Real Results.</SectionTitle>
          <SectionIntro>
            Geekett is Bella’s one-woman studio. Builder Bot Bobby
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
                  {beat.n === "1"
                    ? "Idea stage or “please just give me the system” — tell Bella in plain words. A written brief. No intro call required."
                    : beat.body}
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

        <Section id="love">
          <Eyebrow>Studio Proof</Eyebrow>
          <SectionTitle>Show The Work. Don’t Invent The Love.</SectionTitle>
          <SectionIntro>
            The reference mock used placeholder quotes. This plan replaces a
            wall of love with proof the studio can actually stand behind until
            three documented client examples exist.
          </SectionIntro>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {studioProof.map((card) => (
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
            <SectionTitle>Questions, Answered Clearly</SectionTitle>
            <div className="mt-8 divide-y divide-line rounded-xl border border-line bg-cream">
              {studioFaqs.map((item, i) => {
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
          <div className="gk-build-list rounded-[2.25rem] px-6 py-12 text-center sm:rounded-[2.75rem] sm:px-12 sm:py-16 lg:px-20 lg:py-[4.5rem]">
            <span
              className="mx-auto grid size-14 place-items-center rounded-full bg-cream text-heart shadow-[0_8px_24px_-8px_rgb(20_34_42_/_0.25)]"
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                <path d="M14 3.2 16.1 11H24l-6.4 4.6L19.8 24 14 19.2 8.2 24l2.2-8.4L4 11h7.9L14 3.2Z" />
                <circle cx="21.5" cy="6.5" r="1.6" />
              </svg>
            </span>
            <h2 className="mt-6 font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[2.45rem]">
              Join the Geekett Build List
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink">
              Get behind-the-scenes app builds, AI tool ideas, and
              beginner-friendly tech tips.
            </p>
            {joined ? (
              <p
                className="mx-auto mt-8 max-w-md rounded-2xl bg-cream px-5 py-4 text-sm font-medium text-ink"
                role="status"
              >
                You’re on the list. Watch your inbox for friendly shipping energy
                — no spam.
              </p>
            ) : (
              <form
                onSubmit={onJoin}
                className="mx-auto mt-8 flex w-full max-w-md flex-col gap-4"
              >
                <label className="sr-only" htmlFor="bl-name">
                  First name
                </label>
                <Input
                  id="bl-name"
                  name="first_name"
                  placeholder="First Name"
                  required
                  autoComplete="given-name"
                  className="h-14 rounded-full border-0 bg-cream px-6 text-base shadow-none placeholder:text-muted focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-cream/80"
                />
                <label className="sr-only" htmlFor="bl-email">
                  Email address
                </label>
                <Input
                  id="bl-email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                  className="h-14 rounded-full border-0 bg-cream px-6 text-base shadow-none placeholder:text-muted focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-cream/80"
                />
                <button
                  type="submit"
                  className="hover-pop inline-flex h-14 w-full items-center justify-center rounded-full bg-ink text-base font-semibold text-cream transition-transform duration-150"
                >
                  Join the List
                </button>
                <p className="text-sm text-ink/70">No spam. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </Section>

        <Section id="contact">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>Studio Brief</Eyebrow>
            <SectionTitle>Ready To Pick Your Path?</SectionTitle>
            <SectionIntro>
              Tell Bella what you’re building — an app idea or an automation
              system. Canadian studio energy, clear next steps.
            </SectionIntro>

            {briefed ? (
              <p
                className="mt-8 rounded-xl border border-line bg-cream p-6 text-sm leading-relaxed"
                role="status"
              >
                Brief saved on this device. In production this would email Bella
                and land in the written-process queue. Prefer email?{" "}
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
                      "App Consulting",
                      "AI Automation System",
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
