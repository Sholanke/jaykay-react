import React, { useRef, useEffect, useState } from "react";
import JKLink from "../../../common/JKLink";
import { AnimatedHeading, AnimatedWord } from "../../../common/MessageJK";
import { useScrollContext } from "../../../../context/scrollContext ";

export default function index() {
  return (
    <section className="projects-section wrapper" id="jk-projects">
      <div className="max_width">
        <h2 className="co_theme section-heading  ">PROJECTS</h2>
        <div className="projects">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
}

function Project() {
  return (
    <div className="project">
      <div className="image_section">
        <AnimateStrips />
      </div>
      <div className="text_section">
        <AnimatedHeading>
          <AnimatedWord>Bank</AnimatedWord> on your phone number
        </AnimatedHeading>
        <div className="key_value_container">
          <KeyValue />
          <KeyValue />
          <KeyValue />
        </div>
        <p>
          Working closely with a team of stakeholders, product managers,
          designers and developers, I was responsible for designing the
          Interface for a pensioners lifestyle planner. The Pensions lifestyle
          planner helps you start preparing for your tomorrow, today. With
          carefully selected questions, it predicts an individual’s retirement
          fund and lifestyle.
        </p>
        <JKLink>View Case</JKLink>
      </div>
    </div>
  );
}

function AnimateStrips() {
  const stripOne = useRef();
  const stripTwo = useRef();
  const stripContainer = useRef();
  const [distanceToMove, setDistanceToMove] = useState(0);
  const [scrollValue, setScrollValue] = useScrollContext();

  useEffect(() => {
    let pos = stripContainer.current.getBoundingClientRect();
    let newDistanceToMove = (pos.top - (window.innerHeight - pos.bottom)) / 20;
    setDistanceToMove(newDistanceToMove);
  }, [scrollValue]);
  return (
    <div className="strips" ref={stripContainer}>
      <div
        className="strip"
        ref={stripOne}
        style={{ transform: `translate(0,${distanceToMove}px)` }}
      >
        <p className="number">0</p>
      </div>
      <div
        className="strip"
        ref={stripTwo}
        style={{ transform: `translate(0,${-distanceToMove}px)` }}
      >
        <p className="number">0</p>
      </div>
    </div>
  );
}

function KeyValue() {
  return (
    <div className="key_value">
      <span className="key co_theme">Year</span> 2019
    </div>
  );
}
