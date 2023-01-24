import "./App.css";
import { Navbar } from "./components";
// import { Routes, Route } from "react-router-dom";

// import About from "./components/home/about/About";
// import Navbar from "./components/common/navbar/Navbar";
// import Skills from "./components/home/skills/Skills";
// import Projects from "./components/home/projects/Projects";
// import Contact from "./components/home/contact/Contact";
// import Footer from "./components/common/footer/Footer";
// import Header from "./components/home/header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navbar />
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
