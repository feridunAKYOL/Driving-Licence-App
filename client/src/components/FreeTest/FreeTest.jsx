import React , {useEffect , useState} from "react";
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
  // const [image, setImage] = useState([]);
  // const [situation, setSituation] = useState([]);
  // const [question1, setQuestion1] = useState([]);
  // const [question1, setQuestion2] = useState([]);
  // const [question1, setQuestion3] = useState([]);
  // const [question1, setQuestion4] = useState([]);
  const [situation, setSituation] = useState([])
  const [question, setQuestion] = useState([])
  

  useEffect(() => {
    let situationNumber = 12;
    const fetchSituation = () => {
      return fetch(`/api/tests/'equipment'/${situationNumber}`)
        .then(res => res.json())
        .then((data) => data)
    }
    console.log(fetchSituation());
    fetchSituation().then(gettingData =>{
      setSituation(gettingData)
    })
  
    const fetchQuestion = () => {
      return fetch(`/api/tests/'equipment'/${situationNumber}`)
        .then(res => res.json())
        .then((data) => data)
    }
    //console.log(fetchQuestion());
    fetchQuestion().then(gettingData =>{
      setQuestion(gettingData)
    })

  }, []);

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
        {situation.map(text => <h3>{text.situation}</h3>)}
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
