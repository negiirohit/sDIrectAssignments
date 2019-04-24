var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../auth/authenticate')

router.post('/register',companyController.registerUser );
router.post('/login',companyController.loginUser );
router.post('/updateProfile',auth.verifyToken,companyController.updateProfile);
router.get('/getCompanyProfile',auth.verifyToken,companyController.getProfile);
router.get('/getDistinct/:distinctField',companyController.getDistinct);

module.exports = router;