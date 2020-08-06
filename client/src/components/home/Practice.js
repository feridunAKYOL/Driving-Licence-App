import React from "react";
import "./Practice.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid id ="practice-part" className="third-part mt-5">
        <Row>
          <Row>
            <Col className="practice-text-first">
              <h1>Take Free Test</h1>
            </Col>
          </Row>

          <Row>
            <Col className="practice-text-second">
              <h5>AN EASY WAY TO STUDY BORING STUFF</h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <Link to="/freetest">
                <Image
                  src="/assets/free-online.jpeg"
                  roundedCircle
                  className="practice-pic"
                  width="70%"
                />
              </Link>
            </Col>
          </Row>
          {/* Our page video will be put.
            <Col className=" m-5" xs={12} md={5}>
              <VideoWatch />
            </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Practice;
