import React from "react";
import "./App.css";
import {
  AboutUs,
  Chef,
  FindUs,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
    </div>
  );
}

export default App;
