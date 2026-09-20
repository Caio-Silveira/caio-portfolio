"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { parallaxEffect } from "@/lib/animations";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = "",
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      parallaxEffect(imageRef.current, speed);
    }
  }, [speed]);

  return (
    <div ref={imageRef} className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}
