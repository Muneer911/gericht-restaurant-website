import React from "react";
import "./forgetPassword.css";
function ForgetPassword() {
  return (
    <div className="fContainer">
      <form action="">
        <h2>Reset you password</h2>
        <input required type="email" placeholder="Enter you email" />
        <button type="submit">Send reset email</button>
      </form>
    </div>
  );
}
export default ForgetPassword;
