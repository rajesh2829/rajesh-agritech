"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData, ProjectCategory, Project } from "@/data/projects";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = ["All", "Agri-Tech", "Web", "Full Stack"];

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface-soft text-xs font-semibold uppercase tracking-wider text-primary">
              <span>Featured Work</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Featured Projects & Case Studies
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-xl">
              Real-world telemetry dashboards, enterprise portals, web platforms, and academic engineering research.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border border-border bg-surface-soft/80 backdrop-blur-xs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                className={cn(
                  "px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeTab === category
                    ? "bg-primary text-white shadow-xs"
                    : "text-muted hover:text-foreground hover:bg-surface"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.slug}
              className="group relative rounded-3xl border border-border bg-surface overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
            >
              {/* Card Image with Hover Zoom */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[16/9] w-full overflow-hidden bg-surface-soft"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface/90 text-foreground backdrop-blur-md shadow-xs border border-white/20">
                    {project.category}
                  </span>
                </div>
              </Link>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    {project.subtitle}
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowRight className="h-5 w-5 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </h3>
                  </Link>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-soft text-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Case study link + Live/GitHub buttons */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted hover:text-primary hover:border-primary transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                          title="View on GitHub"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted hover:text-primary hover:border-primary transition-colors"
                          aria-label={`Open ${project.title} live website`}
                          title="Open Live Preview"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
