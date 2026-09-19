import type { ImgHTMLAttributes } from "react";
import imageManifest from "@/lib/travel-images.json";

type Variant = {
  width: number;
  height: number;
  images: Array<{ width: number; avif: string; webp: string }>;
};
const photos: Record<string, Record<string, Variant>> = imageManifest;

type TravelImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  src: string;
  priority?: boolean;
  aspectRatio?: number;
  mobileAspectRatio?: number;
};

const sourceSet = (variant: Variant, format: "avif" | "webp") =>
  variant.images.map((image) => `${image[format]} ${image.width}w`).join(", ");

/** Static, precompressed photos: no browser JS or image-server cold start. */
export default function TravelImage({
  src,
  alt,
  priority = false,
  loading,
  aspectRatio,
  mobileAspectRatio,
  sizes = "(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  ...props
}: TravelImageProps) {
  const photo = photos[new URL(src).pathname.slice(1)];
  const variant = photo?.[aspectRatio ? "landscape" : "original"];
  if (!variant) throw new Error(`Missing optimized photo: ${src}. Run npm run optimize:images.`);
  const mobile = mobileAspectRatio ? photo.mobile : undefined;
  const fallback = variant.images[variant.images.length - 1];

  return (
    <picture className="contents">
      {mobile && <>
        <source media="(max-width: 767px)" type="image/avif" sizes={sizes} srcSet={sourceSet(mobile, "avif")} />
        <source media="(max-width: 767px)" type="image/webp" sizes={sizes} srcSet={sourceSet(mobile, "webp")} />
      </>}
      <source type="image/avif" sizes={sizes} srcSet={sourceSet(variant, "avif")} />
      <img
        width={variant.width}
        height={variant.height}
        {...props}
        alt={alt}
        src={fallback.webp}
        srcSet={sourceSet(variant, "webp")}
        sizes={sizes}
        loading={priority ? "eager" : (loading ?? "lazy")}
        fetchPriority={priority ? "high" : props.fetchPriority}
        decoding="async"
      />
    </picture>
  );
}
