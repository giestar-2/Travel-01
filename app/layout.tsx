import type { Metadata } from "next";
import type { ReactNode } from "react";

import LucideIcons from "@/components/LucideIcons";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderly - Explore the World, One Journey at a Time",
  description:
    "Explore the world, one journey at a time. Handpicked tours and unforgettable destinations across the globe.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Google Fonts: Plus Jakarta Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-brand-orange selection:text-white">
        <Navbar />
        <Sidebar />
        {children}
        <LucideIcons />
      </body>
    </html>
  );
}
