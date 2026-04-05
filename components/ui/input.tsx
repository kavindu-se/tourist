import { cn } from "@/lib/utils";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-[var(--line)] bg-white px-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--ocean)] focus:ring-2 focus:ring-[var(--ocean)]/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };
