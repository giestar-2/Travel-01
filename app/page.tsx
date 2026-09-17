import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import HomeScripts from "@/components/scripts/HomeScripts";

export const metadata: Metadata = {
  title: "Wanderly - Explore the World, One Journey at a Time",
};

export default function HomePage() {
  return (
    <HomeScripts>
      {/* HERO SECTION */}
      <header className="relative overflow-hidden min-h-screen flex flex-col justify-between p-6 md:p-12 bg-slate-900 text-white shadow-2xl hero-section">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            alt="Scenic Mountain Landscape"
            className="w-full h-full object-cover object-center hero-bg scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
        </div>

        {/* Brand Big Text */}
        <div className="relative z-10 flex-1 flex items-start justify-center pt-52 md:pt-0">
          <span className="text-[5.25rem] sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold tracking-tight text-center leading-none bg-gradient-to-t from-white/0 via-white/10 to-white/50 bg-clip-text text-transparent">
            Wanderly
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-0 -mb-2 md:-mb-6">
          <h1
            id="heroTitle"
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight hero-title max-w-4xl"
          >
            Explore the World, <br className="hidden sm:inline" />
            One Journey at a Time
          </h1>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1.5 sm:p-2 rounded-full w-full max-w-xs md:w-auto md:min-w-[18rem] flex items-center justify-between shadow-2xl hero-search shrink-0">
            <div className="flex items-center pl-3 flex-1">
              <i data-lucide="search" className="w-4 h-4 text-white/70 mr-2" />
              <input
                type="text"
                placeholder="Search destination, tour, or city..."
                className="bg-transparent border-none outline-none text-white placeholder-white/70 text-xs md:text-sm w-full"
              />
            </div>
            <button className="bg-brand-orange hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-full text-xs transition-all whitespace-nowrap shadow-md">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* OUR STORY SECTION */}
      <section id="ourStory" className="max-w-7xl mx-auto px-6 md:px-12 py-24 my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-4 space-y-6 gs-fade">
            <span className="text-sm font-semibold tracking-wider uppercase text-brand-gray">Our Story</span>
            <p className="text-sm text-brand-gray leading-relaxed pr-6">
              We've guided over <strong className="text-brand-dark">10 million travelers</strong> across 120 countries,
              crafting unforgettable trips with an average <strong className="text-brand-dark">rating of 4.8★</strong>.
              Every journey is designed around what you love most.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 space-y-8 gs-fade">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-brand-dark leading-snug">
              From mountain treks to island escapes, we craft journeys that match your spirit of adventure wherever the
              road takes you.
            </h2>
            <div>
              <a
                href="#"
                className="inline-flex items-center space-x-3 bg-white border border-slate-200 hover:border-slate-300 px-6 py-3 rounded-full text-sm font-semibold text-brand-dark transition-all shadow-sm hover:shadow group"
              >
                <span>Learn More</span>
                <div className="w-7 h-7 rounded-full bg-brand-orange flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                  <i data-lucide="arrow-right" className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AMAZING DESTINATION (ASYMMETRIC GRID) */}
      <section id="explore" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gs-fade">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Our Most Amazing Destinations</h2>
          <Link
            href="/destinations"
            className="self-start inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 px-5 py-2.5 rounded-full text-sm font-semibold mt-4 sm:mt-0 transition-all bg-white shadow-sm w-auto whitespace-nowrap"
          >
            <span>Explore Now</span>
            <i data-lucide="arrow-right" className="w-4 h-4 text-brand-orange" />
          </Link>
        </div>

        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 pb-4 lg:grid lg:grid-cols-12 lg:gap-6 lg:overflow-visible lg:pb-0">
          {/* Large Card Left */}
          <div className="min-w-[85%] snap-start lg:min-w-0 lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[420px] md:min-h-[500px] group cursor-pointer shadow-lg gs-card">
            <img
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop"
              alt="Santorini Island Escape"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2">Santorini Island Escape</h3>
                <div className="flex items-center space-x-3 text-sm text-white/80">
                  <span className="flex items-center">
                    <i data-lucide="map-pin" className="w-4 h-4 mr-1 text-brand-orange" /> Santorini, Greece
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <i data-lucide="star" className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" /> 4.9 out of 5
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                <i data-lucide="arrow-up-right" className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Small Cards Right */}
          <div className="contents lg:col-span-5 lg:flex lg:flex-col lg:gap-6">
            {/* Top Card */}
            <div className="min-w-[85%] snap-start lg:min-w-0 relative rounded-3xl overflow-hidden flex-1 min-h-[420px] md:min-h-[500px] lg:min-h-[240px] group cursor-pointer shadow-lg gs-card">
              <img
                src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop"
                alt="Swiss Alps Adventure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <h3 className="text-xl font-bold mb-1">Swiss Alps Adventure</h3>
                  <div className="flex items-center space-x-2 text-xs text-white/80">
                    <span>
                      <i data-lucide="map-pin" className="w-3.5 h-3.5 inline mr-1 text-brand-orange" /> Zermatt,
                      Switzerland
                    </span>
                    <span>•</span>
                    <span>
                      <i data-lucide="star" className="w-3.5 h-3.5 inline text-yellow-400 fill-yellow-400" /> 4.9 out of
                      5
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <i data-lucide="arrow-up-right" className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="min-w-[85%] snap-start lg:min-w-0 relative rounded-3xl overflow-hidden flex-1 min-h-[420px] md:min-h-[500px] lg:min-h-[240px] group cursor-pointer shadow-lg gs-card">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
                alt="Bali Tropical Getaway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <h3 className="text-xl font-bold mb-1">Bali Tropical Getaway</h3>
                  <div className="flex items-center space-x-2 text-xs text-white/80">
                    <span>
                      <i data-lucide="map-pin" className="w-3.5 h-3.5 inline mr-1 text-brand-orange" /> Bali, Indonesia
                    </span>
                    <span>•</span>
                    <span>
                      <i data-lucide="star" className="w-3.5 h-3.5 inline text-yellow-400 fill-yellow-400" /> 4.8 out of
                      5
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <i data-lucide="arrow-up-right" className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR TOUR PACKAGES (EXPANDING PANELS) */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left: Title + Description + Arrow */}
          <div className="lg:col-span-1 space-y-5 gs-fade">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">Popular Tour Packages</h2>
              <a
                href="#"
                className="shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-orange text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 group"
              >
                <i data-lucide="arrow-up-right" className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed">
              Handpicked adventures rated by travelers around the world. Tap a destination to reveal more about the
              journey that awaits.
            </p>
          </div>

          {/* Right: Expanding Destination Panels */}
          <div className="lg:col-span-2 gs-fade">
            <div id="expandPanels" className="flex flex-col md:flex-row gap-3 h-[520px] md:h-[460px]">
              {/* Panel 1 (active by default) */}
              <div
                className="expand-panel relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-[3] min-w-0 min-h-0"
                data-panel=""
              >
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop"
                  alt="Paris City Tour"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="panel-content transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold mb-1 whitespace-nowrap">Paris City Tour</h4>
                        <p className="text-xs text-white/80 whitespace-nowrap">
                          <i data-lucide="map-pin" className="w-3.5 h-3.5 inline mr-1 text-brand-orange" /> Paris, France
                        </p>
                      </div>
                      <span className="font-extrabold text-lg whitespace-nowrap">
                        $450<span className="text-xs font-normal text-white/70">/person</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2 */}
              <div
                className="expand-panel relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-[1] min-w-0 min-h-0"
                data-panel=""
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
                  alt="Maui Island Hopping"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="panel-content transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold mb-1 whitespace-nowrap">Maui Island Hopping</h4>
                        <p className="text-xs text-white/80 whitespace-nowrap">
                          <i data-lucide="map-pin" className="w-3.5 h-3.5 inline mr-1 text-brand-orange" /> Maui, Hawaii
                        </p>
                      </div>
                      <span className="font-extrabold text-lg whitespace-nowrap">
                        $680<span className="text-xs font-normal text-white/70">/person</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 3 */}
              <div
                className="expand-panel relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-[1] min-w-0 min-h-0"
                data-panel=""
              >
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop"
                  alt="Norway Fjords Expedition"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="panel-content transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold mb-1 whitespace-nowrap">Norway Fjords</h4>
                        <p className="text-xs text-white/80 whitespace-nowrap">
                          <i data-lucide="map-pin" className="w-3.5 h-3.5 inline mr-1 text-brand-orange" /> Bergen, Norway
                        </p>
                      </div>
                      <span className="font-extrabold text-lg whitespace-nowrap">
                        $720<span className="text-xs font-normal text-white/70">/person</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 4 */}
              <div
                className="expand-panel relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-[1] min-w-0 min-h-0"
                data-panel=""
              >
                <img
                  src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop"
                  alt="Lake Como Discovery"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="panel-content transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold mb-1 whitespace-nowrap">Lake Como Discovery</h4>
                        <p className="text-xs text-white/80 whitespace-nowrap">
                          <i data-lucide="map-pin" className="w-3.5 h-3.5 inline mr-1 text-brand-orange" /> Como, Italy
                        </p>
                      </div>
                      <span className="font-extrabold text-lg whitespace-nowrap">
                        $540<span className="text-xs font-normal text-white/70">/person</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED STAYS & PARTNERS */}
      <section id="deals" className="bg-slate-100 py-20 my-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center gs-fade">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange mb-2 block">
            Explore Destinations
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark max-w-3xl mx-auto mb-6">
            Trusted Journeys, Seamless Booking Start Exploring!
          </h2>
          <p className="text-brand-gray text-sm md:text-base max-w-xl mx-auto mb-8">
            Book your next adventure in just a tap—expert local guides, effortless planning, and guaranteed best pricing.
          </p>

          <button className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-orange-500/30 mb-16">
            Get Started
          </button>

          {/* Brand Logos (running marquee) */}
          <div className="marquee-mask overflow-hidden border-y border-slate-200 py-8">
            <div className="flex w-max animate-marquee items-center gap-10 md:gap-16 opacity-60 grayscale whitespace-nowrap">
              {/* Set 1 */}
              <span className="font-serif font-extrabold text-xl tracking-widest">EMIRATES</span>
              <span className="font-sans font-black text-2xl tracking-tighter">Airbnb</span>
              <span className="font-serif tracking-widest text-lg font-light">EXPEDIA</span>
              <span className="font-mono font-bold text-xl tracking-tight">BOOKING</span>
              <span className="font-sans font-bold text-xl tracking-wide">TripAdvisor</span>
              {/* Set 2 (duplicate for seamless loop) */}
              <span className="font-serif font-extrabold text-xl tracking-widest">EMIRATES</span>
              <span className="font-sans font-black text-2xl tracking-tighter">Airbnb</span>
              <span className="font-serif tracking-widest text-lg font-light">EXPEDIA</span>
              <span className="font-mono font-bold text-xl tracking-tight">BOOKING</span>
              <span className="font-sans font-bold text-xl tracking-wide">TripAdvisor</span>
            </div>
          </div>

          {/* Interactive Mini Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16 text-left items-stretch">
            <div className="rounded-2xl overflow-hidden shadow-md h-48 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-48 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="col-span-2 md:col-span-1 bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-between shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold leading-snug">
                Join our community of explorers and experience unforgettable journeys.
              </h3>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <span className="text-sm text-white/70">hello@wanderly.com</span>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <i data-lucide="arrow-up-right" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL & FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Testimonial Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-20 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center gs-fade">
          <div className="md:col-span-5">
            <span className="text-xs font-bold uppercase text-brand-gray tracking-wider">Testimonial</span>
            <h3 className="text-2xl font-bold text-brand-dark mt-2 mb-4">
              Here's what people have to say about working together. Real moments, real feedback.
            </h3>
            <div className="flex space-x-2 mt-6">
              <button className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100">
                <i data-lucide="chevron-left" className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center">
                <i data-lucide="chevron-right" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="md:col-span-7 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 relative">
            <i data-lucide="quote" className="w-10 h-10 text-brand-orange/20 absolute top-6 right-6" />
            <p className="text-base md:text-lg font-medium text-brand-dark italic mb-6">
              "Exactly What We Needed for a Stress-Free Adventure! The whole trip was planned to perfection. Our local
              guide was amazing and every destination left us breathless. Truly unforgettable."
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <div>
                <h5 className="font-bold text-sm text-brand-dark">Sarah Ahmed</h5>
                <p className="text-xs text-brand-gray">Travel Blogger • 5.0 ★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHARED SECTIONS: Why Wanderly (features) + FAQ */}
      <SharedSections />

      {/* FOOTER / CTA SECTION */}
      <Footer variant="home" />
    </HomeScripts>
  );
}
