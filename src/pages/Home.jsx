import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StartBackground from "../components/StartBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle></ThemeToggle>
      {/* background effects */}
      <StartBackground></StartBackground>
      {/* navbar */}
      <Navbar></Navbar>
      {/* main content */}
      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
      </main>
      {/* footer */}
    </main>
  );
};

export default Home;
