import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
