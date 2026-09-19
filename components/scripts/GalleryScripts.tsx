"use client";

import type { ReactNode } from "react";

import { useEffect } from "react";
import { revealOnScroll } from "@/lib/reveal-on-scroll";


export default function GalleryScripts({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stopReveals = revealOnScroll();

    // Gallery filter
    const chips = Array.from(document.querySelectorAll<HTMLButtonElement>(".filter-chip"));
    const items = Array.from(document.querySelectorAll<HTMLElement>(".gallery-item"));
    const chipBindings = chips.map((chip) => {
      const handler = () => {
        chips.forEach((other) => {
          other.classList.remove("bg-brand-orange", "text-white");
          other.classList.add("bg-white", "border", "border-slate-200", "text-brand-dark");
        });
        chip.classList.add("bg-brand-orange", "text-white");
        chip.classList.remove("bg-white", "border", "border-slate-200", "text-brand-dark");

        const filter = chip.dataset.filter;
        items.forEach((item) => {
          const show = filter === "all" || item.dataset.cat === filter;
          item.style.display = show ? "" : "none";
        });
      };
      chip.addEventListener("click", handler);
      return { chip, handler };
    });

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg") as HTMLImageElement | null;

    const closeLightbox = () => {
      lightbox?.classList.add("opacity-0", "pointer-events-none");
      document.body.style.overflow = "";
    };

    const imageBindings = Array.from(document.querySelectorAll<HTMLImageElement>(".gallery-img")).map((img) => {
      const handler = () => {
        if (lightboxImg) lightboxImg.src = img.src;
        lightbox?.classList.remove("opacity-0", "pointer-events-none");
        document.body.style.overflow = "hidden";
      };
      img.addEventListener("click", handler);
      return { img, handler };
    });

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === lightbox) closeLightbox();
    };

    const lightboxClose = document.getElementById("lightboxClose");
    lightboxClose?.addEventListener("click", closeLightbox);
    lightbox?.addEventListener("click", handleBackdropClick);

    return () => {
      chipBindings.forEach(({ chip, handler }) => chip.removeEventListener("click", handler));
      imageBindings.forEach(({ img, handler }) => img.removeEventListener("click", handler));
      lightboxClose?.removeEventListener("click", closeLightbox);
      lightbox?.removeEventListener("click", handleBackdropClick);
      document.body.style.overflow = "";
      stopReveals();
    };
  }, []);

  return <>{children}</>;
}
