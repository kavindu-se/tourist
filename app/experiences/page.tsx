import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { ExperienceCard } from "@/components/cards/experience-card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
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
        {experiences.map((item) => (
          <ExperienceCard key={item.name} item={item} />
        ))}
      </div>

      <section className="rounded-3xl border border-[#d9e7ee] bg-[linear-gradient(120deg,#0f5d7a,#1f7f6b)] p-7 text-white shadow-[0_24px_50px_rgba(15,93,122,0.24)] sm:p-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
          <Star className="h-3.5 w-3.5" /> Freelancer Profile
        </p>
        <h3 className="mt-4 text-3xl font-semibold leading-tight">
          Need a Website Like This for Your Travel Agency?
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
          I build premium tourism websites with modern UI/UX, destination pages, lead forms, and WhatsApp integration.
          View my Fiverr service and message me for a fast custom quote.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="https://www.fiverr.com/kavindukav86/create-eye-catching-social-media-posts-for-your-brand?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=009c8c879e0e467c957f0896a049ca83&context=recommendation&pckg_id=1&pos=2&context_alg=recently_viewed&seller_online=true&imp_id=78c8db43-e564-4441-b2b1-ee38ff83c4a0"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-white text-[var(--ocean)] hover:bg-[#eaf4fb]">
              View Fiverr Service <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
          <p className="text-xs text-white/85">Kavindu Kavinda • WhatsApp: 0776122377</p>
        </div>
      </section>
    </section>
  );
}
