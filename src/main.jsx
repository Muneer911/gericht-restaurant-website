import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AboutUs, SpecialMenu, Laurels, Footer } from "./container/index.js";
import "./index.css";
import RG from "./components/Register/RG.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Register" element={<RG />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/menu" element={<SpecialMenu />}></Route>
        <Route path="/laurels" element={<Laurels />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
