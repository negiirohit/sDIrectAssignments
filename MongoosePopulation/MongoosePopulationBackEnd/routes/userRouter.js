var express = require('express');
var router = express.Router();
var Product = require('../models/User');
const userController = require('../controllers/userController');

router.get('/', userController.getUsers );

router.post('/', userController.createUser );
router.post('/createPost', userController.createPost );
router.post('/createBlogPost', userController.createBlogPost );

module.exports = router;