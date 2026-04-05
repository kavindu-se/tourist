import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--ocean)] focus:ring-2 focus:ring-[var(--ocean)]/20",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
