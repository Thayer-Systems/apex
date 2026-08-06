import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-apex-black text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Image
              src="/logo-mark-light.png"
              alt={site.name}
              width={171}
              height={189}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-apex-copper-bright">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="hover:text-apex-copper-bright">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-apex-copper-bright">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href={site.phoneHref} className="hover:text-apex-copper-bright">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-apex-copper-bright break-all">
                  {site.email}
                </a>
              </li>
              <li>
                {site.address.line1}
                <br />
                {site.address.line2}
              </li>
              <li>{site.hours}</li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 hover:text-apex-copper-bright"
                >
                  <ExternalLink size={16} /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white/70">
              Terms &amp; Conditions
            </Link>
            <span>Proudly serving {site.serviceArea}.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
