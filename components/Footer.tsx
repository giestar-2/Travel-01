import TravelImage from "@/components/TravelImage";
import Link from "next/link";

export type FooterVariant = "home" | "destinations" | "destinationDetail" | "site";

const exploreLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/** index.html - CTA footer with background photo. */
function HomeFooter() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white p-8 md:p-16 text-center shadow-2xl">
      <div className="absolute inset-0 z-0">
        <TravelImage sizes="100vw"
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1974&auto=format&fit=crop"
          alt="Traveler at Sunset"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto py-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Discover Places You&apos;ll Never Want to Leave
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8">
          Your next great adventure is waiting. Explore a world of handpicked tours and unforgettable destinations
          across the globe.
        </p>
        <button className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-orange-500/30">
          Plan Your Trip
        </button>
      </div>

      <div className="relative z-10 border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
        <div className="text-left mb-4 md:mb-0">
          <span className="font-bold text-white block text-sm">Wanderly HQ</span>
          <span>45 Greenlawn Avenue, New York, NY 10003, USA</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact Support
          </a>
        </div>
        <p className="mt-4 md:mt-0">&copy; 2026 Wanderly. All rights reserved.</p>
      </div>
    </footer>
  );
}

/** destinations.html - four column footer with a "Get in touch" column. */
function DestinationsFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="text-2xl font-extrabold tracking-tight">Wanderly</span>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Explore the world, one journey at a time. Handpicked tours and unforgettable destinations.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href="/destinations" className="hover:text-brand-orange">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-brand-orange">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-orange">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href="/contact" className="hover:text-brand-orange">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-brand-orange">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-orange">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm">Get in touch</h4>
          <p className="text-sm text-white/60">hello@wanderly.com</p>
          <p className="text-sm text-white/60 mt-1">45 Greenlawn Avenue, New York</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        &copy; 2026 Wanderly. All rights reserved.
      </div>
    </footer>
  );
}

/** destination-detail.html - compact footer with a phone number. */
function DestinationDetailFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="text-2xl font-extrabold tracking-tight">Wanderly</span>
          <p className="text-white/60 text-sm mt-3">Explore the world, one journey at a time.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href="/destinations" className="hover:text-white">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>hello@wanderly.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        &copy; 2026 Wanderly. All rights reserved.
      </div>
    </footer>
  );
}

/** gallery.html / blog.html / blog-detail.html / contact.html footer. */
function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <span className="text-2xl font-extrabold tracking-tight">Wanderly</span>
          <p className="text-white/60 text-sm mt-4 max-w-sm">
            Explore the world, one journey at a time. Handpicked tours and unforgettable destinations across the globe.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">Explore</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-orange transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>hello@wanderly.com</li>
            <li>+1 (212) 555-0192</li>
            <li>New York, NY 10003</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>&copy; 2026 Wanderly. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer({ variant }: { variant: FooterVariant }) {
  switch (variant) {
    case "home":
      return <HomeFooter />;
    case "destinations":
      return <DestinationsFooter />;
    case "destinationDetail":
      return <DestinationDetailFooter />;
    default:
      return <SiteFooter />;
  }
}
