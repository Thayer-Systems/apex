import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-black/10 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-apex-copper" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-black/60">{service.summary}</p>
        <Link
          href={`/services/${service.slug}`}
          className="font-display mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-apex-copper transition-colors group-hover:text-apex-copper-bright"
        >
          Explore {service.shortTitle}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
