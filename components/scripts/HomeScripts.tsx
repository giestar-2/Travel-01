"use client";

import { useEffect, type ReactNode } from "react";
import { revealOnScroll } from "@/lib/reveal-on-scroll";

export default function HomeScripts({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stopReveals = revealOnScroll();
    const title = document.getElementById("heroTitle");
    const story = document.getElementById("ourStory");
    const originalTitle = title?.innerHTML;
    const desktop = window.matchMedia("(min-width: 768px)");
    const storyObserver = new IntersectionObserver(([entry]) => {
      if (!title || !originalTitle || !desktop.matches) return;
      if (entry.isIntersecting) {
        title.innerHTML = 'Every Journey <br class="hidden sm:inline">Tells a Story';
      } else if (entry.boundingClientRect.top > 0) {
        title.innerHTML = originalTitle;
      }
    }, { rootMargin: "0px 0px -20% 0px" });
    if (story) storyObserver.observe(story);
    const panels = Array.from(document.querySelectorAll<HTMLElement>("#expandPanels [data-panel]"));
    let active = panels[0];
    const bindings = panels.map((panel) => {
      const activate = () => {
        if (active === panel) return;
        active = panel;
        panels.forEach((other) => {
          const selected = other === panel;
          other.classList.toggle("flex-[3]", selected);
          other.classList.toggle("flex-[1]", !selected);
          other.setAttribute("aria-pressed", String(selected));
          other.querySelector(".panel-content")?.classList.toggle("opacity-0", !selected);
        });
      };
      const handleKey = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      };
      panel.addEventListener("click", activate);
      panel.addEventListener("mouseenter", activate);
      panel.addEventListener("keydown", handleKey);
      return () => {
        panel.removeEventListener("click", activate);
        panel.removeEventListener("mouseenter", activate);
        panel.removeEventListener("keydown", handleKey);
      };
    });
    return () => {
      stopReveals();
      storyObserver.disconnect();
      if (title && originalTitle) title.innerHTML = originalTitle;
      bindings.forEach((cleanup) => cleanup());
    };
  }, []);

  return <>{children}</>;
}
