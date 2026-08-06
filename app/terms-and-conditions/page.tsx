import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for using ${site.name}'s website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms &amp; Conditions" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 leading-relaxed text-black/70">
          <p className="text-sm text-black/50">Last updated: August 2026</p>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Use of this website
            </h2>
            <p className="mt-3">
              This website is provided to share information about {site.name} and to let
              visitors request estimates. By using this site, you agree to use it only
              for lawful purposes and to provide accurate information when submitting a
              form.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Estimates and services
            </h2>
            <p className="mt-3">
              Information on this website, including service descriptions, is provided
              for general informational purposes and does not constitute a binding
              estimate or contract. Project scope, pricing, and timelines are confirmed
              directly with you before work begins. Actual services are governed by the
              separate agreement or estimate provided for your specific project.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              No warranty on website content
            </h2>
            <p className="mt-3">
              We make reasonable efforts to keep this website accurate and up to date,
              but we make no warranties or guarantees about the completeness or accuracy
              of its content. Photos may show representative work and are not a
              guarantee of specific outcomes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Limitation of liability
            </h2>
            <p className="mt-3">
              {site.name} is not liable for any indirect, incidental, or consequential
              damages arising from your use of this website. This does not limit any
              liability related to services actually performed, which is governed by
              your project agreement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the State of Ohio, without regard
              to its conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Changes to these terms
            </h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of this website
              after changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Contact us
            </h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-apex-copper hover:underline">
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
