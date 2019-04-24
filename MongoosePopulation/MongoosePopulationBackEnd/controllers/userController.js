
var express = require('express');
var User = require('../models/User');
var Post = require('../models/Post');
var BlogPost = require('../models/BlogPost');
// .populate({ 
//   path: 'pages',
//   populate: {
//     path: 'components',
//     model: 'Component'
  


module.exports.getUsers = (req, res, next) => {
    User.find({})
   // .populate({path:'friends'})
    // .populate({path:'post',
    //       populate :{
    //         path:'Author'
    //       }
    // })
   .deepPopulate('friends.friends.friends.friends')
    .then((users) => {
      res.json(users);
    }).catch((err) => {
      res.json({ err : err.message });
    })
  }

  module.exports.createUser = (req, res, next) => {
    User.create(req.body)
    .then((users) => {
      console.log("get users")
      res.statusCode = 200;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
  })
  .catch((err) =>{
    res.json(err)
  })
  }


  module.exports.createPost = (req, res, next) => {
    Post.create(req.body)
    .then((post) => {
      console.log("get users")
      res.statusCode = 200;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(post);
  })
  .catch((err) =>{
    res.json(err)
  })
}

  module.exports.createBlogPost = (req, res, next) => {
    BlogPost.create(req.body)
    .then((post) => {
      console.log("get users")
      res.statusCode = 200;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(post);
  })
  .catch((err) =>{
    res.json(err)
  })
  }






// [
//   {"friends":[
//           {"friends":["5ca6ccf0aa488418c2d16cac","5ca6ccf0aa488418c2d16cac"],
//           "post":["5ca6c9cfa8f885158fba24f5","5ca6c9cfa8f885158fba24f5"],
//           "_id":"5ca6ccf0aa488418c2d16cac",
//             "username":"Rohit","onPost":"Post","onFriend":"User",
//             "createdAt":"2019-04-05T03:35:12.499Z",
//             "updatedAt":"2019-04-05T03:35:12.499Z","__v":0
//           },
//           {"friends":["5ca6ccf0aa488418c2d16cac","5ca6ccf0aa488418c2d16cac"],
//           "post":["5ca6c9cfa8f885158fba24f5","5ca6c9cfa8f885158fba24f5"],
//           "_id":"5ca6ccf0aa488418c2d16cac",
//           "username":"Rohit","onPost":"Post","onFriend":"User",
//           "createdAt":"2019-04-05T03:35:12.499Z",
//           "updatedAt":"2019-04-05T03:35:12.499Z","__v":0}
//         ],
//   "post":[
//          {"_id":"5ca6c9cfa8f885158fba24f5",
//           "Author":null,"content":"from Post","__v":0
//          },
//          {"_id":"5ca6c9cfa8f885158fba24f5",
//           "Author":null,"content":"from Post","__v":0}
//         ],"_id":"5ca6ccf0aa488418c2d16cac",
//         "username":"Rohit",
//         "onPost":"Post",
//         "onFriend":"User",
//         "createdAt":"2019-04-05T03:35:12.499Z",
//         "updatedAt":"2019-04-05T03:35:12.499Z",
//         "__v":0}]