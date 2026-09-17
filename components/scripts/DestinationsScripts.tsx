"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

/**
 * destinations.html inline script: card fade-ins + visual filter toggle.
 * It wraps the page markup so its cleanup runs before React removes that markup.
 */
export default function DestinationsScripts({ children }: { children: ReactNode }) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade-in cards
      gsap.utils.toArray<HTMLElement>(".gs-card").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: { trigger: elem, start: "top 90%", toggleActions: "play none none none" },
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    });

    // Filter buttons (visual toggle)
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("#destinationFilters button"));
    const bindings = buttons.map((button) => {
      const handler = () => {
        buttons.forEach((other) => {
          other.classList.remove("bg-brand-orange", "text-white", "shadow-md");
          other.classList.add("bg-white", "border", "border-slate-200");
        });
        button.classList.add("bg-brand-orange", "text-white", "shadow-md");
        button.classList.remove("bg-white", "border", "border-slate-200");
      };
      button.addEventListener("click", handler);
      return { button, handler };
    });

    return () => {
      bindings.forEach(({ button, handler }) => button.removeEventListener("click", handler));
      ctx.revert();
    };
  }, []);

  return <>{children}</>;
}
