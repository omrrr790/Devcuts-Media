import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Import your new components
import Footer from "./components/Footer";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevCuts",
  description: "Your Trusted Digital Growth Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {/* 2. Add the Header here */}
                <Header />

        {/* This renders whatever page you are currently on */}
        <main>
          {children}
        </main>

        {/* 3. Add the Footer here */}
        <Footer />
      </body>
    </html>
  );
}