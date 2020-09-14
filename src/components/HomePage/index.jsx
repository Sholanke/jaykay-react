import React from "react";
import "../../css/home-page.css";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CareerSection from "./components/CareerSection";
import FooterSection from "../common/Footer";
import MessageJK from "../common/MessageJK";
export default function Index() {
  return (
    <>
      <div className="page_holder">
        <HeroSection />
        <ProjectsSection />
        <CareerSection />
        <MessageJK />
        <FooterSection />
      </div>
    </>
  );
}
