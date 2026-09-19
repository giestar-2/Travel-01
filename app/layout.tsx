import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import LucideIcons from "@/components/LucideIcons";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import "./globals.css";

const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-jakarta",
  fallback: ["Arial"],
});

export const metadata: Metadata = {
  title: "Wanderly - Explore the World, One Journey at a Time",
  description:
    "Explore the world, one journey at a time. Handpicked tours and unforgettable destinations across the globe.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="selection:bg-brand-orange selection:text-white">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <Sidebar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <LucideIcons />
      </body>
    </html>
  );
}
