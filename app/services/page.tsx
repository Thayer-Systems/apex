import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Section } from "@/components/Section";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Demolition, excavation, land clearing, and hauling services for residential and commercial properties in West Milton and the greater Dayton area.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What We Do"
        title="Full-Service Sitework"
        description="From teardown to final cleanup, Apex brings the equipment and experience to handle every stage of your project."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
