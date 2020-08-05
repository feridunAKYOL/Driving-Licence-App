import React, { useEffect, useState } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import "./OneResultPage.css";
import OneResultPageNavbar from "./OneResultPageNavbar";

const OneResultPage = (props) => {
  const [situationNumber, setSituationNumber] = useState("");
  const [situation, setSituation] = useState([]);
  const [questions, setQuestions] = useState([]);
  //const [userAnswer, setUserAnswer] = useState([]);
  const [testLength, setTestLength] = useState(null);
  const [fileNames, setFileNames] = useState([]);
  const test_name = window.localStorage.getItem("testN");
  //let answer_in_storage = JSON.parse(window.localStorage.getItem('userAnswer'));
  window.localStorage.setItem(
    "situation_Id",
    props.location.situation.situationNo
  );
  const const_situationNum = window.localStorage.getItem("situation_Id");

  useEffect(() => {
    const fetchSituation = () => {
      return fetch(`/api/tests/'${test_name}'/${const_situationNum}`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchSituation());
    fetchSituation().then((gettingData) => {
      setSituation(gettingData);
      setSituationNumber(const_situationNum);
    });

    const fetchQuestion = () => {
      return fetch(`/api/tests/question/'${test_name}'/${const_situationNum}`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchQuestion());
    fetchQuestion().then((gettingQuestion) => {
      setQuestions(gettingQuestion);
    });
    // Total situation count
    const fetchSituationCount = () => {
      return fetch(`/api/tests/'${test_name}'`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchQuestion());
    fetchSituationCount().then((gettingTotal) => {
      let count = gettingTotal.rows.length;
      setTestLength(count);
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
  }, [situationNumber]);

  return (
    <>
      <OneResultPageNavbar
        situationNo={situationNumber}
        testLength={testLength}
      />
      <Container className="free-test" align="center">
        <Row className="test-part">
          <Col xs={8} md={9}>
            {fileNames
              .filter(
                (el) =>
                  Number(el.situationNumber) === Number(situationNumber) &&
                  el.testName === test_name
              )
              .map((img) => (
                <Row className="test-part">
                  <Image
                    src={img.fileRelativePath} //{situation_img.image}
                    rounded
                    className="image-situation  mb-2"
                    key={img.situationNumber}
                  />
                </Row>
              ))}
          </Col>
        </Row>
        <Row className="situation ">
          {situation.map((text, id) => (
            <h3 key={id}>{text.situation}</h3>
          ))}
        </Row>
        <Row>
          <Col xs={5} md={{ span: 9, offset: 1 }}>
            {questions.map((question, id) => (
              <Row className="question-part" key={question.questionId} xs={7}>
                <Col
                  xs={5}
                  md={8}
                  className="questions"
                  key={question.questionId}
                >
                  <div>
                    <div>
                      <h4 key={question.questionId}>{question.text}</h4>
                    </div>
                    <div className="feedbackQuestion">
                      <p>
                        {" "}
                        {question.explanation === null
                          ? `${question.answer}`
                          : `${question.answer} ---> ${question.explanation}`}{" "}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OneResultPage;
