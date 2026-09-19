"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { activeKeyFor, navLinks } from "@/components/nav-links";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

const solidBase =
  "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md text-brand-dark transition-all duration-300";
const transparentBase = "nav-transparent fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300";

export default function Navbar() {
  const pathname = usePathname();
  const active = activeKeyFor(pathname);

  // index.html: navbar floats over the hero (transparent + white text) and turns
  // solid while scrolling. Every other page ships an already-solid navbar, with
  // shadow-md on the two destination pages and shadow-sm elsewhere.
  const transparent = pathname === "/";
  const shadow = pathname.startsWith("/destination") ? "shadow-md" : "shadow-sm";

  const navbarRef = useRef<HTMLElement | null>(null);
  const navInnerRef = useRef<HTMLDivElement | null>(null);
  const navBrandRef = useRef<HTMLAnchorElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!transparent) return;

    const navbar = navbarRef.current;
    const navInner = navInnerRef.current;
    const navBrand = navBrandRef.current;
    if (!navbar || !navInner || !navBrand) return;

    // Navbar scroll behavior (background + brand appear) - ported 1:1 from index.html
    let previousScrolled: boolean | undefined;
    const handleNavScroll = () => {
      const scrolled = window.scrollY > 40;
      if (scrolled === previousScrolled) return;
      previousScrolled = scrolled;
      navbar.classList.toggle("nav-transparent", !scrolled);
      if (scrolled) {
        navbar.classList.remove("text-white");
        navbar.classList.add("bg-white/95", "backdrop-blur-md", "shadow-md", "text-brand-dark");
        navInner.classList.remove("py-5");
        navInner.classList.add("py-3");
        navBrand.classList.remove("opacity-0", "-translate-x-3", "pointer-events-none");
      } else {
        navbar.classList.add("text-white");
        navbar.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-md", "text-brand-dark");
        navInner.classList.add("py-5");
        navInner.classList.remove("py-3");
        navBrand.classList.add("opacity-0", "-translate-x-3", "pointer-events-none");
      }
    };

    handleNavScroll();
    window.addEventListener("scroll", handleNavScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleNavScroll);
  }, [transparent, pathname]);

  return (
    <nav ref={navbarRef} id="navbar" aria-label="Primary navigation" className={transparent ? transparentBase : `${solidBase} ${shadow}`}>
      <div
        ref={navInnerRef}
        id="navInner"
        className={
          transparent
            ? "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-5 transition-all duration-300"
            : "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4"
        }
      >
        {transparent ? (
          <a
            ref={navBrandRef}
            href="#"
            id="navBrand"
            className="text-2xl md:text-3xl font-extrabold tracking-tight opacity-0 -translate-x-3 pointer-events-none transition-all duration-300"
          >
            Wanderly
          </a>
        ) : (
          <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Wanderly
          </Link>
        )}

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={
                link.key === active ? "nav-active transition-colors" : "hover:text-brand-orange transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button id="menuToggle" className="md:hidden flex items-center justify-center" aria-label="Open menu" aria-controls="sidebar" aria-expanded="false">
          <i data-lucide="menu" className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
}
