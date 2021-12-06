import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Photos from "./components/photos";
import About from "./components/about";
import Home from "./components/home";
import NavbarCom from "./components/navbar";
import "./App.css";
const App = () => {
  return (
    <Router>
      <h1>hii</h1>
      <NavbarCom />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="album/:id" element={<Photos />} />
      </Routes>
    </Router>
  );
};

export default App;
