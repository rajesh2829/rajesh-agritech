"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
  fallbackGradient?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackText,
  fallbackGradient = "from-emerald-900/80 via-forest-900/70 to-soil-900/80",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={cn(
          "relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br text-surface p-4 text-center select-none",
          fallbackGradient,
          className
        )}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="rounded-full bg-white/10 p-3 ring-1 ring-white/20">
            <Sprout className="h-6 w-6 text-accent" />
          </div>
          <span className="font-serif text-sm font-semibold tracking-wide text-white/90">
            {fallbackText || alt || "Agri-Tech Visual"}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-wheat/80">
            Field · Systems · Code
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
