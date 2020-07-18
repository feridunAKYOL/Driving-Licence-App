const db = require('../db-connection');

const controllers = {
    get: (req, res) => {
        res.send('your route is working!');
    },
    // First response for the beginning.
    getFreeTest: (req, res) => {

        const sql = `
                    SELECT t.title, s.image, s.audio, s.text, q.audio, q.text  
                    FROM test as t
                        LEFT JOIN situation as s on t.testId = s.testId
                        LEFT JOIN question as q on s.situationId = q.situationId
                        WHERE t.title = 'equipment'`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(rows)
        });
    }
}

module.exports = controllers;
