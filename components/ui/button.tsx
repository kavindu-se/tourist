"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ocean)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  {
    variants: {
      variant: {
        default: "bg-[var(--sunset)] text-white hover:bg-[color-mix(in_oklab,var(--sunset),black_12%)]",
        outline: "border border-white/70 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25",
        secondary: "bg-[var(--ocean)] text-white hover:bg-[color-mix(in_oklab,var(--ocean),black_12%)]",
        ghost: "text-[var(--ocean)] hover:bg-[var(--soft)]"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({ className, variant, size, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
