<<<<<<< HEAD
import React from "react";
import Base from "./base";
//import { Link } from "react-router-dom";
=======
import React,{useState} from "react";
import Headers from "../components/header";
import { Link } from "react-router-dom";
import { signup } from "../containers/signup";
>>>>>>> 1fbee09ed9fee4043313612e013d11bca5633cae

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { email, password, error, success } = values;

  const handleChange = email => event => {
    setValues({ ...values, error: false, [email]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            {/* <div className="form-group">
              <label className="text-light">Name</label>
              <input className="form-control" type="text" />
            </div> */}
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control"  onChange={handleChange("email")}
                 type="email"  value={email} />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control"   onChange={handleChange("password")}  value={password} type="password" />
            </div>
            <button  onClick={onSubmit}  className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
<<<<<<< HEAD
    <Base title="Sign Up page" description="A page for user to sign up!">
      {signUpForm()}
    </Base>
=======
    <Headers title="Sign Up page" description="A page for user to sign up!">
     {successMessage()}
      {errorMessage()}
    {signUpForm()}
    
  </Headers>
>>>>>>> 1fbee09ed9fee4043313612e013d11bca5633cae
  );
};

export default Signup;
