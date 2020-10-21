import React, { useEffect, useRef } from "react";
import { AnimatedHeading, AnimatedWord } from "../../../common/MessageJK";
import { NavLink, Link, useLocation } from "react-router-dom";
import hand from "../../../assets/img/hand.png";
import jaykay from "../../../assets/img/jk.png";

export default function Index() {
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
                I’m a product designer based in Lagos, Nigeria{" "}
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
                <Link
                  to={{
                    pathname: "/",
                    hash: "#projects",
                  }}
                  class="co_theme"
                >
                  my work
                </Link>
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
