"use client";

import React, { useState, useEffect, useCallback } from "react";
import { galleryData, GalleryItem } from "@/data/gallery";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeItemIndex !== null ? galleryData.items[activeItemIndex] : null;

  const handleNext = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) =>
        prev === null ? null : (prev + 1) % galleryData.items.length
      );
    }
  }, [activeItemIndex]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + galleryData.items.length) % galleryData.items.length
      );
    }
  }, [activeItemIndex]);

  const handleClose = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (activeItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activeItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeItemIndex]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-surface-soft/40 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface text-xs font-semibold uppercase tracking-wider text-primary">
            <span>{galleryData.sectionTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {galleryData.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted">
            {galleryData.sectionSubtitle}
          </p>
        </div>

        {/* Responsive Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryData.items.map((item, index) => {
            const isTall = item.aspect === "portrait";
            const isWide = item.aspect === "landscape" && (index === 0 || index === 4);

            return (
              <div
                key={item.id}
                onClick={() => setActiveItemIndex(index)}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
                  isWide ? "sm:col-span-2 aspect-[16/10]" : isTall ? "aspect-[3/4]" : "aspect-square"
                )}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveItemIndex(index);
                  }
                }}
                aria-label={`Open photo: ${item.title}`}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

                {/* Tag pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-surface/85 text-foreground backdrop-blur-md shadow-xs border border-white/20 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Expand icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Hover Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <MapPin className="h-3 w-3 text-accent" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeItemIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close photo preview"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Image Box */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <ImageWithFallback
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>

            {/* Caption & Metadata */}
            <div className="mt-5 w-full text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white px-2">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary text-white">
                    {activeItem.tag}
                  </span>
                  {activeItem.location && (
                    <span className="flex items-center gap-1 text-xs text-white/70">
                      <MapPin className="h-3 w-3 text-accent" />
                      <span>{activeItem.location}</span>
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl mt-1">
                  {activeItem.caption}
                </p>
              </div>

              <div className="text-xs font-mono text-white/50 self-center sm:self-end">
                {activeItemIndex + 1} / {galleryData.items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
