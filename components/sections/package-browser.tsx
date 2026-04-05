"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { tourPackages } from "@/data/packages";
import { PackageCard } from "@/components/cards/package-card";
import { Input } from "@/components/ui/input";

export function PackageBrowser() {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("all");

  const filtered = useMemo(() => {
    return tourPackages.filter((p) => {
      const matchQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.locations.join(" ").toLowerCase().includes(query.toLowerCase());
      const matchDuration =
        duration === "all" ||
        (duration === "short" && p.duration.startsWith("5")) ||
        (duration === "week" && (p.duration.startsWith("7") || p.duration.startsWith("8"))) ||
        (duration === "long" && (p.duration.startsWith("9") || p.duration.startsWith("10") || p.duration.startsWith("12")));
      return matchQuery && matchDuration;
    });
  }, [query, duration]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-2xl border border-[var(--line)] bg-white p-4 md:grid-cols-[1fr_220px]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search packages" className="pl-9" />
        </label>
        <select className="h-11 rounded-xl border border-[var(--line)] px-3 text-sm text-[var(--ink)]" value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="all">All Durations</option>
          <option value="short">5-6 Days</option>
          <option value="week">7-8 Days</option>
          <option value="long">9+ Days</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => <PackageCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
