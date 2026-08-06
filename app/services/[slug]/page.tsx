import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { Section, Kicker } from "@/components/Section";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        kicker="Service"
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Kicker>What&rsquo;s Included</Kicker>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
              {service.title} services
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Check size={18} className="mt-1 shrink-0 text-apex-copper" />
                  <span className="text-black/70">{bullet}</span>
                </li>
              ))}
            </ul>

            {service.faqs.length > 0 && (
              <div className="mt-14">
                <Kicker>FAQ</Kicker>
                <h2 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                  Common questions
                </h2>
                <div className="mt-6">
                  <Accordion items={service.faqs} />
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit border border-black/10 bg-white p-8">
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
              Other Services
            </h3>
            <ul className="mt-5 grid gap-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-display flex items-center justify-between border-b border-black/10 py-3 text-sm font-semibold uppercase tracking-wide text-black/70 transition-colors hover:text-apex-copper"
                  >
                    {s.shortTitle}
                    <ArrowRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="font-display mt-6 block rounded-sm bg-apex-copper px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-apex-copper-bright"
            >
              Get a Free Estimate
            </Link>
          </aside>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
