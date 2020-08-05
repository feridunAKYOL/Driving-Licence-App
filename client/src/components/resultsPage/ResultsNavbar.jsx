import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ResultsNavbar = () => {
  return (
    <Navbar bg="info" expand="lg" sticky="top" variant="dark">
      <Navbar.Brand href="#home" active>
        WebWinners
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/freetest">The Tests</Nav.Link>
          <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        </Nav>
        <Navbar.Brand href="/freetest">
          <Button
            variant="light"
            style={{ color: "#24b8bd", fontWeight: "bold" }}
          >
            Return The Test
          </Button>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ResultsNavbar;
