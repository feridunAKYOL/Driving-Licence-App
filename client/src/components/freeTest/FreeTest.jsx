import React, { useEffect, useState } from "react";
import { Image, Row, Col, Container, Button } from "react-bootstrap";
import "./FreeTest.css";
import TestNavbar from "./TestNavbar";

const FreeTest = (props) => {
  const [situationNumber, setSituationNumber] = useState(1);
  const [situation, setSituation] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [testLength, setTestLength] = useState(null);
  const [fileNames, setFileNames] = useState([]);
  const [test, setTest] = useState(window.localStorage.getItem('testN'));

  const getAnswer = (idx, answerNo) => {
    if (typeof Storage !== "undefined") {
      //Code for localStorage/sessionStorage.
      if (localStorage.userAnswer) {
        let answer_in_storage = JSON.parse(
          window.localStorage.getItem("userAnswer")
        );
        setUserAnswer(answer_in_storage);
        let isAnswered_before = userAnswer.filter(
          (el) => el.questionId === idx
        );
        if (isAnswered_before.length === 0) {
          let usr_answer = userAnswer.slice();
          usr_answer.push({
            questionId: idx,
            answer: answerNo,
            situationId: situationNumber,
          });
          let aa = usr_answer;
          setUserAnswer(aa);
          window.localStorage.setItem("userAnswer", JSON.stringify(userAnswer));
        } else {
          let usr_answer = userAnswer.slice();
          let changedAnswer = usr_answer.filter((el) => el.questionId !== idx);
          changedAnswer.push({
            questionId: idx,
            answer: answerNo,
            situationId: situationNumber,
          });
          setUserAnswer(changedAnswer);
          window.localStorage.setItem("userAnswer", JSON.stringify(userAnswer));
        }
        console.log(userAnswer);
      } else {
        localStorage.userAnswer = JSON.stringify([
          { questionId: idx, answer: answerNo, situationId: situationNumber },
        ]);
      }
    } else {
      //Sorry! No Web Storage support..
      alert("Sorry! No Web Storage support..");
    }
  };

  const goToNext = () =>
    situationNumber < testLength
      ? setSituationNumber(situationNumber + 1)
      : situationNumber;

  useEffect(() => {
    const fetchSituation = () => {
      return fetch(`/api/tests/'equipment'/${situationNumber}`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchSituation());
    fetchSituation().then((gettingData) => {
      setSituation(gettingData);
    });

<<<<<<< Updated upstream
  useEffect(
    () => {

      const fetchSituation = () => {
        return fetch(`/api/tests/'${test}'/${situationNumber}`)
          .then((res) => res.json())
          .then((data) => data);
      };
      //console.log(fetchSituation());
      fetchSituation().then((gettingData) => {
        setSituation(gettingData);
      });

      const fetchQuestion = () => {
        return fetch(`/api/tests/question/'${test}'/${situationNumber}`)
          .then((res) => res.json())
          .then((data) => data);
      };
      //console.log(fetchQuestion());
      fetchQuestion().then((gettingQuestion) => {
        setQuestions(gettingQuestion);
      });
      // Total situation count
      const fetchSituationCount = () => {
        return fetch(`/api/tests/'${test}'`)
          .then((res) => res.json())
          .then((data) => data);
      };
      //console.log(fetchQuestion());
      fetchSituationCount().then((gettingTotal) => {
        let count = gettingTotal.length;
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
    []
  );
=======
    const fetchQuestion = () => {
      return fetch(`/api/tests/question/'equipment'/${situationNumber}`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchQuestion());
    fetchQuestion().then((gettingQuestion) => {
      setQuestions(gettingQuestion);
    });
    // Total situation count
    const fetchSituationCount = () => {
      return fetch(`/api/tests/'equipment'`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchQuestion());
    fetchSituationCount().then((gettingTotal) => {
      let count = gettingTotal.length;
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
>>>>>>> Stashed changes

  return (
    <>
      <TestNavbar situationNo={situationNumber} testLength={testLength} />
      <Container className="free-test" align="center">
<<<<<<< Updated upstream
        <Row className="test-part">
          <Col xs={8} md={9}>
            {fileNames.filter((el) =>
              Number(el.situationNumber) === Number(situationNumber) && el.testName === test
            ).map((img) => (
=======
        {fileNames
          .filter(
            (el) =>
              Number(el.situationNumber) === Number(situationNumber) &&
              el.testName === "test-1"
          )
          .map((img) => (
            <Row className="test-part">
>>>>>>> Stashed changes
              <Image
                src={img.fileRelativePath} //{situation_img.image}
                rounded
                className="image-situation  mb-2"
                key={img.situationNumber}
              />
            </Row>
          ))}
        <Row className="situation">
          {situation.map((text, id) => (
            <h3 key={id}>{text.situation}</h3>
          ))}
        </Row>
        <Row>
          <Col xs={{ span: 9, offset: 1 }}>
            {questions.map((question, id) => (
              <Row className="question-part" key={question.questionId}>
                <Col xs={8} className="questions" key={question.questionId}>
                  <p key={question.questionId} className="questions-text">
                    {question.text}
                  </p>
                </Col>

                <Col xs={1} className="form-check form-check-inline check-box">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={id}
                    id={`inlineRadio${question.questionId}`}
                    value="option1"
                    onChange={() => getAnswer(question.questionId, 1)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Yes
                  </label>
                </Col>
                <Col xs={1} className="form-check form-check-inline check-box">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={id}
                    id={`inlineRadio${question.questionId + 1}`}
                    value="option2"
                    onChange={() => getAnswer(question.questionId, 2)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    No
                  </label>
                </Col>
              </Row>
            ))}
          </Col>
          <Col xs={{ span: 2, offset: 0 }} className="next ">
            <Image src="/assets/nextt.png" onClick={() => goToNext()}></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FreeTest;
