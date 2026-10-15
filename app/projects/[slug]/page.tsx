import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Lightbulb,
  AlertTriangle,
  Target,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData } from "@/data/projects";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Rajesh Samysundaram`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted hover:text-foreground hover:border-primary transition-colors shadow-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {project.category}
              </span>
              <span className="text-xs font-medium text-muted">
                {project.subtitle}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              {project.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-surface-soft hover:border-primary transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-border bg-surface shadow-xl mb-14">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>

          {/* Structured Case Study Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Overview
                </h2>
              </div>
              <p className="text-base text-muted leading-relaxed">
                {caseStudy.overview}
              </p>
            </section>

            {/* Problem & Approach (Two columns on tablet/desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem */}
              <section className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-highlight/15 text-highlight">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      The Problem
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>
              </section>

              {/* Approach */}
              <section className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      The Approach
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {caseStudy.approach}
                  </p>
                </div>
              </section>
            </div>

            {/* Solution */}
            <section className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  The Solution
                </h2>
              </div>
              <p className="text-base text-muted leading-relaxed">
                {caseStudy.solution}
              </p>
            </section>

            {/* Tech Used */}
            <section className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-soft text-primary">
                  <Layers className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Technologies Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {caseStudy.techUsed.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-surface-soft text-foreground text-xs sm:text-sm font-semibold border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Outcome */}
            <section className="rounded-3xl border border-border bg-primary/5 p-7 sm:p-9 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Outcome & Impact
                </h2>
              </div>
              <p className="text-base text-muted leading-relaxed">
                {caseStudy.outcome}
              </p>
            </section>

            {/* Bottom Back Button */}
            <div className="pt-8 text-center">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
