import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-black/5 bg-white p-5 shadow-[0_16px_40px_rgba(1,35,54,0.08)]",
        className
      )}
      {...props}
    />
  );
}

export { Card };
