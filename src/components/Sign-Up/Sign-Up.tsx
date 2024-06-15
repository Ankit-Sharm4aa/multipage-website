import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="half right">
      <div className="inner">
        <h1 className="right-heading">Sign up to Dribbble</h1>
        <form action="#" method="POST" className="form">
          <div className="name">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" name="name" className="name1" />
            <br />
            <br />
          </div>
          <div className="username">
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" name="username" className="user" />
            <br />
            <br />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="email" className="email1" />
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
              className="pass"
            />
            <br />
            <br />
          </div>
          <div className="checkbox">
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">
              Creating an account means you're okay with our
              <a href=""> Terms of Service, Privacy Policy,</a> and our default{" "}
              <a href="">Notification Settings.</a>
            </label>
            <br />
            <br />
          </div>
          <div className="submit">
            <Link to="/Signup/Registration">
              <button className="btn">Create Account</button>
            </Link>
            <br />
            <br />
          </div>
          <div className="context-signin">
            <label>
              This site is protected by reCaptcha and Google's
              <a href=""> Privacy Policy</a> and{" "}
              <a href="">Terms of Service </a>
              apply.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
