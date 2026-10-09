import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// 1. Import your new components
import Footer from "./components/Footer";
import Header from "./components/header";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Display font for headings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devcuts.com"),
  title: "Devcuts Media — Premium Web Development & Digital Growth Studio",
  description:
    "Devcuts Media is a senior-level digital studio crafting Next.js platforms, AI-powered workflows, ERP/CRM systems and growth campaigns that deliver measurable results.",
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
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}