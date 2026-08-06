import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { Section, Kicker } from "@/components/Section";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Apex Demolition & Excavation.",
};

const generalFaqs = [
  {
    q: "What areas do you serve?",
    a: `We serve ${site.serviceArea}. Not sure if your project is in range? Send us the address and we'll let you know.`,
  },
  {
    q: "How do I get a free estimate?",
    a: "Submit the form on our Contact page, call, or email us with your project address and a few details. We'll follow up to schedule a site evaluation and provide a clear estimate before work begins.",
  },
  {
    q: "Do I need a permit for my project?",
    a: "Permit requirements vary by project scope and municipality. We'll walk you through what your specific job needs as part of the estimate.",
  },
  {
    q: "How quickly can you start?",
    a: "Scheduling depends on current workload and project scope. Call us for our current availability.",
  },
  {
    q: "Do you work on both residential and commercial properties?",
    a: "Yes. We take on projects for homeowners, property owners, builders, and businesses.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="Questions"
        title="Frequently Asked Questions"
        description="General questions about working with Apex, plus details on each of our services."
      />

      <Section>
        <Kicker>General</Kicker>
        <h2 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
          Getting started
        </h2>
        <div className="mt-6">
          <Accordion items={generalFaqs} />
        </div>
      </Section>

      {services.map((service) => (
        <Section key={service.slug} tight className="border-t border-black/10">
          <Kicker>{service.title}</Kicker>
          <h2 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
            {service.title} questions
          </h2>
          <div className="mt-6">
            <Accordion items={service.faqs} />
          </div>
        </Section>
      ))}

      <CTASection />
    </>
  );
}
