import React from "react";
import Link from "next/link";
import { insightsData, InsightArticle } from "@/data/insights";
import { BookOpen, ArrowRight, Clock, Calendar } from "lucide-react";

export function InsightsSection() {
  return (
    <section id="insights" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface-soft text-xs font-semibold uppercase tracking-wider text-primary">
            <BookOpen className="h-3.5 w-3.5 text-accent" />
            <span>{insightsData.sectionTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {insightsData.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted">
            {insightsData.sectionSubtitle}
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.articles.map((article: InsightArticle) => (
            <article
              key={article.slug}
              className="group relative rounded-3xl border border-border bg-surface p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border text-xs text-muted">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-surface-soft text-primary border border-border">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted">
                    <Clock className="h-3 w-3 text-accent" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/insights/${article.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-xs font-semibold text-accent mb-3">
                  {article.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/70">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-soft text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Article CTA */}
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-accent transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

