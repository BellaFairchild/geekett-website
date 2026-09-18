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

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-heart",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "max-w-3xl text-[1.85rem] font-semibold leading-[1.15] text-ink sm:text-[2.15rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionIntro({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft",
        className,
      )}
    >
      {children}
    </p>
  );
}
