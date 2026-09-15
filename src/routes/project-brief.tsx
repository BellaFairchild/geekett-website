import { createFileRoute } from "@tanstack/react-router";
import { BriefPage } from "@/components/brief/brief-page";

export const Route = createFileRoute("/project-brief")({
  component: ProjectBrief,
  head: () => ({
    meta: [
      { title: "Project Brief – Geekett" },
      {
        name: "description",
        content:
          "Start a Geekett Project Brief. Three quick steps — about 2 minutes. Written process, no meeting marathon.",
      },
    ],
  }),
});

function ProjectBrief() {
  return <BriefPage />;
}
