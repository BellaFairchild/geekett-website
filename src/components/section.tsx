import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  alt,
  className,
  children,
}: {
  id?: string;
  alt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-16 sm:px-8 sm:py-20 lg:py-24",
        alt ? "bg-paper-2/60" : "bg-transparent",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-heart">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-3xl text-[1.85rem] font-semibold leading-[1.15] text-ink sm:text-[2.15rem]">
      {children}
    </h2>
  );
}

export function SectionIntro({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
      {children}
    </p>
  );
}
