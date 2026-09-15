import { cn } from "@/lib/utils";

export function CharacterDuo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box = {
    sm: "h-[240px] sm:h-[280px]",
    md: "h-[320px] sm:h-[400px] lg:h-[440px]",
    lg: "h-[360px] sm:h-[460px] lg:h-[500px]",
  }[size];
  const bobby = {
    sm: "h-[70%]",
    md: "h-[72%]",
    lg: "h-[74%]",
  }[size];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("flex w-full items-end justify-center", box)}>
        <img
          src="/characters/bobby.webp"
          alt="Builder Bot Bobby"
          width={952}
          height={1400}
          className={cn("w-auto object-contain object-bottom", bobby)}
        />
        <img
          src="/characters/geekett-full.webp"
          alt="Geekett"
          width={515}
          height={1400}
          className="-ml-4 h-full w-auto object-contain object-bottom sm:-ml-6"
        />
      </div>
    </div>
  );
}
