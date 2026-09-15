import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,border-color,opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bobby/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-bobby text-cream shadow-[0_10px_28px_-18px_rgb(15_184_176_/_0.35)] hover:bg-bobby-deep",
        ink: "bg-ink text-cream hover:bg-ink-soft",
        ghost:
          "bg-transparent text-ink border border-line hover:bg-cream",
        bobby: "bg-bobby text-cream hover:bg-bobby-deep",
        link: "bg-transparent text-heart underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-sm",
        md: "h-11 px-5 text-sm rounded-md",
        lg: "h-12 px-6 text-[0.95rem] rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
