import React, { useState } from "react";
import "../signup.css";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
const Signup = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [cpassError, setCpassError] = useState("");
  const handleSubmit = (e) => {
    if (validate()) {
      alert("Signup successfully");
    } else {
      alert("Please fill all fields correctly");
      e.preventDefault();
    }
  };
  function validate() {
    let valid = true;
    if (name === "") {
      setNameError("Please enter a name.");
      valid = false;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Please enter an email address.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setEmailError("Invalid Email Address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (pass === "") {
      setPassError("Password cannot be empty.");
      valid = false;
    } else if (pass.length < 8) {
      setPassError("Password must contain at least 8 characters.");
      valid = false;
    } else {
      setPassError("");
    }

    if (cpass === "") {
      setCpassError("Password cannot be empty");
      valid = false;
    } else if (cpass !== pass) {
      setCpassError("Passwords do not match.");
      valid = false;
    } else {
      setCpassError("");
    }
    return valid
  }
  return (
    <>
      <Container className="mt-3 rounded">
        <form action="/login" onSubmit={handleSubmit}>
          <Row>
            <h1 className="text-center">Signup</h1>
            <Col sm="2" md="3" lg="3" />
            <Col sm="5" md="6">
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mt-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FloatingLabel>
              <div className="error">{nameError}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="2" md="3" lg="3" />
            <Col sm="5" md="6">
              <FloatingLabel
                controlId="floating"
                label="Email address"
                className="mt-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <div className="error">{emailError}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="2" md="3" lg="3" />
            <Col sm="5" md="6" className="mt-3">
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </FloatingLabel>
              <div className="error">{passError}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="2" md="3" lg="3" />
            <Col sm="5" md="6" className="mt-3">
              <FloatingLabel controlId="Pass" label="Confirm Password">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={cpass}
                  onChange={(e) => setCpass(e.target.value)}
                />
              </FloatingLabel>
              <div className="error">{cpassError}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="2" md="3" lg="5" />
            <Col sm="5" md="6">
              <button className="btn btn-primary mt-3 px-5 py-2">Submit</button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Signup;
