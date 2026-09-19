import TravelImage from "@/components/TravelImage";
import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";

export const metadata: Metadata = {
  title: "Santorini Island Escape - Wanderly",
};

const highlights = [
  { icon: "sunset", label: "Sunset cruise around the caldera" },
  { icon: "wine", label: "Traditional winery tasting tour" },
  { icon: "waves", label: "Black-sand beach relaxation" },
  { icon: "camera", label: "Guided photo walk in Oia village" },
];

const itinerary = [
  {
    title: "Day 1 — Arrival in Fira",
    description: "Airport transfer, hotel check-in, and an evening welcome dinner overlooking the caldera.",
    active: true,
  },
  {
    title: "Day 2 — Oia & Sunset Cruise",
    description: "Explore Oia's iconic streets, followed by a catamaran cruise with dinner at sea.",
    active: false,
  },
  {
    title: "Day 3 — Wine & Villages",
    description: "Visit traditional wineries and hidden villages with a local guide.",
    active: false,
  },
  {
    title: "Day 4 — Beaches & Leisure",
    description: "Free day to relax on Santorini's famous black-sand beaches.",
    active: false,
  },
  {
    title: "Day 5 — Departure",
    description: "Breakfast and airport transfer for your journey home.",
    active: false,
  },
];

const galleryPreview = [
  { src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop", alt: "Santorini view" },
  { src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=600&auto=format&fit=crop", alt: "Santorini domes" },
  { src: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=600&auto=format&fit=crop", alt: "Santorini street" },
];

const included = ["Accommodation included", "Daily breakfast", "Local expert guide", "Airport transfers"];

export default function DestinationDetailPage() {
  return (
    <>
      <div className="pt-24 md:pt-28">
        {/* BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <nav className="flex items-center flex-wrap gap-2 text-sm text-brand-gray">
            <Link href="/" className="hover:text-brand-orange">
              Home
            </Link>
            <i data-lucide="chevron-right" className="w-4 h-4" />
            <Link href="/destinations" className="hover:text-brand-orange">
              Destinations
            </Link>
            <i data-lucide="chevron-right" className="w-4 h-4" />
            <span className="text-brand-dark font-medium">Santorini Island Escape</span>
          </nav>
        </div>

        {/* HERO IMAGE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative rounded-3xl overflow-hidden h-[380px] md:h-[520px] shadow-xl">
            <TravelImage priority sizes="(min-width: 1280px) 1184px, 100vw"
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1600&auto=format&fit=crop"
              alt="Santorini Island Escape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white">
              <span className="inline-block bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Island Escape
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2">Santorini Island Escape</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/90">
                <span className="flex items-center">
                  <i data-lucide="map-pin" className="w-4 h-4 mr-1 text-brand-orange" /> Santorini, Greece
                </span>
                <span className="flex items-center">
                  <i data-lucide="star" className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" /> 4.9 (1,204 reviews)
                </span>
                <span className="flex items-center">
                  <i data-lucide="clock" className="w-4 h-4 mr-1 text-brand-orange" /> 5 Days / 4 Nights
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">About This Journey</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                Discover the whitewashed villages, cobalt-domed churches, and dramatic caldera views that make Santorini
                one of the most breathtaking islands in the world. This carefully crafted trip blends relaxation,
                culture, and unforgettable sunsets over the Aegean Sea.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Wander through the charming streets of Oia, sail around volcanic islets, taste award-winning local wines,
                and unwind on unique black-sand beaches. Every detail is handled so you can focus on the experience.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Trip Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="flex items-start space-x-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
                  >
                    <i data-lucide={highlight.icon} className="w-5 h-5 text-brand-orange mt-0.5" />
                    <span className="text-sm text-brand-dark font-medium">{highlight.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Itinerary</h2>
              <div className="space-y-4">
                {itinerary.map((day) => (
                  <div
                    key={day.title}
                    className={`pl-5 relative ${day.active ? "border-l-2 border-brand-orange" : "border-l-2 border-slate-200"}`}
                  >
                    <span
                      className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${
                        day.active ? "bg-brand-orange" : "bg-slate-300"
                      }`}
                    ></span>
                    <h3 className="font-bold text-brand-dark">{day.title}</h3>
                    <p className="text-sm text-brand-gray mt-1">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery preview */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {galleryPreview.map((image) => (
                  <TravelImage sizes="(min-width: 1024px) 240px, 33vw"
                    key={image.src}
                    src={image.src}
                    className="rounded-2xl h-40 w-full object-cover"
                    alt={image.alt}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-6 shadow-lg space-y-5">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-sm text-brand-gray">Starting from</span>
                  <div className="text-3xl font-extrabold text-brand-dark">
                    $1,290<span className="text-sm font-normal text-brand-gray">/person</span>
                  </div>
                </div>
                <span className="flex items-center text-sm font-semibold text-brand-dark">
                  <i data-lucide="star" className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" /> 4.9
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <label htmlFor="booking-date" className="text-xs font-semibold text-brand-gray block mb-1">Departure Date</label>
                  <input id="booking-date"
                    type="date"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label htmlFor="booking-guests" className="text-xs font-semibold text-brand-gray block mb-1">Travelers</label>
                  <select id="booking-guests" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-orange">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-brand-orange hover:bg-orange-800 text-white font-semibold py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-orange-500/30">
                Book This Trip
              </button>
              <p className="text-xs text-center text-brand-gray">Free cancellation up to 14 days before departure</p>

              <div className="border-t border-slate-100 pt-4 space-y-2 text-sm">
                {included.map((item) => (
                  <div key={item} className="flex items-center text-brand-gray">
                    <i data-lucide="check" className="w-4 h-4 mr-2 text-brand-orange" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SHARED SECTIONS (Features + FAQ) */}
      <SharedSections />

      <Footer variant="destinationDetail" />
    </>
  );
}
