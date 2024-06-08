import React from "react";
import "./components-style/footer.css";
import ball from "./images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="container-left">
          <p className="footer-heading">Dribbble</p>
          <p className="context">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired
          </p>
          <div className="logos">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="container-right">
          <div className="Designer">
            <p className="footer-heading">For Designers</p>
            <ol>
              <li>
                <a href="" className="footer-link">
                  Go Pro!
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Explore design work
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Design blog
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Overtime podcast
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Playoffs
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Weekly Warm-Up
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Code of Conduct
                </a>
              </li>
            </ol>
          </div>
          <div className="Hire">
            <p className="footer-heading">Hire Designers</p>
            <ol>
              <li>
                <a href="" className="footer-link">
                  Post a job opening
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Post a freelance project
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Search for Designers
                </a>
              </li>
            </ol>
          </div>
          <div className="Brand">
            <p className="footer-heading">Brands</p>
            <ol>
              <li>
                <a href="" className="footer-link">
                  Adevertise with us{" "}
                </a>
              </li>
            </ol>
          </div>
          <div className="Company">
            <p className="footer-heading">Company</p>
            <ol>
              <li>
                <a href="" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Support
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Media kit
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  API
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Cookie policy
                </a>
              </li>
            </ol>
          </div>
          <div className="Directories">
            <p className="footer-heading">Directories</p>
            <ol>
              <li>
                <a href="" className="footer-link">
                  Design jobs
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Designer for hire
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Freelance designers for hire
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Tags
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Places
                </a>
              </li>
            </ol>
          </div>
          <div className="Assets">
            <p className="footer-heading">Design Assets</p>
            <ol>
              <li>
                <a href="" className="footer-link">
                  Dribble Marketplace
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Creative Market
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Fontspring
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Font Squirrel
                </a>
              </li>
            </ol>
          </div>
          <div className="Resources">
            <p className="footer-heading">Design Resources</p>
            <ol>
              <li>
                <a href="" className="footer-link">
                  Freelancing
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Design Hiring
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Design Portfolio
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Design Education
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Creative Process
                </a>
              </li>
              <li>
                <a href="" className="footer-link">
                  Design Industry Trends
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <p className="copyright">© 2023 Dribbble. All rights reserved.</p>
        </div>
        <div>
          <p className="bottom-dribbble">
            <strong className="">20,501,853</strong> shots dribbbled{" "}
            <img src={ball} className="ico" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
