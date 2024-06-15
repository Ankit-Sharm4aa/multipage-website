import company_logo from "../images/dribbble-4.svg";
import no_job from "../images/no-job.jpg";
import user_pfp from "../images/user.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="" className="">
        <img src={company_logo} className="brand-logo" />
      </a>
      <div className="left-nav">
        <a href="" className="nav1">
          Inpiration
        </a>
        <a href="" className="nav1">
          Find Work
        </a>
        <a href="" className="nav1">
          Learn design
        </a>
        <a href="" className="nav1">
          Go Pro
        </a>
        <a href="" className="nav1">
          Hire Designers
        </a>
      </div>
      <div className="right-nav">
        <div className="searchbar nav2">
          <input type="text" className="search-input" placeholder="Search" />
        </div>
        <div className="nav2">
          <img src={no_job} className="icon" alt="" />
        </div>
        <div className="nav2">
          <img src={user_pfp} className="pfp" />
        </div>
        <button className="up nav2">Upload</button>
      </div>
    </div>
  );
}

export default Navbar;
