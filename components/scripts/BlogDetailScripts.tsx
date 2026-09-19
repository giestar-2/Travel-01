"use client";

import type { ReactNode } from "react";

import { useEffect } from "react";
import { revealOnScroll } from "@/lib/reveal-on-scroll";


export default function BlogDetailScripts({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stopReveals = revealOnScroll();

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
      stopReveals();
    };
  }, []);

  return <>{children}</>;
}
