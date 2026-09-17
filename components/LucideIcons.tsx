"use client";

import { createIcons } from "lucide";
import { usePathname } from "next/navigation";

import { icons } from "@/lib/icons";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

/**
 * Drop-in replacement for the `lucide.createIcons()` calls the original pages ran
 * at the end of their inline scripts: it replaces every `<i data-lucide="...">`
 * in the document with the matching SVG. It runs again after client-side
 * navigation, since the new page markup brings fresh placeholders.
 */
export default function LucideIcons() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    createIcons({ icons });
  }, [pathname]);

  return null;
}
