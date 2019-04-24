
var express = require('express');
const auth = require('../auth/authenticate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
var User = require('../models/user');
const mongoose =require('mongoose');

module.exports.registerUser = (req,res,next) => {
    console.log("registration user: "+req.body)
    User.findOne({ email : req.body.email })
    .then( (user) => {
            if(user) {
                    console.log("existing user: " +user)
                    res.json({ 
                        success : false,
                        message : 'User already exists'
                    });
            }
            else {
                    newUser = User(req.body);
                    newUser.save()
                    .then((user) => {
                        console.log("user created " +user);
                        res.json({ success : true, message : 'User created!', data : user });
                    })
                    .catch((err) => {
                        res.json({
                             success : false,
                              message : err.message,
                        }); 
                    });
            }
    })
    .catch((err) => {
            res.json({
                 success : false,
                  message : err.message,
                  data:null
            }); 
    });
}

module.exports.loginUser = (req, res, next) => {
    User.findOne({ email : req.body.email })
    .then((user) => {
        console.log("user exists" +user)
        console.log("database password: "+user.password);
        console.log("input password: "+req.body.password);
        if(user){
                if(bcrypt.compareSync(req.body.password,user.password))
                {
                    let token = jwt.sign({id: user._id},
                        config.secret,
                        { expiresIn: '24h' // expires in 24 hours
                        }
                     );
                    // return the JWT token 
                    res.json({
                        success: true,
                        message: 'Authentication successful!',
                        token: token
                    });
                } 
                else {
                    res.json({
                        success: false,
                        message: 'Incorrect username or password'
                    });
                }


        }
        else {
                res.json({
                success: false,
                message: 'Authentication failed! Please check the request'
              });

        }
    })
    .catch((err) => {
        res.json({
             success : false,
              message : err.message,
        }); 
    });
}


module.exports.getUserLawns = (req, res, next) => {
    console.log("getting lawns");

    User.aggregate([
        {
            $match : { '_id' : mongoose.Types.ObjectId(req.user.id) }
        },
        {
            $lookup : {
                from : 'rnlawns',
                localField : '_id',
                foreignField : 'user_id',
                as : 'Userlawns'
            }
        },
        {
            $project: {Userlawns : 1, _id :0}
        }
    ])
    .then( (lawn)=> {
        var userLawns = lawn[0].Userlawns
        console.log("user lawns "+JSON.stringify(userLawns))
        res.json({
            success: true,
            message: 'lawn found',
            lawn: userLawns
        });
    })
    .catch((err) => {
        console.log(err);
        res.json({
             success : false,
              message : err.message,
        }); 
    });

}

