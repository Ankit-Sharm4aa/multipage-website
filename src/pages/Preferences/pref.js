import React from "react";
import "./pref.css";
import company_logo from "../../components/images/dribbble-4.svg";
import green_tick from "../../components/images/Paomedia-Small-N-Flat-Sign-check.1024.png";
import { Link } from "react-router-dom";

function Pref() {
  return (
    <>
      <div className="logo-btn">
        <a href="" className="logo">
          <img src={company_logo} alt="Dribble" className="logo-img" />
        </a>
        <button className="button">&lt;</button>
      </div>
      <div className="container-pref">
        <div className="heading">
          <h1>What brings you to Dribbble?</h1>
          <p className="context">
            Select the options that best describes you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="content-pref">
          <div className="el1">
            <img src={green_tick} className="im1" alt="Image" />
            <br />
            <p className="desc">I'm a designer looking to share my work</p>
            <input type="radio" className="box" />
          </div>
          <div className="el2">
            <img src={green_tick} className="im2" alt="Image" />
            <br />
            <p className="desc">I'm looking to hire a designer</p>
            <input type="radio" className="box" />
          </div>
          <div className="el3">
            <img src={green_tick} className="im3" alt="Image" />
            <br />
            <p className="desc"> I'm looking for design inspiration</p>
            <input type="radio" className="box" />
          </div>
        </div>
        <div className="fin">
          <button className="finish">
            <Link to="/Signin/Registration/Verification" className="link">
              Finish
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pref;
