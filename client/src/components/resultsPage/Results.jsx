import React, {useEffect, useState} from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResultNavbar from "./ResultsNavbar";
import "./Results.css";

const Result = () => {
  let imageArray = [
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
  ];

  const [results, setResults] = useState([]);
  const userAnswer = JSON.parse(window.localStorage.getItem('userAnswer'));

  //console.log(userAnswer);
  useEffect(() => {
    const request_result = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "userAnswer": userAnswer })
    };
    const fetchResult = () => {
      return fetch("/api/tests/result/'equipment'", request_result)
        .then((response) => response.json())
        .then((data) => data);
    };
    console.log(fetchResult());
    fetchResult().then((el) => {
      setResults(el);
      console.log(results);
      console.log(userAnswer);
    });
  }, []);

  return (
    <>
      <ResultNavbar />
      <Jumbotron fluid className="result-part">
        <Row className="picture-part">
          {imageArray.map((image, id) => (
            <Col
              key={id}
              xs={5}
              md={3}
              lg={2}
              className="m-4 p-1"
              style={{
                border: "groove 3px red",
              }}
              // style={{ border: isCorrect ? "groove 3px green" : "groove 3px red" }}
            >
              <Row className="justify-content-center">{id + 1}</Row>
              <Row className="justify-content-center">
                <Link to="/oneResultPage">
                  <Image
                    key={id}
                    src={image}
                    height="180px"
                    width="180px"
                    className="p-2"
                  />{" "}
                </Link>
              </Row>
              <Row className="justify-content-center">False</Row>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    </>
  );
};

export default Result;
