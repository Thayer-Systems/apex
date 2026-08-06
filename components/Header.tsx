"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-apex-black text-apex-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={48}
            height={48}
            className="h-11 w-11 rounded-sm bg-white p-1"
            priority
          />
          <span className="font-display text-lg font-semibold uppercase tracking-wide leading-tight">
            Apex
            <span className="block text-[0.6rem] font-body font-medium tracking-[0.2em] text-white/60">
              Demolition &amp; Excavation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-apex-copper-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-apex-copper-bright"
          >
            <Phone size={16} className="text-apex-copper-bright" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="font-display rounded-sm bg-apex-copper px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-apex-copper-bright"
          >
            Free Estimate
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-apex-black px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display rounded px-2 py-3 text-base font-medium uppercase tracking-wide text-white/90 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={site.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-sm bg-white/10 px-5 py-3 text-sm font-semibold text-white"
          >
            <Phone size={16} className="text-apex-copper-bright" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-display mt-2 block rounded-sm bg-apex-copper px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white"
          >
            Free Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
