var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../auth/authenticate')

/**
 * @swagger
 * /api/puppies/{id}:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single puppy
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */

/**
 * @swagger
 * /puppies:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.post('/puppies',userController.register);

/*
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
*/
/*
router.post('/login',userController.login);
router.post('/register',userController.register);
router.get('/getTweets',auth.verifyToken,userController.getTweets);
router.get('/getMentions',auth.verifyToken,userController.getMentions);
router.post('/createTweet',auth.verifyToken,userController.createTweet);
router.get('/findHandles/:handle',userController.findHandles);
router.get('/findAllHandles/',userController.findAllHandles);
router.get('/getProfile/:handle',userController.getProfile);
*/
//findAllHandles
module.exports = router;