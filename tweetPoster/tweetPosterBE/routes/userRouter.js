var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../auth/authenticate')

router.post('/login',userController.login);
router.post('/register',userController.register);
router.get('/getTweets',auth.verifyToken,userController.getTweets);
router.get('/getMentions',auth.verifyToken,userController.getMentions);
router.post('/createTweet',auth.verifyToken,userController.createTweet);

router.get('/findHandles/:handle',userController.findHandles);
module.exports = router;