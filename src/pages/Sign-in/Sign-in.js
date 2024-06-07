import React from "react";
import "./Sign-in.css";
import company_logo from "../../components/images/dribbble-4.svg";
import art from "../../components/images/mona-eendra-vC8wj_Kphak-unsplash.jpg";
import Signup from "../../components/Sign-up/Sign-up";

function Signin() {
  return (
    <>
      <div className="Login">
        <p>
          Already a member?
          <a href="" className="Login1">
            Sign In
          </a>
        </p>
      </div>
      <div className="container">
        <div className="half left">
          <div className="dribbble">
            <a href="Signin.html">
              <img src={company_logo} alt="dribbble" className="logo" />
            </a>
          </div>
          <h1 className="left-heading">
            Discover the world's top Designers &amp; Creatives.
          </h1>
          <img src={art} alt="Image" className="image" />
        </div>
        <Signup />
      </div>
    </>
  );
}

export default Signin;
