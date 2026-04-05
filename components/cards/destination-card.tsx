import Image from "next/image";
import { MapPin, CalendarClock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Destination = {
  slug: string;
  name: string;
  image: string;
  description: string;
  bestTime: string;
  attractions: string[];
  duration: string;
  highlight: string;
};

export function DestinationCard({ item }: { item: Destination }) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4"><Badge variant="sand">Best: {item.bestTime}</Badge></div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-[var(--ink)]">{item.name}</h3>
          <Badge variant="ocean">{item.duration}</Badge>
        </div>
        <p className="text-sm text-[var(--muted)]">{item.description}</p>
        <p className="text-sm font-medium text-[var(--ocean)]">{item.highlight}</p>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          {item.attractions.slice(0, 2).map((attraction) => (
            <li key={attraction} className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--palm)]" />{attraction}</li>
          ))}
          <li className="flex items-center gap-2"><CalendarClock className="h-4 w-4 text-[var(--sunset)]" />Ideal duration: {item.duration}</li>
        </ul>
        <Button className="w-full" variant="secondary"><Sparkles className="h-4 w-4" />Plan This Stop</Button>
      </div>
    </Card>
  );
}
