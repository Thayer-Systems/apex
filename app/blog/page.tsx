import type { Metadata } from "next";
import Link from "next/link";
import { Hammer } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Project updates and tips from Apex Demolition & Excavation, coming soon.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero kicker="Blog" title="Coming Soon" />
      <Section>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <Hammer size={40} className="text-apex-copper" />
          <h2 className="font-display mt-6 text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
            We&rsquo;re building this out.
          </h2>
          <p className="mt-4 leading-relaxed text-black/60">
            Project stories, before-and-after photos, and tips on demolition, excavation,
            and sitework are on the way. In the meantime, call or send a request and
            we&rsquo;ll answer any questions directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="font-display rounded-sm bg-apex-copper px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-apex-copper-bright"
            >
              Get a Free Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="font-display flex items-center rounded-sm border border-black/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:border-apex-copper hover:text-apex-copper"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
