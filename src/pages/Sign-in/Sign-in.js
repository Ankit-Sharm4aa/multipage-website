import React from "react";
import "./Sign-in.css";
import company_logo from "../../components/images/dribbble-4.svg";
import art from "../../components/images/mona-eendra-vC8wj_Kphak-unsplash.jpg";

function Signin() {
  return (
    <>
      <div className="Login">
        <p>
          Already a member?
          <a href="" className="Login1">
            {" "}
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
        <div className="half right">
          <div className="inner">
            <h1 className="right-heading">Sign up to Dribbble</h1>
            <form action="#" method="POST" className="form">
              <div className="name">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required=""
                  className="name1"
                />
                <br />
                <br />
              </div>
              <div className="username">
                <label htmlFor="username">Username</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  required=""
                  className="user"
                />
                <br />
                <br />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required=""
                  className="email1"
                />
                <br />
                <br />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  required=""
                  className="pass"
                />
                <br />
                <br />
              </div>
              <div className="checkbox">
                <input type="checkbox" name="checkbox" />{" "}
                <label htmlFor="checkbox">
                  Creating an account means you're okay with our{" "}
                  <a href="">Terms of Service, Privacy Policy,</a> and our
                  default <a href="">Notification Settings.</a>
                </label>
                <br />
                <br />
              </div>
              <div className="submit">
                <a href="C:\Users\ankit\OneDrive\Desktop\Assignment\Profilepic\Profilepic.html">
                  <button className="btn">Create Account</button>
                </a>
                <br />
                <br />
              </div>
              <div className="context">
                <label>
                  This site is protected by reCaptcha and the Google{" "}
                  <a href="">Privacy Policy</a> and <a>Terms of Service</a>{" "}
                  apply.{" "}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
