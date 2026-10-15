import React from "react";
import { skillsData } from "@/data/skills";
import { Wheat, Terminal, CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface-soft text-xs font-semibold uppercase tracking-wider text-primary">
            <span>{skillsData.sectionTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {skillsData.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted">
            {skillsData.sectionSubtitle}
          </p>
        </div>

        {/* Two Big Panels Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Panel 1: Agriculture & Engineering */}
          <div className="rounded-3xl border border-border bg-surface p-7 sm:p-10 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Wheat className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {skillsData.agriculturePanel.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent">
                    {skillsData.agriculturePanel.subtitle}
                  </p>
                </div>
              </div>

              <p className="py-6 text-sm text-muted leading-relaxed">
                {skillsData.agriculturePanel.description}
              </p>

              <div className="space-y-6">
                {skillsData.agriculturePanel.groups.map((group) => (
                  <div key={group.categoryName} className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                      {group.categoryName}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group/chip relative flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-surface-soft text-foreground text-xs sm:text-sm font-medium shadow-2xs transition-all duration-200 hover:border-primary hover:bg-surface hover:text-primary hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 group-hover/chip:scale-110 transition-transform" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted">
              <span>Domain Engineering Competency</span>
              <span className="font-semibold text-primary">4-Year Degree & Practice</span>
            </div>
          </div>

          {/* Panel 2: Technology */}
          <div className="rounded-3xl border border-border bg-surface p-7 sm:p-10 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-highlight/15 text-highlight">
                  <Terminal className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {skillsData.technologyPanel.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent">
                    {skillsData.technologyPanel.subtitle}
                  </p>
                </div>
              </div>

              <p className="py-6 text-sm text-muted leading-relaxed">
                {skillsData.technologyPanel.description}
              </p>

              <div className="space-y-6">
                {skillsData.technologyPanel.groups.map((group) => (
                  <div key={group.categoryName} className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                      {group.categoryName}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group/chip relative flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-surface-soft text-foreground text-xs sm:text-sm font-medium shadow-2xs transition-all duration-200 hover:border-primary hover:bg-surface hover:text-primary hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-highlight shrink-0 group-hover/chip:scale-110 transition-transform" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted">
              <span>Full Stack Development Competency</span>
              <span className="font-semibold text-primary">3+ Years Commercial & Labs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
