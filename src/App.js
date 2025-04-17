import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Home from "./components/home.js";
import NavHeader from "./components/navheader.js";
import Project from "./components/projects.js";

//use react router for nav, use either framer motion or react spring, single or multi page
export default function App() {
  return (
    <BrowserRouter>
      <NavHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </NavHeader>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
