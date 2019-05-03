var express = require('express');
var router = express.Router();
const User = require('../models/user');
const lawnController = require('../controllers/lawnController');
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
 * definitions:
 *   Lawn:
 *     properties:
 *       street:
 *         type: string
 *       city:
 *         type: string
 *       state:
 *         type: integer
 *       country:
 *         type: string
 *       geometry:
 *          type: location
 */
/**
 * @swagger
 * securitySchemes:
 *   bearerAuth:            # arbitrary name for the security scheme
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT  
 * /lawns/getUserLawn:
 *   get:
 *     tags:
 *       - get user lawns
 *     description: Returns all userlawns
 *     security:
 *     - bearerAuth: []     
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of user lawns
 *         schema:
 *           $ref:'#/definitions/Lawn'
 *   
 */
router.get('/getUserLawns',auth.verifyToken,lawnController.getLawns );
/**
 * @swagger
 * definitions:
 *   Lawn:
 *     properties:
 *       street:
 *         type: string
 *       city:
 *         type: string
 *       state:
 *         type: integer
 *       country:
 *         type: string
 *       geometry:
 *          type: string
 */
/**
 * @swagger
 * /lawns/addLawn:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     tags:
 *        - adding lawns
 *     description: adding a new lawn to user lawns
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Lawn
 *         description: Lawn Object
 *         in: body
 *         required: true
 *         schema:
 *           $ref:'#/definitions/Lawn'
 * 
 *     responses:
 *       200:
 *         description: Successfully created
 *       400:
 *         description: Not Authorised
 */
router.post('/addLawn',auth.verifyToken,lawnController.createLawn);
/**
 * @swagger
 * definitions:
 *   Lawn:
 *     type: object
 *     properties:
 *       street:
 *         type: string
 *       city:
 *         type: string
 *       state:
 *         type: integer
 *       country:
 *         type: string
 *       geometry:
 *          type: location
 */
/**
 * @swagger
 * /lawns/getLawnDetails/{_id}:
 *   get:
 *     tags:
 *       - get Lawn Details
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         type: string
 *       - name: _id
 *         in: path
 *         required: true
 *         type: string
 *  
 *     description: get lawn details
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: newly created lawn
 *       400:
 *         description: Not Authorised
 */
router.get('/getLawnDetails/:_id',auth.verifyToken,lawnController.getLawnDetail)

module.exports = router;


