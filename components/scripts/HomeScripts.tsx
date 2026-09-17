"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

/**
 * index.html's inline script, ported 1:1: it still drives the DOM directly with
 * GSAP + plain element APIs.
 *
 * The script wraps the page markup on purpose. React deletes a page by removing its
 * host nodes, and it runs the layout-effect cleanup of a component *before* removing
 * the nodes of that same component - so the script has to be an ancestor of the DOM
 * it touches. As a plain sibling it would be cleaned up too late and React would
 * throw NotFoundError while removing the pinned hero.
 */
export default function HomeScripts({ children }: { children: ReactNode }) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      // Hero Section Animations
      const tl = gsap.timeline();
      tl.from(".hero-title", { opacity: 0, y: 40, duration: 1, ease: "power3.out" })
        .from(".hero-search", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".hero-bg", { scale: 1.15, duration: 2, ease: "power2.out" }, "-=1.5");

      // Swap hero subtitle text when Our Story comes into frame
      const heroTitle = document.getElementById("heroTitle");
      if (heroTitle) {
        const originalHeroText = heroTitle.innerHTML;
        const storyHeroText = 'Every Journey <br class="hidden sm:inline">Tells a Story';
        let heroSwapped = false;

        const swapHeroText = (toStory: boolean) => {
          if (toStory === heroSwapped) return;
          heroSwapped = toStory;
          gsap.to(heroTitle, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              heroTitle.innerHTML = toStory ? storyHeroText : originalHeroText;
              gsap.fromTo(
                heroTitle,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
              );
            },
          });
        };

        // Pin the hero so its subtitle can crossfade while Our Story scrolls into frame
        ScrollTrigger.create({
          trigger: ".hero-section",
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
        });

        // Our Story drives the swap: change when it enters frame, revert when it leaves back
        ScrollTrigger.create({
          trigger: "#ourStory",
          start: "top 80%",
          onEnter: () => swapHeroText(true),
          onLeaveBack: () => swapHeroText(false),
        });
      }

      // Staggered fade-in for sections on scroll
      // (the shared "Why Wanderly"/FAQ block animates itself, like shared-sections.js did)
      gsap.utils.toArray<HTMLElement>(".gs-fade").forEach((elem) => {
        if (elem.closest("#shared-sections")) return;
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      // Destination Cards Staggered Animation
      gsap.from(".gs-card", {
        scrollTrigger: {
          trigger: "#explore",
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Expanding Destination Panels
      const expandPanels = Array.from(document.querySelectorAll<HTMLElement>("#expandPanels [data-panel]"));

      // Init: hide text on all non-active (collapsed) panels
      expandPanels.forEach((panel) => {
        if (!panel.classList.contains("flex-[3]")) {
          panel.querySelector(".panel-content")?.classList.add("opacity-0");
        }
      });

      expandPanels.forEach((panel) => {
        const activate = () => {
          expandPanels.forEach((other) => {
            other.classList.remove("flex-[3]");
            other.classList.add("flex-[1]");
            other.querySelector(".panel-content")?.classList.add("opacity-0");
          });
          panel.classList.remove("flex-[1]");
          panel.classList.add("flex-[3]");
          panel.querySelector(".panel-content")?.classList.remove("opacity-0");
        };
        panel.addEventListener("click", activate);
        panel.addEventListener("mouseenter", activate);
        cleanups.push(() => {
          panel.removeEventListener("click", activate);
          panel.removeEventListener("mouseenter", activate);
        });
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return <>{children}</>;
}
