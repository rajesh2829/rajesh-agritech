import React from "react";
import { expertiseData } from "@/data/expertise";
import {
  Droplets,
  Mountain,
  Cog,
  Cpu,
  Layout,
  BarChart3,
} from "lucide-react";

export function FocusAreasSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "droplets":
        return <Droplets className="h-6 w-6 text-accent" />;
      case "mountain":
        return <Mountain className="h-6 w-6 text-soil" />;
      case "cog":
        return <Cog className="h-6 w-6 text-highlight" />;
      case "cpu":
        return <Cpu className="h-6 w-6 text-primary" />;
      case "layout":
        return <Layout className="h-6 w-6 text-accent" />;
      case "bar-chart-3":
        return <BarChart3 className="h-6 w-6 text-primary" />;
      default:
        return <Droplets className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section
      id="focus-areas"
      className="py-20 sm:py-28 bg-surface-soft/40 relative border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface text-xs font-semibold uppercase tracking-wider text-primary">
            <span>{expertiseData.sectionTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {expertiseData.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted">
            {expertiseData.sectionSubtitle}
          </p>
        </div>

        {/* 6 Cards Grid with hover reveal & micro-interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertiseData.areas.map((area) => (
            <div
              key={area.id}
              className="group relative rounded-3xl border border-border bg-surface p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Decorative Subtle Corner Accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:from-accent/20"
              />

              <div>
                <div className="flex items-center justify-between pb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-soft transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="font-serif text-2xl font-black text-muted/30 group-hover:text-primary/40 transition-colors">
                    {area.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>

                <p className="text-sm font-medium text-foreground/80 mb-3 leading-relaxed">
                  {area.summary}
                </p>

                {/* Hover reveal extended details */}
                <p className="text-xs text-muted leading-relaxed transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                  {area.details}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-soft text-muted border border-border/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Small line under the grid */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-medium text-muted max-w-xl mx-auto italic">
            &ldquo;{expertiseData.footerNote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
