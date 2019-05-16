var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../auth/authenticate')
const bodyParser = require('body-parser');


/**
 * @swagger 
 * components:
 * securitySchemes:
 *   bearerAuth:            # arbitrary name for the security scheme
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT  
 * 
 * 
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: email
 *       paswword:
 *         type: password
 *  
 */     
/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - user
 *     description: login user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user login
 *         in: body
 *         required: true
 *         schema:
 *           $ref:'#/definitions/User'
 *     responses:
 *       200:
 *         description: Login succesfully
 *       401:
 *         description: User not found
 *       403:
 *         description: Username and password don't match
 */
router.post('/login',bodyParser.json(),userController.login);

/**
 * @swagger
 * /users/register:
 *   post:
 *     tags:
 *       - user
 *     description: register user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user resgistration
 *         in: body
 *         required: true
 *         schema:
 *           $ref:'#/definitions/User'
 *     responses:
 *       200:
 *         description:  succesfully
 *      
 */
router.post('/register',bodyParser.json(),userController.register);

/**
 * @swagger
 * /users/getUsers/:
 *   get:
 *     tags:
 *       - get all Users 
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         type: string
 *     description: get all users except requesting users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: fetched all users
 *       400:
 *         description: Not Authorised
 */
router.get('/getUsers',bodyParser.json(),auth.verifyToken,userController.getUsers);


/**
 * @swagger
 * /users/isonline/{id}:
 *   get:
 *     tags:
 *       - check if user is online or not 
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         type: string
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *  
 *     description: get the status of user i.e, online or ofline
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: checked user
 *       400:
 *         description: Not Authorised
 */
router.get('/isOnline/:id',bodyParser.json(),auth.verifyToken,userController.checkUserOnline);

module.exports = router;


