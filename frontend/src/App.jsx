import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Projects from "./components/project";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
