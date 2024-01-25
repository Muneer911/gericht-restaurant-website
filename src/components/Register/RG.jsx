import React from "react";
import { useState } from "react";
import "./RG.css";
import {} from "react-router-dom";

function RG() {
  const [isContainerActive, setIsContainerActive] = useState();

  const signUpButton = () => {
    setIsContainerActive(false);
  };
  const signInButton = () => {
    setIsContainerActive(true);
  };

  return (
    <div className={`wrapper ${isContainerActive ? "active" : ""}`}>
      <div className="form signup">
        <header onClick={signUpButton} id="SU">
          Sign up
        </header>

        <form action="#">
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="NUMD">
            <input type="number" placeholder="Enter phone number" required />
            <input type="date" placeholder="Enter birth date" required />
          </div>

          <div class="gender-box">
            <h3>Gender</h3>
            <div class="gender-option">
              <div class="gender">
                <input type="radio" id="check-male" name="gender" checked />
                <label for="check-male">male</label>
              </div>
              <div class="gender">
                <input type="radio" id="check-female" name="gender" />
                <label for="check-female">Female</label>
              </div>
              <div class="gender">
                <input type="radio" id="check-other" name="gender" />
                <label for="check-other">prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label for="signupCheck">I accept all terms & conditions</label>
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="form login">
        <header onClick={signInButton} id="SU">
          Login
        </header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default RG;
