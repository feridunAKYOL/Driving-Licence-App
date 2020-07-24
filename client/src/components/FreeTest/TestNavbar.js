import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";

const TestNavbar = () => {
  return (
    <Navbar className="test-navbar">
      <Navbar.Brand>WebWinners</Navbar.Brand>
      <Navbar.Brand>Free Test</Navbar.Brand>
      <Navbar.Brand>1 out of 10</Navbar.Brand>
      <Navbar.Brand className="justify-content-end">
        <Timer />
      </Navbar.Brand>
    </Navbar>
  );
};

export default TestNavbar;
