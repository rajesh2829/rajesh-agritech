import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";
import { siteConfig } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1A12" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.positioning}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortBio,
  keywords: [
    "Rajesh Samysundaram",
    "Agricultural Engineer",
    "Agri-Tech Developer",
    "Full Stack Developer Dubai",
    "Irrigation Engineering",
    "Next.js Developer",
    "Soil & Water Management",
    "Farm Mechanization",
    "Smart Farming",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | ${siteConfig.positioning}`,
    description: siteConfig.shortBio,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/rajesh.jpeg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.positioning}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.positioning}`,
    description: siteConfig.shortBio,
    images: ["/images/rajesh.jpeg"],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.positioning,
    description: siteConfig.shortBio,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/images/rajesh.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SNS College of Technology",
    },
    sameAs: [siteConfig.linkedinUrl, siteConfig.githubUrl],
    knowsAbout: [
      "Agricultural Engineering",
      "Irrigation Systems",
      "Soil Science",
      "Farm Machinery",
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Full Stack Development",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ScrollProgressBar />
          <NoiseOverlay />
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
