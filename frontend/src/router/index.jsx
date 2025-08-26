import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import BlogSection from "../pages/Blogs";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contacts";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/blog" element={<BlogSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
