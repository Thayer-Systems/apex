import Link from "next/link";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";

export default function CTASection() {
  return (
    <Section>
      <div className="relative overflow-hidden bg-apex-black px-8 py-14 text-white md:px-16 md:py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 90% 10%, rgba(182,83,24,0.4), transparent 45%)",
          }}
        />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display max-w-xl text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/70">
              Tell us what needs demolished, cleared, excavated, graded, or hauled away.
              We&rsquo;ll help you figure out the right approach and give you a clear estimate.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="font-display rounded-sm bg-apex-copper px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-apex-copper-bright"
            >
              Request a Free Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="font-display rounded-sm border border-white/30 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-apex-copper-bright hover:text-apex-copper-bright"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
