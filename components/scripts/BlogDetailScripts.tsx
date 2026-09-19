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
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const h = document.documentElement;
      const distance = h.scrollHeight - h.clientHeight;
      const scrolled = distance > 0 ? Math.min(1, Math.max(0, h.scrollTop / distance)) : 0;
      if (progressBar) progressBar.style.transform = `scaleX(${scrolled})`;
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frame);
      ctx.revert();
    };
  }, []);

  return <>{children}</>;
}
