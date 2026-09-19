import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Eyebrow,
  Section,
  SectionIntro,
  SectionTitle,
} from "@/components/section";
import { labProjects } from "@/lib/geekett/content";

const filters = ["All", "In build", "Cooking", "Beta planned", "Concept", "Content brand"] as const;

export function LabPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = useMemo(
    () =>
      filter === "All"
        ? labProjects
        : labProjects.filter((p) => p.status === filter),
    [filter],
  );

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader current="/lab" />
      <main>
        <Section>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center">
              <Eyebrow>App Lab</Eyebrow>
              <SectionTitle>Ideas Cooking In The Geekett Lab</SectionTitle>
              <SectionIntro>
                An honest look at products and concepts Bella is building — proof
                the studio ships friendly tech, not just plans. Eight ventures
                from the September 2026 briefs, with real status.
              </SectionIntro>
              <Button className="mt-6" asChild>
                <Link to="/geekettapp">Back to App Studio</Link>
              </Button>
            </div>
            <img
              src="/characters/geekett-desk.webp"
              alt="Geekett at her desk with platform orbs"
              width={750}
              height={772}
              className="mx-auto h-auto w-full max-h-[380px] object-contain sm:max-h-[440px]"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={
                  filter === f
                    ? "h-10 rounded-full bg-ink px-4 text-sm font-medium text-cream"
                    : "h-10 rounded-full border border-line bg-cream px-4 text-sm font-medium text-ink-soft"
                }
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {shown.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-xl border border-line bg-cream p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-display text-lg font-extrabold tracking-tight">
                    {project.name}
                  </h2>
                  <Badge
                    variant={project.status === "In build" ? "bobby" : "paper"}
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                  {project.type}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {project.blurb}
                </p>
                <p className="mt-3 text-xs text-ink-soft">
                  For: {project.customer}
                </p>
                <p className="mt-3 border-t border-line pt-3 text-xs text-muted">
                  Next: {project.priority}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
