
var express = require('express');
const Post = require('../models/post');



module.exports.getPosts = 
 (req, res, next) => {
    var page_limit = Number(req.params.page_limit)
    var skip_no    = (Number(req.params.page_no)-1)*page_limit
    Post.find({})
    .skip(skip_no)
    .limit(page_limit)
    .then((posts) => {
  
        Post.count({})
        .then(count=> {
          let data ={
              posts : posts,
              count : count
          }  
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            success: true,
            message: 'Post Found',
            data: data
        });
        } )
    }, (err) => next(err))
    .catch((err) => next(err));
  }