import React from "react";
import cv from "../../../assets/docs/cv.pdf";

export default function index() {
  return (
    <section class="wrapper career-section">
      <div className="max_width">
        <div class="header">
          <h2 class="co_theme section-heading">CAREER</h2>

          <a href={cv} target="blank" class="co_theme">
            GET MY CV(.PDF)
          </a>
        </div>
        <div class="cards-container">
          <HistoryCard
            timeLine={[
              {
                company: "Hotels.ng",
                role: "UI Designer",
                time: "Lagos | Nigeria, Feb 2017 - May 2017 ",
              },
              {
                company: "Softcom.ng",
                role: "Product Designer",
                time: "Lagos | Nigeria, Mar 2018 - Jan 2020",
              },
            ]}
          />
          <HistoryCard
            title="PRESENT"
            timeLine={[
              {
                company: "Tangerine Life",
                role: "Product Designer",
                time: "Lagos | Nigeria, Jan 2020 - present ",
              },
            ]}
          />
          <div class="card">
            <p class="sub-heading">FUTURE</p>
            <div class="work-space">
              <a
                href="mailto:jaykaykayode@gmail.com"
                class="sub-heading co_theme site"
              >
                YOU DECIDE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HistoryCard({ timeLine, title }) {
  return (
    <div class="card long-card">
      <p class="sub-heading">{title || "PAST"}</p>
      {timeLine?.map(({ company, role, time }) => (
        <div class="work-space">
          <p class="sub-heading co_theme">{company}</p>
          <div class="work-space-info">
            <p class="role">
              <span class="borderd-dot"></span>
              <span class="txt">{role}</span>
            </p>
            <p class="date txt">{time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
