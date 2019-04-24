var express = require('express');
const auth = require('../auth/authenticate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const Company = require('../models/companySchema');
const mongoose =require('mongoose');

module.exports.registerUser = (req,res,next) => {
    console.log("registration job provider user: "+req.body)
    Company.findOne({ UIN : req.body.UIN })
    .populate('jobs')
    .then( (user) => {
            if(user) {
                    console.log("existing user: " +user)
                    res.json({ 
                        success : false,
                        message : 'User already exists'
                    });
            }
            else {
                    newUser = Company(req.body);
                    newUser.save()
                    .then((user) => {
                        console.log("user created " +user);
                        res.json({ success : true, message : 'User created!', data : user });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(404);
                        res.json({
                             success : false,
                              message : err.message,
                        }); 
                    });
            }
    })
    .catch((err) => {
            console.log(err);
            res.json({
                 success : false,
                  message : err.message,
                  data:null
            }); 
    });
}

module.exports.loginUser = (req, res, next) => {
    Company.findOne({ UID : req.body.UID })
  //  .populate('jobs')
    .then((user) => {
        if(user){
                console.log("user exists" +user)
                console.log("database password: "+user.password);
                console.log("input password: "+req.body.password);
                if(bcrypt.compareSync(req.body.password,user.password))
                {
                    let token = jwt.sign({id: user._id},
                        config.secret,
                        { expiresIn: '1h' // expires in 1 hours
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
                message: 'Incorrect username or password'
            });

        }
    })
    .catch((err) => {
        console.log(err);
        res.json({
             success : false,
              message : err.message,
        }); 
    });
}


module.exports.getProfile = (req, res, next) => {
    Company.findById(req.user.id)
   // .populate('jobs')
        .then( user => {
            console.log(user);
            res.json({
                success: true,
                message: 'Got Profile',
                data : user
            });
        
        })
        .catch((err) => {
            console.log(err);
            res.status(400);
            res.json({
                 success : false,
                  message : err.message,
            }); 
        })

}

module.exports.updateProfile = (req, res, next) => {
    Company.findOneAndUpdate({_id:req.user.id},req.body,{new:true})
    .populate('jobs')
    .then( user => {
            res.json({
                success: true,
                message: 'Profile Updated Succedfully',
                user : user
            });
        
    })
    .catch((err) => {
        res.status(400);
        res.json({
             success : false,
              message : err.message,
        }); 
    })
}


module.exports.getDistinct = (req, res, next) => {
    console.log(req.params.distinctField);
    Company.distinct(req.params.distinctField)
    .then( distinctFieldValues => {
        console.log("locations: "+locations );
            res.json({
                success: true,
                message: 'Profile Updated Succedfully',
                data :  distinctFieldValues
            });
        
    })
    .catch((err) => {
        res.status(400);
        res.json({
             success : false,
              message : err.message,
        }); 
    })

}

