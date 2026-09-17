"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

/**
 * gallery.html inline script: fade-ins, gallery filtering and the lightbox.
 * It wraps the page markup so its cleanup runs before React removes that markup.
 */
export default function GalleryScripts({ children }: { children: ReactNode }) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade-ins
      gsap.utils.toArray<HTMLElement>(".gs-fade").forEach((elem) => {
        if (elem.closest("#shared-sections")) return;
        gsap.from(elem, {
          scrollTrigger: { trigger: elem, start: "top 90%" },
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        });
      });
    });

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
      ctx.revert();
    };
  }, []);

  return <>{children}</>;
}
