import React from "react";
import "./home-page.css";
import DotsBg from "../DotsBg";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Index() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  );
}
