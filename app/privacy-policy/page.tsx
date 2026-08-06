import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 leading-relaxed text-black/70">
          <p className="text-sm text-black/50">Last updated: August 2026</p>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Information we collect
            </h2>
            <p className="mt-3">
              When you submit the contact or estimate request form on this website, we
              collect the information you provide, such as your name, phone number,
              email address, project address, and details about your project. We do not
              collect payment information through this website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              How we use your information
            </h2>
            <p className="mt-3">
              We use the information you submit to respond to your inquiry, provide
              estimates, schedule and perform work you request, and communicate with you
              about your project. We do not sell or rent your personal information to
              third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Third-party services
            </h2>
            <p className="mt-3">
              Estimate requests submitted through this website are delivered to us using
              a third-party email delivery service. That provider processes the contents
              of your submission solely to deliver it to us and does not use it for any
              other purpose.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Cookies and analytics
            </h2>
            <p className="mt-3">
              This website may use basic analytics tools to understand how visitors use
              the site, such as which pages are viewed. This data is aggregated and is
              not used to personally identify you.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Your choices
            </h2>
            <p className="mt-3">
              You can ask us to delete information you have submitted, or ask what
              information we have on file, by contacting us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-black">
              Contact us
            </h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
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
