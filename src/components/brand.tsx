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
        <span className="font-display font-bold tracking-tight text-[1.05rem] text-ink">
          Geekett
        </span>
        {subtitle ? (
          <span className="mt-0.5 text-[0.68rem] uppercase tracking-[0.14em] text-muted">
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
