import { Clock, Gauge, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section, SectionIntro, SectionTitle } from "@/components/section";
import { RenderedIcon } from "@/components/icons/rendered-icon";
import { services } from "@/lib/geekett/content";

const icons = [Clock, Gauge, TrendingUp];

export function HomeServices() {
  return (
    <Section id="services">
      <Eyebrow className="text-center">The Work</Eyebrow>
      <SectionTitle className="mx-auto text-center">
        Four Ways Out Of Boring Tech.
      </SectionTitle>
      <SectionIntro className="mx-auto text-center">
        Automation that gives you hours back. An App MVP Blueprint for the idea
        in your notes. App consulting when you’re ready to build. Websites that
        sell on a phone.
      </SectionIntro>

      <div className="mt-12 space-y-8">
        {services.map((service, i) => (
          <article
            key={service.id}
            id={service.id}
            className="hover-lift group rounded-2xl border border-line bg-cream p-6 sm:p-8"
          >
            <div className="flex justify-center">
              <RenderedIcon name={service.icon} delay={(i % 4) as 0 | 1 | 2 | 3} />
            </div>
            <p className="mt-4 text-center font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {service.kicker} · {service.title}
            </p>
            <h3 className="mt-2 text-center font-display text-[1.45rem] font-semibold leading-[1.15] sm:text-[1.75rem]">
              {service.headline}
            </h3>
            <p className="mt-4 max-w-3xl text-[1.02rem] leading-relaxed text-ink-soft">
              {service.lead}
            </p>
            <p className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-ink-soft">
              {service.body}
            </p>
            <p className="mt-3 max-w-3xl text-sm font-medium text-ink">
              {service.punch}
            </p>

            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {service.benefits.map((benefit, i) => {
                const Icon = icons[i] ?? Clock;
                return (
                  <li
                    key={benefit.label}
                    className="rounded-xl border border-line bg-paper p-4"
                  >
                    <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-bobby">
                      <Icon className="size-4" strokeWidth={2} />
                      {benefit.label}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {benefit.text}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col items-center gap-3 text-center">
              <Button asChild>
                <a href={service.href}>{service.cta}</a>
              </Button>
              <p className="text-xs leading-relaxed text-muted sm:max-w-md">
                {service.note}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
