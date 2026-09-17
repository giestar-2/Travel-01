"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

/**
 * blog-detail.html inline script: reading progress bar + fade-ins.
 * It wraps the page markup so its cleanup runs before React removes that markup.
 */
export default function BlogDetailScripts({ children }: { children: ReactNode }) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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

    // Reading progress bar
    const progressBar = document.getElementById("progressBar");
    const handleScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (progressBar) progressBar.style.transform = `scaleX(${scrolled})`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  return <>{children}</>;
}
