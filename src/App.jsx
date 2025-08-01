/**
 * Modules
 */

import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 *
 * Components
 *
 */
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Predirection from "./Components/Predirection";
import Review from "./Components/Review";
import Skill from "./Components/Skill";
import Work from "./Components/Work";

function App() {
  /**
   * GSAP ANIMATE
   */

  useGSAP(() => {
    const elements = gsap.utils.toArray(".up-reveal");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Predirection />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
