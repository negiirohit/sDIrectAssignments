var express = require('express');
const bodyParser = require('body-parser');
var passport = require('passport');
var router = express.Router();
var Product = require('../models/product');
var authenticate = require('../authenticate')
/* GET users listing. */

router.get('/',(req, res, next) => {
  Product.find({})
  .then((products) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(products);
  }, (err) => next(err))
  .catch((err) => next(err));
})


//Using Pagination
router.get('/pagination/:page_no/:page_limit',(req, res, next) => {
  var page_limit = Number(req.params.page_limit)
  var skip_no    = (Number(req.params.page_no)-1)*page_limit
  Product.find({})
  .skip(skip_no)
  .limit(page_limit)
  .then((products) => {

      Product.count({})
      .then(count=> {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({count: count, products:products});
      } )
  }, (err) => next(err))
  .catch((err) => next(err));
})




router.post('/',(req, res, next) => {
  Product.create(req.body)
  .then((product) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(product);
  }, (err) => next(err))
  .catch((err) => next(err));
})


//Get all Featured Products
router.get('/featured',(req, res, next) => {
  Product.find({featured:true})
  .then((products) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(products);
  }, (err) => next(err))
  .catch((err) => next(err));
})


//Using Pagination
router.get('/featured/pagination/:page_no/:page_limit',(req, res, next) => {
  var page_limit = Number(req.params.page_limit)
  var skip_no    = (Number(req.params.page_no)-1)*page_limit
  Product.find({featured: true})
  .skip(skip_no)
  .limit(page_limit)
  .then((products) => {

      Product.count({})
      .then(count=> {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({count: count, products:products});
      } )
  }, (err) => next(err))
  .catch((err) => next(err));
})



module.exports = router;
