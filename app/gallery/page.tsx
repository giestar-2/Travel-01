import TravelImage from "@/components/TravelImage";
import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import GalleryScripts from "@/components/scripts/GalleryScripts";

export const metadata: Metadata = {
  title: "Gallery - Wanderly",
};

const filters = [
  { value: "all", label: "All" },
  { value: "beach", label: "Beaches" },
  { value: "mountain", label: "Mountains" },
  { value: "city", label: "Cities" },
];

const photos = [
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop", alt: "Maui Beach", category: "beach" },
  { src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop", alt: "Swiss Alps", category: "mountain" },
  { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop", alt: "Paris", category: "city" },
  { src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop", alt: "Santorini", category: "beach" },
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600&auto=format&fit=crop", alt: "Norway Fjords", category: "mountain" },
  { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop", alt: "Bali", category: "beach" },
  { src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop", alt: "Lake Como", category: "city" },
  { src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600&auto=format&fit=crop", alt: "Mountain Lake", category: "mountain" },
  { src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop", alt: "London", category: "city" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=600&auto=format&fit=crop", alt: "Tropical Beach", category: "beach" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop", alt: "Mountain Range", category: "mountain" },
  { src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600&auto=format&fit=crop", alt: "Venice", category: "city" },
];

export default function GalleryPage() {
  return (
    <GalleryScripts>
      {/* PAGE HEADER */}
      <header className="pt-32 pb-12 md:pt-40 md:pb-16 max-w-7xl mx-auto px-6 md:px-12">
        <nav className="text-xs text-brand-gray mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <i data-lucide="chevron-right" className="w-3 h-3" />
          <span className="text-brand-dark font-medium">Gallery</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tight mb-4 gs-fade">Travel Gallery</h1>
        <p className="text-brand-gray text-sm md:text-base max-w-xl gs-fade">
          A glimpse into the moments and places that make every Wanderly journey unforgettable.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mt-8 gs-fade" id="galleryFilters">
          {filters.map((filter, index) => (
            <button
              key={filter.value}
              data-filter={filter.value}
              className={`filter-chip px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                index === 0
                  ? "bg-brand-orange text-white"
                  : "bg-white border border-slate-200 text-brand-dark hover:border-slate-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>

      {/* MASONRY GALLERY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]" id="galleryGrid">
          {photos.map((photo) => (
            <div key={photo.src} className="gallery-item mb-4 break-inside-avoid" data-cat={photo.category}>
              <TravelImage sizes="(min-width: 1280px) 284px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                src={photo.src}
                className="w-full rounded-2xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer gallery-img"
                alt={photo.alt}
              />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <div
        id="lightbox"
        className="fixed inset-0 z-[80] bg-black/90 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4"
      >
        <button
          id="lightboxClose"
          aria-label="Close image preview"
          className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        >
          <i data-lucide="x" className="w-6 h-6" />
        </button>
        {/* Sengaja tanpa atribut `src`: src="" membuat browser me-request ulang halaman
            ini sebagai gambar (React juga memperingatkan). Elemen tetap ada di DOM karena
            GalleryScripts mengisinya saat gambar galeri diklik. */}
        <img id="lightboxImg" alt="" className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl" />
      </div>

      {/* SHARED SECTIONS (Features + FAQ) */}
      <SharedSections />

      <Footer variant="site" />
    </GalleryScripts>
  );
}
