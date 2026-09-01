import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Section, Kicker } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Apex Demolition & Excavation is a locally owned team serving ${site.serviceArea}.`,
};

const commitments = [
  "Clear scope and pricing before work begins",
  "Professional equipment and experienced operators",
  "Careful site management on every job",
  "Complete debris removal and final cleanup",
  "Direct communication from estimate to completion",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Apex"
        title="Locally owned. Built for heavy work."
        description={`Apex Demolition & Excavation is a locally owned team based in West Milton, Ohio, serving homeowners, property owners, builders, and businesses throughout ${site.serviceArea}.`}
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Kicker>Our Approach</Kicker>
            <h2 className="font-display text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl">
              Straight answers, done right.
            </h2>
            <p className="mt-5 leading-relaxed text-black/60">
              Every project starts with understanding the site: access, materials,
              disposal needs, and the condition the property needs to be left in. From
              there, Apex handles the demolition, excavation, land clearing, grading, and
              hauling required to move the project forward, and leaves the site ready for
              what comes next.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              We work on both residential and commercial properties, and we bring the
              same standard to every job: dependable scheduling, careful equipment
              operation, and a clean site when we&rsquo;re done.
            </p>
          </div>

          <div>
            <Kicker>What You Can Expect</Kicker>
            <h2 className="font-display text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl">
              Our commitments
            </h2>
            <ul className="mt-6 grid gap-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="mt-1 shrink-0 text-apex-copper" />
                  <span className="text-black/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t border-black/10">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-black/10 bg-apex-charcoal md:order-2">
            <div className="absolute inset-0 bg-grit opacity-30" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(182,83,24,0.18), transparent 55%)",
              }}
            />
            <Image
              src="/logo-mark-light.png"
              alt=""
              width={171}
              height={189}
              className="relative h-40 w-auto opacity-80"
            />
          </div>
          <div className="md:order-1">
            <Kicker>Meet the Owner</Kicker>
            <h2 className="font-display text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl">
              Samuel Hemmerick
            </h2>
            <p className="mt-5 leading-relaxed text-black/60">
              I&rsquo;m Samuel, owner of Apex Demolition &amp; Excavation.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              I started Apex because I wanted to build a company people could count on.
              I&rsquo;ve spent over 11 years in construction, learning the trade and
              running heavy equipment, and I&rsquo;ve seen firsthand what it takes to get
              a job done right.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              Apex is a local, family-owned business based in West Milton, Ohio, serving
              the surrounding Miami Valley. We handle demolition, excavation, hauling,
              drainage, site prep, and more.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              I&rsquo;m still growing the business, and I&rsquo;m proud of where
              it&rsquo;s headed. My goal is simple: show up, do quality work, treat
              people right, and leave every job better than I found it.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-apex-black text-white">
        <Section tight>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <Kicker dark>Service Area</Kicker>
              <p className="text-lg text-white/85">{site.serviceArea}</p>
            </div>
            <div>
              <Kicker dark>Hours</Kicker>
              <p className="text-lg text-white/85">{site.hours}</p>
            </div>
            <div>
              <Kicker dark>Contact</Kicker>
              <p className="text-lg text-white/85">
                {site.phone}
                <br />
                {site.email}
              </p>
            </div>
          </div>
        </Section>
      </div>

      <CTASection />
    </>
  );
}
