import React from "react";
import "./profile-reg.css";
import company_logo from "../../components/images/dribbble-4.svg";
import camera_icon from "../../components/images/cameraicon.jpg";

function ProfileReg() {
  return (
    <>
      <a href="" className="dribbble">
        <img src={company_logo} className="logo" />
      </a>
      <div className="article">
        <h1 className="heading">Welcome! Let's create your profile</h1>
        <p className="text">
          Let others get to know you better! You can do these later
        </p>
        <form>
          <h3>Add an avatar</h3>
          <div className="img">
            <img src={camera_icon} alt="image" className="icon" />
            <div className="options">
              <div>
                <button className="img1">Choose image</button>
              </div>
              <div>
                <a href="" className="text">
                  {" "}
                  &gt; Or choose one of our defaults
                </a>
              </div>
            </div>
          </div>
          <div className="location">
            <label htmlFor="loc">
              <h3>Add your location</h3>
            </label>
            <input
              type="text"
              name="loc"
              id="loc"
              placeholder="Enter a location"
              className="loca"
            />
            <br />
            <br />
            <a href="C:\Users\ankit\OneDrive\Desktop\Assignment\Data\Data.html">
              <button className="next">Next</button>
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileReg;
