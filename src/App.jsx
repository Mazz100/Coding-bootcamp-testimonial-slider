import "./App.css";
import TestimonialComponent from "./TestimonialComponent";
import patternCurve from "./images/pattern-curve.svg";

function App() {
  return (
    <>
      <main>
        <TestimonialComponent />
      </main>

      <footer>
        {/*Pattern curve with absolute positioning*/}
        <img
          className="pattern-curve"
          src={patternCurve}
          alt="testimonial pattern curve"
        />
      </footer>
    </>
  );
}

export default App;
