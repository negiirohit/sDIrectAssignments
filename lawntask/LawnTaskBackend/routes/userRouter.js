var express = require('express');
var router = express.Router();
const User = require('../models/user');
const userController = require('../controllers/userController');
const auth = require('../auth/authenticate')

router.post('/register',userController.registerUser );
router.post('/login',userController.loginUser );
router.get('/getUserLawns',auth.verifyToken,userController.getUserLawns);

module.exports = router;