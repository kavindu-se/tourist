import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[95svh] overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(4,27,41,0.72), rgba(4,27,41,0.35)), url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2100&q=80')"
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />

      <div className="mx-auto flex min-h-[95svh] w-[min(1180px,92vw)] items-center pt-20 pb-16">
        <div className="max-w-3xl text-white">
          <Badge variant="sand" className="mb-5">Authentic Luxury Travel in Sri Lanka</Badge>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">Discover the Soul of Sri Lanka</h1>
          <p className="mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
            Explore sunlit beaches, sacred heritage cities, leopard safaris, and misty tea hills through curated journeys crafted for international travelers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/packages"><Button size="lg">Explore Tours</Button></Link>
            <Link href="/contact"><Button variant="outline" size="lg">Plan Your Trip</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
