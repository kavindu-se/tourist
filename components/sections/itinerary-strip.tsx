import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ItineraryStrip() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] rounded-3xl bg-[linear-gradient(120deg,#0b3652,#0f5132)] p-7 text-white sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Featured Itinerary</p>
      <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">7 Days Culture, Safari and Coast</h3>
      <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">Kandy temples, Ella highlands, Yala safari, and south coast sunsets. Perfect for first-time travelers who want a complete Sri Lanka experience.</p>
      <Link href="/packages" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sand)]">
        View full itinerary <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
