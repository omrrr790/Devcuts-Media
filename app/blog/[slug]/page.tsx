import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "../../components/BlogArticle";
import { postBySlug, posts } from "../data";
import { site } from "../../data/site";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}${site.logo}` },
    },
    keywords: post.tags.join(", "),
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    url: `${site.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogArticle slug={slug} />
    </>
  );
}
