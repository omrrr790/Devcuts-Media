import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "../../components/ServicePage";
import { serviceBySlug, services } from "../data";

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
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  return <ServicePage slug={slug} />;
}