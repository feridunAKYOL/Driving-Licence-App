const db = require('../db-connection');

const controllers = {
	get: (req, res) => {
		res.send('your route is working!');
	},
	// First response for the beginning.
	getFreeTest: (req, res) => {
		const sql = `
                    SELECT t.title, s.image, s.audio, s.text, q.audio as qaudio, q.text as qtext  
                    FROM test as t
                        LEFT JOIN situation as s on t.testId = s.testId
                        LEFT JOIN question as q on s.situationId = q.situationId
                        WHERE t.title = 'equipment'`;

		db.all(sql, (err, rows) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}

			res.json(rows);
		});
	},
	getTest: (req, res) => {
		const testName = req.params.testName;
		const sql = `SELECT s.image FROM test t
          LEFT JOIN situation s
          on t.testId = s.testId
          WHERE t.title = ${testName}`;

		db.all(sql, (err, rows) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}
			res.json(rows);
		});
	},

	getSituation: (req, res) => {
		const testName = req.params.testName;
		const situation = req.params.situation;
		const sql = `SELECT t.duration , s.text as 'situation', s.image, s.audio as 'situationAudio' FROM situation s
                  LEFT JOIN test t
                  on t.testId = s.testId
                  WHERE t.title = ${testName} AND s.sequence = ${situation}`;

		db.all(sql, (err, rows) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}
			res.json(rows);
		});
	},

	getQuestion: (req, res) => {
		const testName = req.params.testName;
		const situation = req.params.situation;
		const sql = `SELECT q.text , q.audio , q.explanation , o.text FROM question q
                LEFT JOIN situation s
                on q.situationId = s.situationId
                LEFT JOIN test t
                on t.testId = s.testId
                LEFT JOIN option o
                on o.optionId = q.correctOption
                WHERE t.title = ${testName} AND s.sequence = ${situation}
                ORDER by q.questionId ASC`;

		db.all(sql, (err, rows) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}
			res.json(rows);
		});
	},

	getAnswer: (req, res) => {
		debugger;
		const testName = req.params.testName;
		const userAnswer = req.body.userAnswer;
		let order = 0;
		const sql = `SELECT q.correctOption , s.situationId FROM question q
                LEFT JOIN situation s
                on s.situationId = q.situationId
                LEFT JOIN test t
                on t.testId = s.testId
                WHERE t.title = ${testName}
                order by q.questionId ASC`;

		db.all(sql, (err, rows) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}
			let testLength = 0;
			rows.forEach(el => el.situationId > testLength ? testLength = el.situationId : testLength);
			const result = Array(testLength).fill(null);
			for (let i = 1; i <= testLength; i++) {
				let answers = rows.filter((question) => Number(question.situationId) === i);
					if (userAnswer.length>=answers.length){
					let isCorr = true;
					answers.map((answer) => {
						
						if(answer.correctOption === Number(userAnswer[order])){
							isCorr = isCorr && true;
							order;
						} else{
							isCorr = false;
							order+=1 ;
						} 
					})
					result[i-1] = isCorr;
					answers.forEach(el=> userAnswer.shift())
				}
			};
			res.json(result);
		});
	}
};

module.exports = controllers;
