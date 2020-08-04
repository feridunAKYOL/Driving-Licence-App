
import React, { useEffect, useState } from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import TestsNavbar from "./TestsNavbar";
import "./Tests.css";

const Result = () => {

  const [results, setResults] = useState([]);
  const [fileNames] = useState([
    "/asset/equipment/2011_06_24_10_09_41IMG_4748.jpeg",
    "/asset/tests/test-1/1/2012_10_09_01_00_16IMG_3017.jpeg",
    "/asset/tests/test-2/1/2015_01_27_03_26_0820141205_123346.jpg"

  ]);

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
    console.log(fetchResult(), 1);
    fetchResult().then((el) => {
      setResults(el);
    });

  }, []);
  return (
    <>
      <TestsNavbar />
      <Jumbotron fluid className="result-part">
        <Row className="picture-part">
          {fileNames.filter((obj) =>
            obj.testName === 'test-1'
          )
            .sort((a, b) => Number(a.situationNumber) - Number(b.situationNumber))
            .map((obj, id) => (
              results.filter(el => Number(el.situationNumber) === Number(obj.situationNumber))
                .map(a => (
                  <Col key={id} xs={5} md={3} lg={2} className="m-4 p-1"
                    style={a.result ? { border: "groove 3px green" } : { border: "groove 3px red" }}
                  >
                    <Row className="justify-content-center">{obj.situationNumber}</Row>
                    <Row className="justify-content-center">
                      <Link to={{
                        pathname: '/oneResultPage',
                        situation: {
                          situationNo: `${obj.situationNumber}`
                        }
                      }}  >
                        <Image key={id} src={obj.fileRelativePath} height="180px" width="180px" className="p-2" />
                        {" "}
                      </Link>
                    </Row>
                    <Row className="justify-content-center">
                      <p> {a.result ? "True" : "False"} </p>
                    </Row>
                  </Col>
                ))))}
        </Row>
      </Jumbotron>
    </>

  );
};

export default Result;
