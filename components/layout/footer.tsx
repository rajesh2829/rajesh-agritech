"use client";

import React from "react";
import Link from "next/link";
import { Sprout, ArrowUp, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        return <Sprout className="h-4 w-4" />;
    }
  };

  return (
    <footer className="relative border-t border-border bg-surface-soft/60 backdrop-blur-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-border">
          {/* Brand */}
          <div className="space-y-3 max-w-sm">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
                <Sprout className="h-5 w-5 text-accent" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Rajesh<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              {siteConfig.tagline} Blending Agricultural Engineering domain mastery with modern full-stack web solutions.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-primary transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted hover:text-primary hover:border-primary transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                  aria-label={social.label}
                  title={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200 shadow-xs hover:-translate-y-0.5"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 Rajesh Samysundaram. Built with Next.js.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineering Smarter Farms</span>
            <span className="text-accent">•</span>
            <span>Dubai, UAE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
