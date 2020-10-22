import React, { useEffect } from "react";
import "../../css/eyowo.css";
import bannerImage from "../assets/img/eyowo-app-banner.png";
import researchImage from "../assets/img/eyowo-research.png";
import thinkImage from "../assets/img/eyowo-think.png";

import app from "../assets/img/eyowo-new-app.png";
import appOne from "../assets/img/eyowo-app-1.png";
import appTwo from "../assets/img/eyowo-app-2.png";
import appThree from "../assets/img/eyowo-app-3.png";
import appFour from "../assets/img/eyowo-app-5.png";

//more shots
import morePhone_1 from "../assets/img/ey-more-phone-1.png";
import morePc_1 from "../assets/img/ey-more-pc-1.png";

import morePhone_2 from "../assets/img/ey-more-phone-2.png";
import morePc_2 from "../assets/img/ey-more-pc-2.png";

import morePhone_3 from "../assets/img/ey-more-phone-3.png";
import morePc_3 from "../assets/img/ey-more-pc-3.png";

import morePhone_4 from "../assets/img/ey-more-phone-4.png";
import morePc_4 from "../assets/img/ey-more-pc-4.png";

//tweets
import tweet_pri from "../assets/img/tweet-primary-1.png";
import tweet_pri_2 from "../assets/img/tweet-primary-2.png";

import tweet_1 from "../assets/img/tweet-1.png";
import tweet_2 from "../assets/img/tweet-2.png";
import tweet_3 from "../assets/img/tweet-3.png";
import tweet_4 from "../assets/img/tweet-4.png";
import tweet_5 from "../assets/img/tweet-5.png";
import tweet_6 from "../assets/img/tweet-6.png";

import liteCrowd from "../assets/img/liteCrowd_tn.png";

