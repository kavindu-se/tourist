"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solidNav = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", solidNav ? "bg-[var(--bg)]/95 shadow-sm backdrop-blur-lg" : "bg-transparent")}>
      <div className="mx-auto flex h-16 w-[min(1180px,92vw)] items-center justify-between">
        <Link href="/" className={cn("text-lg font-bold tracking-wide", solidNav ? "text-[var(--ink)]" : "text-white")}>Serene Sri Lanka</Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition", solidNav ? "text-[var(--ink)] hover:text-[var(--ocean)]" : "text-white/90 hover:text-white")}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact"><Button size="sm">Plan Your Trip</Button></Link>
        </nav>

        <button className={cn("md:hidden", solidNav ? "text-[var(--ink)]" : "text-white")} onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto w-[min(1180px,92vw)] pb-4 md:hidden">
          <div className="space-y-3 rounded-2xl border border-[var(--line)] bg-white p-4 shadow-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm font-medium text-[var(--ink)]" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
