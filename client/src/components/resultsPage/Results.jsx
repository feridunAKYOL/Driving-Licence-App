import React, {useEffect, useState} from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResultsNavbar from "./ResultsNavbar";
import "./Results.css";

const Result = () => {

  const [results, setResults] = useState([]);
  const [fileNames, setFileNames] = useState([]);

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


      // Fetch file names
      const fetchFileNames = () => {
        return fetch(`/api/tests/filenames`)
          .then((res) => res.json())
          .then((data) => data);
      };

      fetchFileNames().then((data) => {
        setFileNames(data);
      });

  }, []);

  return (
    <>
      <ResultsNavbar />
      <Jumbotron fluid className="result-part">
        <Row className="picture-part">
          {fileNames.filter((obj) => 
           obj.testName === 'test-1'
          ).map((obj, id) => (
            <Col key={id} xs={5} md={3} lg={2} className="m-4 p-1" style={{ border: "groove 3px red", }} >
              <Row className="justify-content-center">{id + 1}</Row>
              <Row className="justify-content-center">
                <Link to="/oneResultPage">
                  <Image key={id} src={obj.fileRelativePath} height="180px" width="180px" className="p-2" />
                  {" "}
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
