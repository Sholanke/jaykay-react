import React from "react";
import keyboard from "../../../assets/img/keyboard.png";
import codeBeast from "../../../assets/img/code-beast.png";
import charles from "../../../assets/img/charles.png";
import Tilt from "react-tilt";

const accolades = [
  {
    author_name: "Christian Nwamba",
    author_role: "Senior Advocacy @Microsoft",
    author_comment: "“Jaykay is Incredibly talented and easy to work with”",
    author_image: codeBeast,
  },
  {
    author_name: "Charles Dairo",
    author_role: "CEO CKDIGITAL",
    author_comment:
      "“JayKay seamlessly combines design talent with all-round professionalism. It was a pleasure working with him, and I highly recommend.”",
    author_image: charles,
  },
];

export default function Accolades() {
  return window.innerWidth > 600 ? (
    <Tilt className="wrapper accolades_container">
      <FlexContainer />
    </Tilt>
  ) : (
    <div className="wrapper accolades_container">
      <FlexContainer />
    </div>
  );
}

function FlexContainer() {
  return (
    <div className="max_width flex_container">
      {accolades.map((accolade) => (
        <Accolade {...accolade} />
      ))}
      <img src={keyboard} className="keyboard" alt="" srcset="" />
    </div>
  );
}

const Accolade = ({
  author_comment: comment,
  author_name,
  author_role,
  author_image,
}) => (
  <div className="accolade">
    <p className="comment">{comment}</p>
    <div className="author">
      <img src={author_image} className="author_picture" alt="" />
      <div className="text_holder">
        <p className="name">{author_name}</p>
        <p className="role">{author_role}</p>
      </div>
    </div>
  </div>
);
