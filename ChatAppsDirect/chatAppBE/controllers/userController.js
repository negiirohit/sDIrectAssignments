var express = require('express');
const auth = require('../auth/authenticate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const User = require('../models/user');
const Tweet = require('../models/tweet');

const mongoose =require('mongoose');

module.exports.register = (req,res,next) => {
    User.findOne({ handle : req.body.handle })
    .then( (user) => {
            if(user) {
                    console.log("user already exists: " +user)
                    //res.status(422);
                    res.json({ 
                        success : false,
                        message : 'User already exists',
                        data:null
                    });
            }
            else {
                    newUser = User(req.body);
                    
                    return( 
                        newUser.save()
                        .then((user) => {
                            res.status(200);                    
                            console.log("user created " +user);
                            res.json({ 
                                success : true, 
                                message : 'User created!',
                                data :{user : user }
                             })
                        })
                    
                    )
            }
                        
    })
    .catch((err) => {
        //res.status(500);
        res.json({
            success : false,
            message : err.message,
            data: null
        }); 
    });
}

module.exports.login = (req, res, next) => {
    console.log(req.body);
    User.findOne({ handle : req.body.handle })
    .then((user) => {

            if(user!=null){
                if(bcrypt.compareSync(req.body.password,user.password)){                    
                                    let token = jwt.sign({id: user._id,handle: user.handle},config.secret,{ expiresIn: '24h' });
                                    res.status(200);
                                    res.json({
                                        success: true,
                                        message: 'Authentication successful!',
                                        data : { token: token }
                                    });
                                } 
                    
            }
           // res.status(401);
            res.json({
            success: false,
            message: 'Incorrect username or password'
            });

      
    })
    .catch((err) => {
        //res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });
}



