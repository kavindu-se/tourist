import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export type Testimonial = {
  name: string;
  country: string;
  text: string;
};

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Card className="h-full">
      <Quote className="h-6 w-6 text-[var(--sunset)]" />
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
      <div className="mt-5">
        <p className="font-semibold text-[var(--ink)]">{item.name}</p>
        <p className="text-sm text-[var(--muted)]">{item.country}</p>
      </div>
    </Card>
  );
}
