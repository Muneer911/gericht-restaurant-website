import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  AboutUs,
  SpecialMenu,
  Laurels,
  Footer,
  RG,
  Navbar,
  App,
  ForgetPassword,
} from "./container/index.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Register" element={<RG />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/menu" element={<SpecialMenu />}></Route>
        <Route path="/laurels" element={<Laurels />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
