import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import DestinationsScripts from "@/components/scripts/DestinationsScripts";

export const metadata: Metadata = {
  title: "Wanderly - Destinations",
};

const destinations = [
  {
    title: "Santorini Island Escape",
    rating: "4.9",
    location: "Santorini, Greece",
    price: "$450",
    tag: "Islands",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Swiss Alps Adventure",
    rating: "4.9",
    location: "Zermatt, Switzerland",
    price: "$720",
    tag: "Mountains",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Bali Tropical Getaway",
    rating: "4.8",
    location: "Bali, Indonesia",
    price: "$380",
    tag: "Beaches",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Paris City Tour",
    rating: "4.7",
    location: "Paris, France",
    price: "$450",
    tag: "Cities",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Norway Fjords Expedition",
    rating: "4.9",
    location: "Bergen, Norway",
    price: "$720",
    tag: "Mountains",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Lake Como Discovery",
    rating: "4.8",
    location: "Como, Italy",
    price: "$540",
    tag: "Cities",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
  },
];

const filters = ["All", "Beaches", "Mountains", "Cities", "Islands"];

export default function DestinationsPage() {
  return (
    <DestinationsScripts>
      {/* PAGE HEADER */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1974&auto=format&fit=crop"
            alt="Destinations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <nav className="text-sm text-white/70 mb-4 flex items-center space-x-2">
            <Link href="/" className="hover:text-brand-orange">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Destinations</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Explore Destinations</h1>
          <p className="text-white/80 max-w-xl">
            Discover handpicked places around the globe, from island escapes to mountain adventures.
          </p>
        </div>
      </header>

      {/* FILTER BAR */}
      <section id="destinationFilters" className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                index === 0 ? "bg-brand-orange text-white shadow-md" : "bg-white border border-slate-200 hover:border-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* DESTINATION GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="destinationGrid">
          {destinations.map((destination) => (
            <Link
              key={destination.title}
              href="/destination-detail"
              className="gs-card group block rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-brand-dark text-xs font-semibold px-3 py-1 rounded-full">
                  {destination.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg group-hover:text-brand-orange transition-colors">{destination.title}</h3>
                  <span className="flex items-center text-sm text-brand-gray">
                    <i data-lucide="star" className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                    {destination.rating}
                  </span>
                </div>
                <p className="text-xs text-brand-gray mb-4">
                  <i data-lucide="map-pin" className="w-3.5 h-3.5 inline mr-1 text-brand-orange" /> {destination.location}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-brand-dark">
                    {destination.price}
                    <span className="text-xs font-normal text-brand-gray">/person</span>
                  </span>
                  <span className="text-brand-orange text-sm font-semibold inline-flex items-center">
                    View <i data-lucide="arrow-up-right" className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SHARED SECTIONS (Features + FAQ) */}
      <SharedSections />

      <Footer variant="destinations" />
    </DestinationsScripts>
  );
}
