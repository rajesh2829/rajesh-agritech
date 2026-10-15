"use client";

import React, { useState } from "react";
import { timelineData, TimelineType, TimelineItem } from "@/data/timeline";
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function JourneySection() {
  const [activeFilter, setActiveFilter] = useState<TimelineType>("All");

  const filterTabs: TimelineType[] = ["All", "Work", "Education", "Certifications"];

  const filteredItems =
    activeFilter === "All"
      ? timelineData
      : timelineData.filter((item) => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Work":
        return <Briefcase className="h-4 w-4" />;
      case "Education":
        return <GraduationCap className="h-4 w-4" />;
      case "Certifications":
        return <Award className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-28 bg-surface-soft/40 relative border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-18">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface text-xs font-semibold uppercase tracking-wider text-primary">
              <span>Career & Education</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              My Engineering Journey
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-xl">
              From Agricultural Engineering lecture halls and research fields to full stack cloud architecture.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border border-border bg-surface shadow-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={cn(
                  "px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeFilter === tab
                    ? "bg-primary text-white shadow-xs"
                    : "text-muted hover:text-foreground hover:bg-surface-soft"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-primary/20 space-y-10 sm:space-y-12">
          {filteredItems.map((item: TimelineItem) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot with Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-primary bg-surface text-primary shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                {getTypeIcon(item.type)}
              </div>

              {/* Card */}
              <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-2 border-b border-border/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <span className="self-start sm:self-auto text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface-soft text-muted border border-border">
                    {item.type}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary mb-4">
                  <span>{item.organization}</span>
                  {item.location && (
                    <span className="flex items-center gap-1 text-xs text-muted font-normal">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-soft text-muted border border-border/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
