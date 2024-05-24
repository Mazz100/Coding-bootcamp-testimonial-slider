import React, { useState } from "react";
import quotes from "./images/pattern-quotes.svg";
import bgPattern from "./images/pattern-bg.svg";

const TestimonialSlider = ({ items, slide }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          className={
            slide === index ? "testimonial-container" : "hidden-testimonial"
          }
          role="group"
          aria-roledescription="Slide"
          aria-label={item.label}
          key={index}
        >
          {/*Pattern background with absolute positioning*/}
          <img className="pattern-bg" src={bgPattern} alt="" />

          <div className="testimonial-image-wrapper">
            <img src={item.avatar} alt={item.alt} />
          </div>

          <figure className="figure-wrapper">
            <img className="quotes-image" src={quotes} alt="quotes pattern" />
            <blockquote className="testimonial-quote">{item.quote}</blockquote>
            <figcaption className="figcaption-wrapper">
              <p className="person">{item.person}</p>
              <p className="person-job">{item.personJob}</p>
            </figcaption>
          </figure>
        </div>
      ))}
    </>
  );
};

export default TestimonialSlider;
