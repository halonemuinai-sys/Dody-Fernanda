"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementHighlights from "@/components/AchievementHighlights";
import ValueProposition from "@/components/ValueProposition";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import ExperienceSection from "@/components/ExperienceSection";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background glow effects */}
      <div className="bg-glow-gold top-[10%] left-[-15%]" />
      <div className="bg-glow-emerald top-[50%] right-[-15%]" />

      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="page-container">
        <HeroSection />
        <AchievementHighlights />
        <ValueProposition />
        <FeaturedProjects />
        <TechStack />
        <ExperienceSection />
        <Certifications />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
