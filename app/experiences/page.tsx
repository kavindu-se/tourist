import { Metadata } from "next";
import { ExperienceCard } from "@/components/cards/experience-card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Sri Lanka Travel Experiences",
  description:
    "Discover beach holidays, wildlife safaris, heritage tours, tea-country train rides, whale watching and wellness escapes in Sri Lanka."
};

export default function ExperiencesPage() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] pt-28 pb-10 space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="Experiences"
          title="Signature Ways to Explore Sri Lanka"
          description="Pick the travel style that fits you best, then combine categories into one seamless itinerary."
        />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.04}>
            <ExperienceCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
