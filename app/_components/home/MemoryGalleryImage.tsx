import Image from 'next/image';

type MemoryGalleryImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export default function MemoryGalleryImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority = false,
  className,
}: MemoryGalleryImageProps) {
  const shared = {
    src,
    alt,
    sizes,
    quality: 72,
    priority,
    className,
  };

  if (fill) {
    return <Image {...shared} fill style={{ objectFit: 'cover' }} />;
  }

  return <Image {...shared} width={width ?? 120} height={height ?? 80} />;
}
