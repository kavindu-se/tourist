import { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { PackageBrowser } from "@/components/sections/package-browser";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Sri Lanka Tour Packages",
  description:
    "Compare curated Sri Lanka tour packages by duration, route, inclusions, and price. Book a package and customize it with local experts."
};

export default function PackagesPage() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] pt-28 pb-10 space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Tour Packages"
          title="High-Value Sri Lanka Packages"
          description="Browse sample packages with transparent inclusions and clear pricing, then customize for your travel dates."
        />
      </Reveal>
      <PackageBrowser />
    </section>
  );
}
