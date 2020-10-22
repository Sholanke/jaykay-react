import React from "react";
import twitter from "../../assets/svg/twitter.svg";
import dribbble from "../../assets/svg/dribbble.svg";
import behance from "../../assets/svg/behance.svg";
import linkedIn from "../../assets/svg/linkedIn.svg";

export default function index() {
  return (
    <footer className="wrapper">
      <div className="max_width container">
        <div class="smedia-links">
          <a href="https://dribbble.com/iam_JayKay" target="blank">
            <img src={dribbble} alt="" srcset="" />
          </a>
          <a href="https://twitter.com/iam_JayKay" target="blank">
            <img src={twitter} alt="" srcset="" />
          </a>
          <a href="https://www.behance.net/jaykaydre" target="blank">
            <img src={behance} alt="" srcset="" />
          </a>
          <a href="https://ng.linkedin.com/in/kayodesho" target="blank">
            <img src={linkedIn} alt="" srcset="" />
          </a>
        </div>
        <div class="txt">
          <p>Designed by Jaykay - Developed by Olamide ( Super Star Cousin )</p>
        </div>
      </div>
    </footer>
  );
}
