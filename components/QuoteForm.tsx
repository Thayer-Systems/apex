"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const inputClass =
  "w-full min-h-[50px] border border-black/15 bg-white px-4 py-3 text-sm text-apex-black outline-none transition-colors focus:border-apex-copper";
const labelClass =
  "font-display block text-xs font-semibold uppercase tracking-[0.08em] text-black/70 mb-2";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-apex-copper/30 bg-apex-copper/5 p-8 text-center">
        <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
          Request received
        </h3>
        <p className="mt-3 text-black/60">
          Thanks for reaching out. We&rsquo;ll get back to you shortly. For anything urgent,
          call us directly at{" "}
          <a href={site.phoneHref} className="font-semibold text-apex-copper">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name*
          </label>
          <input required id="name" name="name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone*
          </label>
          <input required id="phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email*
          </label>
          <input required id="email" name="email" type="email" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="address">
            Project Address
          </label>
          <input id="address" name="address" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="service">
          Service Needed
        </label>
        <select id="service" name="service" className={inputClass}>
          <option>Demolition</option>
          <option>Excavation</option>
          <option>Land Clearing &amp; Sitework</option>
          <option>Hauling &amp; Material Delivery</option>
          <option>Not sure / other</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Project Details*
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-apex-copper">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-display w-full rounded-sm bg-apex-copper px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-apex-copper-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
