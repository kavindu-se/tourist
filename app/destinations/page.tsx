import { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { DestinationBrowser } from "@/components/sections/destination-browser";

export const metadata: Metadata = {
  title: "Destinations in Sri Lanka",
  description:
    "Explore top Sri Lanka destinations including Colombo, Kandy, Ella, Sigiriya, Galle, Mirissa, Yala and more."
};

export default function DestinationsPage() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] pt-28 pb-10 space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Destinations"
          title="Choose Your Perfect Sri Lanka Route"
          description="Search and filter destinations by season and interest. Each stop includes ideal timing, attractions, and recommended duration."
        />
      </Reveal>
      <DestinationBrowser />
    </section>
  );
}
