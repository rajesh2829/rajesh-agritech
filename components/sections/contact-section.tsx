"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations/contact";
import { siteConfig } from "@/data/site";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Sprout,
} from "lucide-react";
import { LinkedinIcon, WhatsAppIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "loading" | "success" | "error" | "fallback";
    message: string;
  }>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (resData.fallbackMailto && resData.mailtoUrl) {
        setSubmitStatus({
          type: "fallback",
          message:
            "Opening your email client to send directly...",
        });
        window.location.assign(resData.mailtoUrl);
        reset();
        return;
      }

      if (response.ok && resData.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent. I'll get back to you promptly.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            resData.error ||
            "Unable to send message directly. Please contact me via email or WhatsApp.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please email me directly at " + siteConfig.email,
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Topographic Background */}
      <TopographicPattern opacity={0.06} className="z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-surface-soft text-xs font-semibold uppercase tracking-wider text-primary">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Let&apos;s grow something together
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Have an agri-tech project, a web engineering inquiry, or an engineering role in Dubai or remote? Let&apos;s discuss.
          </p>
        </div>

        {/* Main Contact Container (Green Gradient Accent) */}
        <div className="rounded-[2.5rem] border border-border bg-surface shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Direct Info & Social Connect */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary via-primary-hover to-soil p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Organic contour overlay inside green card */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/20 rounded-full blur-2xl pointer-events-none"
            />

            <div className="space-y-8 relative z-10">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/20">
                  <Sprout className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Reach Out Directly
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  I&apos;m based in Dubai, UAE and always open to consulting, agri-tech innovation, and high-impact full-stack roles.
                </p>
              </div>

              {/* Direct Details */}
              <div className="space-y-4">
                {/* Email with Click-to-copy */}
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-xs sm:text-sm font-mono truncate">
                      {siteConfig.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors"
                    aria-label="Copy email address"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-accent" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-xs flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-highlight shrink-0" />
                  <div>
                    <div className="text-xs text-white/70">Current Location</div>
                    <div className="text-sm font-semibold">{siteConfig.locationDetail}</div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Instant Messaging & Profiles
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 text-sm font-semibold transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 text-white px-4 py-3 text-sm font-semibold transition-colors ring-1 ring-white/20 shadow-sm"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/15 text-xs text-white/60 relative z-10">
              Response time: typically within 24 hours.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-surface">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Status Toast */}
              {submitStatus.type !== "idle" && (
                <div
                  className={`p-4 rounded-2xl flex items-start gap-3 text-sm font-medium ${
                    submitStatus.type === "success" || submitStatus.type === "fallback"
                      ? "bg-accent/15 text-foreground border border-accent/30"
                      : submitStatus.type === "error"
                      ? "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20"
                      : "bg-surface-soft text-foreground border border-border"
                  }`}
                >
                  {submitStatus.type === "loading" && (
                    <Loader2 className="h-5 w-5 animate-spin text-primary shrink-0" />
                  )}
                  {(submitStatus.type === "success" || submitStatus.type === "fallback") && (
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  )}
                  {submitStatus.type === "error" && (
                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              {/* Honeypot field (hidden from view) */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                {...register("honeypot")}
              />

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full rounded-2xl border bg-surface-soft px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.name ? "border-red-500" : "border-border"
                    }`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="sarah@example.com"
                    className={`w-full rounded-2xl border bg-surface-soft px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry / Agri-Tech Opportunity"
                  className={`w-full rounded-2xl border bg-surface-soft px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.subject ? "border-red-500" : "border-border"
                  }`}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-xs text-red-500 font-medium">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Your Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, farm operations, or technical challenge..."
                  className={`w-full rounded-2xl border bg-surface-soft p-4 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary resize-y ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus.type === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary py-4 px-8 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover hover:scale-101 active:scale-99 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitStatus.type === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
