import React from "react";
import {Container,Navbar,Nav} from 'react-bootstrap'
import {Link, Route, Routes} from 'react-router-dom'
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Navs = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Dashboard
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
};

export default Navs;
