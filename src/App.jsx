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
  return (
    <>
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
    </>
  );
}

export default App;
