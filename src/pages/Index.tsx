import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
