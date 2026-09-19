import type { ImgHTMLAttributes } from "react";

type TravelImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  src: string;
  priority?: boolean;
};

// Unsplash already provides image resizing and format negotiation at its CDN.
// Render native responsive markup so image selection needs no client JavaScript.
export default function TravelImage({
  src,
  alt,
  priority = false,
  loading,
  sizes = "(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  ...props
}: TravelImageProps) {
  const url = new URL(src);
  const maxWidth = Number(url.searchParams.get("w")) || 1600;
  const widths = [...new Set([96, 160, 320, 480, 640, 800, 1000, 1280, 1600, 1920, maxWidth])]
    .filter((width) => width <= maxWidth)
    .sort((a, b) => a - b);

  url.searchParams.set("auto", "format");
  url.searchParams.set("q", "75");
  const sourceAt = (width: number) => {
    url.searchParams.set("w", String(width));
    return url.toString();
  };

  return (
    <img
      {...props}
      alt={alt}
      src={sourceAt(maxWidth)}
      srcSet={widths.map((width) => `${sourceAt(width)} ${width}w`).join(", ")}
      sizes={sizes}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : props.fetchPriority}
      decoding="async"
    />
  );
}
