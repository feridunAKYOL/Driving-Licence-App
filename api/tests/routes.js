const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.get);
router.get('/test/freetest', controllers.getFreeTest);


module.exports = router;