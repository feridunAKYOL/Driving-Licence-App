import React, { useEffect, useState } from 'react';
import {Redirect} from "react-router-dom";

import { Image, Row, Col, Container, Button } from "react-bootstrap";
import "./OneResultPage.css" ;
import TestNavbar from "../freeTest/TestNavbar";

const OneResultPage = (props) => {
  const [situationNumber, setSituationNumber] = useState('');
  const [situation, setSituation] = useState([]);
  const [questions, setQuestions] = useState([]);
  //const [userAnswer, setUserAnswer] = useState([]);
  const [testLength, setTestLength] = useState(null);
  const [fileNames, setFileNames] = useState([]);
  const test_name = window.localStorage.getItem('testN');
  //let answer_in_storage = JSON.parse(window.localStorage.getItem('userAnswer'));
  window.localStorage.setItem("situation_Id", props.location.situation.situationNo);
  const const_situationNum = window.localStorage.getItem("situation_Id");
  

  useEffect(
    () => {

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
      })
    },
    [situationNumber]
  );

  return (
    <>
      <TestNavbar situationNo={situationNumber} testLength={testLength} />
      <Container className="free-test" align="center">
        <Row className="test-part">

          <Col xs={8} md={8}>
            {fileNames.filter((el) =>
              Number(el.situationNumber) === Number(situationNumber) && el.testName === test_name
            ).map((img) => (
              <Image
                src={img.fileRelativePath} //{situation_img.image}
                rounded
                className="image-situation  my-2"
                key={img.situationNumber}
              />
            ))}
          </Col>
        </Row>
        <Col>
          <Row className="situation ">
            {situation.map((text, id) => (
              <h3 key={id}>{text.situation}</h3>
            ))}
          </Row>

          {questions.map((question, id) => (
            <Row key={question.questionId} xs={7}  >
              <Col
                className="questions"
                key={question.questionId}
              >
                <div>
                  <div >
                <h4 key={question.questionId}>{question.text}</h4>
                  </div>
                  <div className = "feedbackQuestion">
                    <p> {question.explanation === null ? `${question.answer}` : `${question.answer} ---> ${question.explanation}`} </p>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Container>
    </>
  );
};

export default OneResultPage;
