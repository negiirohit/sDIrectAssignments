var express = require('express');
var router = express.Router();
const chatController = require('../controllers/chatController');
router.get('/getChatMessages/:chatRoom',chatController.getChatMessgaes);
module.exports = router;
