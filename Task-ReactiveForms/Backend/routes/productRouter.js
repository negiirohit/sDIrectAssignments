var express = require('express');
var router = express.Router();
var Product = require('../models/product');
const productController = require('../controllers/productController');

router.get('/', productController.getProducts );


router.post('/', productController.createProducts );


router.delete('/remove/:SKU',productController.removeProduct);

//router.put('/update/:SKU',productController.updateProduct);
router.put('/update/:SKU',productController.updateProduct);
module.exports = router;