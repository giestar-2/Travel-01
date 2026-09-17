"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

/**
 * contact.html inline script: demo form handling + fade-ins.
 * It wraps the page markup so its cleanup runs before React removes that markup.
 */
export default function ContactScripts({ children }: { children: ReactNode }) {
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

    // Form submit (client-side demo only)
    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const status = document.getElementById("formStatus");
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (!form) return;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status?.classList.remove("hidden");
      form.reset();
      hideTimeout = setTimeout(() => status?.classList.add("hidden"), 5000);
    };

    form?.addEventListener("submit", handleSubmit);

    return () => {
      form?.removeEventListener("submit", handleSubmit);
      if (hideTimeout) clearTimeout(hideTimeout);
      ctx.revert();
    };
  }, []);

  return <>{children}</>;
}
