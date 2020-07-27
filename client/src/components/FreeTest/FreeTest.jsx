import React, { useEffect, useState } from 'react';
import { Image, Form, Row, Col } from 'react-bootstrap';
import './FreeTest.css';
import TestNavbar from './TestNavbar';

const question = {
	totalNumber: 10,
	image: '/assets/drivingTestTips.jpg',
	situation:
		'You are driving at 80 km/h, outside a built-up area. The lorry, in front of you, is driving 70km/h. There is a free rear view. What will you do?',
	question1: 'I speed up to 90 km/h and overtake the lorry, straight away?',
	question2: 'I continue at the same speed of 80 km/h and overtake the lorry, straight away?',
	question3: 'I slow down and wait a bit to overtake the lorry?',
	question4: 'I stop?'
};

const FreeTest = () => {
	const [ situationNumber, setSituationNumber ] = useState(1);
	const [ situation, setSituation ] = useState([]);
	const [ questions, setQuestions ] = useState([]);
	const [ userAnswer, setUserAnswer ] = useState([]);

	const getAnswer = (idx, answerNo) => {
		if (typeof Storage !== 'undefined') {
			//Code for localStorage/sessionStorage.
			if (localStorage.userAnswer) {
				let answer_in_storage = JSON.parse(window.localStorage.getItem('userAnswer'));
				setUserAnswer(answer_in_storage);
				let isAnswered_before = userAnswer.filter((el) => el.questionId === idx);
				if (isAnswered_before.length === 0) {
					let usr_answer = userAnswer.slice();
					usr_answer.push({ questionId: idx, answer: answerNo, situationId: situationNumber });
					setUserAnswer(usr_answer);
					window.localStorage.setItem('userAnswer', JSON.stringify(userAnswer));
				} else {
					let usr_answer = userAnswer.slice();
					let changedAnswer = usr_answer.filter((el) => el.questionId !== idx);
					changedAnswer.push({ questionId: idx, answer: answerNo, situationId: situationNumber });
					setUserAnswer(changedAnswer);
					window.localStorage.setItem('userAnswer', JSON.stringify(userAnswer));
				}
				console.log(userAnswer);
			} else {
				localStorage.userAnswer = JSON.stringify([
					{ questionId: idx, answer: answerNo, situationId: situationNumber }
				]);
			}
		} else {
			//Sorry! No Web Storage support..
			alert('Sorry! No Web Storage support..');
		}
	};

	useEffect(
		() => {
			const fetchSituation = () => {
				return fetch(`/api/tests/'equipment'/${situationNumber}`)
					.then((res) => res.json())
					.then((data) => data);
			};
			//console.log(fetchSituation());
			fetchSituation().then((gettingData) => {
				setSituation(gettingData);
			});

			const fetchQuestion = () => {
				return fetch(`/api/tests/question/'equipment'/${situationNumber}`)
					.then((res) => res.json())
					.then((data) => data);
			};
			//console.log(fetchQuestion());
			fetchQuestion().then((gettingQuestion) => {
				setQuestions(gettingQuestion);
			});
		},
		[ situationNumber ]
	);

	return (
		<div className="free-test">
			<TestNavbar />
			<Row className="test-part">
				<Col xs={1}>
					<Image
						src="/assets/back-button.png"
						className="back-button"
						onClick={() => setSituationNumber(situationNumber - 1)}
					/>
				</Col>
				<Col xs={9} lg={10}>
					<Image src={question.image} className="image-situation rounded mx-1" />
				</Col>
				<Col xs={1}>
					<Image
						src="/assets/next-button.png"
						className="next-button"
						onClick={() => setSituationNumber(situationNumber + 1)}
					/>
				</Col>
			</Row>
			<Row className="m-2 p-1 situation" xs={8}>
				{situation.map((text, id) => <h3 key={id}>{text.situation}</h3>)}
				{/* {renderError()} */}
			</Row>

			{/* deneme ???? */}

			{questions.map((question) => (
				<Row key={question.questionId}>
					<Col className="questions m-2" xs={9} key={question.questionId}>
						<h4 key={question.questionId}>{question.text}</h4>
					</Col>
					<Col className="check-box" xs={1} key={question.questionId + 1}>
						<Form.Check
							key={question.questionId}
							className="mr-5"
							type="checkbox"
							label="Yes"
							onChange={() => getAnswer(question.questionId, 1)}
						/>
					</Col>
					<Col className="check-box" xs={1} key={question.questionId + 2}>
						<Form.Check
							key={question.questionId}
							type="checkbox"
							label="No"
							onChange={() => getAnswer(question.questionId, 2)}
						/>
					</Col>
				</Row>
			))}

			{/* <Row>
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
      </Row> */}
			<ul>
				{userAnswer.map((a) => (
					<li key={a.questionId}>
						{a.answer} {a.questionId}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FreeTest;
