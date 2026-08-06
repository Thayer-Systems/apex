import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { Section, Kicker } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free estimate from Apex Demolition & Excavation, or call/email us directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Request a Free Estimate"
        description="Tell us about your project and we'll follow up with next steps. For anything urgent, call us directly."
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>Contact Info</Kicker>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
              Call, email, or send a request
            </h2>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <Phone size={20} className="mt-1 shrink-0 text-apex-copper" />
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-black/50">
                    Phone
                  </p>
                  <a href={site.phoneHref} className="text-lg font-medium hover:text-apex-copper">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="mt-1 shrink-0 text-apex-copper" />
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-black/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg font-medium hover:text-apex-copper break-all"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 shrink-0 text-apex-copper" />
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-black/50">
                    Address
                  </p>
                  <p className="text-lg font-medium">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={20} className="mt-1 shrink-0 text-apex-copper" />
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-black/50">
                    Hours
                  </p>
                  <p className="text-lg font-medium">{site.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-black/10 bg-white p-6 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
