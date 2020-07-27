import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ResultNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Navbar.Brand>
        <h3 style={{ color: "blue" }}>Free Test Results</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar className="mr-auto">
          <Navbar.Brand>
            <h4 className="mx-5">Web Winners</h4>
          </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Navbar.Brand href="/">
            <h3 className="mx-5">Home</h3>
          </Navbar.Brand>
          <Navbar.Brand href="/freetest">
            <Button variant="light">Exit and Go To The Test</Button>{" "}
          </Navbar.Brand>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ResultNavbar;
