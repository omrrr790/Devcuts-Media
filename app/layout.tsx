import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// 1. Import your new components
import Footer from "./components/Footer";
import Header from "./components/header";
import { site, sameAs, siteConfig } from "./data/site";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display font for headings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: siteConfig.meta.home.title,
    template: "%s",
  },
  description: siteConfig.meta.home.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    ...siteConfig.keywords.primary,
    ...siteConfig.keywords.secondary,
    "Devcuts Media",
  ],
  category: "technology",
  verification: {
    google: "mdCXjlR37fRsEvV0h-iwdBHlyyQA8ql8IPMGYvtZUeY",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: siteConfig.meta.home.title,
    description: siteConfig.meta.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.home.title,
    description: siteConfig.meta.home.description,
    creator: "@devcutsmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}${site.logo}`,
  logo: `${site.url}${site.logo}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressCountry: site.country,
  },
  areaServed: ["Pakistan", "United States", "United Kingdom", "United Arab Emirates", "Australia"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      email: site.email,
      availableLanguage: ["en", "ur"],
      areaServed: "Worldwide",
    },
  ],
  sameAs,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": `${site.url}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} bg-[var(--color-bg)]`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