import arm from "../assets/img/arm_tn.png";
import { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const tweets = [
  {
    src: tweet_1,
    alt: "tweet",
  },
  {
    src: tweet_2,
    alt: "tweet",
  },
  {
    src: tweet_3,
    alt: "tweet",
  },
  {
    src: tweet_4,
    alt: "tweet",
  },
  {
    src: tweet_5,
    alt: "tweet",
  },
  {
    src: tweet_6,
    alt: "tweet",
  },
];

export default function Eyowo() {
  const slider = useRef();
  const [sliderCount, setsliderCount] = useState(0);
  const [sliderShift, setsliderShift] = useState(0);

  const nextFn = (prev) => {
    if (prev < tweets.length - 1) {
      return prev + 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    setInterval(() => {
      setsliderCount(nextFn);
    }, 6000);
  }, []);

  //handle shift
  useEffect(() => {
    const { current: sliderNode } = slider;
    const imgNodes = Array.from(sliderNode.querySelectorAll("img"));
    
    let shift = 0;
    for (let x = 0; x < sliderCount; x++) {
      shift += imgNodes[x].offsetWidth + 30;
    }
    setsliderShift(shift);
  }, [sliderCount]);

  return (
    <div class="wrapper eyowo-wrapper">
      <div class="max_width" id="main">
        <div class="project-heading-container">
          <div class="project-info">
            <h2 class="heading big_text tb-slid-up">
              Bank on your phone <br />
              number
            </h2>

            <div class="project-brief-container">
              <div class="site-info">
                <p class="special tb-slid-up">
                  <span class="co_theme">Year</span> 2019
                </p>
                <p class="special tb-slid-up">
                  <span class="co_theme">Type</span> Fintech
                </p>

                <p class="special tb-slid-up">
                  <span class="co_theme">Role</span> Product Designer
                </p>
              </div>

              <div class="brief">
                <h2 class="tb-slid-up">Brief</h2>
                <p class="norm tb-slid-up">
                  This platform puts all your financial accounts in one place
                  and makes it convenient for you to spend, send, receive, save
                  and borrow money all from your mobile phone and with just your
                  phone number. It’s a traditional bank alternative with a
                  mission to financially include the unbanked.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="project-dp-rapper tb-slid-up">
          <img src={bannerImage} alt="" class="project-dp" />
        </div>
        <div class="background-section">
          <div class="left">
            <h2 class="heading tb-slid-up">BACKGROUND</h2>
            <p class="norm tb-slid-up">
              Imagine you could send money to anyone from your mobile phone even
              if they don’t have a bank account, and all you need is their
              mobile phone number – details you probably already have.
            </p>
          </div>
        </div>
        <div class="challenge-solution-section">
          <div class="left">
            <h2 class="heading tb-slid-up">THE CHALLENGE</h2>
            <p class="norm tb-slid-up">
              After about a year after launch, We learned that the product was
              initially way too complicated to use, Basic and relevant features
              were difficult to find, Features introduced were not being used,
              Users didn’t understand the product at first glance. Trouble on
              multiple fronts.
            </p>
          </div>
          <div class="right">
            <h2 class="heading tb-slid-up">THE SOLUTION</h2>
            <p class="norm tb-slid-up">
              The solution was to design a completely new look for the mobile
              app with a user-centred approach. It was to design a new creative
              direction, improve the user experience of being able to spend,
              send, receive, save and borrow money with just a phone number.
            </p>
          </div>
        </div>
        <div class="research-section">
          <div class="txt">
            <h2 class="medium-text tb-slid-up">
              Research & <br />
              User Experience
            </h2>
            <p class="norm tb-slid-up">
              The team had already identified a couple obvious things that
              required improvement from the previous app, but we needed
              additional quantitative data from users to identify areas where
              efficiency could be increased and we needed it fast. At this
              point, we hit a roadblock. So what did we do next?
            </p>
            <p class="norm tb-slid-up">
              We interviewed over 100 people, recorded them using the product
              from signup to transfers to funding their accounts to dealing with
              app side issues.
            </p>
          </div>
          <div class="img">
            <img src={researchImage} alt="" srcset="" class="tb-slid-up" />
          </div>
        </div>
        <div class="result-section">
          <div class="txt">
            <h2 class="medium-text tb-slid-up">
              Result from <br />
              the usablity test
            </h2>
            <p class="norm tb-slid-up">
              What is the one thing you would like to see changed in the mobile
              app?
            </p>
          </div>
          <div class="img">
            <div class="bg-dark advantages">
              <div class="advantage">
                <p class="co-prj-theme norm tb-slid-up">Home</p>
                <p class="norm tb-slid-up">
                  It is confusing to use and difficult to find actions.
                </p>
              </div>

              <div class="advantage">
                <p class="co-prj-theme norm tb-slid-up">Funding</p>
                <p class="norm tb-slid-up">Difficult to fund the wallet</p>
              </div>

              <div class="advantage">
                <p class="co-prj-theme norm tb-slid-up">Send money</p>
                <p class="norm tb-slid-up">
                  The process of sending money seems long
                </p>
              </div>

              <div class="advantage">
                <p class="co-prj-theme norm tb-slid-up">Buying bills</p>
                <p class="norm tb-slid-up">
                  It’s difficult to find the bills section on the app
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grade-section">
          <div class="txt">
            <p class="norm tb-slid-up">
              How likely are you to recommend the product to a friend or
              colleague
            </p>
          </div>
          <div class="img">
            <div class="bg-dark tb-slid-up">
              <span class="grade">1</span>
              <span class="grade">2</span>
              <span class="grade">3</span>
              <span class="grade">4</span>
              <span class="grade active">5</span>
              <span class="grade">6</span>
              <span class="grade">7</span>
              <span class="grade">8</span>
              <span class="grade">9</span>
              <span class="grade">10</span>
            </div>
          </div>
        </div>
        <div class="often-section">
          <div class="txt">
            <p class="norm tb-slid-up">
              Compared to other bank applications how often do you use the
              product to send money.
            </p>
          </div>
          <div class="img">
            <div class="bg-dark">
              <p class="norm co-prj-theme tb-slid-up">Not often</p>
            </div>
          </div>
        </div>
        <div class="redesign-section">
          <div class="txt">
            <h2 class="medium-text tb-slid-up">The Redesign</h2>
            <p class="norm tb-slid-up">
              Before designing anything else, we focused on stripping away the
              old stuff and getting actions done faster. The part that we felt
              was the most important one and tried to build up again on that.
              “The Home page.” But before then, we sketched out some flows and
              sketches to make this process easier.
            </p>
            <p class="norm tb-slid-up">
              Here is a link to the UX flow:
              <a
                href="http://bit.ly/37LnGPC"
                target="blank"
                class="co_theme semi-small-txt"
              >
                http://bit.ly/37LnGPC
              </a>
            </p>
          </div>
          <div class="img tb-slid-up">
            <img src={thinkImage} alt="" srcset="" />
          </div>
        </div>
        <div class="prj-overview">
          <div class="txt">
            <p class="norm tb-slid-up">
              Most users we had interviewed internally and externally could not
              figure out what to do on the home page unless they were assisted.
              This was a challenge, because if we could not get people to
              understand the app in the first page, all other pages or features
              were useless as they would be hidden.
            </p>
            <p class="norm tb-slid-up">
              So we broke the homepage down into six following sections:
            </p>

            <div class="overview tb-slid-up">
              <span class="num">1</span>
              <div class="overview-text">
                <p class="norm">
                  <span class="co-prj-theme title">Top Nav - </span>This section
                  shows your profile, balance and notifications at a glance. The
                  balance button shows a modal that enables you hide/show the
                  balance ( A feature requested by most of our users during the
                  reasearch)
                </p>
              </div>
            </div>

            <div class="overview tb-slid-up">
              <span class="num">2</span>
              <div class="overview-text">
                <p class="norm">
                  <span class="co-prj-theme title">Quick actions - </span>The
                  issue of finding core features was solved in this section. So
                  bringing this forward, users can see and perform these actions
                  without going on a wild goose chase. Each element in this
                  section were placed based on business goals.
                </p>
              </div>
            </div>

            <div class="overview tb-slid-up">
              <span class="num">3</span>
              <div class="overview-text">
                <p class="norm">
                  <span class="co-prj-theme title">
                    Account verification -{" "}
                  </span>
                  Users are expected to update their information here so they
                  can have unrestricted access to the platform.
                </p>
              </div>
            </div>

            <div class="overview tb-slid-up">
              <span class="num">4</span>
              <div class="overview-text">
                <p class="norm">
                  <span class="co-prj-theme title">Transactions - </span>Based
                  on feedback from the research, viewing transaction history is
                  a major part an individuals financial life. The three most
                  recent transactions are now brought to the homepage for the
                  users.
                </p>
              </div>
            </div>

            <div class="overview tb-slid-up">
              <span class="num">5</span>
              <div class="overview-text">
                <p class="norm">
                  <span class="co-prj-theme title">Navigation drawers - </span>
                  The old app had a major navigation issue. So bringing a bottom
                  nav that gives easy access to other features was a thing to
                  make navigation easy for our users.
                </p>
              </div>
            </div>

            <div class="overview tb-slid-up">
              <span class="num">6</span>
              <div class="overview-text">
                <p class="norm">
                  <span class="co-prj-theme title">Expense tracker - </span>This
                  section shows an expense tracker that shows how they spend
                  their money weekly.
                </p>
              </div>
            </div>
          </div>
          <div class="img">
            <img src={app} alt="" srcset="" />
          </div>
        </div>
        <div class="des-for-save">
          <div class="text-container">
            <div class="text-rapper">
              <h2 class="medium-text tb-slid-up">Designing for savings</h2>
              <p class="norm tb-slid-up">
                Sometimes a big expense comes your way that can be really tough
                to cover or just. To help, we created a handy way to tuck away
                money. The initial idea was to gamify this experience by giving
                our users savings badges as they clocked different milestones
                the higher they saved with the product. But with the limited
                time we had to release this version, we went ahead to do
                something simple and straight to the point of keeping money
                aside for a purpose.
              </p>
            </div>
            <div class="phones">
              <img src={appOne} alt="" srcset="" class="phone tb-slid-up" />
              <img src={appTwo} alt="" srcset="" class="phone tb-slid-up" />
            </div>
          </div>
          <div class="img-container">
            <img src={appThree} alt="" srcset="" class="phone tb-slid-up" />
            <img src={appFour} alt="" srcset="" class="phone tb-slid-up" />
          </div>
        </div>
        <div class="testimonials">
          <div class="txt">
            <h2 class="medium-text tb-slid-up">The Impact</h2>
            <p class="norm tb-slid-up">
              After succesuful development and internal test with the staff of
              the company, It was time to release the product to the public and
              get their feedback. October 10, 2019 was the day of launch.
            </p>
            <p class="norm tb-slid-up">
              The feedback we got on the experience of the new app were
              fulfiling and we knew that we had done something great.
            </p>
            <p class="norm tb-slid-up">
              Here are some of the few testimonials from users
            </p>
          </div>
          <div class="img">
            <img src={tweet_pri} alt="" srcset="" />
            <img src={tweet_pri_2} alt="" srcset="" />
          </div>
        </div>
        <div class="section-wrapper slider-container">
          <button
            class="mv-btn mv-btn-r js-right"
            onClick={() => setsliderCount(nextFn)}
          >
            {/* <img src="../assets/navigate_next-24px.svg" alt="" srcset="" /> */}
          </button>
          <div
            class="slider js-horizontal-slider"
            style={{ transform: `translate(-${sliderShift}px,0)` }}
            ref={slider}
          >
            {tweets.map((tweet) => (
              <img {...tweet} alt={tweet.alt} class="slider-element"></img>
            ))}
          </div>
        </div>
        <div class="mobile-desktop-shots">
          <h1 class="medium-text tb-slid-up">More screenshots</h1>

          <div class="desktop-mobile-container tb-slid-up">
            <div class="desktop">
              <img src={morePc_1} alt="" srcset="" />
            </div>
            <div class="mobile">
              <img src={morePhone_1} alt="" srcset="" />
            </div>
          </div>

          <div class="desktop-mobile-container tb-slid-up">
            <div class="desktop">
              <img src={morePc_2} alt="" srcset="" />
            </div>
            <div class="mobile">
              <img src={morePhone_2} alt="" srcset="" />
            </div>
          </div>

          <div class="desktop-mobile-container tb-slid-up">
            <div class="desktop">
              <img src={morePc_3} alt="" srcset="" />
            </div>
            <div class="mobile">
              <img src={morePhone_3} alt="" srcset="" />
            </div>
          </div>

          <div class="desktop-mobile-container tb-slid-up">
            <div class="desktop">
              <img src={morePc_4} alt="" srcset="" />
            </div>
            <div class="mobile">
              <img src={morePhone_4} alt="" srcset="" />
            </div>
          </div>

          <p class="crd">
            Credit goes to
            <a href="https://sesan.design/" class="co_theme">
              Olusesan Peter
            </a>
          </p>
        </div>
        <div class="prev-nxt">
          <div class="card">
            <a class="prv cm-sn">
              <p class="tb-slid-up">PREVIOUS</p>
              <span class="img-rapper tb-slid-up">
                <img src={liteCrowd} alt="" srcset="" />
              </span>
            </a>
            <NavLink to="/arm" class="nxt js-page-link">
              <p class="r-align tb-slid-up">NEXT</p>
              <span class="img-rapper tb-slid-up">
                <img src={arm} alt="" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
