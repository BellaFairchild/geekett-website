import { cn } from "@/lib/utils";

const ICONS = {
  automation: "/icons/icon-automation.webp",
  blueprint: "/icons/icon-blueprint.webp",
  apps: "/icons/icon-apps.webp",
  websites: "/icons/icon-websites.webp",
  refresh: "/icons/icon-refresh.webp",
  starter: "/icons/icon-starter.webp",
  business: "/icons/icon-business.webp",
} as const;

export type IconName = keyof typeof ICONS;

export function RenderedIcon({
  name,
  className,
  size = "md",
  delay = 0,
}: {
  name: IconName;
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: 0 | 1 | 2 | 3;
}) {
  const box =
    size === "lg"
      ? "h-[5.5rem] w-[5.5rem] sm:h-24 sm:w-24"
      : size === "sm"
        ? "h-14 w-14 sm:h-16 sm:w-16"
        : "h-16 w-16 sm:h-20 sm:w-20";

  return (
    <span
      className={cn("icon-3d", delay ? `icon-3d-d${delay}` : undefined)}
      aria-hidden="true"
    >
      <img
        src={ICONS[name]}
        alt=""
        width={320}
        height={320}
        className={cn(
          "object-contain drop-shadow-[0_10px_18px_rgba(20,34,42,0.12)]",
          box,
          className,
        )}
      />
    </span>
  );
}
