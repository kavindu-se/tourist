import Link from "next/link";
import { Camera, Globe, Send, Mail, PhoneCall, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[var(--ink)] text-white">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Sri Lanka Travel Designers</p>
          <h3 className="mt-3 text-2xl font-semibold">Crafted island journeys with local experts.</h3>
          <p className="mt-3 text-sm text-white/75">Luxury stays, curated itineraries, and 24/7 destination support for international travelers.</p>
          <div className="mt-5 flex gap-4 text-white/80">
            <Camera className="h-5 w-5" />
            <Globe className="h-5 w-5" />
            <Send className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-3 text-sm text-white/80">
          <p className="font-semibold text-white">Quick Links</p>
          <Link href="/destinations" className="block hover:text-white">Top Destinations</Link>
          <Link href="/experiences" className="block hover:text-white">Experiences</Link>
          <Link href="/packages" className="block hover:text-white">Tour Packages</Link>
          <Link href="/about" className="block hover:text-white">About Sri Lanka</Link>
          <Link href="/contact" className="block hover:text-white">Contact</Link>
        </div>

        <div>
          <p className="font-semibold">Stay Updated</p>
          <p className="mt-2 text-sm text-white/75">Get seasonal offers and itinerary ideas.</p>
          <div className="mt-4 space-y-3">
            <Input placeholder="Your email" className="border-white/30 bg-transparent text-white placeholder:text-white/60" />
            <Button className="w-full">Subscribe</Button>
          </div>
          <div className="mt-5 space-y-2 text-xs text-white/75">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" />hello@serenesrilanka.com</p>
            <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4" />+94 77 555 1200</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />7 Hospital Street, Colombo 01</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
