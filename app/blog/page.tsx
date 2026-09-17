import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import BlogScripts from "@/components/scripts/BlogScripts";

export const metadata: Metadata = {
  title: "Blog - Wanderly",
};

const posts = [
  {
    category: "Tips",
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "How to Pack Light for a 2-Week Multi-Country Trip",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "City Guide",
    date: "June 20, 2026",
    readTime: "6 min read",
    title: "48 Hours in Paris: The Perfect Weekend Itinerary",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Adventure",
    date: "June 14, 2026",
    readTime: "7 min read",
    title: "A Beginner's Guide to Hiking the Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Food",
    date: "June 5, 2026",
    readTime: "4 min read",
    title: "Street Food in Bali: What to Eat and Where to Find It",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Nature",
    date: "May 30, 2026",
    readTime: "9 min read",
    title: "Chasing the Northern Lights: Best Spots in Norway",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Budget",
    date: "May 22, 2026",
    readTime: "6 min read",
    title: "How to Travel Europe on $50 a Day",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <BlogScripts>
      {/* PAGE HEADER */}
      <header className="pt-32 pb-10 md:pt-40 md:pb-12 max-w-7xl mx-auto px-6 md:px-12">
        <nav className="text-xs text-brand-gray mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <i data-lucide="chevron-right" className="w-3 h-3" />
          <span className="text-brand-dark font-medium">Blog</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tight mb-4 gs-fade">Travel Stories & Guides</h1>
        <p className="text-brand-gray text-sm md:text-base max-w-xl gs-fade">
          Tips, guides, and inspiring stories to fuel your next great adventure.
        </p>
      </header>

      {/* FEATURED POST */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Link
          href="/blog-detail"
          className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 gs-fade"
        >
          <div className="relative h-64 lg:h-full min-h-[320px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Featured"
            />
            <span className="absolute top-6 left-6 bg-brand-orange text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Featured
            </span>
          </div>
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 text-xs text-brand-gray mb-4">
              <span className="bg-slate-100 px-3 py-1 rounded-full font-medium">Adventure</span>
              <span>July 12, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark leading-tight mb-4 group-hover:text-brand-orange transition-colors">
              10 Hidden Gems in Southeast Asia You Need to Visit in 2026
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              From secret beaches in the Philippines to untouched mountain villages in Vietnam, discover the destinations
              that most travelers overlook.
            </p>
            <span className="inline-flex items-center gap-2 text-brand-dark font-semibold text-sm">
              Read Article
              <i
                data-lucide="arrow-up-right"
                className="w-4 h-4 text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </span>
          </div>
        </Link>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.title} href="/blog-detail" className="group gs-fade">
              <div className="rounded-2xl overflow-hidden h-56 mb-5 shadow-md relative">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt=""
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-dark text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-gray mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-bold text-lg text-brand-dark leading-snug group-hover:text-brand-orange transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 md:p-14 text-center gs-fade">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Never Miss a Story</h2>
          <p className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8">
            Subscribe to get travel tips, destination guides, and exclusive deals straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-brand-orange transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* SHARED SECTIONS (Features + FAQ) */}
      <SharedSections />

      <Footer variant="site" />
    </BlogScripts>
  );
}
