import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about/about-page";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Geekett — Bella Fairchild & Builder Bot Bobby" },
      {
        name: "description",
        content:
          "Geekett is Bella Fairchild’s one-woman studio. One builder bot. Written process. Real handoff.",
      },
    ],
  }),
});

function About() {
  return <AboutPage />;
}
