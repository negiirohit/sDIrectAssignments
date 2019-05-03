var express = require('express');
var router = express.Router();
const User = require('../models/user');
const userController = require('../controllers/userController');
const auth = require('../auth/authenticate')


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
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: email
 *       paswword:
 *         type: password
 *       geometry:
 *          type: string
 *       contact:
 *          type: string
 *       address:
 *          type: string
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
router.post('/login',userController.loginUser );

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
router.post('/register',userController.registerUser );

//router.get('/getUserLawns',auth.verifyToken,userController.getUserLawns);

module.exports = router;