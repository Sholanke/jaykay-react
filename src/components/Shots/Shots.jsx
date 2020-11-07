import React from "react";
import hallmark from "../assets/img/Hallmark.png";
import juke from "../assets/img/Jukebox.png";
import dinner from "../assets/img/Dinner.png";
import tl1 from "../assets/img/DribbbleShot.png";
import tl2 from "../assets/img/DribbbleShot-2.png";
import one from "../assets/img/one.png";

export default function Shots() {
  return (
    <div className="wrapper shots">
      <div className="max_width">
        <img src={one} className="shot" />
        <img src={tl1} className="shot" />
        <img src={tl2} className="shot" />
        <img src={hallmark} className="shot" />
        <img src={juke} className="shot" />
        <img src={dinner} className="shot" />
      </div>
    </div>
  );
}
