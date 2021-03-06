import React, { useState } from "react";
import Header from "../Core/header";
import { Link } from "react-router-dom";
import { signup } from "../../containers/Register/signup";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, password, error, success } = values;

  const handleChange = (email) => (event) => {
    setValues({ ...values, error: false, [email]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <Card style={{ marginTop: "50px" }}>
              <CardHeader
                style={{
                  textAlign: "center",
                  color: "#BC1A4B",
                  background: "#1ABC9C",
                }}
              >
                <h5>Please Register here</h5>
              </CardHeader>
              {successMessage()}
              {errorMessage()}
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter your email"
                      onChange={handleChange("email")}
                      value={email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Enter your password"
                      onChange={handleChange("password")}
                      value={password}
                    />
                  </FormGroup>
                  <Button
                    onClick={onSubmit}
                    style={{
                      background: "#1ABC9C",
                      color: "#BC1A4B",
                      borderColor: "#1ABC9C",
                    }}
                  >
                    <b>Register</b>
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none", marginTop: "10px" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
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
            style={{ display: error ? "" : "none", marginTop: "10px" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      {signUpForm()}
    </div>
  );
};

export default Signup;
