"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import { Briefcase, Code, Layers, GraduationCap } from "lucide-react";

function CounterItem({
  value,
  suffix,
  label,
  description,
  icon,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="group relative rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between pb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
          Verified
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-1 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
          <span>{count}</span>
          <span className="text-accent">{suffix}</span>
        </div>
        <div className="font-sans text-base font-bold text-foreground">
          {label}
        </div>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function StatsSection() {
  const icons = [
    <Briefcase key="1" className="h-6 w-6" />,
    <Layers key="2" className="h-6 w-6" />,
    <Code key="3" className="h-6 w-6" />,
    <GraduationCap key="4" className="h-6 w-6" />,
  ];

  return (
    <section aria-label="Key Highlights and Statistics" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.stats.map((stat, index) => (
            <CounterItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              icon={icons[index % icons.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
