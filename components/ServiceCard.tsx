import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative h-full border border-black/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute left-0 top-0 h-1 w-16 bg-apex-copper" />
      <h3 className="font-display mt-3 text-2xl font-semibold uppercase tracking-tight">
        {service.title}
      </h3>
      <p className="mt-3 leading-relaxed text-black/60">{service.summary}</p>
      <Link
        href={`/services/${service.slug}`}
        className="font-display mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-apex-copper transition-colors group-hover:text-apex-copper-bright"
      >
        Explore {service.shortTitle}
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
