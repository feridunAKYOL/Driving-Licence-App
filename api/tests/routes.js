const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('This is only for test!');
});

module.exports = app;


