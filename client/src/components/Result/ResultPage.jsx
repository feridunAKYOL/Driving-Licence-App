import React, { useEffect, useState } from 'react';

const ResultPage = () => {
	const [ results, setResults ] = useState([]);
	const userAnswer = JSON.parse(window.localStorage.getItem('userAnswer'));

	console.log(userAnswer);
	useEffect(() => {
		// const fetchResult = () => {
		// 	return fetch(`/api/tests/result/'equipment',{
    //       method : 'POST' , 
    //       body : JSON.stringify(${userAnswer})
    //     }`)
		// 		.then((res) => res.json())
		// 		.then((data) => data);
    // };
    const request_result = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userAnswer)
    }
    fetch(`/api/tests/result/'equipment'` , request_result )
      .then(response => response.json())
      .then(data => setResults(data));

		// console.log(fetchResult());
		// fetchResult().then((gettingResult) => {
		// 	setResults(gettingResult);
		// });
	}, [userAnswer]);

	return (
		<div>
			<h2>Result</h2>
			<p>{results[1]}</p>
			{/* <ul>{results.map((result) => <li key={userAnswer.questionId}> {result} </li>)}</ul> */}
		</div>
	);
};
export default ResultPage;
