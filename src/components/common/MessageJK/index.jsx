import React from "react";
import JKLink from "../JKLink";

export default function index() {
  return (
    <div className="wrapper" id="contacts">
      <section class="next-section max_width" id="contact-jaykay">
        <div class="left-txt">
          <p class="marker-container">
            <span class="marker"></span>
            <span class="txt">Hey buddy, what's next?</span>
          </p>
        </div>
        <div class="right-txt">
          <AnimatedHeading>
            <AnimatedWord>LETS</AnimatedWord> BUILD <br />
            SOMETHING <AnimatedWord>TOGETHER</AnimatedWord>
          </AnimatedHeading>
          <p class="">
            Think I might be the right friend for your next adventure? Take a
            minute, I'd love to hear about your project, or need an advice about
            product design, just drop me a message below. I am currently
            AVAILABLE for any design gigs.
          </p>
          <JKLink href="mailto:jaykaykayode@gmail.com">SEND MESSAGE</JKLink>
        </div>
      </section>
    </div>
  );
}

function AnimatedHeading({ children }) {
  return (
    <h2 class="big_text fake-letter-container animated-sentence">{children}</h2>
  );
}

function AnimatedWord({ children }) {
  const [firstLetter, secondLetter, thirdLetter, ...remainingWord] = children;
  return (
    <div class="animated-word">
      <span class="fake-letter-rapper">
        <span class="real-letter">{firstLetter}</span>
        <span class="fake-letter">{firstLetter}</span>
        <span class="fake-letter two">{firstLetter}</span>
      </span>
      <span>{secondLetter}</span>
      <span class="fake-letter-rapper">
        <span class="real-letter">{thirdLetter}</span>
        <span class="fake-letter">{thirdLetter}</span>
      </span>
      {[...remainingWord]}
    </div>
  );
}

export { AnimatedWord, AnimatedHeading };
