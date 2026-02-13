"use client";

import { useState } from "react";

import PortfolioLoader from "../components/PortfolioLoader";
import { Navigation } from "../components/Navigation";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <PortfolioLoader onComplete={() => setLoading(false)} />
      )}

      <div className={loading ? "hidden" : ""}>
        <Navigation />
         <Hero />
        <About />
         
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  );
}
