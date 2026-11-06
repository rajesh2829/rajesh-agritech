"use client";

import React, { useState } from "react";
import { irrigationData, IrrigationTopic } from "@/data/irrigation";
import { IrrigationTools } from "./irrigation-tools";
import {
  Droplets,
  Waves,
  Gauge,
  CalendarClock,
  Leaf,
  Cpu,
  Sparkles,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function IrrigationSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "pressurized" | "gravity" | "engineering" | "automation"
  >("all");

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case "droplets":
        return <Droplets className="h-6 w-6 text-accent" />;
      case "sprinkler":
        return <Sparkles className="h-6 w-6 text-primary" />;
      case "waves":
        return <Waves className="h-6 w-6 text-soil" />;
      case "gauge":
        return <Gauge className="h-6 w-6 text-highlight" />;
      case "calendar-clock":
        return <CalendarClock className="h-6 w-6 text-accent" />;
      case "leaf":
        return <Leaf className="h-6 w-6 text-primary" />;
      case "cpu":
        return <Cpu className="h-6 w-6 text-accent" />;
      default:
        return <Droplets className="h-6 w-6 text-primary" />;
    }
  };

  const categories = [
    { id: "all", label: "All Specializations" },
    { id: "pressurized", label: "Drip & Sprinkler" },
    { id: "engineering", label: "Hydraulics & Scheduling" },
    { id: "automation", label: "Smart & IoT" },
    { id: "gravity", label: "Surface Irrigation" },
  ] as const;

  const filteredTopics =
    selectedCategory === "all"
      ? irrigationData.topics
      : irrigationData.topics.filter((t) => t.category === selectedCategory);

  return (
    <section
      id="irrigation"
      className="py-20 sm:py-28 bg-surface-soft/30 relative border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface text-xs font-semibold uppercase tracking-wider text-primary">
            <span>{irrigationData.sectionTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {irrigationData.headline}
          </h2>
          <p className="text-base sm:text-lg text-accent font-medium">
            {irrigationData.sectionSubtitle}
          </p>
        </div>

        {/* Intro Paragraph Card */}
        <div className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xs mb-14 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Droplets className="h-6 w-6 text-accent" />
            </div>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {irrigationData.introParagraph}
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                selectedCategory === cat.id
                  ? "bg-primary border-primary text-white shadow-xs"
                  : "border-border bg-surface text-muted hover:text-foreground hover:bg-surface-soft"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 7 Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTopics.map((topic: IrrigationTopic) => (
            <div
              key={topic.id}
              className="group relative rounded-3xl border border-border bg-surface p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Decorative Gradient */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:from-accent/20"
              />

              <div>
                {/* Icon & Subtitle */}
                <div className="flex items-center justify-between pb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-soft transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                    {getTopicIcon(topic.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-soft text-muted border border-border">
                    {topic.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <div className="text-xs font-semibold text-accent mb-3">
                  {topic.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                  {topic.description}
                </p>

                {/* Key Concepts bulleted */}
                <div className="space-y-1.5 pt-3 border-t border-border/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2">
                    Core Engineering Highlights:
                  </div>
                  {topic.keyConcepts.map((concept, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-muted"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-1.5">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-soft text-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* STEP 2: Interactive Calculators Component */}
        <IrrigationTools />
      </div>
    </section>
  );
}

