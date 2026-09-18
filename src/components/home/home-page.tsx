import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileText,
  MessageSquare,
  Tag,
} from "lucide-react";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { WorkingTogether } from "@/components/chrome/working-together";
import { HomeServices } from "@/components/home/services";
import { BrandTagline } from "@/components/brand";
import { RenderedIcon } from "@/components/icons/rendered-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Eyebrow,
  Section,
  SectionIntro,
  SectionTitle,
} from "@/components/section";
import {
  fitChips,
  homeHero,
  shopItems,
  whyGeekett,
  wpProcess,
  wpTiers,
} from "@/lib/geekett/content";

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader current="/" />
      <main>
        <section className="px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:pt-16">
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bobby">
              {homeHero.kicker}
            </p>
            <BrandTagline className="text-[1.85rem] sm:text-[2.4rem] lg:text-[2.65rem]" />
            <WorkingTogether className="mx-auto mt-8 max-w-[680px]" />
            <h1 className="mt-12 text-[2.15rem] font-semibold leading-[1.08] text-ink sm:text-[3.05rem] lg:text-[3.25rem]">
              {homeHero.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-display text-[1.15rem] font-semibold leading-snug text-heart sm:text-[1.25rem]">
              {homeHero.sub}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft">
              {homeHero.body}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link to="/project-brief">Start a Project Brief</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {homeHero.chips.map((item) => (
                <li
                  key={item}
                  className="hover-pop flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium text-ink-soft"
                >
                  <Check className="size-3.5 text-bobby" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HomeServices />

        <section
          id="process"
          className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
          style={{
            background:
              "linear-gradient(180deg, #fff0f6 0%, #f7f4ff 42%, #eaf8f7 100%)",
          }}
        >
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-center font-display text-[2rem] font-semibold leading-[1.1] text-ink sm:text-[2.35rem]">
              Our Process
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-[1.05rem] leading-relaxed text-ink-soft">
              We know your time is valuable — written updates, not a meeting
              stack.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-5 lg:flex-row lg:items-center lg:gap-0">
              {wpProcess.map((step, i) => {
                const Icon = {
                  file: FileText,
                  tag: Tag,
                  chat: MessageSquare,
                  clip: ClipboardList,
                }[step.icon];
                return (
                  <div key={step.n} className="group flex flex-1 items-center">
                    <article className="hover-lift relative w-full rounded-2xl border border-white bg-cream px-5 pb-7 pt-8 text-center shadow-soft">
                      <span
                        className="absolute left-5 top-0 h-1.5 w-11 rounded-b-full bg-heart transition-all duration-200 group-hover:w-16"
                        aria-hidden="true"
                      />
                      <span className="mx-auto grid size-10 place-items-center rounded-full bg-cream font-display text-sm font-bold text-ink shadow-[0_0_0_8px_rgba(233,27,122,0.12)] transition-shadow duration-200 group-hover:shadow-[0_0_0_11px_rgba(233,27,122,0.22)]">
                        {step.n}
                      </span>
                      <span className="mx-auto mt-5 grid size-12 place-items-center rounded-full bg-sand text-heart transition-transform duration-200 group-hover:scale-110">
                        <Icon className="size-5" strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-4 font-display text-[1.05rem] font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {step.body}
                      </p>
                    </article>
                    {i < wpProcess.length - 1 ? (
                      <ArrowRight
                        className="mx-1.5 hidden size-5 shrink-0 text-heart transition-transform duration-200 group-hover:translate-x-0.5 lg:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl border-2 border-bobby bg-bobby-mist px-5 py-4 sm:px-6">
              <p className="text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                <span className="font-semibold text-bobby">Bobby tip:</span>{" "}
                Prefer a written brief over a call stack — Bella replies with
                fit, package, and next steps in writing.
              </p>
            </div>
          </div>
        </section>

        <Section id="packages">
          <Eyebrow className="text-center">Website Packages</Eyebrow>
          <SectionTitle className="mx-auto text-center">
            Mobile-First WordPress, Fixed CAD Prices.
          </SectionTitle>
          <SectionIntro className="mx-auto text-center">
            Refresh, Starter, or Business. 50% to start, 50% before launch.
            Written updates and short screen recordings by default — not a
            calendar hostage situation.
          </SectionIntro>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {wpTiers.map((tier, i) => (
              <article
                key={tier.name}
                className="hover-lift group flex flex-col rounded-xl border border-line bg-cream p-6 hover:border-heart/30"
              >
                <div className="flex flex-col items-center gap-2">
                  <RenderedIcon name={tier.icon} delay={(i % 4) as 0 | 1 | 2 | 3} />
                  <Badge variant="live">Live</Badge>
                  <h3 className="font-display text-2xl font-semibold">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-2 text-center font-display text-xl font-semibold tabular-nums">
                  {tier.price}{" "}
                  <span className="text-sm font-medium text-muted">CAD</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {tier.line}
                </p>
                <p className="mt-2 text-xs text-muted">{tier.best}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink-soft"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-bobby" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted">{tier.pay}</p>
                <Button className="mt-5 w-full" asChild>
                  <Link to="/project-brief">Start a Project Brief</Link>
                </Button>
              </article>
            ))}
          </div>
        </Section>

        <section
          id="bobby"
          className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
          style={{
            background: "linear-gradient(180deg, #fff6f9 0%, #f7f4ff 55%, #fff6f9 100%)",
          }}
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="hover-lift-teal group rounded-[2rem] border-[10px] border-[#d9f3f8] bg-cream px-6 py-8 transition-[box-shadow,transform] duration-200 sm:px-10 sm:py-12 lg:px-14">
              <div className="grid items-center gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
                <div
                  className="mx-auto grid size-[200px] place-items-center rounded-xl bg-cream transition-[box-shadow] duration-300 sm:size-[230px] group-hover:shadow-[0_0_0_12px_#fff,0_0_64px_14px_rgba(91,196,232,0.55)]"
                  style={{
                    boxShadow: "0 0 0 12px #fff, 0 0 48px 8px rgba(91, 196, 232, 0.35)",
                  }}
                >
                  <img
                    src="/characters/bobby.webp"
                    alt="Builder Bot Bobby — studio sidekick"
                    width={952}
                    height={1400}
                    className="h-[90%] w-auto object-contain transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:rotate-[-4deg] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="text-center">
                  <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                    Studio sidekick
                  </p>
                  <h2 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.12] text-ink sm:text-[2.2rem]">
                    Meet Builder Bot Bobby
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
                    Bobby is Bella’s studio sidekick — the cheerful helper who
                    keeps checklists tidy, written updates rolling, and the build
                    organized. He’s not a replacement for Bella; he’s the bot who
                    helps her one-woman studio stay clear, warm, and on track.
                  </p>
                  <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
                    {[
                      "Checklists tidy",
                      "Written updates",
                      "Build organized",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-ink" aria-hidden="true" />
                        <span
                          className="hover-pop inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-ink"
                          style={{
                            background:
                              "linear-gradient(90deg, #fde4f1 0%, #e8eafc 100%)",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="fit">
          <Eyebrow className="text-center">{whyGeekett.eyebrow}</Eyebrow>
          <SectionTitle className="mx-auto text-center">{whyGeekett.title}</SectionTitle>
          <SectionIntro className="mx-auto text-center">{whyGeekett.body}</SectionIntro>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {whyGeekett.pills.map((chip) => (
              <li
                key={chip}
                className="hover-pop rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium"
              >
                {chip}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted">Also a fit if you’re one of these:</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {fitChips.map((chip) => (
              <li
                key={chip}
                className="hover-pop rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-soft"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="studio" alt>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-center">
              <Eyebrow>App Studio</Eyebrow>
              <SectionTitle className="mx-auto">
                Apps, Systems, And A Shop — Same Studio, Same Bella.
              </SectionTitle>
              <SectionIntro className="mx-auto">
                App consulting, AI automation, the App Lab, and grab-and-go
                digital products live here on Geekett. Not a side street. Not a
                committee.
              </SectionIntro>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <Link to="/geekettapp">Open App Studio</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/lab">See the App Lab</Link>
                </Button>
              </div>
            </div>
            <img
              src="/characters/geekett-desk.webp"
              alt="Geekett at her desk with app and WordPress orbs"
              width={750}
              height={772}
              className="mx-auto h-auto w-full max-h-[380px] object-contain transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] sm:max-h-[440px]"
            />
          </div>
        </Section>

        <Section id="shop-tease">
          <Eyebrow className="text-center">Shop</Eyebrow>
          <SectionTitle className="mx-auto text-center">Start Before A Full Package</SectionTitle>
          <SectionIntro className="mx-auto text-center">
            Instant guides and templates when you want progress this week.
          </SectionIntro>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {shopItems.map((item) => (
              <article
                key={item.id}
                className="hover-lift flex flex-col rounded-xl border border-line bg-cream p-6 hover:border-bobby/30"
              >
                <Badge variant="paper" className="w-fit">
                  {item.category}
                </Badge>
                <h3 className="mt-3 text-center font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {item.blurb}
                </p>
                <p className="mt-4 font-display text-lg font-semibold">
                  {item.priceLabel}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link to="/shop">Browse the shop</Link>
            </Button>
          </div>
        </Section>

        <section
          id="brief"
          className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
          style={{
            background:
              "linear-gradient(180deg, #fff6f9 0%, #f4f7ff 50%, #eaf8f7 100%)",
          }}
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="rounded-[2rem] border border-[#f3d7e4] bg-cream px-6 py-14 text-center sm:px-12 sm:py-16">
              <div
                className="mx-auto grid size-[148px] place-items-center rounded-[1.6rem] sm:size-[168px]"
                style={{ background: "#efeaf8" }}
              >
                <img
                  src="/characters/brief-clipboard.webp"
                  alt=""
                  width={640}
                  height={640}
                  className="h-[92%] w-[92%] object-contain"
                />
              </div>
              <p className="mt-8 font-display text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
                Next step
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.1] text-ink sm:text-[2.6rem]">
                Build Your Brief
              </h2>
              <Link
                to="/project-brief"
                className="mx-auto mt-8 block w-full max-w-[340px] sm:max-w-[380px]"
              >
                <img
                  src="/characters/geekett-qr-scan.png"
                  alt="Geekett and Builder Bot Bobby with a phone — Build Project Brief, scan here"
                  width={390}
                  height={737}
                  className="mx-auto h-auto w-full object-contain"
                />
              </Link>
              <p className="mx-auto mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
                Need the busywork to run itself, the app in your head to become a
                plan, or a site that sells on a phone? Tell Bella in writing.
                Bobby will put it on the list. He lives for the list.
              </p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
                {["Reply in one business day", "Message + docs, not calls"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="size-1.5 rounded-full bg-ink"
                        aria-hidden="true"
                      />
                      <span
                        className="hover-pop inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-ink"
                        style={{
                          background:
                            "linear-gradient(90deg, #fde4f1 0%, #e8eafc 100%)",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-9 flex justify-center">
                <Link
                  to="/project-brief"
                  className="hover-pop inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-cream transition-[transform,box-shadow] duration-200"
                  style={{
                    background: "linear-gradient(90deg, #0fb8b0 0%, #2bb8e8 100%)",
                    boxShadow: "0 14px 30px -10px rgba(43, 184, 232, 0.55)",
                  }}
                >
                  Start A Project Brief
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
