import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";

const baseUrl = "https://www.apexdemolitionexcavation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/blog",
    "/faq",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
