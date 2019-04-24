
var express = require('express');
var Product = require('../models/product');

module.exports.getProducts =(req, res, next) => {
    Product.find({}).
    then((formdata) => {
      res.statusCode = 200;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(formdata);
  }, (err) => next(err))
  }








  module.exports.createProducts = (req, res, next) => {
    
                   Product.create(req.body).
                   then((products) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        console.log("products : " +products);
                        res.json(products);
                     },err => {
                        res.statusCode = 404;
                        res.setHeader('Content-Type', 'application/json');
                        console.log(err)
                        res.json({msg: err});
                      })
             
         }

    module.exports.removeProduct = (req, res, next) => {
            
                           Product.findOneAndDelete({'SKU':req.params.SKU}).
                           then((product) => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                console.log("product Removed : " +product);
                                res.json(product);
                             },err => {
                                res.statusCode = 404;
                                res.setHeader('Content-Type', 'application/json');
                                console.log(err)
                                res.json({msg: err});
                              })
                     
    }
    

    module.exports.updateProduct =(req, res, next) => {
      console.log("controller");
       Product.findOneAndUpdate({'SKU':req.params.SKU},req.body).
       then((product) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            console.log("product updated : " +product);
            res.json(product);
         },err => {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            console.log(err)
            res.json({msg: err});
          })
    }
