import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CareerSection from "./components/CareerSection";
import Achievements from "./components/Achievements";
import Accolades from "./components/Accolades/Accolades";

// import HeaderSection from "../common/Header";
export default function Index() {
  return (
    <>
      <div className="page_holder">
        <HeroSection />
        <Achievements />
        <ProjectsSection />
        <CareerSection />
        <Accolades />
      </div>
    </>
  );
}
