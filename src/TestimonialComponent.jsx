import React from "react";
import tanya from "./images/image-tanya.jpg";
import john from "./images/image-john.jpg";
import quotes from "./images/pattern-quotes.svg";
import bgPattern from "./images/pattern-bg.svg";
import prev from "./images/icon-prev.svg";
import next from "./images/icon-next.svg";

const TestimonialComponent = () => {
  return (
    <div className="testimonial-container">
      {/*Pattern background with absolute positioning*/}
      <img
        className="pattern-bg"
        src={bgPattern}
        alt="testimonial pattern background"
      />

      <div className="testimonial-image-wrapper">
        <img src={tanya} alt="" />
      </div>
      <div className="button-slider-wrapper">
        <button className="slider-button">
          <img src={prev} alt="" />
        </button>
        <button className="slider-button">
          <img src={next} alt="" />
        </button>
      </div>

      <div className="blockquote-wrapper">
        <img className="quotes-image" src={quotes} alt="quotes pattern" />
        <blockquote className="testimonial-quote">
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </blockquote>
      </div>

      <div className="testimonial-user-wrapper">
        <p className="user">Tanya Sinclair</p>
        <p className="user-job">UX Engineer</p>
      </div>
    </div>
  );
};

export default TestimonialComponent;
