import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-apex-black text-white">
      <div className="absolute inset-0 bg-grit opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 82% 12%, rgba(182,83,24,0.35), transparent 40%), linear-gradient(120deg, rgba(0,0,0,0.92) 10%, rgba(20,20,20,0.65) 60%, rgba(20,20,20,0.35) 100%)",
        }}
      />
      <div className="absolute -right-24 -bottom-32 h-[420px] w-[420px] rotate-45 border-2 border-apex-copper/30" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-apex-copper-bright">
          Demolition &middot; Excavation &middot; Land Clearing &middot; Hauling
        </p>
        <h1 className="font-display mt-5 max-w-3xl text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          Full-service demolition and excavation for homeowners, builders, and businesses
          throughout West Milton and the greater Dayton area &mdash; from teardown to
          final cleanup.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="font-display rounded-sm bg-apex-copper px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-apex-copper-bright"
          >
            Get a Free Estimate
          </Link>
          <a
            href={site.phoneHref}
            className="font-display flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-apex-copper-bright hover:text-apex-copper-bright"
          >
            <PhoneCall size={16} />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
