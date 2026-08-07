import HomeHero from "@/components/HomeHero";
import TickerBar from "@/components/TickerBar";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import WhyApex from "@/components/WhyApex";
import RecentWork from "@/components/RecentWork";
import CTASection from "@/components/CTASection";
import { Section, Kicker } from "@/components/Section";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TickerBar />

      <Section id="services">
        <Kicker>Full-Service Sitework</Kicker>
        <h2 className="font-display max-w-2xl text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl md:text-5xl">
          One team from clearing to cleanup.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-black/60">
          Apex handles the demanding work required to move a property forward:
          demolition, excavation, land clearing, grading, and hauling, all with one
          crew and one point of contact from start to finish.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <div className="bg-apex-black text-white">
        <Section>
          <WhyApex />
        </Section>
      </div>

      <div className="bg-apex-charcoal text-white">
        <Section>
          <Kicker dark>Recent Work</Kicker>
          <h2 className="font-display max-w-2xl text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl md:text-5xl">
            See the difference the right crew makes.
          </h2>
          <div className="mt-10">
            <RecentWork />
          </div>
        </Section>
      </div>

      <Section>
        <Kicker>How It Works</Kicker>
        <h2 className="font-display max-w-2xl text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl md:text-5xl">
          A clear process from estimate to cleanup.
        </h2>
        <div className="mt-10">
          <ProcessSteps />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
