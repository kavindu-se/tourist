import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, PhoneCall, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Contact Sri Lanka Travel Experts",
  description:
    "Send your Sri Lanka travel inquiry, connect via WhatsApp, or contact our local team for personalized itinerary planning."
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] pt-28 pb-10 space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Plan Your Sri Lanka Trip with Local Experts"
          description="Share your dates, interests, and budget range. We will recommend the best route and package options."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.05}>
            <Card>
              <h3 className="text-xl font-semibold">Quick Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--ocean)]" />hello@serenesrilanka.com</p>
                <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-[var(--ocean)]" />+94 77 555 1200</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--ocean)]" />7 Hospital Street, Colombo 01, Sri Lanka</p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <h3 className="text-xl font-semibold">WhatsApp Assistance</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Chat instantly with our trip planners for urgent questions or same-week travel support.</p>
              <Link href="https://wa.me/94775551200" target="_blank" rel="noreferrer" className="mt-4 inline-block">
                <Button className="w-full sm:w-auto"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</Button>
              </Link>
            </Card>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <Card className="p-0 overflow-hidden">
          <div className="h-80 w-full bg-[var(--soft)] flex items-center justify-center text-center px-6">
            <p className="text-sm text-[var(--muted)]">Google Map Embed Placeholder: Replace with iframe embed of office location.</p>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
