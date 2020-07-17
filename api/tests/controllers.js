const db = require('../db-connection');

const controllers = {
    get: (req, res) => {
        res.send('your route is working!');
    },
    // First response for the beginning.
    getFreeTest: (req, res) => {

        const sql = `SELECT * FROM test`;

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
