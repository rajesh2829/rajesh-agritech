"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sprout, Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = siteConfig.navLinks.map((link) =>
        link.href.replace("#", "")
      );

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "py-3 bg-surface/85 backdrop-blur-md border-b border-border shadow-sm"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo */}
            <Link
              href="#home"
              className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-1"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                <Sprout className="h-5 w-5 text-accent" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Rajesh<span className="text-accent font-sans">.</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-surface/75 backdrop-blur-md shadow-xs">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-full",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-primary rounded-full transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs xl:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-surface border-l border-border p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between overflow-y-auto",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <Sprout className="h-4 w-4 text-accent" />
                </div>
                <span className="font-serif text-lg font-bold text-foreground">
                  Rajesh<span className="text-accent">.</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-muted hover:text-foreground hover:bg-surface-soft"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1 py-6">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      isActive
                        ? "bg-surface-soft text-primary font-semibold"
                        : "text-muted hover:text-foreground hover:bg-surface-soft/60"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="h-2 w-2 rounded-full bg-primary" />}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-3 px-4 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href={siteConfig.resumeUrl}
              download
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-border py-2.5 px-4 text-sm font-medium text-foreground hover:bg-surface-soft transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
