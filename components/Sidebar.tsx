"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { activeKeyFor, navLinks } from "@/components/nav-links";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

type Cta = {
  element: "button" | "link";
  label: string;
  className: string;
};

const ctaBase =
  "mt-auto bg-brand-orange hover:bg-orange-800 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-lg";

/*
 * Each original page had its own mobile menu CTA: index.html and
 * destination-detail.html used a "Sign In" button, destinations.html a "Sign In"
 * link to the contact page, and the rest a "Get in Touch" link.
 */
function ctaFor(pathname: string): Cta {
  if (pathname === "/" || pathname === "/destination-detail") {
    return { element: "button", label: "Sign In", className: ctaBase };
  }
  if (pathname === "/destinations") {
    return { element: "link", label: "Sign In", className: `${ctaBase} text-center` };
  }
  return { element: "link", label: "Get in Touch", className: `${ctaBase} text-center` };
}

export default function Sidebar() {
  const pathname = usePathname();
  const active = activeKeyFor(pathname);
  const cta = ctaFor(pathname);

  const sidebarRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const sidebar = sidebarRef.current;
    const sidebarOverlay = overlayRef.current;
    if (!sidebar || !sidebarOverlay) return;

    const openSidebar = () => {
      sidebar.inert = false;
      document.getElementById("menuToggle")?.setAttribute("aria-expanded", "true");
      sidebar.classList.remove("translate-x-full");
      sidebarOverlay.classList.remove("opacity-0", "pointer-events-none");
      document.body.style.overflow = "hidden";
      sidebar.querySelector<HTMLButtonElement>("#sidebarClose")?.focus();
    };
    const closeSidebar = () => {
      if (sidebar.contains(document.activeElement)) document.getElementById("menuToggle")?.focus();
      sidebar.inert = true;
      document.getElementById("menuToggle")?.setAttribute("aria-expanded", "false");
      sidebar.classList.add("translate-x-full");
      sidebarOverlay.classList.add("opacity-0", "pointer-events-none");
      document.body.style.overflow = "";
    };

    // Always closed after a page change, just like a full page load.
    closeSidebar();

    const handleKey = (event: KeyboardEvent) => {
      if (sidebar.inert) return;
      if (event.key === "Escape") closeSidebar();
      if (event.key !== "Tab") return;
      const focusable = Array.from(sidebar.querySelectorAll<HTMLElement>("a[href], button"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", handleKey);

    // The hamburger lives in the Navbar, so the click is delegated from the
    // document: that keeps the binding alive when React swaps navbar variants.
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("#menuToggle")) openSidebar();
    };

    const sidebarClose = document.getElementById("sidebarClose");
    sidebarClose?.addEventListener("click", closeSidebar);
    sidebarOverlay.addEventListener("click", closeSidebar);
    const sidebarLinks = Array.from(sidebar.querySelectorAll(".sidebar-link"));
    sidebarLinks.forEach((link) => link.addEventListener("click", closeSidebar));
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("click", handleDocumentClick);
      sidebarClose?.removeEventListener("click", closeSidebar);
      sidebarOverlay.removeEventListener("click", closeSidebar);
      sidebarLinks.forEach((link) => link.removeEventListener("click", closeSidebar));
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        id="sidebarOverlay"
        className="fixed inset-0 bg-black/50 z-[60] opacity-0 pointer-events-none transition-opacity duration-300"
      />
      <aside
        ref={sidebarRef}
        id="sidebar"
        inert
        aria-label="Mobile navigation"
        className="fixed top-0 right-0 bottom-0 w-72 max-w-[80%] bg-white text-brand-dark z-[70] translate-x-full transition-transform duration-300 ease-out shadow-2xl p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-10">
          <span className="text-2xl font-extrabold tracking-tight">Wanderly</span>
          <button
            id="sidebarClose"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <i data-lucide="x" className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col space-y-2 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`sidebar-link py-3 border-b border-slate-100 transition-colors ${
                link.key === active ? "text-brand-orange" : "hover:text-brand-orange"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {cta.element === "button" ? (
          <button className={cta.className}>{cta.label}</button>
        ) : (
          <Link href="/contact" className={cta.className}>
            {cta.label}
          </Link>
        )}
      </aside>
    </>
  );
}
