import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
// import { Routes, Route } from "react-router-dom";

// import About from "./components/home/about/About";
// import Navbar from "./components/common/navbar/Navbar";
// import Skills from "./components/home/skills/Skills";
// import Projects from "./components/home/projects/Projects";
// import Contact from "./components/home/contact/Contact";
// import Footer from "./components/common/footer/Footer";
// import Header from "./components/home/header/Header";
import GlobalStyle from "./globalStyles";
import Home from "./HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
