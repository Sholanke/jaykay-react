import React from "react";


import eyTn from "../assets/img/eyowo_tn.png"
import clTn from "../assets/img/cloud_tn.png"
import { NavLink } from "react-router-dom";

const ARMBanner  = "https://res.cloudinary.com/fempanath/image/upload/v1603375951/Jaykay/arm-banner-small_nqxlp2.png"
const ARMBannerBig  = "https://res.cloudinary.com/fempanath/image/upload/v1603375953/Jaykay/arm-banner-big_kzmy3i.png"


export default function index() {
  return (
    <div class="wrapper">
      <div class="max_width">
        <div class="project-heading-container">
          <div class="project-info">
            <h2 class="heading big_text tb-slid-up">
              Lifestyle Planner
              <br />
              Walk into tomorrow
            </h2>

            <div class="project-brief-container">
              <div class="site-info">
                <p class="special tb-slid-up">
                  <span class="co_theme">Year</span> 2019
                </p>
                <p class="special tb-slid-up">
                  <span class="co_theme">Type</span> Pension
                </p>

                <p class="special tb-slid-up">
                  <span class="co_theme">Role</span> Product Designer
                </p>
              </div>

              <div class="brief">
                <h2 class="tb-slid-up">Brief</h2>
                <p class="norm tb-slid-up">
                  This platform helps you start preparing for your tomorrow,
                  today. With carefully selected questions, it predicts an
                  individual’s retirement fund and lifestyle and at the same
                  time, gives general advice on how to secure a financially
                  secure future
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="project-dp-rapper tb-slid-up">
          <img src={ARMBanner} alt="" class="project-dp" />
        </div>

        <div class="challenge-solution-section">
          <div class="left">
            <h2 class="heading tb-slid-up">THE CHALLENGE</h2>
            <p class="norm tb-slid-up">
              Think about filling a very long form. Well that’s already half the
              battle for the user struggling to get answers on how to secure
              his/her future.
              <br />
              <br />
              The challenge was to make this process easy and fun to do as much
              as we could.
            </p>
          </div>
          <div class="right">
            <h2 class="heading tb-slid-up">THE SOLUTION</h2>
            <p class="norm tb-slid-up">
              The solution was to design a platform that will enable users
              answer series of engaging questions without being bored doing so.
              It was to design a new creative direction to improve the user
              experience of being able predict an Individuals future.
            </p>
          </div>
        </div>

        <div class="research-section wide">
          <div class="txt">
            <h2 class="medium-text tb-slid-up">
              Research & <br />
              Competitor analysis
            </h2>
            <div class="flex">
              <div class="left">
                <p class="norm tb-slid-up">
                  According to a survey done by the team and I, 12 out of 15
                  persons in Nigeria never plan their retirements. These persons
                  do not have a retirement savings account because they are not
                  educated enough about it. How might we help these persons to
                  be mindful about their retirement and enable them secure a
                  brighter financial future?
                </p>
              </div>

              <div class="right">
                <p class="norm tb-slid-up">
                  The team started by gathering quite a lot inspiration and
                  ideas from similar companies that provided such service like
                  aviva and typeform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="background-section wide">
          <div class="left">
            <h2 class="heading big tb-slid-up">User Flows</h2>
            <p class="norm tb-slid-up">
              After getting enough information from various sites and with
              complete understading of the product requirements speced out, I
              went straight to designing the user flow which helped informed my
              design and ensured the functionality is always placed in the right
              place.
            </p>
          </div>
          <div class="right">
            <h2 class="heading big tb-slid-up">Visual Design</h2>
            <p class="norm tb-slid-up">
              At the stage, my aim was to shape and improve the user experience
              through considering the effects of illustrations, photography,
              typography, space, layouts, and color on the usability of the
              product. The result can be found below
            </p>
          </div>
        </div>

        <div class="project-dp-rapper wide small tb-slid-up">
          <img src={ARMBannerBig} alt="" class="project-dp" />
        </div>

        <div class="background-section wide">
          <div class="left">
            <h2 class="heading big tb-slid-up">Results and Learnings</h2>
            <p class="norm tb-slid-up">
              While this project was in development, we tested and analyzed our
              findings for the design with the projects stakeholders and some
              potential users of the lifestyle planner. We've seen promising
              metrics and we were so excited to see the launch of this project
              in 2019!
            </p>
          </div>
        </div>

        <div class="grid-3">
          <div class="content">
            <p class="percent tb-slid-up">75%</p>
            <p class="title tb-slid-up">Conversion</p>
            <p class="norm tb-slid-up">
              Measured by users clicking the ad from the main site
            </p>
          </div>
          <div class="content">
            <p class="percent tb-slid-up">85%</p>
            <p class="title tb-slid-up">Satisfaction</p>
            <p class="norm tb-slid-up">
              Measured through users engaging with the questions
            </p>
          </div>
          <div class="content">
            <p class="percent tb-slid-up">60%</p>
            <p class="title tb-slid-up">Retention</p>
            <p class="norm tb-slid-up">
              Measured through completing the questions
            </p>
          </div>
        </div>

        <div class="background-section wide">
          <div class="left">
            <div class="points-container">
              <p class="norm tb-slid-up">
                Here are some things I've learned to keep top of mind as I
                design –
              </p>
              <p class="point tb-slid-up">
                Know that each stakeholder has different goals and as a
                designer, you have a responsibility towards both the client and
                the user. Finding middle ground here is the most effective
                outcome, through both iterations and conversations.
              </p>
              <p class="point tb-slid-up">
                Know that each stakeholder has different goals and as a
                designer, you have a responsibility towards both the client and
                the user. Finding middle ground here is the most effective
                outcome, through both iterations and conversations.
              </p>
            </div>
          </div>
        </div>

        <div class="prev-nxt">
          <div class="card">
            <NavLink to="/eyowo" class="prv js-page-link">
              <p class="tb-slid-up">PREVIOUS</p>
              <span class="img-rapper tb-slid-up">
                <img src={eyTn} />
              </span>
            </NavLink>
            <NavLink to="/" class="nxt cm-sn">
              <p class="r-align tb-slid-up">NEXT</p>
              <span class="img-rapper tb-slid-up">
                <img src={clTn} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
