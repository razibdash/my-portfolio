import "./App.css";
import Banner from "./components/banner";
import CoreValues from "./components/coreValue";
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
      <CoreValues />
      <Footer />
    </>
  );
}

export default App;
