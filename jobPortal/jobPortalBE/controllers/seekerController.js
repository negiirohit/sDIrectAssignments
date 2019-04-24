var express = require('express');
const auth = require('../auth/authenticate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const jobSeeker = require('../models/jobSeeker');
const mongoose =require('mongoose');

module.exports.registerUser = (req,res,next) => {
    console.log("registration job seeker user: "+req.body)
    jobSeeker.findOne({ email : req.body.email })
    .then( (user) => {
            if(user) {
                    console.log("existing user: " +user)
                    res.json({ 
                        success : false,
                        message : 'User already exists'
                    });
            }
            else {
                    newUser = jobSeeker(req.body);
                    newUser.save()
                    .then((user) => {
                        console.log("user created " +user);
                        res.json({ success : true, message : 'User created!', data : user });
                    })
                    .catch((err) => {
                        console.log(err);
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
    console.log('login User')
    jobSeekerUser.findOne({ email : req.body.email })
    .then((user) => {
        console.log("user exists" +user)
        console.log("database password: "+user.password);
        console.log("input password: "+req.body.password);
        if(user){
                if(bcrypt.compareSync(req.body.password,user.password))
                {
                    let token = jwt.sign({id: user._id},
                        config.secret,
                        { 
                            expiresIn: '1h' // expires in 1 hours
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
                    res.status(400);
                    res.json({
                        success: false,
                        message: 'Incorrect username or password'
                    });
                }


        }
        else {
                res.status(401);
                res.json({
                success: false,
                message: 'Authentication failed! Please check the request'
              });

        }
    })
    .catch((err) => {
        res.status(400);
        res.json({
             success : false,
              message : err.message,
        }); 
    });
}


module.exports.updateProfile = (req, res, next) => {
    jobSeeker.findOneAndUpdate({_id:req.user.id},{profile:req.body},{new:true})
    .then( user => {
            res.json({
                success: true,
                message: 'Profile Updated Succedfully',
                data : user
            });
        
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.json({
             success : false,
              message : err.message
        }); 
    })
}


