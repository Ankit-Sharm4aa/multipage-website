import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import success_logo from "../../components/images/success.png";

function verif() {
  return (
    <>
      <Navbar />
      <div className="article">
        <h1>Please verify your email..</h1>
        <br />
        <img src={success_logo} alt="Image" className="mail-image" />
        <p className="content article-p">
          {" "}
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="email article-p">Email</p>
        <p className="article-p">
          {" "}
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <br />
        <p className="article-p">
          {" "}
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <a href="" className="article-link">
            resend the confirmation email.
          </a>{" "}
        </p>
        <br />
        <p className="article-p">
          Wrong email address?{" "}
          <a href="" className="article-link">
            Change it.
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default verif;
