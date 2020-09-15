import React from "react";
import Story from "./components/Story/Story";
import SkillsSlider from "./components/SkillsSlider/SkillsSlider";

export default function index() {
  return (
    <div className="page_holder">
      <Story />
      <SkillsSlider />
    </div>
  );
}
