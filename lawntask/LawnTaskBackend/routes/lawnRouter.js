var express = require('express');
var router = express.Router();
const User = require('../models/user');
const lawnController = require('../controllers/lawnController');
const auth = require('../auth/authenticate')

router.post('/addLawn',auth.verifyToken,lawnController.createLawn);
router.get('/getUserLawns',auth.verifyToken,lawnController.getLawns );
router.get('/getLawnDetails/:_id',auth.verifyToken,lawnController.getLawnDetail)

module.exports = router;