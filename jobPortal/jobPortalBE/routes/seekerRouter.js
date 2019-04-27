var express = require('express');
var router = express.Router();
const seekerController = require('../controllers/seekerController');
const auth = require('../auth/authenticate')

router.post('/register',seekerController.registerUser );
router.post('/login',seekerController.loginUser );
router.post('/updateProfile',auth.verifyToken,seekerController.updateProfile);
router.get('/getProfile',auth.verifyToken,seekerController.getProfile);
router.post('/removeApplication',auth.verifyToken,seekerController.removeApplication)



module.exports = router;