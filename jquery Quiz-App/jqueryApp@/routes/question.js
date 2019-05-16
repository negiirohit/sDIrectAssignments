var express = require('express');
var router = express.Router();
const questionController = require('../controllers/questionController'); 


router.get('/question/:qno',questionController.getQuestion);
router.get('/count', questionController.getQuestionCount);

module.exports = router;
