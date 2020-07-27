import React from "react";
import ReactPlayer from "react-player";
import "./Tutorials.css";
import { Jumbotron, Col, Row } from "react-bootstrap";
import TutorialNavbar from "../tutorials/TutorialNavbar";

const Tutorials = () => {
  return (
    <>
      <TutorialNavbar />
      <Jumbotron className="tutorials">
        <Row className="cards-container">
          <Col xs={8} md={3} className="cards m-3 pl-5 pb-4">
            <h1>Driving At Night</h1>
            <ReactPlayer
              width="90%"
              height="90%"
              controls
              url="https://youtu.be/_qkuautHKlo"
            />
          </Col>
          <Col xs={8} md={3} className="cards m-3 pl-5 pb-4">
            <h1>Child Seat</h1>
            <ReactPlayer
              width="90%"
              height="90%"
              controls
              url="https://youtu.be/Sg5i9YInU64"
            />
          </Col>
          <Col xs={8} md={3} className="cards m-3 pl-5 pb-4">
            <h1>Parallel Parking</h1>
            <ReactPlayer
              width="90%"
              height="90%"
              controls
              url="https://youtu.be/https://youtu.be/l4LcfZeS4qw"
            />
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default Tutorials;
