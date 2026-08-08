"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile } from "@/data/resume";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-background/80 border-b border-white/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Image
            src="/profile.jpeg"
            alt={profile.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
            priority
          />
          <span className="text-gradient">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
