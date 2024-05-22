import React from "react";
import prev from "./images/icon-prev.svg";
import next from "./images/icon-next.svg";

const TestimonialCarousel = () => {
  return (
    <div
      className="button-slider-wrapper"
      role="region"
      aria-roledescription="Carousel"
      aria-label="testimonial slider"
    >
      <button className="slider-button">
        <img src={prev} alt="" aria-label="previous slide" rel="previous" />
      </button>
      <button className="slider-button">
        <img src={next} alt="" aria-label="next slide" rel="next" />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
