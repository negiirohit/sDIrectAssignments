var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
/* GET users listing. */
var authenticate = require('../authenticate')

router.get('/', function(req, res, next) {
    User.find({}).
    then((allUsers) => {
        res.statusCode = 200;
        console.log(allUsers);
        res.render('userList',{ users:allUsers });
    }, (err) => next(err))
})


router.post('/login',passport.authenticate('local'),(req,res,next) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.cookie('jwt',token); 
    res.json({success: true, status: 'Login Successful!', token: token});
    // console.log("inside login");
    // passport.authenticate('local',(err, user, info)=> {
    //     if(err){
    //         console.log("inside login 1");
    //         console.log(err);
    //         return next(err);
    //     }
    //     else if(!user) {
    //         console.log("inside login2");
            
    //         console.log(user);
    //         res.statusCode = 401;
    //         res.setHeader('Content-Type', 'application/json');
    //         res.json({success: false, status: 'Login Unsuccessful!1111', err: info});
    //     }
    //     else{
    //         console.log("inside login3");
            
    //         req.logIn(user, (err) => {
    //             console.log("inside login 3.1");
                
    //             if (err) {          
    //                 console.log("inside login 4");
                    
    //                 return next(err);
    //             }
    //             console.log("inside login 5");
                
    //             var token = authenticate.getToken({_id: req.user._id});
    //             res.statusCode = 200;
    //             res.setHeader('Content-Type', 'application/json');
    //             res.cookie('jwt',token); 
    //             res.json({success: true, status: 'Login Successful!', token: token});

    //         });

    //     }
    // })
})    
//  Sign Up without using Passport and Password
//   router.post('/register', (req, res, next) => {
//         User.findOne({email : req.body.email}).
//         then((user) => {
//             if(user==null){
//                 User.create(req.body).
//                 then((user) => {
//                      res.statusCode = 200;
//                     res.setHeader('Content-Type', 'application/json');
//                     console.log("User created");
//                     res.json(user);
//                   },err => {
//                     res.statusCode = 404;
//                     res.setHeader('Content-Type', 'application/json');
//                     res.json({msg: err});
//                    })
//             }
//             else{
//               res.statusCode = 409;
//               res.setHeader('Content-Type', 'application/json');
//               console.log("User already exists");
//               res.json({msg: "User already exists"});
//             }
//         },err => {
// 	          res.statusCode = 404;
//               res.setHeader('Content-Type', 'application/json');
//               res.json({msg: err});
// 		})


//Logout by destroying cookie

    
    


    router.post('/register', (req,res,next) => {
            User.register(new User({ 
               username: req.body.username,
               email: req.body.email,
               firstName: req.body.firstName, lastName : req.body.lastName ,
               DOB :req.body.DOB, gender:req.body.gender 
               }),req.body.password, (err, user) => {

                    if(err) {
                        console.log(err);
                        res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                        res.json({err: err});
            }
            
                    else {
                    
                        user.save((err, user) => {
                            if (err) {
                                console.log(err);
                                res.statusCode = 500;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({err: err});
                                return ;
            }
        
                            passport.authenticate('local')(req, res, () => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                console.log(user.username);
                                res.json({success: true, status: 'Registration Successful!'});
                            });
        
                        });
                    }
                }
            );

    });
    
    

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
    router.get('/logout',(req,res,next) => {
        res.clearCookie('jwt');
        res.json({msg: "Logged Out"})
    })




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
        res.render('userDetails',{user:user});
    }, (err) =>{ 
        console.log(err);
        next(err)
         }  );
})




module.exports = router;
