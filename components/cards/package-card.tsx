import { Check, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type Package = {
  id: string;
  title: string;
  duration: string;
  locations: string[];
  inclusions: string[];
  price: string;
  featured?: boolean;
};

export function PackageCard({ item }: { item: Package }) {
  return (
    <Card className="relative h-full">
      {item.featured ? <Badge className="absolute right-5 top-5" variant="sand">Featured</Badge> : null}
      <h3 className="pr-20 text-xl font-semibold text-[var(--ink)]">{item.title}</h3>
      <p className="mt-2 text-sm font-medium text-[var(--ocean)]">{item.duration}</p>
      <p className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]"><MapPinned className="h-4 w-4 text-[var(--palm)]" />{item.locations.join(" • ")}</p>
      <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
        {item.inclusions.map((inclusion) => (
          <li key={inclusion} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sunset)]" />{inclusion}</li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-xl font-bold text-[var(--ink)]">{item.price}</p>
        <Button>Book Now</Button>
      </div>
    </Card>
  );
}
