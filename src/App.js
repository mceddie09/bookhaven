import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import CustomPage from "./Components/CustomPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/custom" element={<CustomPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
