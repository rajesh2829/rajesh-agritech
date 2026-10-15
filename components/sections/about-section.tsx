import React from "react";
import { aboutData } from "@/data/about";
import { Sprout, Code2, ShieldCheck, Users, Quote } from "lucide-react";

export function AboutSection() {
  const getHighlightIcon = (icon: string) => {
    switch (icon) {
      case "sprout":
        return <Sprout className="h-5 w-5 text-accent" />;
      case "code":
        return <Code2 className="h-5 w-5 text-primary" />;
      case "shield-check":
        return <ShieldCheck className="h-5 w-5 text-highlight" />;
      case "users":
        return <Users className="h-5 w-5 text-soil" />;
      default:
        return <Sprout className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14 sm:mb-18 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface-soft text-xs font-semibold uppercase tracking-wider text-primary">
            <span>{aboutData.sectionTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl">
            {aboutData.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl">
            {aboutData.sectionSubtitle}
          </p>
        </div>

        {/* Two-Column Grid: Left Story, Right Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-5 text-base sm:text-lg text-muted leading-relaxed">
              {aboutData.storyParagraphs.map((paragraph, index) => (
                <p key={index} className="relative">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pull Quote Card */}
            <div className="relative mt-8 rounded-3xl border border-border bg-surface-soft p-6 sm:p-8 shadow-xs">
              <Quote className="h-8 w-8 text-primary/30 mb-3" />
              <blockquote className="font-serif text-base sm:text-lg italic text-foreground leading-snug">
                &ldquo;{aboutData.quote.text}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-primary">
                  RS
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">
                    {aboutData.quote.author}
                  </div>
                  <div className="text-[11px] text-muted">
                    Agricultural Engineer & Developer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid of 4 Highlight Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutData.keyHighlights.map((card) => (
              <div
                key={card.id}
                className="group relative rounded-3xl border border-border bg-surface p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-soft group-hover:scale-105 transition-transform duration-300">
                      {getHighlightIcon(card.icon)}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-soft text-muted border border-border">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-accent mb-3">
                    {card.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center text-xs font-medium text-primary">
                  <span>From Field to Production Code</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
