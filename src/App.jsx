import "./App.css";
import TestimonialCarousel from "./TestimonialCarousel";

function App() {
  return (
    <>
      <main>
        <TestimonialCarousel />
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a
          className="footer-links"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="footer-links" href="https://github.com/Mazz100">
          Mazen Hassan
        </a>
        .
      </footer>
    </>
  );
}

export default App;
