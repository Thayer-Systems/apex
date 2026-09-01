import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import CTASection from "@/components/CTASection";
import { Section } from "@/components/Section";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `https://www.apexdemolitionexcavation.com${post.image}`,
    author: { "@type": "Organization", name: "Apex Demolition & Excavation" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="relative aspect-[16/7] w-full overflow-hidden bg-apex-black">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
      </div>

      <Section tight>
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="font-display inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-apex-copper hover:text-apex-copper-bright"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <p className="font-display mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-black/40">
            {formatDate(post.date)}
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-8 space-y-6 leading-relaxed text-black/70">
            {post.body.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display mb-3 text-xl font-semibold uppercase tracking-tight text-black">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j} className="mt-3 first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
