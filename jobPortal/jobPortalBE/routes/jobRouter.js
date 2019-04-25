var express = require('express');
var router = express.Router();
const jobController = require('../controllers/jobController');
const auth = require('../auth/authenticate')


router.post('/createJob',auth.verifyToken,jobController.createJob);
//Using Pagination
router.get('/getAllJobs/:page_no/:page_limit',jobController.getAllJobs);
router.get('/getDistinct/:distinctField',jobController.getDistinct);
router.get('/getJobs/:field/:value/:page_no/:page_limit',jobController.getJobs);
router.post('/apply',auth.verifyToken,jobController.applyForJob);

router.get('/getJobDetail/:job_id',jobController.getJobDetail);
router.post('/approveUser',jobController.approveApplicant);

//post<any>(baseURL+'/jobs/approveUser/',approveDetails);

module.exports = router;