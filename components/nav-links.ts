export type NavKey = "home" | "destinations" | "gallery" | "blog" | "contact";

export type NavLink = {
  key: NavKey;
  href: string;
  label: string;
};

/** The navigation of the original pages (Beranda / Destinations / Gallery / Blog / Contact). */
export const navLinks: NavLink[] = [
  { key: "home", href: "/", label: "Beranda" },
  { key: "destinations", href: "/destinations", label: "Destinations" },
  { key: "gallery", href: "/gallery", label: "Gallery" },
  { key: "blog", href: "/blog", label: "Blog" },
  { key: "contact", href: "/contact", label: "Contact" },
];

/** Which menu entry is highlighted for a given route (detail pages highlight their section). */
export function activeKeyFor(pathname: string): NavKey | null {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/destination")) return "destinations"; // /destinations + /destination-detail
  if (pathname.startsWith("/gallery")) return "gallery";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/contact")) return "contact";
  return null;
}
