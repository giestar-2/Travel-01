import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import BlogDetailScripts from "@/components/scripts/BlogDetailScripts";

export const metadata: Metadata = {
  title: "10 Hidden Gems in Southeast Asia - Wanderly Blog",
};

const relatedPosts = [
  {
    date: "June 20, 2026",
    readTime: "6 min read",
    title: "48 Hours in Paris: The Perfect Weekend Itinerary",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
  },
  {
    date: "June 14, 2026",
    readTime: "7 min read",
    title: "A Beginner's Guide to Hiking the Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop",
  },
  {
    date: "May 30, 2026",
    readTime: "9 min read",
    title: "Chasing the Northern Lights: Best Spots in Norway",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600&auto=format&fit=crop",
  },
];

const tags = ["#SoutheastAsia", "#HiddenGems", "#Adventure", "#Backpacking"];

export default function BlogDetailPage() {
  return (
    <BlogDetailScripts>
      {/* READING PROGRESS */}
      <div className="fixed top-0 left-0 right-0 z-[80] h-1 bg-transparent">
        <div id="progressBar" className="h-full bg-brand-orange"></div>
      </div>

      {/* ARTICLE HEADER */}
      <header className="pt-32 md:pt-40 max-w-3xl mx-auto px-6">
        <nav className="text-xs text-brand-gray mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <i data-lucide="chevron-right" className="w-3 h-3" />
          <Link href="/blog" className="hover:text-brand-orange">
            Blog
          </Link>
          <i data-lucide="chevron-right" className="w-3 h-3" />
          <span className="text-brand-dark font-medium">Hidden Gems</span>
        </nav>
        <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          Adventure
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight mb-6">
          10 Hidden Gems in Southeast Asia You Need to Visit in 2026
        </h1>
        <div className="flex items-center gap-4 pb-8 border-b border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
            className="w-12 h-12 rounded-full object-cover"
            alt="Author"
          />
          <div className="flex-1">
            <p className="font-bold text-sm text-brand-dark">Elena Rivera</p>
            <p className="text-xs text-brand-gray">July 12, 2026 • 8 min read</p>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              <i data-lucide="twitter" className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              <i data-lucide="facebook" className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              <i data-lucide="link" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="max-w-4xl mx-auto px-6 my-10">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1400&auto=format&fit=crop"
          className="w-full h-64 md:h-[460px] object-cover rounded-3xl shadow-lg"
          alt="Southeast Asia"
        />
      </div>

      {/* ARTICLE BODY */}
      <article className="article-body max-w-3xl mx-auto px-6 pb-16 text-base md:text-lg">
        <p>
          Southeast Asia has long been a favorite for backpackers and luxury travelers alike. But beyond the well-trodden
          paths of Bali and Bangkok lies a world of untouched beauty waiting to be discovered.
        </p>

        <p>
          In this guide, we take you off the beaten track to ten destinations that remain refreshingly authentic,
          breathtakingly beautiful, and blissfully uncrowded.
        </p>

        <h2>1. Kep, Cambodia</h2>
        <p>
          Once a glamorous seaside retreat for French colonists, Kep is now a sleepy coastal town famous for its fresh
          crab market and crumbling art-deco villas. It's the perfect place to slow down and watch the sunset over the
          Gulf of Thailand.
        </p>

        <blockquote>
          "The best journeys answer questions that in the beginning you didn't even think to ask."
        </blockquote>

        <h2>2. Nglanggeran, Indonesia</h2>
        <p>
          Tucked away in the hills of Yogyakarta, this ancient volcanic village offers dramatic sunrise hikes, terraced
          fields, and a warm welcome from local communities pioneering sustainable tourism.
        </p>

        <h2>What to Pack</h2>
        <ul>
          <li>Lightweight, breathable clothing for the tropical climate</li>
          <li>A reusable water bottle with a built-in filter</li>
          <li>Sturdy walking sandals for both trails and towns</li>
          <li>A universal power adapter</li>
        </ul>

        <p>
          Wherever your journey takes you, remember that the magic of these hidden gems lies in their untouched nature.
          Travel responsibly, support local communities, and leave nothing but footprints.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200">
          {tags.map((tag) => (
            <span key={tag} className="bg-slate-100 text-brand-gray text-xs font-medium px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* AUTHOR BOX */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
            className="w-20 h-20 rounded-full object-cover"
            alt="Author"
          />
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-wider text-brand-gray mb-1">Written by</p>
            <h3 className="font-bold text-lg text-brand-dark mb-2">Elena Rivera</h3>
            <p className="text-sm text-brand-gray">
              Travel writer and photographer who has explored over 60 countries. Passionate about sustainable travel and
              finding stories in unexpected places.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-8 gs-fade">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link key={post.title} href="/blog-detail" className="group gs-fade">
              <div className="rounded-2xl overflow-hidden h-52 mb-4 shadow-md">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt=""
                />
              </div>
              <div className="text-xs text-brand-gray mb-2">
                {post.date} • {post.readTime}
              </div>
              <h3 className="font-bold text-brand-dark leading-snug group-hover:text-brand-orange transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* SHARED SECTIONS (Features + FAQ) */}
      <SharedSections />

      <Footer variant="site" />
    </BlogDetailScripts>
  );
}
