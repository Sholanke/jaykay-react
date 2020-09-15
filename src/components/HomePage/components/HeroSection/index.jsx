import React from "react";
import { AnimatedHeading, AnimatedWord } from "../../../common/MessageJK";
import { NavLink } from "react-router-dom";
import hand from "../../../assets/img/hand.png";
import jaykay from "../../../assets/img/jk.png";

export default function index() {
  return (
    <div className="wrapper hero_section_container">
      <div className="max_width">
        <div class="top">
          <div class="top-txt">
            <div>
              <h5 class="med-txt">
                HI THERE
                <img class="waving-hand" src={hand} alt="hand waving" />
              </h5>
              <AnimatedHeading>
                MEET <AnimatedWord>KAYODE</AnimatedWord>{" "}
                <AnimatedWord>SHOLANKE</AnimatedWord>
              </AnimatedHeading>
              <p class="tb-slid-up">
                I’m a product designer based in Lagos, Nigeria
                <span class="small-txt">(for now)</span> with experience in
                delivering end to end designs for digital products. From
                ideation to execution, I make great user experiences with UI
                design.
                <br />
                <br />
                Learn more{" "}
                <NavLink to="/about" class="co_theme">
                  about me
                </NavLink>{" "}
                or jump straight to{" "}
                <a href="#jk-projects" class="co_theme">
                  my work
                </a>
                .
              </p>
              <p class="scroll-indict">SCROLL FOR MORE</p>
            </div>
          </div>

          <div className="top-img">
            <img src={jaykay} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
