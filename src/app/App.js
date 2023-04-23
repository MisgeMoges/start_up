import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages

import Home from '../pages/Homepage'
import About from "../pages/About";
import Intern from "../pages/Intern";
import Order from "../pages/Order";
import Train from "../pages/Train";
import Contact from "../pages/Contact";

// import components
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="intern" element={<Intern />} />
        <Route path="order" element={<Order />} />
        <Route path="train" element={<Train />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
