"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Clock,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

export function HeroSection() {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return <LinkedinIcon className="h-4 w-4" />;
      case "whatsapp":
        return <WhatsAppIcon className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      case "github":
        return <GithubIcon className="h-4 w-4" />;
      default:
        return <Sparkles className="h-4 w-4" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Topographic Background Pattern */}
      <TopographicPattern opacity={0.07} className="z-0" />

      {/* Organic Ambient Glowing Blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 via-primary/15 to-highlight/20 rounded-full blur-3xl opacity-60 dark:opacity-30 -z-10 animate-pulse duration-[8000ms]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-10 w-96 h-96 bg-highlight/15 rounded-full blur-3xl opacity-40 dark:opacity-20 -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-surface/80 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground">
                {siteConfig.availabilityBadge}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent">
              {siteConfig.positioning}
            </div>

            {/* Giant Headline with hand-drawn SVG underline */}
            <h1 className="hero-headline font-serif font-extrabold text-foreground tracking-tight">
              Engineering{" "}
              <span className="relative inline-block text-primary dark:text-accent">
                smarter
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full overflow-visible text-accent dark:text-primary"
                  viewBox="0 0 250 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 13C50 4, 120 2, 245 11"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 16C75 8, 160 7, 230 14"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>{" "}
              farms with technology.
            </h1>

            {/* Short Bio */}
            <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.shortBio}
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:bg-primary-hover hover:scale-102 active:scale-98"
              >
                <span>View My Work</span>
                <ArrowDown className="h-4 w-4" />
              </Link>

              <a
                href={siteConfig.resumeUrl}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/90 px-6 py-3.5 text-sm sm:text-base font-semibold text-foreground shadow-xs transition-all duration-300 hover:bg-surface-soft hover:border-primary hover:text-primary active:scale-98"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>

              {/* Social Icon Buttons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/80 text-muted shadow-xs transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-md"
                    aria-label={social.label}
                    title={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Image & Floating Glass Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-primary/30 rounded-[2.5rem] blur-2xl transform rotate-3 scale-95 opacity-50 dark:opacity-30" />

              {/* Image Container with Organic Arch Mask */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-border/80 bg-surface shadow-2xl p-2">
                <div className="relative w-full aspect-[4/5] rounded-[2.2rem] overflow-hidden bg-surface-soft">
                  <ImageWithFallback
                    src="/images/rajesh.jpeg"
                    alt="Rajesh Samysundaram — Agricultural Engineer & Agri-Tech Full Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Glass Card 1: B.E. Agricultural Engineering */}
              <div className="absolute -top-4 -left-4 sm:-left-6 rounded-2xl border border-white/40 dark:border-white/10 bg-surface/85 backdrop-blur-md p-3.5 shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted">
                      Degree
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-foreground">
                      B.E. Agricultural Engineering
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 2: 3+ Years Development */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 rounded-2xl border border-white/40 dark:border-white/10 bg-surface/85 backdrop-blur-md p-3.5 shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-highlight/15 text-highlight">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted">
                      Experience
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-foreground">
                      3+ Years Development
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 3: Dubai, UAE */}
              <div className="absolute -bottom-4 left-6 sm:left-10 rounded-2xl border border-white/40 dark:border-white/10 bg-surface/85 backdrop-blur-md p-3.5 shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-foreground">
                      Dubai, UAE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-down Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <Link
            href="#marquee"
            className="group flex flex-col items-center gap-2 text-xs font-medium text-muted hover:text-primary transition-colors"
            aria-label="Scroll to discover more"
          >
            <span className="tracking-widest uppercase text-[10px]">Explore Portfolio</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-border p-1 group-hover:border-primary transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
