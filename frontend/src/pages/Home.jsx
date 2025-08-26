import React from "react";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import CoreValues from "./CoreValue";
import BlogSection from "./Blogs";
import Curriculum from "./AcademicCarriculam";
import MissionVision from "./MissionVision";

const Home = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
      <CoreValues />
      <BlogSection />
      <Curriculum />
      <MissionVision />
    </div>
  );
};

export default Home;
