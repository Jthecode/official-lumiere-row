import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lumiererow.com"),
  title: {
    default: "Lumière Row | Luxury Skincare for Mature Skin",
    template: "%s | Lumière Row",
  },
  description:
    "Luxury skincare for mature skin featuring advanced technology, caffeine, natural vitamins, and salmon DNA-inspired care designed to hydrate, firm, smooth, and restore radiance.",
  keywords: [
    "Lumière Row",
    "luxury skincare",
    "mature skin",
    "advanced skincare technology",
    "patented skincare technology",
    "caffeine skincare",
    "natural vitamins skincare",
    "salmon DNA skincare",
    "firming skincare",
    "hydrating skincare",
    "radiance skincare",
    "glass skincare website",
  ],
  applicationName: "Lumière Row",
  category: "Beauty",
  creator: "Lumière Row",
  publisher: "Lumière Row",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumière Row | Luxury Skincare for Mature Skin",
    description:
      "Luxury skincare for mature skin featuring advanced technology, caffeine, natural vitamins, and salmon DNA-inspired care designed to hydrate, firm, smooth, and restore radiance.",
    url: "/",
    siteName: "Lumière Row",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Row | Luxury Skincare for Mature Skin",
    description:
      "Luxury skincare for mature skin featuring advanced technology, caffeine, natural vitamins, and salmon DNA-inspired care designed to hydrate, firm, smooth, and restore radiance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} min-h-screen bg-(--background) text-(--foreground) antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <AnnouncementBar />
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}