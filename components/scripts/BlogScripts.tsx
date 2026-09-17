"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

/**
 * blog.html inline script: scroll fade-ins.
 * It wraps the page markup so its cleanup runs before React removes that markup.
 */
export default function BlogScripts({ children }: { children: ReactNode }) {
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

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
