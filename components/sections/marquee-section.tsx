import React from "react";
import { siteConfig } from "@/data/site";
import { Sprout } from "lucide-react";

export function MarqueeSection() {
  const keywords = [...siteConfig.marqueeKeywords, ...siteConfig.marqueeKeywords];

  return (
    <section
      id="marquee"
      aria-label="Core Competencies Marquee"
      className="relative w-full overflow-hidden border-y border-border bg-surface-soft/60 py-4 backdrop-blur-xs select-none"
    >
      <div className="flex animate-marquee">
        {keywords.map((keyword, index) => (
          <div
            key={`${keyword}-${index}`}
            className="flex items-center gap-6 px-6 shrink-0"
          >
            <span className="font-serif text-base sm:text-lg font-semibold tracking-wide text-foreground">
              {keyword}
            </span>
            <Sprout className="h-4 w-4 text-accent shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
