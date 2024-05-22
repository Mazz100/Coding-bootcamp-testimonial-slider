import React from "react";
import tanya from "./images/image-tanya.jpg";
import john from "./images/image-john.jpg";
import quotes from "./images/pattern-quotes.svg";
import bgPattern from "./images/pattern-bg.svg";

const TestimonialSlider = () => {
  return (
    <div
      className="testimonial-container"
      role="group"
      aria-roledescription="Slide"
      aria-label="1 of 2"
    >
      {/*Pattern background with absolute positioning*/}
      <img className="pattern-bg" src={bgPattern} alt="" aria-hidden={true} />

      <div className="testimonial-image-wrapper">
        <img src={tanya} alt="" />
      </div>

      <figure className="figure-wrapper">
        <img className="quotes-image" src={quotes} alt="quotes pattern" />
        <blockquote className="testimonial-quote">
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </blockquote>
        <figcaption className="figcaption-wrapper">
          <p className="person">Tanya Sinclair</p>
          <p className="person-job">UX Engineer</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialSlider;
