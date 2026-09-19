"use client";

import type { ReactNode } from "react";

import { useEffect } from "react";
import { revealOnScroll } from "@/lib/reveal-on-scroll";


export default function BlogScripts({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stopReveals = revealOnScroll();

    return () => stopReveals();
  }, []);

  return <>{children}</>;
}
