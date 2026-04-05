import { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ItineraryStrip } from "@/components/sections/itinerary-strip";
import { GalleryStrip } from "@/components/sections/gallery-strip";
import { SectionHeading } from "@/components/sections/section-heading";
import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { PackageCard } from "@/components/cards/package-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Reveal } from "@/components/motion/reveal";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { tourPackages } from "@/data/packages";
import { testimonials, faqs } from "@/data/site-content";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Discover the Soul of Sri Lanka",
  description:
    "Plan your Sri Lanka holiday with premium itineraries covering beaches, safari, tea country and heritage cities."
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />

      <section className="mx-auto mt-16 w-[min(1180px,92vw)] space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Island Highlights Loved by Global Travelers"
            description="From cultural capitals to untouched coasts, discover Sri Lanka's most compelling places."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {destinations.slice(0, 6).map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <DestinationCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-[min(1180px,92vw)] rounded-3xl bg-white p-7 sm:p-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Visit Sri Lanka"
            title="One Island, Many Worlds"
            description="Wake up by the ocean, explore ancient kingdoms by noon, and end your day in cool tea hills. Sri Lanka offers rare diversity in short travel distances."
          />
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-[min(1180px,92vw)] space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Top Experiences"
            title="Curated Moments with Meaning"
            description="Our experiences are designed around comfort, authenticity, and memorable storytelling."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {experiences.slice(0, 4).map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <ExperienceCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-[min(1180px,92vw)] space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Best Tour Packages"
            title="Ready-Made Plans, Fully Customizable"
            description="Start with our most popular Sri Lanka packages and tailor every detail to your pace."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tourPackages.slice(0, 6).map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <PackageCard item={item} />
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <Link href="/packages"><Button size="lg">View All Packages</Button></Link>
        </div>
      </section>

      <div className="mt-16">
        <ItineraryStrip />
      </div>

      <section className="mt-16 space-y-10">
        <Reveal>
          <SectionHeading eyebrow="Gallery" title="See Sri Lanka Before You Arrive" description="A quick glimpse of the landscapes, wildlife, and heritage waiting for you." />
        </Reveal>
        <GalleryStrip />
      </section>

      <section className="mx-auto mt-16 w-[min(1180px,92vw)] space-y-10">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="Trusted by International Travelers" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-[min(900px,92vw)] space-y-8">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Plan with Confidence" />
        </Reveal>
        <Reveal>
          <FAQAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="mx-auto mt-16 mb-8 w-[min(1180px,92vw)] rounded-3xl bg-[var(--ocean)] p-8 text-center text-white sm:p-12">
        <h2 className="text-3xl font-semibold">Start Your Sri Lanka Journey Today</h2>
        <p className="mt-3 text-white/85">Tell us your dates and travel style. Our specialists will send a tailored itinerary within 24 hours.</p>
        <Link href="/contact" className="mt-6 inline-block"><Button size="lg">Plan Your Trip</Button></Link>
      </section>
    </>
  );
}
