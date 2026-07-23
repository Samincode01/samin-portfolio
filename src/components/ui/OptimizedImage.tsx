import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type OptimizedImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  className?: string;
};

export default function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  className = "",
  quality = 85,
  ...props
}: OptimizedImageProps) {
  const sharedProps = {
    src,
    alt,
    sizes,
    priority,
    quality,
    className: cn(className),
    ...props,
  };

  if (fill) {
    return <Image {...sharedProps} alt={alt} fill />;
  }

  return (
    <Image
      {...sharedProps}
      alt={alt}
      width={width as number}
      height={height as number}
    />
  );
}
