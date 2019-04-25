var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../auth/authenticate')

router.post('/register',companyController.registerUser );
router.post('/login',companyController.loginUser );
router.post('/updateProfile',auth.verifyToken,companyController.updateProfile);
router.get('/getCompanyProfile',auth.verifyToken,companyController.getProfile);
router.get('/getDistinct/:distinctField',companyController.getDistinct);
router.get('/getCompanies/:field/:value/:page_no/:page_limit',companyController.getCompanies);
router.get('/getCompanyDetail/:company_id',companyController.getCompanyDetail);
router.get('/getJobDetail/:job_id',companyController.getJobDetail);

module.exports = router;