"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-apex-black text-apex-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo-horizontal-light.png"
            alt={site.name}
            width={1131}
            height={385}
            className="h-11 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="font-display flex items-center gap-1 text-sm font-medium uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-apex-copper-bright"
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="border border-white/10 bg-apex-black shadow-xl">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="font-display block border-b border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-white/80 transition-colors last:border-b-0 hover:bg-white/5 hover:text-apex-copper-bright"
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-sm font-medium uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-apex-copper-bright"
              >
                {item.label}
              </Link>
            )
          )}
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
            {nav.map((item) =>
              item.label === "Services" ? (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-display flex-1 rounded px-2 py-3 text-base font-medium uppercase tracking-wide text-white/90 hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services submenu"
                      className="p-3 text-white/70"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      <ChevronDown
                        size={18}
                        className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="ml-2 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setOpen(false)}
                          className="font-display rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-white/70 hover:bg-white/5"
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display rounded px-2 py-3 text-base font-medium uppercase tracking-wide text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              )
            )}
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
