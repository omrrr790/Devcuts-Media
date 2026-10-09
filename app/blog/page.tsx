import type { Metadata } from "next";
import BlogIndex from "../components/BlogIndex";
import { allPosts } from "./data";
import { site, siteConfig } from "../data/site";

export const metadata: Metadata = {
  title: siteConfig.meta.blog.title,
  description: siteConfig.meta.blog.description,
  keywords: siteConfig.meta.blog.keywords,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: siteConfig.meta.blog.title,
    description: siteConfig.meta.blog.description,
    type: "website",
    url: "/blog",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Devcuts Media Blog",
    url: `${site.url}/blog`,
    blogPost: allPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
      url: `${site.url}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogIndex />
    </>
  );
}
