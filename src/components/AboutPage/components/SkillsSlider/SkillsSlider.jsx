import React, { useState, useEffect, useRef } from "react";
import productDesign from "../../../assets/img/product-design.png";
import code from "../../../assets/img/code.png";
import brand from "../../../assets/img/brand.jpg";
import visualDesign from "../../../assets/img/visual-design.png";

const skills = [
  {
    title: "Product Design",
    image: productDesign,
    desc:
      "As a product designer, I develop product design strategies and concepts according to customer requirements. Working closely with stakeholders and product owners, providing insight into customer behaviour, guiding focus and planning and desigining product features.",
  },
  {
    title: "Visual Design",
    image: visualDesign,
    desc:
      "As a visual designer, I aim to shape and improve the user experience through considering the effects of illustrations, photography, typography, space, layouts, and color on the usability of products and on their aesthetic appeal.",
  },
  {
    title: "Brand Design",
    image: brand,

    desc:
      "As a brand designer, I work with the client to understand what image or mood they want to project and come up with designs to create a brand identity for their business.",
  },
  {
    title: "Frontend Development",
    image: code,

    desc:
      "As a frontend developer, I produce HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.",
  },
];

//animation loop delay
const delay = 12;

export default function SkillsSlider() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const useActiveSkillIndex = () => [activeSkillIndex, setActiveSkillIndex];
  const intervalRef = useRef();

  function next(activeIndex) {
    if (activeIndex < skills.length - 1) {
      return activeIndex + 1;
    } else {
      return 0;
    }
  }
  function previous(activeIndex) {
    if (activeIndex > 0) {
      return activeIndex - 1;
    } else {
      return skills.length - 1;
    }
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSkillIndex(next);
    }, delay * 1000);
    return () => clearInterval(intervalRef.current);
  }, [activeSkillIndex]);

  return (
    <div className="wrapper slider-section">
      <div className="max_width">
        <h1 class="co_theme section-heading">MY SKILLSETS</h1>
        <div className="skills-slider">
          <Header useActiveSkillIndex={useActiveSkillIndex} />
          <div className="skills">
            {skills.map((s, i) => (
              <Skill
                {...s}
                id={i}
                key={i}
                activeSkillIndex={activeSkillIndex}
              />
            ))}

            <div className="ctrl-btns">
              <button
                className="ctrl-btn"
                onClick={() => setActiveSkillIndex(previous)}
              ></button>
              <button
                className="ctrl-btn"
                onClick={() => setActiveSkillIndex(next)}
              ></button>
            </div>

            <span className="mbl_indicator">
              {Array.from({ length: skills.length }).map((x, index) => (
                <span
                  className="indicator"
                  data-active={(activeSkillIndex === index).toString()}
                ></span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skill({ title, id, activeSkillIndex, desc, image }) {
  return (
    <div
      className="skill"
      data-is-active={(id === activeSkillIndex).toString()}
    >
      <div class="content active">
        <div class="img">
          <img src={image} alt="" srcset="" class="content-image tb-slid-up" />
        </div>
        <div class="txt">
          <h2 class="heading">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Header({ useActiveSkillIndex }) {
  const [activeIndex, setActiveIndex] = useActiveSkillIndex();
  return (
    <div class="header">
      {skills.map((skill, index) => (
        <HeaderButton
          {...skill}
          id={index}
          key={index}
          activeIndex={activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

function HeaderButton({ id, activeIndex, title, ...props }) {
  return (
    <button class="indicator" {...props}>
      <p class="txt">{title}</p>
      <span class="trk">
        <span
          class="thumb"
          style={{
            width: `${activeIndex === id ? "100" : "0"}%`,
            transition: `${
              activeIndex !== id ? "0s" : `all ${delay}s ease-in-out`
            }`,
          }}
        ></span>
      </span>
    </button>
  );
}
