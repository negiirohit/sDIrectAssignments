var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var Post = require('../models/post');
const postController = require('../controllers/postController');

/* GET product listing. */

//Using Pagination
router.get('/getPostsPagination/:page_no/:page_limit',postController.getPosts)


module.exports = router;
