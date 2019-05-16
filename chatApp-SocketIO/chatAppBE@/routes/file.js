var express = require('express');
var router = express.Router();
const fileController = require('../controllers/fileController');


router.post('/uploadImage',fileController.uploadImage);

module.exports = router;