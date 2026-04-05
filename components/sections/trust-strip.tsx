import { trustIndicators } from "@/data/site-content";
import { ShieldCheck, Sparkles, Clock3 } from "lucide-react";

const icons = [ShieldCheck, Sparkles, Clock3];

export function TrustStrip() {
  return (
    <section className="-mt-8 relative z-10">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-xl shadow-[rgba(1,35,54,0.08)] md:grid-cols-3">
        {trustIndicators.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <article key={item.title} className="rounded-2xl bg-[var(--soft)] p-4">
              <Icon className="h-5 w-5 text-[var(--ocean)]" />
              <h3 className="mt-3 font-semibold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
