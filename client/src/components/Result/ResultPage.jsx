import React, { useEffect, useState } from 'react';

const ResultPage = () => {
	const [ results, setResults ] = useState([]);
	const userAnswer = JSON.parse(window.localStorage.getItem('userAnswer'));

	//console.log(userAnswer);
	useEffect(() => {
		const request_result = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({ "userAnswer" : userAnswer})
		};
		const fetchResult = () => {
			return fetch("/api/tests/result/'equipment'", request_result)
				.then((response) => response.json())
				.then((data) => data);
		};
		 console.log(fetchResult());
		fetchResult().then((el) => {
			setResults(el);
			console.log (results);
			console.log (userAnswer);
		});
	}, []);

	return (
		<div>
			<h2>Result</h2>
			<ul>
				{results.map((result, id) => 
					<li key={id} >{ result.result ? "dogru" : "yanlis"} </li>
				)}
				</ul>
		</div>
	);
};
export default ResultPage;
