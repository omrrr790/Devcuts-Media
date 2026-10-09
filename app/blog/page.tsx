import type { Metadata } from "next";
import BlogIndex from "../components/BlogIndex";
import { allPosts } from "./data";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Blog — Web, Mobile, ERP & AI Insights | Devcuts Media",
  description:
    "Practical guides on custom software, ERP/CRM, AI automation, and digital growth from the Devcuts Media engineering team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Insights from Devcuts Media",
    description:
      "Practical guides on custom software, ERP/CRM, AI automation, and digital growth.",
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
