import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CareerSection from "./components/CareerSection";

// import HeaderSection from "../common/Header";
export default function Index() {
  return (
    <>
      <div className="page_holder">
        <HeroSection />
        <ProjectsSection />
        <CareerSection />
      </div>
    </>
  );
}
