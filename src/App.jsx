import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particle from "./components/Particle";
import Skills from "./components/Skills"
import Experience from "./components/Experience";
import Language from "./components/Language";
import Project from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Language />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
