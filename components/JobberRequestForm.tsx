import Script from "next/script";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

export default function JobberRequestForm() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        media="screen"
      />
      <div id={site.jobber.clientHubId} />
      {/* Jobber's embed script reads these as literal attributes on the tag; next/script
          forwards unknown props to the DOM node at runtime, but its types don't model that. */}
      <Script
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
        strategy="afterInteractive"
        {...{
          clienthub_id: site.jobber.clientHubId,
          form_url: site.jobber.formUrl,
        }}
      />
      <noscript>
        <p className="text-sm text-black/60">
          Enable JavaScript to use this form, or{" "}
          <a href={site.jobber.hostedUrl} className="text-apex-copper underline">
            open it in a new tab
          </a>
          .
        </p>
      </noscript>
      <a
        href={site.jobber.hostedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-black/40 hover:text-apex-copper"
      >
        <ExternalLink size={14} />
        Trouble loading the form? Open it in a new tab.
      </a>
    </div>
  );
}
