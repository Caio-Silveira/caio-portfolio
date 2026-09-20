"use client";

import { useEffect, useRef } from "react";
import { splitTextReveal } from "@/lib/animations";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const timeout = setTimeout(() => {
        splitTextReveal(textRef.current!);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
