import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { createElement, useState } from "react";

import images from "../../constants/images";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={images.gericht} alt="app logo" />
        </Link>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#award">Award</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <Link to="/Register " className="p__opensans">
          <a href="">Log In / Register</a>
        </Link>

        <div />
        <Link to="/Register " className="p__opensans">
          <a href=""> Book table</a>
        </Link>
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
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#award">Award</a>
              </li>

              <li className="p__opensans">
                <Link to="/Register">Log In / register</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
