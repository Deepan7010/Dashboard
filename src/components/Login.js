import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const handleSubmit = (e) => {
    if (validate()) {
      alert("Login successfully");
    } else {
      e.preventDefault();
    }
  };
  function validate() {
    let valid = true;
    if (email === "") {
      setEmailError("Please enter an email address.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setEmailError("Invalid Email Address");
      valid = false;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPassError("Please enter a password.");
      valid = false;
    } else {
      setPassError("");
    }
    return valid;
  };
  return (
    <Container className="mt-3 rounded">
      <form action="/dashboard" onSubmit={handleSubmit}>
        <Row>
          <Col sm="2" md="3" lg="3" />
          <Col sm="5" md="6">
            <FloatingLabel
              controlId="floating"
              label="Email address"
              className="mt-5"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
            <div className="error">{passError}</div>
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
  );
};

export default Login;
