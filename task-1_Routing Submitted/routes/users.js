var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({}).
    then((allUsers) => {
      res.statusCode = 200;
      console.log(allUsers);
      res.render('userList',{ users:allUsers });
  }, (err) => next(err))
  })


  router.post('/login', (req, res, next) => {



  })


  router.post('/register', (req, res, next) => {
        User.findOne({email : req.body.email}).
        then((user) => {
            if(user==null){
                User.create(req.body).
                then((user) => {
                     res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    console.log("User created");
                    res.json(user);
                  },err => {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({msg: err});
                   })
            }
            else{
              res.statusCode = 409;
              res.setHeader('Content-Type', 'application/json');
              console.log("User already exists");
              res.json({msg: "User already exists"});
            }
        },err => {
	          res.statusCode = 404;
              res.setHeader('Content-Type', 'application/json');
              res.json({msg: err});
		})

    
    
      })

    //   router.post('/register', (req, res, next) => {
    //     User.create(req.body).
    //     then((user) => {
    //       res.statusCode = 200;
    //       res.setHeader('Content-Type', 'application/json');
    //       console.log("User created");
    //       res.json(user);
    //     },err => {
    //         res.statusCode = 404;
    //         res.setHeader('Content-Type', 'application/json');
    //         res.json({msg: err});
    //   })
    // })




router.post('/update/:userid', (req, res, next ) => {
    User.findByIdAndUpdate(req.params.userid, req.body,{set:true})
            .then((user) => {
                console.log("User saved");
                console.log(user);
                res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.json(user);
            }, (err) => next(err));
      

})


router.get('/:userid',(req, res, next) => {
    console.log(req.params.userid);
    User.findById(req.params.userid)
    .then((user) => {
        console
        res.render('userDetails',{user:user});
    }, (err) =>{ 
        console.log(err);
        next(err)
         }  );
})




module.exports = router;
