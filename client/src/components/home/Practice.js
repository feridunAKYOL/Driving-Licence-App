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
      <Container fluid className="third-part mt-5">
        <Row>
          <Col xs={12} md={5}>
            <Row>
              <h1 className="practice-text m-5">Take Free Test</h1>
            </Row>
            <Row className="practice-text">
              <Link to="/freetest">
                <Image
                  src="/assets/free-online.jpeg"
                  roundedCircle
                  className="practice-pic"
                />
              </Link>
            </Row>
            <Row>
              <h5 className="practice-text m-3">
                AN EASY WAY TO STUDY BORING STUFF
              </h5>
            </Row>
          </Col>

          {/* Our page video will be put.
            <Col className=" m-5" xs={12} md={5}>
              <VideoWatch />
            </Col> */}
          <Col className="mt-5">
            <h1>Contact with Us</h1>
            <Row className="parts">
              <Col xs={10} md={4}>
                <Row>
                  <i className="fas fa-home"></i>
                  <h2>Mailing Address</h2>
                </Row>
                <Row>
                  <p>
                    WebWinners Driving School
                    <br />
                    Boulevard Théo Lambert 75,
                    <br />
                    1070 Anderlecht
                  </p>
                </Row>
              </Col>

              <Col xs={10} md={4}>
                <Row>
                  <i className="fas fa-comment"></i>
                  <h2>Social</h2>
                </Row>
                <Row>
                  <p>
                    <a href="/">linkedin.com/webwinners</a>
                    <br />
                    <a href="/">facebook.com/webwinners</a>
                  </p>
                </Row>
              </Col>
            </Row>

            <Row className="parts">
              <Col xs={10} md={4}>
                <Row>
                  <i className="fas fa-envelope"></i>
                  <h2>Email</h2>
                </Row>
                <Row>
                  <p>
                    <a href="/">info@webwinners.be</a>
                  </p>
                </Row>
              </Col>
              <Col xs={10} md={4}>
                <Row>
                  <i className="fas fa-phone"></i>
                  <h2>Phone</h2>
                </Row>
                <Row>
                  <p>(032) 123-0000</p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Practice;
