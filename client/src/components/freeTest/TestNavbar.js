import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import "./TestNavbar.css";

const TestNavbar = ({ situationNo, testLength }) => {
  let time = Number(testLength);
  //console.log(time , "ne")
  return (
    <Navbar collapseOnSelect expand="lg" className="color-navbar">
      <Navbar.Brand href="/">
        <h3 className="free">WebWinners</h3>
      </Navbar.Brand>
      <Navbar.Brand>
        <Timer minutes={22} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Navbar>
          <Navbar.Brand>
            <h2 className="nav-position text-center mr-5">
              {situationNo} out of {testLength}
            </h2>
          </Navbar.Brand>
          <Navbar.Brand href="/results">
            <Button
              variant="light"
              style={{ color: "#b5e2f7", fontWeight: "bold" }}
            >
              End My Test
            </Button>
          </Navbar.Brand>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TestNavbar;
