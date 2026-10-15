import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutSection } from "@/components/sections/about-section";
import { FocusAreasSection } from "@/components/sections/focus-areas-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { JourneySection } from "@/components/sections/journey-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MarqueeSection />
        <StatsSection />
        <AboutSection />
        <FocusAreasSection />
        <ProjectsSection />
        <JourneySection />
        <SkillsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
