import { useRef, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-8 place-items-center rounded-[10px] bg-heart text-heart-fg font-display text-[0.95rem] font-bold tracking-tight",
        className,
      )}
      aria-hidden="true"
    >
      G
    </span>
  );
}

export function Type3D({
  children,
  className,
  lit = false,
}: {
  children: string;
  className?: string;
  lit?: boolean;
}) {
  const layers = [1, 2, 3, 4, 5, 6] as const;
  const rootRef = useRef<HTMLSpanElement>(null);

  function aimLight(event: PointerEvent<HTMLSpanElement>) {
    if (!lit) return;
    const el = rootRef.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * 100;
    const y = ((event.clientY - box.top) / box.height) * 100;
    el.style.setProperty("--lx", `${x}%`);
    el.style.setProperty("--ly", `${y}%`);
  }

  return (
    <span
      ref={rootRef}
      className={cn("gk-type-3d", lit && "gk-type-3d-lit", className)}
      onPointerMove={aimLight}
    >
      <span className="gk-type-3d-inner">
        {layers.map((n) => (
          <span key={n} className="gk-type-3d-layer" data-n={n} aria-hidden="true">
            {children}
          </span>
        ))}
        <span className="gk-type-3d-face">{children}</span>
      </span>
      <span className="gk-type-3d-shadow" aria-hidden="true" />
    </span>
  );
}

export function Brand({
  to = "/",
  subtitle,
}: {
  to?: string;
  subtitle?: string;
}) {
  return (
    <Link to={to} className="flex items-center gap-2.5 min-h-11">
      <BrandMark />
      <span className="flex flex-col leading-none">
        <Type3D className="text-[1.12rem]">Geekett</Type3D>
        {subtitle ? (
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            {subtitle}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function BrandTagline({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "font-display text-[1.5rem] font-extrabold leading-[1.08] tracking-tight sm:text-[1.75rem]",
        className,
      )}
    >
      <span className="block text-ink">Smart Apps.</span>
      <span className="block text-idea">Bright Ideas.</span>
      <span className="block text-heart">Built with Heart.</span>
    </p>
  );
}

export function ViewSwitch({ current }: { current: "plan" | "prototype" }) {
  return (
    <div className="inline-flex rounded-full border border-line bg-cream p-1 shadow-lift">
      <Link
        to="/plan"
        className={cn(
          "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
          current === "plan"
            ? "bg-ink text-cream"
            : "text-ink-soft hover:text-ink",
        )}
      >
        Design plan
      </Link>
      <Link
        to="/"
        className={cn(
          "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
          current === "prototype"
            ? "bg-ink text-cream"
            : "text-ink-soft hover:text-ink",
        )}
      >
        Home
      </Link>
    </div>
  );
}
