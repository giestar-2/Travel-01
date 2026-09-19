"use client";

import type { ReactNode } from "react";

import { useEffect } from "react";
import { revealOnScroll } from "@/lib/reveal-on-scroll";


export default function DestinationsScripts({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stopReveals = revealOnScroll();

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
      stopReveals();
    };
  }, []);

  return <>{children}</>;
}
