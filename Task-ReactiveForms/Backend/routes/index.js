var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   msg:
 *    type: string
 */

/**
 * @swagger
 * /api/puppies:
 *   get:
 *     tags:
 *       - Home Page
 *     description: Returns Home Page
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Home Page
 *         schema:
 *           $ref: '#/definitions/msg'
 */

router.get('/', function(req, res, next) {
  res.statusCode(200);
  res.json({msg:'Swagger'})
});

module.exports = router;
