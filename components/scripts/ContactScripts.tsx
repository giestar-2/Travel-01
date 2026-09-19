"use client";

import type { ReactNode } from "react";

import { useEffect } from "react";
import { revealOnScroll } from "@/lib/reveal-on-scroll";


export default function ContactScripts({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stopReveals = revealOnScroll();

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
      stopReveals();
    };
  }, []);

  return <>{children}</>;
}
