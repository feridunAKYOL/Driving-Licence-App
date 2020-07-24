import React from "react";
import { Image, Form, Row, Col } from "react-bootstrap";
import "./FreeTest.css";
import TestNavbar from "./TestNavbar";

const question = {
  totalNumber: 10,
  image: "/assets/drivingTestTips.jpg",
  situation:
    "You are driving at 80 km/h, outside a built-up area. The lorry, in front of you, is driving 70km/h. There is a free rear view. What will you do?",
  question1: "I speed up to 90 km/h and overtake the lorry, straight away?",
  question2:
    "I continue at the same speed of 80 km/h and overtake the lorry, straight away?",
  question3: "I slow down and wait a bit to overtake the lorry?",
  question4: "I stop?",
};

const FreeTest = () => {
  // const initialState = {
  //   questions,
  //   currentQuestion: 0,
  //   currentAnswer: "",
  //   answers: [],
  //   showResults: false,
  //   error: "",
  // };

  // const [state, dispatch] = useReducer(quizReducer, initialState);
  // const { currentQuestion, currentAnswer, answers, showResults, error } = state;

  // const question = questions[currentQuestion];

  // const renderError = () => {
  //   if (!error) {
  //     return;
  //   }

  //   return <div className="error">{error}</div>;
  // };
  // const restart = () => {
  //   dispatch({ type: RESET_QUIZ });
  // };

  // const next = () => {
  //   const answer = { questionId: question.id, answer: currentAnswer };

  //   if (!currentAnswer) {
  //     dispatch({ type: SET_ERROR, error: "Please select an option" });
  //     return;
  //   }

  //   answers.push(answer);
  //   dispatch({ type: SET_ANSWERS, answers });
  //   dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });

  //   if (currentQuestion + 1 < questions.length) {
  //     dispatch({
  //       type: SET_CURRENT_QUESTION,
  //       currentQuestion: currentQuestion + 1,
  //     });
  //     return;
  //   }

  //   dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  // };

  return (
    <div className="free-test">
      <TestNavbar />
      <Row className="test-part">
        <Col xs={1}>
          <Image src="/assets/back-button.png" className="back-button" />
        </Col>
        <Col xs={9} lg={10}>
          <Image
            src={question.image}
            className="image-situation rounded mx-1"
          />
        </Col>
        <Col xs={1}>
          <Image src="/assets/next-button.png" className="next-button" />
        </Col>
      </Row>
      <Row className="m-2 p-1 situation" xs={8}>
        <h3>{question.situation}</h3>
        {/* {renderError()} */}
      </Row>
      <Row>
        <Col className="questions m-2" xs={9}>
          <h4>{question.question1}</h4>
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check
            className="mr-5"
            type="checkbox"
            label="Yes"
            onClick={() => console.log("hi")}
          />
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check type="checkbox" label="No" onClick={() => alert("no")} />
        </Col>
      </Row>
      <Row>
        <Col xs={9} className="questions">
          <h4>{question.question2}</h4>
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check
            className="mr-5"
            type="checkbox"
            label="Yes"
            onClick={() => console.log("hi")}
          />
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check type="checkbox" label="No" onClick={() => alert("no")} />
        </Col>
      </Row>
      <Row>
        <Col xs={9} className="questions">
          <h4>{question.question3}</h4>
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check
            className="mr-5"
            type="checkbox"
            label="Yes"
            onClick={() => console.log("hi")}
          />
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check type="checkbox" label="No" onClick={() => alert("no")} />
        </Col>
      </Row>
      <Row>
        <Col xs={9} className="questions">
          <h4>{question.question4}</h4>
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check
            className="mr-5"
            type="checkbox"
            label="Yes"
            onClick={() => console.log("hi")}
          />
        </Col>
        <Col className="check-box" xs={1}>
          <Form.Check type="checkbox" label="No" onClick={() => alert("no")} />
        </Col>
      </Row>
    </div>
  );
};

export default FreeTest;
