var express = require('express');
var router = express.Router();
var Product = require('../models/product');
const productController = require('../controllers/productController');

/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       SKU:
 *         type: string
 *       name:
 *         type: string
 *       quantity:
 *         type: integer

 */

/**
 * @swagger
 * /product:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns all Products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Products
 *         schema:
 *           $ref:'#/definitions/Product'
 */
router.get('/product', productController.getProducts );


// router.post('/', productController.createProducts );


router.delete('/remove/:SKU',productController.removeProduct);

//router.put('/update/:SKU',productController.updateProduct);
router.put('/update/:SKU',productController.updateProduct);
module.exports = router;