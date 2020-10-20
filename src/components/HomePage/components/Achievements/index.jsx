import React from "react";
import trophy from "../../../assets/svg/trophy.svg";
import figma from "../../../assets/svg/figma.svg";

const promises = [
  {
    title: "Experience you will love",
    desc:
      "This is what I love to do, so I am passionate about using design as a  method for improving  connections between people and the products they use.",
  },
  {
    title: "A healthy freelance relationship",
    desc:
      "No dramas or difficult relationships. I'm here to connect and understand people, make your life easier, solve problems and help you grow your business.",
  },
];

const achievements = [
  {
    svg: trophy,
    title: "Best Designer 2018",
    desc:
      "Awarded best designer for continuously delivering user-centric products at Softcom Limited ",
  },
  {
    svg: trophy,
    title: "Best Designer 2019",
    desc:
      "Awarded best designer for delivering user-centric products for the second time at Softcom Limited ",
  },
  {
    svg: figma,
    title: "Config Europe Figma",
    desc:
      "Spoke about Mobile web with Figma at Figma’s International Conference 2020",
  },
];

export default function index() {
  return (
    <div className="wrapper achievements_container">
      <div className="max_width achievements">
        {achievements.map((achievement) => (
          <Achievement {...achievement} />
        ))}
      </div>
      <div className="max_width promise">
        <h1>From big to small clients, Here’s what I always promise:</h1>
        <div className="flex_container">
          {promises.map((promise) => (
            <Promise {...promise} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Promise = ({ title, desc }) => {
  return (
    <div>
      <p className="title">{title}</p>
      <p>{desc}</p>
    </div>
  );
};

const Achievement = ({ svg, desc }) => {
  return (
    <div>
      <img src={svg} alt="" srcset="" />
      <p className="title">Best Designer 2019</p>
      <p>{desc}</p>
    </div>
  );
};
