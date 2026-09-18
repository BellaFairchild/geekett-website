import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CharacterDuo } from "@/components/chrome/character-duo";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { Button } from "@/components/ui/button";
import {
  Eyebrow,
  Section,
  SectionIntro,
  SectionTitle,
} from "@/components/section";
import { beats, faqs, TAGLINE } from "@/lib/geekett/content";
import { cn } from "@/lib/utils";

export function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader current="/about" />
      <main>
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>About</Eyebrow>
              <SectionTitle>One Woman. One Builder Bot. Not A Foosball Table.</SectionTitle>
              <SectionIntro>
                Geekett is Bella’s one-woman studio. She builds
                mobile-first websites, App Consulting plans, and AI Automation
                Systems for independent founders — with Builder Bot Bobby keeping
                the checklists tidy (and the scope out of a side quest).
              </SectionIntro>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                The work is async on purpose. You write a brief. Bella replies
                within a business day. Shared docs and short screen recordings
                replace a meeting marathon. If your favorite vendor’s love
                language is “circling back,” we are not that vendor. {TAGLINE}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/project-brief">Start a brief</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/geekettapp">App Studio</Link>
                </Button>
              </div>
            </div>
            <CharacterDuo size="md" />
          </div>
        </Section>

        <Section alt>
          <Eyebrow>How We Work</Eyebrow>
          <SectionTitle>Three Beats, Then You Ship.</SectionTitle>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {beats.map((beat) => (
              <div
                key={beat.n}
                className="rounded-xl border border-line bg-cream p-5"
              >
                <span className="grid size-9 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-cream">
                  {beat.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {beat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {beat.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid items-end gap-8 sm:grid-cols-2">
            <figure className="flex flex-col items-center rounded-xl border border-line bg-cream px-4 pt-6">
              <img
                src="/characters/geekett-full.webp"
                alt="Geekett character"
                className="h-[300px] w-auto object-contain object-bottom"
              />
              <figcaption className="py-3 text-sm text-muted">
                Geekett — studio character
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center rounded-xl border border-line bg-cream px-4 pt-6">
              <img
                src="/characters/bobby.webp"
                alt="Builder Bot Bobby"
                className="h-[280px] w-auto object-contain object-bottom"
              />
              <figcaption className="py-3 text-sm text-muted">
                Builder Bot Bobby
              </figcaption>
            </figure>
          </div>
        </Section>

        <Section alt>
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle>Straight Answers</SectionTitle>
          <div className="mt-8 divide-y divide-line overflow-hidden rounded-xl border border-line bg-cream">
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
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
