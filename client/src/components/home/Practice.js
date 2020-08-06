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
      <Container fluid id="practice-part" className=" third-part mb-5">
        <Row className="justify-content-md-center" >
            <Col xs={12} className="practice-text-first">
              <h1>Take Free Test</h1>
            </Col>
            <Col xs={12} className = "text-center" >
              <div>AN EASY WAY TO STUDY BORING STUFF</div>
            </Col>
            <Col xs={{span:6 , offset:4}} >
                <Link to="/freetest">
                  <Image
                    src="/assets/free-online.jpeg"
                    roundedCircle
                    className="practice-pic"
                    width="30%"
                  />
                </Link>
              </Col>
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
