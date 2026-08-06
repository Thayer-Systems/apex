import Image from "next/image";
import { Check } from "lucide-react";
import { Kicker } from "@/components/Section";

const points = [
  "Dependable scheduling and clear communication",
  "Professional equipment and careful site management",
  "Residential and commercial capabilities",
  "Complete debris removal and final cleanup",
  "Locally owned and operated in West Milton, Ohio",
];

export default function WhyApex() {
  return (
    <div className="grid items-center gap-14 md:grid-cols-2">
      <div>
        <Kicker dark>Why Apex</Kicker>
        <h2 className="font-display text-3xl font-semibold uppercase leading-[1] tracking-tight sm:text-4xl md:text-5xl">
          Heavy work. Straight answers.
        </h2>
        <p className="mt-5 max-w-lg leading-relaxed text-white/70">
          Every project starts with a clear understanding of access, scope, materials,
          disposal, and the condition the site needs to be left in when the work is done.
        </p>
        <ul className="mt-8 grid gap-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Check size={18} className="mt-1 shrink-0 text-apex-copper-bright" />
              <span className="text-white/85">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-square overflow-hidden border border-white/10 bg-apex-charcoal">
        <Image
          src="/photos/why-apex-crew.jpg"
          alt="Apex crew setting up a concrete patio pour"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.55), transparent 45%), radial-gradient(circle at 30% 20%, rgba(182,83,24,0.18), transparent 55%)",
          }}
        />
      </div>
    </div>
  );
}
