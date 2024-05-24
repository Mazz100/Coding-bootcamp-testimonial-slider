import prev from "./images/icon-prev.svg";
import next from "./images/icon-next.svg";
import TestimonialSlider from "./TestimonialSlider";
import tanya from "./images/image-tanya.jpg";
import john from "./images/image-john.jpg";
import React, { useState } from "react";

const TestimonialCarousel = () => {
  const [items, setItems] = useState([
    {
      avatar: tanya,
      alt: "Portrait image of Tanya",
      quote:
        "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
      person: "Tanya Sinclair",
      personJob: "UX Engineer",
      label: "1 of 2",
    },

    {
      avatar: john,
      alt: "Portrait image of John",
      quote:
        " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      person: "John Tarkpor",
      personJob: "Junior Front-end Developer",
      label: "2 of 2",
    },
  ]);

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === items.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? items.length - 1 : slide - 1);
  };

  return (
    <div
      className="carousel-wrapper"
      role="region"
      aria-label="Testimonial Carousel"
    >
      <div className="button-controls">
        <button
          className="slider-button"
          aria-label="previous slide"
          rel="previous"
          onClick={prevSlide}
        >
          <img src={prev} alt="" />
        </button>
        <button
          className="slider-button"
          aria-label="next slide"
          rel="next"
          onClick={nextSlide}
        >
          <img src={next} alt="" />
        </button>
      </div>

      <TestimonialSlider items={items} slide={slide} setSlide={setSlide} />
    </div>
  );
};

export default TestimonialCarousel;
