import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RG from './components/Register/RG.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Register" element={<RG/>}>

        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
