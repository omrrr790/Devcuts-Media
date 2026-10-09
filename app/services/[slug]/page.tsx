import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "../../components/ServicePage";
import { serviceBySlug, services } from "../data";
import { site } from "../../data/site";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      type: "website",
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDesc,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicePage slug={slug} />
    </>
  );
}
