import React, { useRef, useEffect, useState } from "react";
import JKLink from "../../../common/JKLink";
import { AnimatedHeading, AnimatedWord } from "../../../common/MessageJK";
import { useScrollContext } from "../../../../context/scrollContext ";

import strip1 from "../../../assets/img/ey-strip.png";
import strip2 from "../../../assets/img/ey-strip-2.png";

import lifestyleStrip from "../../../assets/img/arm-strip.png";
import lifestyleStrip2 from "../../../assets/img/arm-strip-2.png";

import rzvStrip from "../../../assets/img/rzv-strip.png";
import rzvStrip2 from "../../../assets/img/rzv-strip-2.png";

import clStrip from "../../../assets/img/cl-strip.png";
import clStrip2 from "../../../assets/img/cl-strip-2.png";

import { useLocation } from "react-router";

const projects = [
  {
    strips: [strip1, strip2],
    heading: ["Bank", "on your phone number"],
    keys: [
      {
        key: "Year",
        value: "2019",
      },
      {
        key: "Type",
        value: "Fintech",
      },
    ],
    description:
      "This product is enjoyed as a convenient means of payment by millions of people across Nigeria. I had the opportunity to work directly with the team to showcase their new product features. I touched nearly everything visible on the product from all the user experience, landing pages to the design of their payment dashboard, mobile apps, windows app, and retail app.",
    navLinkToProject: "/eyowo",
  },
  {
    strips: [lifestyleStrip, lifestyleStrip2],
    heading: [
      "Lifestyle",
      <>
        Planner <br /> Walk into tomorrow
      </>,
    ],
    keys: [
      {
        key: "Year",
        value: "2019",
      },
      {
        key: "Type",
        value: "Pension",
      },
      {
        key: "Website",
        value: (
          <a href="https://wit.armpension.com/" target="blank" class="site">
            wit.armpension.com
          </a>
        ),
      },
    ],
    description: `Working closely with a team of stakeholders, product managers, designers and developers, I was responsible for designing the Interface for a pensioners lifestyle planner. The Pensions lifestyle planner helps you start preparing for your tomorrow, today. With carefully selected questions, it predicts an individual’s retirement fund and lifestyle.`,
    navLinkToProject: "/arm",
  },
  {
    strips: [clStrip, clStrip2],
    heading: [
      "Cloudy",
      <>
        Moments <br /> Cloudinary
      </>,
    ],
    keys: [
      {
        key: "Year",
        value: "2019",
      },
      {
        key: "Type",
        value: "Media",
      },
    ],
    description:
      "I was reponsible for designing a mobile (VueJS) app enabling capture of short videos and uploading them to Cloudinary for auto-tagging. I also designed a moderation app that allows reviewing of these short (8-sec) videos and assigning them to playlist queues, yet another app is replaying the video playlists on a browser (which will be projected on a big projector screen).",
  },
  {
    strips: [rzvStrip, rzvStrip2],
    heading: [
      "Rizevo",
      <>
        <br />
        Appointment Booking
      </>,
    ],
    keys: [
      {
        key: "Year",
        value: "2020",
      },
      {
        key: "Type",
        value: "Booking",
      },
      {
        key: "Website",
        value: (
          <a href="https://www.rizevo.com/" target="blank" class="site">
            www.rizevo.com
          </a>
        ),
      },
    ],
    description:
      "Working closely with the client, we created an all-in-one solution for customers and business owners to book and manage appointments.I was responsible for designing the  UX for the business owner and customer’s platform. This was done with the mobile first approach in mind  which made it easier scaling to bigger screens.",
  },
];

export default function Index() {
  const location = useLocation();
  const projectsRef = useRef();

  useEffect(() => {
    if (location.hash === "#projects") {
      projectsRef.current.scrollIntoView({
        // behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <section
      className="projects-section wrapper"
      id="projects"
      ref={projectsRef}
    >
      <div className="max_width">
        <h2 className="co_theme section-heading  ">PROJECTS</h2>
        <div className="projects">
          {projects.map((p, index) => (
            <Project {...p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyValue({ keyText, value }) {
  return (
    <div className="key_value">
      <span className="key co_theme">{keyText}</span> {value}
    </div>
  );
}

function Project({
  heading: [animateWord, restOfHeading],
  keys,
  description,
  navLinkToProject,
  strips,
  index,
}) {
  return (
    <div className="project">
      <div className="image_section">
        <AnimateStrips strips={strips} index={index} />
      </div>
      <div className="text_section">
        <AnimatedHeading>
          <AnimatedWord>{animateWord}</AnimatedWord> {restOfHeading}
        </AnimatedHeading>
        <div className="key_value_container">
          {keys.map((k) => (
            <>
              <KeyValue {...k} keyText={k.key} />
            </>
          ))}
        </div>
        <p>{description}</p>
        <JKLink
          to={navLinkToProject}
          data-coming-soon={!navLinkToProject ? "true" : "false"}
        >
          View Case
        </JKLink>
      </div>
    </div>
  );
}

function AnimateStrips({ strips, index }) {
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
        style={{
          transform: `translate(0,${distanceToMove}px)`,
          backgroundImage: `url(${strips?.[0]})`,
        }}
      >
        <p
          className="number"
          style={{
            transform: `translate(0,${distanceToMove * 0.8}px)`,
          }}
        >
          0
        </p>
      </div>
      <div
        className="strip"
        ref={stripTwo}
        style={{
          transform: `translate(0,${-distanceToMove}px)`,
          backgroundImage: `url(${strips?.[1]})`,
        }}
      >
        <p
          className="number"
          style={{
            transform: `translate(0,${-distanceToMove * 0.8}px)`,
          }}
        >
          {index + 1}
        </p>
      </div>
    </div>
  );
}
