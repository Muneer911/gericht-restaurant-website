import React, { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Menu", to: "/menu" },
    { title: "Award", to: "/laurels" },
  ];
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={images.gericht} alt="app logo" />
        </Link>
      </div>
      {navbarLinks.map((ob) => {
        return (
          <div key={ob.title}>
            <ul className="app__navbar-links">
              <li className="p__opensans">
                <Link to={ob.to}>{ob.title}</Link>
              </li>
            </ul>
          </div>
        );
      })}
      <div className="app__navbar-login">
        <Link to="/Register ">Log In / Register</Link>
        <div />
        <Link to="/Register ">Book table</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontsize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div
            className="app__navbar-smallscreen_overlay flex__center slide-bottom"
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            {navbarLinks.map((ob) => {
              return (
                <div key={ob.title}>
                  <ul className="app__navbar-smallscreen_links">
                    <li className="p__opensans">
                      <Link to={ob.to}>{ob.title}</Link>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
