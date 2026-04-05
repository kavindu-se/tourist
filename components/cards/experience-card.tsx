import Image from "next/image";
import { Card } from "@/components/ui/card";

export type Experience = {
  name: string;
  image: string;
  summary: string;
  points: string[];
};

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative h-44">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-[var(--ink)]">{item.name}</h3>
        <p className="text-sm text-[var(--muted)]">{item.summary}</p>
        <ul className="space-y-1 text-sm text-[var(--muted)]">
          {item.points.map((point) => <li key={point}>• {point}</li>)}
        </ul>
      </div>
    </Card>
  );
}
