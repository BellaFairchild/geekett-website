import { Link } from "@tanstack/react-router";
import { Check, Mail } from "lucide-react";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { Button } from "@/components/ui/button";
import {
  Eyebrow,
  Section,
  SectionIntro,
  SectionTitle,
} from "@/components/section";
import {
  automationBeats,
  automationRules,
  automationStrategies,
  STUDIO_EMAIL,
} from "@/lib/geekett/content";

const blueprintMail = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent("AI Automation blueprint")}&body=${encodeURIComponent("Hi Bella — I’d like an automation blueprint.\n\nWhere time actually goes:\n\nWhat I want more of (clients / content / calm):\n\n")}`;

export function AutomationPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader current="/geekettapp" />
      <main>
        <section className="px-5 pb-14 pt-10 sm:px-8 sm:pt-14">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="text-center lg:text-center">
              <p className="mb-4 font-display text-[0.78rem] font-bold uppercase tracking-[0.22em] text-bobby">
                AI Automation Systems · From $1,800 CAD
              </p>
              <h1 className="text-[2.35rem] font-extrabold leading-[1.05] tracking-tight sm:text-[3.35rem]">
                Automation Strategies That Steal Hours —{" "}
                <span className="text-heart">Not Your Voice.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft">
                Six plays independent businesses actually run. No 40-tool circus.
                No “AI transformation” fog. Bobby maps the busywork. Bella keeps
                it human. You keep sounding like you — just faster.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <a href={blueprintMail}>Get Free Blueprint</a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href="#plays">See the six plays</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/characters/bobby.webp"
                alt="Builder Bot Bobby, ready to tidy the checklist"
                className="h-[280px] w-auto object-contain sm:h-[340px]"
              />
            </div>
          </div>
        </section>

        <Section id="plays" alt>
          <Eyebrow>The Plays</Eyebrow>
          <SectionTitle>Six Strategies. Pick The One That Pays.</SectionTitle>
          <SectionIntro>
            Most owners don’t need “AI.” They need follow-ups that go out, content
            that doesn’t eat Sunday, and onboarding that isn’t rewritten from
            scratch. Start with one. Patch it. Then the next.
          </SectionIntro>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {automationStrategies.map((play) => (
              <article
                key={play.n}
                className="hover-lift flex flex-col rounded-2xl border border-line bg-cream p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.22em] text-bobby">
                    {play.n}
                  </p>
                  <span className="rounded-full bg-bobby-mist px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-bobby-deep">
                    {play.win}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-extrabold leading-snug tracking-tight">
                  {play.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {play.body}
                </p>
                <p className="mt-4 border-t border-line pt-3 text-sm font-medium text-ink">
                  {play.skip}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="rules">
          <Eyebrow>Bobby’s House Rules</Eyebrow>
          <SectionTitle>We Automate Chores. You Keep Your Voice.</SectionTitle>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {automationRules.map((rule) => (
              <li
                key={rule}
                className="flex gap-3 rounded-xl border border-line bg-cream p-4 text-sm leading-relaxed text-ink-soft"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-bobby" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="how" alt>
          <Eyebrow>How It Works</Eyebrow>
          <SectionTitle>A Written Process. Then A System You Can Run.</SectionTitle>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {automationBeats.map((beat) => (
              <article key={beat.n} className="rounded-xl border border-line bg-cream p-5">
                <span className="grid size-9 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-cream">
                  {beat.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight">{beat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{beat.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            From $1,800 CAD · proposed starting line, confirmed in writing before
            we start. 50% to begin.
          </p>
        </Section>

        <Section id="blueprint">
          <div className="rounded-[2rem] border border-[#f3d7e4] bg-cream px-6 py-12 text-center sm:px-12 sm:py-14">
            <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.22em] text-bobby">
              Next step
            </p>
            <h2 className="mt-3 font-display text-[1.95rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.45rem]">
              Request Your Automation Blueprint
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
              Tell Bella where the week actually goes. She’ll reply in one
              business day with fit, the 1–3 plays worth installing, and a clear
              From $ line. Bobby will put it on the list.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <a href={blueprintMail}>
                  <Mail className="size-4" />
                  Email Bella
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link to="/geekettapp">Back to App Studio</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
