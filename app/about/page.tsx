import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "About Sri Lanka",
  description:
    "Learn about Sri Lanka's culture, cuisine, climate, and travel planning tips including visa and practical guidance for visitors."
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] pt-28 pb-10 space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="About Sri Lanka"
          title="A Compact Island with Extraordinary Diversity"
          description="Sri Lanka blends tropical coastlines, ancient heritage, rich culinary traditions, and warm hospitality in one destination."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal><Card><h3 className="text-2xl font-semibold">Culture</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Sri Lanka is home to living Buddhist heritage, vibrant festivals, sacred temples, and centuries of multicultural influence reflected in architecture and local life.</p></Card></Reveal>
        <Reveal delay={0.05}><Card><h3 className="text-2xl font-semibold">Food</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Expect fragrant rice and curry, fresh seafood, tropical fruits, and modern fine-dining interpretations of local classics. Spice levels can be adjusted for international guests.</p></Card></Reveal>
        <Reveal delay={0.1}><Card><h3 className="text-2xl font-semibold">Climate</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Sri Lanka is warm year-round. Monsoon patterns vary by coast, allowing excellent travel opportunities in different regions throughout the year.</p></Card></Reveal>
        <Reveal delay={0.15}><Card><h3 className="text-2xl font-semibold">Travel Tips</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Pack light tropical clothing, sun protection, and modest attire for temples. Book major train routes and wildlife safaris in advance during peak seasons.</p></Card></Reveal>
      </div>

      <Reveal>
        <Card>
          <h3 className="text-2xl font-semibold">Visa and Trip Planning</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Most travelers apply for the Sri Lanka Electronic Travel Authorization (ETA) before arrival. Keep passport validity over six months, travel insurance, and confirmed onward travel details.</p>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="p-0 overflow-hidden">
          <div className="h-80 w-full bg-[var(--soft)] flex items-center justify-center text-center px-6">
            <p className="text-sm text-[var(--muted)]">Map Section Placeholder: Integrate Google Maps or interactive Sri Lanka route map here.</p>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
