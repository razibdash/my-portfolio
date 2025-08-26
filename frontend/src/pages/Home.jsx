import React from "react";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import CoreValues from "./CoreValue";
import BlogSection from "./Blogs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
      <CoreValues />
      <BlogSection />
    </div>
  );
};

export default Home;
