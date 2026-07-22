import Image from "next/image";
import Parallax from "@/components/anim/Parallax";

interface ImageBannerProps {
  src: string;
  alt: string;
  priority?: boolean;
  /** aspect ratio classes, defaults to a wide cinematic band */
  className?: string;
  fullBleed?: boolean;
}

/** Full-width parallax image band. */
export default function ImageBanner({
  src,
  alt,
  priority = false,
  className = "aspect-[16/9] md:aspect-[21/9]",
  fullBleed = true,
}: ImageBannerProps) {
  return (
    <div className={fullBleed ? "" : "container-site"}>
      <Parallax className={`img-frame ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
    </div>
  );
}
