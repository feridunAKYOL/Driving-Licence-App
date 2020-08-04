import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#212f3c",
      }}
      expand="lg"
      fixed="top"
      variant="dark"
      className="mb-5"
    >
      <Navbar.Brand href="/" active>
        WebWinners
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/tests">Take Tests</Nav.Link>
          <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="User Name"
            className="mr-sm-2"
          />
          <FormControl type="text" placeholder="Password" className="mr-sm-2" />
          <Button variant="secondary">Log In</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
