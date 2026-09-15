import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        paper: "border-line bg-cream text-ink-soft",
        heart: "border-transparent bg-heart/12 text-heart-deep",
        bobby: "border-transparent bg-bobby-mist text-bobby-deep",
        live: "border-transparent bg-ok/15 text-ok",
        plan: "border-transparent bg-sand text-ink-soft",
      },
    },
    defaultVariants: {
      variant: "paper",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
