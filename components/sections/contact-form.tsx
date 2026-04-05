"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-4 rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[0_16px_40px_rgba(1,35,54,0.08)]">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-[var(--ink)]">Full name</label>
          <Input id="name" placeholder="John Smith" required />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--ink)]">Email</label>
          <Input id="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[var(--ink)]">Phone / WhatsApp</label>
          <Input id="phone" placeholder="+1 000 000 000" />
        </div>
        <div>
          <label htmlFor="travelDate" className="mb-1 block text-sm font-medium text-[var(--ink)]">Planned travel month</label>
          <Input id="travelDate" placeholder="October 2026" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-[var(--ink)]">Tell us about your trip goals</label>
        <Textarea id="message" placeholder="We want a 9-day trip with beach + safari + tea country." />
      </div>
      <Button type="submit" className="w-full sm:w-auto">Send Inquiry</Button>
    </form>
  );
}
