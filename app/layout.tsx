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
    default: `${siteConfig.name} | Irrigation Engineer & Agri-Tech Full Stack Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Agricultural Engineer (SNS College of Technology) & Agri-Tech Full Stack Developer based in Dubai, specializing in pressurized drip irrigation design, hydraulic friction loss modeling, and smart IoT water management platforms.",
  keywords: [
    "Rajesh Samysundaram",
    "Irrigation Engineer",
    "Drip Irrigation Design",
    "Smart Irrigation",
    "Water Management",
    "Agri-Tech Developer",
    "Agricultural Engineer Dubai",
    "Irrigation Hydraulics",
    "Hazen-Williams Friction Loss",
    "Full Stack Developer Dubai",
    "Next.js Developer",
    "Fertigation Systems",
    "Soil & Water Management",
    "Precision Agriculture",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | Irrigation Engineer & Agri-Tech Developer`,
    description:
      "Agricultural Engineer & Agri-Tech Developer in Dubai specializing in pressurized irrigation design, hydraulics, and IoT water management.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/rajesh.jpeg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Irrigation Engineer & Agri-Tech Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Irrigation Engineer & Agri-Tech Developer`,
    description:
      "Agricultural Engineer & Agri-Tech Developer in Dubai specializing in pressurized irrigation design, hydraulics, and IoT water management.",
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
    jobTitle: "Irrigation Engineer & Agri-Tech Developer",
    description:
      "B.E. Agricultural Engineering graduate (SNS College of Technology) and full-stack developer in Dubai specializing in pressurized micro-irrigation systems, hydraulics, and smart farm software.",
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
      "Irrigation Engineering",
      "Drip Irrigation System Design",
      "Hydraulics & Pipe Friction Loss",
      "Smart Irrigation & IoT Automation",
      "Water Resources & Conservation",
      "Fertigation & Filtration Batteries",
      "Crop Water Requirement (ET0 & Kc)",
      "Soil Science & Infiltration Dynamics",
      "Farm Machinery & Mechanization",
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
