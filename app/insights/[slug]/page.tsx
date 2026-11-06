import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  Share2,
  CheckCircle2,
  User,
} from "lucide-react";
import { insightsData } from "@/data/insights";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return insightsData.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Rajesh Samysundaram`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Rajesh Samysundaram`,
      description: article.summary,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = insightsData.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/#insights"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted hover:text-foreground hover:border-primary transition-colors shadow-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Insights</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4 mb-12 pb-10 border-b border-border">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Clock className="h-3.5 w-3.5 text-accent" />
                <span>{article.readingTime}</span>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                <span>{article.publishedAt}</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-accent font-medium leading-relaxed">
              {article.subtitle}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-sm text-primary">
                RS
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">
                  Rajesh Samysundaram
                </div>
                <div className="text-xs text-muted">
                  B.E. Agricultural Engineering (SNSCT) & Agri-Tech Developer
                </div>
              </div>
            </div>
          </header>

          {/* Summary Lead Card */}
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
              Executive Summary
            </div>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-serif italic">
              &ldquo;{article.summary}&rdquo;
            </p>
          </div>

          {/* Article Sections */}
          <div className="space-y-10">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  {section.heading}
                </h2>
                {section.body.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-muted leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted mr-2">
              Topics:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-xl bg-surface-soft text-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Return CTA */}
          <div className="mt-14 pt-8 text-center border-t border-border">
            <Link
              href="/#insights"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Explore More Irrigation Insights</span>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

