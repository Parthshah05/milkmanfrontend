import React  from "react";
import Headers from "./header";
//import { Link } from "react-router-dom";

const Signin = () => {
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" type="email" />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Headers title="Sign In page" description="A page for user to sign in!">
      {signInForm()}
    </Headers>
  );
};

export default Signin;
