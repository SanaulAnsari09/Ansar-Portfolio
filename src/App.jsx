import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import YouTube from "./components/sections/YouTube";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isScrolled={isScrolled}
      />
      
      <Hero setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <YouTube setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      
      <Footer />
    </div>
  );
};

export default App;