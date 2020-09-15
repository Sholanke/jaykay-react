import React from "react";
import JKLink from "../../../common/JKLink";
import jaykay from "../../../assets/img/jk.png"
import quote from "../../../assets/svg/quote.svg"

export default function Story() {
  return (
    <div className="wrapper">
      <div className="max_width">
        <div class="about-section">
          <div class="left-section">
            <div class="top-image-rapper">
              <img src={jaykay} alt="" srcset=""/>
            </div>
          </div>
          <div class="right-section">
            <h1 class="main-heading ">
              <img src={quote} alt="" srcset="" class="abstract" />
              Hello World
            </h1>
            <p class="norm">
              I’m an enthusiastic product designer currently shaping the future
              of design in Nigeria. I am passionate about creating user centric,
              delightful and human experiences.
            </p>
            <p class="norm">
              With over 3 years of experience, I’ve enjoyed designing products
              in Finance,Education, Data, Retail and Identity. I previously led
              the design team in payment at{" "}
              <a href="https://softcom.ng/" target="blank" class="co_theme">
                Softcom
              </a>{" "}
              before joining{" "}
              <a
                href="https://tangerinelife.com/"
                target="blank"
                class="co_theme"
              >
                Tangerine Life
              </a>{" "}
              as a product designer where I currently create intuitive
              interfaces, interactions and experiences at the same time having
              fun in the process.
            </p>
            <p class="norm ">
              I do like to share and discuss ideas and concepts which leads us
              to learn more. We should ask more questions to develop ourselves
              in terms of design.
            </p>
            <p class="norm ">
              I’m quite passionate about creating human centric products so my
              design work is driven by user research. I believe in using design
              and technology to create opportunities for people and businesses.
            </p>
            <p class="norm ">
              If you'd like to talk about a project you want help with or need
              an advice about product design, just drop me a message at{" "}
              <a
                href="mailto:jaykaykayode@gmail.com"
                class="co_theme"
                target="mailto:jaykaykayode@gmail.com"
              >
                jaykaykayode@gmail.com
              </a>{" "}
              . I'm currently AVAILABLE to work on new (and cool) ideas and if
              you’ve got one of those?
            </p>
            <JKLink>SAY HELLO</JKLink>
            <p class="norm ">Stay up with pixels</p>
          </div>
        </div>
      </div>
    </div>
  );
}
