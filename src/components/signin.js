import React,{useState}  from "react";
import Headers from "./header";
import {signin} from "../containers/signin";

const Signin = () => {
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
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error,success: false});
        } else {
          setValues({
            ...values,
            email: "",
            password: "",
            error: "",
            success: true
          });
          // authenticate(data, () => {
          //   setValues({
          //     ...values,
          //     didRedirect: true
          //   });
          // });
        }
      })
  };
  
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" type="email" onChange={handleChange("email")}
                value={email} />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control"  onChange={handleChange("password")}
                value={password} type="password" />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
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
            Login successfully. 
           
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
    <Headers title="Sign In page" description="A page for user to sign in!">
    {successMessage()}
    {errorMessage()}
      {signInForm()}
    </Headers>
  );
};

export default Signin;
