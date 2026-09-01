import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Project tips and local guides from Apex Demolition & Excavation.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Blog"
        title="Tips & Local Guides"
        description="Practical advice on demolition, excavation, and sitework from the Apex crew."
      />
      <Section>
        <div className="mx-auto grid max-w-3xl gap-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid gap-6 border border-black/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[220px_1fr] sm:p-8"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 640px) 220px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-black/40">
                  {formatDate(post.date)}
                </p>
                <h2 className="font-display mt-2 text-xl font-semibold uppercase tracking-tight sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-black/60">{post.excerpt}</p>
                <span className="font-display mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-apex-copper transition-colors group-hover:text-apex-copper-bright">
                  Read more
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
