"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/cards/destination-card";
import { Input } from "@/components/ui/input";

export function DestinationBrowser() {
  const [query, setQuery] = useState("");
  const [season, setSeason] = useState("all");

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchQuery = d.name.toLowerCase().includes(query.toLowerCase()) || d.description.toLowerCase().includes(query.toLowerCase());
      const matchSeason = season === "all" || d.bestTime.toLowerCase().includes(season);
      return matchQuery && matchSeason;
    });
  }, [query, season]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-2xl border border-[var(--line)] bg-white p-4 md:grid-cols-[1fr_220px]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search destinations" className="pl-9" />
        </label>
        <select className="h-11 rounded-xl border border-[var(--line)] px-3 text-sm text-[var(--ink)]" value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="all">All Seasons</option>
          <option value="jan">January-April</option>
          <option value="may">May-September</option>
          <option value="nov">November-April</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => <DestinationCard key={item.slug} item={item} />)}
      </div>
    </div>
  );
}
